interface BubbleState {
    spriteIndex: number; // 普通图索引
    popIndex: number;    // 破裂图索引
    popped: boolean;     // 是否戳破
}
interface GameSaveData {
    popCount: number;
    bubbles: BubbleState[];
}



const { ccclass, property } = cc._decorator;

@ccclass
export default class BubbleGame extends cc.Component {

    @property(cc.Node)
    bubblePool: cc.Node = null; // 父节点，存放所有泡泡

    @property(cc.Prefab)
    bubblePrefab: cc.Prefab = null;

    @property([cc.SpriteFrame])
    bubbleSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    popSprites: cc.SpriteFrame[] = [];

    @property([cc.AudioClip])
    popSounds: cc.AudioClip[] = [];
    @property(cc.Label)
    popCountLabel: cc.Label = null; // 显示戳破数量

    @property(cc.AudioClip)
    applauseSound: cc.AudioClip = null; // 鼓掌音效

    private _popCount: number = 0; // 当前戳破数量

    private _bubbleWorldRects: cc.Rect[] = [];
    private _touched: boolean[] = [];
    private _changed: boolean[] = [];

    private rows: number = 13;//生成的泡泡行数


    onLoad() {
        cc.macro.ENABLE_MULTI_TOUCH = true;
        const loaded = this.loadGameState();
        if (!loaded) {
            this.generateBubbles();
        }
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouch, this);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouch, this);
    }

    generateBubbles() {
        const canvas = cc.find('Canvas').getComponent(cc.Canvas);
        const canvasHeight = canvas.node.height;
    
        const bubbleNode = this.bubblePrefab.data;
        const bubbleWidth = bubbleNode.width;
        const bubbleHeight = bubbleNode.height;
    
        const vGap = 4;         
        const bottomMargin = 122; 
    
        const bottomY = -canvasHeight/2 + bottomMargin + bubbleHeight/2;
    
        for (let i = 0; i < this.rows; i++) {
            let count = i % 2 === 0 ? 8 : 7;
            let leftMargin = i % 2 === 0 ? 62 : 114;
            let y = bottomY + i * (bubbleHeight + vGap);
    
            for (let j = 0; j < count; j++) {
                let bubble = cc.instantiate(this.bubblePrefab);
                bubble.parent = this.bubblePool;
    
                let x = leftMargin + bubbleWidth/2 + j * (bubbleWidth + 4);
                bubble.position = cc.v3(x, y);
    
                // 随机普通图
                let sp = bubble.getComponent(cc.Sprite);
                let randIndex = Math.floor(Math.random() * this.bubbleSprites.length);
                sp.spriteFrame = this.bubbleSprites[randIndex];
    
                bubble['popIndex'] = Math.floor(Math.random() * this.popSprites.length);
            }
        }
    
        const len = this.bubblePool.childrenCount;
        this._bubbleWorldRects = new Array(len);
        this._touched = new Array(len).fill(false);
        this._changed = new Array(len).fill(false);
    }
    
    

    onTouch(event: cc.Event.EventTouch) {
        const touches = event.getTouches();
        const count = this.bubblePool.childrenCount;

        for (let i = 0; i < count; i++) {
            this._touched[i] = false;
            this._bubbleWorldRects[i] = this.bubblePool.children[i].getBoundingBoxToWorld();
        }

        for (let t = 0; t < touches.length; t++) {
            const loc = touches[t].getLocation();
            for (let i = 0; i < count; i++) {
                if (!this._changed[i] && this._bubbleWorldRects[i].contains(loc)) {
                    this._touched[i] = true;
                }
            }
        }

        for (let i = 0; i < count; i++) {
            if (this._touched[i] && !this._changed[i]) {
                const node = this.bubblePool.children[i];
                const sp = node.getComponent(cc.Sprite);
                if (sp) {
                    sp.spriteFrame = this.popSprites[node['popIndex']];
                    this._changed[i] = true;

                    // 播放随机音效
                    let soundIndex = Math.floor(Math.random() * this.popSounds.length);
                    cc.audioEngine.playEffect(this.popSounds[soundIndex], false);
                    this._popCount++;
                    if (this.popCountLabel) {
                        this.popCountLabel.string = `${this._popCount}`;
                    }
                }
            }
        }
        this.saveGameState();
        if (this._popCount === this.bubblePool.childrenCount) {
            cc.audioEngine.playEffect(this.applauseSound, false);
            setTimeout(() => {
                this.resetGame();
                cc.sys.localStorage.removeItem('bubbleGameSave'); 
            }, this.applauseSound.duration * 1000); 
        }
        
    }
    resetGame() {
        // 删除所有泡泡
        this.bubblePool.removeAllChildren();
    
        // 重置计数
        this._popCount = 0;
        if (this.popCountLabel) this.popCountLabel.string = '0';
    
        this.generateBubbles();
    }
    saveGameState() {
        const bubbles: BubbleState[] = this.bubblePool.children.map((node, i) => {
            return {
                spriteIndex: this.bubbleSprites.indexOf(node.getComponent(cc.Sprite).spriteFrame),
                popIndex: node['popIndex'],
                popped: this._changed[i],
            };
        });
    
        const saveData: GameSaveData = {
            popCount: this._popCount,
            bubbles: bubbles,
        };
    
        cc.sys.localStorage.setItem('bubbleGameSave', JSON.stringify(saveData));
    }
    loadGameState() {
        const dataStr = cc.sys.localStorage.getItem('bubbleGameSave');
        if (!dataStr) return false;
    
        const saveData: GameSaveData = JSON.parse(dataStr);
        if (!saveData || !saveData.bubbles) return false;
    
        this._popCount = saveData.popCount;
        if (this.popCountLabel) this.popCountLabel.string = `${this._popCount}`;
    
        const bubbleData = saveData.bubbles;
    
        this.generateBubbles();
        const len = this.bubblePool.childrenCount;
        this._changed = new Array(len).fill(false);
        this._bubbleWorldRects = new Array(len);
        this._touched = new Array(len).fill(false);
    
        for (let i = 0; i < Math.min(len, bubbleData.length); i++) {
            const b = bubbleData[i];
            const node = this.bubblePool.children[i];
            const sp = node.getComponent(cc.Sprite);
    
            node['spriteIndex'] = b.spriteIndex;
            node['popIndex'] = b.popIndex;
    
            if (b.popped) {
                sp.spriteFrame = this.popSprites[b.popIndex];
                this._changed[i] = true;
            } else {
                sp.spriteFrame = this.bubbleSprites[b.spriteIndex];
            }
        }
    
        return true;
    }
    
    
}

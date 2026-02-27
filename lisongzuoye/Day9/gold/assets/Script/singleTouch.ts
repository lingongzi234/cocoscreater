const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Node)
    goldPool: cc.Node = null;

    @property(cc.SpriteFrame)
    goldicon: cc.SpriteFrame = null; // 触摸后图

    /**
     * 缓存所有金币节点的包围盒及触摸标记数组，提升滑动性能
     * 节点顺序与 goldPool.children 保持一致
     */
    private _goldWorldRects: cc.Rect[] = [];
    private _sharedTouched: boolean[] = [];
    private _goldChanged: boolean[] = [];

    onLoad() {
        cc.macro.ENABLE_MULTI_TOUCH = true;
        
        const len = this.goldPool.childrenCount;
        if (len === 0) return;
        this._goldWorldRects = new Array(len);
        this._sharedTouched = new Array(len).fill(false);
        this._goldChanged = new Array(len).fill(false);
    }

    onEnable() {
        const len = this.goldPool.childrenCount;
        for (let i = 0; i < len; i++) {
            const node = this.goldPool.children[i];
            node.on(cc.Node.EventType.TOUCH_START, this.onTouchGoldStart, this);
            node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchGoldMove, this);
        }
    }

    onDisable() {
        const len = this.goldPool.childrenCount;
        for (let i = 0; i < len; i++) {
            const node = this.goldPool.children[i];
            node.off(cc.Node.EventType.TOUCH_START, this.onTouchGoldStart, this);
            node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchGoldMove, this);
        }
    }

    onTouchGoldStart(event: cc.Event.EventTouch) {
        this.checkTouch(event.getTouches());
    }

    onTouchGoldMove(event: cc.Event.EventTouch) {
        this.checkTouch(event.getTouches());
    }
     checkTouch(touches: cc.Event.EventTouch[]) {
        const count = this.goldPool.childrenCount;
        for (let i = 0; i < count; i++) {
            this._sharedTouched[i] = false;
            this._goldWorldRects[i] = this.goldPool.children[i].getBoundingBoxToWorld();
        }
        for (let t = 0; t < touches.length; t++) {
            const loc = touches[t].getLocation();
            for (let i = 0; i < count; i++) {
                if (!this._goldChanged[i] && this._goldWorldRects[i].contains(loc)) {
                    this._sharedTouched[i] = true;
                }
            }
        }
        for (let i = 0; i < count; i++) {
            if (this._sharedTouched[i] && !this._goldChanged[i]) {
                const node = this.goldPool.children[i];
                const sp = node.getComponent(cc.Sprite);
                if (sp) {
                    sp.spriteFrame = this.goldicon;
                    this._goldChanged[i] = true; 
                }
            }
        }
    }
}

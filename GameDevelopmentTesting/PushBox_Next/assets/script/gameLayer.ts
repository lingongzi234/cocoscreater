import { BoxType } from "./BoxType";
import { Sound } from "./SoundConfig";
interface Position {
    row: number;
    col: number;
}
interface AStarNode {
    row: number;
    col: number;
    g: number;
    h: number;
    f: number;
    parent: AStarNode | null;
}
interface MoveRecord {
    heroRow: number;
    heroCol: number;
    palace: number[][];
    curStepNum: number;
    finishBoxCount: number;
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    levelLayer: cc.Node = null;       // 关卡选择层

    @property(cc.Node)
    gameLayer: cc.Node = null;        // 游戏层

    @property(cc.Node)
    gameControlLayer: cc.Node = null; // 游戏操作层

    @property(cc.Node)
    gameOverLayer: cc.Node = null;    // 游戏结束层

    // ===== 关卡界面元素 =====
    @property(cc.Node)
    levelScroll: cc.Node = null;

    @property(cc.Node)
    levelContent: cc.Node = null;

    // ===== 游戏界面元素 =====
    @property(cc.Node)
    levelTxt: cc.Node = null;

    @property(cc.Node)
    curNum: cc.Node = null;

    @property(cc.Node)
    bestNum: cc.Node = null;

    // ===== 图集 =====
    @property(cc.SpriteAtlas)
    itemImgAtlas: cc.SpriteAtlas = null;

    @property(cc.SpriteAtlas)
    levelImgAtlas: cc.SpriteAtlas = null;

    // ===== 预制体 =====
    @property(cc.Prefab)
    levelItemPrefab: cc.Prefab = null;

    curLevel: number = 0;
    curLayer: number = 0;
    finishBoxCount: number = 0;
    curStepNum: number = 0;
    bestStepNum: number = 0;
    allWidth: number = 720;
    allHeight: number = 1280;
    allRow: number = 0;
    allCol: number = 0;
    heroRow: number=0;
    heroCol: number=0;
    boxW: number=0;
    boxH: number=0;
    allLevelCount: number = 0;
    allLevelConfig: any = null;
    landArrays: cc.Node[][] = [];
    palace: number[][] = [];
    tabLevel: any[] = [];
    startPos: Position;
    endPos: Position;
    minPath: number = 0;
    bestMap: Position[] = [];
    undoStack: MoveRecord[] = [];
    audioBundle: cc.AssetManager.Bundle | null = null;
    audioCache: Record<string, cc.AudioClip> = {};

    onLoad() {
        this.curLayer = 0;
        this.clearGameData();
        this.initData();
        if (!this.loadGameState()) {
            this.levelLayer.active = true;
            this.gameLayer.active = false;
            this.gameOverLayer.active = false;
        }
    }
   

    initData(){
        
        this.allRow = 8;
        this.allCol = 8;
        this.allLevelCount = 0;
        this.allLevelConfig = {};
        this.tabLevel = [];
        
        cc.assetManager.loadBundle("config", (err, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                console.log("Bundle 加载失败", err);
                return;
            }
        
            bundle.load("level", cc.JsonAsset, (err2, asset: cc.JsonAsset) => {
                if (err2) {
                    console.log("关卡配置加载失败", err2);
                    return;
                }
        
                const levelData = asset.json;
                console.log("关卡数据：", levelData);
                this.allLevelConfig = levelData.level;
                this.allLevelCount = levelData.levelCount;
                this.createLavelItem();
                this.updateLevelInfo();
            });
        });
    }

    createLavelItem(){
        let callfunc = level =>this.selectLevelCallBack(level);
        for (let i = 0; i < this.allLevelCount; i++) {
            let Item = cc.instantiate(this.levelItemPrefab);
            Item.setParent(this.levelContent);
            let levelItem = Item.getComponent("levelItem");
            levelItem.levelFunc(callfunc);
            this.tabLevel.push(levelItem);
        }
        this.levelContent.height = Math.ceil(this.allLevelCount / 5) * 135 + 20;
    }
    updateLevelInfo(): void {
        const finishLevel: number = parseInt(cc.sys.localStorage.getItem("finishLevel") || "0");
    
        for (let i = 1; i <= this.allLevelCount; i++) {
    
            const levelIndex = i - 1;
            const levelNode = this.tabLevel[levelIndex];
    
            // 已完成关卡
            if (i <= finishLevel) {
                const starCount: number = parseInt(cc.sys.localStorage.getItem("levelStar" + i) || "0");
                levelNode.showStar(true, starCount, this.levelImgAtlas, i);
            }
            // 当前新解锁关卡
            else if (i === finishLevel + 1) {
                levelNode.showStar(true, 0, this.levelImgAtlas, i);
            }
            // 未解锁关卡
            else {
                levelNode.showStar(false, 0, this.levelImgAtlas, i);
            }
        }
    }
    selectLevelCallBack(level: number){
        this.curLevel = level;
    
        if (this.curLayer === 2) return;
    
       this.playSound(Sound.BUTTON);  
    
        this.curLayer = 2;
    
        this.levelLayer.runAction(
            cc.sequence(
                cc.fadeOut(0.1),
                cc.callFunc(() => {
                    this.levelLayer.opacity = 255;
                    this.levelLayer.active = false;
                })
            )
        );
        this.gameLayer.active = true;
        this.gameLayer.opacity = 0;
        this.gameLayer.runAction(
            cc.sequence(
                cc.delayTime(0.1),
                cc.callFunc(() => {
                    this.createLevelLayer(level);
                }),
                cc.fadeIn(0.1)
            )
        );
    }
    createLevelLayer(level: number): void {
        this.undoStack = [];
        this.gameControlLayer.removeAllChildren();
        this.setLevel();
        this.setCurNum();
        this.setBestNum();
        const levelData = this.allLevelConfig[level];
        const levelContent: number[] = levelData.content;
        this.allRow = levelData.allRow;
        this.allCol = levelData.allCol;
        this.heroRow = levelData.heroRow;
        this.heroCol = levelData.heroCol;
        this.boxW = this.allWidth / this.allCol;
        this.boxH = this.boxW;
        const sPosX = -(this.allWidth / 2) + this.boxW / 2;
        const sPosY = this.allWidth / 2 - this.boxW / 2;
        let offset = 0;
        if (this.allRow !== this.allCol) {
            offset = ((this.allRow - this.allCol) * this.boxH) / 2;
        }
        this.landArrays = [];
        this.palace = [];
        for (let i = 0; i < this.allRow; i++) {
            this.landArrays[i] = [];
            this.palace[i] = [];
        }
        for (let i = 0; i < this.allRow; i++) {
            for (let j = 0; j < this.allCol; j++) {
                const x = sPosX + this.boxW * j;
                const y = sPosY - this.boxH * i +offset;
                let node = this.gameControlLayer.getChildByName(`tile_${i}_${j}`) as cc.Node;
                if (!node) {
                    // 节点不存在，创建
                    node = this.createBoxItem(i, j, levelContent[i * this.allCol + j], cc.v2(x, y));
                } else {
                    // 更新节点位置
                    node.position = cc.v3(x, y);
                    (node as any)._type_ = levelContent[i * this.allCol + j];
                    
                    // 更新精灵和尺寸
                    const sprite = node.getComponent(cc.Sprite);
                    sprite.spriteFrame = this.itemImgAtlas.getSpriteFrame("p" + levelContent[i * this.allCol + j]);
                    node.width = this.boxW;
                    node.height = this.boxH;
                    sprite.node.width = this.boxW;
                    sprite.node.height = this.boxH;
                }
                this.landArrays[i][j] = node;
                this.palace[i][j] = levelContent[i * this.allCol + j];
                if (levelContent[i * this.allCol + j] === BoxType.ENDBOX) {
                    this.finishBoxCount += 1;
                }
            }
        }
        this.refreshAllTiles();
        this.saveGameState();
    }
    
    createBoxItem(row: number, col: number, type: BoxType, pos): cc.Node {
        const node = new cc.Node();
        node.name = `tile_${row}_${col}`;
        const sprite = node.addComponent(cc.Sprite);
        const button = node.addComponent(cc.Button);
        sprite.spriteFrame = this.itemImgAtlas.getSpriteFrame("p" + type);
        node.width = this.boxW;
        node.height = this.boxH;
        node.parent = this.gameControlLayer;
        node.position = pos;
        (node as any)._type_ = type;
        if (type === BoxType.WALL) { 
            node.name = `wall_${row}_${col}`;
            node.attr({"_type_" : type});
        } 
        else if (type === BoxType.NONE) { 
            node.name = `none_${row}_${col}`;
            node.attr({"_type_" : type});
        } 
        else {  
            node.name = `land_${row}_${col}`;
            node.attr({"_type_" : type});
            node.attr({"_row_" : row});
            node.attr({"_col_" : col});
            button.interactable = true;
            button.target = node;
            button.node.on('click', this.clickCallBack, this);
            if (type === BoxType.ENDBOX) {
                this.finishBoxCount += 1;
            }
        }
        this.palace[row][col] = type;
        return node;
    }
    clickCallBack(event: cc.Event.EventTouch, customEventData?: any): void {
        const target = event.target as any;
        if (!target) {
            console.log("点击的节点为空，忽略");
            return;
        }
        const row = target._row_;
        const col = target._col_;
        if (row === undefined || col === undefined) {
            console.log("点击的节点不可点击");
            this.playSound(Sound.WRONG);
            return;
        }
        if (row === this.heroRow && col === this.heroCol) {
            return;
        }
        console.log("点击节点:", target.name, "_row_:", row, "_col_:", col);
        console.log("点击节点:", target.name, "_row_:", target._row_, "_col_:", target._col_);
        if (target._row_ === undefined || target._col_ === undefined) {
            console.log("不可点击的格子");
            this.playSound(Sound.WRONG);
            return;
        }
    
        // 起点位置
        this.startPos = { row: this.heroRow, col: this.heroCol };
        // 终点位置
        this.endPos = { row: target._row_, col: target._col_ };
    
        console.log("起点:", this.startPos, "终点:", this.endPos);
        console.log("当前 palace:", this.palace.map(r => r.join(",")));
    
        const endType: BoxType = this.palace[this.endPos.row][this.endPos.col];
    
        // 最小路径和最优路线
        this.minPath = this.allCol * this.allRow + 1;
        this.bestMap = [];
    
        if (endType === BoxType.LAND || endType === BoxType.BODY) {
            const path = this.getPathAStar(this.startPos, this.endPos);
            console.log("A*路径:", path);
    
            if (path && path.length > 0) {
                this.bestMap = path;
                this.runHero();
            } else {
                console.log("找不到路径到达");
                this.playSound(Sound.WRONG);
            }
        } 
        else if (endType === BoxType.BOX || endType === BoxType.ENDBOX) {
            const lr = this.endPos.row - this.startPos.row;
            const lc = this.endPos.col - this.startPos.col;
    
            if (Math.abs(lr) + Math.abs(lc) === 1) {
                const nextr = this.endPos.row + lr;
                const nextc = this.endPos.col + lc;
                const t: BoxType = this.palace[nextr][nextc];
    
                if (t !== BoxType.WALL && t !== BoxType.BOX && t !== BoxType.ENDBOX) {
                    this.saveState(); 
                    this.playSound(Sound.PUSHBOX);
                    this.refreshTile(this.startPos.row, this.startPos.col);
                    const bt: BoxType = this.palace[this.endPos.row][this.endPos.col];
                    if (bt === BoxType.ENDBOX) {
                        this.palace[this.endPos.row][this.endPos.col] = BoxType.BODY;
                        this.finishBoxCount -= 1;
                    } else {
                        this.palace[this.endPos.row][this.endPos.col] = BoxType.LAND;
                    }
                    this.refreshTile(this.endPos.row, this.endPos.col);
                    if (this.palace[nextr][nextc] === BoxType.BODY) {
                        this.palace[nextr][nextc] = BoxType.ENDBOX;
                        this.finishBoxCount++;
                    } else {
                        this.palace[nextr][nextc] = BoxType.BOX;
                    }
                    this.refreshTile(nextr, nextc);
                    this.moveHeroTo(this.endPos.row, this.endPos.col);
                    this.curStepNum += 1;
                    this.setCurNum();
                    this.checkGameOver();
                } else {
                    console.log("前方有障碍物");
                    this.playSound(Sound.WRONG);
                }
            } else {
                console.log("目标点错误");
                this.playSound(Sound.WRONG);
            }
        }
    }
    runHero(): void {
        this.setLandEnable(false);
        const actions: cc.FiniteTimeAction[] = [];
        for (let i = 1; i < this.bestMap.length; i++) {
            actions.push(cc.delayTime(0.1));
            actions.push(cc.callFunc(() => {
                const pos = this.bestMap[i];
                this.moveHeroTo(pos.row, pos.col);
                this.curStepNum++;
                this.setCurNum();
                this.playSound(Sound.MOVE);
                this.saveGameState();
            }));
        }
        actions.push(cc.callFunc(() => {
            this.setLandEnable(true);
        }));
        this.gameLayer.stopAllActions();
        this.gameLayer.runAction(cc.sequence(actions));
    }
    
    moveHeroTo(row: number, col: number) {
        const oldRow = this.heroRow;
        const oldCol = this.heroCol;
        this.heroRow = row;
        this.heroCol = col;
    
        this.refreshTile(oldRow, oldCol);
        this.refreshTile(row, col);
    }
    
    getPathAStar(start: Position, end: Position): Position[] | null {
        const openList: AStarNode[] = [];
        const closeList: AStarNode[] = [];
    
        const getH = (r: number, c: number): number => {
            return Math.abs(r - end.row) + Math.abs(c - end.col); 
        };
        const inClose = (r: number, c: number): boolean => {
            return closeList.some(n => n.row === r && n.col === c);
        };
        const getFromOpen = (r: number, c: number): AStarNode | undefined => {
            return openList.find(n => n.row === r && n.col === c);
        };
        const startNode: AStarNode = {
            row: start.row,
            col: start.col,
            g: 0,
            h: getH(start.row, start.col),
            f: 0,
            parent: null
        };
        startNode.f = startNode.g + startNode.h;
        openList.push(startNode);
    
        while (openList.length > 0) {
            openList.sort((a, b) => a.f - b.f);
            const current = openList.shift()!;
            closeList.push(current);
            if (current.row === end.row && current.col === end.col) {
                const path: Position[] = [];
                let cur: AStarNode | null = current;
                while (cur) {
                    path.unshift({ row: cur.row, col: cur.col });
                    cur = cur.parent;
                }
                return path;
            }
            const dirs: { r: number; c: number }[] = [
                { r: 1, c: 0 },
                { r: -1, c: 0 },
                { r: 0, c: 1 },
                { r: 0, c: -1 }
            ];
    
            for (const d of dirs) {
                const nr = current.row + d.r;
                const nc = current.col + d.c;
                if (nr < 0 || nc < 0 || nr >= this.allRow || nc >= this.allCol) continue;
                const t: BoxType = this.palace[nr][nc];
                if (t === BoxType.WALL || t === BoxType.BOX || t === BoxType.ENDBOX) continue;
    
                if (inClose(nr, nc)) continue;
    
                const g = current.g + 1;
                let node = getFromOpen(nr, nc);
    
                if (!node) {
                    node = {
                        row: nr,
                        col: nc,
                        g: g,
                        h: getH(nr, nc),
                        f: 0,
                        parent: current
                    };
                    node.f = node.g + node.h;
                    openList.push(node);
                } else if (g < node.g) {
                    node.g = g;
                    node.f = node.g + node.h;
                    node.parent = current;
                }
            }
        }
    
        return null;
    }
    checkGameOver() {
        const count: number = this.allLevelConfig[this.curLevel].allBox;

        if (this.finishBoxCount === count) {
            cc.sys.localStorage.removeItem("sokobanSaveState");
            cc.sys.localStorage.removeItem("currentGameState");
            this.gameOverLayer.active = true;
            this.gameOverLayer.opacity = 1;
            this.gameOverLayer.runAction(
                cc.sequence(cc.delayTime(0.5), cc.fadeIn(0.1))
            );
            const finishLevel: number = parseInt(cc.sys.localStorage.getItem("finishLevel") || "0");
            if (this.curLevel > finishLevel) {
                cc.sys.localStorage.setItem("finishLevel", this.curLevel.toString());
            }

            cc.sys.localStorage.setItem("levelStar" + this.curLevel, "3");

            const best: number = parseInt(cc.sys.localStorage.getItem("levelBest" + this.curLevel) || "0");
            if (this.curStepNum < best || best === 0) {
                cc.sys.localStorage.setItem("levelBest" + this.curLevel, this.curStepNum.toString());
            }

            this.playSound(Sound.GAMEWIN);
            this.clearGameData();
        }
    }
  
    setLandEnable(isEnable: boolean): void {
        for (let i = 0; i < this.allRow; i++) {
            for (let j = 0; j < this.allCol; j++) {
                const land: cc.Node = this.landArrays[i][j];
                if (land) {
                    const button = land.getComponent(cc.Button);
                    if (button) {
                        button.interactable = isEnable;
                    }
                }
            }
        }
    }
    clearGameData(){
        this.finishBoxCount = 0;
        this.curStepNum = 0;
    }
    // 设置关卡文本
    setLevel() {
        const label = this.levelTxt.getComponent(cc.Label);
        if (label) {
            label.string = String(this.curLevel);
        }
    }

// 显示当前步数
    setCurNum() {
        const label = this.curNum.getComponent(cc.Label);
        if (label) {
            label.string = String(this.curStepNum);
        }
    }

// 显示最优步数
    setBestNum(): void {
        const bestNum = cc.sys.localStorage.getItem("levelBest" + this.curLevel) || "--";
        const label = this.bestNum.getComponent(cc.Label);
        if (label) {
            label.string = bestNum;
        }
    }
    refreshTile(row: number, col: number) {
        const node = this.landArrays[row][col];
        const sprite = node.getComponent(cc.Sprite);
    
        const type = this.palace[row][col];
    
        let spriteType = type;
        if (type === BoxType.BOX || type === BoxType.ENDBOX) {
            spriteType = BoxType.LAND; // 地面显示
        }
    
        sprite.spriteFrame = this.itemImgAtlas.getSpriteFrame("p" + spriteType);
    
        if (row === this.heroRow && col === this.heroCol) {
            sprite.spriteFrame = this.itemImgAtlas.getSpriteFrame("p6"); // HERO
        } 

        else if (type === BoxType.BOX || type === BoxType.ENDBOX) {
            sprite.spriteFrame = this.itemImgAtlas.getSpriteFrame("p" + type);
        }
        node.width = this.boxW;
        node.height = this.boxH;
        sprite.node.width = this.boxW;
        sprite.node.height = this.boxH;


    }
    nextLevelCallBack(event: Event, customEventData: string) {
        this.playSound(Sound.BUTTON);

        this.gameOverLayer.active = false;

        this.curLevel += 1;

        if (this.curLevel > this.allLevelCount) {
            this.backLevelCallBack();
        } else {
      
            this.createLevelLayer(this.curLevel);
        }
    }
    backLevelCallBack(event?: Event, customEventData?: string) {


        cc.sys.localStorage.removeItem("sokobanSaveState");
        cc.sys.localStorage.removeItem("currentGameState");
        this.clearGameData();

        if (this.curLayer === 1) {
            return;
        }

        this.playSound(Sound.BUTTON);
        this.curLayer = 1;

        this.gameLayer.runAction(
            cc.sequence(
                cc.fadeOut(0.1),
                cc.callFunc(() => {
                    this.gameLayer.opacity = 255;
                    this.gameLayer.active = false;
                })
            )
        );

        this.levelLayer.active = true;
        this.levelLayer.opacity = 0;
        this.levelLayer.runAction(
            cc.sequence(
                cc.fadeIn(0.1),
                cc.callFunc(() => {
                    this.updateLevelInfo();
                })
            )
        );
    }
    refreshCallBack(event: Event, customEventData: string) {
        this.playSound(Sound.BUTTON);
        this.gameLayer.stopAllActions();
        this.clearGameData();
        this.createLevelLayer(this.curLevel);
    }
    

    loadAudioBundle(callback?: () => void) {
        if (this.audioBundle) {
            callback?.();
            return;
        }
        cc.assetManager.loadBundle("audio", (err, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                console.error("音频 bundle 加载失败:", err);
                return;
            }
            this.audioBundle = bundle;
            callback?.();
        });
    }
    
    playSound(name: string) {
        if (!this.audioBundle) {
            this.loadAudioBundle(() => this.playSound(name));
            return;
        }
        if (this.audioCache[name]) {
            cc.audioEngine.playEffect(this.audioCache[name], false);
            return;
        }

        this.audioBundle.load(name, cc.AudioClip, (err, clip: cc.AudioClip) => {
            if (err) {
                console.error(`音效 ${name} 加载失败:`, err);
                return;
            }
            this.audioCache[name] = clip; 
            cc.audioEngine.playEffect(clip, false);
        });
    }
    
    saveState() {
        const palaceCopy = this.palace.map(row => row.slice());
        this.undoStack.push({
            heroRow: this.heroRow,
            heroCol: this.heroCol,
            palace: palaceCopy,
            curStepNum: this.curStepNum,
            finishBoxCount: this.finishBoxCount,
        });
    }
    undoMove() {
        if (this.undoStack.length === 0) {
            this.playSound(Sound.WRONG); 
            return;
        }
    
        const lastState = this.undoStack.pop()!;
        this.heroRow = lastState.heroRow;
        this.heroCol = lastState.heroCol;
        this.palace = lastState.palace.map(row => row.slice());
        this.curStepNum = lastState.curStepNum;
        this.finishBoxCount = lastState.finishBoxCount;
    
        for (let i = 0; i < this.allRow; i++) {
            for (let j = 0; j < this.allCol; j++) {
                this.refreshTile(i, j);
            }
        }
    
        this.setCurNum();
        this.saveGameState();
    }
    undoCallBack(event: Event) {
        this.undoMove();
    }
    saveGameState() {
        const palaceCopy = this.palace.map(row => row.slice());
    
        const state = {
            curLevel: this.curLevel,
            heroRow: this.heroRow,
            heroCol: this.heroCol,
            palace: palaceCopy,
            curStepNum: this.curStepNum,
            finishBoxCount: this.finishBoxCount,
            undoStack: this.undoStack
        };
    
        cc.sys.localStorage.setItem("sokobanSaveState", JSON.stringify(state));
        cc.sys.localStorage.setItem("currentGameState", "true"); 
    }
    loadGameState(): boolean {
        const isPlaying = cc.sys.localStorage.getItem("currentGameState");
        if (!isPlaying) return false;
    
        const data = cc.sys.localStorage.getItem("sokobanSaveState");
        if (!data) return false;
    
        try {
            const state = JSON.parse(data);
            this.curLevel = state.curLevel;
            this.curStepNum = state.curStepNum;
            this.finishBoxCount = state.finishBoxCount;
            this.heroRow = state.heroRow;
            this.heroCol = state.heroCol;
            this.undoStack = state.undoStack || [];
            this.palace = state.palace.map((row: number[]) => row.slice());
            this.allRow = this.palace.length;
            this.allCol = this.palace[0].length;
    
            this.curLayer = 2;
            this.levelLayer.active = false;
            this.gameLayer.active = true;
            this.gameOverLayer.active = false;
    
            this.setLevel();
            this.setCurNum();
            this.setBestNum();
    
            this.gameControlLayer.removeAllChildren();
            this.landArrays = [];
    
            this.boxW = this.allWidth / this.allCol;
            this.boxH = this.boxW;
    
            const sPosX = -(this.allWidth / 2) + this.boxW / 2;
            const sPosY = this.allWidth / 2 - this.boxW / 2;
            const offset = ((this.allRow - this.allCol) * this.boxH) / 2;
    
            for (let i = 0; i < this.allRow; i++) {
                this.landArrays[i] = [];
                for (let j = 0; j < this.allCol; j++) {
                    const pos = cc.v2(sPosX + j * this.boxW, sPosY - i * this.boxH + offset);
                    const type = this.palace[i][j];
                    const node = this.createBoxItem(i, j, type, pos);
                    this.landArrays[i][j] = node;
                }
            }
            this.refreshAllTiles();
            return true;
        } catch (err) {
            console.error("读取存档失败:", err);
            return false;
        }
    }
    refreshAllTiles() {
        for (let i = 0; i < this.allRow; i++) {
            for (let j = 0; j < this.allCol; j++) {
                this.refreshTile(i, j);
            }
        }
    }  

}

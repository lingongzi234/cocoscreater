
import MouseManager from "./MouseManager";
import ColliderManager from "./ColliderManager";
import SoundManager from "./SoundManager";
enum Difficult {
    Simple = 3000,
    Ordinary = 6000,
    Difficult = 10000,
}
interface MouseData {
    mouseName: string;
    scoreUpdateFunc: () => void;
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    hammer: cc.Prefab = null;

    /** 游戏开始倒计时UI */
    @property(cc.Prefab)
    countDown: cc.Prefab = null;

    /** 游戏结束UI */
    @property(cc.Prefab)
    gameOver: cc.Prefab = null;

    /** 地鼠洞父节点 */
    @property(cc.Node)
    mouseNodes: cc.Node = null;

    /** 动物图集 */
    @property(cc.SpriteAtlas)
    animalAtlas: cc.SpriteAtlas = null;

    /** 动物死亡图集 */
    @property(cc.SpriteAtlas)
    animalDeathAtlas: cc.SpriteAtlas = null;

    /** 时间进度条 */
    @property(cc.Sprite)
    timeRollerBar: cc.Sprite = null;

    /** 图标图集 */
    @property(cc.SpriteAtlas)
    icon: cc.SpriteAtlas = null;

    /** 游戏规则图片 */
    @property(cc.SpriteFrame)
    gameRule: cc.SpriteFrame = null;

    /** 分数Label */
    @property(cc.Label)
    gameScore: cc.Label = null;
    /**最高分数Label */
    @property(cc.Label)
    MaxgameScore: cc.Label = null;

    /** 时间条推进速度 */
    @property({
        range: [0, 2, 0.1],
        slide: true
    })
    timeRollerStep: number = 1;
    @property({
        tooltip: "游戏总时间（秒）"
    })
    totalTime: number = 90;
    

    /** 得分特效 */
    @property(cc.Prefab)
    gameScoreEffect: cc.Prefab = null;

    /** 通关难度分数 */
    @property({
        type: cc.Enum(Difficult),
        tooltip: "Simple:3000\nOrdinary:6000\nDifficult:10000"
    })
    gameDifficultScore: Difficult = Difficult.Simple;
    @property()
    /** github地址 */
    @property
    gameGitHubUrl: string = "";
    /** 当前被击中的老鼠 */
     _mouseNode: cc.Node = null;

    /** 出现的老鼠索引数组 */
    _mouseIndexArr: number[] = [];
     /** 当前得分 */
    _score: number = 0;

     _mouseDataTable: MouseData[] = [];
    hammerNode: cc.Node = null; 
    gameRuleNode: cc.Node = null; 
    countDownNode: cc.Node = null;
    gameOverNode: cc.Node = null;
    elapsedTime: number = 0;
    isSpeedUp: boolean = false; 
    gameSpeed:number=1;
    isHardModeEnabled: boolean = false;


    
    start () {
        this.initGameData();
        this.initEventListener();
        this.showBestScore();

    }
    private initGameData(){

    this._mouseDataTable = [
        {
            mouseName: "harmful_mouse_0",
            scoreUpdateFunc: () => {
                this._score += 100;
            }
        },
        {
            mouseName: "harmful_mouse_1",
            scoreUpdateFunc: () => {
                this._score += 500;
            }
        },
        {
            mouseName: "kind_mouse_0",
            scoreUpdateFunc: () => {
                if (this._score === 0) {
                    this._score += 200;
                } else {
                    this._score = Math.floor(this._score * 1.2);
                }
            }
        },
        {
            mouseName: "kind_mouse_1",
            scoreUpdateFunc: () => {
                this._score -= 100;
            }
        },
        {
            mouseName: "rabbit_0",
            scoreUpdateFunc: () => {
                this._score = Math.floor(this._score / 2);
            }
        }
    ];
    }
    initEventListener() {

    // 鼠标移动（PC）
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);

    // 手指滑动（移动端）
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

    // 手指按下
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

    // 手指松开
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

    // 监听所有地鼠动画结束
    for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
        const anim = this.mouseNodes.children[i]
            .getChildByName("Sp Mouse")
            .getComponent(cc.Animation);

        anim.on(cc.Animation.EventType.FINISHED, this.onAnimationFinishEvent, this);
    }
    }
    onMouseMove(e: cc.Event.EventMouse) { 
    this.onBeCreateHammerEvent(e.getLocation()); 
    } 
    onTouchMove(e: cc.Event.EventTouch) { 
    this.onBeCreateHammerEvent(e.getLocation()); 
    } 
    onTouchStart(e: cc.Event.EventTouch) { 
    this.onBeCreateHammerEvent(e.getLocation()); 
    this.onHammerClicked(); 
    if (this.gameRuleNode) this.gameRuleNode.runAction(cc.fadeOut(1)); 
    }
    onTouchEnd() { 
        this.hammerNode.angle = this.hammerNode.angle === 0 ? 30 : 0;
    //this.onHammerClicked(); 
    }
    unEventListener() {

    // 移除当前节点上所有 this 绑定的事件
    this.node.targetOff(this);

    for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
        const anim = this.mouseNodes.children[i]
            .getChildByName("Sp Mouse")
            .getComponent(cc.Animation);

        anim.targetOff(this);
    }
    }
         
    startGame(){
    this.initMouseOutEvent();
    }
    initMouseOutEvent(){

    // 已经有老鼠在场就不生成
    if (this._mouseIndexArr.length !== 0) return;

    const holeCount = this.mouseNodes.childrenCount;
    const spriteFrames = this.animalAtlas.getSpriteFrames();

    if (holeCount === 0 || spriteFrames.length === 0) return;
    const spawnCount = Math.min(
        holeCount,
        Math.floor(Math.random() * 7) + 3   // 3~9
    );
    const holeIndexes: number[] = [];
    for (let i = 0; i < holeCount; i++) {
        holeIndexes.push(i);
    }
    for (let i = holeIndexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [holeIndexes[i], holeIndexes[j]] = [holeIndexes[j], holeIndexes[i]];
    }
    for (let i = 0; i < spawnCount; i++) {

        const holeIndex = holeIndexes[i];
        const mouseNode = this.mouseNodes.children[holeIndex].getChildByName("Sp Mouse");

        if (!mouseNode) continue;

        const spriteIndex = Math.floor(Math.random() * spriteFrames.length);

        this.updateMouseNodeInfo(mouseNode, spriteIndex);

        const collider = mouseNode.getComponent(cc.BoxCollider);
        const sprite = mouseNode.getComponent(cc.Sprite);
        const anim = mouseNode.getComponent(cc.Animation);

        if (!collider || !sprite || !anim) continue;

        collider.enabled = true;
        sprite.spriteFrame = spriteFrames[spriteIndex];
        anim.play();
        const state = anim.getAnimationState(anim.defaultClip.name);
        state.speed = this.gameSpeed;

        this._mouseIndexArr.push(holeIndex);
    }
    }
    startTimeRoller () {
        //这下面是倒计时3，2，1，然后启动游戏
        var times = 3;
        //this.timeRollerBar.fillStart = 0;
        this.timeRollerBar.fillStart = 0; // 从左边开始
        this.timeRollerBar.fillRange = 1;  // 从满格开始
        this.elapsedTime = 0;
        this.schedule(()=> {
            //这里是if判断当===0时就会调用else，正式开始游戏
            if (times !== 0) {
                if (!this.countDownNode) {
                    this.countDownNode = cc.instantiate(this.countDown);
                    this.node.addChild(this.countDownNode);
                }
                this.countDownNode.getChildByName("Sp Num").opacity = 255;
                this.countDownNode.getChildByName("Nodes Start").opacity = 0;
                let spriteFrameName = "num_" + times;
                this.countDownNode.getChildByName("Sp Num").getComponent(cc.Sprite).spriteFrame = this.icon.getSpriteFrame(spriteFrameName);
                this.node.getComponent("SoundManager").playEffectSound("second", false);
            }
            else {
                this.countDownNode.getChildByName("Sp Num").opacity = 0;
                this.countDownNode.getChildByName("Nodes Start").opacity = 255;
                this.node.getComponent("SoundManager").playEffectSound("begin", false);
                this.countDownNode.runAction(cc.fadeOut(1));
                //在这里开始调用countDownScheduleCallBack
                this.schedule(this.countDownScheduleCallBack, this.timeRollerStep);
                this.startGame();
            }
            times--;
            //这个每秒执行一次，总共三次。
        }, 1, 3);
    }
    countDownScheduleCallBack (dt?: number) {
        this.elapsedTime += this.timeRollerStep; 
        let progress = this.elapsedTime / this.totalTime;
        progress = Math.min(progress, 1);
    
        // 左 → 右 被吃掉
        this.timeRollerBar.fillStart = progress;

    if (progress >= 1 ) {
        this.unschedule(this.countDownScheduleCallBack.bind(this));
        this.timeRollerBar.fillRange = 0;

        this.unEventListener();
        if (this._score > this.gameDifficultScore) {
            if (!this.gameOverNode) {
                this.gameOverNode = cc.instantiate(this.gameOver);
                this.node.addChild(this.gameOverNode);
            }
            this.gameOverNode.opacity = 255;
            this.gameOverNode.runAction(cc.fadeOut(1.5));

            this.passGame();
        } else {
            if (!this.gameOverNode) {
                this.gameOverNode = cc.instantiate(this.gameOver);
                this.node.addChild(this.gameOverNode);
            }
            this.gameOverNode.opacity = 255;
            this.gameOverNode.runAction(cc.fadeOut(1.5));
            this.loseGame();
        }
        this.onFinishGameEvent();
        }
    }

    updateMouseNodeInfo(mouseNode:cc.Node, tag:number) {
    const mgr = mouseNode.getComponent(MouseManager); 
    mgr._isLive = true; 
    mgr._tag = tag; 
    mgr.scoreUpdateFunc = this._mouseDataTable[tag].scoreUpdateFunc;
    }
    onHammerClicked(){ 

    this.hammerNode.angle = this.hammerNode.angle === 0 ? 30 : 0;
        //播放敲击声音
    this.node.getComponent("SoundManager").playEffectSound("hit",false);
    if (!this._mouseNode) return; 
    const collider = this._mouseNode.getComponent(ColliderManager);
    const mouseMgr = this._mouseNode.getComponent(MouseManager); 
    if (!collider._isCollider || !mouseMgr._isLive) return; 
    this.node.getComponent("SoundManager").playEffectSound("score",false);
    mouseMgr.scoreUpdateFunc?.();
    this.showScoreEffectByTag(this._mouseNode, this._mouseNode.parent.getChildByName("Nodes Score Effect"));
    this._score = Math.max(0, this._score);
    this.gameScore.string = this._score.toString(); 
    this.checkSpeedUp(); 
    mouseMgr._isLive = false; 
    const oldName = this._mouseNode.getComponent(cc.Sprite).spriteFrame.name; 
    this._mouseNode.getComponent(cc.Sprite).spriteFrame = this.animalDeathAtlas.getSpriteFrame(oldName + "_death"); 
          
    this._mouseNode.getChildByName("Anima Start").getComponent(cc.Animation).play();
    }
    onAnimationFinishEvent() { 
        this._mouseIndexArr.pop(); 
        this.initMouseOutEvent(); 
    }
    onBeCreateHammerEvent(pos: cc.Vec2){ 
        if (!cc.isValid(this.hammerNode)) {
            this.hammerNode = cc.instantiate(this.hammer); 
            this.hammerNode.zIndex = cc.macro.MAX_ZINDEX; 
            this.node.addChild(this.hammerNode); 
        } 
        this.hammerNode.setPosition(this.node.convertToNodeSpaceAR(pos).x,this.node.convertToNodeSpaceAR(pos).y,this.hammerNode.position.z)
    }
    showScoreEffectByTag (node:cc.Node, scoreEffectNode:cc.Node) {
        for (let i = 0; i < scoreEffectNode.childrenCount; i++) {
            scoreEffectNode.children[i].opacity = node.getComponent("MouseManager")._tag === i ? 255 : 0;
            scoreEffectNode.children[i].runAction(cc.fadeOut(1));
        }
    }
    onGamePlayButtonClicked() {
        this.node.getComponent("SoundManager").playBackGroundSound();
        cc.find("Canvas/Sp Hall Bg").active = false;
        cc.find("Canvas/Sp Game Bg").active = true;
        this.startTimeRoller();
    }
    onGameRuleButtonClicked () {
        this.node.getComponent("SoundManager").playEffectSound("click", false);
        if (!this.gameRuleNode) {
            this.gameRuleNode = new cc.Node();
            this.gameRuleNode.addComponent(cc.Sprite).spriteFrame = this.gameRule;
            this.node.addChild(this.gameRuleNode);
        }
        this.gameRuleNode.opacity = 255;
    }

    onGameGitHubButtonClicked () {
        this.node.getComponent("SoundManager").playEffectSound("click", false);
        if (cc.sys.isBrowser) {
            cc.sys.openURL(this.gameGitHubUrl);
        }
    }

    onBackHallButtonClicked () {
        cc.director.loadScene("Game");
    }
    onSwitchMusicVolume (event:cc.Event) {
        this.node.getComponent("SoundManager").playEffectSound("click");
        this.node.getComponent("SoundManager")._isPlaying = !this.node.getComponent("SoundManager")._isPlaying;
        if (this.node.getComponent("SoundManager")._isPlaying) {
            event.target.getComponent(cc.Sprite).spriteFrame = this.icon.getSpriteFrame("sound_close");
            this.node.getComponent("SoundManager").stopAll();
        }
        else {
            event.target.getComponent(cc.Sprite).spriteFrame = this.icon.getSpriteFrame("sound_open");
            this.node.getComponent("SoundManager").playBackGroundSound();
        }
    }
    passGame() { 
        this.unschedule(this.countDownScheduleCallBack);
        this.node.getComponent(SoundManager).playEffectSound("pass",false); 
    } 
    loseGame() { 
        this.unschedule(this.countDownScheduleCallBack);
        this.node.getComponent(SoundManager).playEffectSound("lose",false); 
    }
    onFinishGameEvent() {
        this.saveScore();
        for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
            const mouseNode = this.mouseNodes.children[i].getChildByName("Sp Mouse");
            const anim = mouseNode?.getComponent(cc.Animation);
            anim?.stop(); 
        }
    
        setTimeout(() => {
            cc.director.loadScene("Game");
        }, 2000);
    }
    saveScore() {
        const bestScore = Number(cc.sys.localStorage.getItem("bestScore") || "0");
    
        if (this._score > bestScore) {
            cc.sys.localStorage.setItem("bestScore", this._score.toString());
        }
    }
    showBestScore() {
        const bestScore = Number(cc.sys.localStorage.getItem("bestScore") || "0");
        if (this.MaxgameScore) {
            this.MaxgameScore.string = ''+bestScore;
        }
    }
    checkSpeedUp() {

        if (this.isSpeedUp) return;  // 已触发过就不再判断
        if (!this.isHardModeEnabled) return;
    
        if (this._score >= this.gameDifficultScore) {
    
            this.isSpeedUp = true;
            this.gameSpeed=1.3;
            this.timeRollerStep =this.gameSpeed*this.timeRollerStep;
    
            // 🔥 让当前场上所有地鼠动画立刻变快
            for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
                const mouseNode = this.mouseNodes.children[i].getChildByName("Sp Mouse");
                const anim = mouseNode?.getComponent(cc.Animation);
                if (anim && anim.defaultClip) {
                    anim.getAnimationState(anim.defaultClip.name).speed *=  this.gameSpeed;
                }
            }
    
            cc.log("进入狂暴模式!速度提升30%");
        }
    }
    onHardModeOnClicked () {
        this.isHardModeEnabled = true;
        this.node.getComponent(SoundManager).playEffectSound("click", false);
        cc.log("困难模式：开启");
    }
    onHardModeOffClicked () {
        this.isHardModeEnabled = false;
        this.node.getComponent(SoundManager).playEffectSound("click", false);
        cc.log("困难模式：关闭");
    }

}



//游戏难度的定义
var Difficult = cc.Enum({
    Simple: 1000,
    Ordinary: 2500,
    Difficult: 5000
});
//主脚本定义
cc.Class({
    extends: cc.Component,
//属性声明
    properties: {
        //锤子预制体
        hammer: {
            default: null,
            type: cc.Prefab
        },
        //游戏开始后的倒计时UI预制体
        countDown: {
            default: null,
            type: cc.Prefab
        },
        //游戏结束的UI预制体
        gameOver: {
            default: null,
            type: cc.Prefab
        },
       //地鼠洞的父节点
        mouseNodes: {
            default: null,
            type: cc.Node
        },
        //动物的图集
        animalAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        //动物死亡的图集
        animalDeathAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        //时间进度条
        timeRollerBar: {
            default: null,
            type: cc.Sprite
        },
        //图标图集
        icon: {
            default: null,
            type: cc.SpriteAtlas
        },
        //游戏规则的图片
        gameRule: {
            default: null,
            type: cc.SpriteFrame
        },
        //分数的Label
        gameScore: {
            default: null,
            type: cc.Label
        },
        //时间条推进速度（编辑器滑动调节）
        timeRollerStep: {
            default: 1,
            range: [0, 2, 0.1],
            slide: true
        },
        //得分特效
        gameScoreEffect: {
            default: null,
            type: cc.Prefab
        },
        //调整通关难度分数
        gameDifficultScore:{
            default: Difficult.Simple,
            type: Difficult,
            //这个只是编辑器的提示，不是真正的对应的数据 
            tooltip: "Simple:2000\n Ordinary:4000\n Difficult:6000",
        },
        //github的地址
        gameGitHubUrl:"",

        
        //下面的是只在内部运行的变量，在编辑器中就看不到了
        //当前被击中的老鼠
        _mouseNode: null,
        //出现的老鼠的数组
        _mouseIndexArr: [],
        //计时用的
        _times: 0,
        //游戏是否在运行
        _isRunning: true,
        //得分
        _score: 0
    },
    
  
//这是cocoscreater的生命周期函数，会在所有组件都onLoad之后才会执行，主要作用就是初始化
    start () {


   

         // 初始化地鼠数据
        this.initGameData();
        // 绑定输入事件
        this.initEventListener();
    },
    
    initGameData () {
     //这是一个各种地鼠的一个数组,里面是多个对象，每个对象代表一种地鼠，里面有它的名字和计算分数的方法
        this._mouseDataTable = [
            {
                mouseName: "harmful_mouse_0",
                scoreUpdateFunc: function () {
                    this._score += 100;
                }
            },
            {
                mouseName: "harmful_mouse_1",
                scoreUpdateFunc: function () {
                    this._score += 500;
                }
            },
            {
                mouseName: "kind_mouse_0",
                scoreUpdateFunc: function () {
                    if (this._score === 0) {
                        this._score += 200;
                    }
                    else {
                        this._score = Math.floor(this._score * 1.2);
                    }
                }
            },
            {
                mouseName: "kind_mouse_1",
                scoreUpdateFunc: function () {
                    this._score -= 100;
                }
            },
            {
                mouseName: "rabbit_0",
                scoreUpdateFunc: function () {
                    this._score = Math.floor(this._score / 2);
                }
            }
        ];
    },
    //事件监听
    initEventListener () {
        //鼠标移动（pc）
        this.node.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{
            this.onBeCreateHammerEvent(event.getLocation());
        },this);
        //手指滑动（移动端）
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{
            this.onBeCreateHammerEvent(event.getLocation());
        },this);
        //手指按下事件触发
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.onBeCreateHammerEvent(event.getLocation());
            this.onHammerClicked();
            //如果有游戏规则，则隐藏游戏规则
            if (this.gameRuleNode) {
                var gameRuleFadeOut = cc.fadeOut(1);
                this.gameRuleNode.runAction(gameRuleFadeOut);
            }
        },this);
        //手指松开事件触发
        this.node.on(cc.Node.EventType.TOUCH_END, (event)=>{
            this.onHammerClicked();
        },this);
        // 监听所有地鼠动画结束事件
        for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
            this.mouseNodes.children[i].getChildByName("Sp Mouse").getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, this.onAnimationFinishEvent, this);
        }
    },
//取消事件监听
    unEventListener () {
        //移除绑定在当前节点上的所有事件监听
        this.node.targetOff(this);
        //遍历所有地鼠节点
        for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
            //移除animation上的所有以 this 作为 target 的事件监听
            this.mouseNodes.children[i].getChildByName("Sp Mouse").getComponent(cc.Animation).targetOff(this);
        }
    },
//在点击开始游戏之后的游戏开始时的初始化方法
    startGame () {
        //调用此页面的这个方法
        this.initMouseOutEvent();
    },
    //地鼠出现逻辑
    initMouseOutEvent () {
        //当前的数组里没有地鼠时才生成
        
        if (this._mouseIndexArr.length === 0) {
            //这段大概意思是生成老鼠的数量，有一些限制
            let mouseAmount = Math.ceil(Math.random() * (this.mouseNodes.childrenCount - 1));
            //如果这个数量是0就自动为1
            if (mouseAmount === 0) {
                mouseAmount = 1;
            }
            //上面的随机数没有用，下面的逻辑是这样的：for五次，每次随机一个洞，然后随机一种地鼠，然后如果这个洞没有地鼠就生成一只，没有就不生成了
            //所以最大值会是5，然后还有一点就是洞口的随机数1到8，这样0就永远不会被选到，所以0号洞不会有地鼠。
            for (let i = 0; i < 5; i++) {
                let randomNodeIndex = Math.ceil(Math.random() * (this.mouseNodes.childrenCount - 1));
                let randomSpriteFrameIndex = Math.ceil(Math.random() * (this.animalAtlas.getSpriteFrames().length - 1))
                
                if (this._mouseIndexArr.indexOf(randomNodeIndex) === -1) {
                    var mouseNode = this.mouseNodes.children[randomNodeIndex].getChildByName("Sp Mouse");
                    this.updateMouseNodeInfo(mouseNode, randomSpriteFrameIndex);
                    mouseNode.getComponent(cc.BoxCollider).enabled = true;
                    this._mouseIndexArr.push(randomNodeIndex);
                    mouseNode.getComponent(cc.Sprite).spriteFrame = this.animalAtlas.getSpriteFrames()[randomSpriteFrameIndex];
                    mouseNode.getComponent(cc.Animation).play();
                }
            }
        }
    },
//整局游戏的启动总控逻辑，先是开始的倒计时，游戏开始提示，时间条的推进正式开始游戏综合在一起
    startTimeRoller () {
        //这下面是倒计时3，2，1，然后启动游戏
        var times = 3;
        this.timeRollerBar.fillStart = 0;
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
    },
    //这个游戏倒计时，还有时间结束判定游戏胜利还是失败
    countDownScheduleCallBack () {
        //说实话这个不是很好，根据这个方法的调用频率来进行时间的进行，会出现时间的快慢不同，应该使用现实物理时间
        this.timeRollerBar.fillStart += 0.01;
        //严格等于的浮点数，感觉可能会出问题，>=我感觉会更好
        if (this.timeRollerBar.fillStart === this.timeRollerBar.fillRange) {
            this.unschedule(this.countDownScheduleCallBack);
            this.unEventListener();
            if (this._score > this.gameDifficultScore) {
                this.passGame();
            }
            else {
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
    },
    //给地鼠直接赋予分数，还给地鼠赋予生命
    updateMouseNodeInfo(mouseNode, tag) {
        mouseNode.getComponent("MouseManager")._isLive = true;
        mouseNode._scoreUpdateFunc = this._mouseDataTable[tag].scoreUpdateFunc.bind(this);
        mouseNode.getComponent("MouseManager")._tag = tag;
    },
    //当地鼠动画结束之后，调用地鼠出来的方法
    onAnimationFinishEvent () {
        this._mouseIndexArr.pop();
        this.initMouseOutEvent();
    },
    //移动（生成）锤子，跟随鼠标或者手指
    onBeCreateHammerEvent (position) {
        //如果没有锤子就生成锤子
        if (!cc.isValid(this.hammerNode)) {
            this.hammerNode = cc.instantiate(this.hammer);
            this.hammerNode.zIndex = cc.macro.MAX_ZINDEX;
            this.hammerNode.getComponent("ColliderManager")._isCollider = false;
            this.node.addChild(this.hammerNode);
        }
        //这是锤子地址跟随事件触发时传过来的地址
        this.hammerNode.position = this.node.convertToNodeSpaceAR(position);
    },
    //点击事件之后的核心判定
    onHammerClicked () {
        //会判断是否_isCollider为true，必须是碰撞的，然后地鼠是否存活，之前赋予过地鼠生命，然后游戏是否进行，多重保险判定，
        //第一行是进行敲击动画
        this.hammerNode.angle = this.hammerNode.angle === 0 ? 30 : 0;
        //播放敲击声音
        this.node.getComponent("SoundManager").playEffectSound("hit");
        //一些判断
        if (this._mouseNode && this._mouseNode.getComponent("ColliderManager")._isCollider && this._mouseNode.getComponent("MouseManager")._isLive && cc.find("Canvas/Sp Game Bg")) {
            //播放锤击到和得分的声音
            this.node.getComponent("SoundManager").playEffectSound("hit");
            this.node.getComponent("SoundManager").playEffectSound("score");
            //执行加分逻辑
            this._mouseNode._scoreUpdateFunc();
            //显示加分特效
            this.showScoreEffectByTag(this._mouseNode, this._mouseNode.parent.getChildByName("Nodes Score Effect"));
            //防止分数是负的
            this._score = this._score < 0 ? 0 : this._score; 
            this.gameScore.string = this._score;
            //标记地鼠死亡
            this._mouseNode.getComponent("MouseManager")._isLive = false;
            //切换死亡的贴图
            let oldSpriteFrameName = this._mouseNode.getComponent(cc.Sprite).spriteFrame.name;
            let newSpriteFrameName = oldSpriteFrameName + "_death";
            
            this._mouseNode.getComponent(cc.Sprite).spriteFrame = this.animalDeathAtlas.getSpriteFrame(newSpriteFrameName);
            //播放死亡动画
            this._mouseNode.getChildByName("Anima Start").getComponent(cc.Animation).play();
        }
    },
    //根据地鼠的类型显示对应的加分/减分特效
    showScoreEffectByTag (node, scoreEffectNode) {
        for (let i = 0; i < scoreEffectNode.childrenCount; i++) {
            scoreEffectNode.children[i].opacity = node.getComponent("MouseManager")._tag === i ? 255 : 0;
            scoreEffectNode.children[i].runAction(cc.fadeOut(1));
        }
    },
    //play按钮的触发方法，作用就是进入正式游戏界面调用startTimeRoller开始游戏，
    onGamePlayButtonClicked() {
        this.node.getComponent("SoundManager").playBackGroundSound();
        cc.find("Canvas/Sp Hall Bg").active = false;
        cc.find("Canvas/Sp Game Bg").active = true;
        this.startTimeRoller();
    },
    //就是游戏规则按钮的触发方法，然后还判定了一下没有才会生成
    onGameRuleButtonClicked () {
        this.node.getComponent("SoundManager").playEffectSound("click", false);
        if (!this.gameRuleNode) {
            this.gameRuleNode = new cc.Node();
            this.gameRuleNode.addComponent(cc.Sprite).spriteFrame = this.gameRule;
            this.node.addChild(this.gameRuleNode);
        }
        this.gameRuleNode.opacity = 255;
    },
    //这个就是点击跳转网页
    onGameGitHubButtonClicked () {
        this.node.getComponent("SoundManager").playEffectSound("click", false);
        if (cc.sys.isBrowser) {
            cc.sys.openURL(this.gameGitHubUrl);
        }
    },
    //这个应该是返回大厅的按钮重新加载了场景
    onBackHallButtonClicked () {
        cc.director.loadScene("Game");
    },
    //声音开关的按钮，
    onSwitchMusicVolume (event) {
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
    },
    //通关时播放的通关音乐
    passGame() {
        this.node.getComponent("SoundManager").playEffectSound("pass", false);
    },
    //失败时的音乐
    loseGame () {
        this.node.getComponent("SoundManager").playEffectSound("lose", false);
    },
    //游戏结尾收尾函数，停止了所有地鼠的动画，延迟两秒重载游戏
    onFinishGameEvent () {
        for (let i = 0; i < this.mouseNodes.childrenCount; i++) {
            this.mouseNodes.children[i].getChildByName("Sp Mouse").getComponent(cc.Animation).stop();
        }
        setTimeout(()=>{
            cc.director.loadScene("Game");
        },2000);
    }
});

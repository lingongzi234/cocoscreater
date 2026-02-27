// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    talkLabel: cc.Label = null;

    private isDead = false;
    private longPressTriggered = false;

    private texts: string[] = [
        "别打我！",
        "救命啊！",
        "砸你咋滴",
        "有本事砸死我",
        "太疼了！"
    ];

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this.talkLabel.node.opacity = 0;
    }
    onTouchStart() {
        if (this.isDead) return;

        this.longPressTriggered = false;

        this.scheduleOnce(this.onLongPress, 2);  // 2秒后触发
    }
    onTouchEnd() {
        this.unschedule(this.onLongPress);
    }
    onLongPress() {
        this.longPressTriggered = true;
        this.showRandomText();
    }
    showRandomText() {

        let txt = this.texts[Math.floor(Math.random() * this.texts.length)];
        this.talkLabel.string = txt;

        cc.tween(this.talkLabel.node)
            .to(0.2, { opacity: 255 })
            .delay(1)
            .to(0.3, { opacity: 0 })
            .start();
    }
   
    // update (dt) {}
}

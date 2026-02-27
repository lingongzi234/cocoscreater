// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    editor: {
        menu: "CustomComponent/AnimationCallBack",
    },
    properties: {
    },
    //这个脚本的主要功能就是动画播放完的回调，把地鼠彻底隐藏并且禁止碰撞
    onFinish () {
        this.node.opacity = 0;
        this.node.getChildByName("Anima Start").opacity = 0;
        this.node.getChildByName("Anima Start").getComponent(cc.Animation).stop();
        this.node.getComponent(cc.BoxCollider).enabled = false;
    },

    // update (dt) {},
});

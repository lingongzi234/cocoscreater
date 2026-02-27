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
        menu: "CustomComponent/CollisionManagement",
    },

    properties: {
        // 当前节点是否与其他碰撞体接触
        _isCollider: false
    },

    onLoad () {
        // 启用全局碰撞
        var colliderManager = cc.director.getCollisionManager();
        colliderManager.enabled = true;
        // colliderManager.enabledDebugDraw = true;
    },

    start () {
        // 缓存 Game 组件，方便在碰撞时把“当前被砸到的老鼠节点”传回去
        this.gameComponent = cc.find("Canvas").getComponent("Game");
    },

    onCollisionEnter (other, self) {
        // 当节点属于“老鼠”分组时，记录碰撞并告知 Game 当前老鼠
        if (this.node.group === cc.game.groupList[1]) {
            this._isCollider = true;
            this.gameComponent._mouseNode = this.node;
        }
        
        else if (this.node.group === cc.game.groupList[2]) {
        
        }
    },

    onCollisionExit (other, self) {
        // 离开碰撞时重置老鼠的碰撞标记
        if (this.node.group === cc.game.groupList[1]) {
            this._isCollider = false;
        }
        
        else if (this.node.group === cc.game.groupList[2]) {

        }
    },

    initGroup () {
        // 预留分组初始化，但是没用上
        if (this.editorGroup === Group.Default) {
            this.contrastGroup = this.GroupName[0];
        }
        else if (this.editorGroup === Group.Mouse) {
            this.contrastGroup = this.GroupName[1];
        }
        else if (this.editorGroup === Group.Hammer) {
            this.contrastGroup = this.GroupName[2];
        }
    }
    // update (dt) {},
});

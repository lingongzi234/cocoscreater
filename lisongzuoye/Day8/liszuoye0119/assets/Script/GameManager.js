// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import Hall from'./Hall'
cc.Class({
    extends: cc.Component,
        
    properties: {
        hammer: {
            default: null,
            type: cc.Prefab
        },
       
    },
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {


        console.log(pi);
        
        this.initEventListener();
    },

    initEventListener () {
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove,(event)=>{this.onBeCreateHammerEvent(event.getLocation());},this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{
            this.onBeCreateHammerEvent(event.getLocation());
        }, this);
    },
    onBeCreateHammerEvent(position){

        if (!cc.isValid(this.hammerNode)) {
            this.hammerNode = cc.instantiate(this.hammer);
            this.hammerNode.zIndex = cc.macro.MAX_ZINDEX;
            this.node.addChild(this.hammerNode);
        }
        this.hammerNode.position = this.node.convertToNodeSpaceAR(position);
    }

   

    // update (dt) {},
});

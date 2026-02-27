

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onFinish() {
        this.node.opacity = 0;

        const animaNode = this.node.getChildByName("Anima Start");
        if (animaNode) {
            animaNode.opacity = 0;
            const anim = animaNode.getComponent(cc.Animation);
            if (anim) {
                anim.stop();
            }
        }
        const collider = this.node.getComponent(cc.BoxCollider);
        if (collider) {
            collider.enabled = false;
        }
    }

    // update (dt) {}
}

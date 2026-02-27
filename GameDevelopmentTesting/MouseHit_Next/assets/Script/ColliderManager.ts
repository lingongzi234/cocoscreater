import Game from "./Game";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

     _isCollider: boolean = false;

    /** Game 主逻辑脚本引用 */
     gameComponent: Game = null; 

    onLoad() {
        // 启用全局碰撞系统
        const colliderManager = cc.director.getCollisionManager();
        colliderManager.enabled = true;
    }

    start(){
        const canvas = cc.find("Canvas");
        if (canvas) {
            this.gameComponent = canvas.getComponent(Game);
        }
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider): void {

        if (this.node.group === "mouse") {
            this._isCollider = true;
            if (this.gameComponent) {
                this.gameComponent._mouseNode = this.node;
            }
        }
    }

    onCollisionExit(other: cc.Collider, self: cc.Collider): void {
        if (this.node.group === "mouse") {
            this._isCollider = false;
        }
        
    }
    // update (dt) {}
}

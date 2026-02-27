// GameController.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
    @property(cc.Prefab)
    screenManagerPrefab: cc.Prefab = null;

    private screenManager: cc.Node = null;

    onLoad() {
        this.initScreenManager();
    }

    initScreenManager() {
        if (!this.screenManagerPrefab) return;
        
        this.screenManager = cc.instantiate(this.screenManagerPrefab);
        
        // 添加到Canvas
        const canvas = cc.Canvas.instance.node;
        this.screenManager.parent = canvas;
        
        // 设置到最顶层
        this.screenManager.zIndex = 9999;
        
        // 获取组件并设置Logo
        const manager = this.screenManager.getComponent('ScreenManager');
        // manager.setLogoTexture(yourLogoTexture);
    }

    // 外部调用熄屏
    turnOffScreen() {
        if (this.screenManager) {
            const manager = this.screenManager.getComponent('ScreenManager');
            manager.turnOffScreen();
        }
    }

    // 外部调用亮屏
    turnOnScreen() {
        if (this.screenManager) {
            const manager = this.screenManager.getComponent('ScreenManager');
            manager.turnOnScreen();
        }
    }
}
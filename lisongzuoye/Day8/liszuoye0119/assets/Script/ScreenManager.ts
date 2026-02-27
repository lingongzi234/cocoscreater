const { ccclass, property, menu, disallowMultiple } = cc._decorator;

@ccclass
@menu('game/system/ScreenManager')     // ⭐ 添加到组件菜单的路径
@disallowMultiple                     // ⭐ 禁止同节点重复添加
export default class ScreenManager extends cc.Component {

    @property({ type: cc.Node, tooltip: "全屏黑色遮罩节点" })
    screenCover: cc.Node = null;  // 屏幕遮罩（黑屏层）

    @property({ type: cc.Node, tooltip: "开机时显示的Logo节点" })
    logoNode: cc.Node = null;     // Logo节点

    @property({ type: cc.Sprite, tooltip: "Logo 图片组件" })
    logoSprite: cc.Sprite = null; // Logo精灵

    @property({ type: cc.Button, tooltip: "电源按钮（点击切换亮灭屏）" })
    powerButton: cc.Button = null; // 电源按钮

    @property({ tooltip: "黑屏渐变动画时长" })
    fadeDuration: number = 0.8;    // 渐显动画时长

    @property({ tooltip: "Logo 显示持续时间" })
    logoShowDuration: number = 1.5; // Logo显示时长

    private isScreenOn: boolean = true;
    private isAnimating: boolean = false;

    onLoad() {
        this.node.zIndex = cc.macro.MAX_ZINDEX;

        this.screenCover.active = false;
        this.logoNode.active = false;

        if (this.powerButton) {
            this.powerButton.node.on('click', this.toggleScreen, this);
        }
    }

    toggleScreen() {
        if (this.isAnimating) return;
        this.isScreenOn ? this.turnOffScreen() : this.turnOnScreen();
    }

    turnOffScreen() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.isScreenOn = false;

        this.screenCover.active = true;
        this.screenCover.opacity = 0;

        cc.tween(this.screenCover)
            .to(0.3, { opacity: 255 })
            .call(() => {
                this.isAnimating = false;
                this.onScreenOff();
            })
            .start();
    }

    turnOnScreen() {
        if (this.isAnimating) return;

        this.isAnimating = true;

        this.showLogoAnimation(() => {
            cc.tween(this.screenCover)
                .delay(0.2)
                .to(0.5, { opacity: 0 })
                .call(() => {
                    this.screenCover.active = false;
                    this.isScreenOn = true;
                    this.isAnimating = false;
                    this.onScreenOn();
                })
                .start();
        });
    }

    showLogoAnimation(callback: Function) {
        this.logoNode.active = true;
        this.logoNode.opacity = 0;
        this.logoNode.scale = 0.8;

        cc.tween(this.logoNode)
            .to(this.fadeDuration * 0.3, { opacity: 255 })
            .parallel(
                cc.tween().to(this.fadeDuration * 0.7, { scale: 1.1 }, { easing: 'backOut' }),
                cc.tween().to(this.fadeDuration, { opacity: 255 })
            )
            .delay(this.logoShowDuration)
            .to(this.fadeDuration * 0.5, { opacity: 0 })
            .call(() => {
                this.logoNode.active = false;
                callback && callback();
            })
            .start();
    }

    onScreenOff() {
        console.log('屏幕已关闭');
        cc.systemEvent.emit('SCREEN_OFF');
    }

    onScreenOn() {
        console.log('屏幕已开启');
 
        cc.systemEvent.emit('SCREEN_ON');
    }

    setLogoTexture(texture: cc.Texture2D) {
        if (this.logoSprite && texture) {
            this.logoSprite.spriteFrame = new cc.SpriteFrame(texture);
        }
    }
}

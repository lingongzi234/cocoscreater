import { PianoKeyType, PianoKeyIndex } from "./PianoTypes";
const { ccclass, property } = cc._decorator;

@ccclass
export default class PianoKey extends cc.Component {

    @property(dragonBones.ArmatureDisplay)
    armature: dragonBones.ArmatureDisplay = null;

    @property(cc.AudioClip)
    sound: cc.AudioClip = null;

    @property({ type: cc.Enum(PianoKeyType) })
    keyType: PianoKeyType = PianoKeyType.b;
    
    @property({ type: cc.Enum(PianoKeyIndex) })
    keyIndex: PianoKeyIndex = PianoKeyIndex.Key1;
    @property
    allowSlideTrigger: boolean = true; // 黑键设为 false

    public soundOn: boolean = true;

    private activeTouchId: number = -1;
    private isPressed: boolean = false;
    private idleAnim: string;
    private pressAnim: string;
    private releaseAnim: string;

    onLoad() {

        const typeStr = PianoKeyType[this.keyType]; // 转回 "b" 或 "hei"

        this.idleAnim    = `${typeStr}_${this.keyIndex}_1`;
        this.pressAnim   = `${typeStr}_${this.keyIndex}_2`;
        this.releaseAnim = `${typeStr}_${this.keyIndex}_3`;

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this.armature.playAnimation(this.idleAnim, 0);
    }

    onTouchStart(event: cc.Event.EventTouch) {
        if (!this.soundOn) return; 
        if (this.isPressed) return;

        this.activeTouchId = event.getID();
        this.pressKey();
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.soundOn) return; 
        if (event.getID() !== this.activeTouchId) return;

        this.releaseKey();
        this.activeTouchId = -1;
    }

    pressKey() {
        if (!this.soundOn) return; 
        this.isPressed = true;
        cc.audioEngine.playEffect(this.sound, false);
        this.armature.playAnimation(this.pressAnim, 1);
    }

    releaseKey() {
        if (!this.soundOn) return; 
        this.isPressed = false;
        this.armature.playAnimation(this.releaseAnim, 1);

        // 回弹播完回待机
        this.scheduleOnce(() => {
            this.armature.playAnimation(this.idleAnim, 0);
        }, 0.1);
    }
    public setSoundEnabled(on: boolean) {
        this.soundOn = on;
        if (!on && this.isPressed) {
            // 声音关闭时松开按下的键
            this.releaseKey();
        }
    }
}

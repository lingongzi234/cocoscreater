// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    /** 背景音乐音频 */
    @property(cc.AudioClip)
    public backGroupSound: cc.AudioClip = null;

    /** 背景音乐是否循环 */
    @property
    public loop: boolean = true;

    /** 全局音量，滑块可调，变化时自动调用 setVolume */
    @property({ type: cc.Float, range: [0, 1, 0.1], slide: true, visible: true })
    public soundVolume: number = 1;

    /** 预置的音效池，按索引用于 playEffectSound 的命令映射 */
    @property([cc.AudioClip])
    public audioClipPool: cc.AudioClip[] = [];

    private _isPlaying: boolean = false;
    private _audioId: number = null;
    private _EffectId: number = null;

    public playBackGroundSound(): void {
        cc.audioEngine.stopAll();
        if (this.backGroupSound) {
            this._audioId = cc.audioEngine.play(this.backGroupSound, this.loop, this.soundVolume);
        }
    }

    
    public playEffectSound(command: string, loop?: boolean): void {
        // 如果 loop 未指定，默认使用 this.loop
        if (loop === null || loop === undefined) {
            loop = this.loop;
        }

        if (!command) return;

        switch (command) {
            case "begin":
            case "score":
                this._EffectId = this.audioClipPool[0] ? cc.audioEngine.playEffect(this.audioClipPool[0], loop) : null;
                break;
            case "pass":
                this._EffectId = this.audioClipPool[1] ? cc.audioEngine.playEffect(this.audioClipPool[1], loop) : null;
                break;
            case "hit":
                this._EffectId = this.audioClipPool[2] ? cc.audioEngine.playEffect(this.audioClipPool[2], loop) : null;
                break;
            case "lose":
                this._EffectId = this.audioClipPool[3] ? cc.audioEngine.playEffect(this.audioClipPool[3], loop) : null;
                break;
            case "second":
                this._EffectId = this.audioClipPool[4] ? cc.audioEngine.playEffect(this.audioClipPool[4], loop) : null;
                break;
            case "click":
                this._EffectId = this.audioClipPool[5] ? cc.audioEngine.playEffect(this.audioClipPool[5], loop) : null;
                break;
            default:
                console.error("Command is invalid");
        }
    }

    /** 全局暂停音乐 */
    public pauseMusic(): void {
        cc.audioEngine.pauseAll();
    }

    /** 全局恢复音乐 */
    public resumeMusic(): void {
        cc.audioEngine.resumeAll();
    }

    /** 设置全局音量 */
    public setVolume(): void {
        cc.audioEngine.setVolume(this._audioId,this.soundVolume);
    }

    /** 停掉所有音频 */
    public stopAll(): void {
        cc.audioEngine.stopAll();
        this._audioId = null;
        this._EffectId = null;
    }

    // update (dt) {}
}

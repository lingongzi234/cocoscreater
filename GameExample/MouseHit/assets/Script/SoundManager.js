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
        menu:"CustomComponent/AudioControl",
    },
    properties: {
        // 背景音乐音频
        backGroupSound: {
            default: null,
            type: cc.AudioClip
        },

        // 背景音乐是否循环
        loop: true,
        
        // 全局音量，滑块可调，变化时自动调用 setVolume
        soundVolume: {
            default: 1,
            range: [0,1,0.1],
            slide: true,
            notify: function() {
                this.setVolume();
            }
        },
        

        // 预置的音效池，按索引用于 playEffectSound 的命令映射
        audioClipPool: {
            default: [],
            type: cc.AudioClip
        },
        
        // 播放状态与音频 id 缓存
        _isPlaying: false,
        _audioId: null,
        _EffectId: null,
    },

    // 播放/重置背景音乐
    playBackGroundSound () {
        cc.audioEngine.stopAll();
        this._audioId = cc.audioEngine.play(this.backGroupSound, this.loop, this.soundVolume);
    },

    // 按命令字播放音效；未指定 loop 时使用默认 loop
    playEffectSound (command, loop) {
        if (loop === null && loop === undefined) {
            var loop = this.loop;
        }
        if (command !== null || command !== undefined) {
            switch (command) {
                case "begin":
                case "score":
                    this._EffectId = cc.audioEngine.playEffect(this.audioClipPool[0], loop);
                    break;
                case "pass":
                    this._EffectId = cc.audioEngine.playEffect(this.audioClipPool[1], loop);
                    break;
                case "hit":
                    this._EffectId = cc.audioEngine.playEffect(this.audioClipPool[2], loop);
                    break;
                case "lose":
                    this._EffectId = cc.audioEngine.playEffect(this.audioClipPool[3], loop);
                    break;
                case "second":
                    this._EffectId = cc.audioEngine.playEffect(this.audioClipPool[4], loop);
                    break;
                case "click":
                    this._EffectId = cc.audioEngine.playEffect(this.audioClipPool[5], loop);
                    break;
                default:
                    console.error("Command is invalid");
            }
        }
    },

    // 全局暂停/恢复
    pauseMusic () {
        cc.audioEngine.pauseAll();
    },

    resumeMusic () {
        cc.audioEngine.resumeAll();
    },

    // 设置全局音量
    setVolume() {
        cc.audioEngine.setVolume(this.soundVolume);
    },

    // 停掉所有音频
    stopAll () {
        cc.audioEngine.stopAll();
        this._audioId = null;
    },
});

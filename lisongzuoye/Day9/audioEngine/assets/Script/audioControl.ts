// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    clip1: cc.AudioClip = null;

    @property(cc.AudioClip)
    clip2: cc.AudioClip = null;
    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    effectClips: cc.AudioClip[] = [];

    @property(cc.Slider)
    clip1VolumeSlider: cc.Slider = null;

    @property(cc.Slider)
    clip2VolumeSlider: cc.Slider = null;

    @property(cc.Slider)
    bgmVolumeSlider: cc.Slider = null;

    @property(cc.Slider)
    effectVolumeSlider: cc.Slider = null;

    @property(cc.Slider)
    audioTimeSlider: cc.Slider = null;

    @property(cc.Label)
    bgmVolumeLab: cc.Label = null;

    @property(cc.Label)
    clip1VolumeLab: cc.Label = null;

    @property(cc.Label)
    clip2VolumeLab: cc.Label = null;

    @property(cc.Label)
    effectVolumeLab: cc.Label = null;

    @property(cc.Label)
    clip1DurationLab: cc.Label = null;

    @property(cc.Label)
    clip2DurationLab: cc.Label = null;

    @property(cc.Label)
    bgmDurationLab: cc.Label = null;

    @property(cc.Label)
    bgmTimeLab: cc.Label = null;

    @property(cc.Label)
    effectDurationLab: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}

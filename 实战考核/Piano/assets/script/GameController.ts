const { ccclass, property } = cc._decorator;
import PianoInputLayer from "./PianoInputLayer";

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Node)
    settingsPanel: cc.Node = null;   // 面板节点

    @property(PianoInputLayer)
    pianoInput: PianoInputLayer = null; // 钢琴输入层

    @property(cc.Node)
    soundOff: cc.Node = null; 

    private soundOn: boolean = true;

    /** 打开设置面板 */
    public openSettings() {
        this.settingsPanel.active = true;
    }

    /** 关闭设置面板 */
    public closeSettings() {
        this.settingsPanel.active = false;
    }

    /** 切换声音开关 */
    public toggleSound() {
        if(this.soundOn===true){
            this.soundOff.active=true;
        }else{
            this.soundOff.active=false;
        }
        this.soundOn = !this.soundOn;
        this.pianoInput.setSoundEnabled(this.soundOn);
        console.log("声音状态:", this.soundOn ? "开" : "关");
    }
}

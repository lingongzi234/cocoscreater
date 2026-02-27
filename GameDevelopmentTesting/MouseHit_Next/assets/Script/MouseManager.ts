

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({ visible: false })  
     _isLive: boolean = false;

    /** 节点标签 */
    @property({ visible: false })
     _tag: number = -1;

    public scoreUpdateFunc: () => void = null;

    start(): void {
       
    }

    // update (dt) {}
}

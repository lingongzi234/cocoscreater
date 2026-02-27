const { ccclass, property } = cc._decorator;

@ccclass
export default class Cell extends cc.Component {

    public row: number = 0;
    public col: number = 0;

    @property(sp.Skeleton)
    pieceSpine: sp.Skeleton = null;

    private game = null;
    private hasPiece = false;
    private highlight = false;


    init(r: number, c: number, game) {
        this.row = r;
        this.col = c;
        this.game = game;
        this.reset();
    }

    reset() {
        this.hasPiece = false;
        this.pieceSpine.node.active = false;
        this.pieceSpine.setToSetupPose();
        this.pieceSpine.clearTracks();
    }

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    }

    onClick() {
        if (this.game.inTutorial && !this.highlight) return;
        if (this.hasPiece) return;
        this.game.playerMove(this.row, this.col);
    }
    setPiece(type: number, onComplete?: Function) {
        this.hasPiece = true;
        this.pieceSpine.node.active = true;
    
        const appearAni = type === 1 ? "X_chuxian" : "O_chuxian";
        const idleAni = type === 1 ? "X_idle" : "O_idle";
        const audioClip = type === 1 ? this.game.xSound : this.game.oSound;
        if (audioClip) {
            cc.audioEngine.playEffect(audioClip, false);
        }
    
        // 先清掉旧 listener
        this.pieceSpine.setCompleteListener(null);
    
        // 播放 appear → 播完自动 add idle 循环
        this.pieceSpine.setAnimation(0, appearAni, false);
        this.pieceSpine.setCompleteListener(() => {

            // 防止多次触发
            this.pieceSpine.setCompleteListener(null);
    
            // 播 idle 循环
            this.pieceSpine.setAnimation(0, idleAni, true);
    
            // 通知 GameManager：动画结束
            if (onComplete) onComplete();
        });
    }
    setPieceInstant(type: number) {
        this.hasPiece = true;
        this.pieceSpine.node.active = true;
    
        const idleAni = type === 1 ? "X_idle" : "O_idle";

        this.pieceSpine.setCompleteListener(null);
        this.pieceSpine.setAnimation(0, idleAni, true);
    }
    setHighlight(active: boolean) {
        this.highlight = active;
        this.node.scale = active ? 1.15 : 1;
    }
}

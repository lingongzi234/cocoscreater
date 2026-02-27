const { ccclass, property } = cc._decorator;
import PianoKey from "./PianoKey";

@ccclass
export default class PianoInputLayer extends cc.Component {

    @property([PianoKey])
    allKeys: PianoKey[] = []; // 所有键

    public soundOn: boolean = true;//声音开关

    private touchIdMap: Map<number, PianoKey> = new Map();

    onLoad() {
        cc.macro.ENABLE_MULTI_TOUCH = true;

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    public setSoundEnabled(on: boolean) {
        this.soundOn = on;
        this.allKeys.forEach(key => key.setSoundEnabled(on));


        if (!on) {
            this.touchIdMap.forEach(key => key.releaseKey());
            this.touchIdMap.clear();
        }
    }

    private getKeyAtPosition(pos: cc.Vec2, onlyWhite: boolean = false): PianoKey | null {
        let candidateWhite: PianoKey | null = null;

        for (const key of this.allKeys) {
            const rect = key.node.getBoundingBoxToWorld();
            if (!rect.contains(pos)) continue;
    
            if (!key.allowSlideTrigger) {
                // 黑键优先，无论滑动还是点击
                return key;
            }
    
            if (key.allowSlideTrigger) {
                // 白键暂存
                if (!onlyWhite) candidateWhite = key; // 点击用白键
                if (onlyWhite) candidateWhite = key;  // 滑动用白键
            }
        }
    
        return candidateWhite;
    }

    onTouchStart(event: cc.Event.EventTouch) {
        if (!this.soundOn) return;
        const touchId = event.getID();
        const pos = event.getLocation();

        const key = this.getKeyAtPosition(pos);
        if (!key) return;

        key.pressKey();
        this.touchIdMap.set(touchId, key);
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if (!this.soundOn) return;
        const touchId = event.getID();
        const pos = event.getLocation();
        

        // 只对白键支持滑动
        const key = this.getKeyAtPosition(pos, true);
        const prevKey = this.touchIdMap.get(touchId);

        if (prevKey !== key) {
            // 手指滑出上一个键
            if (prevKey) prevKey.releaseKey();

            // 手指滑入新键
            if (key && key.allowSlideTrigger) {
                key.pressKey();
                this.touchIdMap.set(touchId, key);
            } else {
                // 没滑到白键，清掉当前键
                this.touchIdMap.delete(touchId);
            }
        }
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.soundOn) return;
        const touchId = event.getID();
        const key = this.touchIdMap.get(touchId);
        if (key) key.releaseKey();
        this.touchIdMap.delete(touchId);
    }
}

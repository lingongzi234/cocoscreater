const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelItem extends cc.Component {

    @property(cc.Node)
    starImg: cc.Node = null;

    @property(cc.Node)
    itemBg: cc.Node = null;

    @property(cc.Node)
    levelTxt: cc.Node = null;
    private _level: number = 0;
    private _callfunc: (level: number) => void = null;

    onLoad() {

    }
    public showStar(
        isOpen: boolean,
        starCount: number,
        levelImgAtlas: cc.SpriteAtlas,
        level: number
    ) {
        this._level = level;

        const bgSprite = this.itemBg.getComponent(cc.Sprite);
        const btn = this.itemBg.getComponent(cc.Button);
        const starSprite = this.starImg.getComponent(cc.Sprite);
        const label = this.levelTxt.getComponent(cc.Label);

        if (isOpen) {
            bgSprite.spriteFrame = levelImgAtlas.getSpriteFrame("pass_bg");

            this.starImg.active = true;
            starSprite.spriteFrame = levelImgAtlas.getSpriteFrame("point" + starCount);

            this.levelTxt.opacity = 255;
            btn.interactable = true;
        } else {
            bgSprite.spriteFrame = levelImgAtlas.getSpriteFrame("lock");

            this.starImg.active = false;
            this.levelTxt.opacity = 125;
            btn.interactable = false;
        }

        label.string = level.toString();
    }
    public btnCallBack() {
        if (this._callfunc) {
            this._callfunc(this._level);
        }
    }
    public levelFunc(callfunc: (level: number) => void) {
        this._callfunc = callfunc;
    }
}

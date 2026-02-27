// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    screenshotRoot: cc.Node = null;

    texture: cc.RenderTexture = null;
    camera: cc.Camera = null;
    rTexture: cc.RenderTexture = null;
    _data: any = null;
    screenshotNode: cc.Node = null;
     onLoad(){
        this.camera=cc.find("Canvas/Camera").getComponent(cc.Camera);
        this.rTexture=new cc.RenderTexture();
        this.rTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_D24S8);
    
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
       

    }
    
    onBtnCapture(){
        if(this.screenshotNode){

            this.screenshotNode.destroy();
        }
        
        this.camera.targetTexture = this.rTexture;
        this.camera.render();
        this._data=this.rTexture.readPixels();
        this.camera.targetTexture = null;
        var texture=new cc.Texture2D();
        texture.initWithData(this._data,cc.Texture2D.PixelFormat.RGBA8888,this.rTexture.width,this.rTexture.height);
        
        this.screenshotNode=new cc.Node();
        this.screenshotNode.addComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(texture);
        this.screenshotNode.getComponent(cc.Sprite).spriteFrame.setFlipY(true);
        this.screenshotRoot.addChild(this.screenshotNode);
        this.screenshotNode.setScale(0.25);
    }
    onBtnDelete () {
        if (!this.screenshotNode) return;

        let sp = this.screenshotNode.getComponent(cc.Sprite);
        
    
        if (sp && sp.spriteFrame) {
    
            let tex = sp.spriteFrame.getTexture();
    
            // 释放 Texture2D
            if (tex) {
                tex.destroy();
            }
    
            // 释放 SpriteFrame
            sp.spriteFrame.destroy();
        }
    
        // 删除节点
        this.screenshotNode.destroy();
        this.screenshotNode = null;
    }

    // update (dt) {}
}

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
    testParent: cc.Node = null;
    _testRes5Bundle: cc.AssetManager.Bundle = null;
    @property(dragonBones.DragonBonesAsset)
    dragonBoneData: dragonBones.DragonBonesAsset = null;
 
    @property(dragonBones.DragonBonesAtlasAsset)
    dragonBoneAtlas: dragonBones.DragonBonesAtlasAsset = null;
    _spine: sp.Skeleton = null;

    loadBundle() {
        if (!this._testRes5Bundle) {
            cc.assetManager.loadBundle("testRes5", (errLoadBundle, bundle)=> {
                if (!errLoadBundle) {
                    this._testRes5Bundle = bundle;
                } else {
                    console.error("load testRes5 bundle failed", errLoadBundle);
                }
            })
        }
    }
    testLoadSpriteFrame() {
        if (!this._testRes5Bundle) return;
        this._testRes5Bundle.load("texture/cake01", cc.SpriteFrame, (errLoadSpriteFrame, spriteFrame: cc.SpriteFrame)=> {
            if (!errLoadSpriteFrame) {
                let cakeNode = new cc.Node("cake");
                cakeNode.addComponent(cc.Sprite).spriteFrame = spriteFrame;
               
                this.testParent.addChild(cakeNode);
            } else {
                console.error("load sprite frame failed", errLoadSpriteFrame);
            }
        })
    }
    testLoadTextureDir () {
        if (!this._testRes5Bundle) return;
        this._testRes5Bundle.loadDir("./", cc.SpriteFrame, (errLoadTexture, spriteFrames: (cc.SpriteFrame)[])=> {
            if (!errLoadTexture) {
                spriteFrames.forEach(value => {
                    if (value.name === "cake03") {
                        let bgNode = new cc.Node("cake03");
                        bgNode.addComponent(cc.Sprite).spriteFrame = value;
                    
                        this.testParent.addChild(bgNode);
                    }
                })
            } else {
                console.error("load texture failed", errLoadTexture);
            }
        })
    }
    testAssetRelease () {
        if (!this._testRes5Bundle) return;
        this._testRes5Bundle.release("texture/cake01", cc.SpriteFrame);
        this._testRes5Bundle.release("texture/cake03", cc.SpriteFrame);
        this._testRes5Bundle.releaseAll;

       
    }
    testLoadAudio () {
        if (!this._testRes5Bundle) return;
    
        this._testRes5Bundle.load("audio/begin_music", cc.AudioClip, (err, clip: cc.AudioClip) => {
            if (err) {
                console.error(err);
                return;
            }
    
            cc.audioEngine.playMusic(clip, true);
          
        });
    }
    testLoadSpine () {
        if (!this._testRes5Bundle) return;
    
        this._testRes5Bundle.load("spineboy/spineboy", sp.SkeletonData, (err, data: sp.SkeletonData) => {
            if (err) {
                console.error(err);
                return;
            }
    
            let node = new cc.Node("spineRole");
            this._spine = node.addComponent(sp.Skeleton);
            this._spine.skeletonData = data;
            node.scale = 0.3;
            this.testParent.addChild(node);
            this.initSpineEvents();
            this.playSpine("idle", true);
        });
    }
    runSpine(){

        this.playSpine("run", true);

    }
    playSpine(name: string, loop: boolean = false) {
        if (!this._spine) return;
        this._spine.setAnimation(0, name, loop);
    }
    
    pauseSpine() {
        if (this._spine) this._spine.paused = true;
    }
    
    resumeSpine() {
        if (this._spine) this._spine.paused = false;
    }
    
    stopSpine() {
        if (!this._spine) return;
        this._spine.clearTracks();
    }
    initSpineEvents() {
        this._spine.setStartListener(t => console.log("动画开始:", t.animation.name));
        this._spine.setInterruptListener(t => console.log("动画被打断:", t.animation.name));
        this._spine.setEndListener(t => console.log("动画结束:", t.animation.name));
        this._spine.setCompleteListener(t => console.log("动画完成:", t.animation.name));
    }
    
    testDynamicAddDragonBones() {
        if (!this.testParent) return;
        if (!this._testRes5Bundle) return;

         this._testRes5Bundle.load("dragonBone/monsterbone001_0_ske", dragonBones.DragonBonesAsset, (err, asset:dragonBones.DragonBonesAsset) => {
        if (err) return;

        this._testRes5Bundle.load("dragonBone/monsterbone001_0_tex", dragonBones.DragonBonesAtlasAsset, (err2, atlas:dragonBones.DragonBonesAtlasAsset) => {
            let node = new cc.Node();
            let dragonBoneSp = node.addComponent(dragonBones.ArmatureDisplay);
        dragonBoneSp.dragonAsset = asset;
        dragonBoneSp.dragonAtlasAsset =atlas;
        dragonBoneSp.armatureName = "armatureName";
        dragonBoneSp.playAnimation('walk', 0);
        this.testParent.addChild(node);
    });
});
    }
    testLoadJson () {
        if (!this._testRes5Bundle) return;
    
        this._testRes5Bundle.load("json/xiyouji_characters", cc.JsonAsset, (err, json: cc.JsonAsset) => {
            if (err) return;
    
            console.log("读取到配置:", json.json);
        });
    }
    testLoadTTFFont () {
        if (!this._testRes5Bundle || !this.testParent) return;
    
        this._testRes5Bundle.load("font/TW-Kai-small", cc.TTFFont, (err, font: cc.TTFFont) => {
            if (err) {
                console.error("load font failed", err);
                return;
            }
    
            let node = new cc.Node("label");
            let label = node.addComponent(cc.Label);
    
            label.string = "Hello 字体!";
            label.font = font; 
            label.fontSize = 20;
    
            this.testParent.addChild(node);
    
        });
    }
    releaseAll() {
        // 先删场景节点
        this.testParent.removeAllChildren();
    
        // 释放 bundle 内所有加载过的资源
        this._testRes5Bundle.releaseAll();
    
        // 卸载 bundle
        cc.assetManager.removeBundle(this._testRes5Bundle);
        this._testRes5Bundle = null;
    }


}

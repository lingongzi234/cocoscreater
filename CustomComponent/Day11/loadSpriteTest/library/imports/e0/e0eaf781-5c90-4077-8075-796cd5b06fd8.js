"use strict";
cc._RF.push(module, 'e0eafeBXJBAd4B1eWzVsG/Y', 'LoadManySingleDiffSprite');
// Script/LoadManySingleDiffSprite.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadManySingleDiffSprite = /** @class */ (function (_super) {
    __extends(LoadManySingleDiffSprite, _super);
    function LoadManySingleDiffSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testNode = null;
        _this.testNode1 = null;
        _this.tips0 = null;
        _this.tips1 = null;
        _this.model = 2;
        _this.spriteFramePathList = ["3013002_1", "3013007_1", "3013009_1", "3013011_1", "3013028_1", "3013029_1",
            "3013031_1", "3023003_1", "3023006_1", "3023010_1", "3023012_1", "3023029_1", "3023030_1", "3023032_1",
            "3033002_1", "3033005_1", "3033010_1", "3033013_1", "3033028_1", "3033029_1", "3033031_1", "3043003_1",
            "3043006_1", "3043008_1", "3043014_1", "3043028_1", "3043029_1", "3043031_1", "3053003_1", "3053005_1",
            "3053009_1", "3053021_1", "3053022_1", "3063002_1", "3063003_1"
        ];
        return _this;
    }
    LoadManySingleDiffSprite.prototype.loadLocalBundleTest0 = function () {
        var _this = this;
        var startTime = performance.now();
        if (this.testNode) {
            this.testNode.destroyAllChildren();
        }
        var _loop_1 = function (i) {
            cc.assetManager.loadBundle("kongfu0", function (err0, imageBundle) {
                if (err0) {
                    console.error(err0);
                }
                else {
                    imageBundle.load(_this.spriteFramePathList[i], cc.SpriteFrame, function (err1, spf0) {
                        if (err1) {
                            console.error(err1);
                        }
                        else {
                            _this.setSpriteFrame(_this.testNode, _this.tips0.getComponent(cc.Label), i, spf0, startTime);
                        }
                    });
                }
            });
        };
        for (var i = 0; i < this.spriteFramePathList.length; i++) {
            _loop_1(i);
        }
    };
    LoadManySingleDiffSprite.prototype.loadLocalBundleTest1 = function () {
        var startTime = performance.now();
        if (this.testNode1) {
            this.testNode1.destroyAllChildren();
        }
        for (var i = 0; i < this.spriteFramePathList.length; i++) {
            var bundle = cc.assetManager.getBundle("kongfu1");
            if (bundle) {
                var spriteFrame = bundle.get(this.spriteFramePathList[i], cc.SpriteFrame);
                if (spriteFrame) {
                    this.setSpriteFrame(this.testNode1, this.tips1.getComponent(cc.Label), i, spriteFrame, startTime);
                }
            }
            else {
                // 使用默认的异步加载 bundle 并加载 bundle 文件夹内的图片资源，成功后渲染所有图片
                this.loadBundleAndSpriteFrame(i, startTime);
            }
        }
    };
    LoadManySingleDiffSprite.prototype.loadBundleAndSpriteFrame = function (i, startTime) {
        var _this = this;
        cc.assetManager.loadBundle("kongfu1", function (err0, imageBundle) {
            if (err0) {
                console.error(err0);
            }
            else {
                imageBundle.load(_this.spriteFramePathList[i], cc.SpriteFrame, function (err1, spf1) {
                    if (err1) {
                        console.error(err1);
                    }
                    else {
                        _this.setSpriteFrame(_this.testNode1, _this.tips1.getComponent(cc.Label), i, spf1, startTime);
                    }
                });
            }
        });
    };
    LoadManySingleDiffSprite.prototype.setSpriteFrame = function (parent, tipLab, i, spf, startTime) {
        if (parent) {
            var node = new cc.Node();
            node.scale = 0.2;
            node.addComponent(cc.Sprite).spriteFrame = spf;
            parent.addChild(node);
            if (i === this.spriteFramePathList.length - 1) {
                tipLab.string = "loadTime is: " + Math.floor(1000 * (performance.now() - startTime)) / 1000;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], LoadManySingleDiffSprite.prototype, "testNode", void 0);
    __decorate([
        property(cc.Node)
    ], LoadManySingleDiffSprite.prototype, "testNode1", void 0);
    __decorate([
        property(cc.Label)
    ], LoadManySingleDiffSprite.prototype, "tips0", void 0);
    __decorate([
        property(cc.Label)
    ], LoadManySingleDiffSprite.prototype, "tips1", void 0);
    __decorate([
        property(cc.Integer)
    ], LoadManySingleDiffSprite.prototype, "model", void 0);
    LoadManySingleDiffSprite = __decorate([
        ccclass
    ], LoadManySingleDiffSprite);
    return LoadManySingleDiffSprite;
}(cc.Component));
exports.default = LoadManySingleDiffSprite;

cc._RF.pop();
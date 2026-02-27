"use strict";
cc._RF.push(module, '8744f5g8qRGkIz7Zb+5dDwg', 'LoadDirSprite');
// Script/LoadDirSprite.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testNode = null;
        _this.testNode1 = null;
        _this.tips0 = null;
        _this.tips1 = null;
        return _this;
    }
    Helloworld.prototype.loadLocalBundleTest0 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startTime;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = performance.now();
                        if (!this.testNode) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.destroyAllChildren(this.testNode).then(function () {
                                cc.assetManager.loadBundle("kongfu0", function (err0, imageBundle) {
                                    if (err0) {
                                        console.error(err0);
                                    }
                                    else {
                                        imageBundle.loadDir("./", cc.SpriteFrame, function (err1, spfs0) {
                                            if (err1) {
                                                console.error(err1);
                                            }
                                            else {
                                                // setSpriteFrame0 接口中实现了对文件夹中所有图片的渲染以及加载时间输出
                                                _this.setSpriteFrame0(spfs0, startTime);
                                            }
                                        });
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Helloworld.prototype.destroyAllChildren = function (node) {
        return new Promise(function (resolve, reject) {
            var len = node.childrenCount;
            for (var i = 0; i < len; i++) {
                node.children[i].destroy();
            }
            setTimeout(function () {
                resolve(null);
            }, 10);
        });
    };
    Helloworld.prototype.loadLocalBundleTest1 = function () {
        var startTime = performance.now();
        if (this.testNode1) {
            this.testNode1.destroyAllChildren();
        }
        var bundle = cc.assetManager.getBundle("kongfu1");
        if (bundle) {
            var spriteFrames = bundle.getDirWithPath("./", cc.SpriteFrame);
            if (spriteFrames.length > 0) {
                // setSpriteFrame0 实现了对文件夹中所有图片的渲染以及加载时间输出
                this.setSpriteFrame1(spriteFrames, startTime, bundle);
            }
        }
        else {
            // 使用默认的异步加载 bundle 并加载 bundle 文件夹内的图片资源，成功后渲染所有图片
            this.loadBundleAndSpriteFrame(startTime);
        }
    };
    Helloworld.prototype.loadBundleAndSpriteFrame = function (startTime) {
        var _this = this;
        cc.assetManager.loadBundle("kongfu1", function (err0, imageBundle) {
            if (err0) {
                console.error(err0);
            }
            else {
                imageBundle.loadDir("./", cc.SpriteFrame, function (err1, spfs1) {
                    if (err1) {
                        console.error(err1);
                    }
                    else {
                        _this.setSpriteFrame1(spfs1, startTime);
                    }
                });
            }
        });
    };
    Helloworld.prototype.setSpriteFrame0 = function (spfs, startTime) {
        if (this.testNode) {
            for (var i = 0; i < spfs.length; i++) {
                var node = new cc.Node();
                node.scale = 0.2;
                node.addComponent(cc.Sprite).spriteFrame = spfs[i];
                this.testNode.addChild(node);
                if (i === spfs.length - 1) {
                    this.tips0.string = "loadTime0 is: " + Math.floor(1000 * (performance.now() - startTime)) / 1000;
                }
            }
        }
    };
    // setSpriteFrame0 (spfs: any, startTime: number) {
    //     if (this.testNode) {
    //         // for (let i = 0; i < spfs.length; i++) {
    //             var node = new cc.Node();
    //             node.scale = 0.2;
    //             node.addComponent(cc.Sprite).spriteFrame = spfs;
    //             this.testNode.addChild(node);
    //             // if (i === spfs.length - 1) {
    //                 this.tips0.string = "loadTime0 is: " + Math.floor(1000 * (performance.now() - startTime)) / 1000;
    //             // }
    //         // }
    //     }
    // }
    Helloworld.prototype.setSpriteFrame1 = function (spfs, startTime, bundle) {
        if (this.testNode1) {
            for (var i = 0; i < spfs.length; i++) {
                var node = new cc.Node();
                node.scale = 0.2;
                if (bundle) {
                    node.addComponent(cc.Sprite).spriteFrame = bundle.get(spfs[i].path, cc.SpriteFrame);
                }
                else {
                    node.addComponent(cc.Sprite).spriteFrame = spfs[i];
                }
                this.testNode1.addChild(node);
                if (i == spfs.length - 1) {
                    this.tips1.string = "loadTime1 is: " + Math.floor(1000 * (performance.now() - startTime)) / 1000;
                }
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "testNode", void 0);
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "testNode1", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "tips0", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "tips1", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();
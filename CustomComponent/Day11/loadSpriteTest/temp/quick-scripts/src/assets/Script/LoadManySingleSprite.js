"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'LoadManySingleSprite');
// Script/LoadManySingleSprite.ts

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
        _this.loadSpriteCount = 35;
        _this.tips0 = null;
        _this.tips1 = null;
        return _this;
    }
    Helloworld.prototype.loadLocalBundleTest0 = function () {
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
                    imageBundle.load("3013002_1", cc.SpriteFrame, function (err1, spf0) {
                        if (err1) {
                            console.error(err1);
                        }
                        else {
                            _this.setSpriteFrame0(spf0, i, startTime);
                        }
                    });
                }
            });
        };
        for (var i = 0; i < this.loadSpriteCount; i++) {
            _loop_1(i);
        }
    };
    Helloworld.prototype.loadLocalBundleTest1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startTime, _loop_2, this_1, bundle, spriteFrame, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = performance.now();
                        if (this.testNode1) {
                            this.testNode1.destroyAllChildren();
                        }
                        _loop_2 = function (i) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        bundle = cc.assetManager.getBundle("kongfu1");
                                        if (!bundle) return [3 /*break*/, 1];
                                        spriteFrame = bundle.get("3013002_1", cc.SpriteFrame);
                                        if (spriteFrame) {
                                            this_1.setSpriteFrame1(spriteFrame, i, startTime);
                                        }
                                        return [3 /*break*/, 3];
                                    case 1: 
                                    // 因为 for 循环执行循环体代码的间隔时间是极短的，如果在循环体代码中 load 资源
                                    // 那么循环体代码中并不能准确获取到 bundle 和图片的缓存资源
                                    // 所以这里可以使用 await Promise 的方法等待 bundle 和图片资源加载成功后再执行后续的循环体代码
                                    // 这样 for 循环后续的循环体代码就可以成功获取到已经加载的 bundle 和图片的缓存资源
                                    return [4 /*yield*/, this_1.loadBundleAndSpriteFrameAsync().then(function (spf) {
                                            _this.setSpriteFrame1(spf, i, startTime);
                                        })];
                                    case 2:
                                        // 因为 for 循环执行循环体代码的间隔时间是极短的，如果在循环体代码中 load 资源
                                        // 那么循环体代码中并不能准确获取到 bundle 和图片的缓存资源
                                        // 所以这里可以使用 await Promise 的方法等待 bundle 和图片资源加载成功后再执行后续的循环体代码
                                        // 这样 for 循环后续的循环体代码就可以成功获取到已经加载的 bundle 和图片的缓存资源
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.loadSpriteCount)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Helloworld.prototype.loadBundleAndSpriteFrameAsync = function () {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle("kongfu1", function (err0, imageBundle) {
                if (err0) {
                    console.error(err0);
                }
                else {
                    imageBundle.load("3013002_1", cc.SpriteFrame, function (err1, spf1) {
                        if (err1) {
                            console.error(err1);
                        }
                        else {
                            resolve(spf1);
                        }
                    });
                }
            });
        });
    };
    Helloworld.prototype.setSpriteFrame0 = function (spf, i, startTime) {
        if (this.testNode) {
            var node = new cc.Node();
            node.scale = 0.2;
            node.addComponent(cc.Sprite).spriteFrame = spf;
            this.testNode.addChild(node);
            if (i === this.loadSpriteCount - 1) {
                this.tips0.string = "loadTime0 is: " + Math.floor(1000 * (performance.now() - startTime)) / 1000;
            }
        }
    };
    Helloworld.prototype.setSpriteFrame1 = function (spf, i, startTime) {
        if (this.testNode1) {
            var node = new cc.Node();
            node.scale = 0.2;
            node.addComponent(cc.Sprite).spriteFrame = spf;
            this.testNode1.addChild(node);
            if (i === this.loadSpriteCount - 1) {
                this.tips1.string = "loadTime1 is: " + Math.floor(1000 * (performance.now() - startTime)) / 1000;
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
        property
    ], Helloworld.prototype, "loadSpriteCount", void 0);
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
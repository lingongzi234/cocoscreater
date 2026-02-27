
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/LoadDirSprite');
require('./assets/Script/LoadManySingleDiffSprite');
require('./assets/Script/LoadManySingleSprite');
require('./assets/Script/TestList');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoadDirSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9hZERpclNwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlJQztRQTlIRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDOztJQXFIM0IsQ0FBQztJQWxIUyx5Q0FBb0IsR0FBMUI7Ozs7Ozs7d0JBQ1EsU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs2QkFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBYix3QkFBYTt3QkFDYixxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDOUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFVBQUMsSUFBSSxFQUFFLFdBQVc7b0NBQ3BELElBQUksSUFBSSxFQUFFO3dDQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7cUNBQ3ZCO3lDQUFNO3dDQUNILFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJLEVBQUUsS0FBdUI7NENBQ3BFLElBQUksSUFBSSxFQUFFO2dEQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ3ZCO2lEQUFNO2dEQUNILDZDQUE2QztnREFDN0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENB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SUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDcEc7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQTdIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBWk4sVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlJOUI7SUFBRCxpQkFBQztDQWpJRCxBQWlJQyxDQWpJdUMsRUFBRSxDQUFDLFNBQVMsR0FpSW5EO2tCQWpJb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0Tm9kZTE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpcHMwOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwczE6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgYXN5bmMgbG9hZExvY2FsQnVuZGxlVGVzdDAgKCkge1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROb2RlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlc3Ryb3lBbGxDaGlsZHJlbih0aGlzLnRlc3ROb2RlKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJrb25nZnUwXCIsIChlcnIwLCBpbWFnZUJ1bmRsZSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUJ1bmRsZS5sb2FkRGlyKFwiLi9cIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIxLCBzcGZzMDogW2NjLlNwcml0ZUZyYW1lXSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFNwcml0ZUZyYW1lMCDmjqXlj6PkuK3lrp7njrDkuoblr7nmlofku7blpLnkuK3miYDmnInlm77niYfnmoTmuLLmn5Pku6Xlj4rliqDovb3ml7bpl7TovpPlh7pcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZTAoc3BmczAsIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lBbGxDaGlsZHJlbiAobm9kZTogY2MuTm9kZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gbm9kZS5jaGlsZHJlbkNvdW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KVxuICAgIH0gXG5cbiAgICBsb2FkTG9jYWxCdW5kbGVUZXN0MSAoKSB7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgaWYgKHRoaXMudGVzdE5vZGUxKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROb2RlMS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJrb25nZnUxXCIpO1xuICAgICAgICBpZiAoYnVuZGxlKSB7XG4gICAgICAgICAgICB2YXIgc3ByaXRlRnJhbWVzID0gYnVuZGxlLmdldERpcldpdGhQYXRoKFwiLi9cIiwgY2MuU3ByaXRlRnJhbWUpIGFzIFtjYy5TcHJpdGVGcmFtZV07XG4gICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBzZXRTcHJpdGVGcmFtZTAg5a6e546w5LqG5a+55paH5Lu25aS55Lit5omA5pyJ5Zu+54mH55qE5riy5p+T5Lul5Y+K5Yqg6L295pe26Ze06L6T5Ye6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZTEoc3ByaXRlRnJhbWVzLCBzdGFydFRpbWUsIGJ1bmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDkvb/nlKjpu5jorqTnmoTlvILmraXliqDovb0gYnVuZGxlIOW5tuWKoOi9vSBidW5kbGUg5paH5Lu25aS55YaF55qE5Zu+54mH6LWE5rqQ77yM5oiQ5Yqf5ZCO5riy5p+T5omA5pyJ5Zu+54mHXG4gICAgICAgICAgICB0aGlzLmxvYWRCdW5kbGVBbmRTcHJpdGVGcmFtZShzdGFydFRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZEJ1bmRsZUFuZFNwcml0ZUZyYW1lIChzdGFydFRpbWU6IG51bWJlcikge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcImtvbmdmdTFcIiwgKGVycjAsIGltYWdlQnVuZGxlKT0+e1xuICAgICAgICAgICAgaWYgKGVycjApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycjApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWFnZUJ1bmRsZS5sb2FkRGlyKFwiLi9cIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIxLCBzcGZzMTogW2NjLlNwcml0ZUZyYW1lXSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNwcml0ZUZyYW1lMShzcGZzMSwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0U3ByaXRlRnJhbWUwIChzcGZzOiBbYW55XSwgc3RhcnRUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE5vZGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xuICAgICAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcGZzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdE5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHNwZnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHMwLnN0cmluZyA9IFwibG9hZFRpbWUwIGlzOiBcIiArIE1hdGguZmxvb3IoMTAwMCAqIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSkpIC8gMTAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXRTcHJpdGVGcmFtZTAgKHNwZnM6IGFueSwgc3RhcnRUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMudGVzdE5vZGUpIHtcbiAgICAvLyAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bmcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAvLyAgICAgICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xuICAgIC8vICAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcGZzO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMudGVzdE5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgLy8gICAgICAgICAgICAgLy8gaWYgKGkgPT09IHNwZnMubGVuZ3RoIC0gMSkge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnRpcHMwLnN0cmluZyA9IFwibG9hZFRpbWUwIGlzOiBcIiArIE1hdGguZmxvb3IoMTAwMCAqIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSkpIC8gMTAwMDtcbiAgICAvLyAgICAgICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzZXRTcHJpdGVGcmFtZTEgKHNwZnM6IFthbnldLCBzdGFydFRpbWU6IG51bWJlciwgYnVuZGxlPzogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkge1xuICAgICAgICBpZiAodGhpcy50ZXN0Tm9kZTEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xuICAgICAgICAgICAgICAgIGlmIChidW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGJ1bmRsZS5nZXQoc3Bmc1tpXS5wYXRoLCBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwZnNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGVzdE5vZGUxLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChpID09IHNwZnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHMxLnN0cmluZyA9IFwibG9hZFRpbWUxIGlzOiBcIiArIE1hdGguZmxvb3IoMTAwMCAqIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSkpIC8gMTAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TestList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '300f1gwDo9FebG8sBR+MHEF', 'TestList');
// Script/TestList.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneList = [];
        return _this;
    }
    NewClass.prototype.onButtonClicked = function (touch, customEventData) {
        if (!customEventData)
            return;
        console.log("load scene: " + customEventData);
        cc.director.loadScene(customEventData);
    };
    __decorate([
        property([cc.String])
    ], NewClass.prototype, "sceneList", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGVzdExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFVQztRQVBHLGVBQVMsR0FBYSxFQUFFLENBQUM7O0lBTzdCLENBQUM7SUFMRyxrQ0FBZSxHQUFmLFVBQWlCLEtBQWUsRUFBRSxlQUF1QjtRQUNyRCxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU87UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxlQUFpQixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQU5EO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOytDQUNHO0lBSFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVU1QjtJQUFELGVBQUM7Q0FWRCxBQVVDLENBVnFDLEVBQUUsQ0FBQyxTQUFTLEdBVWpEO2tCQVZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TdHJpbmddKVxuICAgIHNjZW5lTGlzdDogc3RyaW5nW10gPSBbXTtcblxuICAgIG9uQnV0dG9uQ2xpY2tlZCAodG91Y2g6IGNjLlRvdWNoLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBpZiAoIWN1c3RvbUV2ZW50RGF0YSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhgbG9hZCBzY2VuZTogJHtjdXN0b21FdmVudERhdGF9YCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShjdXN0b21FdmVudERhdGEpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoadManySingleDiffSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9hZE1hbnlTaW5nbGVEaWZmU3ByaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNELDRDQUFZO0lBQWxFO1FBQUEscUVBNEZDO1FBekZHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQix5QkFBbUIsR0FBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVztZQUN6RyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVztZQUN0RyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVztZQUN0RyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVztZQUN0RyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVztTQUNsRSxDQUFDOztJQXNFTixDQUFDO0lBcEVHLHVEQUFvQixHQUFwQjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFB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NUZELEFBNEZDLENBNUZxRCxFQUFFLENBQUMsU0FBUyxHQTRGakU7a0JBNUZvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRNYW55U2luZ2xlRGlmZlNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0Tm9kZTE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpcHMwOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwczE6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIG1vZGVsOiBudW1iZXIgPSAyO1xuXG4gICAgc3ByaXRlRnJhbWVQYXRoTGlzdDogc3RyaW5nW10gPSBbXCIzMDEzMDAyXzFcIiwgXCIzMDEzMDA3XzFcIiwgXCIzMDEzMDA5XzFcIiwgXCIzMDEzMDExXzFcIiwgXCIzMDEzMDI4XzFcIiwgXCIzMDEzMDI5XzFcIixcbiAgICAgICAgXCIzMDEzMDMxXzFcIiwgXCIzMDIzMDAzXzFcIiwgXCIzMDIzMDA2XzFcIiwgXCIzMDIzMDEwXzFcIiwgXCIzMDIzMDEyXzFcIiwgXCIzMDIzMDI5XzFcIiwgXCIzMDIzMDMwXzFcIiwgXCIzMDIzMDMyXzFcIiwgXG4gICAgICAgIFwiMzAzMzAwMl8xXCIsIFwiMzAzMzAwNV8xXCIsIFwiMzAzMzAxMF8xXCIsIFwiMzAzMzAxM18xXCIsIFwiMzAzMzAyOF8xXCIsIFwiMzAzMzAyOV8xXCIsIFwiMzAzMzAzMV8xXCIsIFwiMzA0MzAwM18xXCIsXG4gICAgICAgIFwiMzA0MzAwNl8xXCIsIFwiMzA0MzAwOF8xXCIsIFwiMzA0MzAxNF8xXCIsIFwiMzA0MzAyOF8xXCIsIFwiMzA0MzAyOV8xXCIsIFwiMzA0MzAzMV8xXCIsIFwiMzA1MzAwM18xXCIsIFwiMzA1MzAwNV8xXCIsXG4gICAgICAgIFwiMzA1MzAwOV8xXCIsIFwiMzA1MzAyMV8xXCIsIFwiMzA1MzAyMl8xXCIsIFwiMzA2MzAwMl8xXCIsIFwiMzA2MzAwM18xXCJcbiAgICBdO1xuXG4gICAgbG9hZExvY2FsQnVuZGxlVGVzdDAgKCkge1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROb2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVGcmFtZVBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcImtvbmdmdTBcIiwgKGVycjAsIGltYWdlQnVuZGxlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlcnIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VCdW5kbGUubG9hZCh0aGlzLnNwcml0ZUZyYW1lUGF0aExpc3RbaV0sIGNjLlNwcml0ZUZyYW1lLCAoZXJyMSwgc3BmMDogY2MuU3ByaXRlRnJhbWUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlRnJhbWUodGhpcy50ZXN0Tm9kZSwgdGhpcy50aXBzMC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCBpLCBzcGYwLCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkTG9jYWxCdW5kbGVUZXN0MSAoKSB7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgaWYgKHRoaXMudGVzdE5vZGUxKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROb2RlMS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlRnJhbWVQYXRoTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJrb25nZnUxXCIpO1xuICAgICAgICAgICAgaWYgKGJ1bmRsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBidW5kbGUuZ2V0KHRoaXMuc3ByaXRlRnJhbWVQYXRoTGlzdFtpXSwgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNwcml0ZUZyYW1lKHRoaXMudGVzdE5vZGUxLCB0aGlzLnRpcHMxLmdldENvbXBvbmVudChjYy5MYWJlbCksIGksIHNwcml0ZUZyYW1lLCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5L2/55So6buY6K6k55qE5byC5q2l5Yqg6L29IGJ1bmRsZSDlubbliqDovb0gYnVuZGxlIOaWh+S7tuWkueWGheeahOWbvueJh+i1hOa6kO+8jOaIkOWKn+WQjua4suafk+aJgOacieWbvueJh1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJ1bmRsZUFuZFNwcml0ZUZyYW1lKGksIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQnVuZGxlQW5kU3ByaXRlRnJhbWUgKGk6IG51bWJlciwgc3RhcnRUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJrb25nZnUxXCIsIChlcnIwLCBpbWFnZUJ1bmRsZSk9PntcbiAgICAgICAgICAgIGlmIChlcnIwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VCdW5kbGUubG9hZCh0aGlzLnNwcml0ZUZyYW1lUGF0aExpc3RbaV0sIGNjLlNwcml0ZUZyYW1lLCAoZXJyMSwgc3BmMTogY2MuU3ByaXRlRnJhbWUpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycjEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZSh0aGlzLnRlc3ROb2RlMSwgdGhpcy50aXBzMS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCBpLCBzcGYxLCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRTcHJpdGVGcmFtZSAocGFyZW50OiBjYy5Ob2RlLCB0aXBMYWI6IGNjLkxhYmVsLCBpOiBudW1iZXIsIHNwZjogY2MuU3ByaXRlRnJhbWUsIHN0YXJ0VGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwLjI7XG4gICAgICAgICAgICBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3BmO1xuICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc3ByaXRlRnJhbWVQYXRoTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGlwTGFiLnN0cmluZyA9IFwibG9hZFRpbWUgaXM6IFwiICsgTWF0aC5mbG9vcigxMDAwICogKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lKSkgLyAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoadManySingleSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9hZE1hbnlTaW5nbGVTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3R0M7UUF0R0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRzdCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFhLElBQUksQ0FBQzs7SUEwRjNCLENBQUM7SUF2RkcseUNBQW9CLEdBQXBCO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDdEM7Z0NBQ1EsQ0FBQztZQUNOLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFDLElBQUksRUFBRSxXQUFXO2dCQUNwRCxJQUFJLElBQUksRUFBRTtvQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBSSxFQUFFLElBQW9CO3dCQUNyRSxJQUFJLElBQUksRUFBRTs0QkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUN2Qjs2QkFBTTs0QkFDSCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUks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O0lBQUQsaUJBQUM7Q0F4R0QsQUF3R0MsQ0F4R3VDLEVBQUUsQ0FBQyxTQUFTLEdBd0duRDtrQkF4R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvd29ybGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRlc3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRlc3ROb2RlMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBsb2FkU3ByaXRlQ291bnQ6IG51bWJlciA9IDM1O1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpcHMwOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwczE6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgbG9hZExvY2FsQnVuZGxlVGVzdDAgKCkge1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROb2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2FkU3ByaXRlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJrb25nZnUwXCIsIChlcnIwLCBpbWFnZUJ1bmRsZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZXJyMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycjApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlQnVuZGxlLmxvYWQoXCIzMDEzMDAyXzFcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIxLCBzcGYwOiBjYy5TcHJpdGVGcmFtZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZTAoc3BmMCwgaSwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZExvY2FsQnVuZGxlVGVzdDEgKCkge1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROb2RlMSkge1xuICAgICAgICAgICAgdGhpcy50ZXN0Tm9kZTEuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvYWRTcHJpdGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcImtvbmdmdTFcIik7XG4gICAgICAgICAgICBpZiAoYnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IGJ1bmRsZS5nZXQoXCIzMDEzMDAyXzFcIiwgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNwcml0ZUZyYW1lMShzcHJpdGVGcmFtZSwgaSwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWboOS4uiBmb3Ig5b6q546v5omn6KGM5b6q546v5L2T5Luj56CB55qE6Ze06ZqU5pe26Ze05piv5p6B55+t55qE77yM5aaC5p6c5Zyo5b6q546v5L2T5Luj56CB5LitIGxvYWQg6LWE5rqQXG4gICAgICAgICAgICAgICAgLy8g6YKj5LmI5b6q546v5L2T5Luj56CB5Lit5bm25LiN6IO95YeG56Gu6I635Y+W5YiwIGJ1bmRsZSDlkozlm77niYfnmoTnvJPlrZjotYTmupBcbiAgICAgICAgICAgICAgICAvLyDmiYDku6Xov5nph4zlj6/ku6Xkvb/nlKggYXdhaXQgUHJvbWlzZSDnmoTmlrnms5XnrYnlvoUgYnVuZGxlIOWSjOWbvueJh+i1hOa6kOWKoOi9veaIkOWKn+WQjuWGjeaJp+ihjOWQjue7reeahOW+queOr+S9k+S7o+eggVxuICAgICAgICAgICAgICAgIC8vIOi/meagtyBmb3Ig5b6q546v5ZCO57ut55qE5b6q546v5L2T5Luj56CB5bCx5Y+v5Lul5oiQ5Yqf6I635Y+W5Yiw5bey57uP5Yqg6L2955qEIGJ1bmRsZSDlkozlm77niYfnmoTnvJPlrZjotYTmupBcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRCdW5kbGVBbmRTcHJpdGVGcmFtZUFzeW5jKCkudGhlbigoc3BmOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNwcml0ZUZyYW1lMShzcGYsIGksIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQnVuZGxlQW5kU3ByaXRlRnJhbWVBc3luYyAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcImtvbmdmdTFcIiwgKGVycjAsIGltYWdlQnVuZGxlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlcnIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VCdW5kbGUubG9hZChcIjMwMTMwMDJfMVwiLCBjYy5TcHJpdGVGcmFtZSwgKGVycjEsIHNwZjE6IGNjLlNwcml0ZUZyYW1lKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNwZjEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgICAgXG4gICAgfVxuXG4gICAgc2V0U3ByaXRlRnJhbWUwIChzcGY6IGNjLlNwcml0ZUZyYW1lLCBpOiBudW1iZXIsIHN0YXJ0VGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROb2RlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xuICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwZjtcbiAgICAgICAgICAgIHRoaXMudGVzdE5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5sb2FkU3ByaXRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBzMC5zdHJpbmcgPSBcImxvYWRUaW1lMCBpczogXCIgKyBNYXRoLmZsb29yKDEwMDAgKiAocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWUpKSAvIDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTcHJpdGVGcmFtZTEgKHNwZjogY2MuU3ByaXRlRnJhbWUsIGk6IG51bWJlciwgc3RhcnRUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE5vZGUxKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gMC4yO1xuICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwZjtcbiAgICAgICAgICAgIHRoaXMudGVzdE5vZGUxLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMubG9hZFNwcml0ZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwczEuc3RyaW5nID0gXCJsb2FkVGltZTEgaXM6IFwiICsgTWF0aC5mbG9vcigxMDAwICogKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lKSkgLyAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

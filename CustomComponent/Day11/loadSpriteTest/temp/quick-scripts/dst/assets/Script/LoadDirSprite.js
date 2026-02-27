
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

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
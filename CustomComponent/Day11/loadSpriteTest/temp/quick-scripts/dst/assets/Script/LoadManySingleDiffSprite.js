
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
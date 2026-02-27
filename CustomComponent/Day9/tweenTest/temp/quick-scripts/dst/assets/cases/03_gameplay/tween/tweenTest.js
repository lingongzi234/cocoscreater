
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/tween/tweenTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03fb4114ytNz6JY6SsFC1UM', 'tweenTest');
// cases/03_gameplay/tween/tweenTest.ts

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
var TweenTest = /** @class */ (function (_super) {
    __extends(TweenTest, _super);
    function TweenTest() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.numLab = null;
        _this.testNode = null;
        _this.testNum = {
            maxNum: 1000
        };
        return _this;
        // update (dt) {}
    }
    TweenTest.prototype.startCountDown = function () {
        if (this.testNum.maxNum != 0) {
            cc.tween(this.testNum)
                .to(30, { maxNum: 0 }, { easing: 'cubicOut' })
                .start();
        }
    };
    TweenTest.prototype.startNodeMove = function () {
        cc.tween(this.testNode)
            .set({ position: cc.v3(-400, 0, 0) })
            .to(3, { position: cc.v3(400, 0, 0) }, { easing: 'cubicOut' })
            .start();
    };
    TweenTest.prototype.update = function () {
        if (this.testNum.maxNum >= 0) {
            this.numLab.string = Math.floor(this.testNum.maxNum).toString();
        }
    };
    __decorate([
        property(cc.Label)
    ], TweenTest.prototype, "numLab", void 0);
    __decorate([
        property(cc.Node)
    ], TweenTest.prototype, "testNode", void 0);
    TweenTest = __decorate([
        ccclass
    ], TweenTest);
    return TweenTest;
}(cc.Component));
exports.default = TweenTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS90d2Vlbi90d2VlblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFLMUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFFSSx3QkFBd0I7UUFGNUIscUVBdUNDO1FBbkNHLGVBQWU7UUFJZixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFTO1lBQ1osTUFBTSxFQUFFLElBQUk7U0FDZixDQUFBOztRQXVCRCxpQkFBaUI7SUFDckIsQ0FBQztJQXRCRyxrQ0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNqQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO2lCQUM1QyxLQUFLLEVBQUUsQ0FBQTtTQUNmO0lBQ0wsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEIsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDcEMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQzthQUM1RCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuRTtJQUNMLENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBWFIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVDN0I7SUFBRCxnQkFBQztDQXZDRCxBQXVDQyxDQXZDc0MsRUFBRSxDQUFDLFNBQVMsR0F1Q2xEO2tCQXZDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxudHlwZSB0ZXN0ID0geyBtYXhOdW06IG51bWJlciB9O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5UZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBudW1MYWI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRlc3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHRlc3ROdW06IHRlc3QgPSB7XG4gICAgICAgIG1heE51bTogMTAwMFxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duICgpIHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE51bS5tYXhOdW0gIT0gMCkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXN0TnVtKVxuICAgICAgICAgICAgICAgIC50bygzMCwgeyBtYXhOdW06IDAgfSwgeyBlYXNpbmc6ICdjdWJpY091dCd9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydE5vZGVNb3ZlICgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy50ZXN0Tm9kZSlcbiAgICAgICAgICAgIC5zZXQoeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCwgMCkgfSlcbiAgICAgICAgICAgIC50bygzLCB7IHBvc2l0aW9uOiBjYy52Myg0MDAsIDAsIDApIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnfSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE51bS5tYXhOdW0gPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5udW1MYWIuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLnRlc3ROdW0ubWF4TnVtKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
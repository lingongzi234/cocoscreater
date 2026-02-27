"use strict";
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
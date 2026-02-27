"use strict";
cc._RF.push(module, '1b13c4/4vRJV4JKL+8UUPFd', 'NumberJITTest');
// Script/test/NumberJITTest.ts

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
        _this.numberArray = [];
        _this.numberCount = 10000;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        //使用正整数填充 numberArray
        for (var i = 0; i < this.numberCount; i++) {
            this.numberArray[i] = i;
        }
    };
    NewClass.prototype.addIntNumber = function () {
        for (var i = 0; i < this.numberCount; i++) {
            this.numberArray[i] += 1;
        }
        console.log("add int number");
    };
    NewClass.prototype.addFloatNumber = function () {
        for (var i = 0; i < this.numberCount; i++) {
            this.numberArray[i] += 1.000000000001;
        }
        console.log("add float number");
    };
    NewClass.prototype.numberJITTest = function () {
        console.time("numberJITTest");
        for (var index = 0; index < this.numberArray.length; index++) {
            var item = Math.pow(this.numberArray[index], 100);
        }
        console.timeEnd("numberJITTest");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
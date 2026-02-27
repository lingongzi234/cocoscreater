"use strict";
cc._RF.push(module, 'b6a631FWKFL4Zu6e8z4/RWI', 'CopyArrayTest');
// Script/test/CopyArrayTest.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anyArray = [];
        _this.arraySize = 1e6;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.anyArray = Array.from({ length: this.arraySize }, function (v, i) { return i; });
        console.log("anyArray is ready");
    };
    NewClass.prototype.useExtendOperation = function () {
        console.time('useExtendOperation');
        var newArray = [];
        newArray = __spreadArrays(this.anyArray);
        console.timeEnd('useExtendOperation');
    };
    NewClass.prototype.useForLoop = function () {
        console.time('useForLoop');
        var newArray = [];
        newArray.length = this.arraySize;
        for (var i = 0; i < this.arraySize; ++i) {
            newArray[i] = this.anyArray[i];
        }
        console.timeEnd('useForLoop');
    };
    NewClass.prototype.usePushWithForLoop = function () {
        console.time('usePushWithForLoop');
        var newArray = [];
        for (var i = 0; i < this.arraySize; ++i) {
            newArray.push(this.anyArray[i]);
        }
        console.timeEnd('usePushWithForLoop');
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
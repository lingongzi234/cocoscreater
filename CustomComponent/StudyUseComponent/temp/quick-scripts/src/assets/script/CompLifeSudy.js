"use strict";
cc._RF.push(module, '05957IXvqNL1L1zfWwc9lIw', 'CompLifeSudy');
// script/CompLifeSudy.ts

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
        _this.allowUpdate = true;
        _this.allowLateUpdate = true;
        return _this;
    }
    // 当组件中添加了 start、onEnable、onDisable、update、lateUpdate 等生命周期函数中的其中一个，
    // 组件的属性检查器都会出现 enabled 勾选项，用于设置组件是否启用
    // __preload 函数在组件节点激活时立即调用，调用时机快于 onLoad
    NewClass.prototype.__preload = function () {
        console.log("preload");
    };
    // onLoad 函数会在组件节点激活后立即调用
    NewClass.prototype.onLoad = function () {
        console.log("onLoad");
    };
    // start 函数会在组件激活后立即调用，节点的激活优先于组件的激活，所以触发时机要慢于 onLoad
    NewClass.prototype.start = function () {
        console.log("start");
    };
    // onEnable 函数会在组件的 enabled 属性被赋值为 true 时调用。当组件激活时会比 start 函数更早调用，但是依然慢于 onLoad 函数的调用
    NewClass.prototype.onEnable = function () {
        console.log("onEnable");
    };
    NewClass.prototype.openEnabled = function () {
        this.enabled = true;
    };
    NewClass.prototype.disableEnabled = function () {
        this.enabled = false;
    };
    // onDisable 函数会在组件的 enabled 属性被赋值为 false 时调用，当节点或组件被销毁时，onDisable 会优先于 onDestroy 函数调用
    NewClass.prototype.onDisable = function () {
        console.log("onDisable");
    };
    NewClass.prototype.destroyNode = function () {
        this.node.destroy();
    };
    // onDestroy 函数会在组件销毁时调用。但是如果组件没有调用过 onLoad ，那么 onDestroy 函数也不会调用。
    NewClass.prototype.onDestroy = function () {
        console.log("onDestroy");
    };
    // update 函数会在组件激活后每帧调用，在组件激活时的初次调用时机在 start 之后
    NewClass.prototype.update = function () {
        if (this.allowUpdate) {
            this.allowUpdate = false;
            console.log("update");
        }
    };
    // lateUpdate 函数会在组件激活后每帧调用，调用时机在组件执行完 update 函数之后
    NewClass.prototype.lateUpdate = function () {
        if (this.allowLateUpdate) {
            this.allowLateUpdate = false;
            console.log("lateUpdate");
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
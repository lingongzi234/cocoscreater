"use strict";
cc._RF.push(module, '7acc4x8HPxJRbTXlbpQ1R/9', 'CCClassStudy');
// script/CCClassStudy.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu, disallowMultiple = _a.disallowMultiple, inspector = _a.inspector;
var NAMES = cc.Enum({
    ZHEFENG: 0,
    XIAOMING: 1,
    XIAOQIANG: 2
});
var CCClassStudy = /** @class */ (function (_super) {
    __extends(CCClassStudy, _super);
    function CCClassStudy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._userName = NAMES.ZHEFENG;
        return _this;
    }
    Object.defineProperty(CCClassStudy.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            if (!isNaN(value) && value !== this._userName) {
                this._userName = value;
                cc.log("changed userName, name is [" + this._userName + "] now");
            }
        },
        enumerable: false,
        configurable: true
    });
    CCClassStudy.prototype.onLoad = function () {
        cc.log("call onLoad function in editor");
    };
    CCClassStudy.prototype.start = function () {
        cc.log("call start function in editor");
    };
    CCClassStudy.prototype.onEnable = function () {
        cc.log("call onEnable function in editor");
    };
    CCClassStudy.prototype.onFocusInEditor = function () {
        cc.log("call onFocus function in editor");
    };
    CCClassStudy.prototype.onLostFocusInEditor = function () {
        cc.log("call onLostFocus function in editor");
    };
    CCClassStudy.prototype.resetInEditor = function () {
        cc.log("call reset function in editor");
    };
    __decorate([
        property({ type: NAMES })
    ], CCClassStudy.prototype, "userName", null);
    CCClassStudy = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label),
        menu("CustomComp/CCClassStudy"),
        disallowMultiple,
        inspector("packages://property-enum/inspector/customInspector.js")
    ], CCClassStudy);
    return CCClassStudy;
}(cc.Component));
exports.default = CCClassStudy;

cc._RF.pop();
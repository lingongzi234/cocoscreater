"use strict";
cc._RF.push(module, '0ca8e5YDr9EJ7Bxn8dVDZZZ', 'CompDefaultProperty');
// script/CompDefaultProperty.ts

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
var CompDefaultProperty = /** @class */ (function (_super) {
    __extends(CompDefaultProperty, _super);
    function CompDefaultProperty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logTimes = 0;
        return _this;
    }
    CompDefaultProperty.prototype.start = function () {
        //时间单位是 秒
        this.schedule(this.testFunc, 1, 2, 1);
    };
    CompDefaultProperty.prototype.testFunc = function () {
        var _this = this;
        if (this.logTimes >= 2) {
            this.unschedule(this.testFunc);
            this.destroy();
            setTimeout(function () {
                console.log("this.comp.isValid is " + _this.isValid);
            });
        }
        else {
            console.log("test log times is " + ++this.logTimes + ". \n                this.comp.node is " + this.node.name + ", \n                this.comp.uuid id " + this.uuid + ", this.comp.enabled is " + this.enabled + ", \n                this.comp.enabledInHierarchy is " + this.enabledInHierarchy + ",\n                this.comp.isValid is " + this.isValid);
        }
    };
    CompDefaultProperty = __decorate([
        ccclass
    ], CompDefaultProperty);
    return CompDefaultProperty;
}(cc.Component));
exports.default = CompDefaultProperty;

cc._RF.pop();
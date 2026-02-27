
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ImportOtherComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37648rtSTNLKJh5IKy0xiPR', 'ImportOtherComp');
// script/ImportOtherComp.ts

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
var CustomSprite_1 = require("./CustomSprite");
var ImportOtherComp = /** @class */ (function (_super) {
    __extends(ImportOtherComp, _super);
    function ImportOtherComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customSprite = null;
        return _this;
    }
    ImportOtherComp.prototype.start = function () {
        console.log(this.customSprite.CustomSpriteColor);
    };
    __decorate([
        property({ type: CustomSprite_1.default })
    ], ImportOtherComp.prototype, "customSprite", void 0);
    ImportOtherComp = __decorate([
        ccclass
    ], ImportOtherComp);
    return ImportOtherComp;
}(cc.Component));
exports.default = ImportOtherComp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSW1wb3J0T3RoZXJDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLCtDQUEwQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQVNDO1FBTkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDOztJQU10QyxDQUFDO0lBSkcsK0JBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxzQkFBWSxFQUFDLENBQUM7eURBQ0c7SUFIakIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQVNuQztJQUFELHNCQUFDO0NBVEQsQUFTQyxDQVQ0QyxFQUFFLENBQUMsU0FBUyxHQVN4RDtrQkFUb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgQ3VzdG9tU3ByaXRlIGZyb20gXCIuL0N1c3RvbVNwcml0ZVwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0T3RoZXJDb21wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ3VzdG9tU3ByaXRlfSlcbiAgICBjdXN0b21TcHJpdGU6IEN1c3RvbVNwcml0ZSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tU3ByaXRlLkN1c3RvbVNwcml0ZUNvbG9yKTtcbiAgICB9XG5cbn1cbiJdfQ==
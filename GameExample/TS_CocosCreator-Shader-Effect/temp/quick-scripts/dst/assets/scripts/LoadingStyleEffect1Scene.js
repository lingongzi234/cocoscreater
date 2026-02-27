
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LoadingStyleEffect1Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ed1dQP3bBHS7dzMbIxKbil', 'LoadingStyleEffect1Scene');
// scripts/LoadingStyleEffect1Scene.ts

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
var LoadingStyleEffect1Scene = /** @class */ (function (_super) {
    __extends(LoadingStyleEffect1Scene, _super);
    function LoadingStyleEffect1Scene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingStyleEffect1Scene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
    };
    LoadingStyleEffect1Scene = __decorate([
        ccclass
    ], LoadingStyleEffect1Scene);
    return LoadingStyleEffect1Scene;
}(cc.Component));
exports.default = LoadingStyleEffect1Scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvYWRpbmdTdHlsZUVmZmVjdDFTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzRCw0Q0FBWTtJQUFsRTs7SUFLQSxDQUFDO0lBSkcseUNBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBSmdCLHdCQUF3QjtRQUQ1QyxPQUFPO09BQ2Esd0JBQXdCLENBSzVDO0lBQUQsK0JBQUM7Q0FMRCxBQUtDLENBTHFELEVBQUUsQ0FBQyxTQUFTLEdBS2pFO2tCQUxvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1N0eWxlRWZmZWN0MVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOWFs+mXreWKqOaAgeWQiOWbvlxuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=
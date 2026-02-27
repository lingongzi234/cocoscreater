
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/FlashLightCtrlComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3edcaOPDxJIn4R6DYnZ5Vxs', 'FlashLightCtrlComponent');
// scripts/FlashLightCtrlComponent.ts

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
exports.FlashLightUBO = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FlashLightCtrlComponent = /** @class */ (function (_super) {
    __extends(FlashLightCtrlComponent, _super);
    function FlashLightCtrlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._flashLightUBO = new FlashLightUBO();
        return _this;
    }
    FlashLightCtrlComponent.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on("on_property_change", this._onPropertyChange, this);
    };
    FlashLightCtrlComponent.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off("on_property_change", this._onPropertyChange, this);
    };
    FlashLightCtrlComponent.prototype._onTouchStart = function (event) {
        this._onTouchMove(event);
    };
    FlashLightCtrlComponent.prototype._onTouchMove = function (event) {
        var touchPointInWorldSpace = event.getLocation();
        var touchPointInNodeSpace = this.node.convertToNodeSpaceAR(touchPointInWorldSpace);
        // 将触摸点转换为OPENGL坐标系并归一化
        // OpenGl 坐标系原点在左上角
        this._flashLightUBO.lightCenterPoint = cc.v2(this.node.anchorX + touchPointInNodeSpace.x / this.node.width, 1 - (this.node.anchorY + touchPointInNodeSpace.y / this.node.height));
        this._updateMaterial();
    };
    FlashLightCtrlComponent.prototype._onPropertyChange = function (localDiffusionUniform) {
        this._flashLightUBO.lightColor = localDiffusionUniform.lightColor;
        this._flashLightUBO.lightAngle = localDiffusionUniform.lightAngle;
        this._flashLightUBO.lightWidth = localDiffusionUniform.lightWidth;
        this._flashLightUBO.enableGradient = localDiffusionUniform.enableGradient;
        this._flashLightUBO.cropAlpha = localDiffusionUniform.cropAlpha;
        this._flashLightUBO.enableFog = localDiffusionUniform.enableFog;
        this._updateMaterial();
    };
    FlashLightCtrlComponent.prototype._updateMaterial = function () {
        var _this = this;
        this.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
            var material = renderComponent.getMaterial(0);
            material.setProperty("lightColor", _this._flashLightUBO.lightColor);
            material.setProperty("lightCenterPoint", _this._flashLightUBO.lightCenterPoint);
            material.setProperty("lightAngle", _this._flashLightUBO.lightAngle);
            material.setProperty("lightWidth", _this._flashLightUBO.lightWidth);
            material.setProperty("enableGradient", _this._flashLightUBO.enableGradient);
            material.setProperty("cropAlpha", _this._flashLightUBO.cropAlpha);
            material.setProperty("enableFog", _this._flashLightUBO.enableFog);
            renderComponent.setMaterial(0, material);
        });
    };
    FlashLightCtrlComponent = __decorate([
        ccclass
    ], FlashLightCtrlComponent);
    return FlashLightCtrlComponent;
}(cc.Component));
exports.default = FlashLightCtrlComponent;
var FlashLightUBO = /** @class */ (function () {
    function FlashLightUBO() {
        /**
         * 中心点颜色
         */
        this.lightColor = cc.Color.YELLOW;
        /**
         * 中心点坐标 ([0.0, 1.0], [0.0, 1.0])
         */
        this.lightCenterPoint = cc.v2(0.5, 0.5);
        /**
         * 光束角度 [0.0, 180.0]
         */
        this.lightAngle = 45;
        /**
         * 光束宽度 [0.0, +∞]
         */
        this.lightWidth = 0.5;
        /**
         * 是否启用光束渐变
         */
        this.enableGradient = true;
        /**
         * 是否裁剪掉透明区域上的点光
         */
        this.cropAlpha = true;
        /**
         * 是否开启战争迷雾效果
         */
        this.enableFog = false;
    }
    return FlashLightUBO;
}());
exports.FlashLightUBO = FlashLightUBO;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0ZsYXNoTGlnaHRDdHJsQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQXdEQztRQXZEVyxvQkFBYyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDOztJQXVEaEUsQ0FBQztJQXJERywwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVB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M0M7SUFBRCw4QkFBQztDQXhERCxBQXdEQyxDQXhEb0QsRUFBRSxDQUFDLFNBQVMsR0F3RGhFO2tCQXhEb0IsdUJBQXVCO0FBMEQ1QztJQUFBO1FBQ0k7O1dBRUc7UUFDSCxlQUFVLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFdkM7O1dBRUc7UUFDSCxxQkFBZ0IsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU1Qzs7V0FFRztRQUNILGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEI7O1dBRUc7UUFDSCxlQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCOztXQUVHO1FBQ0gsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0I7O1dBRUc7UUFDSCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCOztXQUVHO1FBQ0gsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoTGlnaHRDdHJsQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9mbGFzaExpZ2h0VUJPOiBGbGFzaExpZ2h0VUJPID0gbmV3IEZsYXNoTGlnaHRVQk8oKTtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcIm9uX3Byb3BlcnR5X2NoYW5nZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFwib25fcHJvcGVydHlfY2hhbmdlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLl9vblRvdWNoTW92ZShldmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IHRvdWNoUG9pbnRJbldvcmxkU3BhY2UgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgdG91Y2hQb2ludEluTm9kZVNwYWNlID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoUG9pbnRJbldvcmxkU3BhY2UpO1xuXG4gICAgICAgIC8vIOWwhuinpuaRuOeCuei9rOaNouS4uk9QRU5HTOWdkOagh+ezu+W5tuW9kuS4gOWMllxuICAgICAgICAvLyBPcGVuR2wg5Z2Q5qCH57O75Y6f54K55Zyo5bem5LiK6KeSXG4gICAgICAgIHRoaXMuX2ZsYXNoTGlnaHRVQk8ubGlnaHRDZW50ZXJQb2ludCA9IGNjLnYyKFxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuY2hvclggKyB0b3VjaFBvaW50SW5Ob2RlU3BhY2UueCAvIHRoaXMubm9kZS53aWR0aCxcbiAgICAgICAgICAgIDEgLSAodGhpcy5ub2RlLmFuY2hvclkgKyB0b3VjaFBvaW50SW5Ob2RlU3BhY2UueSAvIHRoaXMubm9kZS5oZWlnaHQpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlTWF0ZXJpYWwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblByb3BlcnR5Q2hhbmdlKGxvY2FsRGlmZnVzaW9uVW5pZm9ybTogRmxhc2hMaWdodFVCTykge1xuICAgICAgICB0aGlzLl9mbGFzaExpZ2h0VUJPLmxpZ2h0Q29sb3IgPSBsb2NhbERpZmZ1c2lvblVuaWZvcm0ubGlnaHRDb2xvcjtcbiAgICAgICAgdGhpcy5fZmxhc2hMaWdodFVCTy5saWdodEFuZ2xlID0gbG9jYWxEaWZmdXNpb25Vbmlmb3JtLmxpZ2h0QW5nbGU7XG4gICAgICAgIHRoaXMuX2ZsYXNoTGlnaHRVQk8ubGlnaHRXaWR0aCA9IGxvY2FsRGlmZnVzaW9uVW5pZm9ybS5saWdodFdpZHRoO1xuICAgICAgICB0aGlzLl9mbGFzaExpZ2h0VUJPLmVuYWJsZUdyYWRpZW50ID0gbG9jYWxEaWZmdXNpb25Vbmlmb3JtLmVuYWJsZUdyYWRpZW50O1xuICAgICAgICB0aGlzLl9mbGFzaExpZ2h0VUJPLmNyb3BBbHBoYSA9IGxvY2FsRGlmZnVzaW9uVW5pZm9ybS5jcm9wQWxwaGE7XG4gICAgICAgIHRoaXMuX2ZsYXNoTGlnaHRVQk8uZW5hYmxlRm9nID0gbG9jYWxEaWZmdXNpb25Vbmlmb3JtLmVuYWJsZUZvZztcbiAgICAgICAgdGhpcy5fdXBkYXRlTWF0ZXJpYWwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVNYXRlcmlhbCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwibGlnaHRDb2xvclwiLCB0aGlzLl9mbGFzaExpZ2h0VUJPLmxpZ2h0Q29sb3IpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJsaWdodENlbnRlclBvaW50XCIsIHRoaXMuX2ZsYXNoTGlnaHRVQk8ubGlnaHRDZW50ZXJQb2ludCk7XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImxpZ2h0QW5nbGVcIiwgdGhpcy5fZmxhc2hMaWdodFVCTy5saWdodEFuZ2xlKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwibGlnaHRXaWR0aFwiLCB0aGlzLl9mbGFzaExpZ2h0VUJPLmxpZ2h0V2lkdGgpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJlbmFibGVHcmFkaWVudFwiLCB0aGlzLl9mbGFzaExpZ2h0VUJPLmVuYWJsZUdyYWRpZW50KTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiY3JvcEFscGhhXCIsIHRoaXMuX2ZsYXNoTGlnaHRVQk8uY3JvcEFscGhhKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZW5hYmxlRm9nXCIsIHRoaXMuX2ZsYXNoTGlnaHRVQk8uZW5hYmxlRm9nKTtcbiAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZsYXNoTGlnaHRVQk8ge1xuICAgIC8qKlxuICAgICAqIOS4reW/g+eCueminOiJslxuICAgICAqL1xuICAgIGxpZ2h0Q29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuXG4gICAgLyoqXG4gICAgICog5Lit5b+D54K55Z2Q5qCHIChbMC4wLCAxLjBdLCBbMC4wLCAxLjBdKVxuICAgICAqL1xuICAgIGxpZ2h0Q2VudGVyUG9pbnQ6IGNjLlZlYzIgPSBjYy52MigwLjUsIDAuNSk7XG5cbiAgICAvKipcbiAgICAgKiDlhYnmnZ/op5LluqYgWzAuMCwgMTgwLjBdXG4gICAgICovXG4gICAgbGlnaHRBbmdsZTogbnVtYmVyID0gNDU7XG5cbiAgICAvKipcbiAgICAgKiDlhYnmnZ/lrr3luqYgWzAuMCwgK+KInl1cbiAgICAgKi9cbiAgICBsaWdodFdpZHRoOiBudW1iZXIgPSAwLjU7XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKblkK/nlKjlhYnmnZ/muJDlj5hcbiAgICAgKi9cbiAgICBlbmFibGVHcmFkaWVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKboo4HliarmjonpgI/mmI7ljLrln5/kuIrnmoTngrnlhYlcbiAgICAgKi9cbiAgICBjcm9wQWxwaGE6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICog5piv5ZCm5byA5ZCv5oiY5LqJ6L+36Zu+5pWI5p6cXG4gICAgICovXG4gICAgZW5hYmxlRm9nOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=
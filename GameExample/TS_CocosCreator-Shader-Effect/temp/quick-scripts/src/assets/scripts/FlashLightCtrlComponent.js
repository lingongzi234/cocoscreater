"use strict";
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
"use strict";
cc._RF.push(module, 'ababaxBpzZMv60DJIli3Qbn', 'PointLightCtrlComponent');
// scripts/PointLightCtrlComponent.ts

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
exports.PointLightUBO = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointLightCtrlComponent = /** @class */ (function (_super) {
    __extends(PointLightCtrlComponent, _super);
    function PointLightCtrlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pointLightUBO = new PointLightUBO();
        return _this;
    }
    PointLightCtrlComponent.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on("on_property_change", this._onPropertyChange, this);
    };
    PointLightCtrlComponent.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off("on_property_change", this._onPropertyChange, this);
    };
    PointLightCtrlComponent.prototype._onTouchStart = function (event) {
        this._onTouchMove(event);
    };
    PointLightCtrlComponent.prototype._onTouchMove = function (event) {
        var touchPointInWorldSpace = event.getLocation();
        var touchPointInNodeSpace = this.node.convertToNodeSpaceAR(touchPointInWorldSpace);
        // 将触摸点转换为OPENGL坐标系并归一化
        // OpenGl 坐标系原点在左上角
        this._pointLightUBO.centerPoint = cc.v2(this.node.anchorX + touchPointInNodeSpace.x / this.node.width, 1 - (this.node.anchorY + touchPointInNodeSpace.y / this.node.height));
        this._updateMaterial();
    };
    PointLightCtrlComponent.prototype._onPropertyChange = function (pointLightUBO) {
        this._pointLightUBO.centerColor = pointLightUBO.centerColor;
        this._pointLightUBO.radius = pointLightUBO.radius;
        this._pointLightUBO.cropAlpha = pointLightUBO.cropAlpha;
        this._pointLightUBO.enableFog = pointLightUBO.enableFog;
        this._updateMaterial();
    };
    PointLightCtrlComponent.prototype._updateMaterial = function () {
        var _this = this;
        this.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
            var material = renderComponent.getMaterial(0);
            material.setProperty("centerColor", _this._pointLightUBO.centerColor);
            material.setProperty("centerPoint", _this._pointLightUBO.centerPoint);
            material.setProperty("radius", _this._pointLightUBO.radius);
            material.setProperty("cropAlpha", _this._pointLightUBO.cropAlpha);
            material.setProperty("enableFog", _this._pointLightUBO.enableFog);
            renderComponent.setMaterial(0, material);
        });
    };
    PointLightCtrlComponent = __decorate([
        ccclass
    ], PointLightCtrlComponent);
    return PointLightCtrlComponent;
}(cc.Component));
exports.default = PointLightCtrlComponent;
var PointLightUBO = /** @class */ (function () {
    function PointLightUBO() {
        /**
         * 中心点颜色
         */
        this.centerColor = cc.Color.YELLOW;
        /**
         * 中心点坐标 ([0.0, 1.0], [0.0, 1.0])
         */
        this.centerPoint = cc.v2(0.5, 0.5);
        /**
         * 扩散半径 [0.0, 1.0]
         */
        this.radius = 0.5;
        /**
         * 是否裁剪掉透明区域上的点光
         */
        this.cropAlpha = true;
        /**
         * 是否开启战争迷雾效果
         */
        this.enableFog = false;
    }
    return PointLightUBO;
}());
exports.PointLightUBO = PointLightUBO;

cc._RF.pop();
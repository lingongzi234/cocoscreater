"use strict";
cc._RF.push(module, '24bbee6XR5C2bLd8hn++QNn', 'RoundCornerCropV2EffectScene');
// scripts/RoundCornerCropV2EffectScene.ts

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
var RoundCornerCropV2EffectScene = /** @class */ (function (_super) {
    __extends(RoundCornerCropV2EffectScene, _super);
    function RoundCornerCropV2EffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._radiuSlider = null;
        _this._radiuLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    RoundCornerCropV2EffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
        this._radiuSlider = cc.find("Canvas/Content/Controller/RadiusSlider/Slider").getComponent(cc.Slider);
        this._radiuLabel = cc.find("Canvas/Content/Controller/RadiusSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    RoundCornerCropV2EffectScene.prototype.onEnable = function () {
        this._radiuSlider.node.on("slide", this._onSliderChanged, this);
    };
    RoundCornerCropV2EffectScene.prototype.onDisable = function () {
        this._radiuSlider.node.off("slide", this._onSliderChanged, this);
    };
    RoundCornerCropV2EffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    RoundCornerCropV2EffectScene.prototype._onSliderChanged = function () {
        // 计算半径px
        var radiusInPx = Math.floor(100 * this._radiuSlider.progress);
        this._radiuLabel.string = radiusInPx + "";
        // 更新材质
        this._updateRenderComponentMaterial({
            radiusInPx: radiusInPx
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    RoundCornerCropV2EffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                // 计算半径px分别相对于纹理宽高的比例（也叫归一化）
                var xRadiux = param.radiusInPx / childNode.width;
                // 约束范围在区间 [0.0, 0.5]
                xRadiux = xRadiux >= 0.5 ? 0.5 : xRadiux;
                var yRadius = param.radiusInPx / childNode.height;
                yRadius = yRadius >= 0.5 ? 0.5 : yRadius;
                if (childNode.name === "Rectangle1")
                    cc.log(childNode.name + " : (" + xRadiux + ", " + yRadius + ")");
                // 更新材质
                var material = renderComponent.getMaterial(0);
                // 圆角x轴半径长度（相对于纹理宽度）[0.0, 0.5]
                material.setProperty("xRadius", xRadiux);
                // 圆角y轴半径长度（相对于纹理高度）[0.0, 0.5]
                material.setProperty("yRadius", yRadius);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    RoundCornerCropV2EffectScene = __decorate([
        ccclass
    ], RoundCornerCropV2EffectScene);
    return RoundCornerCropV2EffectScene;
}(cc.Component));
exports.default = RoundCornerCropV2EffectScene;

cc._RF.pop();
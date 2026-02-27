"use strict";
cc._RF.push(module, 'd2765jFqWZOUKFiCcevAVee', 'RoundCornerCropV1EffectScene');
// scripts/RoundCornerCropV1EffectScene.ts

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
var RoundCornerCropV1EffectScene = /** @class */ (function (_super) {
    __extends(RoundCornerCropV1EffectScene, _super);
    function RoundCornerCropV1EffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._radiuSlider = null;
        _this._radiuLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    RoundCornerCropV1EffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
        this._radiuSlider = cc.find("Canvas/Content/Controller/RadiusSlider/Slider").getComponent(cc.Slider);
        this._radiuLabel = cc.find("Canvas/Content/Controller/RadiusSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    RoundCornerCropV1EffectScene.prototype.onEnable = function () {
        this._radiuSlider.node.on("slide", this._onSliderChanged, this);
    };
    RoundCornerCropV1EffectScene.prototype.onDisable = function () {
        this._radiuSlider.node.off("slide", this._onSliderChanged, this);
    };
    RoundCornerCropV1EffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    RoundCornerCropV1EffectScene.prototype._onSliderChanged = function () {
        this._radiuLabel.string = "" + this._radiuSlider.progress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            radius: this._radiuSlider.progress
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    RoundCornerCropV1EffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("radius", param.radius);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    RoundCornerCropV1EffectScene = __decorate([
        ccclass
    ], RoundCornerCropV1EffectScene);
    return RoundCornerCropV1EffectScene;
}(cc.Component));
exports.default = RoundCornerCropV1EffectScene;

cc._RF.pop();
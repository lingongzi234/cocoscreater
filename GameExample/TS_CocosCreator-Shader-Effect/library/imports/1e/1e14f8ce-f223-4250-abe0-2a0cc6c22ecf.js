"use strict";
cc._RF.push(module, '1e14fjO8iNCUKvgKgzGwi7P', 'OldPhotoEffectScene');
// scripts/OldPhotoEffectScene.ts

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
var OldPhotoEffectScene = /** @class */ (function (_super) {
    __extends(OldPhotoEffectScene, _super);
    function OldPhotoEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._oldLevelSlider = null;
        _this._oldLevelSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    OldPhotoEffectScene.prototype.onLoad = function () {
        this._oldLevelSlider = cc.find("Canvas/Content/Sliders/OldLevelSlider/Slider").getComponent(cc.Slider);
        this._oldLevelSliderLabel = cc.find("Canvas/Content/Sliders/OldLevelSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    OldPhotoEffectScene.prototype.onEnable = function () {
        this._oldLevelSlider.node.on("slide", this._onSliderChanged, this);
    };
    OldPhotoEffectScene.prototype.onDisable = function () {
        this._oldLevelSlider.node.off("slide", this._onSliderChanged, this);
    };
    OldPhotoEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    OldPhotoEffectScene.prototype._onSliderChanged = function () {
        this._oldLevelSliderLabel.string = "" + this._oldLevelSlider.progress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            oldLevel: this._oldLevelSlider.progress
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    OldPhotoEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("oldLevel", param.oldLevel);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    OldPhotoEffectScene = __decorate([
        ccclass
    ], OldPhotoEffectScene);
    return OldPhotoEffectScene;
}(cc.Component));
exports.default = OldPhotoEffectScene;

cc._RF.pop();
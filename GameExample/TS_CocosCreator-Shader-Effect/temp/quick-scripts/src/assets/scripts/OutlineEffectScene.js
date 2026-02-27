"use strict";
cc._RF.push(module, '7c6344eoZ5EmJ9RoujQfiId', 'OutlineEffectScene');
// scripts/OutlineEffectScene.ts

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
var OutlineEffectScene = /** @class */ (function (_super) {
    __extends(OutlineEffectScene, _super);
    function OutlineEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._widthSlider = null;
        _this._widthSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    OutlineEffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
        this._widthSlider = cc.find("Canvas/Content/Sliders/WidthSlider/Slider").getComponent(cc.Slider);
        this._widthSliderLabel = cc.find("Canvas/Content/Sliders/WidthSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    OutlineEffectScene.prototype.onEnable = function () {
        this._widthSlider.node.on("slide", this._onSliderChanged, this);
    };
    OutlineEffectScene.prototype.onDisable = function () {
        this._widthSlider.node.off("slide", this._onSliderChanged, this);
    };
    OutlineEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    OutlineEffectScene.prototype._onSliderChanged = function () {
        var outlineWidth = parseFloat((this._widthSlider.progress / 100).toFixed(4));
        this._widthSliderLabel.string = "" + outlineWidth;
        // 更新材质
        this._updateRenderComponentMaterial({
            outlineWidth: outlineWidth
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    OutlineEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("outlineWidth", param.outlineWidth);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    OutlineEffectScene = __decorate([
        ccclass
    ], OutlineEffectScene);
    return OutlineEffectScene;
}(cc.Component));
exports.default = OutlineEffectScene;

cc._RF.pop();
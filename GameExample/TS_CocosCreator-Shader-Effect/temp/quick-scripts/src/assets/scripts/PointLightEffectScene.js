"use strict";
cc._RF.push(module, '3a21276gRhMeaD3pR82Ji/3', 'PointLightEffectScene');
// scripts/PointLightEffectScene.ts

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
var PointLightCtrlComponent_1 = require("./PointLightCtrlComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointLightEffectScene = /** @class */ (function (_super) {
    __extends(PointLightEffectScene, _super);
    function PointLightEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redSlider = null;
        _this._redSliderLabel = null;
        _this._greenSlider = null;
        _this._greenSliderLabel = null;
        _this._blueSlider = null;
        _this._blueSliderLabel = null;
        _this._alphaSlider = null;
        _this._alphaSliderLabel = null;
        _this._radiuSlider = null;
        _this._radiuSliderLabel = null;
        _this._cropAlphaToggle = null;
        _this._enableFogToggle = null;
        _this._examplesParentNode = null;
        return _this;
    }
    PointLightEffectScene.prototype.onLoad = function () {
        cc.dynamicAtlasManager.enabled = false;
        this._redSlider = cc.find("Canvas/Content/Controller/ColorRedSlider/Slider").getComponent(cc.Slider);
        this._redSliderLabel = cc.find("Canvas/Content/Controller/ColorRedSlider/ValueLabel").getComponent(cc.Label);
        this._greenSlider = cc.find("Canvas/Content/Controller/ColorGreenSlider/Slider").getComponent(cc.Slider);
        this._greenSliderLabel = cc.find("Canvas/Content/Controller/ColorGreenSlider/ValueLabel").getComponent(cc.Label);
        this._blueSlider = cc.find("Canvas/Content/Controller/ColorBlueSlider/Slider").getComponent(cc.Slider);
        this._blueSliderLabel = cc.find("Canvas/Content/Controller/ColorBlueSlider/ValueLabel").getComponent(cc.Label);
        this._alphaSlider = cc.find("Canvas/Content/Controller/ColorAlphaSlider/Slider").getComponent(cc.Slider);
        this._alphaSliderLabel = cc.find("Canvas/Content/Controller/ColorAlphaSlider/ValueLabel").getComponent(cc.Label);
        this._radiuSlider = cc.find("Canvas/Content/Controller/RadiuSlider/Slider").getComponent(cc.Slider);
        this._radiuSliderLabel = cc.find("Canvas/Content/Controller/RadiuSlider/ValueLabel").getComponent(cc.Label);
        this._cropAlphaToggle = cc.find("Canvas/Content/Controller/CropAlphaToggle/Toggle").getComponent(cc.Toggle);
        this._enableFogToggle = cc.find("Canvas/Content/Controller/EnableFogToggle/Toggle").getComponent(cc.Toggle);
        // 代码添加控制脚本
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.addComponent(PointLightCtrlComponent_1.default);
        });
    };
    PointLightEffectScene.prototype.onEnable = function () {
        this._redSlider.node.on("slide", this._onPropertyChanged, this);
        this._greenSlider.node.on("slide", this._onPropertyChanged, this);
        this._blueSlider.node.on("slide", this._onPropertyChanged, this);
        this._alphaSlider.node.on("slide", this._onPropertyChanged, this);
        this._radiuSlider.node.on("slide", this._onPropertyChanged, this);
        this._cropAlphaToggle.node.on("toggle", this._onPropertyChanged, this);
        this._enableFogToggle.node.on("toggle", this._onPropertyChanged, this);
    };
    PointLightEffectScene.prototype.onDisable = function () {
        this._redSlider.node.off("slide", this._onPropertyChanged, this);
        this._greenSlider.node.off("slide", this._onPropertyChanged, this);
        this._blueSlider.node.off("slide", this._onPropertyChanged, this);
        this._alphaSlider.node.off("slide", this._onPropertyChanged, this);
        this._radiuSlider.node.off("slide", this._onPropertyChanged, this);
        this._cropAlphaToggle.node.off("toggle", this._onPropertyChanged, this);
        this._enableFogToggle.node.off("toggle", this._onPropertyChanged, this);
    };
    PointLightEffectScene.prototype.start = function () {
        this._onPropertyChanged();
    };
    PointLightEffectScene.prototype._onPropertyChanged = function () {
        var _this = this;
        // 更新进度条值 Label 文本
        this._redSliderLabel.string = this._redSlider.progress.toFixed(2) + " | " + Math.round(255 * this._redSlider.progress);
        this._greenSliderLabel.string = this._greenSlider.progress.toFixed(2) + " | " + Math.round(255 * this._greenSlider.progress);
        this._blueSliderLabel.string = this._blueSlider.progress.toFixed(2) + " | " + Math.round(255 * this._blueSlider.progress);
        this._alphaSliderLabel.string = this._alphaSlider.progress.toFixed(2) + " | " + Math.round(255 * this._alphaSlider.progress);
        this._radiuSliderLabel.string = "" + this._radiuSlider.progress.toFixed(2);
        // 通知子节点更新材质
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.emit("on_property_change", {
                centerColor: cc.color(Math.round(255 * _this._redSlider.progress), Math.round(255 * _this._greenSlider.progress), Math.round(255 * _this._blueSlider.progress), Math.round(255 * _this._alphaSlider.progress)),
                radius: _this._radiuSlider.progress,
                cropAlpha: _this._cropAlphaToggle.isChecked,
                enableFog: _this._enableFogToggle.isChecked
            });
        });
    };
    PointLightEffectScene = __decorate([
        ccclass
    ], PointLightEffectScene);
    return PointLightEffectScene;
}(cc.Component));
exports.default = PointLightEffectScene;

cc._RF.pop();
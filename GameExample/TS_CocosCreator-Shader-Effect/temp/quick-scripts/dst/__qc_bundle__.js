
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_reversed_rotateBy');
require('./assets/scripts/FlashLightCtrlComponent');
require('./assets/scripts/FlashLightEffectScene');
require('./assets/scripts/GaussianBlurV1EffectScene');
require('./assets/scripts/GlowInnerV1EffectScene');
require('./assets/scripts/GlowInnerV2EffectScene');
require('./assets/scripts/GlowOutterEffectScene');
require('./assets/scripts/GrayEffectScene');
require('./assets/scripts/LoadingStyleEffect1Scene');
require('./assets/scripts/MosaicEffectScene');
require('./assets/scripts/OldPhotoEffectScene');
require('./assets/scripts/OutlineEffectScene');
require('./assets/scripts/PointLightCtrlComponent');
require('./assets/scripts/PointLightEffectScene');
require('./assets/scripts/PreviewEffectScene');
require('./assets/scripts/RoundCornerCropV1EffectScene');
require('./assets/scripts/RoundCornerCropV2EffectScene');
require('./assets/scripts/ccutils/multiresolution/ContentAdapter');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/FlashLightEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d3af93JoNEF4lgKl/V0HV8', 'FlashLightEffectScene');
// scripts/FlashLightEffectScene.ts

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
var FlashLightCtrlComponent_1 = require("./FlashLightCtrlComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FlashLightEffectScene = /** @class */ (function (_super) {
    __extends(FlashLightEffectScene, _super);
    function FlashLightEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redSlider = null;
        _this._redSliderLabel = null;
        _this._greenSlider = null;
        _this._greenSliderLabel = null;
        _this._blueSlider = null;
        _this._blueSliderLabel = null;
        _this._alphaSlider = null;
        _this._alphaSliderLabel = null;
        _this._lightWidthSlider = null;
        _this._lightWidthSliderLabel = null;
        _this._lightAngleSlider = null;
        _this._lightAngleSliderLabel = null;
        _this._enableGradientToggle = null;
        _this._cropAlphaToggle = null;
        _this._enableFogToggle = null;
        _this._examplesParentNode = null;
        return _this;
    }
    FlashLightEffectScene.prototype.onLoad = function () {
        cc.dynamicAtlasManager.enabled = false;
        this._redSlider = cc.find("Canvas/Content/Controller/ColorRedSlider/Slider").getComponent(cc.Slider);
        this._redSliderLabel = cc.find("Canvas/Content/Controller/ColorRedSlider/ValueLabel").getComponent(cc.Label);
        this._greenSlider = cc.find("Canvas/Content/Controller/ColorGreenSlider/Slider").getComponent(cc.Slider);
        this._greenSliderLabel = cc.find("Canvas/Content/Controller/ColorGreenSlider/ValueLabel").getComponent(cc.Label);
        this._blueSlider = cc.find("Canvas/Content/Controller/ColorBlueSlider/Slider").getComponent(cc.Slider);
        this._blueSliderLabel = cc.find("Canvas/Content/Controller/ColorBlueSlider/ValueLabel").getComponent(cc.Label);
        this._alphaSlider = cc.find("Canvas/Content/Controller/ColorAlphaSlider/Slider").getComponent(cc.Slider);
        this._alphaSliderLabel = cc.find("Canvas/Content/Controller/ColorAlphaSlider/ValueLabel").getComponent(cc.Label);
        this._lightWidthSlider = cc.find("Canvas/Content/Controller/LightWidthSlider/Slider").getComponent(cc.Slider);
        this._lightWidthSliderLabel = cc.find("Canvas/Content/Controller/LightWidthSlider/ValueLabel").getComponent(cc.Label);
        this._lightAngleSlider = cc.find("Canvas/Content/Controller/LightAngleSlider/Slider").getComponent(cc.Slider);
        this._lightAngleSliderLabel = cc.find("Canvas/Content/Controller/LightAngleSlider/ValueLabel").getComponent(cc.Label);
        this._enableGradientToggle = cc.find("Canvas/Content/Controller/EnableGradientToggle/Toggle").getComponent(cc.Toggle);
        this._cropAlphaToggle = cc.find("Canvas/Content/Controller/CropAlphaToggle/Toggle").getComponent(cc.Toggle);
        this._enableFogToggle = cc.find("Canvas/Content/Controller/EnableFogToggle/Toggle").getComponent(cc.Toggle);
        // 代码添加控制脚本
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.addComponent(FlashLightCtrlComponent_1.default);
        });
    };
    FlashLightEffectScene.prototype.onEnable = function () {
        this._redSlider.node.on("slide", this._onPropertyChanged, this);
        this._greenSlider.node.on("slide", this._onPropertyChanged, this);
        this._blueSlider.node.on("slide", this._onPropertyChanged, this);
        this._alphaSlider.node.on("slide", this._onPropertyChanged, this);
        this._lightWidthSlider.node.on("slide", this._onPropertyChanged, this);
        this._lightAngleSlider.node.on("slide", this._onPropertyChanged, this);
        this._enableGradientToggle.node.on("toggle", this._onPropertyChanged, this);
        this._cropAlphaToggle.node.on("toggle", this._onPropertyChanged, this);
        this._enableFogToggle.node.on("toggle", this._onPropertyChanged, this);
    };
    FlashLightEffectScene.prototype.onDisable = function () {
        this._redSlider.node.off("slide", this._onPropertyChanged, this);
        this._greenSlider.node.off("slide", this._onPropertyChanged, this);
        this._blueSlider.node.off("slide", this._onPropertyChanged, this);
        this._alphaSlider.node.off("slide", this._onPropertyChanged, this);
        this._lightWidthSlider.node.off("slide", this._onPropertyChanged, this);
        this._lightAngleSlider.node.off("slide", this._onPropertyChanged, this);
        this._enableGradientToggle.node.off("toggle", this._onPropertyChanged, this);
        this._cropAlphaToggle.node.off("toggle", this._onPropertyChanged, this);
        this._enableFogToggle.node.off("toggle", this._onPropertyChanged, this);
    };
    FlashLightEffectScene.prototype.start = function () {
        this._onPropertyChanged();
    };
    FlashLightEffectScene.prototype._onPropertyChanged = function () {
        var _this = this;
        // 更新进度条值 Label 文本
        this._redSliderLabel.string = this._redSlider.progress.toFixed(2) + " | " + Math.round(255 * this._redSlider.progress);
        this._greenSliderLabel.string = this._greenSlider.progress.toFixed(2) + " | " + Math.round(255 * this._greenSlider.progress);
        this._blueSliderLabel.string = this._blueSlider.progress.toFixed(2) + " | " + Math.round(255 * this._blueSlider.progress);
        this._alphaSliderLabel.string = this._alphaSlider.progress.toFixed(2) + " | " + Math.round(255 * this._alphaSlider.progress);
        this._lightWidthSliderLabel.string = "" + this._lightWidthSlider.progress.toFixed(2);
        var angle = 180 * this._lightAngleSlider.progress;
        this._lightAngleSliderLabel.string = this._lightAngleSlider.progress.toFixed(2) + " | " + angle.toFixed(2);
        // 通知子节点更新材质
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.emit("on_property_change", {
                lightColor: cc.color(Math.round(255 * _this._redSlider.progress), Math.round(255 * _this._greenSlider.progress), Math.round(255 * _this._blueSlider.progress), Math.round(255 * _this._alphaSlider.progress)),
                lightAngle: angle,
                lightWidth: _this._lightWidthSlider.progress,
                enableGradient: _this._enableGradientToggle.isChecked,
                cropAlpha: _this._cropAlphaToggle.isChecked,
                enableFog: _this._enableFogToggle.isChecked
            });
        });
    };
    FlashLightEffectScene = __decorate([
        ccclass
    ], FlashLightEffectScene);
    return FlashLightEffectScene;
}(cc.Component));
exports.default = FlashLightEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0ZsYXNoTGlnaHRFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBbUY7QUFFN0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUF5R0M7UUF4R1csZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBQ25DLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFDbkMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBQ3BDLDRCQUFzQixHQUFhLElBQUksQ0FBQztRQUN4Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFDcEMsNEJBQXNCLEdBQWEsSUFBSSxDQUFDO1FBRXhDLDJCQUFxQixHQUFjLElBQUksQ0FBQztRQUN4QyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFDbkMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUF1RmhELENBQUM7SUFyRkcsc0NBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFB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LEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDL0M7Z0JBQ0QsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFVBQVUsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUTtnQkFDM0MsY0FBYyxFQUFFLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTO2dCQUNwRCxTQUFTLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Z0JBQzFDLFNBQVMsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUzthQUM3QyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF4R2dCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBeUd6QztJQUFELDRCQUFDO0NBekdELEFBeUdDLENBekdrRCxFQUFFLENBQUMsU0FBUyxHQXlHOUQ7a0JBekdvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxhc2hMaWdodEN0cmxDb21wb25lbnQsIHsgRmxhc2hMaWdodFVCTyB9IGZyb20gXCIuL0ZsYXNoTGlnaHRDdHJsQ29tcG9uZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaExpZ2h0RWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX3JlZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9yZWRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgX2dyZWVuU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2dyZWVuU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIF9ibHVlU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2JsdWVTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIF9saWdodFdpZHRoU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2xpZ2h0V2lkdGhTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgX2xpZ2h0QW5nbGVTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGlnaHRBbmdsZVNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9lbmFibGVHcmFkaWVudFRvZ2dsZTogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBwcml2YXRlIF9jcm9wQWxwaGFUb2dnbGU6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZW5hYmxlRm9nVG9nZ2xlOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQ29sb3JSZWRTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0NvbG9yUmVkU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9Db2xvckdyZWVuU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0NvbG9yR3JlZW5TbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLl9ibHVlU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQ29sb3JCbHVlU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQ29sb3JCbHVlU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9Db2xvckFscGhhU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0NvbG9yQWxwaGFTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLl9saWdodFdpZHRoU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvTGlnaHRXaWR0aFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2xpZ2h0V2lkdGhTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0xpZ2h0V2lkdGhTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLl9saWdodEFuZ2xlU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvTGlnaHRBbmdsZVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2xpZ2h0QW5nbGVTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0xpZ2h0QW5nbGVTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2VuYWJsZUdyYWRpZW50VG9nZ2xlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvRW5hYmxlR3JhZGllbnRUb2dnbGUvVG9nZ2xlXCIpLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuICAgICAgICB0aGlzLl9jcm9wQWxwaGFUb2dnbGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9Dcm9wQWxwaGFUb2dnbGUvVG9nZ2xlXCIpLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuICAgICAgICB0aGlzLl9lbmFibGVGb2dUb2dnbGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9FbmFibGVGb2dUb2dnbGUvVG9nZ2xlXCIpLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuXG4gICAgICAgIC8vIOS7o+eggea3u+WKoOaOp+WItuiEmuacrFxuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvRXhhbXBsZXNcIik7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUuYWRkQ29tcG9uZW50KEZsYXNoTGlnaHRDdHJsQ29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9ibHVlU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2xpZ2h0V2lkdGhTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbGlnaHRBbmdsZVNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2VuYWJsZUdyYWRpZW50VG9nZ2xlLm5vZGUub24oXCJ0b2dnbGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9jcm9wQWxwaGFUb2dnbGUubm9kZS5vbihcInRvZ2dsZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2VuYWJsZUZvZ1RvZ2dsZS5ub2RlLm9uKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9saWdodFdpZHRoU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9saWdodEFuZ2xlU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2VuYWJsZUdyYWRpZW50VG9nZ2xlLm5vZGUub2ZmKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fY3JvcEFscGhhVG9nZ2xlLm5vZGUub2ZmKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlRm9nVG9nZ2xlLm5vZGUub2ZmKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblByb3BlcnR5Q2hhbmdlZCgpIHtcbiAgICAgICAgLy8g5pu05paw6L+b5bqm5p2h5YC8IExhYmVsIOaWh+acrFxuICAgICAgICB0aGlzLl9yZWRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9yZWRTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke01hdGgucm91bmQoMjU1ICogdGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9ibHVlU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ibHVlU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2FscGhhU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX2FscGhhU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9saWdodFdpZHRoU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fbGlnaHRXaWR0aFNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfWA7XG5cbiAgICAgICAgbGV0IGFuZ2xlID0gMTgwICogdGhpcy5fbGlnaHRBbmdsZVNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5fbGlnaHRBbmdsZVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2xpZ2h0QW5nbGVTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke2FuZ2xlLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDpgJrnn6XlrZDoioLngrnmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5lbWl0KFwib25fcHJvcGVydHlfY2hhbmdlXCIsIDxGbGFzaExpZ2h0VUJPPntcbiAgICAgICAgICAgICAgICBsaWdodENvbG9yOiBjYy5jb2xvcihcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9yZWRTbGlkZXIucHJvZ3Jlc3MpLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ibHVlU2xpZGVyLnByb2dyZXNzKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcylcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGxpZ2h0QW5nbGU6IGFuZ2xlLFxuICAgICAgICAgICAgICAgIGxpZ2h0V2lkdGg6IHRoaXMuX2xpZ2h0V2lkdGhTbGlkZXIucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgZW5hYmxlR3JhZGllbnQ6IHRoaXMuX2VuYWJsZUdyYWRpZW50VG9nZ2xlLmlzQ2hlY2tlZCxcbiAgICAgICAgICAgICAgICBjcm9wQWxwaGE6IHRoaXMuX2Nyb3BBbHBoYVRvZ2dsZS5pc0NoZWNrZWQsXG4gICAgICAgICAgICAgICAgZW5hYmxlRm9nOiB0aGlzLl9lbmFibGVGb2dUb2dnbGUuaXNDaGVja2VkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9410FY+EVIW6NUy+NFLs5u', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZUJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlQnkiLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiB2ZXJzaW9ucy5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiDniYjmnKznmoTlt6XnqIvvvIxcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcbiAqL1xuXG5jYy5Sb3RhdGVCeS5fcmV2ZXJzZSA9IHRydWU7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MosaicEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79bbepDSHNMFqIKaCT3E1AX', 'MosaicEffectScene');
// scripts/MosaicEffectScene.ts

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
var MosaicEffectScene = /** @class */ (function (_super) {
    __extends(MosaicEffectScene, _super);
    function MosaicEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._xMosaicCountSlider = null;
        _this._xMosaicCountSliderLabel = null;
        _this._yMosaicCountSlider = null;
        _this._yMosaicCountSliderLabel = null;
        _this._mosaicCountSlider = null;
        _this._mosaicCountSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    MosaicEffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
        this._xMosaicCountSlider = cc.find("Canvas/Content/Sliders/XMosaicCountSlider/Slider").getComponent(cc.Slider);
        this._xMosaicCountSliderLabel = cc.find("Canvas/Content/Sliders/XMosaicCountSlider/ValueLabel").getComponent(cc.Label);
        this._yMosaicCountSlider = cc.find("Canvas/Content/Sliders/YMosaicCountSlider/Slider").getComponent(cc.Slider);
        this._yMosaicCountSliderLabel = cc.find("Canvas/Content/Sliders/YMosaicCountSlider/ValueLabel").getComponent(cc.Label);
        this._mosaicCountSlider = cc.find("Canvas/Content/Sliders/MosaicCountSlider/Slider").getComponent(cc.Slider);
        this._mosaicCountSliderLabel = cc.find("Canvas/Content/Sliders/MosaicCountSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    MosaicEffectScene.prototype.onEnable = function () {
        this._xMosaicCountSlider.node.on("slide", this._onSliderChanged, this);
        this._yMosaicCountSlider.node.on("slide", this._onSliderChanged, this);
        this._mosaicCountSlider.node.on("slide", this._onSliderChangedTogether, this);
    };
    MosaicEffectScene.prototype.onDisable = function () {
        this._xMosaicCountSlider.node.off("slide", this._onSliderChanged, this);
        this._yMosaicCountSlider.node.off("slide", this._onSliderChanged, this);
        this._mosaicCountSlider.node.off("slide", this._onSliderChangedTogether, this);
    };
    MosaicEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    MosaicEffectScene.prototype._onSliderChangedTogether = function () {
        var mosaicCount = Math.round(this._mosaicCountSlider.progress * 300);
        this._mosaicCountSliderLabel.string = "" + mosaicCount;
        // 更新材质
        this._updateRenderComponentMaterial({
            xBlockCount: mosaicCount,
            yBlockCount: mosaicCount
        });
    };
    MosaicEffectScene.prototype._onSliderChanged = function () {
        var xMosaicCount = Math.round(this._xMosaicCountSlider.progress * 300);
        this._xMosaicCountSliderLabel.string = "" + xMosaicCount;
        var yMosaicCount = Math.round(this._yMosaicCountSlider.progress * 300);
        this._yMosaicCountSliderLabel.string = "" + yMosaicCount;
        // 更新材质
        this._updateRenderComponentMaterial({
            xBlockCount: xMosaicCount,
            yBlockCount: yMosaicCount
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    MosaicEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("xBlockCount", param.xBlockCount);
                material.setProperty("yBlockCount", param.yBlockCount);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    MosaicEffectScene = __decorate([
        ccclass
    ], MosaicEffectScene);
    return MosaicEffectScene;
}(cc.Component));
exports.default = MosaicEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01vc2FpY0VmZmVjdFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBNEZDO1FBM0ZXLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUN0Qyw4QkFBd0IsR0FBYSxJQUFJLENBQUM7UUFDMUMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBQ3RDLDhCQUF3QixHQUFhLElBQUksQ0FBQztRQUMxQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFDckMsNkJBQXVCLEdBQWEsSUFBSSxDQUFDO1FBRXpDLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUFvRmhELENBQUM7SUFsRkcsa0NBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUV2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxD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QUEsZUFBZTtnQkFDL0QsSUFBSSxRQUFRLEdBQWdCLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2RCxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNGZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0E0RnJDO0lBQUQsd0JBQUM7Q0E1RkQsQUE0RkMsQ0E1RjhDLEVBQUUsQ0FBQyxTQUFTLEdBNEYxRDtrQkE1Rm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3NhaWNFZmZlY3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfeE1vc2FpY0NvdW50U2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX3hNb3NhaWNDb3VudFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfeU1vc2FpY0NvdW50U2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX3lNb3NhaWNDb3VudFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbW9zYWljQ291bnRTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbW9zYWljQ291bnRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5YWz6Zet5Yqo5oCB5ZCI5Zu+XG4gICAgICAgIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL1hNb3NhaWNDb3VudFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvWE1vc2FpY0NvdW50U2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvWU1vc2FpY0NvdW50U2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9ZTW9zYWljQ291bnRTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLl9tb3NhaWNDb3VudFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL01vc2FpY0NvdW50U2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fbW9zYWljQ291bnRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL01vc2FpY0NvdW50U2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvRXhhbXBsZXNcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9tb3NhaWNDb3VudFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkVG9nZXRoZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5feE1vc2FpY0NvdW50U2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbW9zYWljQ291bnRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWRUb2dldGhlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uU2xpZGVyQ2hhbmdlZFRvZ2V0aGVyKCkge1xuICAgICAgICBsZXQgbW9zYWljQ291bnQgPSBNYXRoLnJvdW5kKHRoaXMuX21vc2FpY0NvdW50U2xpZGVyLnByb2dyZXNzICogMzAwKTtcbiAgICAgICAgdGhpcy5fbW9zYWljQ291bnRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHttb3NhaWNDb3VudH1gO1xuXG4gICAgICAgIC8vIOabtOaWsOadkOi0qFxuICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbCh7XG4gICAgICAgICAgICB4QmxvY2tDb3VudDogbW9zYWljQ291bnQsXG4gICAgICAgICAgICB5QmxvY2tDb3VudDogbW9zYWljQ291bnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25TbGlkZXJDaGFuZ2VkKCkge1xuICAgICAgICBsZXQgeE1vc2FpY0NvdW50ID0gTWF0aC5yb3VuZCh0aGlzLl94TW9zYWljQ291bnRTbGlkZXIucHJvZ3Jlc3MgKiAzMDApO1xuICAgICAgICB0aGlzLl94TW9zYWljQ291bnRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt4TW9zYWljQ291bnR9YDtcblxuICAgICAgICBsZXQgeU1vc2FpY0NvdW50ID0gTWF0aC5yb3VuZCh0aGlzLl95TW9zYWljQ291bnRTbGlkZXIucHJvZ3Jlc3MgKiAzMDApO1xuICAgICAgICB0aGlzLl95TW9zYWljQ291bnRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt5TW9zYWljQ291bnR9YDtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgeEJsb2NrQ291bnQ6IHhNb3NhaWNDb3VudCxcbiAgICAgICAgICAgIHlCbG9ja0NvdW50OiB5TW9zYWljQ291bnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5riy5p+T57uE5Lu255qE5p2Q6LSoXG4gICAgICpcbiAgICAgKiAxLiDojrflj5bmnZDotKhcbiAgICAgKiAyLiDnu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICogMy4g6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjovbTmlrnlnZfmlbDph48gWzEuMCwg5q2j5peg56m3XVxuICAgICAgICAgKi9cbiAgICAgICAgeEJsb2NrQ291bnQ6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogWei9tOaWueWdl+aVsOmHjyBbMS4wLCDmraPml6DnqbddXG4gICAgICAgICAqL1xuICAgICAgICB5QmxvY2tDb3VudDogbnVtYmVyO1xuICAgIH0pIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSByZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJ4QmxvY2tDb3VudFwiLCBwYXJhbS54QmxvY2tDb3VudCk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJ5QmxvY2tDb3VudFwiLCBwYXJhbS55QmxvY2tDb3VudCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GlowInnerV2EffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c875cb7RxHba/HkXA34I9a', 'GlowInnerV2EffectScene');
// scripts/GlowInnerV2EffectScene.ts

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
var GlowInnerV2EffectScene = /** @class */ (function (_super) {
    __extends(GlowInnerV2EffectScene, _super);
    function GlowInnerV2EffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redSlider = null;
        _this._redSliderLabel = null;
        _this._greenSlider = null;
        _this._greenSliderLabel = null;
        _this._blueSlider = null;
        _this._blueSliderLabel = null;
        _this._alphaSlider = null;
        _this._alphaSliderLabel = null;
        _this._glowWidthSlider = null;
        _this._glowWidthSliderLabel = null;
        _this._glowThresholdSlider = null;
        _this._glowThresholdSliderLabel = null;
        _this._scrollView = null;
        return _this;
    }
    GlowInnerV2EffectScene.prototype.onLoad = function () {
        cc.dynamicAtlasManager.enabled = false;
        this._redSlider = cc.find("Canvas/Content/Sliders/ColorRedSlider/Slider").getComponent(cc.Slider);
        this._redSliderLabel = cc.find("Canvas/Content/Sliders/ColorRedSlider/ValueLabel").getComponent(cc.Label);
        this._greenSlider = cc.find("Canvas/Content/Sliders/ColorGreenSlider/Slider").getComponent(cc.Slider);
        this._greenSliderLabel = cc.find("Canvas/Content/Sliders/ColorGreenSlider/ValueLabel").getComponent(cc.Label);
        this._blueSlider = cc.find("Canvas/Content/Sliders/ColorBlueSlider/Slider").getComponent(cc.Slider);
        this._blueSliderLabel = cc.find("Canvas/Content/Sliders/ColorBlueSlider/ValueLabel").getComponent(cc.Label);
        this._alphaSlider = cc.find("Canvas/Content/Sliders/ColorAlphaSlider/Slider").getComponent(cc.Slider);
        this._alphaSliderLabel = cc.find("Canvas/Content/Sliders/ColorAlphaSlider/ValueLabel").getComponent(cc.Label);
        this._glowWidthSlider = cc.find("Canvas/Content/Sliders/GlowWidthSlider/Slider").getComponent(cc.Slider);
        this._glowWidthSliderLabel = cc.find("Canvas/Content/Sliders/GlowWidthSlider/ValueLabel").getComponent(cc.Label);
        this._glowThresholdSlider = cc.find("Canvas/Content/Sliders/GlowThresholdSlider/Slider").getComponent(cc.Slider);
        this._glowThresholdSliderLabel = cc.find("Canvas/Content/Sliders/GlowThresholdSlider/ValueLabel").getComponent(cc.Label);
        this._scrollView = cc.find("Canvas/Content/ScrollView").getComponent(cc.ScrollView);
    };
    GlowInnerV2EffectScene.prototype.onEnable = function () {
        this._redSlider.node.on("slide", this._onSliderChanged, this);
        this._greenSlider.node.on("slide", this._onSliderChanged, this);
        this._blueSlider.node.on("slide", this._onSliderChanged, this);
        this._alphaSlider.node.on("slide", this._onSliderChanged, this);
        this._glowWidthSlider.node.on("slide", this._onSliderChanged, this);
        this._glowThresholdSlider.node.on("slide", this._onSliderChanged, this);
    };
    GlowInnerV2EffectScene.prototype.onDisable = function () {
        this._redSlider.node.off("slide", this._onSliderChanged, this);
        this._greenSlider.node.off("slide", this._onSliderChanged, this);
        this._blueSlider.node.off("slide", this._onSliderChanged, this);
        this._alphaSlider.node.off("slide", this._onSliderChanged, this);
        this._glowWidthSlider.node.off("slide", this._onSliderChanged, this);
        this._glowThresholdSlider.node.off("slide", this._onSliderChanged, this);
    };
    GlowInnerV2EffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    GlowInnerV2EffectScene.prototype._onSliderChanged = function () {
        // 更新进度条值 Label 文本
        this._redSliderLabel.string = this._redSlider.progress.toFixed(2) + " | " + Math.round(255 * this._redSlider.progress);
        this._greenSliderLabel.string = this._greenSlider.progress.toFixed(2) + " | " + Math.round(255 * this._greenSlider.progress);
        this._blueSliderLabel.string = this._blueSlider.progress.toFixed(2) + " | " + Math.round(255 * this._blueSlider.progress);
        this._alphaSliderLabel.string = this._alphaSlider.progress.toFixed(2) + " | " + Math.round(255 * this._alphaSlider.progress);
        var realGlowWidthProgress = this._glowWidthSlider.progress * 200;
        this._glowWidthSliderLabel.string = "" + realGlowWidthProgress.toFixed(0);
        // 这里为约束一下值发光阈值值在 [0.0, 0.5] 因为 0.5+ 之后的效果可能就是其他效果，也可以自己修改这里
        // let realGlowThresholdProgress = this._glowThresholdSlider.progress * 0.5;
        var realGlowThresholdProgress = this._glowThresholdSlider.progress;
        this._glowThresholdSliderLabel.string = "" + realGlowThresholdProgress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            glowColor: cc.v4(this._redSlider.progress, this._greenSlider.progress, this._blueSlider.progress, this._alphaSlider.progress),
            glowRange: realGlowWidthProgress,
            glowThreshold: realGlowThresholdProgress,
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    GlowInnerV2EffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._scrollView.content.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                if (renderComponent instanceof cc.Sprite) {
                    var spriteFrameRect = renderComponent.spriteFrame.getRect();
                    var material = renderComponent.getMaterial(0);
                    material.setProperty("spriteWidth", spriteFrameRect.width);
                    material.setProperty("spriteHeight", spriteFrameRect.height);
                    material.setProperty("glowRange", param.glowRange);
                    material.setProperty("glowColor", param.glowColor);
                    material.setProperty("glowThreshold", param.glowThreshold);
                    renderComponent.setMaterial(0, material);
                }
                else {
                    var material = renderComponent.getMaterial(0);
                    material.setProperty("spriteWidth", childNode.width);
                    material.setProperty("spriteHeight", childNode.height);
                    material.setProperty("glowRange", param.glowRange);
                    material.setProperty("glowColor", param.glowColor);
                    material.setProperty("glowThreshold", param.glowThreshold);
                    renderComponent.setMaterial(0, material);
                }
            });
        });
    };
    GlowInnerV2EffectScene = __decorate([
        ccclass
    ], GlowInnerV2EffectScene);
    return GlowInnerV2EffectScene;
}(cc.Component));
exports.default = GlowInnerV2EffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb3dJbm5lclYyRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUF1SUM7UUF0SVcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRW5DLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUVsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBQ25DLDJCQUFxQixHQUFhLElBQUksQ0FBQztRQUV2QywwQkFBb0IsR0FBYyxJQUFJLENBQUM7UUFDdkMsK0JBQXlCLEdBQWEsSUFBSSxDQUFDO1FBRTNDLGlCQUFXLEdBQWtCLElBQUksQ0FBQzs7SUFvSDlDLENBQUM7SUFsSEcsdUNBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJ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USxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUM1QztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdElnQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQXVJMUM7SUFBRCw2QkFBQztDQXZJRCxBQXVJQyxDQXZJbUQsRUFBRSxDQUFDLFNBQVMsR0F1SS9EO2tCQXZJb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb3dJbm5lclYyRWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX3JlZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9yZWRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ3JlZW5TbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ3JlZW5TbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYmx1ZVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ibHVlU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2dsb3dXaWR0aFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9nbG93V2lkdGhTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ2xvd1RocmVzaG9sZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9nbG93VGhyZXNob2xkU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JSZWRTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yUmVkU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9ncmVlblNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yR3JlZW5TbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JHcmVlblNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQmx1ZVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQmx1ZVNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckFscGhhU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQWxwaGFTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dXaWR0aFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR2xvd1dpZHRoU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9nbG93VGhyZXNob2xkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR2xvd1RocmVzaG9sZFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dUaHJlc2hvbGRTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIC8vIOabtOaWsOi/m+W6puadoeWAvCBMYWJlbCDmlofmnKxcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX3JlZFNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2JsdWVTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke01hdGgucm91bmQoMjU1ICogdGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcyl9YDtcblxuICAgICAgICBsZXQgcmVhbEdsb3dXaWR0aFByb2dyZXNzID0gdGhpcy5fZ2xvd1dpZHRoU2xpZGVyLnByb2dyZXNzICogMjAwO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHtyZWFsR2xvd1dpZHRoUHJvZ3Jlc3MudG9GaXhlZCgwKX1gO1xuXG4gICAgICAgIC8vIOi/memHjOS4uue6puadn+S4gOS4i+WAvOWPkeWFiemYiOWAvOWAvOWcqCBbMC4wLCAwLjVdIOWboOS4uiAwLjUrIOS5i+WQjueahOaViOaenOWPr+iDveWwseaYr+WFtuS7luaViOaenO+8jOS5n+WPr+S7peiHquW3seS/ruaUuei/memHjFxuICAgICAgICAvLyBsZXQgcmVhbEdsb3dUaHJlc2hvbGRQcm9ncmVzcyA9IHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIucHJvZ3Jlc3MgKiAwLjU7XG4gICAgICAgIGxldCByZWFsR2xvd1RocmVzaG9sZFByb2dyZXNzID0gdGhpcy5fZ2xvd1RocmVzaG9sZFNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5fZ2xvd1RocmVzaG9sZFNsaWRlckxhYmVsLnN0cmluZyA9IGAke3JlYWxHbG93VGhyZXNob2xkUHJvZ3Jlc3MudG9GaXhlZCgyKX1gO1xuXG4gICAgICAgIC8vIOabtOaWsOadkOi0qFxuICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbCh7XG4gICAgICAgICAgICBnbG93Q29sb3I6IGNjLnY0KHRoaXMuX3JlZFNsaWRlci5wcm9ncmVzcywgdGhpcy5fZ3JlZW5TbGlkZXIucHJvZ3Jlc3MsIHRoaXMuX2JsdWVTbGlkZXIucHJvZ3Jlc3MsIHRoaXMuX2FscGhhU2xpZGVyLnByb2dyZXNzKSxcbiAgICAgICAgICAgIGdsb3dSYW5nZTogcmVhbEdsb3dXaWR0aFByb2dyZXNzLFxuICAgICAgICAgICAgZ2xvd1RocmVzaG9sZDogcmVhbEdsb3dUaHJlc2hvbGRQcm9ncmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5riy5p+T57uE5Lu255qE5p2Q6LSoXG4gICAgICpcbiAgICAgKiAxLiDojrflj5bmnZDotKhcbiAgICAgKiAyLiDnu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICogMy4g6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWPkeWFieWuveW6pu+8iHB477yJXG4gICAgICAgICAqL1xuICAgICAgICBnbG93UmFuZ2U6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ6aKc6ImyIFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dDb2xvcjogY2MuVmVjNDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ6ZiI5YC8IFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaCgocmVuZGVyQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbmRlckNvbXBvbmVudCBpbnN0YW5jZW9mIGNjLlNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVSZWN0ID0gKDxjYy5TcHJpdGU+cmVuZGVyQ29tcG9uZW50KS5zcHJpdGVGcmFtZS5nZXRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSByZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwic3ByaXRlV2lkdGhcIiwgc3ByaXRlRnJhbWVSZWN0LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJzcHJpdGVIZWlnaHRcIiwgc3ByaXRlRnJhbWVSZWN0LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd1JhbmdlXCIsIHBhcmFtLmdsb3dSYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd0NvbG9yXCIsIHBhcmFtLmdsb3dDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd1RocmVzaG9sZFwiLCBwYXJhbS5nbG93VGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInNwcml0ZVdpZHRoXCIsIGNoaWxkTm9kZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwic3ByaXRlSGVpZ2h0XCIsIGNoaWxkTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dSYW5nZVwiLCBwYXJhbS5nbG93UmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dDb2xvclwiLCBwYXJhbS5nbG93Q29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dUaHJlc2hvbGRcIiwgcGFyYW0uZ2xvd1RocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/OldPhotoEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL09sZFBob3RvRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUF1REM7UUF0RFcscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFDbEMsMEJBQW9CLEdBQWEsSUFBSSxDQUFDO1FBRXRDLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUFtRGhELENBQUM7SUFqREcsb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9HLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsdUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDhDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUM7UUFFakYsT0FBTztRQUNQLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztZQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRO1NBQzFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyw0REFBOEIsR0FBdEMsVUFBdUMsS0FLdEM7UUFDRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7WUFDL0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsZUFBZTtnQkFDL0QsSUFBSSxRQUFRLEdBQWdCLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0RGdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBdUR2QztJQUFELDBCQUFDO0NBdkRELEFBdURDLENBdkRnRCxFQUFFLENBQUMsU0FBUyxHQXVENUQ7a0JBdkRvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2xkUGhvdG9FZmZlY3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfb2xkTGV2ZWxTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfb2xkTGV2ZWxTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fb2xkTGV2ZWxTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9PbGRMZXZlbFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX29sZExldmVsU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9PbGRMZXZlbFNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0V4YW1wbGVzXCIpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9vbGRMZXZlbFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX29sZExldmVsU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fb25TbGlkZXJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25TbGlkZXJDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl9vbGRMZXZlbFNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX29sZExldmVsU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgb2xkTGV2ZWw6IHRoaXMuX29sZExldmVsU2xpZGVyLnByb2dyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHBhcmFtOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDogIHljJbnqIvluqYgWzAuMCwgMS4wXSDvvIwxLjAg6KGo56S65a6M5YWo6ICB5YyWXG4gICAgICAgICAqL1xuICAgICAgICBvbGRMZXZlbDogbnVtYmVyO1xuICAgIH0pIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSByZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJvbGRMZXZlbFwiLCBwYXJhbS5vbGRMZXZlbCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GlowOutterEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88555WjoqZCYKep02MUX87W', 'GlowOutterEffectScene');
// scripts/GlowOutterEffectScene.ts

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
var GlowOutterEffectScene = /** @class */ (function (_super) {
    __extends(GlowOutterEffectScene, _super);
    function GlowOutterEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redSlider = null;
        _this._redSliderLabel = null;
        _this._greenSlider = null;
        _this._greenSliderLabel = null;
        _this._blueSlider = null;
        _this._blueSliderLabel = null;
        _this._alphaSlider = null;
        _this._alphaSliderLabel = null;
        _this._glowWidthSlider = null;
        _this._glowWidthSliderLabel = null;
        _this._glowThresholdSlider = null;
        _this._glowThresholdSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    GlowOutterEffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
        this._redSlider = cc.find("Canvas/Content/Sliders/ColorRedSlider/Slider").getComponent(cc.Slider);
        this._redSliderLabel = cc.find("Canvas/Content/Sliders/ColorRedSlider/ValueLabel").getComponent(cc.Label);
        this._greenSlider = cc.find("Canvas/Content/Sliders/ColorGreenSlider/Slider").getComponent(cc.Slider);
        this._greenSliderLabel = cc.find("Canvas/Content/Sliders/ColorGreenSlider/ValueLabel").getComponent(cc.Label);
        this._blueSlider = cc.find("Canvas/Content/Sliders/ColorBlueSlider/Slider").getComponent(cc.Slider);
        this._blueSliderLabel = cc.find("Canvas/Content/Sliders/ColorBlueSlider/ValueLabel").getComponent(cc.Label);
        this._alphaSlider = cc.find("Canvas/Content/Sliders/ColorAlphaSlider/Slider").getComponent(cc.Slider);
        this._alphaSliderLabel = cc.find("Canvas/Content/Sliders/ColorAlphaSlider/ValueLabel").getComponent(cc.Label);
        this._glowWidthSlider = cc.find("Canvas/Content/Sliders/GlowWidthSlider/Slider").getComponent(cc.Slider);
        this._glowWidthSliderLabel = cc.find("Canvas/Content/Sliders/GlowWidthSlider/ValueLabel").getComponent(cc.Label);
        this._glowThresholdSlider = cc.find("Canvas/Content/Sliders/GlowThresholdSlider/Slider").getComponent(cc.Slider);
        this._glowThresholdSliderLabel = cc.find("Canvas/Content/Sliders/GlowThresholdSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    GlowOutterEffectScene.prototype.onEnable = function () {
        this._redSlider.node.on("slide", this._onSliderChanged, this);
        this._greenSlider.node.on("slide", this._onSliderChanged, this);
        this._blueSlider.node.on("slide", this._onSliderChanged, this);
        this._alphaSlider.node.on("slide", this._onSliderChanged, this);
        this._glowWidthSlider.node.on("slide", this._onSliderChanged, this);
        this._glowThresholdSlider.node.on("slide", this._onSliderChanged, this);
    };
    GlowOutterEffectScene.prototype.onDisable = function () {
        this._redSlider.node.off("slide", this._onSliderChanged, this);
        this._greenSlider.node.off("slide", this._onSliderChanged, this);
        this._blueSlider.node.off("slide", this._onSliderChanged, this);
        this._alphaSlider.node.off("slide", this._onSliderChanged, this);
        this._glowWidthSlider.node.off("slide", this._onSliderChanged, this);
        this._glowThresholdSlider.node.off("slide", this._onSliderChanged, this);
    };
    GlowOutterEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    GlowOutterEffectScene.prototype._onSliderChanged = function () {
        // 更新进度条值 Label 文本
        this._redSliderLabel.string = this._redSlider.progress.toFixed(2) + " | " + Math.round(255 * this._redSlider.progress);
        this._greenSliderLabel.string = this._greenSlider.progress.toFixed(2) + " | " + Math.round(255 * this._greenSlider.progress);
        this._blueSliderLabel.string = this._blueSlider.progress.toFixed(2) + " | " + Math.round(255 * this._blueSlider.progress);
        this._alphaSliderLabel.string = this._alphaSlider.progress.toFixed(2) + " | " + Math.round(255 * this._alphaSlider.progress);
        // 这里为约束一下值发光宽度值在 [0.0, 0.1] 因为 0.1+ 之后的效果可能不明显，也可以自己尝试修改
        var realGlowWidthProgress = this._glowWidthSlider.progress * 0.1;
        this._glowWidthSliderLabel.string = "" + realGlowWidthProgress.toFixed(2);
        // 这里为约束一下值发光阈值值在 [0.0, 0.5] 因为 0.5+ 之后的效果可能就是其他效果，也可以自己修改这里
        // let realGlowThresholdProgress = this._glowThresholdSlider.progress * 0.5;
        var realGlowThresholdProgress = this._glowThresholdSlider.progress;
        this._glowThresholdSliderLabel.string = "" + realGlowThresholdProgress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            glowColor: cc.v4(this._redSlider.progress, this._greenSlider.progress, this._blueSlider.progress, this._alphaSlider.progress),
            glowColorSize: realGlowWidthProgress,
            glowThreshold: realGlowThresholdProgress
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    GlowOutterEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("glowColorSize", param.glowColorSize);
                material.setProperty("glowColor", param.glowColor);
                material.setProperty("glowThreshold", param.glowThreshold);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    GlowOutterEffectScene = __decorate([
        ccclass
    ], GlowOutterEffectScene);
    return GlowOutterEffectScene;
}(cc.Component));
exports.default = GlowOutterEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb3dPdXR0ZXJFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTZIQztRQTVIVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDOUIsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBQy9CLHVCQUFpQixHQUFhLElBQUksQ0FBQztRQUVuQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFDbkMsMkJBQXFCLEdBQWEsSUFBSSxDQUFDO1FBRXZDLDBCQUFvQixHQUFjLElBQUksQ0FBQztRQUN2QywrQkFBeUIsR0FBYSxJQUFJLENBQUM7UUFFM0MseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQTBHaEQsQ0FBQztJQXhHRyxzQ0FBTSxHQUFOO1FBQ0ksU0FBUztRQUNULEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVB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QUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7WUFDL0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsZUFBZTtnQkFDL0QsSUFBSSxRQUFRLEdBQWdCLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUhnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTZIekM7SUFBRCw0QkFBQztDQTdIRCxBQTZIQyxDQTdIa0QsRUFBRSxDQUFDLFNBQVMsR0E2SDlEO2tCQTdIb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb3dPdXR0ZXJFZmZlY3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcmVkU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX3JlZFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9ncmVlblNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ncmVlblNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9ibHVlU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2JsdWVTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYWxwaGFTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYWxwaGFTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ2xvd1dpZHRoU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2dsb3dXaWR0aFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9nbG93VGhyZXNob2xkU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2dsb3dUaHJlc2hvbGRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5YWz6Zet5Yqo5oCB5ZCI5Zu+XG4gICAgICAgIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3JlZFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yUmVkU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvclJlZFNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckdyZWVuU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yR3JlZW5TbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckJsdWVTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9ibHVlU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckJsdWVTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JBbHBoYVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckFscGhhU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9HbG93V2lkdGhTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dXaWR0aFNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fZ2xvd1RocmVzaG9sZFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dUaHJlc2hvbGRTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9nbG93VGhyZXNob2xkU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9HbG93VGhyZXNob2xkU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvRXhhbXBsZXNcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIC8vIOabtOaWsOi/m+W6puadoeWAvCBMYWJlbCDmlofmnKxcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX3JlZFNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2JsdWVTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke01hdGgucm91bmQoMjU1ICogdGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcyl9YDtcblxuICAgICAgICAvLyDov5nph4zkuLrnuqbmnZ/kuIDkuIvlgLzlj5HlhYnlrr3luqblgLzlnKggWzAuMCwgMC4xXSDlm6DkuLogMC4xKyDkuYvlkI7nmoTmlYjmnpzlj6/og73kuI3mmI7mmL7vvIzkuZ/lj6/ku6Xoh6rlt7HlsJ3or5Xkv67mlLlcbiAgICAgICAgbGV0IHJlYWxHbG93V2lkdGhQcm9ncmVzcyA9IHRoaXMuX2dsb3dXaWR0aFNsaWRlci5wcm9ncmVzcyAqIDAuMTtcbiAgICAgICAgdGhpcy5fZ2xvd1dpZHRoU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7cmVhbEdsb3dXaWR0aFByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDov5nph4zkuLrnuqbmnZ/kuIDkuIvlgLzlj5HlhYnpmIjlgLzlgLzlnKggWzAuMCwgMC41XSDlm6DkuLogMC41KyDkuYvlkI7nmoTmlYjmnpzlj6/og73lsLHmmK/lhbbku5bmlYjmnpzvvIzkuZ/lj6/ku6Xoh6rlt7Hkv67mlLnov5nph4xcbiAgICAgICAgLy8gbGV0IHJlYWxHbG93VGhyZXNob2xkUHJvZ3Jlc3MgPSB0aGlzLl9nbG93VGhyZXNob2xkU2xpZGVyLnByb2dyZXNzICogMC41O1xuICAgICAgICBsZXQgcmVhbEdsb3dUaHJlc2hvbGRQcm9ncmVzcyA9IHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHtyZWFsR2xvd1RocmVzaG9sZFByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgZ2xvd0NvbG9yOiBjYy52NCh0aGlzLl9yZWRTbGlkZXIucHJvZ3Jlc3MsIHRoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzLCB0aGlzLl9ibHVlU2xpZGVyLnByb2dyZXNzLCB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcyksXG4gICAgICAgICAgICBnbG93Q29sb3JTaXplOiByZWFsR2xvd1dpZHRoUHJvZ3Jlc3MsXG4gICAgICAgICAgICBnbG93VGhyZXNob2xkOiByZWFsR2xvd1RocmVzaG9sZFByb2dyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHBhcmFtOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj5HlhYnlrr3luqYgWzAuMCwgMS4wXVxuICAgICAgICAgKi9cbiAgICAgICAgZ2xvd0NvbG9yU2l6ZTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj5HlhYnpopzoibIgWzAuMCwgMS4wXVxuICAgICAgICAgKi9cbiAgICAgICAgZ2xvd0NvbG9yOiBjYy5WZWM0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj5HlhYnpmIjlgLwgWzAuMCwgMS4wXVxuICAgICAgICAgKi9cbiAgICAgICAgZ2xvd1RocmVzaG9sZDogbnVtYmVyO1xuICAgIH0pIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSByZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJnbG93Q29sb3JTaXplXCIsIHBhcmFtLmdsb3dDb2xvclNpemUpO1xuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd0NvbG9yXCIsIHBhcmFtLmdsb3dDb2xvcik7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJnbG93VGhyZXNob2xkXCIsIHBhcmFtLmdsb3dUaHJlc2hvbGQpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PointLightEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvaW50TGlnaHRFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBbUY7QUFFN0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUF3RkM7UUF2RlcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBQ25DLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFDbkMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRW5DLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUNuQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQXlFaEQsQ0FBQztJQXZFRyxzQ0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxZQUFZLEdBQUcs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LEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDL0M7Z0JBQ0QsTUFBTSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtnQkFDbEMsU0FBUyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2dCQUMxQyxTQUFTLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7YUFDN0MsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkZnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXdGekM7SUFBRCw0QkFBQztDQXhGRCxBQXdGQyxDQXhGa0QsRUFBRSxDQUFDLFNBQVMsR0F3RjlEO2tCQXhGb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvaW50TGlnaHRDdHJsQ29tcG9uZW50LCB7IFBvaW50TGlnaHRVQk8gfSBmcm9tIFwiLi9Qb2ludExpZ2h0Q3RybENvbXBvbmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRMaWdodEVmZmVjdFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9yZWRTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcmVkU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIF9ncmVlblNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ncmVlblNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYmx1ZVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ibHVlU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcml2YXRlIF9hbHBoYVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9hbHBoYVNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcmFkaXVTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcmFkaXVTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfY3JvcEFscGhhVG9nZ2xlOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2VuYWJsZUZvZ1RvZ2dsZTogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2V4YW1wbGVzUGFyZW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3JlZFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0NvbG9yUmVkU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9Db2xvclJlZFNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuX2dyZWVuU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQ29sb3JHcmVlblNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dyZWVuU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9Db2xvckdyZWVuU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0NvbG9yQmx1ZVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0NvbG9yQmx1ZVNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQ29sb3JBbHBoYVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9Db2xvckFscGhhU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fcmFkaXVTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9SYWRpdVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX3JhZGl1U2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9SYWRpdVNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fY3JvcEFscGhhVG9nZ2xlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQ3JvcEFscGhhVG9nZ2xlL1RvZ2dsZVwiKS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlRm9nVG9nZ2xlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvRW5hYmxlRm9nVG9nZ2xlL1RvZ2dsZVwiKS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcblxuICAgICAgICAvLyDku6PnoIHmt7vliqDmjqfliLbohJrmnKxcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0V4YW1wbGVzXCIpO1xuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2RlLmFkZENvbXBvbmVudChQb2ludExpZ2h0Q3RybENvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9yYWRpdVNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9jcm9wQWxwaGFUb2dnbGUubm9kZS5vbihcInRvZ2dsZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2VuYWJsZUZvZ1RvZ2dsZS5ub2RlLm9uKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9yYWRpdVNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fY3JvcEFscGhhVG9nZ2xlLm5vZGUub2ZmKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlRm9nVG9nZ2xlLm5vZGUub2ZmKFwidG9nZ2xlXCIsIHRoaXMuX29uUHJvcGVydHlDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblByb3BlcnR5Q2hhbmdlZCgpIHtcbiAgICAgICAgLy8g5pu05paw6L+b5bqm5p2h5YC8IExhYmVsIOaWh+acrFxuICAgICAgICB0aGlzLl9yZWRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9yZWRTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke01hdGgucm91bmQoMjU1ICogdGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9ibHVlU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ibHVlU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2FscGhhU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX2FscGhhU2xpZGVyLnByb2dyZXNzKX1gO1xuICAgICAgICB0aGlzLl9yYWRpdVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX3JhZGl1U2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDpgJrnn6XlrZDoioLngrnmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5lbWl0KFwib25fcHJvcGVydHlfY2hhbmdlXCIsIDxQb2ludExpZ2h0VUJPPntcbiAgICAgICAgICAgICAgICBjZW50ZXJDb2xvcjogY2MuY29sb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoMjU1ICogdGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcyksXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoMjU1ICogdGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcyksXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoMjU1ICogdGhpcy5fYWxwaGFTbGlkZXIucHJvZ3Jlc3MpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IHRoaXMuX3JhZGl1U2xpZGVyLnByb2dyZXNzLFxuICAgICAgICAgICAgICAgIGNyb3BBbHBoYTogdGhpcy5fY3JvcEFscGhhVG9nZ2xlLmlzQ2hlY2tlZCxcbiAgICAgICAgICAgICAgICBlbmFibGVGb2c6IHRoaXMuX2VuYWJsZUZvZ1RvZ2dsZS5pc0NoZWNrZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PreviewEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d1a1PdC6BIEraFMdWacOzv', 'PreviewEffectScene');
// scripts/PreviewEffectScene.ts

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
var PreviewEffectScene = /** @class */ (function (_super) {
    __extends(PreviewEffectScene, _super);
    function PreviewEffectScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewEffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
    };
    PreviewEffectScene = __decorate([
        ccclass
    ], PreviewEffectScene);
    return PreviewEffectScene;
}(cc.Component));
exports.default = PreviewEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ByZXZpZXdFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDs7SUFLQSxDQUFDO0lBSkcsbUNBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBSmdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBS3RDO0lBQUQseUJBQUM7Q0FMRCxBQUtDLENBTCtDLEVBQUUsQ0FBQyxTQUFTLEdBSzNEO2tCQUxvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJldmlld0VmZmVjdFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOWFs+mXreWKqOaAgeWQiOWbvlxuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PointLightCtrlComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvaW50TGlnaHRDdHJsQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQW9EQztRQW5EVyxvQkFBYyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDOztJQW1EaEUsQ0FBQztJQWpERywwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVB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LElBQUksQ0FBQztRQUUxQjs7V0FFRztRQUNILGNBQVMsR0FBWSxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludExpZ2h0Q3RybENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcG9pbnRMaWdodFVCTzogUG9pbnRMaWdodFVCTyA9IG5ldyBQb2ludExpZ2h0VUJPKCk7XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJvbl9wcm9wZXJ0eV9jaGFuZ2VcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcIm9uX3Byb3BlcnR5X2NoYW5nZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaE1vdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCB0b3VjaFBvaW50SW5Xb3JsZFNwYWNlID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHRvdWNoUG9pbnRJbk5vZGVTcGFjZSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvaW50SW5Xb3JsZFNwYWNlKTtcblxuICAgICAgICAvLyDlsIbop6bmkbjngrnovazmjaLkuLpPUEVOR0zlnZDmoIfns7vlubblvZLkuIDljJZcbiAgICAgICAgLy8gT3BlbkdsIOWdkOagh+ezu+WOn+eCueWcqOW3puS4iuinklxuICAgICAgICB0aGlzLl9wb2ludExpZ2h0VUJPLmNlbnRlclBvaW50ID0gY2MudjIoXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCArIHRvdWNoUG9pbnRJbk5vZGVTcGFjZS54IC8gdGhpcy5ub2RlLndpZHRoLFxuICAgICAgICAgICAgMSAtICh0aGlzLm5vZGUuYW5jaG9yWSArIHRvdWNoUG9pbnRJbk5vZGVTcGFjZS55IC8gdGhpcy5ub2RlLmhlaWdodClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl91cGRhdGVNYXRlcmlhbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uUHJvcGVydHlDaGFuZ2UocG9pbnRMaWdodFVCTzogUG9pbnRMaWdodFVCTykge1xuICAgICAgICB0aGlzLl9wb2ludExpZ2h0VUJPLmNlbnRlckNvbG9yID0gcG9pbnRMaWdodFVCTy5jZW50ZXJDb2xvcjtcbiAgICAgICAgdGhpcy5fcG9pbnRMaWdodFVCTy5yYWRpdXMgPSBwb2ludExpZ2h0VUJPLnJhZGl1cztcbiAgICAgICAgdGhpcy5fcG9pbnRMaWdodFVCTy5jcm9wQWxwaGEgPSBwb2ludExpZ2h0VUJPLmNyb3BBbHBoYTtcbiAgICAgICAgdGhpcy5fcG9pbnRMaWdodFVCTy5lbmFibGVGb2cgPSBwb2ludExpZ2h0VUJPLmVuYWJsZUZvZztcbiAgICAgICAgdGhpcy5fdXBkYXRlTWF0ZXJpYWwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVNYXRlcmlhbCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiY2VudGVyQ29sb3JcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5jZW50ZXJDb2xvcik7XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImNlbnRlclBvaW50XCIsIHRoaXMuX3BvaW50TGlnaHRVQk8uY2VudGVyUG9pbnQpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJyYWRpdXNcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5yYWRpdXMpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJjcm9wQWxwaGFcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5jcm9wQWxwaGEpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJlbmFibGVGb2dcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5lbmFibGVGb2cpO1xuICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9pbnRMaWdodFVCTyB7XG4gICAgLyoqXG4gICAgICog5Lit5b+D54K56aKc6ImyXG4gICAgICovXG4gICAgY2VudGVyQ29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuXG4gICAgLyoqXG4gICAgICog5Lit5b+D54K55Z2Q5qCHIChbMC4wLCAxLjBdLCBbMC4wLCAxLjBdKVxuICAgICAqL1xuICAgIGNlbnRlclBvaW50OiBjYy5WZWMyID0gY2MudjIoMC41LCAwLjUpO1xuXG4gICAgLyoqXG4gICAgICog5omp5pWj5Y2K5b6EIFswLjAsIDEuMF1cbiAgICAgKi9cbiAgICByYWRpdXM6IG51bWJlciA9IDAuNTtcblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuijgeWJquaOiemAj+aYjuWMuuWfn+S4iueahOeCueWFiVxuICAgICAqL1xuICAgIGNyb3BBbHBoYTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/miJjkuonov7fpm77mlYjmnpxcbiAgICAgKi9cbiAgICBlbmFibGVGb2c6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RoundCornerCropV2EffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JvdW5kQ29ybmVyQ3JvcFYyRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEQsZ0RBQVk7SUFBdEU7UUFBQSxxRUE0RUM7UUEzRVcsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQXdFaEQsQ0FBQztJQXRFRyw2Q0FBTSxHQUFOO1FBQ0ksU0FBUztRQUNULEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELGdEQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsNENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyx1REFBZ0IsR0FBeEI7UUFDSSxTQUFTO1FBQ1QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRTFDLE9BQU87UUFDUCxJQUFJLENBQUMsOEJBQThCLENBQUM7WUFDaEMsVUFBVSxFQUFFLFVBQVU7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLHFFQUE4QixHQUF0QyxVQUF1QyxLQUt0QztRQUNHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztZQUMvQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxlQUFlO2dCQUMvRCw0QkFBNEI7Z0JBQzVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDakQscUJBQXFCO2dCQUNyQixPQUFPLEdBQUcsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBRXpDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDbEQsT0FBTyxHQUFHLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUV6QyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssWUFBWTtvQkFBRSxFQUFFLENBQUMsR0FBRyxDQUFJLFNBQVMsQ0FBQyxJQUFJLFlBQU8sT0FBTyxVQUFLLE9BQU8sTUFBRyxDQUFDLENBQUM7Z0JBRTVGLE9BQU87Z0JBQ1AsSUFBSSxRQUFRLEdBQWdCLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTNELDhCQUE4QjtnQkFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXpDLDhCQUE4QjtnQkFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0VnQiw0QkFBNEI7UUFEaEQsT0FBTztPQUNhLDRCQUE0QixDQTRFaEQ7SUFBRCxtQ0FBQztDQTVFRCxBQTRFQyxDQTVFeUQsRUFBRSxDQUFDLFNBQVMsR0E0RXJFO2tCQTVFb0IsNEJBQTRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdW5kQ29ybmVyQ3JvcFYyRWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX3JhZGl1U2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX3JhZGl1TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2V4YW1wbGVzUGFyZW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOWFs+mXreWKqOaAgeWQiOWbvlxuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9yYWRpdVNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL1JhZGl1c1NsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX3JhZGl1TGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9SYWRpdXNTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9FeGFtcGxlc1wiKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9yYWRpdVNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uU2xpZGVyQ2hhbmdlZCgpIHtcbiAgICAgICAgLy8g6K6h566X5Y2K5b6EcHhcbiAgICAgICAgbGV0IHJhZGl1c0luUHggPSBNYXRoLmZsb29yKDEwMCAqIHRoaXMuX3JhZGl1U2xpZGVyLnByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5fcmFkaXVMYWJlbC5zdHJpbmcgPSByYWRpdXNJblB4ICsgXCJcIjtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgcmFkaXVzSW5QeDogcmFkaXVzSW5QeFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmuLLmn5Pnu4Tku7bnmoTmnZDotKhcbiAgICAgKlxuICAgICAqIDEuIOiOt+WPluadkOi0qFxuICAgICAqIDIuIOe7meadkOi0qOeahCB1bml0Zm9ybSDlj5jph4/otYvlgLxcbiAgICAgKiAzLiDph43mlrDlsIbmnZDotKjotYvlgLzlm57ljrtcbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbChwYXJhbToge1xuICAgICAgICAvKipcbiAgICAgICAgICog5ZyG6KeS5Y2K5b6EcHhcbiAgICAgICAgICovXG4gICAgICAgIHJhZGl1c0luUHg6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5SZW5kZXJDb21wb25lbnQpLmZvckVhY2gocmVuZGVyQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICAvLyDorqHnrpfljYrlvoRweOWIhuWIq+ebuOWvueS6jue6ueeQhuWuvemrmOeahOavlOS+i++8iOS5n+WPq+W9kuS4gOWMlu+8iVxuICAgICAgICAgICAgICAgIGxldCB4UmFkaXV4ID0gcGFyYW0ucmFkaXVzSW5QeCAvIGNoaWxkTm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICAvLyDnuqbmnZ/ojIPlm7TlnKjljLrpl7QgWzAuMCwgMC41XVxuICAgICAgICAgICAgICAgIHhSYWRpdXggPSB4UmFkaXV4ID49IDAuNSA/IDAuNSA6IHhSYWRpdXg7XG5cbiAgICAgICAgICAgICAgICBsZXQgeVJhZGl1cyA9IHBhcmFtLnJhZGl1c0luUHggLyBjaGlsZE5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHlSYWRpdXMgPSB5UmFkaXVzID49IDAuNSA/IDAuNSA6IHlSYWRpdXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLm5hbWUgPT09IFwiUmVjdGFuZ2xlMVwiKSBjYy5sb2coYCR7Y2hpbGROb2RlLm5hbWV9IDogKCR7eFJhZGl1eH0sICR7eVJhZGl1c30pYCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuXG4gICAgICAgICAgICAgICAgLy8g5ZyG6KeSeOi9tOWNiuW+hOmVv+W6pu+8iOebuOWvueS6jue6ueeQhuWuveW6pu+8iVswLjAsIDAuNV1cbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInhSYWRpdXNcIiwgeFJhZGl1eCk7XG5cbiAgICAgICAgICAgICAgICAvLyDlnIbop5J56L205Y2K5b6E6ZW/5bqm77yI55u45a+55LqO57q555CG6auY5bqm77yJWzAuMCwgMC41XVxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwieVJhZGl1c1wiLCB5UmFkaXVzKTtcbiAgICAgICAgICAgICAgICByZW5kZXJDb21wb25lbnQuc2V0TWF0ZXJpYWwoMCwgbWF0ZXJpYWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GrayEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b2eeYO0iZEr7/PlbdSZuUf', 'GrayEffectScene');
// scripts/GrayEffectScene.ts

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
var GrayEffectScene = /** @class */ (function (_super) {
    __extends(GrayEffectScene, _super);
    function GrayEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grayLevelSlider = null;
        _this._grayLevelSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    GrayEffectScene.prototype.onLoad = function () {
        this._grayLevelSlider = cc.find("Canvas/Content/Sliders/GrayLevelSlider/Slider").getComponent(cc.Slider);
        this._grayLevelSliderLabel = cc.find("Canvas/Content/Sliders/GrayLevelSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    GrayEffectScene.prototype.onEnable = function () {
        this._grayLevelSlider.node.on("slide", this._onSliderChanged, this);
    };
    GrayEffectScene.prototype.onDisable = function () {
        this._grayLevelSlider.node.off("slide", this._onSliderChanged, this);
    };
    GrayEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    GrayEffectScene.prototype._onSliderChanged = function () {
        this._grayLevelSliderLabel.string = "" + this._grayLevelSlider.progress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            grayLevel: this._grayLevelSlider.progress
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    GrayEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("grayLevel", param.grayLevel);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    GrayEffectScene = __decorate([
        ccclass
    ], GrayEffectScene);
    return GrayEffectScene;
}(cc.Component));
exports.default = GrayEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dyYXlFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXVEQztRQXREVyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFDbkMsMkJBQXFCLEdBQWEsSUFBSSxDQUFDO1FBRXZDLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUFtRGhELENBQUM7SUFqREcsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDBDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQztRQUVuRixPQUFPO1FBQ1AsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtTQUM1QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssd0RBQThCLEdBQXRDLFVBQXVDLEtBS3RDO1FBQ0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQy9DLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGVBQWU7Z0JBQy9ELElBQUksUUFBUSxHQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdERnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBdURuQztJQUFELHNCQUFDO0NBdkRELEFBdURDLENBdkQ0QyxFQUFFLENBQUMsU0FBUyxHQXVEeEQ7a0JBdkRvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXlFZmZlY3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfZ3JheUxldmVsU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2dyYXlMZXZlbFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9leGFtcGxlc1BhcmVudE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9ncmF5TGV2ZWxTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9HcmF5TGV2ZWxTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9ncmF5TGV2ZWxTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dyYXlMZXZlbFNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0V4YW1wbGVzXCIpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9ncmF5TGV2ZWxTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9ncmF5TGV2ZWxTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuX2dyYXlMZXZlbFNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2dyYXlMZXZlbFNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfWA7XG5cbiAgICAgICAgLy8g5pu05paw5p2Q6LSoXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGdyYXlMZXZlbDogdGhpcy5fZ3JheUxldmVsU2xpZGVyLnByb2dyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHBhcmFtOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDngbDljJbnqIvluqYgWzAuMCwgMS4wXSDvvIwxLjAg6KGo56S65a6M5YWo54Gw5YyWXG4gICAgICAgICAqL1xuICAgICAgICBncmF5TGV2ZWw6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5SZW5kZXJDb21wb25lbnQpLmZvckVhY2gocmVuZGVyQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ3JheUxldmVsXCIsIHBhcmFtLmdyYXlMZXZlbCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RoundCornerCropV1EffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JvdW5kQ29ybmVyQ3JvcFYxRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEQsZ0RBQVk7SUFBdEU7UUFBQSxxRUEwREM7UUF6RFcsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQXNEaEQsQ0FBQztJQXBERyw2Q0FBTSxHQUFOO1FBQ0ksU0FBUztRQUNULEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELGdEQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsNENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyx1REFBZ0IsR0FBeEI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQztRQUVyRSxPQUFPO1FBQ1AsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLHFFQUE4QixHQUF0QyxVQUF1QyxLQUt0QztRQUNHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztZQUMvQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxlQUFlO2dCQUMvRCxJQUFJLFFBQVEsR0FBZ0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpEZ0IsNEJBQTRCO1FBRGhELE9BQU87T0FDYSw0QkFBNEIsQ0EwRGhEO0lBQUQsbUNBQUM7Q0ExREQsQUEwREMsQ0ExRHlELEVBQUUsQ0FBQyxTQUFTLEdBMERyRTtrQkExRG9CLDRCQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3VuZENvcm5lckNyb3BWMUVmZmVjdFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9yYWRpdVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9yYWRpdUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9leGFtcGxlc1BhcmVudE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDlhbPpl63liqjmgIHlkIjlm75cbiAgICAgICAgY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcmFkaXVTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvQ29udHJvbGxlci9SYWRpdXNTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9yYWRpdUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvUmFkaXVzU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvRXhhbXBsZXNcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1U2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1TGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fcmFkaXVTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX1gO1xuXG4gICAgICAgIC8vIOabtOaWsOadkOi0qFxuICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbCh7XG4gICAgICAgICAgICByYWRpdXM6IHRoaXMuX3JhZGl1U2xpZGVyLnByb2dyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHBhcmFtOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlnIbop5LljYrlvoQgWzAuMCwgMC41XSDvvIwwLjUg6KGo56S65ZyG5b2i6KOB5YmqXG4gICAgICAgICAqL1xuICAgICAgICByYWRpdXM6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5SZW5kZXJDb21wb25lbnQpLmZvckVhY2gocmVuZGVyQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwicmFkaXVzXCIsIHBhcmFtLnJhZGl1cyk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/OutlineEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL091dGxpbmVFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTJEQztRQTFEVyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQXVEaEQsQ0FBQztJQXJERyxtQ0FBTSxHQUFOO1FBQ0ksU0FBUztRQUNULEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDZDQUFnQixHQUF4QjtRQUNJLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsS0FBRyxZQUFjLENBQUM7UUFFbEQsT0FBTztRQUNQLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztZQUNoQyxZQUFZLEVBQUUsWUFBWTtTQUM3QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssMkRBQThCLEdBQXRDLFVBQXVDLEtBS3RDO1FBQ0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQy9DLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGVBQWU7Z0JBQy9ELElBQUksUUFBUSxHQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3pELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMURnQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTJEdEM7SUFBRCx5QkFBQztDQTNERCxBQTJEQyxDQTNEK0MsRUFBRSxDQUFDLFNBQVMsR0EyRDNEO2tCQTNEb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dGxpbmVFZmZlY3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfd2lkdGhTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfd2lkdGhTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5YWz6Zet5Yqo5oCB5ZCI5Zu+XG4gICAgICAgIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3dpZHRoU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvV2lkdGhTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl93aWR0aFNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvV2lkdGhTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9FeGFtcGxlc1wiKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fd2lkdGhTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl93aWR0aFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uU2xpZGVyQ2hhbmdlZCgpIHtcbiAgICAgICAgbGV0IG91dGxpbmVXaWR0aCA9IHBhcnNlRmxvYXQoKHRoaXMuX3dpZHRoU2xpZGVyLnByb2dyZXNzIC8gMTAwKS50b0ZpeGVkKDQpKTtcbiAgICAgICAgdGhpcy5fd2lkdGhTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHtvdXRsaW5lV2lkdGh9YDtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgb3V0bGluZVdpZHRoOiBvdXRsaW5lV2lkdGhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5riy5p+T57uE5Lu255qE5p2Q6LSoXG4gICAgICpcbiAgICAgKiAxLiDojrflj5bmnZDotKhcbiAgICAgKiAyLiDnu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICogMy4g6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaPj+i+ueWuveW6piBbMC4wLCAxLjBd77yM5q+U5aaC77yaMC4177yM6YKj5LmI5bCx5piv5a69KjAuNSDpq5gqMC41XG4gICAgICAgICAqL1xuICAgICAgICBvdXRsaW5lV2lkdGg6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5SZW5kZXJDb21wb25lbnQpLmZvckVhY2gocmVuZGVyQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwib3V0bGluZVdpZHRoXCIsIHBhcmFtLm91dGxpbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GaussianBlurV1EffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f460djPUfdEdrpZFw3saPVi', 'GaussianBlurV1EffectScene');
// scripts/GaussianBlurV1EffectScene.ts

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
var GaussianBlurV1EffectScene = /** @class */ (function (_super) {
    __extends(GaussianBlurV1EffectScene, _super);
    function GaussianBlurV1EffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._blurSlider = null;
        _this._blurSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    GaussianBlurV1EffectScene.prototype.onLoad = function () {
        cc.dynamicAtlasManager.enabled = false;
        this._blurSlider = cc.find("Canvas/Content/Controller/BlurSlider/Slider").getComponent(cc.Slider);
        this._blurSliderLabel = cc.find("Canvas/Content/Controller/BlurSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    GaussianBlurV1EffectScene.prototype.onEnable = function () {
        this._blurSlider.node.on("slide", this._onSliderChanged, this);
    };
    GaussianBlurV1EffectScene.prototype.onDisable = function () {
        this._blurSlider.node.off("slide", this._onSliderChanged, this);
    };
    GaussianBlurV1EffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    GaussianBlurV1EffectScene.prototype._onSliderChanged = function () {
        this._blurSliderLabel.string = "" + this._blurSlider.progress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({});
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    GaussianBlurV1EffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("textureSize", cc.v2(childNode.width, childNode.height));
                renderComponent.setMaterial(0, material);
            });
        });
    };
    GaussianBlurV1EffectScene = __decorate([
        ccclass
    ], GaussianBlurV1EffectScene);
    return GaussianBlurV1EffectScene;
}(cc.Component));
exports.default = GaussianBlurV1EffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhdXNzaWFuQmx1clYxRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUQsNkNBQVk7SUFBbkU7UUFBQSxxRUFrREM7UUFqRFcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDOUIsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUE4Q2hELENBQUM7SUE1Q0csMENBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsNkNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCx5Q0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLG9EQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUM7UUFFekUsT0FBTztRQUNQLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssa0VBQThCLEdBQXRDLFVBQXVDLEtBQVM7UUFDNUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQy9DLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGVBQWU7Z0JBQy9ELElBQUksUUFBUSxHQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRnQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQWtEN0M7SUFBRCxnQ0FBQztDQWxERCxBQWtEQyxDQWxEc0QsRUFBRSxDQUFDLFNBQVMsR0FrRGxFO2tCQWxEb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhdXNzaWFuQmx1clYxRWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX2JsdXJTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYmx1clNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9leGFtcGxlc1BhcmVudE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9ibHVyU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0NvbnRyb2xsZXIvQmx1clNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2JsdXJTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9Db250cm9sbGVyL0JsdXJTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9FeGFtcGxlc1wiKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYmx1clNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2JsdXJTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuX2JsdXJTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ibHVyU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHBhcmFtOiB7fSkge1xuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2RlLmdldENvbXBvbmVudHMoY2MuUmVuZGVyQ29tcG9uZW50KS5mb3JFYWNoKHJlbmRlckNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInRleHR1cmVTaXplXCIsIGNjLnYyKGNoaWxkTm9kZS53aWR0aCwgY2hpbGROb2RlLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GlowInnerV1EffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eebe5Fr5bhMO7IsowoLW/Yp', 'GlowInnerV1EffectScene');
// scripts/GlowInnerV1EffectScene.ts

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
var GlowInnerEffectScene = /** @class */ (function (_super) {
    __extends(GlowInnerEffectScene, _super);
    function GlowInnerEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redSlider = null;
        _this._redSliderLabel = null;
        _this._greenSlider = null;
        _this._greenSliderLabel = null;
        _this._blueSlider = null;
        _this._blueSliderLabel = null;
        _this._alphaSlider = null;
        _this._alphaSliderLabel = null;
        _this._glowWidthSlider = null;
        _this._glowWidthSliderLabel = null;
        _this._glowThresholdSlider = null;
        _this._glowThresholdSliderLabel = null;
        _this._scrollView = null;
        return _this;
    }
    GlowInnerEffectScene.prototype.onLoad = function () {
        cc.dynamicAtlasManager.enabled = false;
        this._redSlider = cc.find("Canvas/Content/Sliders/ColorRedSlider/Slider").getComponent(cc.Slider);
        this._redSliderLabel = cc.find("Canvas/Content/Sliders/ColorRedSlider/ValueLabel").getComponent(cc.Label);
        this._greenSlider = cc.find("Canvas/Content/Sliders/ColorGreenSlider/Slider").getComponent(cc.Slider);
        this._greenSliderLabel = cc.find("Canvas/Content/Sliders/ColorGreenSlider/ValueLabel").getComponent(cc.Label);
        this._blueSlider = cc.find("Canvas/Content/Sliders/ColorBlueSlider/Slider").getComponent(cc.Slider);
        this._blueSliderLabel = cc.find("Canvas/Content/Sliders/ColorBlueSlider/ValueLabel").getComponent(cc.Label);
        this._alphaSlider = cc.find("Canvas/Content/Sliders/ColorAlphaSlider/Slider").getComponent(cc.Slider);
        this._alphaSliderLabel = cc.find("Canvas/Content/Sliders/ColorAlphaSlider/ValueLabel").getComponent(cc.Label);
        this._glowWidthSlider = cc.find("Canvas/Content/Sliders/GlowWidthSlider/Slider").getComponent(cc.Slider);
        this._glowWidthSliderLabel = cc.find("Canvas/Content/Sliders/GlowWidthSlider/ValueLabel").getComponent(cc.Label);
        this._glowThresholdSlider = cc.find("Canvas/Content/Sliders/GlowThresholdSlider/Slider").getComponent(cc.Slider);
        this._glowThresholdSliderLabel = cc.find("Canvas/Content/Sliders/GlowThresholdSlider/ValueLabel").getComponent(cc.Label);
        this._scrollView = cc.find("Canvas/Content/ScrollView").getComponent(cc.ScrollView);
    };
    GlowInnerEffectScene.prototype.onEnable = function () {
        this._redSlider.node.on("slide", this._onSliderChanged, this);
        this._greenSlider.node.on("slide", this._onSliderChanged, this);
        this._blueSlider.node.on("slide", this._onSliderChanged, this);
        this._alphaSlider.node.on("slide", this._onSliderChanged, this);
        this._glowWidthSlider.node.on("slide", this._onSliderChanged, this);
        this._glowThresholdSlider.node.on("slide", this._onSliderChanged, this);
    };
    GlowInnerEffectScene.prototype.onDisable = function () {
        this._redSlider.node.off("slide", this._onSliderChanged, this);
        this._greenSlider.node.off("slide", this._onSliderChanged, this);
        this._blueSlider.node.off("slide", this._onSliderChanged, this);
        this._alphaSlider.node.off("slide", this._onSliderChanged, this);
        this._glowWidthSlider.node.off("slide", this._onSliderChanged, this);
        this._glowThresholdSlider.node.off("slide", this._onSliderChanged, this);
    };
    GlowInnerEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    GlowInnerEffectScene.prototype._onSliderChanged = function () {
        // 更新进度条值 Label 文本
        this._redSliderLabel.string = this._redSlider.progress.toFixed(2) + " | " + Math.round(255 * this._redSlider.progress);
        this._greenSliderLabel.string = this._greenSlider.progress.toFixed(2) + " | " + Math.round(255 * this._greenSlider.progress);
        this._blueSliderLabel.string = this._blueSlider.progress.toFixed(2) + " | " + Math.round(255 * this._blueSlider.progress);
        this._alphaSliderLabel.string = this._alphaSlider.progress.toFixed(2) + " | " + Math.round(255 * this._alphaSlider.progress);
        // 这里为约束一下值发光宽度值在 [0.0, 0.1] 因为 0.1+ 之后的效果可能不明显，也可以自己尝试修改
        var realGlowWidthProgress = this._glowWidthSlider.progress * 0.2;
        this._glowWidthSliderLabel.string = "" + realGlowWidthProgress.toFixed(2);
        // 这里为约束一下值发光阈值值在 [0.0, 0.5] 因为 0.5+ 之后的效果可能就是其他效果，也可以自己修改这里
        // let realGlowThresholdProgress = this._glowThresholdSlider.progress * 0.5;
        var realGlowThresholdProgress = this._glowThresholdSlider.progress;
        this._glowThresholdSliderLabel.string = "" + realGlowThresholdProgress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            glowColor: cc.v4(this._redSlider.progress, this._greenSlider.progress, this._blueSlider.progress, this._alphaSlider.progress),
            glowColorSize: realGlowWidthProgress,
            glowThreshold: realGlowThresholdProgress,
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    GlowInnerEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._scrollView.content.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("glowColorSize", param.glowColorSize);
                material.setProperty("glowColor", param.glowColor);
                material.setProperty("glowThreshold", param.glowThreshold);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    GlowInnerEffectScene = __decorate([
        ccclass
    ], GlowInnerEffectScene);
    return GlowInnerEffectScene;
}(cc.Component));
exports.default = GlowInnerEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb3dJbm5lclYxRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUEySEM7UUExSFcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRW5DLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUVsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBQ25DLDJCQUFxQixHQUFhLElBQUksQ0FBQztRQUV2QywwQkFBb0IsR0FBYyxJQUFJLENBQUM7UUFDdkMsK0JBQXlCLEdBQWEsSUFBSSxDQUFDO1FBRTNDLGlCQUFXLEdBQWtCLElBQUksQ0FBQzs7SUF3RzlDLENBQUM7SUF0R0cscUNBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJ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LENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNoRCxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxlQUFlO2dCQUNoRSxJQUFJLFFBQVEsR0FBZ0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0QsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExSGdCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBMkh4QztJQUFELDJCQUFDO0NBM0hELEFBMkhDLENBM0hpRCxFQUFFLENBQUMsU0FBUyxHQTJIN0Q7a0JBM0hvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvd0lubmVyRWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX3JlZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9yZWRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ3JlZW5TbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ3JlZW5TbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYmx1ZVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ibHVlU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2dsb3dXaWR0aFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9nbG93V2lkdGhTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ2xvd1RocmVzaG9sZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9nbG93VGhyZXNob2xkU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JSZWRTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yUmVkU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9ncmVlblNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yR3JlZW5TbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JHcmVlblNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQmx1ZVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQmx1ZVNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckFscGhhU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQWxwaGFTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dXaWR0aFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR2xvd1dpZHRoU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9nbG93VGhyZXNob2xkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR2xvd1RocmVzaG9sZFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dUaHJlc2hvbGRTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIC8vIOabtOaWsOi/m+W6puadoeWAvCBMYWJlbCDmlofmnKxcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX3JlZFNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2JsdWVTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke01hdGgucm91bmQoMjU1ICogdGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcyl9YDtcblxuICAgICAgICAvLyDov5nph4zkuLrnuqbmnZ/kuIDkuIvlgLzlj5HlhYnlrr3luqblgLzlnKggWzAuMCwgMC4xXSDlm6DkuLogMC4xKyDkuYvlkI7nmoTmlYjmnpzlj6/og73kuI3mmI7mmL7vvIzkuZ/lj6/ku6Xoh6rlt7HlsJ3or5Xkv67mlLlcbiAgICAgICAgbGV0IHJlYWxHbG93V2lkdGhQcm9ncmVzcyA9IHRoaXMuX2dsb3dXaWR0aFNsaWRlci5wcm9ncmVzcyAqIDAuMjtcbiAgICAgICAgdGhpcy5fZ2xvd1dpZHRoU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7cmVhbEdsb3dXaWR0aFByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDov5nph4zkuLrnuqbmnZ/kuIDkuIvlgLzlj5HlhYnpmIjlgLzlgLzlnKggWzAuMCwgMC41XSDlm6DkuLogMC41KyDkuYvlkI7nmoTmlYjmnpzlj6/og73lsLHmmK/lhbbku5bmlYjmnpzvvIzkuZ/lj6/ku6Xoh6rlt7Hkv67mlLnov5nph4xcbiAgICAgICAgLy8gbGV0IHJlYWxHbG93VGhyZXNob2xkUHJvZ3Jlc3MgPSB0aGlzLl9nbG93VGhyZXNob2xkU2xpZGVyLnByb2dyZXNzICogMC41O1xuICAgICAgICBsZXQgcmVhbEdsb3dUaHJlc2hvbGRQcm9ncmVzcyA9IHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHtyZWFsR2xvd1RocmVzaG9sZFByb2dyZXNzLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgZ2xvd0NvbG9yOiBjYy52NCh0aGlzLl9yZWRTbGlkZXIucHJvZ3Jlc3MsIHRoaXMuX2dyZWVuU2xpZGVyLnByb2dyZXNzLCB0aGlzLl9ibHVlU2xpZGVyLnByb2dyZXNzLCB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcyksXG4gICAgICAgICAgICBnbG93Q29sb3JTaXplOiByZWFsR2xvd1dpZHRoUHJvZ3Jlc3MsXG4gICAgICAgICAgICBnbG93VGhyZXNob2xkOiByZWFsR2xvd1RocmVzaG9sZFByb2dyZXNzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmuLLmn5Pnu4Tku7bnmoTmnZDotKhcbiAgICAgKlxuICAgICAqIDEuIOiOt+WPluadkOi0qFxuICAgICAqIDIuIOe7meadkOi0qOeahCB1bml0Zm9ybSDlj5jph4/otYvlgLxcbiAgICAgKiAzLiDph43mlrDlsIbmnZDotKjotYvlgLzlm57ljrtcbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbChwYXJhbToge1xuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ5a695bqmIFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dDb2xvclNpemU6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ6aKc6ImyIFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dDb2xvcjogY2MuVmVjNDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ6ZiI5YC8IFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaCgocmVuZGVyQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dDb2xvclNpemVcIiwgcGFyYW0uZ2xvd0NvbG9yU2l6ZSk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJnbG93Q29sb3JcIiwgcGFyYW0uZ2xvd0NvbG9yKTtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dUaHJlc2hvbGRcIiwgcGFyYW0uZ2xvd1RocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ccutils/multiresolution/ContentAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68622NlRNJFN4QrXlFCQMe/', 'ContentAdapter');
// scripts/ccutils/multiresolution/ContentAdapter.ts

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
/**
 * @classdesc  游戏主内容节点自适应所有分辨率的脚本
 * @author caizhitao
 * @version 0.1.0
 * @since 2018-11-30
 * @description
 *
 * 用法：
 *      1. 将本组件挂载在节点上即可
 *
 * 适配原理：
 *      1. 将游戏主内容节点的宽高调整为画布的大小，以进行Size适配
 *
 * 注意：
 *      1. 挂载这个脚本的节点不能加入Widget组件，不然这个适配是没有效果的
 *      2. 目前只支持 SHOW_ALL 模式下的背景缩放适配，不支持其他模式的背景缩放
 *
 *  @example
    ```
    // e.g.
    // 代码中设置 SHOW_ALL 模式的参考代码
    cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);

    // 或者 Canvas 组件中，同时勾选 Fit Width 和 Fit Height
    ```
 */
var ContentAdapter = /** @class */ (function (_super) {
    __extends(ContentAdapter, _super);
    function ContentAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentAdapter.prototype.onLoad = function () {
        // if (CC_DEBUG) {
        //     cc.log("调整前");
        //     cc.log(`屏幕分辨率: ${cc.view.getCanvasSize().width} x ${cc.view.getCanvasSize().height}`);
        //     cc.log(`视图窗口可见区域分辨率: ${cc.view.getVisibleSize().width} x ${cc.view.getVisibleSize().height}`);
        //     cc.log(`视图中边框尺寸: ${cc.view.getFrameSize().width} x ${cc.view.getFrameSize().height}`);
        //     cc.log(`设备或浏览器像素比例: ${cc.view.getDevicePixelRatio()}`);
        //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
        // }
        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * srcScaleForShowAll;
        var realHeight = this.node.height * srcScaleForShowAll;
        // 2. 基于第一步的数据，再做节点宽高适配
        this.node.width = this.node.width * (cc.view.getCanvasSize().width / realWidth);
        this.node.height = this.node.height * (cc.view.getCanvasSize().height / realHeight);
        // // 3. 因为本节点的宽高发生了改变，所以要手动更新剩下子节点的宽高
        // this._updateAllChildNodeWidget(this.node);
        // if (CC_DEBUG) {
        //     cc.log(`节点在SHOW_ALL模式下展示的宽高: ${realWidth} x ${realHeight}`);
        //     cc.log(`节点在SHOW_ALL模式下展示的缩放: ${srcScaleForShowAll}`);
        //     cc.log(
        //         `节点在SHOW_ALL模式下做全屏处理后的实际宽高（${cc.view.getCanvasSize().width}x${
        //             cc.view.getCanvasSize().height
        //         }）等价于于原节点的宽高(${this.node.width}x${this.node.height})`
        //     );
        // }
    };
    ContentAdapter = __decorate([
        ccclass
    ], ContentAdapter);
    return ContentAdapter;
}(cc.Component));
exports.default = ContentAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NjdXRpbHMvbXVsdGlyZXNvbHV0aW9uL0NvbnRlbnRBZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBRUg7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBaURBLENBQUM7SUFoREcsK0JBQU0sR0FBTjtRQUNJLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsNkZBQTZGO1FBQzdGLHFHQUFxRztRQUNyRyw2RkFBNkY7UUFDN0YsOERBQThEO1FBQzlELGdFQUFnRTtRQUNoRSxJQUFJO1FBRUoseUNBQXlDO1FBQ3pDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1FBQ3JELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDO1FBRXZELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFcEYsc0NBQXNDO1FBQ3RDLDZDQUE2QztRQUU3QyxrQkFBa0I7UUFDbEIsbUVBQW1FO1FBQ25FLDREQUE0RDtRQUM1RCxjQUFjO1FBQ2QseUVBQXlFO1FBQ3pFLDZDQUE2QztRQUM3QyxnRUFBZ0U7UUFDaEUsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBaENnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBaURsQztJQUFELHFCQUFDO0NBakRELEFBaURDLENBakQyQyxFQUFFLENBQUMsU0FBUyxHQWlEdkQ7a0JBakRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiBAY2xhc3NkZXNjICDmuLjmiI/kuLvlhoXlrrnoioLngrnoh6rpgILlupTmiYDmnInliIbovqjnjofnmoTohJrmnKxcbiAqIEBhdXRob3IgY2FpemhpdGFvXG4gKiBAdmVyc2lvbiAwLjEuMFxuICogQHNpbmNlIDIwMTgtMTEtMzBcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIOeUqOazle+8mlxuICogICAgICAxLiDlsIbmnKznu4Tku7bmjILovb3lnKjoioLngrnkuIrljbPlj69cbiAqXG4gKiDpgILphY3ljp/nkIbvvJpcbiAqICAgICAgMS4g5bCG5ri45oiP5Li75YaF5a656IqC54K555qE5a696auY6LCD5pW05Li655S75biD55qE5aSn5bCP77yM5Lul6L+b6KGMU2l6ZemAgumFjVxuICpcbiAqIOazqOaEj++8mlxuICogICAgICAxLiDmjILovb3ov5nkuKrohJrmnKznmoToioLngrnkuI3og73liqDlhaVXaWRnZXTnu4Tku7bvvIzkuI3nhLbov5nkuKrpgILphY3mmK/msqHmnInmlYjmnpznmoRcbiAqICAgICAgMi4g55uu5YmN5Y+q5pSv5oyBIFNIT1dfQUxMIOaooeW8j+S4i+eahOiDjOaZr+e8qeaUvumAgumFje+8jOS4jeaUr+aMgeWFtuS7luaooeW8j+eahOiDjOaZr+e8qeaUvlxuICpcbiAqICBAZXhhbXBsZVxuICAgIGBgYFxuICAgIC8vIGUuZy5cbiAgICAvLyDku6PnoIHkuK3orr7nva4gU0hPV19BTEwg5qih5byP55qE5Y+C6ICD5Luj56CBXG4gICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpO1xuXG4gICAgLy8g5oiW6ICFIENhbnZhcyDnu4Tku7bkuK3vvIzlkIzml7bli77pgIkgRml0IFdpZHRoIOWSjCBGaXQgSGVpZ2h0IFxuICAgIGBgYFxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEFkYXB0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gaWYgKENDX0RFQlVHKSB7XG4gICAgICAgIC8vICAgICBjYy5sb2coXCLosIPmlbTliY1cIik7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOWxj+W5leWIhui+qOeOhzogJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodH1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6KeG5Zu+56qX5Y+j5Y+v6KeB5Yy65Z+f5YiG6L6o546HOiAke2NjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOinhuWbvuS4rei+ueahhuWwuuWvuDogJHtjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiuvuWkh+aIlua1j+iniOWZqOWDj+e0oOavlOS+izogJHtjYy52aWV3LmdldERldmljZVBpeGVsUmF0aW8oKX1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K55a696auYOiAke3RoaXMubm9kZS53aWR0aH0geCAke3RoaXMubm9kZS5oZWlnaHR9YCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAxLiDlhYjmib7liLAgU0hPV19BTEwg5qih5byP6YCC6YWN5LmL5ZCO77yM5pys6IqC54K555qE5a6e6ZmF5a696auY5Lul5Y+K5Yid5aeL57yp5pS+5YC8XG4gICAgICAgIGxldCBzcmNTY2FsZUZvclNob3dBbGwgPSBNYXRoLm1pbihjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHRoaXMubm9kZS53aWR0aCwgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgICAgIGxldCByZWFsV2lkdGggPSB0aGlzLm5vZGUud2lkdGggKiBzcmNTY2FsZUZvclNob3dBbGw7XG4gICAgICAgIGxldCByZWFsSGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodCAqIHNyY1NjYWxlRm9yU2hvd0FsbDtcblxuICAgICAgICAvLyAyLiDln7rkuo7nrKzkuIDmraXnmoTmlbDmja7vvIzlho3lgZroioLngrnlrr3pq5jpgILphY1cbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5ub2RlLndpZHRoICogKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoIC8gcmVhbFdpZHRoKTtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgKiAoY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gcmVhbEhlaWdodCk7XG5cbiAgICAgICAgLy8gLy8gMy4g5Zug5Li65pys6IqC54K555qE5a696auY5Y+R55Sf5LqG5pS55Y+Y77yM5omA5Lul6KaB5omL5Yqo5pu05paw5Ymp5LiL5a2Q6IqC54K555qE5a696auYXG4gICAgICAgIC8vIHRoaXMuX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldCh0aGlzLm5vZGUpO1xuXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOWuvemrmDogJHtyZWFsV2lkdGh9IHggJHtyZWFsSGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOe8qeaUvjogJHtzcmNTY2FsZUZvclNob3dBbGx9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coXG4gICAgICAgIC8vICAgICAgICAgYOiKgueCueWcqFNIT1dfQUxM5qih5byP5LiL5YGa5YWo5bGP5aSE55CG5ZCO55qE5a6e6ZmF5a696auY77yIJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aH14JHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0XG4gICAgICAgIC8vICAgICAgICAgfe+8ieetieS7t+S6juS6juWOn+iKgueCueeahOWuvemrmCgke3RoaXMubm9kZS53aWR0aH14JHt0aGlzLm5vZGUuaGVpZ2h0fSlgXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBfdXBkYXRlQWxsQ2hpbGROb2RlV2lkZ2V0KHBhcmVudE5vZGU6IGNjLk5vZGUpIHtcbiAgICAvLyAgICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCB3aWRnZXQgPSBwYXJlbnROb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgIC8vICAgICBpZiAod2lkZ2V0ICE9IG51bGwpIHtcbiAgICAvLyAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbkNvdW50ID09IDApIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBwYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZTogY2MuTm9kZSkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5fdXBkYXRlQWxsQ2hpbGROb2RlV2lkZ2V0KGNoaWxkTm9kZSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------


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
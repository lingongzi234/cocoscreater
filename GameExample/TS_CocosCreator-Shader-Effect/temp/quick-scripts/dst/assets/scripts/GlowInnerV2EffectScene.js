
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb3dJbm5lclYyRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUF1SUM7UUF0SVcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRW5DLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUVsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBQ25DLDJCQUFxQixHQUFhLElBQUksQ0FBQztRQUV2QywwQkFBb0IsR0FBYyxJQUFJLENBQUM7UUFDdkMsK0JBQXlCLEdBQWEsSUFBSSxDQUFDO1FBRTNDLGlCQUFXLEdBQWtCLElBQUksQ0FBQzs7SUFvSDlDLENBQUM7SUFsSEcsdUNBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekgsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsc0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxpREFBZ0IsR0FBeEI7UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFHLENBQUM7UUFDdkgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUcsQ0FBQztRQUM3SCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBRyxDQUFDO1FBQzFILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFHLENBQUM7UUFFN0gsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLEtBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBRyxDQUFDO1FBRTFFLDREQUE0RDtRQUM1RCw0RUFBNEU7UUFDNUUsSUFBSSx5QkFBeUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDO1FBQ25FLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEdBQUcsS0FBRyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUM7UUFFbEYsT0FBTztRQUNQLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM3SCxTQUFTLEVBQUUscUJBQXFCO1lBQ2hDLGFBQWEsRUFBRSx5QkFBeUI7U0FDM0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLCtEQUE4QixHQUF0QyxVQUF1QyxLQWV0QztRQUNHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQ2hELFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLGVBQWU7Z0JBQ2hFLElBQUksZUFBZSxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RDLElBQUksZUFBZSxHQUFlLGVBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN6RSxJQUFJLFFBQVEsR0FBZ0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdELFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUM1QztxQkFBTTtvQkFDSCxJQUFJLFFBQVEsR0FBZ0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyRCxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZELFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUM1QztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdElnQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQXVJMUM7SUFBRCw2QkFBQztDQXZJRCxBQXVJQyxDQXZJbUQsRUFBRSxDQUFDLFNBQVMsR0F1SS9EO2tCQXZJb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb3dJbm5lclYyRWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX3JlZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9yZWRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ3JlZW5TbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ3JlZW5TbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYmx1ZVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ibHVlU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2FscGhhU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2dsb3dXaWR0aFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9nbG93V2lkdGhTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ2xvd1RocmVzaG9sZFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9nbG93VGhyZXNob2xkU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JSZWRTbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yUmVkU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9ncmVlblNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yR3JlZW5TbGlkZXIvU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvQ29sb3JHcmVlblNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQmx1ZVNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQmx1ZVNsaWRlci9WYWx1ZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9Db2xvckFscGhhU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0NvbG9yQWxwaGFTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dXaWR0aFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR2xvd1dpZHRoU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9nbG93VGhyZXNob2xkU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR2xvd1RocmVzaG9sZFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXJMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dsb3dUaHJlc2hvbGRTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3JlZFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FscGhhU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9yZWRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9ncmVlblNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2JsdWVTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9hbHBoYVNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dXaWR0aFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgICAgIC8vIOabtOaWsOi/m+W6puadoeWAvCBMYWJlbCDmlofmnKxcbiAgICAgICAgdGhpcy5fcmVkU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fcmVkU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9IHwgJHtNYXRoLnJvdW5kKDI1NSAqIHRoaXMuX3JlZFNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fZ3JlZW5TbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9ncmVlblNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYmx1ZVNsaWRlckxhYmVsLnN0cmluZyA9IGAke3RoaXMuX2JsdWVTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX0gfCAke01hdGgucm91bmQoMjU1ICogdGhpcy5fYmx1ZVNsaWRlci5wcm9ncmVzcyl9YDtcbiAgICAgICAgdGhpcy5fYWxwaGFTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcy50b0ZpeGVkKDIpfSB8ICR7TWF0aC5yb3VuZCgyNTUgKiB0aGlzLl9hbHBoYVNsaWRlci5wcm9ncmVzcyl9YDtcblxuICAgICAgICBsZXQgcmVhbEdsb3dXaWR0aFByb2dyZXNzID0gdGhpcy5fZ2xvd1dpZHRoU2xpZGVyLnByb2dyZXNzICogMjAwO1xuICAgICAgICB0aGlzLl9nbG93V2lkdGhTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHtyZWFsR2xvd1dpZHRoUHJvZ3Jlc3MudG9GaXhlZCgwKX1gO1xuXG4gICAgICAgIC8vIOi/memHjOS4uue6puadn+S4gOS4i+WAvOWPkeWFiemYiOWAvOWAvOWcqCBbMC4wLCAwLjVdIOWboOS4uiAwLjUrIOS5i+WQjueahOaViOaenOWPr+iDveWwseaYr+WFtuS7luaViOaenO+8jOS5n+WPr+S7peiHquW3seS/ruaUuei/memHjFxuICAgICAgICAvLyBsZXQgcmVhbEdsb3dUaHJlc2hvbGRQcm9ncmVzcyA9IHRoaXMuX2dsb3dUaHJlc2hvbGRTbGlkZXIucHJvZ3Jlc3MgKiAwLjU7XG4gICAgICAgIGxldCByZWFsR2xvd1RocmVzaG9sZFByb2dyZXNzID0gdGhpcy5fZ2xvd1RocmVzaG9sZFNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5fZ2xvd1RocmVzaG9sZFNsaWRlckxhYmVsLnN0cmluZyA9IGAke3JlYWxHbG93VGhyZXNob2xkUHJvZ3Jlc3MudG9GaXhlZCgyKX1gO1xuXG4gICAgICAgIC8vIOabtOaWsOadkOi0qFxuICAgICAgICB0aGlzLl91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbCh7XG4gICAgICAgICAgICBnbG93Q29sb3I6IGNjLnY0KHRoaXMuX3JlZFNsaWRlci5wcm9ncmVzcywgdGhpcy5fZ3JlZW5TbGlkZXIucHJvZ3Jlc3MsIHRoaXMuX2JsdWVTbGlkZXIucHJvZ3Jlc3MsIHRoaXMuX2FscGhhU2xpZGVyLnByb2dyZXNzKSxcbiAgICAgICAgICAgIGdsb3dSYW5nZTogcmVhbEdsb3dXaWR0aFByb2dyZXNzLFxuICAgICAgICAgICAgZ2xvd1RocmVzaG9sZDogcmVhbEdsb3dUaHJlc2hvbGRQcm9ncmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5riy5p+T57uE5Lu255qE5p2Q6LSoXG4gICAgICpcbiAgICAgKiAxLiDojrflj5bmnZDotKhcbiAgICAgKiAyLiDnu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICogMy4g6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWPkeWFieWuveW6pu+8iHB477yJXG4gICAgICAgICAqL1xuICAgICAgICBnbG93UmFuZ2U6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ6aKc6ImyIFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dDb2xvcjogY2MuVmVjNDtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+R5YWJ6ZiI5YC8IFswLjAsIDEuMF1cbiAgICAgICAgICovXG4gICAgICAgIGdsb3dUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaCgocmVuZGVyQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbmRlckNvbXBvbmVudCBpbnN0YW5jZW9mIGNjLlNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVSZWN0ID0gKDxjYy5TcHJpdGU+cmVuZGVyQ29tcG9uZW50KS5zcHJpdGVGcmFtZS5nZXRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSByZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwic3ByaXRlV2lkdGhcIiwgc3ByaXRlRnJhbWVSZWN0LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJzcHJpdGVIZWlnaHRcIiwgc3ByaXRlRnJhbWVSZWN0LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd1JhbmdlXCIsIHBhcmFtLmdsb3dSYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd0NvbG9yXCIsIHBhcmFtLmdsb3dDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ2xvd1RocmVzaG9sZFwiLCBwYXJhbS5nbG93VGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInNwcml0ZVdpZHRoXCIsIGNoaWxkTm9kZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwic3ByaXRlSGVpZ2h0XCIsIGNoaWxkTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dSYW5nZVwiLCBwYXJhbS5nbG93UmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dDb2xvclwiLCBwYXJhbS5nbG93Q29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImdsb3dUaHJlc2hvbGRcIiwgcGFyYW0uZ2xvd1RocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
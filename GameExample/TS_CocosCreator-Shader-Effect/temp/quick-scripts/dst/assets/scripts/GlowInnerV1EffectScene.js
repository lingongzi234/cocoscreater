
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
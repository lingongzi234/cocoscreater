
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
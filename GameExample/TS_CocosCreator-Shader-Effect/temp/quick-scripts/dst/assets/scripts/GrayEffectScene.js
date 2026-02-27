
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
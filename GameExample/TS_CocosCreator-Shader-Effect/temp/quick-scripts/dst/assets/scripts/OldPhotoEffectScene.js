
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

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
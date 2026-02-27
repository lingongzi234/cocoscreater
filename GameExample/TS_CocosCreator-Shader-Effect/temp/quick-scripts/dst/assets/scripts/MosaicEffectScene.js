
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
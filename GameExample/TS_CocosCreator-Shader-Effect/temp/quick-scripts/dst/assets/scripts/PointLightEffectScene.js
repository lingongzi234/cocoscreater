
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
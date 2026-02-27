
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PointLightCtrlComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ababaxBpzZMv60DJIli3Qbn', 'PointLightCtrlComponent');
// scripts/PointLightCtrlComponent.ts

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
exports.PointLightUBO = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointLightCtrlComponent = /** @class */ (function (_super) {
    __extends(PointLightCtrlComponent, _super);
    function PointLightCtrlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pointLightUBO = new PointLightUBO();
        return _this;
    }
    PointLightCtrlComponent.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on("on_property_change", this._onPropertyChange, this);
    };
    PointLightCtrlComponent.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off("on_property_change", this._onPropertyChange, this);
    };
    PointLightCtrlComponent.prototype._onTouchStart = function (event) {
        this._onTouchMove(event);
    };
    PointLightCtrlComponent.prototype._onTouchMove = function (event) {
        var touchPointInWorldSpace = event.getLocation();
        var touchPointInNodeSpace = this.node.convertToNodeSpaceAR(touchPointInWorldSpace);
        // 将触摸点转换为OPENGL坐标系并归一化
        // OpenGl 坐标系原点在左上角
        this._pointLightUBO.centerPoint = cc.v2(this.node.anchorX + touchPointInNodeSpace.x / this.node.width, 1 - (this.node.anchorY + touchPointInNodeSpace.y / this.node.height));
        this._updateMaterial();
    };
    PointLightCtrlComponent.prototype._onPropertyChange = function (pointLightUBO) {
        this._pointLightUBO.centerColor = pointLightUBO.centerColor;
        this._pointLightUBO.radius = pointLightUBO.radius;
        this._pointLightUBO.cropAlpha = pointLightUBO.cropAlpha;
        this._pointLightUBO.enableFog = pointLightUBO.enableFog;
        this._updateMaterial();
    };
    PointLightCtrlComponent.prototype._updateMaterial = function () {
        var _this = this;
        this.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
            var material = renderComponent.getMaterial(0);
            material.setProperty("centerColor", _this._pointLightUBO.centerColor);
            material.setProperty("centerPoint", _this._pointLightUBO.centerPoint);
            material.setProperty("radius", _this._pointLightUBO.radius);
            material.setProperty("cropAlpha", _this._pointLightUBO.cropAlpha);
            material.setProperty("enableFog", _this._pointLightUBO.enableFog);
            renderComponent.setMaterial(0, material);
        });
    };
    PointLightCtrlComponent = __decorate([
        ccclass
    ], PointLightCtrlComponent);
    return PointLightCtrlComponent;
}(cc.Component));
exports.default = PointLightCtrlComponent;
var PointLightUBO = /** @class */ (function () {
    function PointLightUBO() {
        /**
         * 中心点颜色
         */
        this.centerColor = cc.Color.YELLOW;
        /**
         * 中心点坐标 ([0.0, 1.0], [0.0, 1.0])
         */
        this.centerPoint = cc.v2(0.5, 0.5);
        /**
         * 扩散半径 [0.0, 1.0]
         */
        this.radius = 0.5;
        /**
         * 是否裁剪掉透明区域上的点光
         */
        this.cropAlpha = true;
        /**
         * 是否开启战争迷雾效果
         */
        this.enableFog = false;
    }
    return PointLightUBO;
}());
exports.PointLightUBO = PointLightUBO;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvaW50TGlnaHRDdHJsQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQW9EQztRQW5EVyxvQkFBYyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDOztJQW1EaEUsQ0FBQztJQWpERywwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVB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LElBQUksQ0FBQztRQUUxQjs7V0FFRztRQUNILGNBQVMsR0FBWSxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludExpZ2h0Q3RybENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcG9pbnRMaWdodFVCTzogUG9pbnRMaWdodFVCTyA9IG5ldyBQb2ludExpZ2h0VUJPKCk7XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJvbl9wcm9wZXJ0eV9jaGFuZ2VcIiwgdGhpcy5fb25Qcm9wZXJ0eUNoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcIm9uX3Byb3BlcnR5X2NoYW5nZVwiLCB0aGlzLl9vblByb3BlcnR5Q2hhbmdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaE1vdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCB0b3VjaFBvaW50SW5Xb3JsZFNwYWNlID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHRvdWNoUG9pbnRJbk5vZGVTcGFjZSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvaW50SW5Xb3JsZFNwYWNlKTtcblxuICAgICAgICAvLyDlsIbop6bmkbjngrnovazmjaLkuLpPUEVOR0zlnZDmoIfns7vlubblvZLkuIDljJZcbiAgICAgICAgLy8gT3BlbkdsIOWdkOagh+ezu+WOn+eCueWcqOW3puS4iuinklxuICAgICAgICB0aGlzLl9wb2ludExpZ2h0VUJPLmNlbnRlclBvaW50ID0gY2MudjIoXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCArIHRvdWNoUG9pbnRJbk5vZGVTcGFjZS54IC8gdGhpcy5ub2RlLndpZHRoLFxuICAgICAgICAgICAgMSAtICh0aGlzLm5vZGUuYW5jaG9yWSArIHRvdWNoUG9pbnRJbk5vZGVTcGFjZS55IC8gdGhpcy5ub2RlLmhlaWdodClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl91cGRhdGVNYXRlcmlhbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uUHJvcGVydHlDaGFuZ2UocG9pbnRMaWdodFVCTzogUG9pbnRMaWdodFVCTykge1xuICAgICAgICB0aGlzLl9wb2ludExpZ2h0VUJPLmNlbnRlckNvbG9yID0gcG9pbnRMaWdodFVCTy5jZW50ZXJDb2xvcjtcbiAgICAgICAgdGhpcy5fcG9pbnRMaWdodFVCTy5yYWRpdXMgPSBwb2ludExpZ2h0VUJPLnJhZGl1cztcbiAgICAgICAgdGhpcy5fcG9pbnRMaWdodFVCTy5jcm9wQWxwaGEgPSBwb2ludExpZ2h0VUJPLmNyb3BBbHBoYTtcbiAgICAgICAgdGhpcy5fcG9pbnRMaWdodFVCTy5lbmFibGVGb2cgPSBwb2ludExpZ2h0VUJPLmVuYWJsZUZvZztcbiAgICAgICAgdGhpcy5fdXBkYXRlTWF0ZXJpYWwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVNYXRlcmlhbCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiY2VudGVyQ29sb3JcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5jZW50ZXJDb2xvcik7XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImNlbnRlclBvaW50XCIsIHRoaXMuX3BvaW50TGlnaHRVQk8uY2VudGVyUG9pbnQpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJyYWRpdXNcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5yYWRpdXMpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJjcm9wQWxwaGFcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5jcm9wQWxwaGEpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJlbmFibGVGb2dcIiwgdGhpcy5fcG9pbnRMaWdodFVCTy5lbmFibGVGb2cpO1xuICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9pbnRMaWdodFVCTyB7XG4gICAgLyoqXG4gICAgICog5Lit5b+D54K56aKc6ImyXG4gICAgICovXG4gICAgY2VudGVyQ29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuXG4gICAgLyoqXG4gICAgICog5Lit5b+D54K55Z2Q5qCHIChbMC4wLCAxLjBdLCBbMC4wLCAxLjBdKVxuICAgICAqL1xuICAgIGNlbnRlclBvaW50OiBjYy5WZWMyID0gY2MudjIoMC41LCAwLjUpO1xuXG4gICAgLyoqXG4gICAgICog5omp5pWj5Y2K5b6EIFswLjAsIDEuMF1cbiAgICAgKi9cbiAgICByYWRpdXM6IG51bWJlciA9IDAuNTtcblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuijgeWJquaOiemAj+aYjuWMuuWfn+S4iueahOeCueWFiVxuICAgICAqL1xuICAgIGNyb3BBbHBoYTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/miJjkuonov7fpm77mlYjmnpxcbiAgICAgKi9cbiAgICBlbmFibGVGb2c6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CommonScript/FPSLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f7c5oswVlDkqhqvG0NF/V0', 'FPSLabel');
// CommonScript/FPSLabel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, disallowMultiple = _a.disallowMultiple;
var FPSLabel = /** @class */ (function (_super) {
    __extends(FPSLabel, _super);
    function FPSLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._total = 0;
        _this._fps = 0;
        _this._time = 0;
        return _this;
    }
    FPSLabel_1 = FPSLabel;
    FPSLabel.prototype.onLoad = function () {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        // cc.game.addPersistRootNode(this.node);
        FPSLabel_1.loadTimeLab = this.node.getChildByName("loadTime").getComponent(cc.Label);
        // FPSLabel.preloadProgressLab = this.node.getChildByName("preloadProgress").getComponent(cc.Label);
        // FPSLabel.preloadTimeLab = this.node.getChildByName("preloadTime").getComponent(cc.Label);
        // cc.debug.setDisplayStats(true);
        // this._time = performance.now();
        // cc.director.on(cc.Director.EVENT_AFTER_DRAW, ()=>{
        //     var now = performance.now();
        //     var deletaTime = now - this._time;
        //     this._total++;
        //     if (deletaTime >= 500) {
        //         this._fps = Math.floor((1000 * this._total / deletaTime) * 100) / 100;
        //         this.node.getComponent(cc.Label).string = "fps: " + this._fps;
        //         this._total = 0;
        //         this._time = now;
        //     }
        // }, this)
    };
    var FPSLabel_1;
    FPSLabel.loadTimeLab = null;
    FPSLabel.preloadProgressLab = null;
    FPSLabel.preloadTimeLab = null;
    FPSLabel = FPSLabel_1 = __decorate([
        ccclass,
        requireComponent(cc.Label),
        disallowMultiple
    ], FPSLabel);
    return FPSLabel;
}(cc.Component));
exports.default = FPSLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb25TY3JpcHQvRlBTTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUEwRCxFQUFFLENBQUMsVUFBVSxFQUF0RSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxnQkFBZ0Isc0JBQWlCLENBQUM7QUFLOUU7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrQ0M7UUFoQ0csWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBOEJ0QixDQUFDO2lCQWxDb0IsUUFBUTtJQVl6Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDdkMseUNBQXlDO1FBRXpDLFVBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixvR0FBb0c7UUFDcEcsNEZBQTRGO1FBRTVGLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMscURBQXFEO1FBQ3JELG1DQUFtQztRQUNuQyx5Q0FBeUM7UUFDekMscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUMvQixpRkFBaUY7UUFDakYseUVBQXlFO1FBQ3pFLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsUUFBUTtRQUNSLFdBQVc7SUFDZixDQUFDOztJQTNCYSxvQkFBVyxHQUFhLElBQUksQ0FBQztJQUU3QiwyQkFBa0IsR0FBYSxJQUFJLENBQUM7SUFFcEMsdUJBQWMsR0FBYSxJQUFJLENBQUM7SUFWN0IsUUFBUTtRQUg1QixPQUFPO1FBQ1AsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBZ0I7T0FDSSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBkaXNhbGxvd011bHRpcGxlfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5MYWJlbClcbkBkaXNhbGxvd011bHRpcGxlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBfdG90YWw6IG51bWJlciA9IDA7XG4gICAgX2ZwczogbnVtYmVyID0gMDtcbiAgICBfdGltZTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFRpbWVMYWI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZFByb2dyZXNzTGFiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWRUaW1lTGFiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcblxuICAgICAgICBGUFNMYWJlbC5sb2FkVGltZUxhYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvYWRUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8vIEZQU0xhYmVsLnByZWxvYWRQcm9ncmVzc0xhYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByZWxvYWRQcm9ncmVzc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvLyBGUFNMYWJlbC5wcmVsb2FkVGltZUxhYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByZWxvYWRUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgLy8gY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgICAgICAvLyB0aGlzLl90aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsICgpPT57XG4gICAgICAgIC8vICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIC8vICAgICB2YXIgZGVsZXRhVGltZSA9IG5vdyAtIHRoaXMuX3RpbWU7XG4gICAgICAgIC8vICAgICB0aGlzLl90b3RhbCsrO1xuICAgICAgICAvLyAgICAgaWYgKGRlbGV0YVRpbWUgPj0gNTAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZnBzID0gTWF0aC5mbG9vcigoMTAwMCAqIHRoaXMuX3RvdGFsIC8gZGVsZXRhVGltZSkgKiAxMDApIC8gMTAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiZnBzOiBcIiArIHRoaXMuX2ZwcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl90b3RhbCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fdGltZSA9IG5vdztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgdGhpcylcbiAgICB9XG59XG4iXX0=
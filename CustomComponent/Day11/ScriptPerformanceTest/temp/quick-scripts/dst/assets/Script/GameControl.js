
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddc49RcukpOSpdZJubAMdz+', 'GameControl');
// Script/GameControl.ts

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
var BallLineTestOptimize_1 = require("./optimize/BallLineTestOptimize");
var BallLineTestNormal_1 = require("./normal/BallLineTestNormal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameControl = /** @class */ (function (_super) {
    __extends(GameControl, _super);
    function GameControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.box = null;
        _this.fpsLab = null;
        _this.waitFrameSlider = null;
        _this.waitFrames = 0;
        _this._maxWaitFrames = 10;
        _this._total = 0;
        _this._fps = 0;
        _this._time = 0;
        _this._ballCount = 0;
        _this._runOptimize = false;
        _this.graphicsPool = null;
        return _this;
    }
    GameControl.prototype.onLoad = function () {
        var _this = this;
        cc.debug.setDisplayStats(true);
        this._time = performance.now();
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, function () {
            var now = performance.now();
            var deletaTime = now - _this._time;
            _this._total++;
            if (deletaTime >= 500) {
                _this._fps = Math.floor((1000 * _this._total / deletaTime) * 100) / 100;
                _this.fpsLab.string = "fps: " + _this._fps + " balls: " + _this._ballCount + " waitFrames: " + _this.waitFrames;
                _this._total = 0;
                _this._time = now;
            }
        }, this);
        this.waitFrameSlider.progress = Math.floor(this.waitFrames / 10);
    };
    GameControl.prototype.sendBoxToScene = function () {
        var graphicsNode = new cc.Node();
        var graphics = graphicsNode.addComponent(cc.Graphics);
        graphics.lineWidth = 10;
        this.graphicsPool.addChild(graphicsNode);
        var box = cc.instantiate(this.box);
        var lineTestComp = null;
        if (this._runOptimize) {
            lineTestComp = box.addComponent(BallLineTestOptimize_1.default);
        }
        else {
            lineTestComp = box.addComponent(BallLineTestNormal_1.default);
        }
        lineTestComp.ballID = this._ballCount;
        this.node.getChildByName("ballPool").addChild(box);
        this._ballCount++;
    };
    GameControl.prototype.ballCountInputEnd = function (editComp) {
        this._ballCount = 0;
        var count = parseInt(editComp.string);
        if (count > 0) {
            this.node.getChildByName("ballPool").destroyAllChildren();
            this.graphicsPool.destroyAllChildren();
            for (var i = 0; i < count; i++) {
                setTimeout(this.sendBoxToScene.bind(this), 100 * i);
            }
        }
    };
    GameControl.prototype.changeOptimizeType = function () {
        this._runOptimize = !this._runOptimize;
        if (this._runOptimize) {
            cc.find("Canvas/projectType").getComponent(cc.Label).string = "当前方案: 优化";
        }
        else {
            cc.find("Canvas/projectType").getComponent(cc.Label).string = "当前方案: 普通";
        }
        this.clearAll();
    };
    GameControl.prototype.clearAll = function () {
        this.node.getChildByName("ballPool").destroyAllChildren();
        this.graphicsPool.destroyAllChildren();
    };
    GameControl.prototype.waitFrameSliderInput = function (slider) {
        this.waitFrames = Math.floor(slider.progress * this._maxWaitFrames);
    };
    __decorate([
        property(cc.Prefab)
    ], GameControl.prototype, "box", void 0);
    __decorate([
        property(cc.Label)
    ], GameControl.prototype, "fpsLab", void 0);
    __decorate([
        property(cc.Slider)
    ], GameControl.prototype, "waitFrameSlider", void 0);
    __decorate([
        property({ range: [0, 10, 1] })
    ], GameControl.prototype, "waitFrames", void 0);
    __decorate([
        property(cc.Node)
    ], GameControl.prototype, "graphicsPool", void 0);
    GameControl = __decorate([
        ccclass
    ], GameControl);
    return GameControl;
}(cc.Component));
exports.default = GameControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsd0VBQW1FO0FBQ25FLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTZGQztRQTFGRyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFFNUIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBcUVqQyxDQUFDO0lBbkVHLDRCQUFNLEdBQU47UUFBQSxpQkFnQkM7UUFmRyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pDLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLFVBQVUsR0FBRyxHQUFHLEdB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LEdBQUcsVUFBVSxDQUFDO1NBQzVFO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELDBDQUFvQixHQUFwQixVQUFzQixNQUFpQjtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQXpGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQzttREFDUDtJQVl2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNXO0lBeEJaLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E2Ri9CO0lBQUQsa0JBQUM7Q0E3RkQsQUE2RkMsQ0E3RndDLEVBQUUsQ0FBQyxTQUFTLEdBNkZwRDtrQkE3Rm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJhbGxMaW5lVGVzdE9wdGltaXplIGZyb20gXCIuL29wdGltaXplL0JhbGxMaW5lVGVzdE9wdGltaXplXCI7XG5pbXBvcnQgQmFsbExpbmVUZXN0Tm9ybWFsIGZyb20gXCIuL25vcm1hbC9CYWxsTGluZVRlc3ROb3JtYWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJveDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBmcHNMYWI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXG4gICAgd2FpdEZyYW1lU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eSh7cmFuZ2U6IFswLCAxMCwgMV19KVxuICAgIHdhaXRGcmFtZXM6IG51bWJlciA9IDA7XG5cbiAgICBfbWF4V2FpdEZyYW1lczogbnVtYmVyID0gMTA7XG5cbiAgICBfdG90YWw6IG51bWJlciA9IDA7XG4gICAgX2ZwczogbnVtYmVyID0gMDtcbiAgICBfdGltZTogbnVtYmVyID0gMDtcbiAgICBfYmFsbENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgX3J1bk9wdGltaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBncmFwaGljc1Bvb2w6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgICAgICB0aGlzLl90aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsICgpPT57XG4gICAgICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB2YXIgZGVsZXRhVGltZSA9IG5vdyAtIHRoaXMuX3RpbWU7XG4gICAgICAgICAgICB0aGlzLl90b3RhbCsrO1xuICAgICAgICAgICAgaWYgKGRlbGV0YVRpbWUgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gTWF0aC5mbG9vcigoMTAwMCAqIHRoaXMuX3RvdGFsIC8gZGVsZXRhVGltZSkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZnBzTGFiLnN0cmluZyA9IFwiZnBzOiBcIiArIHRoaXMuX2ZwcyArIFwiIGJhbGxzOiBcIiArIHRoaXMuX2JhbGxDb3VudCArIFwiIHdhaXRGcmFtZXM6IFwiICsgdGhpcy53YWl0RnJhbWVzO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvdGFsID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lID0gbm93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKVxuXG4gICAgICAgIHRoaXMud2FpdEZyYW1lU2xpZGVyLnByb2dyZXNzID0gTWF0aC5mbG9vcih0aGlzLndhaXRGcmFtZXMgLyAxMCk7XG4gICAgfVxuXG4gICAgc2VuZEJveFRvU2NlbmUoKSB7XG4gICAgICAgIHZhciBncmFwaGljc05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICB2YXIgZ3JhcGhpY3MgPSBncmFwaGljc05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMTA7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3NQb29sLmFkZENoaWxkKGdyYXBoaWNzTm9kZSk7XG5cbiAgICAgICAgdmFyIGJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm94KTtcbiAgICAgICAgdmFyIGxpbmVUZXN0Q29tcDogQmFsbExpbmVUZXN0T3B0aW1pemUgfCBCYWxsTGluZVRlc3ROb3JtYWwgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fcnVuT3B0aW1pemUpIHtcbiAgICAgICAgICAgIGxpbmVUZXN0Q29tcCA9IGJveC5hZGRDb21wb25lbnQoQmFsbExpbmVUZXN0T3B0aW1pemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZVRlc3RDb21wID0gYm94LmFkZENvbXBvbmVudChCYWxsTGluZVRlc3ROb3JtYWwpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmVUZXN0Q29tcC5iYWxsSUQgPSB0aGlzLl9iYWxsQ291bnQ7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhbGxQb29sXCIpLmFkZENoaWxkKGJveCk7XG5cbiAgICAgICAgdGhpcy5fYmFsbENvdW50Kys7XG4gICAgfVxuXG4gICAgYmFsbENvdW50SW5wdXRFbmQgKGVkaXRDb21wOiBjYy5FZGl0Qm94KSB7XG4gICAgICAgIHRoaXMuX2JhbGxDb3VudCA9IDA7XG4gICAgICAgIHZhciBjb3VudCA9IHBhcnNlSW50KGVkaXRDb21wLnN0cmluZyk7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhbGxQb29sXCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1Bvb2wuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VuZEJveFRvU2NlbmUuYmluZCh0aGlzKSwgMTAwICogaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VPcHRpbWl6ZVR5cGUgKCkge1xuICAgICAgICB0aGlzLl9ydW5PcHRpbWl6ZSA9ICF0aGlzLl9ydW5PcHRpbWl6ZTtcbiAgICAgICAgaWYgKHRoaXMuX3J1bk9wdGltaXplKSB7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Byb2plY3RUeXBlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlvZPliY3mlrnmoYg6IOS8mOWMllwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9wcm9qZWN0VHlwZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5b2T5YmN5pa55qGIOiDmma7pgJpcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGwgKCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWxsUG9vbFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5ncmFwaGljc1Bvb2wuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgd2FpdEZyYW1lU2xpZGVySW5wdXQgKHNsaWRlcjogY2MuU2xpZGVyKSB7XG4gICAgICAgIHRoaXMud2FpdEZyYW1lcyA9IE1hdGguZmxvb3Ioc2xpZGVyLnByb2dyZXNzICogdGhpcy5fbWF4V2FpdEZyYW1lcyk7XG4gICAgfVxufSJdfQ==
"use strict";
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
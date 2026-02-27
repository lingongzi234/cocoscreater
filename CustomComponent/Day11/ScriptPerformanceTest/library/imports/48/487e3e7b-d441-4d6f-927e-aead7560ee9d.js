"use strict";
cc._RF.push(module, '487e3571EFNb5J+rq11YO6d', 'BallLineTestOptimize');
// Script/optimize/BallLineTestOptimize.ts

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
var GameControl_1 = require("../GameControl");
var LineRectTestOptimize_1 = require("./LineRectTestOptimize");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallLineTestOptimize = /** @class */ (function (_super) {
    __extends(BallLineTestOptimize, _super);
    function BallLineTestOptimize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.v = null;
        _this.h = null;
        _this.graphics = null;
        _this.vPos1 = new cc.Vec2(0, 0);
        _this.vPos2 = new cc.Vec2(0, 0);
        _this.hPos1 = new cc.Vec2(0, 0);
        _this.hPos2 = new cc.Vec2(0, 0);
        _this.v1DrawPos = new cc.Vec3(0, 0);
        _this.v2DrawPos = new cc.Vec3(0, 0);
        _this.h1DrawPos = new cc.Vec3(0, 0);
        _this.h2DrawPos = new cc.Vec3(0, 0);
        _this.r0PosTemp = new cc.Vec2(0, 0);
        _this.r1PosTemp = new cc.Vec2(0, 0);
        _this.r2PosTemp = new cc.Vec2(0, 0);
        _this.r3PosTemp = new cc.Vec2(0, 0);
        _this.ballID = 0;
        _this._waitTime = 0;
        _this.graphicsPool = null;
        _this._gameControl = null;
        return _this;
    }
    BallLineTestOptimize.prototype.onLoad = function () {
        this.v = cc.find("Canvas/V");
        this.h = cc.find("Canvas/H");
        this.graphicsPool = cc.find("Canvas/graphicsPool");
        this.graphics = this.graphicsPool.children[this.ballID].getComponent(cc.Graphics);
        this._gameControl = cc.find("Canvas").getComponent(GameControl_1.default);
        // this.node.getComponent(cc.Animation).defaultClip.speed = 0.7;
    };
    BallLineTestOptimize.prototype.update = function (deltaTime) {
        if (!this.v || !this.h || !this.graphics)
            return;
        if (this._waitTime === 0) {
            var nodeAABB = this.node.getBoundingBoxToWorld();
            this.updateGraphicsColor();
            this.graphics.clear();
            this.vLineTest(nodeAABB);
            this.hLineTest(nodeAABB);
            this._waitTime++;
        }
        else if (this._waitTime < this._gameControl.waitFrames) {
            this._waitTime++;
        }
        else {
            this._waitTime = 0;
        }
    };
    BallLineTestOptimize.prototype.updateGraphicsColor = function () {
        this.graphics.strokeColor.r = Math.floor(Math.random() * 256);
        this.graphics.strokeColor.g = Math.floor(Math.random() * 256);
        this.graphics.strokeColor.b = Math.floor(Math.random() * 256);
    };
    BallLineTestOptimize.prototype.vLineTest = function (nodeAABB) {
        for (var i = 0; i < this.v.children.length; i++) {
            var v1NodePos = this.v.children[i].children[0].position;
            var v1WorldPos = this.v.children[i].convertToWorldSpaceAR(v1NodePos);
            this.v1DrawPos = this.graphicsPool.convertToNodeSpaceAR(v1WorldPos);
            var v2NodePos = this.v.children[i].children[1].position;
            var v2WorldPos = this.v.children[i].convertToWorldSpaceAR(v2NodePos);
            this.v2DrawPos = this.graphicsPool.convertToNodeSpaceAR(v2WorldPos);
            this.vPos1.x = v1WorldPos.x;
            this.vPos1.y = v1WorldPos.y;
            this.vPos2.x = v2WorldPos.x;
            this.vPos2.y = v2WorldPos.y;
            this.doTest(this.vPos1, this.vPos2, this.v1DrawPos, this.v2DrawPos, nodeAABB);
        }
    };
    BallLineTestOptimize.prototype.hLineTest = function (nodeAABB) {
        for (var i = 0; i < this.h.children.length; i++) {
            var h1NodePos = this.h.children[i].children[0].position;
            var h1WorldPos = this.h.children[i].convertToWorldSpaceAR(h1NodePos);
            this.h1DrawPos = this.graphicsPool.convertToNodeSpaceAR(h1WorldPos);
            var h2NodePos = this.h.children[i].children[1].position;
            var h2WorldPos = this.h.children[i].convertToWorldSpaceAR(h2NodePos);
            this.h2DrawPos = this.graphicsPool.convertToNodeSpaceAR(h2WorldPos);
            this.hPos1.x = h1WorldPos.x;
            this.hPos1.y = h1WorldPos.y;
            this.hPos2.x = h2WorldPos.x;
            this.hPos2.y = h2WorldPos.y;
            this.doTest(this.hPos1, this.hPos2, this.h1DrawPos, this.h2DrawPos, nodeAABB);
        }
    };
    BallLineTestOptimize.prototype.doTest = function (p1, p2, d1, d2, nodeAABB) {
        if (LineRectTestOptimize_1.default.lineRect(p1, p2, nodeAABB)) {
            this.drawLine(d1, d2);
        }
    };
    BallLineTestOptimize.prototype.drawLine = function (d1, d2) {
        this.graphics.moveTo(d1.x, d1.y);
        this.graphics.lineTo(d2.x, d2.y);
        this.graphics.stroke();
    };
    BallLineTestOptimize = __decorate([
        ccclass
    ], BallLineTestOptimize);
    return BallLineTestOptimize;
}(cc.Component));
exports.default = BallLineTestOptimize;

cc._RF.pop();
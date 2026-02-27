"use strict";
cc._RF.push(module, '35baf19YzJLNJVND/ckDkf6', 'BallLineTestNormal');
// Script/normal/BallLineTestNormal.ts

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
var LineRectTestNormal_1 = require("./LineRectTestNormal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallLineTestNormal = /** @class */ (function (_super) {
    __extends(BallLineTestNormal, _super);
    function BallLineTestNormal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.v = null;
        _this.h = null;
        _this.graphics = null;
        _this.graphicsPool = null;
        _this.ballID = 0;
        return _this;
    }
    BallLineTestNormal.prototype.onLoad = function () {
        this.v = cc.find("Canvas/V");
        this.h = cc.find("Canvas/H");
        this.graphicsPool = cc.find("Canvas/graphicsPool");
        this.graphics = this.graphicsPool.children[this.ballID].getComponent(cc.Graphics);
        // this.node.getComponent(cc.Animation).defaultClip.speed = 0.7;
    };
    BallLineTestNormal.prototype.update = function (deltaTime) {
        if (!this.v || !this.h || !this.graphics)
            return;
        this.updateGraphicsColor();
        this.graphics.clear();
        this.vLineTest();
        this.hLineTest();
    };
    BallLineTestNormal.prototype.updateGraphicsColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        this.graphics.strokeColor = cc.color(r, g, b);
    };
    BallLineTestNormal.prototype.vLineTest = function () {
        for (var i = 0; i < this.v.children.length; i++) {
            var v1NodePos = this.v.children[i].children[0].position;
            var v1WorldPos = this.v.children[i].convertToWorldSpaceAR(v1NodePos);
            var drawPos1 = this.graphicsPool.convertToNodeSpaceAR(v1WorldPos);
            var v2NodePos = this.v.children[i].children[1].position;
            var v2WorldPos = this.v.children[i].convertToWorldSpaceAR(v2NodePos);
            var drawPos2 = this.graphicsPool.convertToNodeSpaceAR(v2WorldPos);
            var vPos1 = cc.v2(v1WorldPos.x, v1WorldPos.y);
            var vPos2 = cc.v2(v2WorldPos.x, v2WorldPos.y);
            var testResult = LineRectTestNormal_1.default.lineRect(vPos1, vPos2, this.node.getBoundingBoxToWorld());
            if (testResult) {
                this.graphics.moveTo(drawPos1.x, drawPos1.y);
                this.graphics.lineTo(drawPos2.x, drawPos2.y);
                this.graphics.stroke();
            }
        }
    };
    BallLineTestNormal.prototype.hLineTest = function () {
        for (var i = 0; i < this.h.children.length; i++) {
            var h1NodePos = this.h.children[i].children[0].position;
            var h1WorldPos = this.h.children[i].convertToWorldSpaceAR(h1NodePos);
            var drawPos1 = this.graphicsPool.convertToNodeSpaceAR(h1WorldPos);
            var h2NodePos = this.h.children[i].children[1].position;
            var h2WorldPos = this.h.children[i].convertToWorldSpaceAR(h2NodePos);
            var drawPos2 = this.graphicsPool.convertToNodeSpaceAR(h2WorldPos);
            var hPos1 = cc.v2(h1WorldPos.x, h1WorldPos.y);
            var hPos2 = cc.v2(h2WorldPos.x, h2WorldPos.y);
            var testResult = LineRectTestNormal_1.default.lineRect(hPos1, hPos2, this.node.getBoundingBoxToWorld());
            if (testResult) {
                this.graphics.moveTo(drawPos1.x, drawPos1.y);
                this.graphics.lineTo(drawPos2.x, drawPos2.y);
                this.graphics.stroke();
            }
        }
    };
    BallLineTestNormal = __decorate([
        ccclass
    ], BallLineTestNormal);
    return BallLineTestNormal;
}(cc.Component));
exports.default = BallLineTestNormal;

cc._RF.pop();
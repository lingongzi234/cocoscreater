
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/optimize/BallLineTestOptimize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvb3B0aW1pemUvQmFsbExpbmVUZXN0T3B0aW1pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLCtEQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQStHQztRQTdHRyxPQUFDLEdBQVksSUFBSSxDQUFDO1FBRWxCLE9BQUMsR0FBWSxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsV0FBSyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsV0FBSyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsV0FBSyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsZUFBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsZUFBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsZUFBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsZUFBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkMsZUFBUyxHQUFZLElBQUksRUFBRSxDQUFD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RSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVwRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVwRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBRTVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVcsUUFBUTtRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDakY7SUFDTCxDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRO1FBQzVCLElBQUksOEJBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFVLEVBQUUsRUFBRSxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBOUdnQixvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQStHeEM7SUFBRCwyQkFBQztDQS9HRCxBQStHQyxDQS9HaUQsRUFBRSxDQUFDLFNBQVMsR0ErRzdEO2tCQS9Hb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDb250cm9sIGZyb20gXCIuLi9HYW1lQ29udHJvbFwiO1xuaW1wb3J0IExpbmVSZWN0VGVzdE9wdGltaXplIGZyb20gXCIuL0xpbmVSZWN0VGVzdE9wdGltaXplXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbExpbmVUZXN0T3B0aW1pemUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgdjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBoOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICB2UG9zMTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xuICAgIHZQb3MyOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgaFBvczE6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICBoUG9zMjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xuICAgIHYxRHJhd1BvczogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIDApO1xuICAgIHYyRHJhd1BvczogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIDApO1xuICAgIGgxRHJhd1BvczogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIDApO1xuICAgIGgyRHJhd1BvczogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIDApO1xuXG4gICAgcjBQb3NUZW1wOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgcjFQb3NUZW1wOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgcjJQb3NUZW1wOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgcjNQb3NUZW1wOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG5cbiAgICBiYWxsSUQ6IG51bWJlciA9IDA7XG5cbiAgICBfd2FpdFRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBncmFwaGljc1Bvb2w6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgX2dhbWVDb250cm9sOiBHYW1lQ29udHJvbCA9IG51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnYgPSBjYy5maW5kKFwiQ2FudmFzL1ZcIik7XG4gICAgICAgIHRoaXMuaCA9IGNjLmZpbmQoXCJDYW52YXMvSFwiKTtcbiAgICAgICAgdGhpcy5ncmFwaGljc1Bvb2wgPSBjYy5maW5kKFwiQ2FudmFzL2dyYXBoaWNzUG9vbFwiKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3NQb29sLmNoaWxkcmVuW3RoaXMuYmFsbElEXS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLl9nYW1lQ29udHJvbCA9IGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KEdhbWVDb250cm9sKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmRlZmF1bHRDbGlwLnNwZWVkID0gMC43O1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMudiB8fCAhdGhpcy5oIHx8ICF0aGlzLmdyYXBoaWNzKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuX3dhaXRUaW1lID09PSAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZUFBQkIgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdyYXBoaWNzQ29sb3IoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudkxpbmVUZXN0KG5vZGVBQUJCKTtcbiAgICAgICAgICAgIHRoaXMuaExpbmVUZXN0KG5vZGVBQUJCKTtcbiAgICAgICAgICAgIHRoaXMuX3dhaXRUaW1lKys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2FpdFRpbWUgPCB0aGlzLl9nYW1lQ29udHJvbC53YWl0RnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLl93YWl0VGltZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fd2FpdFRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR3JhcGhpY3NDb2xvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IuciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IuZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IuYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4gICAgfVxuXG4gICAgdkxpbmVUZXN0IChub2RlQUFCQikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHYxTm9kZVBvcyA9IHRoaXMudi5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciB2MVdvcmxkUG9zID0gdGhpcy52LmNoaWxkcmVuW2ldLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih2MU5vZGVQb3MpO1xuICAgICAgICAgICAgdGhpcy52MURyYXdQb3MgPSB0aGlzLmdyYXBoaWNzUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2MVdvcmxkUG9zKTtcblxuICAgICAgICAgICAgdmFyIHYyTm9kZVBvcyA9IHRoaXMudi5jaGlsZHJlbltpXS5jaGlsZHJlblsxXS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciB2MldvcmxkUG9zID0gdGhpcy52LmNoaWxkcmVuW2ldLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih2Mk5vZGVQb3MpO1xuICAgICAgICAgICAgdGhpcy52MkRyYXdQb3MgPSB0aGlzLmdyYXBoaWNzUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2MldvcmxkUG9zKTtcblxuICAgICAgICAgICAgdGhpcy52UG9zMS54ID0gdjFXb3JsZFBvcy54O1xuICAgICAgICAgICAgdGhpcy52UG9zMS55ID0gdjFXb3JsZFBvcy55O1xuICAgICAgICAgICAgdGhpcy52UG9zMi54ID0gdjJXb3JsZFBvcy54O1xuICAgICAgICAgICAgdGhpcy52UG9zMi55ID0gdjJXb3JsZFBvcy55O1xuXG4gICAgICAgICAgICB0aGlzLmRvVGVzdCh0aGlzLnZQb3MxLCB0aGlzLnZQb3MyLCB0aGlzLnYxRHJhd1BvcywgdGhpcy52MkRyYXdQb3MsIG5vZGVBQUJCKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhMaW5lVGVzdCAobm9kZUFBQkIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmguY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBoMU5vZGVQb3MgPSB0aGlzLmguY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgaDFXb3JsZFBvcyA9IHRoaXMuaC5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaDFOb2RlUG9zKTtcbiAgICAgICAgICAgIHRoaXMuaDFEcmF3UG9zID0gdGhpcy5ncmFwaGljc1Bvb2wuY29udmVydFRvTm9kZVNwYWNlQVIoaDFXb3JsZFBvcyk7XG5cbiAgICAgICAgICAgIHZhciBoMk5vZGVQb3MgPSB0aGlzLmguY2hpbGRyZW5baV0uY2hpbGRyZW5bMV0ucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgaDJXb3JsZFBvcyA9IHRoaXMuaC5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaDJOb2RlUG9zKTtcbiAgICAgICAgICAgIHRoaXMuaDJEcmF3UG9zID0gdGhpcy5ncmFwaGljc1Bvb2wuY29udmVydFRvTm9kZVNwYWNlQVIoaDJXb3JsZFBvcyk7XG5cbiAgICAgICAgICAgIHRoaXMuaFBvczEueCA9IGgxV29ybGRQb3MueDtcbiAgICAgICAgICAgIHRoaXMuaFBvczEueSA9IGgxV29ybGRQb3MueTtcbiAgICAgICAgICAgIHRoaXMuaFBvczIueCA9IGgyV29ybGRQb3MueDtcbiAgICAgICAgICAgIHRoaXMuaFBvczIueSA9IGgyV29ybGRQb3MueTtcblxuICAgICAgICAgICAgdGhpcy5kb1Rlc3QodGhpcy5oUG9zMSwgdGhpcy5oUG9zMiwgdGhpcy5oMURyYXdQb3MsIHRoaXMuaDJEcmF3UG9zLCBub2RlQUFCQik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb1Rlc3QgKHAxLCBwMiwgZDEsIGQyLCBub2RlQUFCQikge1xuICAgICAgICBpZiAoTGluZVJlY3RUZXN0T3B0aW1pemUubGluZVJlY3QocDEsIHAyLCBub2RlQUFCQikpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoZDEsIGQyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdMaW5lIChkMSwgZDIpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oZDEueCwgZDEueSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKGQyLngsIGQyLnkpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgIH1cbn1cbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/GameControl');
require('./assets/Script/NewScript');
require('./assets/Script/normal/BallLineTestNormal');
require('./assets/Script/normal/LineRectTestNormal');
require('./assets/Script/optimize/BallLineTestOptimize');
require('./assets/Script/optimize/LineRectTestOptimize');
require('./assets/Script/test/CopyArrayTest');
require('./assets/Script/test/FunctionTest');
require('./assets/Script/test/NumberJITTest');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/NumberJITTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b13c4/4vRJV4JKL+8UUPFd', 'NumberJITTest');
// Script/test/NumberJITTest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberArray = [];
        _this.numberCount = 10000;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        //使用正整数填充 numberArray
        for (var i = 0; i < this.numberCount; i++) {
            this.numberArray[i] = i;
        }
    };
    NewClass.prototype.addIntNumber = function () {
        for (var i = 0; i < this.numberCount; i++) {
            this.numberArray[i] += 1;
        }
        console.log("add int number");
    };
    NewClass.prototype.addFloatNumber = function () {
        for (var i = 0; i < this.numberCount; i++) {
            this.numberArray[i] += 1.000000000001;
        }
        console.log("add float number");
    };
    NewClass.prototype.numberJITTest = function () {
        console.time("numberJITTest");
        for (var index = 0; index < this.numberArray.length; index++) {
            var item = Math.pow(this.numberArray[index], 100);
        }
        console.timeEnd("numberJITTest");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvdGVzdC9OdW1iZXJKSVRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0NDO1FBaENHLGlCQUFXLEdBQVUsRUFBRSxDQUFDO1FBRXhCLGlCQUFXLEdBQVcsS0FBSyxDQUFDOztJQThCaEMsQ0FBQztJQTVCRyx5QkFBTSxHQUFOO1FBQ0kscUJBQXFCO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBakNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG51bWJlckFycmF5OiBhbnlbXSA9IFtdO1xuXG4gICAgbnVtYmVyQ291bnQ6IG51bWJlciA9IDEwMDAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy/kvb/nlKjmraPmlbTmlbDloavlhYUgbnVtYmVyQXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQXJyYXlbaV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSW50TnVtYmVyICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQXJyYXlbaV0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBpbnQgbnVtYmVyXCIpO1xuICAgIH1cblxuICAgIGFkZEZsb2F0TnVtYmVyICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQXJyYXlbaV0gKz0gMS4wMDAwMDAwMDAwMDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhZGQgZmxvYXQgbnVtYmVyXCIpO1xuICAgIH1cblxuICAgIG51bWJlckpJVFRlc3QgKCkge1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJudW1iZXJKSVRUZXN0XCIpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5udW1iZXJBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gTWF0aC5wb3codGhpcy5udW1iZXJBcnJheVtpbmRleF0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS50aW1lRW5kKFwibnVtYmVySklUVGVzdFwiKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9324aIqJGFAe66A1A3NP6mY', 'NewScript');
// Script/NewScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.label.string = "我是谁，我在哪，\n我在干什么";
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTmV3U2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0lBQzFDLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLmiJHmmK/osIHvvIzmiJHlnKjlk6rvvIxcXG7miJHlnKjlubLku4DkuYhcIjtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/CopyArrayTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6a631FWKFL4Zu6e8z4/RWI', 'CopyArrayTest');
// Script/test/CopyArrayTest.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anyArray = [];
        _this.arraySize = 1e6;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.anyArray = Array.from({ length: this.arraySize }, function (v, i) { return i; });
        console.log("anyArray is ready");
    };
    NewClass.prototype.useExtendOperation = function () {
        console.time('useExtendOperation');
        var newArray = [];
        newArray = __spreadArrays(this.anyArray);
        console.timeEnd('useExtendOperation');
    };
    NewClass.prototype.useForLoop = function () {
        console.time('useForLoop');
        var newArray = [];
        newArray.length = this.arraySize;
        for (var i = 0; i < this.arraySize; ++i) {
            newArray[i] = this.anyArray[i];
        }
        console.timeEnd('useForLoop');
    };
    NewClass.prototype.usePushWithForLoop = function () {
        console.time('usePushWithForLoop');
        var newArray = [];
        for (var i = 0; i < this.arraySize; ++i) {
            newArray.push(this.anyArray[i]);
        }
        console.timeEnd('usePushWithForLoop');
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvdGVzdC9Db3B5QXJyYXlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1DQztRQWpDRyxjQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxHQUFHLENBQUM7O0lBZ0M1QixDQUFDO0lBOUJHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsUUFBUSxrQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQWtCLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBbENnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUM1QjtJQUFELGVBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUNqRDtrQkFuQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBhbnlBcnJheTogYW55W10gPSBbXTtcbiAgICBhcnJheVNpemU6IG51bWJlciA9IDFlNjtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuYW55QXJyYXkgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuYXJyYXlTaXplfSwgKHYsIGkpID0+IGkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgYW55QXJyYXkgaXMgcmVhZHlgKTtcbiAgICB9XG5cbiAgICB1c2VFeHRlbmRPcGVyYXRpb24gKCkge1xuICAgICAgICBjb25zb2xlLnRpbWUoJ3VzZUV4dGVuZE9wZXJhdGlvbicpO1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgbmV3QXJyYXkgPSBbLi4udGhpcy5hbnlBcnJheV07XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgndXNlRXh0ZW5kT3BlcmF0aW9uJyk7XG4gICAgfVxuXG4gICAgdXNlRm9yTG9vcCAoKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgndXNlRm9yTG9vcCcpO1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgbmV3QXJyYXkubGVuZ3RoID0gdGhpcy5hcnJheVNpemU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheVNpemU7ICsraSkge1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSB0aGlzLmFueUFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgndXNlRm9yTG9vcCcpO1xuICAgIH1cblxuICAgIHVzZVB1c2hXaXRoRm9yTG9vcCAoKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgndXNlUHVzaFdpdGhGb3JMb29wJyk7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlTaXplOyArK2kpIHtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2godGhpcy5hbnlBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS50aW1lRW5kKCd1c2VQdXNoV2l0aEZvckxvb3AnKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/optimize/LineRectTestOptimize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '952d92PBitJh7yo3CGeLH2n', 'LineRectTestOptimize');
// Script/optimize/LineRectTestOptimize.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineRectTestOptimize = /** @class */ (function () {
    function LineRectTestOptimize() {
    }
    LineRectTestOptimize.lineRect = function (a1, a2, b) {
        this.r0PosTemp.x = b.x;
        this.r0PosTemp.y = b.y;
        this.r1PosTemp.x = b.x;
        this.r1PosTemp.y = b.yMax;
        this.r2PosTemp.x = b.xMax;
        this.r2PosTemp.y = b.yMax;
        this.r3PosTemp.x = b.xMax;
        this.r3PosTemp.y = b.y;
        if (cc.Intersection.lineLine(a1, a2, this.r0PosTemp, this.r1PosTemp))
            return true;
        if (cc.Intersection.lineLine(a1, a2, this.r1PosTemp, this.r2PosTemp))
            return true;
        if (cc.Intersection.lineLine(a1, a2, this.r2PosTemp, this.r3PosTemp))
            return true;
        if (cc.Intersection.lineLine(a1, a2, this.r3PosTemp, this.r0PosTemp))
            return true;
        return false;
    };
    LineRectTestOptimize.r0PosTemp = new cc.Vec2(0, 0);
    LineRectTestOptimize.r1PosTemp = new cc.Vec2(0, 0);
    LineRectTestOptimize.r2PosTemp = new cc.Vec2(0, 0);
    LineRectTestOptimize.r3PosTemp = new cc.Vec2(0, 0);
    return LineRectTestOptimize;
}());
exports.default = LineRectTestOptimize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvb3B0aW1pemUvTGluZVJlY3RUZXN0T3B0aW1pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBaUNBLENBQUM7SUExQmlCLDZCQUFRLEdBQXRCLFVBQXlCLEVBQVcsRUFBRSxFQUFXLEVBQUUsQ0FBVTtRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTNCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBSyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRTtZQUNuRSxPQUFPLElBQUksQ0FBQztRQUVoQixJQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFO1lBQ25FLE9BQU8sSUFBSSxDQUFDO1FBRWhCLElBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUU7WUFDbkUsT0FBTyxJQUFJLENBQUM7UUFFaEIsSUFBSyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRTtZQUNuRSxPQUFPLElBQUksQ0FBQztRQUVoQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBOUJNLDhCQUFTLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2Qyw4QkFBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsOEJBQVMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLDhCQUFTLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQTRCbEQsMkJBQUM7Q0FqQ0QsQUFpQ0MsSUFBQTtrQkFqQ29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVSZWN0VGVzdE9wdGltaXplIHtcblxuICAgIHN0YXRpYyByMFBvc1RlbXA6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICBzdGF0aWMgcjFQb3NUZW1wOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgc3RhdGljIHIyUG9zVGVtcDogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xuICAgIHN0YXRpYyByM1Bvc1RlbXA6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGxpbmVSZWN0ICggYTE6IGNjLlZlYzIsIGEyOiBjYy5WZWMyLCBiOiBjYy5SZWN0ICkge1xuICAgICAgICB0aGlzLnIwUG9zVGVtcC54ID0gIGIueDtcbiAgICAgICAgdGhpcy5yMFBvc1RlbXAueSA9ICBiLnk7XG4gICAgICAgIHRoaXMucjFQb3NUZW1wLnggPSAgYi54O1xuICAgICAgICB0aGlzLnIxUG9zVGVtcC55ID0gIGIueU1heDtcblxuICAgICAgICB0aGlzLnIyUG9zVGVtcC54ID0gIGIueE1heDtcbiAgICAgICAgdGhpcy5yMlBvc1RlbXAueSA9ICBiLnlNYXg7XG5cbiAgICAgICAgdGhpcy5yM1Bvc1RlbXAueCA9ICBiLnhNYXg7XG4gICAgICAgIHRoaXMucjNQb3NUZW1wLnkgPSAgYi55O1xuICAgIFxuICAgICAgICBpZiAoIGNjLkludGVyc2VjdGlvbi5saW5lTGluZSggYTEsIGEyLCB0aGlzLnIwUG9zVGVtcCwgdGhpcy5yMVBvc1RlbXAgKSApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICAgICAgaWYgKCBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoIGExLCBhMiwgdGhpcy5yMVBvc1RlbXAsIHRoaXMucjJQb3NUZW1wICkgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgICAgIGlmICggY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKCBhMSwgYTIsIHRoaXMucjJQb3NUZW1wLCB0aGlzLnIzUG9zVGVtcCApIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIFxuICAgICAgICBpZiAoIGNjLkludGVyc2VjdGlvbi5saW5lTGluZSggYTEsIGEyLCB0aGlzLnIzUG9zVGVtcCwgdGhpcy5yMFBvc1RlbXAgKSApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/normal/LineRectTestNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e34567U3GpHlbzIlUyEO7X/', 'LineRectTestNormal');
// Script/normal/LineRectTestNormal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineRectTestNormal = /** @class */ (function () {
    function LineRectTestNormal() {
    }
    LineRectTestNormal.lineRect = function (a1, a2, b) {
        var r0 = new cc.Vec2(b.x, b.y);
        var r1 = new cc.Vec2(b.x, b.yMax);
        var r2 = new cc.Vec2(b.xMax, b.yMax);
        var r3 = new cc.Vec2(b.xMax, b.y);
        if (this.lineLine(a1, a2, r0, r1))
            return true;
        if (this.lineLine(a1, a2, r1, r2))
            return true;
        if (this.lineLine(a1, a2, r2, r3))
            return true;
        if (this.lineLine(a1, a2, r3, r0))
            return true;
    };
    LineRectTestNormal.lineLine = function (a1, a2, b1, b2) {
        // jshint camelcase:false
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (u_b !== 0) {
            var ua = ua_t / u_b;
            var ub = ub_t / u_b;
            if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                return true;
            }
        }
        return false;
    };
    return LineRectTestNormal;
}());
exports.default = LineRectTestNormal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbm9ybWFsL0xpbmVSZWN0VGVzdE5vcm1hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF1Q0EsQ0FBQztJQXJDaUIsMkJBQVEsR0FBdEIsVUFBeUIsRUFBVyxFQUFFLEVBQVcsRUFBRSxDQUFVO1FBQ3pELElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3ZDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUVwQyxJQUFLLElBQUksQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDO1FBRWhCLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUM7UUFFaEIsSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTtZQUNoQyxPQUFPLElBQUksQ0FBQztRQUVoQixJQUFLLElBQUksQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFYSwyQkFBUSxHQUF0QixVQUF5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ25DLHlCQUF5QjtRQUV6QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RSxJQUFLLEdBQUcsS0FBSyxDQUFDLEVBQUc7WUFDYixJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7WUFFcEIsSUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFHO2dCQUM1QyxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVJlY3RUZXN0Tm9ybWFsIHtcbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGxpbmVSZWN0ICggYTE6IGNjLlZlYzIsIGEyOiBjYy5WZWMyLCBiOiBjYy5SZWN0KSB7XG4gICAgICAgIHZhciByMCA9IG5ldyBjYy5WZWMyKCBiLngsIGIueSApO1xuICAgICAgICB2YXIgcjEgPSBuZXcgY2MuVmVjMiggYi54LCBiLnlNYXggKTtcbiAgICAgICAgdmFyIHIyID0gbmV3IGNjLlZlYzIoIGIueE1heCwgYi55TWF4ICk7XG4gICAgICAgIHZhciByMyA9IG5ldyBjYy5WZWMyKCBiLnhNYXgsIGIueSApO1xuICAgIFxuICAgICAgICBpZiAoIHRoaXMubGluZUxpbmUoIGExLCBhMiwgcjAsIHIxICkgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgICAgIGlmICggdGhpcy5saW5lTGluZSggYTEsIGEyLCByMSwgcjIgKSApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICAgICAgaWYgKCB0aGlzLmxpbmVMaW5lKCBhMSwgYTIsIHIyLCByMyApIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIFxuICAgICAgICBpZiAoIHRoaXMubGluZUxpbmUoIGExLCBhMiwgcjMsIHIwICkgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsaW5lTGluZSAoIGExLCBhMiwgYjEsIGIyICkge1xuICAgICAgICAvLyBqc2hpbnQgY2FtZWxjYXNlOmZhbHNlXG4gICAgXG4gICAgICAgIHZhciB1YV90ID0gKGIyLnggLSBiMS54KSAqIChhMS55IC0gYjEueSkgLSAoYjIueSAtIGIxLnkpICogKGExLnggLSBiMS54KTtcbiAgICAgICAgdmFyIHViX3QgPSAoYTIueCAtIGExLngpICogKGExLnkgLSBiMS55KSAtIChhMi55IC0gYTEueSkgKiAoYTEueCAtIGIxLngpO1xuICAgICAgICB2YXIgdV9iICA9IChiMi55IC0gYjEueSkgKiAoYTIueCAtIGExLngpIC0gKGIyLnggLSBiMS54KSAqIChhMi55IC0gYTEueSk7XG4gICAgXG4gICAgICAgIGlmICggdV9iICE9PSAwICkge1xuICAgICAgICAgICAgdmFyIHVhID0gdWFfdCAvIHVfYjtcbiAgICAgICAgICAgIHZhciB1YiA9IHViX3QgLyB1X2I7XG4gICAgXG4gICAgICAgICAgICBpZiAoIDAgPD0gdWEgJiYgdWEgPD0gMSAmJiAwIDw9IHViICYmIHViIDw9IDEgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/normal/BallLineTestNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbm9ybWFsL0JhbGxMaW5lVGVzdE5vcm1hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFaEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUE2RUM7UUEzRUcsT0FBQyxHQUFZLElBQUksQ0FBQztRQUVsQixPQUFDLEdBQVksSUFBSSxDQUFDO1FBRWxCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBbUV2QixDQUFDO0lBakVHLG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEYsZ0VBQWdFO0lBQ3BFLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sU0FBaUI7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRWpELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxR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QUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUE1RWdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNkV0QztJQUFELHlCQUFDO0NBN0VELEFBNkVDLENBN0UrQyxFQUFFLENBQUMsU0FBUyxHQTZFM0Q7a0JBN0VvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluZVJlY3RUZXN0Tm9ybWFsIGZyb20gXCIuL0xpbmVSZWN0VGVzdE5vcm1hbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxMaW5lVGVzdE5vcm1hbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICB2OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGg6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIGdyYXBoaWNzUG9vbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBiYWxsSUQ6IG51bWJlciA9IDA7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnYgPSBjYy5maW5kKFwiQ2FudmFzL1ZcIik7XG4gICAgICAgIHRoaXMuaCA9IGNjLmZpbmQoXCJDYW52YXMvSFwiKTtcbiAgICAgICAgdGhpcy5ncmFwaGljc1Bvb2wgPSBjYy5maW5kKFwiQ2FudmFzL2dyYXBoaWNzUG9vbFwiKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3NQb29sLmNoaWxkcmVuW3RoaXMuYmFsbElEXS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZGVmYXVsdENsaXAuc3BlZWQgPSAwLjc7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy52IHx8ICF0aGlzLmggfHwgIXRoaXMuZ3JhcGhpY3MpIHJldHVybjtcblxuICAgICAgICB0aGlzLnVwZGF0ZUdyYXBoaWNzQ29sb3IoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnZMaW5lVGVzdCgpO1xuICAgICAgICB0aGlzLmhMaW5lVGVzdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUdyYXBoaWNzQ29sb3IgKCkge1xuICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4gICAgICAgIHZhciBnID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiAgICAgICAgdmFyIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuY29sb3IociwgZywgYik7XG4gICAgfVxuXG4gICAgdkxpbmVUZXN0ICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnYuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2MU5vZGVQb3MgPSB0aGlzLnYuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgdjFXb3JsZFBvcyA9IHRoaXMudi5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodjFOb2RlUG9zKTtcbiAgICAgICAgICAgIHZhciBkcmF3UG9zMSA9IHRoaXMuZ3JhcGhpY3NQb29sLmNvbnZlcnRUb05vZGVTcGFjZUFSKHYxV29ybGRQb3MpO1xuXG4gICAgICAgICAgICB2YXIgdjJOb2RlUG9zID0gdGhpcy52LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIHYyV29ybGRQb3MgPSB0aGlzLnYuY2hpbGRyZW5baV0uY29udmVydFRvV29ybGRTcGFjZUFSKHYyTm9kZVBvcyk7XG4gICAgICAgICAgICB2YXIgZHJhd1BvczIgPSB0aGlzLmdyYXBoaWNzUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2MldvcmxkUG9zKTtcblxuICAgICAgICAgICAgdmFyIHZQb3MxID0gY2MudjIodjFXb3JsZFBvcy54LCB2MVdvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIHZQb3MyID0gY2MudjIodjJXb3JsZFBvcy54LCB2MldvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIHRlc3RSZXN1bHQgPSBMaW5lUmVjdFRlc3ROb3JtYWwubGluZVJlY3QodlBvczEsIHZQb3MyLCB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkpO1xuICAgICAgICAgICAgaWYgKHRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhkcmF3UG9zMS54LCBkcmF3UG9zMS55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhkcmF3UG9zMi54LCBkcmF3UG9zMi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaExpbmVUZXN0ICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmguY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBoMU5vZGVQb3MgPSB0aGlzLmguY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgaDFXb3JsZFBvcyA9IHRoaXMuaC5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaDFOb2RlUG9zKTtcbiAgICAgICAgICAgIHZhciBkcmF3UG9zMSA9IHRoaXMuZ3JhcGhpY3NQb29sLmNvbnZlcnRUb05vZGVTcGFjZUFSKGgxV29ybGRQb3MpO1xuXG4gICAgICAgICAgICB2YXIgaDJOb2RlUG9zID0gdGhpcy5oLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIGgyV29ybGRQb3MgPSB0aGlzLmguY2hpbGRyZW5baV0uY29udmVydFRvV29ybGRTcGFjZUFSKGgyTm9kZVBvcyk7XG4gICAgICAgICAgICB2YXIgZHJhd1BvczIgPSB0aGlzLmdyYXBoaWNzUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihoMldvcmxkUG9zKTtcblxuICAgICAgICAgICAgdmFyIGhQb3MxID0gY2MudjIoaDFXb3JsZFBvcy54LCBoMVdvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIGhQb3MyID0gY2MudjIoaDJXb3JsZFBvcy54LCBoMldvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIHRlc3RSZXN1bHQgPSBMaW5lUmVjdFRlc3ROb3JtYWwubGluZVJlY3QoaFBvczEsIGhQb3MyLCB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkpO1xuICAgICAgICAgICAgaWYgKHRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhkcmF3UG9zMS54LCBkcmF3UG9zMS55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhkcmF3UG9zMi54LCBkcmF3UG9zMi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/FunctionTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25295r6EhRPyIMh4eUXPBFV', 'FunctionTest');
// Script/test/FunctionTest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageDataArray = [];
        _this.imageWidth = 100;
        _this.imageHeight = 100;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        //填充 imageDataArray 数据
        var imageDataLength = this.imageWidth * this.imageHeight * 4;
        for (var i = 0; i < this.imageWidth * imageDataLength; i++) {
            this.imageDataArray[i] = {
                type: "gray",
                r: 1,
                g: 1,
                b: 1,
                a: 1
            };
        }
        console.log("imageDataArray fill finished");
    };
    NewClass.prototype.functionTestOptimized = function () {
        this.convertImageDataOptimized(this.imageDataArray);
    };
    NewClass.prototype.functionTestNormal = function () {
        this.convertImageData(this.imageDataArray);
    };
    NewClass.prototype.convertImageData = function (imageData) {
        console.time("functionTestNormal");
        var newImageData = [];
        for (var i = 0; i < imageData.length; i++) {
            var pixel = imageData[i];
            if (pixel.type === "rgba") {
                newImageData.push(pixel);
            }
            else if (pixel.type === "gray") {
                var data = pixel.r * 0.59 + pixel.g * 0.3 + pixel.b * 0.1;
                newImageData.push(data);
            }
        }
        console.timeEnd("functionTestNormal");
        return newImageData;
    };
    NewClass.prototype.convertImageDataOptimized = function (imageData) {
        console.time("functionTestOptimized");
        var newImageData = [];
        newImageData.length = imageData.length;
        if (imageData[0].type === "rgba") {
            for (var i = 0; i < imageData.length; i++) {
                var pixel = imageData[i];
                newImageData[i] = pixel;
            }
        }
        else if (imageData[0].type === "gray") {
            for (var i = 0; i < imageData.length; i++) {
                var pixel = imageData[i];
                var data = pixel.r * 0.59 + pixel.g * 0.3 + pixel.b * 0.1;
                newImageData[i] = data;
            }
        }
        console.timeEnd("functionTestOptimized");
        return newImageData;
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvdGVzdC9GdW5jdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpRUM7UUEvREcsb0JBQWMsR0FBVSxFQUFFLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIsaUJBQVcsR0FBVyxHQUFHLENBQUM7O0lBNEQ5QixDQUFDO0lBMURHLHlCQUFNLEdBQU47UUFDSSxzQkFBc0I7UUFDdEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDckIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUCxDQUFBO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHdDQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixTQUFTO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQzFELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQXlCLEdBQXpCLFVBQTBCLFNBQVM7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixZQUFZLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1NBQ0o7YUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMxRCxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0o7UUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQWhFZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlFNUI7SUFBRCxlQUFDO0NBakVELEFBaUVDLENBakVxQyxFQUFFLENBQUMsU0FBUyxHQWlFakQ7a0JBakVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBpbWFnZURhdGFBcnJheTogYW55W10gPSBbXTtcblxuICAgIGltYWdlV2lkdGg6IG51bWJlciA9IDEwMDtcbiAgICBpbWFnZUhlaWdodDogbnVtYmVyID0gMTAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL+Whq+WFhSBpbWFnZURhdGFBcnJheSDmlbDmja5cbiAgICAgICAgdmFyIGltYWdlRGF0YUxlbmd0aCA9IHRoaXMuaW1hZ2VXaWR0aCAqIHRoaXMuaW1hZ2VIZWlnaHQgKiA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VXaWR0aCAqIGltYWdlRGF0YUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlRGF0YUFycmF5W2ldID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZ3JheVwiLFxuICAgICAgICAgICAgICAgIHI6IDEsXG4gICAgICAgICAgICAgICAgZzogMSxcbiAgICAgICAgICAgICAgICBiOiAxLFxuICAgICAgICAgICAgICAgIGE6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlRGF0YUFycmF5IGZpbGwgZmluaXNoZWRcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb25UZXN0T3B0aW1pemVkKCkge1xuICAgICAgICB0aGlzLmNvbnZlcnRJbWFnZURhdGFPcHRpbWl6ZWQodGhpcy5pbWFnZURhdGFBcnJheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb25UZXN0Tm9ybWFsKCkge1xuICAgICAgICB0aGlzLmNvbnZlcnRJbWFnZURhdGEodGhpcy5pbWFnZURhdGFBcnJheSlcbiAgICB9XG5cbiAgICBjb252ZXJ0SW1hZ2VEYXRhKGltYWdlRGF0YSkge1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJmdW5jdGlvblRlc3ROb3JtYWxcIik7XG4gICAgICAgIHZhciBuZXdJbWFnZURhdGEgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gaW1hZ2VEYXRhW2ldO1xuICAgICAgICAgICAgaWYgKHBpeGVsLnR5cGUgPT09IFwicmdiYVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3SW1hZ2VEYXRhLnB1c2gocGl4ZWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwaXhlbC50eXBlID09PSBcImdyYXlcIikge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcGl4ZWwuciAqIDAuNTkgKyBwaXhlbC5nICogMC4zICsgcGl4ZWwuYiAqIDAuMTtcbiAgICAgICAgICAgICAgICBuZXdJbWFnZURhdGEucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJmdW5jdGlvblRlc3ROb3JtYWxcIik7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZURhdGE7XG4gICAgfVxuXG4gICAgY29udmVydEltYWdlRGF0YU9wdGltaXplZChpbWFnZURhdGEpIHtcbiAgICAgICAgY29uc29sZS50aW1lKFwiZnVuY3Rpb25UZXN0T3B0aW1pemVkXCIpO1xuICAgICAgICB2YXIgbmV3SW1hZ2VEYXRhID0gW107XG4gICAgICAgIG5ld0ltYWdlRGF0YS5sZW5ndGggPSBpbWFnZURhdGEubGVuZ3RoO1xuICAgICAgICBpZiAoaW1hZ2VEYXRhWzBdLnR5cGUgPT09IFwicmdiYVwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gaW1hZ2VEYXRhW2ldO1xuICAgICAgICAgICAgICAgIG5ld0ltYWdlRGF0YVtpXSA9IHBpeGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGltYWdlRGF0YVswXS50eXBlID09PSBcImdyYXlcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IGltYWdlRGF0YVtpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHBpeGVsLnIgKiAwLjU5ICsgcGl4ZWwuZyAqIDAuMyArIHBpeGVsLmIgKiAwLjE7XG4gICAgICAgICAgICAgICAgbmV3SW1hZ2VEYXRhW2ldID0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJmdW5jdGlvblRlc3RPcHRpbWl6ZWRcIik7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZURhdGE7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

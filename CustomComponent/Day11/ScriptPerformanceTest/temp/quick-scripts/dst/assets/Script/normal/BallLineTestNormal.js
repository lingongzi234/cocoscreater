
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbm9ybWFsL0JhbGxMaW5lVGVzdE5vcm1hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFaEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUE2RUM7UUEzRUcsT0FBQyxHQUFZLElBQUksQ0FBQztRQUVsQixPQUFDLEdBQVksSUFBSSxDQUFDO1FBRWxCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBbUV2QixDQUFDO0lBakVHLG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEYsZ0VBQWdFO0lBQ3BFLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sU0FBaUI7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRWpELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWxFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLFVBQVUsR0FBRyw0QkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztZQUM5RixJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWxFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLFVBQVUsR0FBRyw0QkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztZQUM5RixJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUE1RWdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNkV0QztJQUFELHlCQUFDO0NBN0VELEFBNkVDLENBN0UrQyxFQUFFLENBQUMsU0FBUyxHQTZFM0Q7a0JBN0VvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluZVJlY3RUZXN0Tm9ybWFsIGZyb20gXCIuL0xpbmVSZWN0VGVzdE5vcm1hbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxMaW5lVGVzdE5vcm1hbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICB2OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGg6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIGdyYXBoaWNzUG9vbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBiYWxsSUQ6IG51bWJlciA9IDA7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnYgPSBjYy5maW5kKFwiQ2FudmFzL1ZcIik7XG4gICAgICAgIHRoaXMuaCA9IGNjLmZpbmQoXCJDYW52YXMvSFwiKTtcbiAgICAgICAgdGhpcy5ncmFwaGljc1Bvb2wgPSBjYy5maW5kKFwiQ2FudmFzL2dyYXBoaWNzUG9vbFwiKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3NQb29sLmNoaWxkcmVuW3RoaXMuYmFsbElEXS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZGVmYXVsdENsaXAuc3BlZWQgPSAwLjc7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy52IHx8ICF0aGlzLmggfHwgIXRoaXMuZ3JhcGhpY3MpIHJldHVybjtcblxuICAgICAgICB0aGlzLnVwZGF0ZUdyYXBoaWNzQ29sb3IoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnZMaW5lVGVzdCgpO1xuICAgICAgICB0aGlzLmhMaW5lVGVzdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUdyYXBoaWNzQ29sb3IgKCkge1xuICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4gICAgICAgIHZhciBnID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiAgICAgICAgdmFyIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuY29sb3IociwgZywgYik7XG4gICAgfVxuXG4gICAgdkxpbmVUZXN0ICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnYuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2MU5vZGVQb3MgPSB0aGlzLnYuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgdjFXb3JsZFBvcyA9IHRoaXMudi5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodjFOb2RlUG9zKTtcbiAgICAgICAgICAgIHZhciBkcmF3UG9zMSA9IHRoaXMuZ3JhcGhpY3NQb29sLmNvbnZlcnRUb05vZGVTcGFjZUFSKHYxV29ybGRQb3MpO1xuXG4gICAgICAgICAgICB2YXIgdjJOb2RlUG9zID0gdGhpcy52LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIHYyV29ybGRQb3MgPSB0aGlzLnYuY2hpbGRyZW5baV0uY29udmVydFRvV29ybGRTcGFjZUFSKHYyTm9kZVBvcyk7XG4gICAgICAgICAgICB2YXIgZHJhd1BvczIgPSB0aGlzLmdyYXBoaWNzUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih2MldvcmxkUG9zKTtcblxuICAgICAgICAgICAgdmFyIHZQb3MxID0gY2MudjIodjFXb3JsZFBvcy54LCB2MVdvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIHZQb3MyID0gY2MudjIodjJXb3JsZFBvcy54LCB2MldvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIHRlc3RSZXN1bHQgPSBMaW5lUmVjdFRlc3ROb3JtYWwubGluZVJlY3QodlBvczEsIHZQb3MyLCB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkpO1xuICAgICAgICAgICAgaWYgKHRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhkcmF3UG9zMS54LCBkcmF3UG9zMS55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhkcmF3UG9zMi54LCBkcmF3UG9zMi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaExpbmVUZXN0ICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmguY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBoMU5vZGVQb3MgPSB0aGlzLmguY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgaDFXb3JsZFBvcyA9IHRoaXMuaC5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaDFOb2RlUG9zKTtcbiAgICAgICAgICAgIHZhciBkcmF3UG9zMSA9IHRoaXMuZ3JhcGhpY3NQb29sLmNvbnZlcnRUb05vZGVTcGFjZUFSKGgxV29ybGRQb3MpO1xuXG4gICAgICAgICAgICB2YXIgaDJOb2RlUG9zID0gdGhpcy5oLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIGgyV29ybGRQb3MgPSB0aGlzLmguY2hpbGRyZW5baV0uY29udmVydFRvV29ybGRTcGFjZUFSKGgyTm9kZVBvcyk7XG4gICAgICAgICAgICB2YXIgZHJhd1BvczIgPSB0aGlzLmdyYXBoaWNzUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihoMldvcmxkUG9zKTtcblxuICAgICAgICAgICAgdmFyIGhQb3MxID0gY2MudjIoaDFXb3JsZFBvcy54LCBoMVdvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIGhQb3MyID0gY2MudjIoaDJXb3JsZFBvcy54LCBoMldvcmxkUG9zLnkpO1xuICAgICAgICAgICAgdmFyIHRlc3RSZXN1bHQgPSBMaW5lUmVjdFRlc3ROb3JtYWwubGluZVJlY3QoaFBvczEsIGhQb3MyLCB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkpO1xuICAgICAgICAgICAgaWYgKHRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhkcmF3UG9zMS54LCBkcmF3UG9zMS55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhkcmF3UG9zMi54LCBkcmF3UG9zMi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
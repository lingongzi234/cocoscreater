"use strict";
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
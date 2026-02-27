"use strict";
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
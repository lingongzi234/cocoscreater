
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
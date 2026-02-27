
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
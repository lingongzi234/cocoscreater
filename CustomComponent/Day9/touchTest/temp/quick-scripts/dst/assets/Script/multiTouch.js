
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/multiTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'multiTouch');
// Script/multiTouch.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goldSpf = null;
        _this.goldPool = null;
        return _this;
    }
    Helloworld.prototype.onLoad = function () {
        // 开启多指触摸
        cc.macro.ENABLE_MULTI_TOUCH = true;
        // cc.macro.ENABLE_MULTI_TOUCH = false;
    };
    Helloworld.prototype.onEnable = function () {
        // for (let i = 0; i < this.goldPool.childrenCount; i++) {
        //     this.goldPool.children[i].on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        //     this.goldPool.children[i].on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        // }
        cc.find('Canvas').on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.find('Canvas').on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    Helloworld.prototype.onTouchMove = function (event) {
        // console.log(event.getID());
        var touchLocation = event.getLocation();
        var newGoldPos = this.goldPool.convertToNodeSpaceAR(touchLocation);
        event.target.setPosition(newGoldPos);
    };
    Helloworld.prototype.onTouchStart = function (event) {
        // event.getID();
        // console.log(event.getTouches());
        console.log(event.getID());
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Helloworld.prototype, "goldSpf", void 0);
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "goldPool", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbXVsdGlUb3VjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQW1DQztRQWhDRyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQVksSUFBSSxDQUFDOztJQTZCN0IsQ0FBQztJQTNCRywyQkFBTSxHQUFOO1FBQ0ksU0FBUztRQUNULEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLHVDQUF1QztJQUMvQyxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLDBEQUEwRDtRQUMxRCwwRkFBMEY7UUFDMUYsNEZBQTRGO1FBQzVGLElBQUk7UUFDSixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFhLEtBQTBCO1FBQ25DLDhCQUE4QjtRQUM5QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFjLEtBQTBCO1FBQ3BDLGlCQUFpQjtRQUNqQixtQ0FBbUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ007SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQU5SLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtQzlCO0lBQUQsaUJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBbUNuRDtrQkFuQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvd29ybGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGdvbGRTcGY6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdvbGRQb29sOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8g5byA5ZCv5aSa5oyH6Kem5pG4XG4gICAgICAgIGNjLm1hY3JvLkVOQUJMRV9NVUxUSV9UT1VDSCA9IHRydWU7XG4gICAgICAgICAgICAvLyBjYy5tYWNyby5FTkFCTEVfTVVMVElfVE9VQ0ggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nb2xkUG9vbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5baV0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIC8vICAgICB0aGlzLmdvbGRQb29sLmNoaWxkcmVuW2ldLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY2MuZmluZCgnQ2FudmFzJykub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzJykub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmdldElEKCkpO1xuICAgICAgICBsZXQgdG91Y2hMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBuZXdHb2xkUG9zID0gdGhpcy5nb2xkUG9vbC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvY2F0aW9uKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNldFBvc2l0aW9uKG5ld0dvbGRQb3MpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgLy8gZXZlbnQuZ2V0SUQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZ2V0VG91Y2hlcygpKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZ2V0SUQoKSk7XG4gICAgfVxufVxuIl19
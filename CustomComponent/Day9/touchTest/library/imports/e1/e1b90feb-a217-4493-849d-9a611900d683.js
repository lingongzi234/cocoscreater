"use strict";
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
"use strict";
cc._RF.push(module, '2f7c5oswVlDkqhqvG0NF/V0', 'FPSLabel');
// CommonScript/FPSLabel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, disallowMultiple = _a.disallowMultiple;
var FPSLabel = /** @class */ (function (_super) {
    __extends(FPSLabel, _super);
    function FPSLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._total = 0;
        _this._fps = 0;
        _this._time = 0;
        return _this;
    }
    FPSLabel_1 = FPSLabel;
    FPSLabel.prototype.onLoad = function () {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        // cc.game.addPersistRootNode(this.node);
        FPSLabel_1.loadTimeLab = this.node.getChildByName("loadTime").getComponent(cc.Label);
        // FPSLabel.preloadProgressLab = this.node.getChildByName("preloadProgress").getComponent(cc.Label);
        // FPSLabel.preloadTimeLab = this.node.getChildByName("preloadTime").getComponent(cc.Label);
        // cc.debug.setDisplayStats(true);
        // this._time = performance.now();
        // cc.director.on(cc.Director.EVENT_AFTER_DRAW, ()=>{
        //     var now = performance.now();
        //     var deletaTime = now - this._time;
        //     this._total++;
        //     if (deletaTime >= 500) {
        //         this._fps = Math.floor((1000 * this._total / deletaTime) * 100) / 100;
        //         this.node.getComponent(cc.Label).string = "fps: " + this._fps;
        //         this._total = 0;
        //         this._time = now;
        //     }
        // }, this)
    };
    var FPSLabel_1;
    FPSLabel.loadTimeLab = null;
    FPSLabel.preloadProgressLab = null;
    FPSLabel.preloadTimeLab = null;
    FPSLabel = FPSLabel_1 = __decorate([
        ccclass,
        requireComponent(cc.Label),
        disallowMultiple
    ], FPSLabel);
    return FPSLabel;
}(cc.Component));
exports.default = FPSLabel;

cc._RF.pop();
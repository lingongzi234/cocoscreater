"use strict";
cc._RF.push(module, 'b8bd6EherZBX6Bk5LcMdAws', 'LoadParticleTest');
// LoadParticleTest.ts

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
        _this.particleBundle = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        cc.assetManager.loadBundle("particle", function (err, particleBundle) {
            if (!err) {
                _this.particleBundle = particleBundle;
            }
        });
    };
    NewClass.prototype.loadParticleWithTIFF = function () {
        var _this = this;
        console.log("start emit test time is: " + Date.now() + " ms");
        this.particleBundle && this.particleBundle.load("LeavesWithTIFF", cc.Prefab, function (err, particle) {
            if (!err) {
                var node = cc.instantiate(particle);
                _this.node.addChild(node);
            }
        });
    };
    NewClass.prototype.loadParticleWidthPng = function () {
        var _this = this;
        console.log("start emit test time is: " + Date.now() + " ms");
        this.particleBundle && this.particleBundle.load("LeavesWithPng", cc.Prefab, function (err, particle) {
            if (!err) {
                var node = cc.instantiate(particle);
                _this.node.addChild(node);
            }
        });
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
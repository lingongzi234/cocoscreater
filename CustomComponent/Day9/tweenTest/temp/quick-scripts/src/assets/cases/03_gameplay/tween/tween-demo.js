"use strict";
cc._RF.push(module, 'a2001j2qoBJ86uYnqIx0Zrc', 'tween-demo');
// cases/03_gameplay/tween/tween-demo.ts

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
        _this.nodes = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.startTweenAnimation = function () {
        var nodes = this.nodes;
        var _loop_1 = function (i) {
            var node = nodes[i];
            cc.tween(node)
                .delay(0.5 + i * 0.2)
                .repeat(3, cc.tween(node)
                .set({ opacity: 0, scale: 10, x: 0, angle: 0 })
                .parallel(cc.tween().to(1, { opacity: 255, scale: 1 }, { easing: 'quintInOut' }), cc.tween().to(2.5, { x: node.x }, { easing: 'backOut' }))
                .delay(0.5)
                .to(0.8, { angle: 360 }, { easing: 'cubicInOut' })
                .delay(1)
                .to(0.3, { opacity: 0, scale: 3 }, { easing: "quintIn" })
                .delay(1))
                .call(function () {
                console.log(node.name + " tween animation end");
            })
                .start();
        };
        for (var i = 0; i < nodes.length; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodes", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
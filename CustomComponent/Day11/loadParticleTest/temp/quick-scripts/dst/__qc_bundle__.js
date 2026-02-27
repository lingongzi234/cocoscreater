
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/CommonScript/FPSLabel');
require('./assets/LoadParticleTest');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/LoadParticleTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Mb2FkUGFydGljbGVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0JDO1FBN0JHLG9CQUFjLEdBQTJCLElBQUksQ0FBQzs7SUE2QmxELENBQUM7SUEzQkcseUJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBRyxFQUFFLGNBQWM7WUFDdkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixLQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQzthQUN4QztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVDQUFvQixHQUFwQjtRQUFBLGlCQVFDO1FBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBNEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBbUI7WUFDbEcsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVDQUFvQixHQUFwQjtRQUFBLGlCQVFDO1FBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBNEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQW1CO1lBQ2pHLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5QmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQjVCO0lBQUQsZUFBQztDQS9CRCxBQStCQyxDQS9CcUMsRUFBRSxDQUFDLFNBQVMsR0ErQmpEO2tCQS9Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRlBTTGFiZWwgZnJvbSBcIi4vQ29tbW9uU2NyaXB0L0ZQU0xhYmVsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcGFydGljbGVCdW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJwYXJ0aWNsZVwiLCAoZXJyLCBwYXJ0aWNsZUJ1bmRsZSk9PntcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUJ1bmRsZSA9IHBhcnRpY2xlQnVuZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvYWRQYXJ0aWNsZVdpdGhUSUZGICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0IGVtaXQgdGVzdCB0aW1lIGlzOiAke0RhdGUubm93KCl9IG1zYCk7XG4gICAgICAgIHRoaXMucGFydGljbGVCdW5kbGUgJiYgdGhpcy5wYXJ0aWNsZUJ1bmRsZS5sb2FkKFwiTGVhdmVzV2l0aFRJRkZcIiwgY2MuUHJlZmFiLCAoZXJyLCBwYXJ0aWNsZTogY2MuUHJlZmFiKT0+e1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHBhcnRpY2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9hZFBhcnRpY2xlV2lkdGhQbmcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnQgZW1pdCB0ZXN0IHRpbWUgaXM6ICR7RGF0ZS5ub3coKX0gbXNgKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZUJ1bmRsZSAmJiB0aGlzLnBhcnRpY2xlQnVuZGxlLmxvYWQoXCJMZWF2ZXNXaXRoUG5nXCIsIGNjLlByZWZhYiwgKGVyciwgcGFydGljbGU6IGNjLlByZWZhYik9PntcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwYXJ0aWNsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CommonScript/FPSLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb25TY3JpcHQvRlBTTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUEwRCxFQUFFLENBQUMsVUFBVSxFQUF0RSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxnQkFBZ0Isc0JBQWlCLENBQUM7QUFLOUU7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrQ0M7UUFoQ0csWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBOEJ0QixDQUFDO2lCQWxDb0IsUUFBUTtJQVl6Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDdkMseUNBQXlDO1FBRXpDLFVBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixvR0FBb0c7UUFDcEcsNEZBQTRGO1FBRTVGLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMscURBQXFEO1FBQ3JELG1DQUFtQztRQUNuQyx5Q0FBeUM7UUFDekMscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUMvQixpRkFBaUY7UUFDakYseUVBQXlFO1FBQ3pFLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsUUFBUTtRQUNSLFdBQVc7SUFDZixDQUFDOztJQTNCYSxvQkFBVyxHQUFhLElBQUksQ0FBQztJQUU3QiwyQkFBa0IsR0FBYSxJQUFJLENBQUM7SUFFcEMsdUJBQWMsR0FBYSxJQUFJLENBQUM7SUFWN0IsUUFBUTtRQUg1QixPQUFPO1FBQ1AsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBZ0I7T0FDSSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBkaXNhbGxvd011bHRpcGxlfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5MYWJlbClcbkBkaXNhbGxvd011bHRpcGxlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBfdG90YWw6IG51bWJlciA9IDA7XG4gICAgX2ZwczogbnVtYmVyID0gMDtcbiAgICBfdGltZTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFRpbWVMYWI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZFByb2dyZXNzTGFiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWRUaW1lTGFiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcblxuICAgICAgICBGUFNMYWJlbC5sb2FkVGltZUxhYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvYWRUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8vIEZQU0xhYmVsLnByZWxvYWRQcm9ncmVzc0xhYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByZWxvYWRQcm9ncmVzc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvLyBGUFNMYWJlbC5wcmVsb2FkVGltZUxhYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByZWxvYWRUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgLy8gY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgICAgICAvLyB0aGlzLl90aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsICgpPT57XG4gICAgICAgIC8vICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIC8vICAgICB2YXIgZGVsZXRhVGltZSA9IG5vdyAtIHRoaXMuX3RpbWU7XG4gICAgICAgIC8vICAgICB0aGlzLl90b3RhbCsrO1xuICAgICAgICAvLyAgICAgaWYgKGRlbGV0YVRpbWUgPj0gNTAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZnBzID0gTWF0aC5mbG9vcigoMTAwMCAqIHRoaXMuX3RvdGFsIC8gZGVsZXRhVGltZSkgKiAxMDApIC8gMTAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiZnBzOiBcIiArIHRoaXMuX2ZwcztcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl90b3RhbCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fdGltZSA9IG5vdztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgdGhpcylcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------


                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/CopyArrayTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6a631FWKFL4Zu6e8z4/RWI', 'CopyArrayTest');
// Script/test/CopyArrayTest.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anyArray = [];
        _this.arraySize = 1e6;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.anyArray = Array.from({ length: this.arraySize }, function (v, i) { return i; });
        console.log("anyArray is ready");
    };
    NewClass.prototype.useExtendOperation = function () {
        console.time('useExtendOperation');
        var newArray = [];
        newArray = __spreadArrays(this.anyArray);
        console.timeEnd('useExtendOperation');
    };
    NewClass.prototype.useForLoop = function () {
        console.time('useForLoop');
        var newArray = [];
        newArray.length = this.arraySize;
        for (var i = 0; i < this.arraySize; ++i) {
            newArray[i] = this.anyArray[i];
        }
        console.timeEnd('useForLoop');
    };
    NewClass.prototype.usePushWithForLoop = function () {
        console.time('usePushWithForLoop');
        var newArray = [];
        for (var i = 0; i < this.arraySize; ++i) {
            newArray.push(this.anyArray[i]);
        }
        console.timeEnd('usePushWithForLoop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvdGVzdC9Db3B5QXJyYXlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1DQztRQWpDRyxjQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxHQUFHLENBQUM7O0lBZ0M1QixDQUFDO0lBOUJHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsUUFBUSxrQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQWtCLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBbENnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUM1QjtJQUFELGVBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUNqRDtrQkFuQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBhbnlBcnJheTogYW55W10gPSBbXTtcbiAgICBhcnJheVNpemU6IG51bWJlciA9IDFlNjtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuYW55QXJyYXkgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuYXJyYXlTaXplfSwgKHYsIGkpID0+IGkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgYW55QXJyYXkgaXMgcmVhZHlgKTtcbiAgICB9XG5cbiAgICB1c2VFeHRlbmRPcGVyYXRpb24gKCkge1xuICAgICAgICBjb25zb2xlLnRpbWUoJ3VzZUV4dGVuZE9wZXJhdGlvbicpO1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgbmV3QXJyYXkgPSBbLi4udGhpcy5hbnlBcnJheV07XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgndXNlRXh0ZW5kT3BlcmF0aW9uJyk7XG4gICAgfVxuXG4gICAgdXNlRm9yTG9vcCAoKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgndXNlRm9yTG9vcCcpO1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgbmV3QXJyYXkubGVuZ3RoID0gdGhpcy5hcnJheVNpemU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheVNpemU7ICsraSkge1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSB0aGlzLmFueUFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgndXNlRm9yTG9vcCcpO1xuICAgIH1cblxuICAgIHVzZVB1c2hXaXRoRm9yTG9vcCAoKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgndXNlUHVzaFdpdGhGb3JMb29wJyk7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlTaXplOyArK2kpIHtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2godGhpcy5hbnlBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS50aW1lRW5kKCd1c2VQdXNoV2l0aEZvckxvb3AnKTtcbiAgICB9XG59XG4iXX0=
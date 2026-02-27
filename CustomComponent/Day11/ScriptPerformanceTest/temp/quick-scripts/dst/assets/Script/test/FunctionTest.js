
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/FunctionTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25295r6EhRPyIMh4eUXPBFV', 'FunctionTest');
// Script/test/FunctionTest.ts

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
        _this.imageDataArray = [];
        _this.imageWidth = 100;
        _this.imageHeight = 100;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        //填充 imageDataArray 数据
        var imageDataLength = this.imageWidth * this.imageHeight * 4;
        for (var i = 0; i < this.imageWidth * imageDataLength; i++) {
            this.imageDataArray[i] = {
                type: "gray",
                r: 1,
                g: 1,
                b: 1,
                a: 1
            };
        }
        console.log("imageDataArray fill finished");
    };
    NewClass.prototype.functionTestOptimized = function () {
        this.convertImageDataOptimized(this.imageDataArray);
    };
    NewClass.prototype.functionTestNormal = function () {
        this.convertImageData(this.imageDataArray);
    };
    NewClass.prototype.convertImageData = function (imageData) {
        console.time("functionTestNormal");
        var newImageData = [];
        for (var i = 0; i < imageData.length; i++) {
            var pixel = imageData[i];
            if (pixel.type === "rgba") {
                newImageData.push(pixel);
            }
            else if (pixel.type === "gray") {
                var data = pixel.r * 0.59 + pixel.g * 0.3 + pixel.b * 0.1;
                newImageData.push(data);
            }
        }
        console.timeEnd("functionTestNormal");
        return newImageData;
    };
    NewClass.prototype.convertImageDataOptimized = function (imageData) {
        console.time("functionTestOptimized");
        var newImageData = [];
        newImageData.length = imageData.length;
        if (imageData[0].type === "rgba") {
            for (var i = 0; i < imageData.length; i++) {
                var pixel = imageData[i];
                newImageData[i] = pixel;
            }
        }
        else if (imageData[0].type === "gray") {
            for (var i = 0; i < imageData.length; i++) {
                var pixel = imageData[i];
                var data = pixel.r * 0.59 + pixel.g * 0.3 + pixel.b * 0.1;
                newImageData[i] = data;
            }
        }
        console.timeEnd("functionTestOptimized");
        return newImageData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvdGVzdC9GdW5jdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpRUM7UUEvREcsb0JBQWMsR0FBVSxFQUFFLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIsaUJBQVcsR0FBVyxHQUFHLENBQUM7O0lBNEQ5QixDQUFDO0lBMURHLHlCQUFNLEdBQU47UUFDSSxzQkFBc0I7UUFDdEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDckIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUCxDQUFBO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHdDQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixTQUFTO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQzFELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQXlCLEdBQXpCLFVBQTBCLFNBQVM7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixZQUFZLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1NBQ0o7YUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMxRCxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0o7UUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQWhFZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlFNUI7SUFBRCxlQUFDO0NBakVELEFBaUVDLENBakVxQyxFQUFFLENBQUMsU0FBUyxHQWlFakQ7a0JBakVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBpbWFnZURhdGFBcnJheTogYW55W10gPSBbXTtcblxuICAgIGltYWdlV2lkdGg6IG51bWJlciA9IDEwMDtcbiAgICBpbWFnZUhlaWdodDogbnVtYmVyID0gMTAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL+Whq+WFhSBpbWFnZURhdGFBcnJheSDmlbDmja5cbiAgICAgICAgdmFyIGltYWdlRGF0YUxlbmd0aCA9IHRoaXMuaW1hZ2VXaWR0aCAqIHRoaXMuaW1hZ2VIZWlnaHQgKiA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VXaWR0aCAqIGltYWdlRGF0YUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlRGF0YUFycmF5W2ldID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZ3JheVwiLFxuICAgICAgICAgICAgICAgIHI6IDEsXG4gICAgICAgICAgICAgICAgZzogMSxcbiAgICAgICAgICAgICAgICBiOiAxLFxuICAgICAgICAgICAgICAgIGE6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlRGF0YUFycmF5IGZpbGwgZmluaXNoZWRcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb25UZXN0T3B0aW1pemVkKCkge1xuICAgICAgICB0aGlzLmNvbnZlcnRJbWFnZURhdGFPcHRpbWl6ZWQodGhpcy5pbWFnZURhdGFBcnJheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb25UZXN0Tm9ybWFsKCkge1xuICAgICAgICB0aGlzLmNvbnZlcnRJbWFnZURhdGEodGhpcy5pbWFnZURhdGFBcnJheSlcbiAgICB9XG5cbiAgICBjb252ZXJ0SW1hZ2VEYXRhKGltYWdlRGF0YSkge1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJmdW5jdGlvblRlc3ROb3JtYWxcIik7XG4gICAgICAgIHZhciBuZXdJbWFnZURhdGEgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gaW1hZ2VEYXRhW2ldO1xuICAgICAgICAgICAgaWYgKHBpeGVsLnR5cGUgPT09IFwicmdiYVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3SW1hZ2VEYXRhLnB1c2gocGl4ZWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwaXhlbC50eXBlID09PSBcImdyYXlcIikge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcGl4ZWwuciAqIDAuNTkgKyBwaXhlbC5nICogMC4zICsgcGl4ZWwuYiAqIDAuMTtcbiAgICAgICAgICAgICAgICBuZXdJbWFnZURhdGEucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJmdW5jdGlvblRlc3ROb3JtYWxcIik7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZURhdGE7XG4gICAgfVxuXG4gICAgY29udmVydEltYWdlRGF0YU9wdGltaXplZChpbWFnZURhdGEpIHtcbiAgICAgICAgY29uc29sZS50aW1lKFwiZnVuY3Rpb25UZXN0T3B0aW1pemVkXCIpO1xuICAgICAgICB2YXIgbmV3SW1hZ2VEYXRhID0gW107XG4gICAgICAgIG5ld0ltYWdlRGF0YS5sZW5ndGggPSBpbWFnZURhdGEubGVuZ3RoO1xuICAgICAgICBpZiAoaW1hZ2VEYXRhWzBdLnR5cGUgPT09IFwicmdiYVwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gaW1hZ2VEYXRhW2ldO1xuICAgICAgICAgICAgICAgIG5ld0ltYWdlRGF0YVtpXSA9IHBpeGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGltYWdlRGF0YVswXS50eXBlID09PSBcImdyYXlcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IGltYWdlRGF0YVtpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHBpeGVsLnIgKiAwLjU5ICsgcGl4ZWwuZyAqIDAuMyArIHBpeGVsLmIgKiAwLjE7XG4gICAgICAgICAgICAgICAgbmV3SW1hZ2VEYXRhW2ldID0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJmdW5jdGlvblRlc3RPcHRpbWl6ZWRcIik7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZURhdGE7XG4gICAgfVxufVxuIl19
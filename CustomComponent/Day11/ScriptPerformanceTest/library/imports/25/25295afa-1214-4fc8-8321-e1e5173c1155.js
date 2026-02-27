"use strict";
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
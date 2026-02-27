
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ImportNPMPackageAndJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffebbCijFVHr4cfpY2qpKHi', 'ImportNPMPackageAndJS');
// script/ImportNPMPackageAndJS.ts

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
var JSZip = require("jszip");
var GAME_CONST = require("./GameConst");
var ImportNPMPackageAndJS = /** @class */ (function (_super) {
    __extends(ImportNPMPackageAndJS, _super);
    function ImportNPMPackageAndJS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImportNPMPackageAndJS.prototype.start = function () {
        console.log(new JSZip());
        console.log(GAME_CONST);
    };
    ImportNPMPackageAndJS = __decorate([
        ccclass
    ], ImportNPMPackageAndJS);
    return ImportNPMPackageAndJS;
}(cc.Component));
exports.default = ImportNPMPackageAndJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSW1wb3J0TlBNUGFja2FnZUFuZEpTLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLDZCQUFnQztBQUNoQyx3Q0FBMkM7QUFHM0M7SUFBbUQseUNBQVk7SUFBL0Q7O0lBTUEsQ0FBQztJQUpHLHFDQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFMZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0FNekM7SUFBRCw0QkFBQztDQU5ELEFBTUMsQ0FOa0QsRUFBRSxDQUFDLFNBQVMsR0FNOUQ7a0JBTm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEpTWmlwID0gcmVxdWlyZShcImpzemlwXCIpO1xuaW1wb3J0IEdBTUVfQ09OU1QgPSByZXF1aXJlKFwiLi9HYW1lQ29uc3RcIik7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBvcnROUE1QYWNrYWdlQW5kSlMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXcgSlNaaXAoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEdBTUVfQ09OU1QpO1xuICAgIH1cbn1cbiJdfQ==
"use strict";
cc._RF.push(module, '4d043UoJ5dIAaNKFzMjIuhp', 'PropertyStudy');
// script/PropertyStudy.ts

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
var _auto = true;
var CocosVersion = cc.Enum({
    VERSION_1: 0,
    VERSION_2: 1,
    VERSION_3: 2,
});
var PropertyStudy = /** @class */ (function (_super) {
    __extends(PropertyStudy, _super);
    function PropertyStudy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.int = 1;
        // 目前编辑器中 slide 滑动条数值修改精度固定是 0.1，不受 slide 参数以及编辑器设置影响
        _this.float = 1;
        // 对于普通的浮点值修改，数值精度会受到 step 或编辑器设置的影响.
        // 如果需要使修改生效，则要先修改原属性名后回到编辑器，再回到脚本中改为原来的属性名即可
        _this.float2 = 1;
        _this.string = "Cocos";
        // 目前 readOnly 参数对多行文本输入框无效
        _this.string2 = "";
        _this.version = CocosVersion.VERSION_1;
        return _this;
    }
    Object.defineProperty(PropertyStudy.prototype, "auto", {
        get: function () {
            return _auto;
        },
        set: function (value) {
            _auto = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property({ type: cc.Label, displayName: "标题", tooltip: "某某界面的标题" })
    ], PropertyStudy.prototype, "title", void 0);
    __decorate([
        property({ type: cc.Integer, slide: true, min: 0, max: 100, visible: function () {
                if (_auto) {
                    return true;
                }
                else {
                    return false;
                }
            } })
    ], PropertyStudy.prototype, "int", void 0);
    __decorate([
        property({ type: cc.Float, slide: true, min: 0, max: 100 })
    ], PropertyStudy.prototype, "float", void 0);
    __decorate([
        property({ type: cc.Float, step: 0.1, min: 0, max: 100 })
    ], PropertyStudy.prototype, "float2", void 0);
    __decorate([
        property({ readonly: true })
    ], PropertyStudy.prototype, "string", void 0);
    __decorate([
        property({ multiline: true })
    ], PropertyStudy.prototype, "string2", void 0);
    __decorate([
        property({ type: cc.Boolean })
    ], PropertyStudy.prototype, "auto", null);
    __decorate([
        property({ type: CocosVersion })
    ], PropertyStudy.prototype, "version", void 0);
    PropertyStudy = __decorate([
        ccclass
    ], PropertyStudy);
    return PropertyStudy;
}(cc.Component));
exports.default = PropertyStudy;

cc._RF.pop();
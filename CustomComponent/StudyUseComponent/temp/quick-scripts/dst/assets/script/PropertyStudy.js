
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PropertyStudy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUHJvcGVydHlTdHVkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFJLEtBQUssR0FBWSxJQUFJLENBQUM7QUFFMUIsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUN6QixTQUFTLEVBQUUsQ0FBQztJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLENBQUM7Q0FDZixDQUFDLENBQUM7QUFHSDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXdDQztRQXRDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBU3ZCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEIscURBQXFEO1FBRXJELFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIscUNBQXFDO1FBQ3JDLDZDQUE2QztRQUU3QyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFlBQU0sR0FBVyxPQUFPLENBQUM7UUFFekIsMkJBQTJCO1FBRTNCLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFZckIsYUFBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7O0lBQ3JDLENBQUM7SUFWRyxzQkFBSSwrQkFBSTthQUFSO1lBQ0ksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzthQUVELFVBQVUsS0FBYztZQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUpBO0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLENBQUM7Z0RBQzNDO0lBU3ZCO1FBUEMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFDO2dCQUNoRSxJQUFJLEtBQUssRUFBRTtvQkFDUCxPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxPQUFPLEtBQUssQ0FBQztpQkFDaEI7WUFDTCxDQUFDLEVBQUMsQ0FBQzs4Q0FDYTtJQUloQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0RBQ3hDO0lBS2xCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQztpREFDckM7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7aURBQ0Y7SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7a0RBQ1A7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDOzZDQUc1QjtJQU9EO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxDQUFDO2tEQUNFO0lBdkNoQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBd0NqQztJQUFELG9CQUFDO0NBeENELEFBd0NDLENBeEMwQyxFQUFFLENBQUMsU0FBUyxHQXdDdEQ7a0JBeENvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmxldCBfYXV0bzogYm9vbGVhbiA9IHRydWU7XG5cbmNvbnN0IENvY29zVmVyc2lvbiA9IGNjLkVudW0oe1xuICAgIFZFUlNJT05fMTogMCxcbiAgICBWRVJTSU9OXzI6IDEsXG4gICAgVkVSU0lPTl8zOiAyLFxufSk7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVN0dWR5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsLCBkaXNwbGF5TmFtZTogXCLmoIfpophcIiwgdG9vbHRpcDogXCLmn5Dmn5DnlYzpnaLnmoTmoIfpophcIn0pXG4gICAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuSW50ZWdlciwgc2xpZGU6IHRydWUsIG1pbjogMCwgbWF4OiAxMDAsIHZpc2libGU6KCk9PntcbiAgICAgICAgaWYgKF9hdXRvKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH19KVxuICAgIGludDogbnVtYmVyID0gMTsgICAgXG5cbiAgICAvLyDnm67liY3nvJbovpHlmajkuK0gc2xpZGUg5ruR5Yqo5p2h5pWw5YC85L+u5pS557K+5bqm5Zu65a6a5pivIDAuMe+8jOS4jeWPlyBzbGlkZSDlj4LmlbDku6Xlj4rnvJbovpHlmajorr7nva7lvbHlk41cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkZsb2F0LCBzbGlkZTogdHJ1ZSwgbWluOiAwLCBtYXg6IDEwMH0pXG4gICAgZmxvYXQ6IG51bWJlciA9IDE7XG5cbiAgICAvLyDlr7nkuo7mma7pgJrnmoTmta7ngrnlgLzkv67mlLnvvIzmlbDlgLznsr7luqbkvJrlj5fliLAgc3RlcCDmiJbnvJbovpHlmajorr7nva7nmoTlvbHlk40uXG4gICAgLy8g5aaC5p6c6ZyA6KaB5L2/5L+u5pS555Sf5pWI77yM5YiZ6KaB5YWI5L+u5pS55Y6f5bGe5oCn5ZCN5ZCO5Zue5Yiw57yW6L6R5Zmo77yM5YaN5Zue5Yiw6ISa5pys5Lit5pS55Li65Y6f5p2l55qE5bGe5oCn5ZCN5Y2z5Y+vXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgc3RlcDogMC4xLCBtaW46IDAsIG1heDogMTAwfSlcbiAgICBmbG9hdDI6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHkoe3JlYWRvbmx5OiB0cnVlfSlcbiAgICBzdHJpbmc6IHN0cmluZyA9IFwiQ29jb3NcIjtcbiAgICBcbiAgICAvLyDnm67liY0gcmVhZE9ubHkg5Y+C5pWw5a+55aSa6KGM5paH5pys6L6T5YWl5qGG5peg5pWIXG4gICAgQHByb3BlcnR5KHttdWx0aWxpbmU6IHRydWV9KVxuICAgIHN0cmluZzI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkJvb2xlYW59KVxuICAgIGdldCBhdXRvICgpIHtcbiAgICAgICAgcmV0dXJuIF9hdXRvO1xuICAgIH1cblxuICAgIHNldCBhdXRvICh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBfYXV0byA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ29jb3NWZXJzaW9ufSlcbiAgICB2ZXJzaW9uID0gQ29jb3NWZXJzaW9uLlZFUlNJT05fMTtcbn1cbiJdfQ==
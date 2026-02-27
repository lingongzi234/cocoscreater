
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/CompLifeSudy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05957IXvqNL1L1zfWwc9lIw', 'CompLifeSudy');
// script/CompLifeSudy.ts

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
        _this.allowUpdate = true;
        _this.allowLateUpdate = true;
        return _this;
    }
    // 当组件中添加了 start、onEnable、onDisable、update、lateUpdate 等生命周期函数中的其中一个，
    // 组件的属性检查器都会出现 enabled 勾选项，用于设置组件是否启用
    // __preload 函数在组件节点激活时立即调用，调用时机快于 onLoad
    NewClass.prototype.__preload = function () {
        console.log("preload");
    };
    // onLoad 函数会在组件节点激活后立即调用
    NewClass.prototype.onLoad = function () {
        console.log("onLoad");
    };
    // start 函数会在组件激活后立即调用，节点的激活优先于组件的激活，所以触发时机要慢于 onLoad
    NewClass.prototype.start = function () {
        console.log("start");
    };
    // onEnable 函数会在组件的 enabled 属性被赋值为 true 时调用。当组件激活时会比 start 函数更早调用，但是依然慢于 onLoad 函数的调用
    NewClass.prototype.onEnable = function () {
        console.log("onEnable");
    };
    NewClass.prototype.openEnabled = function () {
        this.enabled = true;
    };
    NewClass.prototype.disableEnabled = function () {
        this.enabled = false;
    };
    // onDisable 函数会在组件的 enabled 属性被赋值为 false 时调用，当节点或组件被销毁时，onDisable 会优先于 onDestroy 函数调用
    NewClass.prototype.onDisable = function () {
        console.log("onDisable");
    };
    NewClass.prototype.destroyNode = function () {
        this.node.destroy();
    };
    // onDestroy 函数会在组件销毁时调用。但是如果组件没有调用过 onLoad ，那么 onDestroy 函数也不会调用。
    NewClass.prototype.onDestroy = function () {
        console.log("onDestroy");
    };
    // update 函数会在组件激活后每帧调用，在组件激活时的初次调用时机在 start 之后
    NewClass.prototype.update = function () {
        if (this.allowUpdate) {
            this.allowUpdate = false;
            console.log("update");
        }
    };
    // lateUpdate 函数会在组件激活后每帧调用，调用时机在组件执行完 update 函数之后
    NewClass.prototype.lateUpdate = function () {
        if (this.allowLateUpdate) {
            this.allowLateUpdate = false;
            console.log("lateUpdate");
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQ29tcExpZmVTdWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0VDO1FBaEVHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLHFCQUFlLEdBQVksSUFBSSxDQUFDOztJQThEcEMsQ0FBQztJQTVERyxvRUFBb0U7SUFDcEUsc0NBQXNDO0lBRXRDLHlDQUF5QztJQUN6Qyw0QkFBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLHlCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxREFBcUQ7SUFDckQsd0JBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHFGQUFxRjtJQUNyRiwyQkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELHNGQUFzRjtJQUN0Riw0QkFBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSw0QkFBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0NBQStDO0lBQy9DLHlCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQWpFZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtFNUI7SUFBRCxlQUFDO0NBbEVELEFBa0VDLENBbEVxQyxFQUFFLENBQUMsU0FBUyxHQWtFakQ7a0JBbEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgYWxsb3dVcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgYWxsb3dMYXRlVXBkYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8vIOW9k+e7hOS7tuS4rea3u+WKoOS6hiBzdGFydOOAgW9uRW5hYmxl44CBb25EaXNhYmxl44CBdXBkYXRl44CBbGF0ZVVwZGF0ZSDnrYnnlJ/lkb3lkajmnJ/lh73mlbDkuK3nmoTlhbbkuK3kuIDkuKrvvIxcbiAgICAvLyDnu4Tku7bnmoTlsZ7mgKfmo4Dmn6Xlmajpg73kvJrlh7rnjrAgZW5hYmxlZCDli77pgInpobnvvIznlKjkuo7orr7nva7nu4Tku7bmmK/lkKblkK/nlKhcblxuICAgIC8vIF9fcHJlbG9hZCDlh73mlbDlnKjnu4Tku7boioLngrnmv4DmtLvml7bnq4vljbPosIPnlKjvvIzosIPnlKjml7bmnLrlv6vkuo4gb25Mb2FkXG4gICAgX19wcmVsb2FkICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVsb2FkXCIpO1xuICAgIH1cblxuICAgIC8vIG9uTG9hZCDlh73mlbDkvJrlnKjnu4Tku7boioLngrnmv4DmtLvlkI7nq4vljbPosIPnlKhcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9hZFwiKTtcbiAgICB9XG5cbiAgICAvLyBzdGFydCDlh73mlbDkvJrlnKjnu4Tku7bmv4DmtLvlkI7nq4vljbPosIPnlKjvvIzoioLngrnnmoTmv4DmtLvkvJjlhYjkuo7nu4Tku7bnmoTmv4DmtLvvvIzmiYDku6Xop6blj5Hml7bmnLropoHmhaLkuo4gb25Mb2FkXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuICAgIH1cblxuICAgIC8vIG9uRW5hYmxlIOWHveaVsOS8muWcqOe7hOS7tueahCBlbmFibGVkIOWxnuaAp+iiq+i1i+WAvOS4uiB0cnVlIOaXtuiwg+eUqOOAguW9k+e7hOS7tua/gOa0u+aXtuS8muavlCBzdGFydCDlh73mlbDmm7Tml6nosIPnlKjvvIzkvYbmmK/kvp3nhLbmhaLkuo4gb25Mb2FkIOWHveaVsOeahOiwg+eUqFxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkVuYWJsZVwiKTtcbiAgICB9XG5cbiAgICBvcGVuRW5hYmxlZCAoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZUVuYWJsZWQgKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBvbkRpc2FibGUg5Ye95pWw5Lya5Zyo57uE5Lu255qEIGVuYWJsZWQg5bGe5oCn6KKr6LWL5YC85Li6IGZhbHNlIOaXtuiwg+eUqO+8jOW9k+iKgueCueaIlue7hOS7tuiiq+mUgOavgeaXtu+8jG9uRGlzYWJsZSDkvJrkvJjlhYjkuo4gb25EZXN0cm95IOWHveaVsOiwg+eUqFxuICAgIG9uRGlzYWJsZSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25EaXNhYmxlXCIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lOb2RlICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBvbkRlc3Ryb3kg5Ye95pWw5Lya5Zyo57uE5Lu26ZSA5q+B5pe26LCD55So44CC5L2G5piv5aaC5p6c57uE5Lu25rKh5pyJ6LCD55So6L+HIG9uTG9hZCDvvIzpgqPkuYggb25EZXN0cm95IOWHveaVsOS5n+S4jeS8muiwg+eUqOOAglxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25EZXN0cm95XCIpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSDlh73mlbDkvJrlnKjnu4Tku7bmv4DmtLvlkI7mr4/luKfosIPnlKjvvIzlnKjnu4Tku7bmv4DmtLvml7bnmoTliJ3mrKHosIPnlKjml7bmnLrlnKggc3RhcnQg5LmL5ZCOXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb3dVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGF0ZVVwZGF0ZSDlh73mlbDkvJrlnKjnu4Tku7bmv4DmtLvlkI7mr4/luKfosIPnlKjvvIzosIPnlKjml7bmnLrlnKjnu4Tku7bmiafooYzlrowgdXBkYXRlIOWHveaVsOS5i+WQjlxuICAgIGxhdGVVcGRhdGUgKCkge1xuICAgICAgICBpZiAodGhpcy5hbGxvd0xhdGVVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb3dMYXRlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxhdGVVcGRhdGVcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
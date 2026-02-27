
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ccutils/multiresolution/ContentAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68622NlRNJFN4QrXlFCQMe/', 'ContentAdapter');
// scripts/ccutils/multiresolution/ContentAdapter.ts

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
/**
 * @classdesc  游戏主内容节点自适应所有分辨率的脚本
 * @author caizhitao
 * @version 0.1.0
 * @since 2018-11-30
 * @description
 *
 * 用法：
 *      1. 将本组件挂载在节点上即可
 *
 * 适配原理：
 *      1. 将游戏主内容节点的宽高调整为画布的大小，以进行Size适配
 *
 * 注意：
 *      1. 挂载这个脚本的节点不能加入Widget组件，不然这个适配是没有效果的
 *      2. 目前只支持 SHOW_ALL 模式下的背景缩放适配，不支持其他模式的背景缩放
 *
 *  @example
    ```
    // e.g.
    // 代码中设置 SHOW_ALL 模式的参考代码
    cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);

    // 或者 Canvas 组件中，同时勾选 Fit Width 和 Fit Height
    ```
 */
var ContentAdapter = /** @class */ (function (_super) {
    __extends(ContentAdapter, _super);
    function ContentAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentAdapter.prototype.onLoad = function () {
        // if (CC_DEBUG) {
        //     cc.log("调整前");
        //     cc.log(`屏幕分辨率: ${cc.view.getCanvasSize().width} x ${cc.view.getCanvasSize().height}`);
        //     cc.log(`视图窗口可见区域分辨率: ${cc.view.getVisibleSize().width} x ${cc.view.getVisibleSize().height}`);
        //     cc.log(`视图中边框尺寸: ${cc.view.getFrameSize().width} x ${cc.view.getFrameSize().height}`);
        //     cc.log(`设备或浏览器像素比例: ${cc.view.getDevicePixelRatio()}`);
        //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
        // }
        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * srcScaleForShowAll;
        var realHeight = this.node.height * srcScaleForShowAll;
        // 2. 基于第一步的数据，再做节点宽高适配
        this.node.width = this.node.width * (cc.view.getCanvasSize().width / realWidth);
        this.node.height = this.node.height * (cc.view.getCanvasSize().height / realHeight);
        // // 3. 因为本节点的宽高发生了改变，所以要手动更新剩下子节点的宽高
        // this._updateAllChildNodeWidget(this.node);
        // if (CC_DEBUG) {
        //     cc.log(`节点在SHOW_ALL模式下展示的宽高: ${realWidth} x ${realHeight}`);
        //     cc.log(`节点在SHOW_ALL模式下展示的缩放: ${srcScaleForShowAll}`);
        //     cc.log(
        //         `节点在SHOW_ALL模式下做全屏处理后的实际宽高（${cc.view.getCanvasSize().width}x${
        //             cc.view.getCanvasSize().height
        //         }）等价于于原节点的宽高(${this.node.width}x${this.node.height})`
        //     );
        // }
    };
    ContentAdapter = __decorate([
        ccclass
    ], ContentAdapter);
    return ContentAdapter;
}(cc.Component));
exports.default = ContentAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NjdXRpbHMvbXVsdGlyZXNvbHV0aW9uL0NvbnRlbnRBZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBRUg7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBaURBLENBQUM7SUFoREcsK0JBQU0sR0FBTjtRQUNJLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsNkZBQTZGO1FBQzdGLHFHQUFxRztRQUNyRyw2RkFBNkY7UUFDN0YsOERBQThEO1FBQzlELGdFQUFnRTtRQUNoRSxJQUFJO1FBRUoseUNBQXlDO1FBQ3pDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1FBQ3JELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDO1FBRXZELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFcEYsc0NBQXNDO1FBQ3RDLDZDQUE2QztRQUU3QyxrQkFBa0I7UUFDbEIsbUVBQW1FO1FBQ25FLDREQUE0RDtRQUM1RCxjQUFjO1FBQ2QseUVBQXlFO1FBQ3pFLDZDQUE2QztRQUM3QyxnRUFBZ0U7UUFDaEUsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBaENnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBaURsQztJQUFELHFCQUFDO0NBakRELEFBaURDLENBakQyQyxFQUFFLENBQUMsU0FBUyxHQWlEdkQ7a0JBakRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiBAY2xhc3NkZXNjICDmuLjmiI/kuLvlhoXlrrnoioLngrnoh6rpgILlupTmiYDmnInliIbovqjnjofnmoTohJrmnKxcbiAqIEBhdXRob3IgY2FpemhpdGFvXG4gKiBAdmVyc2lvbiAwLjEuMFxuICogQHNpbmNlIDIwMTgtMTEtMzBcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIOeUqOazle+8mlxuICogICAgICAxLiDlsIbmnKznu4Tku7bmjILovb3lnKjoioLngrnkuIrljbPlj69cbiAqXG4gKiDpgILphY3ljp/nkIbvvJpcbiAqICAgICAgMS4g5bCG5ri45oiP5Li75YaF5a656IqC54K555qE5a696auY6LCD5pW05Li655S75biD55qE5aSn5bCP77yM5Lul6L+b6KGMU2l6ZemAgumFjVxuICpcbiAqIOazqOaEj++8mlxuICogICAgICAxLiDmjILovb3ov5nkuKrohJrmnKznmoToioLngrnkuI3og73liqDlhaVXaWRnZXTnu4Tku7bvvIzkuI3nhLbov5nkuKrpgILphY3mmK/msqHmnInmlYjmnpznmoRcbiAqICAgICAgMi4g55uu5YmN5Y+q5pSv5oyBIFNIT1dfQUxMIOaooeW8j+S4i+eahOiDjOaZr+e8qeaUvumAgumFje+8jOS4jeaUr+aMgeWFtuS7luaooeW8j+eahOiDjOaZr+e8qeaUvlxuICpcbiAqICBAZXhhbXBsZVxuICAgIGBgYFxuICAgIC8vIGUuZy5cbiAgICAvLyDku6PnoIHkuK3orr7nva4gU0hPV19BTEwg5qih5byP55qE5Y+C6ICD5Luj56CBXG4gICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpO1xuXG4gICAgLy8g5oiW6ICFIENhbnZhcyDnu4Tku7bkuK3vvIzlkIzml7bli77pgIkgRml0IFdpZHRoIOWSjCBGaXQgSGVpZ2h0IFxuICAgIGBgYFxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEFkYXB0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gaWYgKENDX0RFQlVHKSB7XG4gICAgICAgIC8vICAgICBjYy5sb2coXCLosIPmlbTliY1cIik7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOWxj+W5leWIhui+qOeOhzogJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodH1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6KeG5Zu+56qX5Y+j5Y+v6KeB5Yy65Z+f5YiG6L6o546HOiAke2NjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOinhuWbvuS4rei+ueahhuWwuuWvuDogJHtjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiuvuWkh+aIlua1j+iniOWZqOWDj+e0oOavlOS+izogJHtjYy52aWV3LmdldERldmljZVBpeGVsUmF0aW8oKX1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K55a696auYOiAke3RoaXMubm9kZS53aWR0aH0geCAke3RoaXMubm9kZS5oZWlnaHR9YCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAxLiDlhYjmib7liLAgU0hPV19BTEwg5qih5byP6YCC6YWN5LmL5ZCO77yM5pys6IqC54K555qE5a6e6ZmF5a696auY5Lul5Y+K5Yid5aeL57yp5pS+5YC8XG4gICAgICAgIGxldCBzcmNTY2FsZUZvclNob3dBbGwgPSBNYXRoLm1pbihjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHRoaXMubm9kZS53aWR0aCwgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgICAgIGxldCByZWFsV2lkdGggPSB0aGlzLm5vZGUud2lkdGggKiBzcmNTY2FsZUZvclNob3dBbGw7XG4gICAgICAgIGxldCByZWFsSGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodCAqIHNyY1NjYWxlRm9yU2hvd0FsbDtcblxuICAgICAgICAvLyAyLiDln7rkuo7nrKzkuIDmraXnmoTmlbDmja7vvIzlho3lgZroioLngrnlrr3pq5jpgILphY1cbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5ub2RlLndpZHRoICogKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoIC8gcmVhbFdpZHRoKTtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgKiAoY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gcmVhbEhlaWdodCk7XG5cbiAgICAgICAgLy8gLy8gMy4g5Zug5Li65pys6IqC54K555qE5a696auY5Y+R55Sf5LqG5pS55Y+Y77yM5omA5Lul6KaB5omL5Yqo5pu05paw5Ymp5LiL5a2Q6IqC54K555qE5a696auYXG4gICAgICAgIC8vIHRoaXMuX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldCh0aGlzLm5vZGUpO1xuXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOWuvemrmDogJHtyZWFsV2lkdGh9IHggJHtyZWFsSGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOe8qeaUvjogJHtzcmNTY2FsZUZvclNob3dBbGx9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coXG4gICAgICAgIC8vICAgICAgICAgYOiKgueCueWcqFNIT1dfQUxM5qih5byP5LiL5YGa5YWo5bGP5aSE55CG5ZCO55qE5a6e6ZmF5a696auY77yIJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aH14JHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0XG4gICAgICAgIC8vICAgICAgICAgfe+8ieetieS7t+S6juS6juWOn+iKgueCueeahOWuvemrmCgke3RoaXMubm9kZS53aWR0aH14JHt0aGlzLm5vZGUuaGVpZ2h0fSlgXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBfdXBkYXRlQWxsQ2hpbGROb2RlV2lkZ2V0KHBhcmVudE5vZGU6IGNjLk5vZGUpIHtcbiAgICAvLyAgICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCB3aWRnZXQgPSBwYXJlbnROb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgIC8vICAgICBpZiAod2lkZ2V0ICE9IG51bGwpIHtcbiAgICAvLyAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbkNvdW50ID09IDApIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBwYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZTogY2MuTm9kZSkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5fdXBkYXRlQWxsQ2hpbGROb2RlV2lkZ2V0KGNoaWxkTm9kZSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbn1cbiJdfQ==
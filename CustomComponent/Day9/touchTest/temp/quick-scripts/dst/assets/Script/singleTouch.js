
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/singleTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c100pCJclMHrGRjNydpdDg', 'singleTouch');
// Script/singleTouch.ts

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
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 金币池节点
         */
        _this.goldPool = null;
        _this._second = 0; // 长按计时器/秒数
        _this._max_second = 2; // 长按最大时间/秒数
        /**
         * 用于标记每个金币节点当前是否是被点击中
         * 节点顺序与 goldPool.children 保持一致
         */
        _this._goldClickedStates = [];
        /**
         * 新增：标记每个金币节点是否已经被“红色长按锁定”
         * 节点顺序与 goldPool.children 保持一致
         */
        _this._goldLockedStates = []; // 长按锁定状态数组
        /**
         * 缓存所有金币节点的包围盒及触摸标记数组，提升滑动性能
         * 节点顺序与 goldPool.children 保持一致
         */
        _this._goldWorldRects = [];
        _this._sharedTouched = [];
        _this.timerCallback = null; // 长按计时器回调函数
        _this.currentPressIdx = -1; // 当前正在计时长按的节点索引
        return _this;
    }
    Helloworld.prototype.onLoad = function () {
        // 当前场景需要关闭多点触摸
        // if (cc.macro.ENABLE_MULTI_TOUCH) {
        cc.macro.ENABLE_MULTI_TOUCH = false;
        // }
        var len = this.goldPool.childrenCount;
        if (len === 0)
            return;
        // 初始化点击状态和缓存数组
        this._goldClickedStates = new Array(len).fill(false);
        this._goldLockedStates = new Array(len).fill(false);
        this._goldWorldRects = new Array(len);
        this._sharedTouched = new Array(len).fill(false);
    };
    Helloworld.prototype.onEnable = function () {
        var len = this.goldPool.childrenCount;
        if (len === 0)
            return;
        for (var i = 0; i < len; i++) {
            var goldNode = this.goldPool.children[i];
            // 获取当前节点世界包围盒并缓存到数组中
            this._goldWorldRects[i] = goldNode.getBoundingBoxToWorld();
            // 注册触摸事件监听
            goldNode.on(cc.Node.EventType.TOUCH_START, this.onTouchGoldStart, this);
            goldNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchGoldMove, this);
            goldNode.on(cc.Node.EventType.TOUCH_END, this.onTouchGoldEnd, this);
            goldNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchGoldCancel, this);
        }
    };
    Helloworld.prototype.onDisable = function () {
        var len = this.goldPool.childrenCount;
        if (len === 0)
            return;
        // 节点世界包围盒数组清空，当需要时再重新计算保证正确性
        this._goldWorldRects = [];
        // 取消触摸事件监听
        for (var i = 0; i < len; i++) {
            var goldNode = this.goldPool.children[i];
            this.offTouchEvent(goldNode);
        }
    };
    Helloworld.prototype.onTouchGoldStart = function (event) {
        // 找到节点索引
        var goldNode = event.target;
        var idx = goldNode.getSiblingIndex();
        // 如果已经被长按锁定，则直接返回
        if (this._goldLockedStates[idx])
            return;
        if (this.timerCallback === null) {
            this.timerCallback = this.longPressTimerCallback.bind(this, goldNode, idx);
        }
        // 启动长按计时器，只记录当前按下的节点索引
        this.currentPressIdx = idx;
        this._second = 0;
        this.schedule(this.timerCallback, 1, 1); // 1秒后触发一次，每次间隔1秒，共执行2次
    };
    Helloworld.prototype.longPressTimerCallback = function (target, idx) {
        if (target === null || idx === -1)
            return;
        this._second++;
        console.log("长按计时器/秒数", this._second);
        if (this._second >= this._max_second) {
            console.log("达到长按最大时间");
            this._second = 0;
            // 标记节点为锁定，变为红色
            target.color = cc.Color.RED;
            this.offTouchEvent(target);
            this._goldLockedStates[idx] = true;
            this.currentPressIdx = -1;
            this.cancelTimer();
        }
    };
    /**
     * 将重复的复位节点颜色逻辑进行封装
     * 只重置非长按锁定（红色）的节点为白色
     */
    Helloworld.prototype.resetAllGoldToWhiteExceptRed = function (touchLocation) {
        var count = this.goldPool.childrenCount;
        for (var i = 0; i < count; i++) {
            var goldNode = this.goldPool.children[i];
            // 跳过被红锁定的节点
            if (this._goldLockedStates[i])
                continue;
            var rect = this._goldWorldRects[i];
            var result = rect.contains(touchLocation);
            if (result && goldNode.color !== cc.Color.WHITE) {
                goldNode.color = cc.Color.WHITE;
            }
        }
        this.cancelAndResetPressState();
    };
    /**
     * 将释放计时器和复位长按状态逻辑合并，避免代码重复
     */
    Helloworld.prototype.cancelAndResetPressState = function () {
        this.cancelTimer();
        this.currentPressIdx = -1;
        this._second = 0;
    };
    /**
     * 性能最优实现：
     * 1. 只遍历一次每个触点，与节点做包围盒判断。
     * 2. 只更新必要颜色和状态。
     * 3. 复用 _sharedTouched 数组，避免每帧分配新数组。
     * 4. 缓存包围盒处理，避免 getBoundingBoxToWorld 重复调用。
     * 5. 被锁定为红色的节点不再处理变色
     * 6. 长按时，如果手指移出原本的节点包围盒，立即取消计时器
     */
    Helloworld.prototype.onTouchGoldMove = function (event) {
        var touches = event.getTouches();
        var count = this.goldPool.childrenCount;
        if (count === 0)
            return;
        // 复用 _sharedTouched 数组
        for (var i = 0; i < count; i++)
            this._sharedTouched[i] = false;
        // 枚举所有触点（多指），利用缓存包围盒加速检测（忽略已锁定节点）
        for (var t = 0; t < touches.length; t++) {
            var loc = touches[t].getLocation();
            for (var j = 0; j < count; j++) {
                if (this._goldLockedStates[j])
                    continue; // 跳过被锁定节点
                if (!this._sharedTouched[j] && this._goldWorldRects[j].contains(loc)) {
                    this._sharedTouched[j] = true;
                }
            }
        }
        // 检查：如果有节点在计时长按，手指已移出其包围盒，则取消长按计时器
        if (this.currentPressIdx !== -1) {
            // 判断所有触点都不在当前计时节点上时，取消计时器
            if (!this._sharedTouched[this.currentPressIdx]) {
                this.cancelAndResetPressState();
            }
        }
        // 只在状态变化时更新（忽略已锁定节点）
        for (var i = 0; i < count; i++) {
            if (this._goldLockedStates[i])
                continue; // 已经锁定为红色，不再变色
            var goldNode = this.goldPool.children[i];
            if (this._sharedTouched[i]) {
                if (!this._goldClickedStates[i]) {
                    this._goldClickedStates[i] = true;
                    goldNode.color = cc.Color.BLUE;
                }
            }
            else {
                if (this._goldClickedStates[i]) {
                    this._goldClickedStates[i] = false;
                    goldNode.color = cc.Color.WHITE;
                }
            }
        }
    };
    Helloworld.prototype.onTouchGoldEnd = function (event) {
        this.resetAllGoldToWhiteExceptRed(event.getLocation());
    };
    Helloworld.prototype.onTouchGoldCancel = function (event) {
        this.resetAllGoldToWhiteExceptRed(event.getLocation());
    };
    Helloworld.prototype.offTouchEvent = function (target) {
        target.off(cc.Node.EventType.TOUCH_START, this.onTouchGoldStart, this);
        target.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchGoldMove, this);
        target.off(cc.Node.EventType.TOUCH_END, this.onTouchGoldEnd, this);
        target.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchGoldCancel, this);
    };
    Helloworld.prototype.cancelTimer = function () {
        // 检查timerCallback避免无效反注册
        if (this.timerCallback) {
            this.unschedule(this.timerCallback);
            this.timerCallback = null;
        }
    };
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "goldPool", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2luZ2xlVG91Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3TkM7UUF2Tkc7O1dBRUc7UUFFSCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRWpCLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBRWhDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUU3Qzs7O1dBR0c7UUFDSyx3QkFBa0IsR0FBYyxFQUFFLENBQUM7UUFFM0M7OztXQUdHO1FBQ0ssdUJBQWlCLEdBQWMsRUFBRSxDQUFDLENBQUMsV0FBVztRQUV0RDs7O1dBR0c7UUFDSyxxQkFBZSxHQUFjLEVBQUUsQ0FBQztRQUNoQyxvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUV2QyxtQkFBYSxHQUFhLElBQUksQ0FBQyxDQUFDLFlBQVk7UUFFNUMscUJBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjs7SUF3TGxELENBQUM7SUF0TEcsMkJBQU0sR0FBTjtRQUVJLGVBQWU7UUFDZixxQ0FBcUM7UUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSTtRQUVKLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksR0FBRyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRXRCLGVBQWU7UUFDZixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxH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LElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQWxORDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBTFIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXdOOUI7SUFBRCxpQkFBQztDQXhORCxBQXdOQyxDQXhOdUMsRUFBRSxDQUFDLFNBQVMsR0F3Tm5EO2tCQXhOb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvd29ybGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIOmHkeW4geaxoOiKgueCuVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdvbGRQb29sOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3NlY29uZDogbnVtYmVyID0gMDsgLy8g6ZW/5oyJ6K6h5pe25ZmoL+enkuaVsFxuXG4gICAgcHJpdmF0ZSBfbWF4X3NlY29uZDogbnVtYmVyID0gMjsgLy8g6ZW/5oyJ5pyA5aSn5pe26Ze0L+enkuaVsFxuXG4gICAgLyoqXG4gICAgICog55So5LqO5qCH6K6w5q+P5Liq6YeR5biB6IqC54K55b2T5YmN5piv5ZCm5piv6KKr54K55Ye75LitXG4gICAgICog6IqC54K56aG65bqP5LiOIGdvbGRQb29sLmNoaWxkcmVuIOS/neaMgeS4gOiHtFxuICAgICAqL1xuICAgIHByaXZhdGUgX2dvbGRDbGlja2VkU3RhdGVzOiBib29sZWFuW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIOaWsOWinu+8muagh+iusOavj+S4qumHkeW4geiKgueCueaYr+WQpuW3sue7j+iiq+KAnOe6ouiJsumVv+aMiemUgeWumuKAnVxuICAgICAqIOiKgueCuemhuuW6j+S4jiBnb2xkUG9vbC5jaGlsZHJlbiDkv53mjIHkuIDoh7RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nb2xkTG9ja2VkU3RhdGVzOiBib29sZWFuW10gPSBbXTsgLy8g6ZW/5oyJ6ZSB5a6a54q25oCB5pWw57uEXG5cbiAgICAvKipcbiAgICAgKiDnvJPlrZjmiYDmnInph5HluIHoioLngrnnmoTljIXlm7Tnm5Llj4rop6bmkbjmoIforrDmlbDnu4TvvIzmj5DljYfmu5HliqjmgKfog71cbiAgICAgKiDoioLngrnpobrluo/kuI4gZ29sZFBvb2wuY2hpbGRyZW4g5L+d5oyB5LiA6Ie0XG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ29sZFdvcmxkUmVjdHM6IGNjLlJlY3RbXSA9IFtdO1xuICAgIHByaXZhdGUgX3NoYXJlZFRvdWNoZWQ6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgdGltZXJDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsOyAvLyDplb/mjInorqHml7blmajlm57osIPlh73mlbBcblxuICAgIGN1cnJlbnRQcmVzc0lkeDogbnVtYmVyID0gLTE7IC8vIOW9k+WJjeato+WcqOiuoeaXtumVv+aMieeahOiKgueCuee0ouW8lVxuXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvLyDlvZPliY3lnLrmma/pnIDopoHlhbPpl63lpJrngrnop6bmkbhcbiAgICAgICAgLy8gaWYgKGNjLm1hY3JvLkVOQUJMRV9NVUxUSV9UT1VDSCkge1xuICAgICAgICAgICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIOWIneWni+WMlueCueWHu+eKtuaAgeWSjOe8k+WtmOaVsOe7hFxuICAgICAgICB0aGlzLl9nb2xkQ2xpY2tlZFN0YXRlcyA9IG5ldyBBcnJheShsZW4pLmZpbGwoZmFsc2UpO1xuICAgICAgICB0aGlzLl9nb2xkTG9ja2VkU3RhdGVzID0gbmV3IEFycmF5KGxlbikuZmlsbChmYWxzZSk7XG4gICAgICAgIHRoaXMuX2dvbGRXb3JsZFJlY3RzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIHRoaXMuX3NoYXJlZFRvdWNoZWQgPSBuZXcgQXJyYXkobGVuKS5maWxsKGZhbHNlKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBnb2xkTm9kZSA9IHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAvLyDojrflj5blvZPliY3oioLngrnkuJbnlYzljIXlm7Tnm5LlubbnvJPlrZjliLDmlbDnu4TkuK1cbiAgICAgICAgICAgIHRoaXMuX2dvbGRXb3JsZFJlY3RzW2ldID0gZ29sZE5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XG4gICAgICAgICAgICAvLyDms6jlhozop6bmkbjkuovku7bnm5HlkKxcbiAgICAgICAgICAgIGdvbGROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hHb2xkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgZ29sZE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoR29sZE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgZ29sZE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hHb2xkRW5kLCB0aGlzKTtcbiAgICAgICAgICAgIGdvbGROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoR29sZENhbmNlbCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUgKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmdvbGRQb29sLmNoaWxkcmVuQ291bnQ7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHJldHVybjtcbiAgICAgICAgLy8g6IqC54K55LiW55WM5YyF5Zu055uS5pWw57uE5riF56m677yM5b2T6ZyA6KaB5pe25YaN6YeN5paw6K6h566X5L+d6K+B5q2j56Gu5oCnXG4gICAgICAgIHRoaXMuX2dvbGRXb3JsZFJlY3RzID0gW107XG4gICAgICAgIC8vIOWPlua2iOinpuaRuOS6i+S7tuebkeWQrFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBnb2xkTm9kZSA9IHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB0aGlzLm9mZlRvdWNoRXZlbnQoZ29sZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEdvbGRTdGFydCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgLy8g5om+5Yiw6IqC54K557Si5byVXG4gICAgICAgIGNvbnN0IGdvbGROb2RlID0gZXZlbnQudGFyZ2V0IGFzIGNjLk5vZGU7XG4gICAgICAgIGNvbnN0IGlkeCA9IGdvbGROb2RlLmdldFNpYmxpbmdJbmRleCgpO1xuXG4gICAgICAgIC8vIOWmguaenOW3sue7j+iiq+mVv+aMiemUgeWumu+8jOWImeebtOaOpei/lOWbnlxuICAgICAgICBpZiAodGhpcy5fZ29sZExvY2tlZFN0YXRlc1tpZHhdKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnRpbWVyQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJDYWxsYmFjayA9IHRoaXMubG9uZ1ByZXNzVGltZXJDYWxsYmFjay5iaW5kKHRoaXMsIGdvbGROb2RlLCBpZHgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWQr+WKqOmVv+aMieiuoeaXtuWZqO+8jOWPquiusOW9leW9k+WJjeaMieS4i+eahOiKgueCuee0ouW8lVxuXG4gICAgICAgIHRoaXMuY3VycmVudFByZXNzSWR4ID0gaWR4O1xuICAgICAgICB0aGlzLl9zZWNvbmQgPSAwO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXJDYWxsYmFjaywgMSwgMSk7IC8vIDHnp5LlkI7op6blj5HkuIDmrKHvvIzmr4/mrKHpl7TpmpQx56eS77yM5YWx5omn6KGMMuasoVxuICAgIH1cblxuICAgIGxvbmdQcmVzc1RpbWVyQ2FsbGJhY2sgKHRhcmdldDogY2MuTm9kZSB8IG51bGwsIGlkeDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwgfHwgaWR4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9zZWNvbmQrKztcbiAgICAgICAgY29uc29sZS5sb2coXCLplb/mjInorqHml7blmagv56eS5pWwXCIsIHRoaXMuX3NlY29uZCk7XG4gICAgICAgIGlmICh0aGlzLl9zZWNvbmQgPj0gdGhpcy5fbWF4X3NlY29uZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLovr7liLDplb/mjInmnIDlpKfml7bpl7RcIik7XG4gICAgICAgICAgICB0aGlzLl9zZWNvbmQgPSAwO1xuXG4gICAgICAgICAgICAvLyDmoIforrDoioLngrnkuLrplIHlrprvvIzlj5jkuLrnuqLoibJcbiAgICAgICAgICAgIHRhcmdldC5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgIHRoaXMub2ZmVG91Y2hFdmVudCh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5fZ29sZExvY2tlZFN0YXRlc1tpZHhdID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByZXNzSWR4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbFRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbph43lpI3nmoTlpI3kvY3oioLngrnpopzoibLpgLvovpHov5vooYzlsIHoo4VcbiAgICAgKiDlj6rph43nva7pnZ7plb/mjInplIHlrprvvIjnuqLoibLvvInnmoToioLngrnkuLrnmb3oibJcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc2V0QWxsR29sZFRvV2hpdGVFeGNlcHRSZWQodG91Y2hMb2NhdGlvbjogY2MuVmVjMikge1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ29sZE5vZGUgPSB0aGlzLmdvbGRQb29sLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgLy8g6Lez6L+H6KKr57qi6ZSB5a6a55qE6IqC54K5XG4gICAgICAgICAgICBpZiAodGhpcy5fZ29sZExvY2tlZFN0YXRlc1tpXSkgY29udGludWU7XG4gICAgICAgICAgICBsZXQgcmVjdCA9IHRoaXMuX2dvbGRXb3JsZFJlY3RzW2ldO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlY3QuY29udGFpbnModG91Y2hMb2NhdGlvbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIGdvbGROb2RlLmNvbG9yICE9PSBjYy5Db2xvci5XSElURSkge1xuICAgICAgICAgICAgICAgIGdvbGROb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW5jZWxBbmRSZXNldFByZXNzU3RhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbph4rmlL7orqHml7blmajlkozlpI3kvY3plb/mjInnirbmgIHpgLvovpHlkIjlubbvvIzpgb/lhY3ku6PnoIHph43lpI1cbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbmNlbEFuZFJlc2V0UHJlc3NTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcmVzc0lkeCA9IC0xO1xuICAgICAgICB0aGlzLl9zZWNvbmQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaAp+iDveacgOS8mOWunueOsO+8mlxuICAgICAqIDEuIOWPqumBjeWOhuS4gOasoeavj+S4quinpueCue+8jOS4juiKgueCueWBmuWMheWbtOebkuWIpOaWreOAglxuICAgICAqIDIuIOWPquabtOaWsOW/heimgeminOiJsuWSjOeKtuaAgeOAglxuICAgICAqIDMuIOWkjeeUqCBfc2hhcmVkVG91Y2hlZCDmlbDnu4TvvIzpgb/lhY3mr4/luKfliIbphY3mlrDmlbDnu4TjgIJcbiAgICAgKiA0LiDnvJPlrZjljIXlm7Tnm5LlpITnkIbvvIzpgb/lhY0gZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIOmHjeWkjeiwg+eUqOOAglxuICAgICAqIDUuIOiiq+mUgeWumuS4uue6ouiJsueahOiKgueCueS4jeWGjeWkhOeQhuWPmOiJslxuICAgICAqIDYuIOmVv+aMieaXtu+8jOWmguaenOaJi+aMh+enu+WHuuWOn+acrOeahOiKgueCueWMheWbtOebku+8jOeri+WNs+WPlua2iOiuoeaXtuWZqFxuICAgICAqL1xuICAgIG9uVG91Y2hHb2xkTW92ZSAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdvbGRQb29sLmNoaWxkcmVuQ291bnQ7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIOWkjeeUqCBfc2hhcmVkVG91Y2hlZCDmlbDnu4RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB0aGlzLl9zaGFyZWRUb3VjaGVkW2ldID0gZmFsc2U7XG5cbiAgICAgICAgLy8g5p6a5Li+5omA5pyJ6Kem54K577yI5aSa5oyH77yJ77yM5Yip55So57yT5a2Y5YyF5Zu055uS5Yqg6YCf5qOA5rWL77yI5b+955Wl5bey6ZSB5a6a6IqC54K577yJXG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgdG91Y2hlcy5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgY29uc3QgbG9jID0gdG91Y2hlc1t0XS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dvbGRMb2NrZWRTdGF0ZXNbal0pIGNvbnRpbnVlOyAvLyDot7Pov4fooqvplIHlrproioLngrlcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NoYXJlZFRvdWNoZWRbal0gJiYgdGhpcy5fZ29sZFdvcmxkUmVjdHNbal0uY29udGFpbnMobG9jKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyZWRUb3VjaGVkW2pdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4Dmn6XvvJrlpoLmnpzmnInoioLngrnlnKjorqHml7bplb/mjInvvIzmiYvmjIflt7Lnp7vlh7rlhbbljIXlm7Tnm5LvvIzliJnlj5bmtojplb/mjInorqHml7blmahcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFByZXNzSWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgLy8g5Yik5pat5omA5pyJ6Kem54K56YO95LiN5Zyo5b2T5YmN6K6h5pe26IqC54K55LiK5pe277yM5Y+W5raI6K6h5pe25ZmoXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3NoYXJlZFRvdWNoZWRbdGhpcy5jdXJyZW50UHJlc3NJZHhdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxBbmRSZXNldFByZXNzU3RhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWPquWcqOeKtuaAgeWPmOWMluaXtuabtOaWsO+8iOW/veeVpeW3sumUgeWumuiKgueCue+8iVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9nb2xkTG9ja2VkU3RhdGVzW2ldKSBjb250aW51ZTsgLy8g5bey57uP6ZSB5a6a5Li657qi6Imy77yM5LiN5YaN5Y+Y6ImyXG4gICAgICAgICAgICBjb25zdCBnb2xkTm9kZSA9IHRoaXMuZ29sZFBvb2wuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodGhpcy5fc2hhcmVkVG91Y2hlZFtpXSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZ29sZENsaWNrZWRTdGF0ZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ29sZENsaWNrZWRTdGF0ZXNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnb2xkTm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMVUU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ29sZENsaWNrZWRTdGF0ZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ29sZENsaWNrZWRTdGF0ZXNbaV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZ29sZE5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoR29sZEVuZCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5yZXNldEFsbEdvbGRUb1doaXRlRXhjZXB0UmVkKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgIH1cblxuICAgIG9uVG91Y2hHb2xkQ2FuY2VsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLnJlc2V0QWxsR29sZFRvV2hpdGVFeGNlcHRSZWQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgfVxuXG4gICAgb2ZmVG91Y2hFdmVudCAodGFyZ2V0OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRhcmdldC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEdvbGRTdGFydCwgdGhpcyk7XG4gICAgICAgIHRhcmdldC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoR29sZE1vdmUsIHRoaXMpO1xuICAgICAgICB0YXJnZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoR29sZEVuZCwgdGhpcyk7XG4gICAgICAgIHRhcmdldC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hHb2xkQ2FuY2VsLCB0aGlzKTtcbiAgICB9XG5cbiAgICBjYW5jZWxUaW1lciAoKSB7XG4gICAgICAgIC8vIOajgOafpXRpbWVyQ2FsbGJhY2vpgb/lhY3ml6DmlYjlj43ms6jlhoxcbiAgICAgICAgaWYgKHRoaXMudGltZXJDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXJDYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
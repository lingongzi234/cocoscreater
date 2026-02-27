"use strict";
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
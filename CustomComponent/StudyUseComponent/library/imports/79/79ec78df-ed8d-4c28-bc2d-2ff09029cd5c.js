"use strict";
cc._RF.push(module, '79ec7jf7Y1MKLwtL/CQKc1c', 'NodeEvent');
// script/NodeEvent.ts

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
var EVENT_TYPE = {
    // 触摸开始事件
    TOUCH_START: cc.Node.EventType.TOUCH_START,
    // 触摸移动事件
    TOUCH_MOVE: cc.Node.EventType.TOUCH_MOVE,
    // 触摸结束事件
    TOUCH_END: cc.Node.EventType.TOUCH_END,
    // 触摸取消事件
    TOUCH_CANCEL: cc.Node.EventType.TOUCH_CANCEL,
    // 鼠标按下事件
    MOUSE_DOWN: cc.Node.EventType.MOUSE_DOWN,
    // 鼠标移动事件
    MOUSE_MOVE: cc.Node.EventType.MOUSE_MOVE,
    // 鼠标进入节点事件
    MOUSE_ENTER: cc.Node.EventType.MOUSE_ENTER,
    // 鼠标移出节点事件
    MOUSE_LEAVE: cc.Node.EventType.MOUSE_LEAVE,
    // 鼠标松开事件
    MOUSE_UP: cc.Node.EventType.MOUSE_UP,
    // 鼠标滚轮事件
    MOUSE_WHEEL: cc.Node.EventType.MOUSE_WHEEL,
    // 节点位置改变事件
    POSITION_CHANGED: cc.Node.EventType.POSITION_CHANGED,
    // 节点颜色改变事件
    COLOR_CHANGED: cc.Node.EventType.COLOR_CHANGED,
    // 节点锚点改变事件
    ANCHOR_CHANGED: cc.Node.EventType.ANCHOR_CHANGED,
    // 节点尺寸改变事件
    SIZE_CHANGED: cc.Node.EventType.SIZE_CHANGED,
    // 节点缩放改变事件
    SCALE_CHANGED: cc.Node.EventType.SCALE_CHANGED,
    // 节点旋转改变事件
    ROTATION_CHANGED: cc.Node.EventType.ROTATION_CHANGED,
    // 子节点被添加事件
    CHILD_ADDED: cc.Node.EventType.CHILD_ADDED,
    // 子节点被移除事件
    CHILD_REMOVED: cc.Node.EventType.CHILD_REMOVED,
    // 子节点顺序改变事件
    CHILD_REORDER: cc.Node.EventType.CHILD_REORDER,
    // 节点分组改变事件
    GROUP_CHANGED: cc.Node.EventType.GROUP_CHANGED,
    // 节点兄弟顺序改变事件
    SIBLING_ORDER_CHANGED: cc.Node.EventType.SIBLING_ORDER_CHANGED,
};
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onEnable = function () {
        for (var key in EVENT_TYPE) {
            var element = EVENT_TYPE[key];
            this.node.on(element, this.onNodeEventCallback, this);
        }
    };
    NewClass.prototype.onDisable = function () {
        for (var key in EVENT_TYPE) {
            var element = EVENT_TYPE[key];
            this.node.off(element, this.onNodeEventCallback, this);
        }
    };
    NewClass.prototype.onNodeEventCallback = function (eventOrNodeOrOther) {
        if (eventOrNodeOrOther instanceof cc.Event) {
            cc.log(eventOrNodeOrOther.type);
        }
        else if (eventOrNodeOrOther instanceof cc.Node) {
            cc.log(eventOrNodeOrOther.name);
        }
        else if (String(eventOrNodeOrOther) === 'undefined') {
            cc.log("may change scale");
        }
        else if (eventOrNodeOrOther instanceof cc.Color) {
            cc.log(eventOrNodeOrOther);
        }
    };
    NewClass.prototype.addChild = function () {
        var child = new cc.Node("child");
        child.addComponent(cc.Label);
        this.node.addChild(child);
    };
    NewClass.prototype.removeChild = function () {
        var _this = this;
        this.addChild();
        setTimeout(function () {
            _this.node.removeChild(_this.node.children[0]);
        }, 1000);
    };
    NewClass.prototype.changeScale = function () {
        this.node.scale = 2;
    };
    NewClass.prototype.changeContentSize = function () {
        this.node.setContentSize(100, 100);
    };
    NewClass.prototype.changePosition = function () {
        this.node.position = cc.v3(100, 100, 0);
    };
    NewClass.prototype.changeRotation = function () {
        this.node.rotation = 45;
    };
    NewClass.prototype.changeColor = function () {
        this.node.color = cc.Color.RED;
    };
    NewClass.prototype.changeAnchor = function () {
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
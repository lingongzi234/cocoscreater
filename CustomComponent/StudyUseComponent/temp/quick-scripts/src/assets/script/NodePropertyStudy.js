"use strict";
cc._RF.push(module, '9f439H/FqtKqagXupJi4wX7', 'NodePropertyStudy');
// script/NodePropertyStudy.ts

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
var user = {
    name: "张三",
    age: 25,
    isActive: true
};
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cocosSpf = null;
        _this._cocos = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        // 教学示例：学习节点属性的使用场景
        // 可以取消注释下面的函数来测试不同的场景
        this.createNodeAndControl(); // 场景1：创建和管理节点
        // this.eventListenerUsage();      // 场景2：节点事件监听
        // this.demo3_ScaleAnimation();            // 场景3：缩放动画
        // this.demo4_ColorAndOpacity();           // 场景4：颜色和透明度
        // this.demo5_FindAndValidateNodes();      // 场景5：查找和验证节点
        // this.demo6_ManageChildren();            // 场景6：管理子节点
        // this.demo7_LayerManagement();           // 场景7：层级管理
        // this.demo8_NodeSizeAndAnchor();         // 场景8：节点尺寸和锚点
    };
    /**
     * 场景1：创建和管理节点
     * 学习属性：name, active, addChild, destroy, destroyAllChildren, parent
     */
    NewClass.prototype.createNodeAndControl = function () {
        // 创建一个新的节点并设置名称
        var childNode = new cc.Node("Enemy_001");
        var spComp = childNode.addComponent(cc.Sprite);
        if (this.cocosSpf) {
            spComp.spriteFrame = this.cocosSpf;
        }
        // 将子节点添加到当前节点
        this.node.addChild(childNode);
        // childNode.parent = this.node;
        this._cocos = childNode;
        // 检查节点与父节点
        console.log("新建的节点:", childNode);
        console.log("从节点树中找到新建的节点", cc.find("Canvas/Enemy_001"));
        console.log("从父节点的节点树中找到新建的节点", cc.find("Enemy_001", this.node));
        console.log("子节点的父节点:", childNode.parent);
        console.log("当前节点的子节点数量:", childNode.parent.childrenCount);
        console.log("所有子节点数组:", childNode.parent.children);
        // 延迟1秒后关闭节点
        // this.scheduleOnce(() => {
        //     childNode.active = false;
        // }, 1);
        // 延迟1秒后隐藏节点
        // this.scheduleOnce(() => {
        //     childNode.opacity = 0;
        // }, 1);
        // 延迟1秒后修改节点坐标
        // this.scheduleOnce(() => {
        //     // childNode.position = cc.v3(100, 100, 0);
        //     childNode.x = 100;
        //     childNode.y = 100;
        // }, 1);
        // 延迟1秒后修改节点角度
        // this.schedule(() => {
        //     childNode.angle -= 1;
        // }, 0.01);
        // 延迟1秒后修改节点缩放
        // this.scheduleOnce(() => {
        //     childNode.scale = 2.0;
        //     childNode.scaleX = 2.0;
        //     childNode.scaleY = 2.0;
        // }, 1);
        // 延迟1秒后修改节点颜色
        // this.scheduleOnce(() => {
        //     childNode.color = cc.Color.RED;
        //     // childNode.color = new cc.Color();
        // }, 1);
        // 延迟1秒后销毁子节点
        // this.scheduleOnce(() => {
        //     this.node.getChildByName("Enemy_001").destroy()  // 销毁子节点
        // }, 1);
        // 延迟1秒后从节点树移除子节点，但保留节点对象数据
        // this.scheduleOnce(() => {
        //     this.node.removeChild(childNode);  // 移除子节点
        // }, 1);
        // 延迟1秒后销毁所有子节点
        // this.scheduleOnce(() => {
        //     this.node.destroyAllChildren();  // 销毁所有子节点
        // }, 1);
        // 延迟1秒后修改节点的渲染层级或节点层级
        // this.scheduleOnce(()=>{
        //     // this.node.getChildByName("testNode").zIndex = cc.macro.MAX_ZINDEX;
        //     // childNode.zIndex = -1;
        //     console.log(childNode.getSiblingIndex());
        //     childNode.setSiblingIndex(1000);
        // }, 3)
        // 延迟1秒后修改节点尺寸
        // this.scheduleOnce(() => {
        //     let testNode = this.node.getChildByName("testNode");
        //     if (testNode) {
        //         // testNode.width = 300;
        //         // testNode.height = 120;
        //         // testNode.setContentSize(300, 120);
        //         let newSize = new cc.Size(300, 120);
        //         testNode.setContentSize(newSize);
        //         console.log('修改后的尺寸:', testNode.width, testNode.height);
        //     }
        // }, 1);
        // 延迟1秒后修改节点锚点
        // this.scheduleOnce(() => {
        //     let testNode = this.node.getChildByName("testNode");
        //     if (testNode) {
        //         testNode.anchorX = 1;
        //         testNode.anchorY = 0;
        //         // testNode.setAnchorPoint(1, 0);
        //         console.log('修改后的锚点:', testNode.anchorX, testNode.anchorY);
        //     }
        // }, 1);
        // 延迟1秒后修改节点分组
        // this.scheduleOnce(() => {
        //     let testNode = this.node.getChildByName("testNode");
        //     if (testNode) {
        //         //@ts-ignore
        //         testNode.group = cc.game.groupList[1];  // 修改分组名为 other
        //         console.log('修改后的分组:', testNode.group);
        //     }
        // }, 1);
    };
    /**
     * 事件回调函数，演示节点触摸结束事件
     */
    NewClass.prototype.onTouchHandler = function (event) {
        cc.log("节点触发了 TOUCH_END 事件", event);
    };
    /**
     * 示例：监听、移除和批量移除节点事件的用法
     */
    NewClass.prototype.eventListenerUsage = function () {
        var _this = this;
        // 1. 使用 this.node.on 监听节点事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchHandler, this);
        // 延迟2秒后移除指定的事件监听器
        this.scheduleOnce(function () {
            // 2. 使用 this.node.off 移除指定的监听器
            cc.log("移除 onTouchHandler 监听器");
            _this.node.off(cc.Node.EventType.TOUCH_END, _this.onTouchHandler, _this);
        }, 2);
        // 再次添加多个事件监听器
        var cb1 = function (evt) { cc.log("cb1"); };
        var cb2 = function (evt) { cc.log("cb2"); };
        this.node.on(cc.Node.EventType.TOUCH_START, cb1, this);
        this.node.on(cc.Node.EventType.TOUCH_END, cb2, this);
        // 延迟4秒后批量移除所有以 `this` 为 target 的事件监听
        this.scheduleOnce(function () {
            // 3. 使用 this.node.targetOff(this) 一次性移除
            cc.log("批量移除所有以 this 为 target 的事件监听器");
            _this.node.targetOff(_this);
        }, 4);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "cocosSpf", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
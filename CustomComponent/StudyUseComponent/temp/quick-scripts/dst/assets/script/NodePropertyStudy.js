
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/NodePropertyStudy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTm9kZVByb3BlcnR5U3R1ZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFJMUMsSUFBTSxJQUFJLEdBQUc7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLElBQUk7Q0FDakIsQ0FBQztBQUtGO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUxDO1FBOUtHLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFlBQU0sR0FBWSxJQUFJLENBQUM7O1FBMkt2QixpQkFBaUI7SUFDckIsQ0FBQztJQTFLRyx5QkFBTSxHQUFOO1FBQ0ksbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUV0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFNLGNBQWM7UUFDaEQsZ0RBQWdEO1FBQ2hELHNEQUFzRDtRQUN0RCx3REFBd0Q7UUFDeEQseURBQXlEO1FBQ3pELHVEQUF1RDtRQUN2RCxzREFBc0Q7UUFDdEQseURBQXlEO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDSCx1Q0FBb0IsR0FBcEI7UUFDSSxnQkFBZ0I7UUFDaEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEs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QyxFQUFFLENBQUMsU0FBUyxHQWlMakQ7a0JBakxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgQ3VzdG9tU3ByaXRlIGZyb20gXCIuL0N1c3RvbVNwcml0ZVwiO1xuXG5jb25zdCB1c2VyID0ge1xuICAgIG5hbWU6IFwi5byg5LiJXCIsXG4gICAgYWdlOiAyNSxcbiAgICBpc0FjdGl2ZTogdHJ1ZVxufTtcblxudHlwZSBVc2VyS2V5cyA9IGtleW9mIHR5cGVvZiB1c2VyO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNvY29zU3BmOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBfY29jb3M6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8g5pWZ5a2m56S65L6L77ya5a2m5Lmg6IqC54K55bGe5oCn55qE5L2/55So5Zy65pmvXG4gICAgICAgIC8vIOWPr+S7peWPlua2iOazqOmHiuS4i+mdoueahOWHveaVsOadpea1i+ivleS4jeWQjOeahOWcuuaZr1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlQW5kQ29udHJvbCgpOyAgICAgIC8vIOWcuuaZrzHvvJrliJvlu7rlkoznrqHnkIboioLngrlcbiAgICAgICAgLy8gdGhpcy5ldmVudExpc3RlbmVyVXNhZ2UoKTsgICAgICAvLyDlnLrmma8y77ya6IqC54K55LqL5Lu255uR5ZCsXG4gICAgICAgIC8vIHRoaXMuZGVtbzNfU2NhbGVBbmltYXRpb24oKTsgICAgICAgICAgICAvLyDlnLrmma8z77ya57yp5pS+5Yqo55S7XG4gICAgICAgIC8vIHRoaXMuZGVtbzRfQ29sb3JBbmRPcGFjaXR5KCk7ICAgICAgICAgICAvLyDlnLrmma8077ya6aKc6Imy5ZKM6YCP5piO5bqmXG4gICAgICAgIC8vIHRoaXMuZGVtbzVfRmluZEFuZFZhbGlkYXRlTm9kZXMoKTsgICAgICAvLyDlnLrmma8177ya5p+l5om+5ZKM6aqM6K+B6IqC54K5XG4gICAgICAgIC8vIHRoaXMuZGVtbzZfTWFuYWdlQ2hpbGRyZW4oKTsgICAgICAgICAgICAvLyDlnLrmma8277ya566h55CG5a2Q6IqC54K5XG4gICAgICAgIC8vIHRoaXMuZGVtbzdfTGF5ZXJNYW5hZ2VtZW50KCk7ICAgICAgICAgICAvLyDlnLrmma8377ya5bGC57qn566h55CGXG4gICAgICAgIC8vIHRoaXMuZGVtbzhfTm9kZVNpemVBbmRBbmNob3IoKTsgICAgICAgICAvLyDlnLrmma8477ya6IqC54K55bC65a+45ZKM6ZSa54K5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zy65pmvMe+8muWIm+W7uuWSjOeuoeeQhuiKgueCuVxuICAgICAqIOWtpuS5oOWxnuaAp++8mm5hbWUsIGFjdGl2ZSwgYWRkQ2hpbGQsIGRlc3Ryb3ksIGRlc3Ryb3lBbGxDaGlsZHJlbiwgcGFyZW50XG4gICAgICovXG4gICAgY3JlYXRlTm9kZUFuZENvbnRyb2woKSB7XG4gICAgICAgIC8vIOWIm+W7uuS4gOS4quaWsOeahOiKgueCueW5tuiuvue9ruWQjeensFxuICAgICAgICBsZXQgY2hpbGROb2RlID0gbmV3IGNjLk5vZGUoXCJFbmVteV8wMDFcIik7XG4gICAgICAgIGxldCBzcENvbXAgPSBjaGlsZE5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGlmICh0aGlzLmNvY29zU3BmKSB7XG4gICAgICAgICAgICBzcENvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLmNvY29zU3BmO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDlsIblrZDoioLngrnmt7vliqDliLDlvZPliY3oioLngrlcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIC8vIGNoaWxkTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cbiAgICAgICAgdGhpcy5fY29jb3MgPSBjaGlsZE5vZGU7XG4gICAgICAgIFxuICAgICAgICAvLyDmo4Dmn6XoioLngrnkuI7niLboioLngrlcbiAgICAgICAgY29uc29sZS5sb2coXCLmlrDlu7rnmoToioLngrk6XCIsIGNoaWxkTm9kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5LuO6IqC54K55qCR5Lit5om+5Yiw5paw5bu655qE6IqC54K5XCIsIGNjLmZpbmQoXCJDYW52YXMvRW5lbXlfMDAxXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLku47niLboioLngrnnmoToioLngrnmoJHkuK3mib7liLDmlrDlu7rnmoToioLngrlcIiwgY2MuZmluZChcIkVuZW15XzAwMVwiLCB0aGlzLm5vZGUpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLlrZDoioLngrnnmoTniLboioLngrk6XCIsIGNoaWxkTm9kZS5wYXJlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeiKgueCueeahOWtkOiKgueCueaVsOmHjzpcIiwgY2hpbGROb2RlLnBhcmVudC5jaGlsZHJlbkNvdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnInlrZDoioLngrnmlbDnu4Q6XCIsIGNoaWxkTm9kZS5wYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgICBcbiAgICAgICAgLy8g5bu26L+fMeenkuWQjuWFs+mXreiKgueCuVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGlsZE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIH0sIDEpO1xuXG4gICAgICAgIC8vIOW7tui/nzHnp5LlkI7pmpDol4/oioLngrlcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgY2hpbGROb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyB9LCAxKTtcblxuICAgICAgICAvLyDlu7bov58x56eS5ZCO5L+u5pS56IqC54K55Z2Q5qCHXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIC8vIGNoaWxkTm9kZS5wb3NpdGlvbiA9IGNjLnYzKDEwMCwgMTAwLCAwKTtcbiAgICAgICAgLy8gICAgIGNoaWxkTm9kZS54ID0gMTAwO1xuICAgICAgICAvLyAgICAgY2hpbGROb2RlLnkgPSAxMDA7XG4gICAgICAgIC8vIH0sIDEpO1xuXG4gICAgICAgIC8vIOW7tui/nzHnp5LlkI7kv67mlLnoioLngrnop5LluqZcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGlsZE5vZGUuYW5nbGUgLT0gMTtcbiAgICAgICAgLy8gfSwgMC4wMSk7XG5cbiAgICAgICAgLy8g5bu26L+fMeenkuWQjuS/ruaUueiKgueCuee8qeaUvlxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGlsZE5vZGUuc2NhbGUgPSAyLjA7XG4gICAgICAgIC8vICAgICBjaGlsZE5vZGUuc2NhbGVYID0gMi4wO1xuICAgICAgICAvLyAgICAgY2hpbGROb2RlLnNjYWxlWSA9IDIuMDtcbiAgICAgICAgLy8gfSwgMSk7XG5cbiAgICAgICAgLy8g5bu26L+fMeenkuWQjuS/ruaUueiKgueCueminOiJslxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBjaGlsZE5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIC8vICAgICAvLyBjaGlsZE5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKTtcbiAgICAgICAgLy8gfSwgMSk7XG5cbiAgICAgICAgLy8g5bu26L+fMeenkuWQjumUgOavgeWtkOiKgueCuVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJFbmVteV8wMDFcIikuZGVzdHJveSgpICAvLyDplIDmr4HlrZDoioLngrlcbiAgICAgICAgLy8gfSwgMSk7XG5cbiAgICAgICAgLy8g5bu26L+fMeenkuWQjuS7juiKgueCueagkeenu+mZpOWtkOiKgueCue+8jOS9huS/neeVmeiKgueCueWvueixoeaVsOaNrlxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTsgIC8vIOenu+mZpOWtkOiKgueCuVxuICAgICAgICAvLyB9LCAxKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOW7tui/nzHnp5LlkI7plIDmr4HmiYDmnInlrZDoioLngrlcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpOyAgLy8g6ZSA5q+B5omA5pyJ5a2Q6IqC54K5XG4gICAgICAgIC8vIH0sIDEpO1xuXG4gICAgICAgIC8vIOW7tui/nzHnp5LlkI7kv67mlLnoioLngrnnmoTmuLLmn5PlsYLnuqfmiJboioLngrnlsYLnuqdcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlc3ROb2RlXCIpLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIC8vICAgICAvLyBjaGlsZE5vZGUuekluZGV4ID0gLTE7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjaGlsZE5vZGUuZ2V0U2libGluZ0luZGV4KCkpO1xuICAgICAgICAvLyAgICAgY2hpbGROb2RlLnNldFNpYmxpbmdJbmRleCgxMDAwKTtcbiAgICAgICAgLy8gfSwgMylcblxuICAgICAgICAvLyDlu7bov58x56eS5ZCO5L+u5pS56IqC54K55bC65a+4XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCB0ZXN0Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlc3ROb2RlXCIpO1xuICAgICAgICAvLyAgICAgaWYgKHRlc3ROb2RlKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gdGVzdE5vZGUud2lkdGggPSAzMDA7XG4gICAgICAgIC8vICAgICAgICAgLy8gdGVzdE5vZGUuaGVpZ2h0ID0gMTIwO1xuICAgICAgICAvLyAgICAgICAgIC8vIHRlc3ROb2RlLnNldENvbnRlbnRTaXplKDMwMCwgMTIwKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbmV3U2l6ZSA9IG5ldyBjYy5TaXplKDMwMCwgMTIwKTtcbiAgICAgICAgLy8gICAgICAgICB0ZXN0Tm9kZS5zZXRDb250ZW50U2l6ZShuZXdTaXplKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygn5L+u5pS55ZCO55qE5bC65a+4OicsIHRlc3ROb2RlLndpZHRoLCB0ZXN0Tm9kZS5oZWlnaHQpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCAxKTtcblxuICAgICAgICAvLyDlu7bov58x56eS5ZCO5L+u5pS56IqC54K56ZSa54K5XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCB0ZXN0Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlc3ROb2RlXCIpO1xuICAgICAgICAvLyAgICAgaWYgKHRlc3ROb2RlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGVzdE5vZGUuYW5jaG9yWCA9IDE7XG4gICAgICAgIC8vICAgICAgICAgdGVzdE5vZGUuYW5jaG9yWSA9IDA7XG4gICAgICAgIC8vICAgICAgICAgLy8gdGVzdE5vZGUuc2V0QW5jaG9yUG9pbnQoMSwgMCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ+S/ruaUueWQjueahOmUmueCuTonLCB0ZXN0Tm9kZS5hbmNob3JYLCB0ZXN0Tm9kZS5hbmNob3JZKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgMSk7XG5cbiAgICAgICAgLy8g5bu26L+fMeenkuWQjuS/ruaUueiKgueCueWIhue7hFxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgdGVzdE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXN0Tm9kZVwiKTtcbiAgICAgICAgLy8gICAgIGlmICh0ZXN0Tm9kZSkge1xuICAgICAgICAvLyAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAvLyAgICAgICAgIHRlc3ROb2RlLmdyb3VwID0gY2MuZ2FtZS5ncm91cExpc3RbMV07ICAvLyDkv67mlLnliIbnu4TlkI3kuLogb3RoZXJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygn5L+u5pS55ZCO55qE5YiG57uEOicsIHRlc3ROb2RlLmdyb3VwKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LqL5Lu25Zue6LCD5Ye95pWw77yM5ryU56S66IqC54K56Kem5pG457uT5p2f5LqL5Lu2XG4gICAgICovXG4gICAgb25Ub3VjaEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgY2MubG9nKFwi6IqC54K56Kem5Y+R5LqGIFRPVUNIX0VORCDkuovku7ZcIiwgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOekuuS+i++8muebkeWQrOOAgeenu+mZpOWSjOaJuemHj+enu+mZpOiKgueCueS6i+S7tueahOeUqOazlVxuICAgICAqL1xuICAgIGV2ZW50TGlzdGVuZXJVc2FnZSgpIHtcbiAgICAgICAgLy8gMS4g5L2/55SoIHRoaXMubm9kZS5vbiDnm5HlkKzoioLngrnkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoSGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgLy8g5bu26L+fMuenkuWQjuenu+mZpOaMh+WumueahOS6i+S7tuebkeWQrOWZqFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyAyLiDkvb/nlKggdGhpcy5ub2RlLm9mZiDnp7vpmaTmjIflrprnmoTnm5HlkKzlmahcbiAgICAgICAgICAgIGNjLmxvZyhcIuenu+mZpCBvblRvdWNoSGFuZGxlciDnm5HlkKzlmahcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIH0sIDIpO1xuXG4gICAgICAgIC8vIOWGjeasoea3u+WKoOWkmuS4quS6i+S7tuebkeWQrOWZqFxuICAgICAgICBjb25zdCBjYjEgPSBmdW5jdGlvbihldnQpIHsgY2MubG9nKFwiY2IxXCIpOyB9O1xuICAgICAgICBjb25zdCBjYjIgPSBmdW5jdGlvbihldnQpIHsgY2MubG9nKFwiY2IyXCIpOyB9O1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGNiMSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGNiMiwgdGhpcyk7XG5cbiAgICAgICAgLy8g5bu26L+fNOenkuWQjuaJuemHj+enu+mZpOaJgOacieS7pSBgdGhpc2Ag5Li6IHRhcmdldCDnmoTkuovku7bnm5HlkKxcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8gMy4g5L2/55SoIHRoaXMubm9kZS50YXJnZXRPZmYodGhpcykg5LiA5qyh5oCn56e76ZmkXG4gICAgICAgICAgICBjYy5sb2coXCLmibnph4/np7vpmaTmiYDmnInku6UgdGhpcyDkuLogdGFyZ2V0IOeahOS6i+S7tuebkeWQrOWZqFwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS50YXJnZXRPZmYodGhpcyk7XG4gICAgICAgIH0sIDQpO1xuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
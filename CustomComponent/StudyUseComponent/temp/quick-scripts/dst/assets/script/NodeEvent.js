
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/NodeEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTm9kZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQU0sVUFBVSxHQUFHO0lBQ2YsU0FBUztJQUNULFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO0lBQzFDLFNBQVM7SUFDVCxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtJQUN4QyxTQUFTO0lBQ1QsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7SUFDdEMsU0FBUztJQUNULFlBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO0lBQzVDLFNBQVM7SUFDVCxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtJQUN4QyxTQUFTO0lBQ1QsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7SUFDeEMsV0FBVztJQUNYLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO0lBQzFDLFdBQVc7SUFDWCxXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVztJQUMxQyxTQUFTO0lBQ1QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7SUFDcEMsU0FBUztJQUNULFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO0lBQzFDLFdBQVc7SUFDWCxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0I7SUFDcEQsV0FBVztJQUNYLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO0lBQzlDLFdBQVc7SUFDWCxjQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYztJQUNoRCxXQUFXO0lBQ1gsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7SUFDNUMsV0FBVztJQUNYLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO0lBQzlDLFdBQVc7SUFDWCxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0I7SUFDcEQsV0FBVztJQUNYLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO0lBQzFDLFdBQVc7SUFDWCxhQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTtJQUM5QyxZQUFZO0lBQ1osYUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7SUFDOUMsV0FBVztJQUNYLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO0lBQzlDLGFBQWE7SUFDYixxQkFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUI7Q0FDakUsQ0FBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEOztJQWlFQSxDQUFDO0lBL0RHLDJCQUFRLEdBQVI7UUFDSSxLQUFLLElBQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUMxQixJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksS0FBSyxJQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDMUIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRUQsc0NBQW1CLEdBQW5CLFVBQXFCLGtCQUF1QjtRQUN4QyxJQUFJLGtCQUFrQixZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzthQUFNLElBQUksa0JBQWtCLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO2FBQU0sSUFBSSxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxrQkFBa0IsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFoRWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRTVCO0lBQUQsZUFBQztDQWpFRCxBQWlFQyxDQWpFcUMsRUFBRSxDQUFDLFNBQVMsR0FpRWpEO2tCQWpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRVZFTlRfVFlQRSA9IHtcbiAgICAvLyDop6bmkbjlvIDlp4vkuovku7ZcbiAgICBUT1VDSF9TVEFSVDogY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgLy8g6Kem5pG456e75Yqo5LqL5Lu2XG4gICAgVE9VQ0hfTU9WRTogY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSxcbiAgICAvLyDop6bmkbjnu5PmnZ/kuovku7ZcbiAgICBUT1VDSF9FTkQ6IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAvLyDop6bmkbjlj5bmtojkuovku7ZcbiAgICBUT1VDSF9DQU5DRUw6IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCxcbiAgICAvLyDpvKDmoIfmjInkuIvkuovku7ZcbiAgICBNT1VTRV9ET1dOOiBjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLFxuICAgIC8vIOm8oOagh+enu+WKqOS6i+S7tlxuICAgIE1PVVNFX01PVkU6IGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsXG4gICAgLy8g6byg5qCH6L+b5YWl6IqC54K55LqL5Lu2XG4gICAgTU9VU0VfRU5URVI6IGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLFxuICAgIC8vIOm8oOagh+enu+WHuuiKgueCueS6i+S7tlxuICAgIE1PVVNFX0xFQVZFOiBjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSxcbiAgICAvLyDpvKDmoIfmnb7lvIDkuovku7ZcbiAgICBNT1VTRV9VUDogY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsXG4gICAgLy8g6byg5qCH5rua6L2u5LqL5Lu2XG4gICAgTU9VU0VfV0hFRUw6IGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1dIRUVMLFxuICAgIC8vIOiKgueCueS9jee9ruaUueWPmOS6i+S7tlxuICAgIFBPU0lUSU9OX0NIQU5HRUQ6IGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsXG4gICAgLy8g6IqC54K56aKc6Imy5pS55Y+Y5LqL5Lu2XG4gICAgQ09MT1JfQ0hBTkdFRDogY2MuTm9kZS5FdmVudFR5cGUuQ09MT1JfQ0hBTkdFRCxcbiAgICAvLyDoioLngrnplJrngrnmlLnlj5jkuovku7ZcbiAgICBBTkNIT1JfQ0hBTkdFRDogY2MuTm9kZS5FdmVudFR5cGUuQU5DSE9SX0NIQU5HRUQsXG4gICAgLy8g6IqC54K55bC65a+45pS55Y+Y5LqL5Lu2XG4gICAgU0laRV9DSEFOR0VEOiBjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsXG4gICAgLy8g6IqC54K557yp5pS+5pS55Y+Y5LqL5Lu2XG4gICAgU0NBTEVfQ0hBTkdFRDogY2MuTm9kZS5FdmVudFR5cGUuU0NBTEVfQ0hBTkdFRCxcbiAgICAvLyDoioLngrnml4vovazmlLnlj5jkuovku7ZcbiAgICBST1RBVElPTl9DSEFOR0VEOiBjYy5Ob2RlLkV2ZW50VHlwZS5ST1RBVElPTl9DSEFOR0VELFxuICAgIC8vIOWtkOiKgueCueiiq+a3u+WKoOS6i+S7tlxuICAgIENISUxEX0FEREVEOiBjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9BRERFRCxcbiAgICAvLyDlrZDoioLngrnooqvnp7vpmaTkuovku7ZcbiAgICBDSElMRF9SRU1PVkVEOiBjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9SRU1PVkVELFxuICAgIC8vIOWtkOiKgueCuemhuuW6j+aUueWPmOS6i+S7tlxuICAgIENISUxEX1JFT1JERVI6IGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFT1JERVIsXG4gICAgLy8g6IqC54K55YiG57uE5pS55Y+Y5LqL5Lu2XG4gICAgR1JPVVBfQ0hBTkdFRDogY2MuTm9kZS5FdmVudFR5cGUuR1JPVVBfQ0hBTkdFRCxcbiAgICAvLyDoioLngrnlhYTlvJ/pobrluo/mlLnlj5jkuovku7ZcbiAgICBTSUJMSU5HX09SREVSX0NIQU5HRUQ6IGNjLk5vZGUuRXZlbnRUeXBlLlNJQkxJTkdfT1JERVJfQ0hBTkdFRCxcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gRVZFTlRfVFlQRSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEVWRU5UX1RZUEVba2V5XTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihlbGVtZW50LCB0aGlzLm9uTm9kZUV2ZW50Q2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlICgpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gRVZFTlRfVFlQRSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEVWRU5UX1RZUEVba2V5XTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoZWxlbWVudCwgdGhpcy5vbk5vZGVFdmVudENhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTm9kZUV2ZW50Q2FsbGJhY2sgKGV2ZW50T3JOb2RlT3JPdGhlcjogYW55KSB7XG4gICAgICAgIGlmIChldmVudE9yTm9kZU9yT3RoZXIgaW5zdGFuY2VvZiBjYy5FdmVudCkge1xuICAgICAgICAgICAgY2MubG9nKGV2ZW50T3JOb2RlT3JPdGhlci50eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE9yTm9kZU9yT3RoZXIgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XG4gICAgICAgICAgICBjYy5sb2coZXZlbnRPck5vZGVPck90aGVyLm5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKFN0cmluZyhldmVudE9yTm9kZU9yT3RoZXIpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2MubG9nKFwibWF5IGNoYW5nZSBzY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudE9yTm9kZU9yT3RoZXIgaW5zdGFuY2VvZiBjYy5Db2xvcikge1xuICAgICAgICAgICAgY2MubG9nKGV2ZW50T3JOb2RlT3JPdGhlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDaGlsZCAoKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IG5ldyBjYy5Ob2RlKFwiY2hpbGRcIik7XG4gICAgICAgIGNoaWxkLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQgKCkge1xuICAgICAgICB0aGlzLmFkZENoaWxkKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMjtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb250ZW50U2l6ZSAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSgxMDAsIDEwMCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUG9zaXRpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygxMDAsIDEwMCwgMCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUm90YXRpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSA0NTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvciAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICB9XG5cbiAgICBjaGFuZ2VBbmNob3IgKCkge1xuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDAuNTtcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwLjU7XG4gICAgfVxufVxuIl19
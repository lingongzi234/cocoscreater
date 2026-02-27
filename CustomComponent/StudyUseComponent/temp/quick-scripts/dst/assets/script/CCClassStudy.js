
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/CCClassStudy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7acc4x8HPxJRbTXlbpQ1R/9', 'CCClassStudy');
// script/CCClassStudy.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu, disallowMultiple = _a.disallowMultiple, inspector = _a.inspector;
var NAMES = cc.Enum({
    ZHEFENG: 0,
    XIAOMING: 1,
    XIAOQIANG: 2
});
var CCClassStudy = /** @class */ (function (_super) {
    __extends(CCClassStudy, _super);
    function CCClassStudy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._userName = NAMES.ZHEFENG;
        return _this;
    }
    Object.defineProperty(CCClassStudy.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            if (!isNaN(value) && value !== this._userName) {
                this._userName = value;
                cc.log("changed userName, name is [" + this._userName + "] now");
            }
        },
        enumerable: false,
        configurable: true
    });
    CCClassStudy.prototype.onLoad = function () {
        cc.log("call onLoad function in editor");
    };
    CCClassStudy.prototype.start = function () {
        cc.log("call start function in editor");
    };
    CCClassStudy.prototype.onEnable = function () {
        cc.log("call onEnable function in editor");
    };
    CCClassStudy.prototype.onFocusInEditor = function () {
        cc.log("call onFocus function in editor");
    };
    CCClassStudy.prototype.onLostFocusInEditor = function () {
        cc.log("call onLostFocus function in editor");
    };
    CCClassStudy.prototype.resetInEditor = function () {
        cc.log("call reset function in editor");
    };
    __decorate([
        property({ type: NAMES })
    ], CCClassStudy.prototype, "userName", null);
    CCClassStudy = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label),
        menu("CustomComp/CCClassStudy"),
        disallowMultiple,
        inspector("packages://property-enum/inspector/customInspector.js")
    ], CCClassStudy);
    return CCClassStudy;
}(cc.Component));
exports.default = CCClassStudy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQ0NDbGFzc1N0dWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBOEYsRUFBRSxDQUFDLFVBQVUsRUFBMUcsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsU0FBUyxlQUFpQixDQUFDO0FBRWxILElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDVixRQUFRLEVBQUUsQ0FBQztJQUNYLFNBQVMsRUFBRSxDQUFDO0NBQ2YsQ0FBQyxDQUFBO0FBUUY7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1Q0M7UUFyQ0csZUFBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7O0lBcUM5QixDQUFDO0lBbENHLHNCQUFJLGtDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBOEIsSUFBSSxDQUFDLFNBQVMsVUFBTyxDQUFDLENBQUM7YUFDL0Q7UUFDTCxDQUFDOzs7T0FQQTtJQVNELDZCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDBDQUFtQixHQUFuQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO2dEQUd2QjtJQVBnQixZQUFZO1FBTmhDLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDL0IsZ0JBQWdCO1FBQ2hCLFNBQVMsQ0FBQyx1REFBdUQsQ0FBQztPQUM5QyxZQUFZLENBdUNoQztJQUFELG1CQUFDO0NBdkNELEFBdUNDLENBdkN5QyxFQUFFLENBQUMsU0FBUyxHQXVDckQ7a0JBdkNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIHJlcXVpcmVDb21wb25lbnQsIG1lbnUsIGRpc2FsbG93TXVsdGlwbGUsIGluc3BlY3Rvcn0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBOQU1FUyA9IGNjLkVudW0oe1xuICAgIFpIRUZFTkc6IDAsXG4gICAgWElBT01JTkc6IDEsXG4gICAgWElBT1FJQU5HOiAyXG59KVxuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AcmVxdWlyZUNvbXBvbmVudChjYy5MYWJlbClcbkBtZW51KFwiQ3VzdG9tQ29tcC9DQ0NsYXNzU3R1ZHlcIilcbkBkaXNhbGxvd011bHRpcGxlXG5AaW5zcGVjdG9yKFwicGFja2FnZXM6Ly9wcm9wZXJ0eS1lbnVtL2luc3BlY3Rvci9jdXN0b21JbnNwZWN0b3IuanNcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENDQ2xhc3NTdHVkeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBfdXNlck5hbWUgPSBOQU1FUy5aSEVGRU5HO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOQU1FU30pXG4gICAgZ2V0IHVzZXJOYW1lICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJOYW1lO1xuICAgIH1cblxuICAgIHNldCB1c2VyTmFtZSAodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSAmJiB2YWx1ZSAhPT0gdGhpcy5fdXNlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICBjYy5sb2coYGNoYW5nZWQgdXNlck5hbWUsIG5hbWUgaXMgWyR7dGhpcy5fdXNlck5hbWV9XSBub3dgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MubG9nKFwiY2FsbCBvbkxvYWQgZnVuY3Rpb24gaW4gZWRpdG9yXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MubG9nKFwiY2FsbCBzdGFydCBmdW5jdGlvbiBpbiBlZGl0b3JcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICBjYy5sb2coXCJjYWxsIG9uRW5hYmxlIGZ1bmN0aW9uIGluIGVkaXRvclwiKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzSW5FZGl0b3IoKSB7XG4gICAgICAgIGNjLmxvZyhcImNhbGwgb25Gb2N1cyBmdW5jdGlvbiBpbiBlZGl0b3JcIik7XG4gICAgfVxuXG4gICAgb25Mb3N0Rm9jdXNJbkVkaXRvcigpIHtcbiAgICAgICAgY2MubG9nKFwiY2FsbCBvbkxvc3RGb2N1cyBmdW5jdGlvbiBpbiBlZGl0b3JcIik7XG4gICAgfVxuXG4gICAgcmVzZXRJbkVkaXRvciAoKSB7XG4gICAgICAgIGNjLmxvZyhcImNhbGwgcmVzZXQgZnVuY3Rpb24gaW4gZWRpdG9yXCIpO1xuICAgIH1cbn1cbiJdfQ==
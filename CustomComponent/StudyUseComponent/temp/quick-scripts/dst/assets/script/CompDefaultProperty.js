
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/CompDefaultProperty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ca8e5YDr9EJ7Bxn8dVDZZZ', 'CompDefaultProperty');
// script/CompDefaultProperty.ts

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
var CompDefaultProperty = /** @class */ (function (_super) {
    __extends(CompDefaultProperty, _super);
    function CompDefaultProperty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logTimes = 0;
        return _this;
    }
    CompDefaultProperty.prototype.start = function () {
        //时间单位是 秒
        this.schedule(this.testFunc, 1, 2, 1);
    };
    CompDefaultProperty.prototype.testFunc = function () {
        var _this = this;
        if (this.logTimes >= 2) {
            this.unschedule(this.testFunc);
            this.destroy();
            setTimeout(function () {
                console.log("this.comp.isValid is " + _this.isValid);
            });
        }
        else {
            console.log("test log times is " + ++this.logTimes + ". \n                this.comp.node is " + this.node.name + ", \n                this.comp.uuid id " + this.uuid + ", this.comp.enabled is " + this.enabled + ", \n                this.comp.enabledInHierarchy is " + this.enabledInHierarchy + ",\n                this.comp.isValid is " + this.isValid);
        }
    };
    CompDefaultProperty = __decorate([
        ccclass
    ], CompDefaultProperty);
    return CompDefaultProperty;
}(cc.Component));
exports.default = CompDefaultProperty;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQ29tcERlZmF1bHRQcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQXVCQztRQXRCRyxjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQXNCekIsQ0FBQztJQXBCRyxtQ0FBSyxHQUFMO1FBQ0ksU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLFVBQVUsQ0FBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBcUIsRUFBRSxJQUFJLENBQUMsUUFBUSw4Q0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUNkLElBQUksQ0FBQyxJQUFJLCtCQUEwQixJQUFJLENBQUMsT0FBTyw0REFDakMsSUFBSSxDQUFDLGtCQUFrQixnREFDbEMsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQXRCZ0IsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0F1QnZDO0lBQUQsMEJBQUM7Q0F2QkQsQUF1QkMsQ0F2QmdELEVBQUUsQ0FBQyxTQUFTLEdBdUI1RDtrQkF2Qm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcERlZmF1bHRQcm9wZXJ0eSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgbG9nVGltZXM6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8v5pe26Ze05Y2V5L2N5pivIOenklxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGVzdEZ1bmMsIDEsIDIsIDEpO1xuICAgIH1cblxuICAgIHRlc3RGdW5jICgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nVGltZXMgPj0gMikge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGVzdEZ1bmMpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoaXMuY29tcC5pc1ZhbGlkIGlzICR7dGhpcy5pc1ZhbGlkfWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0ZXN0IGxvZyB0aW1lcyBpcyAkeysrdGhpcy5sb2dUaW1lc30uIFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcC5ub2RlIGlzICR7dGhpcy5ub2RlLm5hbWV9LCBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXAudXVpZCBpZCAke3RoaXMudXVpZH0sIHRoaXMuY29tcC5lbmFibGVkIGlzICR7dGhpcy5lbmFibGVkfSwgXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wLmVuYWJsZWRJbkhpZXJhcmNoeSBpcyAke3RoaXMuZW5hYmxlZEluSGllcmFyY2h5fSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXAuaXNWYWxpZCBpcyAke3RoaXMuaXNWYWxpZH1gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/ray-cast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0ac7pO5kxGfbsNUATZzFfK', 'ray-cast');
// cases/demo/ray-cast.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    rayCastType: {
      "default": cc.RayCastType.Closest,
      type: cc.RayCastType
    },
    radius: 1000
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.ctx = this.getComponent(cc.Graphics);
    this.angle = 0;
    this.center = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var _this = this;

    this.angle += Math.PI / 10 * dt;
    var p1 = this.center;
    var p2 = cc.v2(Math.cos(this.angle), Math.sin(this.angle)).mulSelf(this.radius).addSelf(this.center);
    var manager = cc.director.getPhysicsManager();
    var results = manager.rayCast(p1, p2, this.rayCastType);
    this.ctx.clear();

    if (this.rayCastType === cc.RayCastType.Closest || this.rayCastType === cc.RayCastType.Any) {
      if (results[0]) {
        p2 = results[0].point;
      }
    }

    results.forEach(function (result) {
      _this.ctx.circle(result.point.x, result.point.y, 5);
    });
    this.ctx.fill();
    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.stroke();
  },
  onClosestBtnClick: function onClosestBtnClick() {
    this.rayCastType = cc.RayCastType.Closest;
  },
  onAnyBtnClick: function onAnyBtnClick() {
    this.rayCastType = cc.RayCastType.Any;
  },
  onAllClosestBtnClick: function onAllClosestBtnClick() {
    this.rayCastType = cc.RayCastType.AllClosest;
  },
  onAllBtnClick: function onAllBtnClick() {
    this.rayCastType = cc.RayCastType.All;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3JheS1jYXN0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmF5Q2FzdFR5cGUiLCJSYXlDYXN0VHlwZSIsIkNsb3Nlc3QiLCJ0eXBlIiwicmFkaXVzIiwib25Mb2FkIiwiY3R4IiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJhbmdsZSIsImNlbnRlciIsInYyIiwid2luU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiUEkiLCJwMSIsInAyIiwiY29zIiwic2luIiwibXVsU2VsZiIsImFkZFNlbGYiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsInJlc3VsdHMiLCJyYXlDYXN0IiwiY2xlYXIiLCJBbnkiLCJwb2ludCIsImZvckVhY2giLCJyZXN1bHQiLCJjaXJjbGUiLCJ4IiwieSIsImZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJvbkNsb3Nlc3RCdG5DbGljayIsIm9uQW55QnRuQ2xpY2siLCJvbkFsbENsb3Nlc3RCdG5DbGljayIsIkFsbENsb3Nlc3QiLCJvbkFsbEJ0bkNsaWNrIiwiQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFO01BQ1QsV0FBU0osRUFBRSxDQUFDSyxXQUFILENBQWVDLE9BRGY7TUFFVEMsSUFBSSxFQUFFUCxFQUFFLENBQUNLO0lBRkEsQ0FETDtJQU1SRyxNQUFNLEVBQUU7RUFOQSxDQUhQO0VBWUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLEdBQUwsR0FBVyxLQUFLQyxZQUFMLENBQWtCWCxFQUFFLENBQUNZLFFBQXJCLENBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY2QsRUFBRSxDQUFDZSxFQUFILENBQU1mLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0MsS0FBWCxHQUFpQixDQUF2QixFQUEwQmpCLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0UsTUFBWCxHQUFrQixDQUE1QyxDQUFkO0VBQ0gsQ0FqQkk7RUFtQkw7RUFDQUMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFBQTs7SUFDbEIsS0FBS1AsS0FBTCxJQUFjUSxJQUFJLENBQUNDLEVBQUwsR0FBVSxFQUFWLEdBQWVGLEVBQTdCO0lBRUEsSUFBSUcsRUFBRSxHQUFHLEtBQUtULE1BQWQ7SUFDQSxJQUFJVSxFQUFFLEdBQUd4QixFQUFFLENBQUNlLEVBQUgsQ0FBTU0sSUFBSSxDQUFDSSxHQUFMLENBQVMsS0FBS1osS0FBZCxDQUFOLEVBQTRCUSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLYixLQUFkLENBQTVCLEVBQWtEYyxPQUFsRCxDQUEwRCxLQUFLbkIsTUFBL0QsRUFBdUVvQixPQUF2RSxDQUFnRixLQUFLZCxNQUFyRixDQUFUO0lBRUEsSUFBSWUsT0FBTyxHQUFHN0IsRUFBRSxDQUFDOEIsUUFBSCxDQUFZQyxpQkFBWixFQUFkO0lBQ0EsSUFBSUMsT0FBTyxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0JWLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QixLQUFLcEIsV0FBN0IsQ0FBZDtJQUVBLEtBQUtNLEdBQUwsQ0FBU3dCLEtBQVQ7O0lBRUEsSUFBSSxLQUFLOUIsV0FBTCxLQUFxQkosRUFBRSxDQUFDSyxXQUFILENBQWVDLE9BQXBDLElBQ0EsS0FBS0YsV0FBTCxLQUFxQkosRUFBRSxDQUFDSyxXQUFILENBQWU4QixHQUR4QyxFQUM2QztNQUN6QyxJQUFJSCxPQUFPLENBQUMsQ0FBRCxDQUFYLEVBQWdCO1FBQ1pSLEVBQUUsR0FBR1EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSSxLQUFoQjtNQUNIO0lBQ0o7O0lBRURKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFBQyxNQUFNLEVBQUk7TUFDdEIsS0FBSSxDQUFDNUIsR0FBTCxDQUFTNkIsTUFBVCxDQUFnQkQsTUFBTSxDQUFDRixLQUFQLENBQWFJLENBQTdCLEVBQWdDRixNQUFNLENBQUNGLEtBQVAsQ0FBYUssQ0FBN0MsRUFBZ0QsQ0FBaEQ7SUFDSCxDQUZEO0lBSUEsS0FBSy9CLEdBQUwsQ0FBU2dDLElBQVQ7SUFFQSxLQUFLaEMsR0FBTCxDQUFTaUMsTUFBVCxDQUFnQnBCLEVBQUUsQ0FBQ2lCLENBQW5CLEVBQXNCakIsRUFBRSxDQUFDa0IsQ0FBekI7SUFDQSxLQUFLL0IsR0FBTCxDQUFTa0MsTUFBVCxDQUFnQnBCLEVBQUUsQ0FBQ2dCLENBQW5CLEVBQXNCaEIsRUFBRSxDQUFDaUIsQ0FBekI7SUFDQSxLQUFLL0IsR0FBTCxDQUFTbUMsTUFBVDtFQUNILENBL0NJO0VBaURMQyxpQkFBaUIsRUFBRSw2QkFBWTtJQUMzQixLQUFLMUMsV0FBTCxHQUFtQkosRUFBRSxDQUFDSyxXQUFILENBQWVDLE9BQWxDO0VBQ0gsQ0FuREk7RUFxREx5QyxhQUFhLEVBQUUseUJBQVk7SUFDdkIsS0FBSzNDLFdBQUwsR0FBbUJKLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlOEIsR0FBbEM7RUFDSCxDQXZESTtFQXlETGEsb0JBQW9CLEVBQUUsZ0NBQVk7SUFDOUIsS0FBSzVDLFdBQUwsR0FBbUJKLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlNEMsVUFBbEM7RUFDSCxDQTNESTtFQTZETEMsYUFBYSxFQUFFLHlCQUFZO0lBQ3ZCLEtBQUs5QyxXQUFMLEdBQW1CSixFQUFFLENBQUNLLFdBQUgsQ0FBZThDLEdBQWxDO0VBQ0g7QUEvREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmF5Q2FzdFR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLlJheUNhc3RUeXBlLkNsb3Nlc3QsXG4gICAgICAgICAgICB0eXBlOiBjYy5SYXlDYXN0VHlwZVxuICAgICAgICB9LFxuXG4gICAgICAgIHJhZGl1czogMTAwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmNlbnRlciA9IGNjLnYyKGNjLndpblNpemUud2lkdGgvMiwgY2Mud2luU2l6ZS5oZWlnaHQvMik7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdGhpcy5hbmdsZSArPSBNYXRoLlBJIC8gMTAgKiBkdDtcblxuICAgICAgICB2YXIgcDEgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgdmFyIHAyID0gY2MudjIoTWF0aC5jb3ModGhpcy5hbmdsZSksIE1hdGguc2luKHRoaXMuYW5nbGUpKS5tdWxTZWxmKHRoaXMucmFkaXVzKS5hZGRTZWxmKCB0aGlzLmNlbnRlciApO1xuXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBtYW5hZ2VyLnJheUNhc3QocDEsIHAyLCB0aGlzLnJheUNhc3RUeXBlKTtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhcigpO1xuXG4gICAgICAgIGlmICh0aGlzLnJheUNhc3RUeXBlID09PSBjYy5SYXlDYXN0VHlwZS5DbG9zZXN0IHx8XG4gICAgICAgICAgICB0aGlzLnJheUNhc3RUeXBlID09PSBjYy5SYXlDYXN0VHlwZS5BbnkpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdKSB7XG4gICAgICAgICAgICAgICAgcDIgPSByZXN1bHRzWzBdLnBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jaXJjbGUocmVzdWx0LnBvaW50LngsIHJlc3VsdC5wb2ludC55LCA1KTtcbiAgICAgICAgfSk7ICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9LFxuXG4gICAgb25DbG9zZXN0QnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkNsb3Nlc3Q7XG4gICAgfSxcblxuICAgIG9uQW55QnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkFueTtcbiAgICB9LFxuXG4gICAgb25BbGxDbG9zZXN0QnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkFsbENsb3Nlc3Q7XG4gICAgfSxcblxuICAgIG9uQWxsQnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkFsbDtcbiAgICB9XG59KTtcbiJdfQ==
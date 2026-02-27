
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/ray-cast-reflection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42cf8MpDYNJzZAXam4qVOMI', 'ray-cast-reflection');
// cases/demo/ray-cast-reflection.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
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
    this.angle += Math.PI / 20 * dt;
    var p1 = this.center;
    var p2 = cc.v2(Math.cos(this.angle), Math.sin(this.angle)).mulSelf(this.radius).addSelf(this.center);
    this.ctx.clear();
    this.remainLength = this.radius;
    this.rayCast(p1, p2);
  },
  rayCast: function rayCast(p1, p2) {
    var manager = cc.director.getPhysicsManager();
    var result = manager.rayCast(p1, p2)[0];

    if (result) {
      p2 = result.point;
      this.ctx.circle(p2.x, p2.y, 5);
      this.ctx.fill();
    }

    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.stroke();
    if (!result) return;
    this.remainLength = this.remainLength - p2.sub(p1).mag();
    if (this.remainLength < 1) return;
    result.normal.mul(this.remainLength);
    p1 = p2;
    p2 = result.normal.mul(this.remainLength).add(p1);
    this.rayCast(p1, p2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3JheS1jYXN0LXJlZmxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyYWRpdXMiLCJvbkxvYWQiLCJjdHgiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsImFuZ2xlIiwiY2VudGVyIiwidjIiLCJ3aW5TaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJQSSIsInAxIiwicDIiLCJjb3MiLCJzaW4iLCJtdWxTZWxmIiwiYWRkU2VsZiIsImNsZWFyIiwicmVtYWluTGVuZ3RoIiwicmF5Q2FzdCIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwicmVzdWx0IiwicG9pbnQiLCJjaXJjbGUiLCJ4IiwieSIsImZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdWIiLCJtYWciLCJub3JtYWwiLCJtdWwiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7RUFEQSxDQUhQO0VBT0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLEdBQUwsR0FBVyxLQUFLQyxZQUFMLENBQWtCUCxFQUFFLENBQUNRLFFBQXJCLENBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY1YsRUFBRSxDQUFDVyxFQUFILENBQU1YLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXQyxLQUFYLEdBQWlCLENBQXZCLEVBQTBCYixFQUFFLENBQUNZLE9BQUgsQ0FBV0UsTUFBWCxHQUFrQixDQUE1QyxDQUFkO0VBQ0gsQ0FaSTtFQWNMO0VBQ0FDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLEtBQUtQLEtBQUwsSUFBY1EsSUFBSSxDQUFDQyxFQUFMLEdBQVUsRUFBVixHQUFlRixFQUE3QjtJQUVBLElBQUlHLEVBQUUsR0FBRyxLQUFLVCxNQUFkO0lBQ0EsSUFBSVUsRUFBRSxHQUFHcEIsRUFBRSxDQUFDVyxFQUFILENBQU1NLElBQUksQ0FBQ0ksR0FBTCxDQUFTLEtBQUtaLEtBQWQsQ0FBTixFQUE0QlEsSUFBSSxDQUFDSyxHQUFMLENBQVMsS0FBS2IsS0FBZCxDQUE1QixFQUFrRGMsT0FBbEQsQ0FBMEQsS0FBS25CLE1BQS9ELEVBQXVFb0IsT0FBdkUsQ0FBZ0YsS0FBS2QsTUFBckYsQ0FBVDtJQUVBLEtBQUtKLEdBQUwsQ0FBU21CLEtBQVQ7SUFFQSxLQUFLQyxZQUFMLEdBQW9CLEtBQUt0QixNQUF6QjtJQUNBLEtBQUt1QixPQUFMLENBQWFSLEVBQWIsRUFBaUJDLEVBQWpCO0VBQ0gsQ0F6Qkk7RUEyQkxPLE9BQU8sRUFBRSxpQkFBVVIsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0lBQ3ZCLElBQUlRLE9BQU8sR0FBRzVCLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWUMsaUJBQVosRUFBZDtJQUNBLElBQUlDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRCxPQUFSLENBQWdCUixFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0IsQ0FBeEIsQ0FBYjs7SUFFQSxJQUFJVyxNQUFKLEVBQVk7TUFDUlgsRUFBRSxHQUFHVyxNQUFNLENBQUNDLEtBQVo7TUFDQSxLQUFLMUIsR0FBTCxDQUFTMkIsTUFBVCxDQUFnQmIsRUFBRSxDQUFDYyxDQUFuQixFQUFzQmQsRUFBRSxDQUFDZSxDQUF6QixFQUE0QixDQUE1QjtNQUNBLEtBQUs3QixHQUFMLENBQVM4QixJQUFUO0lBQ0g7O0lBRUQsS0FBSzlCLEdBQUwsQ0FBUytCLE1BQVQsQ0FBZ0JsQixFQUFFLENBQUNlLENBQW5CLEVBQXNCZixFQUFFLENBQUNnQixDQUF6QjtJQUNBLEtBQUs3QixHQUFMLENBQVNnQyxNQUFULENBQWdCbEIsRUFBRSxDQUFDYyxDQUFuQixFQUFzQmQsRUFBRSxDQUFDZSxDQUF6QjtJQUNBLEtBQUs3QixHQUFMLENBQVNpQyxNQUFUO0lBRUEsSUFBSSxDQUFDUixNQUFMLEVBQWE7SUFFYixLQUFLTCxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsR0FBb0JOLEVBQUUsQ0FBQ29CLEdBQUgsQ0FBT3JCLEVBQVAsRUFBV3NCLEdBQVgsRUFBeEM7SUFDQSxJQUFJLEtBQUtmLFlBQUwsR0FBb0IsQ0FBeEIsRUFBMkI7SUFFM0JLLE1BQU0sQ0FBQ1csTUFBUCxDQUFjQyxHQUFkLENBQWtCLEtBQUtqQixZQUF2QjtJQUVBUCxFQUFFLEdBQUdDLEVBQUw7SUFDQUEsRUFBRSxHQUFHVyxNQUFNLENBQUNXLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixLQUFLakIsWUFBdkIsRUFBcUNrQixHQUFyQyxDQUF5Q3pCLEVBQXpDLENBQUw7SUFDQSxLQUFLUSxPQUFMLENBQWFSLEVBQWIsRUFBaUJDLEVBQWpCO0VBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmFkaXVzOiAxMDAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2MudjIoY2Mud2luU2l6ZS53aWR0aC8yLCBjYy53aW5TaXplLmhlaWdodC8yKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLmFuZ2xlICs9IE1hdGguUEkgLyAyMCAqIGR0O1xuXG4gICAgICAgIHZhciBwMSA9IHRoaXMuY2VudGVyO1xuICAgICAgICB2YXIgcDIgPSBjYy52MihNYXRoLmNvcyh0aGlzLmFuZ2xlKSwgTWF0aC5zaW4odGhpcy5hbmdsZSkpLm11bFNlbGYodGhpcy5yYWRpdXMpLmFkZFNlbGYoIHRoaXMuY2VudGVyICk7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXIoKTtcbiAgICBcbiAgICAgICAgdGhpcy5yZW1haW5MZW5ndGggPSB0aGlzLnJhZGl1cztcbiAgICAgICAgdGhpcy5yYXlDYXN0KHAxLCBwMik7XG4gICAgfSxcblxuICAgIHJheUNhc3Q6IGZ1bmN0aW9uIChwMSwgcDIpIHtcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbWFuYWdlci5yYXlDYXN0KHAxLCBwMilbMF07XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcDIgPSByZXN1bHQucG9pbnQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5jaXJjbGUocDIueCwgcDIueSwgNSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnJlbWFpbkxlbmd0aCA9IHRoaXMucmVtYWluTGVuZ3RoIC0gcDIuc3ViKHAxKS5tYWcoKTtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluTGVuZ3RoIDwgMSkgcmV0dXJuO1xuXG4gICAgICAgIHJlc3VsdC5ub3JtYWwubXVsKHRoaXMucmVtYWluTGVuZ3RoKTtcblxuICAgICAgICBwMSA9IHAyO1xuICAgICAgICBwMiA9IHJlc3VsdC5ub3JtYWwubXVsKHRoaXMucmVtYWluTGVuZ3RoKS5hZGQocDEpO1xuICAgICAgICB0aGlzLnJheUNhc3QocDEsIHAyKTtcbiAgICB9XG59KTtcbiJdfQ==
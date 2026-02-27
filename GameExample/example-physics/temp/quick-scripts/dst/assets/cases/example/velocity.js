
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/example/velocity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4983aK95ZdJRLBOaL9SiJYr', 'velocity');
// cases/example/velocity.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tmpNode: {
      "default": null,
      type: cc.Node
    },
    label: {
      "default": null,
      type: cc.Label
    },
    autoAllocTime: 0.5
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.allocedNodes = 0;
    this.time = 0;
    cc.find('Canvas').on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
  },
  allocNode: function allocNode() {
    if (!this.node) return;
    var node = cc.instantiate(this.tmpNode);
    node.parent = this.node;
    node.active = true;
    var body = node.getComponent(cc.RigidBody);
    this.allocedNodes++;

    if (this.label) {
      this.label.string = 'Nodes : ' + this.allocedNodes;
    }
  },
  onTouchStart: function onTouchStart() {
    // this.allocNode();
    this.stop = !this.stop;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (this.stop) return;
    this.time += dt;
    if (this.time < this.autoAllocTime) return;
    this.time = 0;
    this.allocNode();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9leGFtcGxlL3ZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidG1wTm9kZSIsInR5cGUiLCJOb2RlIiwibGFiZWwiLCJMYWJlbCIsImF1dG9BbGxvY1RpbWUiLCJvbkxvYWQiLCJhbGxvY2VkTm9kZXMiLCJ0aW1lIiwiZmluZCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJhbGxvY05vZGUiLCJub2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhY3RpdmUiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwic3RyaW5nIiwic3RvcCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFO01BQ0wsV0FBUyxJQURKO01BRUxDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZKLENBREQ7SUFLUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZOLENBTEM7SUFTUkMsYUFBYSxFQUFFO0VBVFAsQ0FIUDtFQWVMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLENBQVo7SUFFQVosRUFBRSxDQUFDYSxJQUFILENBQVEsUUFBUixFQUFrQkMsRUFBbEIsQ0FBcUJkLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxTQUFSLENBQWtCQyxXQUF2QyxFQUFvRCxLQUFLQyxZQUF6RCxFQUF1RSxJQUF2RTtFQUNILENBckJJO0VBdUJMQyxTQUFTLEVBQUUscUJBQVk7SUFDbkIsSUFBSSxDQUFDLEtBQUtDLElBQVYsRUFBZ0I7SUFFaEIsSUFBSUEsSUFBSSxHQUFHbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlLEtBQUtoQixPQUFwQixDQUFYO0lBQ0FlLElBQUksQ0FBQ0UsTUFBTCxHQUFjLEtBQUtGLElBQW5CO0lBQ0FBLElBQUksQ0FBQ0csTUFBTCxHQUFjLElBQWQ7SUFFQSxJQUFJQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssWUFBTCxDQUFrQnhCLEVBQUUsQ0FBQ3lCLFNBQXJCLENBQVg7SUFFQSxLQUFLZCxZQUFMOztJQUVBLElBQUksS0FBS0osS0FBVCxFQUFnQjtNQUNaLEtBQUtBLEtBQUwsQ0FBV21CLE1BQVgsR0FBb0IsYUFBYSxLQUFLZixZQUF0QztJQUNIO0VBQ0osQ0FyQ0k7RUF1Q0xNLFlBQVksRUFBRSx3QkFBWTtJQUN0QjtJQUNBLEtBQUtVLElBQUwsR0FBWSxDQUFDLEtBQUtBLElBQWxCO0VBQ0gsQ0ExQ0k7RUE0Q0w7RUFDQUMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxLQUFLRixJQUFULEVBQWU7SUFFZixLQUFLZixJQUFMLElBQWFpQixFQUFiO0lBQ0EsSUFBSSxLQUFLakIsSUFBTCxHQUFZLEtBQUtILGFBQXJCLEVBQW9DO0lBRXBDLEtBQUtHLElBQUwsR0FBWSxDQUFaO0lBQ0EsS0FBS00sU0FBTDtFQUNIO0FBckRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRtcE5vZGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b0FsbG9jVGltZTogMC41XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFsbG9jZWROb2RlcyA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIFxuICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBhbGxvY05vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUpIHJldHVybjtcblxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudG1wTm9kZSk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIGJvZHkgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuXG4gICAgICAgIHRoaXMuYWxsb2NlZE5vZGVzICsrO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ05vZGVzIDogJyArIHRoaXMuYWxsb2NlZE5vZGVzO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLmFsbG9jTm9kZSgpO1xuICAgICAgICB0aGlzLnN0b3AgPSAhdGhpcy5zdG9wO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3ApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGltZSArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMuYXV0b0FsbG9jVGltZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuYWxsb2NOb2RlKCk7XG4gICAgfSxcbn0pO1xuIl19
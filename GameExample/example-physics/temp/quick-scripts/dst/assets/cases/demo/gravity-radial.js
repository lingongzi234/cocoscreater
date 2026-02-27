
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/gravity-radial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8f672xHMpAeZdZzF0f7fa9', 'gravity-radial');
// cases/demo/gravity-radial.js

"use strict";

var Gravity = require('gravity');

cc.Class({
  "extends": Gravity,
  properties: {
    gravityForce: 500
  },
  onLoad: function onLoad() {
    this._position = cc.v2();
    this._center = cc.v2();
  },
  _applyForce: function _applyForce(body) {
    var position = this._position;
    var center = this._center;
    body.getWorldPosition(position);
    this.body.getWorldPosition(center);
    var f = center.subSelf(position).normalizeSelf().mulSelf(this.gravityForce * body.getMass());
    body.applyForce(f, position, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2dyYXZpdHktcmFkaWFsLmpzIl0sIm5hbWVzIjpbIkdyYXZpdHkiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJncmF2aXR5Rm9yY2UiLCJvbkxvYWQiLCJfcG9zaXRpb24iLCJ2MiIsIl9jZW50ZXIiLCJfYXBwbHlGb3JjZSIsImJvZHkiLCJwb3NpdGlvbiIsImNlbnRlciIsImdldFdvcmxkUG9zaXRpb24iLCJmIiwic3ViU2VsZiIsIm5vcm1hbGl6ZVNlbGYiLCJtdWxTZWxmIiwiZ2V0TWFzcyIsImFwcGx5Rm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTSCxPQURKO0VBR0xJLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUU7RUFETixDQUhQO0VBT0xDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxTQUFMLEdBQWlCTCxFQUFFLENBQUNNLEVBQUgsRUFBakI7SUFDQSxLQUFLQyxPQUFMLEdBQWVQLEVBQUUsQ0FBQ00sRUFBSCxFQUFmO0VBQ0gsQ0FWSTtFQVlMRSxXQUFXLEVBQUUscUJBQVVDLElBQVYsRUFBZ0I7SUFDekIsSUFBSUMsUUFBUSxHQUFHLEtBQUtMLFNBQXBCO0lBQ0EsSUFBSU0sTUFBTSxHQUFHLEtBQUtKLE9BQWxCO0lBRUFFLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0JGLFFBQXRCO0lBQ0EsS0FBS0QsSUFBTCxDQUFVRyxnQkFBVixDQUEyQkQsTUFBM0I7SUFFQSxJQUFJRSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csT0FBUCxDQUFnQkosUUFBaEIsRUFBMkJLLGFBQTNCLEdBQTJDQyxPQUEzQyxDQUFtRCxLQUFLYixZQUFMLEdBQW9CTSxJQUFJLENBQUNRLE9BQUwsRUFBdkUsQ0FBUjtJQUVBUixJQUFJLENBQUNTLFVBQUwsQ0FBZ0JMLENBQWhCLEVBQW1CSCxRQUFuQixFQUE2QixLQUE3QjtFQUNIO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBHcmF2aXR5ID0gcmVxdWlyZSgnZ3Jhdml0eScpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogR3Jhdml0eSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZ3Jhdml0eUZvcmNlOiA1MDAsXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgIHRoaXMuX2NlbnRlciA9IGNjLnYyKCk7XG4gICAgfSxcbiAgICBcbiAgICBfYXBwbHlGb3JjZTogZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5fcG9zaXRpb247XG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLl9jZW50ZXI7XG5cbiAgICAgICAgYm9keS5nZXRXb3JsZFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5ib2R5LmdldFdvcmxkUG9zaXRpb24oY2VudGVyKTtcblxuICAgICAgICBsZXQgZiA9IGNlbnRlci5zdWJTZWxmKCBwb3NpdGlvbiApLm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKHRoaXMuZ3Jhdml0eUZvcmNlICogYm9keS5nZXRNYXNzKCkpO1xuXG4gICAgICAgIGJvZHkuYXBwbHlGb3JjZShmLCBwb3NpdGlvbiwgZmFsc2UpO1xuICAgIH1cbn0pO1xuIl19
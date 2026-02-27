
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/manifold.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc197NwJqFAXpztnO3O1if7', 'manifold');
// cases/demo/manifold.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pointTemp: {
      type: cc.Node,
      "default": null
    }
  },
  onPreSolve: function onPreSolve(contact) {
    var worldManifold = contact.getWorldManifold();
    var points = worldManifold.points;
    var scene = cc.director.getScene();

    function removeSelf() {
      this.parent = null;
    }

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var node = cc.instantiate(this.pointTemp);
      node.active = true;
      var fadeOut = cc.fadeOut(0.2);
      var remove = cc.callFunc(removeSelf, node);
      var action = cc.sequence(fadeOut, remove);
      node.runAction(action);
      node.x = p.x;
      node.y = p.y;
      node.parent = scene;
    }
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL21hbmlmb2xkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicG9pbnRUZW1wIiwidHlwZSIsIk5vZGUiLCJvblByZVNvbHZlIiwiY29udGFjdCIsIndvcmxkTWFuaWZvbGQiLCJnZXRXb3JsZE1hbmlmb2xkIiwicG9pbnRzIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwicmVtb3ZlU2VsZiIsInBhcmVudCIsImkiLCJsZW5ndGgiLCJwIiwibm9kZSIsImluc3RhbnRpYXRlIiwiYWN0aXZlIiwiZmFkZU91dCIsInJlbW92ZSIsImNhbGxGdW5jIiwiYWN0aW9uIiwic2VxdWVuY2UiLCJydW5BY3Rpb24iLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRTtNQUNQQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFERjtNQUVQLFdBQVM7SUFGRjtFQURILENBSFA7RUFVTEMsVUFBVSxFQUFFLG9CQUFVQyxPQUFWLEVBQW1CO0lBQzNCLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxnQkFBUixFQUFwQjtJQUNBLElBQUlDLE1BQU0sR0FBR0YsYUFBYSxDQUFDRSxNQUEzQjtJQUNBLElBQUlDLEtBQUssR0FBR1osRUFBRSxDQUFDYSxRQUFILENBQVlDLFFBQVosRUFBWjs7SUFFQSxTQUFTQyxVQUFULEdBQXVCO01BQ25CLEtBQUtDLE1BQUwsR0FBYyxJQUFkO0lBQ0g7O0lBRUQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixNQUFNLENBQUNPLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDLElBQUlFLENBQUMsR0FBR1IsTUFBTSxDQUFDTSxDQUFELENBQWQ7TUFFQSxJQUFJRyxJQUFJLEdBQUdwQixFQUFFLENBQUNxQixXQUFILENBQWUsS0FBS2pCLFNBQXBCLENBQVg7TUFDQWdCLElBQUksQ0FBQ0UsTUFBTCxHQUFjLElBQWQ7TUFFQSxJQUFJQyxPQUFPLEdBQUd2QixFQUFFLENBQUN1QixPQUFILENBQVcsR0FBWCxDQUFkO01BQ0EsSUFBSUMsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsUUFBSCxDQUFZVixVQUFaLEVBQXdCSyxJQUF4QixDQUFiO01BQ0EsSUFBSU0sTUFBTSxHQUFHMUIsRUFBRSxDQUFDMkIsUUFBSCxDQUFZSixPQUFaLEVBQXFCQyxNQUFyQixDQUFiO01BRUFKLElBQUksQ0FBQ1EsU0FBTCxDQUFlRixNQUFmO01BQ0FOLElBQUksQ0FBQ1MsQ0FBTCxHQUFTVixDQUFDLENBQUNVLENBQVg7TUFDQVQsSUFBSSxDQUFDVSxDQUFMLEdBQVNYLENBQUMsQ0FBQ1csQ0FBWDtNQUVBVixJQUFJLENBQUNKLE1BQUwsR0FBY0osS0FBZDtJQUNIO0VBQ0osQ0FuQ0ksQ0FxQ0w7RUFDQTtFQUVBOztBQXhDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwb2ludFRlbXA6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QcmVTb2x2ZTogZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHdvcmxkTWFuaWZvbGQucG9pbnRzO1xuICAgICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNlbGYgKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9pbnRUZW1wKTtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgbGV0IGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlID0gY2MuY2FsbEZ1bmMocmVtb3ZlU2VsZiwgbm9kZSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoZmFkZU91dCwgcmVtb3ZlKTtcblxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICAgIG5vZGUueCA9IHAueDtcbiAgICAgICAgICAgIG5vZGUueSA9IHAueTtcblxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBzY2VuZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIFxuICAgIC8vIH0sXG59KTtcbiJdfQ==
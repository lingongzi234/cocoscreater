
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/infinite-world/camera-control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1e93YcLzhOiohXX6bHj9ay', 'camera-control');
// cases/demo/infinite-world/camera-control.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.camera = this.getComponent(cc.Camera);
  },
  // called every frame, uncomment this function to activate update callback
  lateUpdate: function lateUpdate(dt) {
    var targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
    this.node.position = this.node.parent.convertToNodeSpaceAR(targetPos);
    var ratio = targetPos.y / cc.winSize.height;
    this.camera.zoomRatio = 1 + (0.5 - ratio) * 0.5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2luZmluaXRlLXdvcmxkL2NhbWVyYS1jb250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJjYW1lcmEiLCJnZXRDb21wb25lbnQiLCJDYW1lcmEiLCJsYXRlVXBkYXRlIiwiZHQiLCJ0YXJnZXRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMyIiwiWkVSTyIsIm5vZGUiLCJwb3NpdGlvbiIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicmF0aW8iLCJ5Iiwid2luU2l6ZSIsImhlaWdodCIsInpvb21SYXRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFETDtNQUVKQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTDtFQURBLENBSFA7RUFVTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsTUFBTCxHQUFjLEtBQUtDLFlBQUwsQ0FBa0JULEVBQUUsQ0FBQ1UsTUFBckIsQ0FBZDtFQUNILENBYkk7RUFlTDtFQUNBQyxVQUFVLEVBQUUsb0JBQVVDLEVBQVYsRUFBYztJQUN0QixJQUFJQyxTQUFTLEdBQUcsS0FBS1QsTUFBTCxDQUFZVSxxQkFBWixDQUFrQ2QsRUFBRSxDQUFDZSxJQUFILENBQVFDLElBQTFDLENBQWhCO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLEdBQXFCLEtBQUtELElBQUwsQ0FBVUUsTUFBVixDQUFpQkMsb0JBQWpCLENBQXNDUCxTQUF0QyxDQUFyQjtJQUVBLElBQUlRLEtBQUssR0FBR1IsU0FBUyxDQUFDUyxDQUFWLEdBQWN0QixFQUFFLENBQUN1QixPQUFILENBQVdDLE1BQXJDO0lBQ0EsS0FBS2hCLE1BQUwsQ0FBWWlCLFNBQVosR0FBd0IsSUFBSSxDQUFDLE1BQU1KLEtBQVAsSUFBZ0IsR0FBNUM7RUFDSDtBQXRCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBsYXRlVXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMudGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFBvcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmF0aW8gPSB0YXJnZXRQb3MueSAvIGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxICsgKDAuNSAtIHJhdGlvKSAqIDAuNTtcbiAgICB9LFxufSk7Il19
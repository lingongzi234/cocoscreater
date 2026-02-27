
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/utils/physics-bound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bb59G9YJZM663ZrZZZSww8', 'physics-bound');
// cases/utils/physics-bound.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    size: cc.size(0, 0),
    mouseJoint: true
  },
  // use this for initialization
  onLoad: function onLoad() {
    var width = this.size.width || this.node.width;
    var height = this.size.height || this.node.height;
    var node = new cc.Node();
    var body = node.addComponent(cc.RigidBody);
    body.type = cc.RigidBodyType.Static;

    if (this.mouseJoint) {
      // add mouse joint
      var joint = node.addComponent(cc.MouseJoint);
      joint.mouseRegion = this.node;
    }

    this._addBound(node, 0, height / 2, width, 20);

    this._addBound(node, 0, -height / 2, width, 20);

    this._addBound(node, -width / 2, 0, 20, height);

    this._addBound(node, width / 2, 0, 20, height);

    node.parent = this.node;
  },
  _addBound: function _addBound(node, x, y, width, height) {
    var collider = node.addComponent(cc.PhysicsBoxCollider);
    collider.offset.x = x;
    collider.offset.y = y;
    collider.size.width = width;
    collider.size.height = height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy91dGlscy9waHlzaWNzLWJvdW5kLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2l6ZSIsIm1vdXNlSm9pbnQiLCJvbkxvYWQiLCJ3aWR0aCIsIm5vZGUiLCJoZWlnaHQiLCJOb2RlIiwiYm9keSIsImFkZENvbXBvbmVudCIsIlJpZ2lkQm9keSIsInR5cGUiLCJSaWdpZEJvZHlUeXBlIiwiU3RhdGljIiwiam9pbnQiLCJNb3VzZUpvaW50IiwibW91c2VSZWdpb24iLCJfYWRkQm91bmQiLCJwYXJlbnQiLCJ4IiwieSIsImNvbGxpZGVyIiwiUGh5c2ljc0JveENvbGxpZGVyIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFSixFQUFFLENBQUNJLElBQUgsQ0FBUSxDQUFSLEVBQVcsQ0FBWCxDQURFO0lBRVJDLFVBQVUsRUFBRTtFQUZKLENBSFA7RUFRTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsS0FBSyxHQUFLLEtBQUtILElBQUwsQ0FBVUcsS0FBVixJQUFtQixLQUFLQyxJQUFMLENBQVVELEtBQTNDO0lBQ0EsSUFBSUUsTUFBTSxHQUFJLEtBQUtMLElBQUwsQ0FBVUssTUFBVixJQUFvQixLQUFLRCxJQUFMLENBQVVDLE1BQTVDO0lBRUEsSUFBSUQsSUFBSSxHQUFHLElBQUlSLEVBQUUsQ0FBQ1UsSUFBUCxFQUFYO0lBRUEsSUFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNJLFlBQUwsQ0FBa0JaLEVBQUUsQ0FBQ2EsU0FBckIsQ0FBWDtJQUNBRixJQUFJLENBQUNHLElBQUwsR0FBWWQsRUFBRSxDQUFDZSxhQUFILENBQWlCQyxNQUE3Qjs7SUFFQSxJQUFJLEtBQUtYLFVBQVQsRUFBcUI7TUFDakI7TUFDQSxJQUFJWSxLQUFLLEdBQUdULElBQUksQ0FBQ0ksWUFBTCxDQUFrQlosRUFBRSxDQUFDa0IsVUFBckIsQ0FBWjtNQUNBRCxLQUFLLENBQUNFLFdBQU4sR0FBb0IsS0FBS1gsSUFBekI7SUFDSDs7SUFFRCxLQUFLWSxTQUFMLENBQWVaLElBQWYsRUFBcUIsQ0FBckIsRUFBd0JDLE1BQU0sR0FBQyxDQUEvQixFQUFrQ0YsS0FBbEMsRUFBeUMsRUFBekM7O0lBQ0EsS0FBS2EsU0FBTCxDQUFlWixJQUFmLEVBQXFCLENBQXJCLEVBQXdCLENBQUNDLE1BQUQsR0FBUSxDQUFoQyxFQUFtQ0YsS0FBbkMsRUFBMEMsRUFBMUM7O0lBQ0EsS0FBS2EsU0FBTCxDQUFlWixJQUFmLEVBQXFCLENBQUNELEtBQUQsR0FBTyxDQUE1QixFQUErQixDQUEvQixFQUFrQyxFQUFsQyxFQUFzQ0UsTUFBdEM7O0lBQ0EsS0FBS1csU0FBTCxDQUFlWixJQUFmLEVBQXFCRCxLQUFLLEdBQUMsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsRUFBakMsRUFBcUNFLE1BQXJDOztJQUVBRCxJQUFJLENBQUNhLE1BQUwsR0FBYyxLQUFLYixJQUFuQjtFQUNILENBOUJJO0VBZ0NMWSxTQWhDSyxxQkFnQ01aLElBaENOLEVBZ0NZYyxDQWhDWixFQWdDZUMsQ0FoQ2YsRUFnQ2tCaEIsS0FoQ2xCLEVBZ0N5QkUsTUFoQ3pCLEVBZ0NpQztJQUNsQyxJQUFJZSxRQUFRLEdBQUdoQixJQUFJLENBQUNJLFlBQUwsQ0FBa0JaLEVBQUUsQ0FBQ3lCLGtCQUFyQixDQUFmO0lBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkosQ0FBaEIsR0FBb0JBLENBQXBCO0lBQ0FFLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkgsQ0FBaEIsR0FBb0JBLENBQXBCO0lBQ0FDLFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY0csS0FBZCxHQUFzQkEsS0FBdEI7SUFDQWlCLFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY0ssTUFBZCxHQUF1QkEsTUFBdkI7RUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNpemU6IGNjLnNpemUoMCwgMCksXG4gICAgICAgIG1vdXNlSm9pbnQ6IHRydWVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3aWR0aCAgID0gdGhpcy5zaXplLndpZHRoIHx8IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCAgPSB0aGlzLnNpemUuaGVpZ2h0IHx8IHRoaXMubm9kZS5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuXG4gICAgICAgIGxldCBib2R5ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG5cbiAgICAgICAgaWYgKHRoaXMubW91c2VKb2ludCkge1xuICAgICAgICAgICAgLy8gYWRkIG1vdXNlIGpvaW50XG4gICAgICAgICAgICBsZXQgam9pbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5Nb3VzZUpvaW50KTtcbiAgICAgICAgICAgIGpvaW50Lm1vdXNlUmVnaW9uID0gdGhpcy5ub2RlOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fYWRkQm91bmQobm9kZSwgMCwgaGVpZ2h0LzIsIHdpZHRoLCAyMCk7XG4gICAgICAgIHRoaXMuX2FkZEJvdW5kKG5vZGUsIDAsIC1oZWlnaHQvMiwgd2lkdGgsIDIwKTtcbiAgICAgICAgdGhpcy5fYWRkQm91bmQobm9kZSwgLXdpZHRoLzIsIDAsIDIwLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLl9hZGRCb3VuZChub2RlLCB3aWR0aC8yLCAwLCAyMCwgaGVpZ2h0KTtcblxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICB9LFxuXG4gICAgX2FkZEJvdW5kIChub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgIGNvbGxpZGVyLm9mZnNldC54ID0geDtcbiAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgPSB5O1xuICAgICAgICBjb2xsaWRlci5zaXplLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbGxpZGVyLnNpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbn0pO1xuIl19
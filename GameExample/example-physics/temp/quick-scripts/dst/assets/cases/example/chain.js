
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/example/chain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b66ddrAwGdIDL2ef4BiAnew', 'chain');
// cases/example/chain.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var itemWidth = 30;
    var itemHeight = 8;
    var y = 250;
    var prevBody = this.getComponent(cc.RigidBody);

    for (var i = 0; i < 15; ++i) {
      var node = new cc.Node();
      node.position = cc.v2((0.5 + i) * itemWidth, y);
      var body = node.addComponent(cc.RigidBody);
      var collider = node.addComponent(cc.PhysicsBoxCollider);
      collider.size = cc.size(itemWidth, itemHeight);
      collider.density = 20;
      var joint = node.addComponent(cc.RevoluteJoint);
      joint.collideConnected = false;
      joint.anchor = cc.v2(-itemWidth / 2, 0);
      joint.connectedAnchor = i === 0 ? cc.v2(0, y) : cc.v2(itemWidth / 2, 0);
      joint.connectedBody = prevBody;
      this.node.addChild(node);
      prevBody = body;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9leGFtcGxlL2NoYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJpdGVtV2lkdGgiLCJpdGVtSGVpZ2h0IiwieSIsInByZXZCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiaSIsIm5vZGUiLCJOb2RlIiwicG9zaXRpb24iLCJ2MiIsImJvZHkiLCJhZGRDb21wb25lbnQiLCJjb2xsaWRlciIsIlBoeXNpY3NCb3hDb2xsaWRlciIsInNpemUiLCJkZW5zaXR5Iiwiam9pbnQiLCJSZXZvbHV0ZUpvaW50IiwiY29sbGlkZUNvbm5lY3RlZCIsImFuY2hvciIsImNvbm5lY3RlZEFuY2hvciIsImNvbm5lY3RlZEJvZHkiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLENBQWpCO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHLEdBQVI7SUFDQSxJQUFJQyxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQlIsRUFBRSxDQUFDUyxTQUFyQixDQUFmOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtNQUN6QixJQUFJQyxJQUFJLEdBQUcsSUFBSVgsRUFBRSxDQUFDWSxJQUFQLEVBQVg7TUFDQUQsSUFBSSxDQUFDRSxRQUFMLEdBQWdCYixFQUFFLENBQUNjLEVBQUgsQ0FBTSxDQUFDLE1BQUlKLENBQUwsSUFBVU4sU0FBaEIsRUFBMkJFLENBQTNCLENBQWhCO01BQ0EsSUFBSVMsSUFBSSxHQUFHSixJQUFJLENBQUNLLFlBQUwsQ0FBa0JoQixFQUFFLENBQUNTLFNBQXJCLENBQVg7TUFFQSxJQUFJUSxRQUFRLEdBQUdOLElBQUksQ0FBQ0ssWUFBTCxDQUFrQmhCLEVBQUUsQ0FBQ2tCLGtCQUFyQixDQUFmO01BQ0FELFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQm5CLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUWYsU0FBUixFQUFtQkMsVUFBbkIsQ0FBaEI7TUFDQVksUUFBUSxDQUFDRyxPQUFULEdBQW1CLEVBQW5CO01BRUEsSUFBSUMsS0FBSyxHQUFHVixJQUFJLENBQUNLLFlBQUwsQ0FBa0JoQixFQUFFLENBQUNzQixhQUFyQixDQUFaO01BQ0FELEtBQUssQ0FBQ0UsZ0JBQU4sR0FBeUIsS0FBekI7TUFDQUYsS0FBSyxDQUFDRyxNQUFOLEdBQWV4QixFQUFFLENBQUNjLEVBQUgsQ0FBTSxDQUFDVixTQUFELEdBQVcsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBZjtNQUNBaUIsS0FBSyxDQUFDSSxlQUFOLEdBQXdCZixDQUFDLEtBQUssQ0FBTixHQUFVVixFQUFFLENBQUNjLEVBQUgsQ0FBTSxDQUFOLEVBQVNSLENBQVQsQ0FBVixHQUF3Qk4sRUFBRSxDQUFDYyxFQUFILENBQU1WLFNBQVMsR0FBQyxDQUFoQixFQUFtQixDQUFuQixDQUFoRDtNQUNBaUIsS0FBSyxDQUFDSyxhQUFOLEdBQXNCbkIsUUFBdEI7TUFFQSxLQUFLSSxJQUFMLENBQVVnQixRQUFWLENBQW1CaEIsSUFBbkI7TUFFQUosUUFBUSxHQUFHUSxJQUFYO0lBQ0g7RUFDSjtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBpdGVtV2lkdGggPSAzMDtcbiAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSA4O1xuICAgICAgICBsZXQgeSA9IDI1MDtcbiAgICAgICAgbGV0IHByZXZCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MudjIoKDAuNStpKSAqIGl0ZW1XaWR0aCwgeSk7XG4gICAgICAgICAgICBsZXQgYm9keSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG5cbiAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZShpdGVtV2lkdGgsIGl0ZW1IZWlnaHQpO1xuICAgICAgICAgICAgY29sbGlkZXIuZGVuc2l0eSA9IDIwO1xuXG4gICAgICAgICAgICBsZXQgam9pbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcbiAgICAgICAgICAgIGpvaW50LmNvbGxpZGVDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGpvaW50LmFuY2hvciA9IGNjLnYyKC1pdGVtV2lkdGgvMiwgMCk7XG4gICAgICAgICAgICBqb2ludC5jb25uZWN0ZWRBbmNob3IgPSBpID09PSAwID8gY2MudjIoMCwgeSkgOiBjYy52MihpdGVtV2lkdGgvMiwgMCk7XG4gICAgICAgICAgICBqb2ludC5jb25uZWN0ZWRCb2R5ID0gcHJldkJvZHk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcblxuICAgICAgICAgICAgcHJldkJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
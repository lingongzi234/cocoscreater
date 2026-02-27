
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/gravity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db6f0HR8SZFa5tEwXjbivXZ', 'gravity');
// cases/demo/gravity.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onEnable: function onEnable() {
    var manager = cc.director.getPhysicsManager();
    this.bodies = [];
    this.body = this.getComponent(cc.RigidBody);
    this.originGravity = manager.gravity;
    manager.gravity = cc.v2();
  },
  onDisable: function onDisable() {
    cc.director.getPhysicsManager().gravity = this.originGravity;
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    this.bodies.push(otherCollider.body);
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    var index = this.bodies.indexOf(otherCollider.body);

    if (index !== -1) {
      this.bodies.splice(index, 1);
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (!this.body) {
      return;
    }

    var bodies = this.bodies;

    for (var i = 0; i < bodies.length; i++) {
      this._applyForce(bodies[i]);
    }
  },
  _applyForce: function _applyForce(body) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2dyYXZpdHkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uRW5hYmxlIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJib2RpZXMiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwib3JpZ2luR3Jhdml0eSIsImdyYXZpdHkiLCJ2MiIsIm9uRGlzYWJsZSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJwdXNoIiwib25FbmRDb250YWN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidXBkYXRlIiwiZHQiLCJpIiwibGVuZ3RoIiwiX2FwcGx5Rm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0w7RUFDQUMsUUFBUSxFQUFFLG9CQUFZO0lBQ2xCLElBQUlDLE9BQU8sR0FBR0osRUFBRSxDQUFDSyxRQUFILENBQVlDLGlCQUFaLEVBQWQ7SUFFQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLElBQUwsR0FBWSxLQUFLQyxZQUFMLENBQWtCVCxFQUFFLENBQUNVLFNBQXJCLENBQVo7SUFDQSxLQUFLQyxhQUFMLEdBQXFCUCxPQUFPLENBQUNRLE9BQTdCO0lBQ0FSLE9BQU8sQ0FBQ1EsT0FBUixHQUFrQlosRUFBRSxDQUFDYSxFQUFILEVBQWxCO0VBQ0gsQ0FYSTtFQWFMQyxTQUFTLEVBQUUscUJBQVk7SUFDbkJkLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZQyxpQkFBWixHQUFnQ00sT0FBaEMsR0FBMEMsS0FBS0QsYUFBL0M7RUFDSCxDQWZJO0VBaUJMSSxjQUFjLEVBQUUsd0JBQVVDLE9BQVYsRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnRDtJQUM1RCxLQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUJELGFBQWEsQ0FBQ1YsSUFBL0I7RUFDSCxDQW5CSTtFQXFCTFksWUFBWSxFQUFFLHNCQUFVSixPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7SUFDMUQsSUFBSUcsS0FBSyxHQUFHLEtBQUtkLE1BQUwsQ0FBWWUsT0FBWixDQUFvQkosYUFBYSxDQUFDVixJQUFsQyxDQUFaOztJQUNBLElBQUlhLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7TUFDZCxLQUFLZCxNQUFMLENBQVlnQixNQUFaLENBQW1CRixLQUFuQixFQUEwQixDQUExQjtJQUNIO0VBQ0osQ0ExQkk7RUE0Qkw7RUFDQUcsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxDQUFDLEtBQUtqQixJQUFWLEVBQWdCO01BQ1o7SUFDSDs7SUFFRCxJQUFJRCxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7O0lBQ0EsS0FBSyxJQUFJbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25CLE1BQU0sQ0FBQ29CLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDLEtBQUtFLFdBQUwsQ0FBaUJyQixNQUFNLENBQUNtQixDQUFELENBQXZCO0lBQ0g7RUFDSixDQXRDSTtFQXdDTEUsV0FBVyxFQUFFLHFCQUFVcEIsSUFBVixFQUFnQixDQUM1QjtBQXpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuXG4gICAgICAgIHRoaXMuYm9kaWVzID0gW107XG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHRoaXMub3JpZ2luR3Jhdml0eSA9IG1hbmFnZXIuZ3Jhdml0eTtcbiAgICAgICAgbWFuYWdlci5ncmF2aXR5ID0gY2MudjIoKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IHRoaXMub3JpZ2luR3Jhdml0eTtcbiAgICB9LFxuXG4gICAgb25CZWdpbkNvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgdGhpcy5ib2RpZXMucHVzaChvdGhlckNvbGxpZGVyLmJvZHkpO1xuICAgIH0sXG5cbiAgICBvbkVuZENvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ib2RpZXMuaW5kZXhPZihvdGhlckNvbGxpZGVyLmJvZHkpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmJvZGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYm9kaWVzID0gdGhpcy5ib2RpZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcmNlKGJvZGllc1tpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FwcGx5Rm9yY2U6IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgfVxufSk7XG4iXX0=
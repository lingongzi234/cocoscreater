
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/stick-arrow/shoot-arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ac60G/olhOy7Kbp3Jz4Kon', 'shoot-arrow');
// cases/demo/stick-arrow/shoot-arrow.js

"use strict";

// http://www.iforce2d.net/b2dtut/sticky-projectiles
// http://www.emanueleferonato.com/2012/12/14/box2d-flying-arrow-engine-first-attempt/
cc.Class({
  "extends": cc.Component,
  properties: {
    arrow: {
      type: cc.Node,
      "default": null
    }
  },
  onEnable: function onEnable() {
    this.debugDrawFlags = cc.director.getPhysicsManager().debugDrawFlags;
    cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
  },
  onDisable: function onDisable() {
    cc.director.getPhysicsManager().debugDrawFlags = this.debugDrawFlags;
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.arrowBodies = [];
  },
  onTouchBegan: function onTouchBegan(event) {
    var touchLoc = event.touch.getLocation();
    var node = cc.instantiate(this.arrow);
    node.active = true;
    var vec = cc.v2(touchLoc).sub(node.position);
    node.rotation = -Math.atan2(vec.y, vec.x) * 180 / Math.PI;
    cc.director.getScene().addChild(node);
    var distance = vec.mag();
    var velocity = vec.normalize().mulSelf(800);
    var arrowBody = node.getComponent(cc.RigidBody);
    arrowBody.linearVelocity = velocity;
    this.arrowBodies.push(arrowBody);
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var dragConstant = 0.1;
    var arrowBodies = this.arrowBodies;

    for (var i = 0; i < arrowBodies.length; i++) {
      var arrowBody = arrowBodies[i];
      var velocity = arrowBody.linearVelocity;
      var speed = velocity.mag();
      if (speed === 0) continue;
      var direction = velocity.normalize();
      var pointingDirection = arrowBody.getWorldVector(cc.v2(1, 0));
      var flightDirection = arrowBody.linearVelocity;
      var flightSpeed = flightDirection.mag();
      flightDirection.normalizeSelf();
      var dot = flightDirection.dot(pointingDirection);
      var dragForceMagnitude = (1 - Math.abs(dot)) * flightSpeed * flightSpeed * dragConstant * arrowBody.getMass();
      var arrowTailPosition = arrowBody.getWorldPoint(cc.v2(-80, 0));
      arrowBody.applyForce(flightDirection.mul(-dragForceMagnitude), arrowTailPosition, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3N0aWNrLWFycm93L3Nob290LWFycm93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXJyb3ciLCJ0eXBlIiwiTm9kZSIsIm9uRW5hYmxlIiwiZGVidWdEcmF3RmxhZ3MiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0Iiwib25EaXNhYmxlIiwib25Mb2FkIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJhcnJvd0JvZGllcyIsImV2ZW50IiwidG91Y2hMb2MiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwiaW5zdGFudGlhdGUiLCJhY3RpdmUiLCJ2ZWMiLCJ2MiIsInN1YiIsInBvc2l0aW9uIiwicm90YXRpb24iLCJNYXRoIiwiYXRhbjIiLCJ5IiwieCIsIlBJIiwiZ2V0U2NlbmUiLCJhZGRDaGlsZCIsImRpc3RhbmNlIiwibWFnIiwidmVsb2NpdHkiLCJub3JtYWxpemUiLCJtdWxTZWxmIiwiYXJyb3dCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwibGluZWFyVmVsb2NpdHkiLCJwdXNoIiwidXBkYXRlIiwiZHQiLCJkcmFnQ29uc3RhbnQiLCJpIiwibGVuZ3RoIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJwb2ludGluZ0RpcmVjdGlvbiIsImdldFdvcmxkVmVjdG9yIiwiZmxpZ2h0RGlyZWN0aW9uIiwiZmxpZ2h0U3BlZWQiLCJub3JtYWxpemVTZWxmIiwiZG90IiwiZHJhZ0ZvcmNlTWFnbml0dWRlIiwiYWJzIiwiZ2V0TWFzcyIsImFycm93VGFpbFBvc2l0aW9uIiwiZ2V0V29ybGRQb2ludCIsImFwcGx5Rm9yY2UiLCJtdWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSxF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QUFoQjtNQUVBLElBQUljLGlCQUFpQixHQUFHWixTQUFTLENBQUNhLGNBQVYsQ0FBMEIzRCxFQUFFLENBQUM4QixFQUFILENBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBMUIsQ0FBeEI7TUFDQSxJQUFJOEIsZUFBZSxHQUFHZCxTQUFTLENBQUNHLGNBQWhDO01BQ0EsSUFBSVksV0FBVyxHQUFHRCxlQUFlLENBQUNsQixHQUFoQixFQUFsQjtNQUNBa0IsZUFBZSxDQUFDRSxhQUFoQjtNQUVBLElBQUlDLEdBQUcsR0FBR0gsZUFBZSxDQUFDRyxHQUFoQixDQUFvQkwsaUJBQXBCLENBQVY7TUFDQSxJQUFJTSxrQkFBa0IsR0FBRyxDQUFDLElBQUk5QixJQUFJLENBQUMrQixHQUFMLENBQVNGLEdBQVQsQ0FBTCxJQUFzQkYsV0FBdEIsR0FBb0NBLFdBQXBDLEdBQWtEUixZQUFsRCxHQUFpRVAsU0FBUyxDQUFDb0IsT0FBVixFQUExRjtNQUVBLElBQUlDLGlCQUFpQixHQUFHckIsU0FBUyxDQUFDc0IsYUFBVixDQUF5QnBFLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTyxDQUFDLEVBQVIsRUFBWSxDQUFaLENBQXpCLENBQXhCO01BQ0FnQixTQUFTLENBQUN1QixVQUFWLENBQXNCVCxlQUFlLENBQUNVLEdBQWhCLENBQW9CLENBQUNOLGtCQUFyQixDQUF0QixFQUFnRUcsaUJBQWhFLEVBQW1GLEtBQW5GO0lBQ0g7RUFDSjtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3Lmlmb3JjZTJkLm5ldC9iMmR0dXQvc3RpY2t5LXByb2plY3RpbGVzXG4vLyBodHRwOi8vd3d3LmVtYW51ZWxlZmVyb25hdG8uY29tLzIwMTIvMTIvMTQvYm94MmQtZmx5aW5nLWFycm93LWVuZ2luZS1maXJzdC1hdHRlbXB0L1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYnVnRHJhd0ZsYWdzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncztcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IFxuICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9qb2ludEJpdCB8XG4gICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XG4gICAgICAgICAgICA7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gdGhpcy5kZWJ1Z0RyYXdGbGFncztcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFycm93Qm9kaWVzID0gW107XG4gICAgfSxcblxuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaExvYyA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFycm93KTtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGxldCB2ZWMgPSBjYy52Mih0b3VjaExvYykuc3ViKG5vZGUucG9zaXRpb24pO1xuICAgICAgICBub2RlLnJvdGF0aW9uID0gLU1hdGguYXRhbjIodmVjLnksIHZlYy54KSAqIDE4MCAvIE1hdGguUEk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlKTtcblxuICAgICAgICBsZXQgZGlzdGFuY2UgPSAgdmVjLm1hZygpO1xuICAgICAgICBsZXQgdmVsb2NpdHkgPSAgdmVjLm5vcm1hbGl6ZSgpLm11bFNlbGYoODAwKTtcblxuICAgICAgICBsZXQgYXJyb3dCb2R5ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYXJyb3dCb2R5LmxpbmVhclZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cbiAgICAgICAgdGhpcy5hcnJvd0JvZGllcy5wdXNoKGFycm93Qm9keSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgbGV0IGRyYWdDb25zdGFudCA9IDAuMTtcbiAgICAgICAgbGV0IGFycm93Qm9kaWVzID0gdGhpcy5hcnJvd0JvZGllcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJvd0JvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFycm93Qm9keSA9IGFycm93Qm9kaWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gYXJyb3dCb2R5LmxpbmVhclZlbG9jaXR5O1xuICAgICAgICAgICAgbGV0IHNwZWVkID0gdmVsb2NpdHkubWFnKCk7XG4gICAgICAgICAgICBpZiAoc3BlZWQgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHZlbG9jaXR5Lm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICBsZXQgcG9pbnRpbmdEaXJlY3Rpb24gPSBhcnJvd0JvZHkuZ2V0V29ybGRWZWN0b3IoIGNjLnYyKCAxLCAwICkgKTtcbiAgICAgICAgICAgIGxldCBmbGlnaHREaXJlY3Rpb24gPSBhcnJvd0JvZHkubGluZWFyVmVsb2NpdHk7XG4gICAgICAgICAgICBsZXQgZmxpZ2h0U3BlZWQgPSBmbGlnaHREaXJlY3Rpb24ubWFnKCk7XG4gICAgICAgICAgICBmbGlnaHREaXJlY3Rpb24ubm9ybWFsaXplU2VsZigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZG90ID0gZmxpZ2h0RGlyZWN0aW9uLmRvdChwb2ludGluZ0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgZHJhZ0ZvcmNlTWFnbml0dWRlID0gKDEgLSBNYXRoLmFicyhkb3QpKSAqIGZsaWdodFNwZWVkICogZmxpZ2h0U3BlZWQgKiBkcmFnQ29uc3RhbnQgKiBhcnJvd0JvZHkuZ2V0TWFzcygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYXJyb3dUYWlsUG9zaXRpb24gPSBhcnJvd0JvZHkuZ2V0V29ybGRQb2ludCggY2MudjIoIC04MCwgMCApICk7XG4gICAgICAgICAgICBhcnJvd0JvZHkuYXBwbHlGb3JjZSggZmxpZ2h0RGlyZWN0aW9uLm11bCgtZHJhZ0ZvcmNlTWFnbml0dWRlKSwgYXJyb3dUYWlsUG9zaXRpb24sIGZhbHNlICk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
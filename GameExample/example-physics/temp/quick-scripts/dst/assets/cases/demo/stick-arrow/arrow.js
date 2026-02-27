
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/stick-arrow/arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1da5Mv4hpN2Zx3pmtKOGSd', 'arrow');
// cases/demo/stick-arrow/arrow.js

"use strict";

// http://www.iforce2d.net/b2dtut/sticky-projectiles
// http://www.emanueleferonato.com/2012/12/14/box2d-flying-arrow-engine-first-attempt/
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    this.weldJoint = this.getComponent(cc.WeldJoint);
  },
  onPostSolve: function onPostSolve(contact, selfCollider, otherCollider) {
    var impulse = contact.getImpulse();
    if (Math.abs(impulse.normalImpulses[0]) < cc.PhysicsManager.PTM_RATIO) return;
    var joint = this.weldJoint;

    if (joint.enabled) {
      joint.enabled = false;
      return;
    }

    if (otherCollider.node.name === 'arrow') {
      return;
    }

    var arrowBody = selfCollider.body;
    var targetBody = otherCollider.body;
    var worldCoordsAnchorPoint = arrowBody.getWorldPoint(cc.v2(0.6, 0));
    joint.connectedBody = targetBody;
    joint.anchor = arrowBody.getLocalPoint(worldCoordsAnchorPoint);
    joint.connectedAnchor = targetBody.getLocalPoint(worldCoordsAnchorPoint);
    joint.referenceAngle = targetBody.node.rotation - arrowBody.node.rotation;
    joint.enabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3N0aWNrLWFycm93L2Fycm93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJ3ZWxkSm9pbnQiLCJnZXRDb21wb25lbnQiLCJXZWxkSm9pbnQiLCJvblBvc3RTb2x2ZSIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwiaW1wdWxzZSIsImdldEltcHVsc2UiLCJNYXRoIiwiYWJzIiwibm9ybWFsSW1wdWxzZXMiLCJQaHlzaWNzTWFuYWdlciIsIlBUTV9SQVRJTyIsImpvaW50IiwiZW5hYmxlZCIsIm5vZGUiLCJuYW1lIiwiYXJyb3dCb2R5IiwiYm9keSIsInRhcmdldEJvZHkiLCJ3b3JsZENvb3Jkc0FuY2hvclBvaW50IiwiZ2V0V29ybGRQb2ludCIsInYyIiwiY29ubmVjdGVkQm9keSIsImFuY2hvciIsImdldExvY2FsUG9pbnQiLCJjb25uZWN0ZWRBbmNob3IiLCJyZWZlcmVuY2VBbmdsZSIsInJvdGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0MsWUFBTCxDQUFrQkwsRUFBRSxDQUFDTSxTQUFyQixDQUFqQjtFQUNILENBTEk7RUFPTEMsV0FBVyxFQUFFLHFCQUFVQyxPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7SUFDekQsSUFBSUMsT0FBTyxHQUFHSCxPQUFPLENBQUNJLFVBQVIsRUFBZDtJQUNBLElBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxPQUFPLENBQUNJLGNBQVIsQ0FBdUIsQ0FBdkIsQ0FBVCxJQUFzQ2YsRUFBRSxDQUFDZ0IsY0FBSCxDQUFrQkMsU0FBNUQsRUFBdUU7SUFFdkUsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLFNBQWpCOztJQUVBLElBQUljLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtNQUNmRCxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsS0FBaEI7TUFDQTtJQUNIOztJQUVELElBQUlULGFBQWEsQ0FBQ1UsSUFBZCxDQUFtQkMsSUFBbkIsS0FBNEIsT0FBaEMsRUFBeUM7TUFDckM7SUFDSDs7SUFFRCxJQUFJQyxTQUFTLEdBQUdiLFlBQVksQ0FBQ2MsSUFBN0I7SUFDQSxJQUFJQyxVQUFVLEdBQUdkLGFBQWEsQ0FBQ2EsSUFBL0I7SUFDQSxJQUFJRSxzQkFBc0IsR0FBR0gsU0FBUyxDQUFDSSxhQUFWLENBQXlCMUIsRUFBRSxDQUFDMkIsRUFBSCxDQUFNLEdBQU4sRUFBVyxDQUFYLENBQXpCLENBQTdCO0lBRUFULEtBQUssQ0FBQ1UsYUFBTixHQUFzQkosVUFBdEI7SUFDQU4sS0FBSyxDQUFDVyxNQUFOLEdBQWVQLFNBQVMsQ0FBQ1EsYUFBVixDQUF5Qkwsc0JBQXpCLENBQWY7SUFDQVAsS0FBSyxDQUFDYSxlQUFOLEdBQXdCUCxVQUFVLENBQUNNLGFBQVgsQ0FBMEJMLHNCQUExQixDQUF4QjtJQUNBUCxLQUFLLENBQUNjLGNBQU4sR0FBdUJSLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQmEsUUFBaEIsR0FBMkJYLFNBQVMsQ0FBQ0YsSUFBVixDQUFlYSxRQUFqRTtJQUVBZixLQUFLLENBQUNDLE9BQU4sR0FBZ0IsSUFBaEI7RUFDSDtBQWhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3Lmlmb3JjZTJkLm5ldC9iMmR0dXQvc3RpY2t5LXByb2plY3RpbGVzXG4vLyBodHRwOi8vd3d3LmVtYW51ZWxlZmVyb25hdG8uY29tLzIwMTIvMTIvMTQvYm94MmQtZmx5aW5nLWFycm93LWVuZ2luZS1maXJzdC1hdHRlbXB0L1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2VsZEpvaW50ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV2VsZEpvaW50KTtcbiAgICB9LFxuXG4gICAgb25Qb3N0U29sdmU6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgdmFyIGltcHVsc2UgPSBjb250YWN0LmdldEltcHVsc2UoKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGltcHVsc2Uubm9ybWFsSW1wdWxzZXNbMF0pIDwgY2MuUGh5c2ljc01hbmFnZXIuUFRNX1JBVElPKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGpvaW50ID0gdGhpcy53ZWxkSm9pbnQ7XG5cbiAgICAgICAgaWYgKGpvaW50LmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGpvaW50LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFycm93Qm9keSA9IHNlbGZDb2xsaWRlci5ib2R5O1xuICAgICAgICBsZXQgdGFyZ2V0Qm9keSA9IG90aGVyQ29sbGlkZXIuYm9keTtcbiAgICAgICAgbGV0IHdvcmxkQ29vcmRzQW5jaG9yUG9pbnQgPSBhcnJvd0JvZHkuZ2V0V29ybGRQb2ludCggY2MudjIoMC42LCAwKSApO1xuICAgIFxuICAgICAgICBqb2ludC5jb25uZWN0ZWRCb2R5ID0gdGFyZ2V0Qm9keTtcbiAgICAgICAgam9pbnQuYW5jaG9yID0gYXJyb3dCb2R5LmdldExvY2FsUG9pbnQoIHdvcmxkQ29vcmRzQW5jaG9yUG9pbnQgKTtcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gdGFyZ2V0Qm9keS5nZXRMb2NhbFBvaW50KCB3b3JsZENvb3Jkc0FuY2hvclBvaW50ICk7XG4gICAgICAgIGpvaW50LnJlZmVyZW5jZUFuZ2xlID0gdGFyZ2V0Qm9keS5ub2RlLnJvdGF0aW9uIC0gYXJyb3dCb2R5Lm5vZGUucm90YXRpb247XG5cbiAgICAgICAgam9pbnQuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxufSk7XG4iXX0=
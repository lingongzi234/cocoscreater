
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/one-side-platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18aa1UEm79FlIskk/BhE5v3', 'one-side-platform');
// cases/demo/one-side-platform.js

"use strict";

// http://www.iforce2d.net/b2dtut/one-way-walls
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.pointVelPlatform = cc.v2();
    this.pointVelOther = cc.v2();
    this.relativeVel = cc.v2();
    this.relativePoint = cc.v2();
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var cache = this._pointsCache;
    var otherBody = otherCollider.body;
    var platformBody = selfCollider.body;
    var worldManifold = contact.getWorldManifold();
    var points = worldManifold.points;
    var pointVelPlatform = this.pointVelPlatform;
    var pointVelOther = this.pointVelOther;
    var relativeVel = this.relativeVel;
    var relativePoint = this.relativePoint; //check if contact points are moving into platform

    for (var i = 0; i < points.length; i++) {
      platformBody.getLinearVelocityFromWorldPoint(points[i], pointVelPlatform);
      otherBody.getLinearVelocityFromWorldPoint(points[i], pointVelOther);
      platformBody.getLocalVector(pointVelOther.subSelf(pointVelPlatform), relativeVel);
      if (relativeVel.y < -32) //if moving down faster than 32 pixel/s (1m/s), handle as before
        return; //point is moving into platform, leave contact solid and exit
      else if (relativeVel.y < 32) {
        //if moving slower than 32 pixel/s (1m/s)
        //borderline case, moving only slightly out of platform
        platformBody.getLocalPoint(points[i], relativePoint);
        var platformFaceY = selfCollider.getAABB().height / 2; //front of platform, should only used on a box collider

        if (relativePoint.y > platformFaceY - 0.1 * 32) return; //contact point is less than 3.2pixel (10cm) inside front face of platfrom
      } else {//moving up faster than 1 m/s
      }
    } // store disabled state to contact


    contact.disabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL29uZS1zaWRlLXBsYXRmb3JtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwicG9pbnRWZWxQbGF0Zm9ybSIsInYyIiwicG9pbnRWZWxPdGhlciIsInJlbGF0aXZlVmVsIiwicmVsYXRpdmVQb2ludCIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjYWNoZSIsIl9wb2ludHNDYWNoZSIsIm90aGVyQm9keSIsImJvZHkiLCJwbGF0Zm9ybUJvZHkiLCJ3b3JsZE1hbmlmb2xkIiwiZ2V0V29ybGRNYW5pZm9sZCIsInBvaW50cyIsImkiLCJsZW5ndGgiLCJnZXRMaW5lYXJWZWxvY2l0eUZyb21Xb3JsZFBvaW50IiwiZ2V0TG9jYWxWZWN0b3IiLCJzdWJTZWxmIiwieSIsImdldExvY2FsUG9pbnQiLCJwbGF0Zm9ybUZhY2VZIiwiZ2V0QUFCQiIsImhlaWdodCIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBS0xDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxnQkFBTCxHQUF3QkwsRUFBRSxDQUFDTSxFQUFILEVBQXhCO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQlAsRUFBRSxDQUFDTSxFQUFILEVBQXJCO0lBQ0EsS0FBS0UsV0FBTCxHQUFtQlIsRUFBRSxDQUFDTSxFQUFILEVBQW5CO0lBQ0EsS0FBS0csYUFBTCxHQUFxQlQsRUFBRSxDQUFDTSxFQUFILEVBQXJCO0VBQ0gsQ0FWSTtFQVlMSSxjQUFjLEVBQUUsd0JBQVVDLE9BQVYsRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnRDtJQUM1RCxJQUFJQyxLQUFLLEdBQUcsS0FBS0MsWUFBakI7SUFFQSxJQUFJQyxTQUFTLEdBQUdILGFBQWEsQ0FBQ0ksSUFBOUI7SUFDQSxJQUFJQyxZQUFZLEdBQUdOLFlBQVksQ0FBQ0ssSUFBaEM7SUFFQSxJQUFJRSxhQUFhLEdBQUdSLE9BQU8sQ0FBQ1MsZ0JBQVIsRUFBcEI7SUFDQSxJQUFJQyxNQUFNLEdBQUdGLGFBQWEsQ0FBQ0UsTUFBM0I7SUFFQSxJQUFJaEIsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQTVCO0lBQ0EsSUFBSUUsYUFBYSxHQUFHLEtBQUtBLGFBQXpCO0lBQ0EsSUFBSUMsV0FBVyxHQUFHLEtBQUtBLFdBQXZCO0lBQ0EsSUFBSUMsYUFBYSxHQUFHLEtBQUtBLGFBQXpCLENBWjRELENBYzVEOztJQUNBLEtBQUssSUFBSWEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztNQUNwQ0osWUFBWSxDQUFDTSwrQkFBYixDQUE4Q0gsTUFBTSxDQUFDQyxDQUFELENBQXBELEVBQXlEakIsZ0JBQXpEO01BQ0FXLFNBQVMsQ0FBQ1EsK0JBQVYsQ0FBMkNILE1BQU0sQ0FBQ0MsQ0FBRCxDQUFqRCxFQUFzRGYsYUFBdEQ7TUFDQVcsWUFBWSxDQUFDTyxjQUFiLENBQTZCbEIsYUFBYSxDQUFDbUIsT0FBZCxDQUFzQnJCLGdCQUF0QixDQUE3QixFQUFzRUcsV0FBdEU7TUFFQSxJQUFLQSxXQUFXLENBQUNtQixDQUFaLEdBQWdCLENBQUMsRUFBdEIsRUFBMkI7UUFDdkIsT0FESixDQUNhO01BRGIsS0FFSyxJQUFLbkIsV0FBVyxDQUFDbUIsQ0FBWixHQUFnQixFQUFyQixFQUEwQjtRQUFFO1FBQzdCO1FBQ0FULFlBQVksQ0FBQ1UsYUFBYixDQUE0QlAsTUFBTSxDQUFDQyxDQUFELENBQWxDLEVBQXVDYixhQUF2QztRQUNBLElBQUlvQixhQUFhLEdBQUdqQixZQUFZLENBQUNrQixPQUFiLEdBQXVCQyxNQUF2QixHQUFnQyxDQUFwRCxDQUgyQixDQUc2Qjs7UUFDeEQsSUFBS3RCLGFBQWEsQ0FBQ2tCLENBQWQsR0FBa0JFLGFBQWEsR0FBRyxNQUFJLEVBQTNDLEVBQ0ksT0FMdUIsQ0FLZDtNQUNoQixDQU5JLE1BT0EsQ0FDRDtNQUNIO0lBQ0osQ0FoQzJELENBa0M1RDs7O0lBQ0FsQixPQUFPLENBQUNxQixRQUFSLEdBQW1CLElBQW5CO0VBQ0gsQ0FoREksQ0FrREw7RUFDQTtFQUVBOztBQXJESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3Lmlmb3JjZTJkLm5ldC9iMmR0dXQvb25lLXdheS13YWxsc1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogeyAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucG9pbnRWZWxQbGF0Zm9ybSA9IGNjLnYyKCk7XG4gICAgICAgIHRoaXMucG9pbnRWZWxPdGhlciA9IGNjLnYyKCk7XG4gICAgICAgIHRoaXMucmVsYXRpdmVWZWwgPSBjYy52MigpO1xuICAgICAgICB0aGlzLnJlbGF0aXZlUG9pbnQgPSBjYy52MigpO1xuICAgIH0sXG5cbiAgICBvbkJlZ2luQ29udGFjdDogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLl9wb2ludHNDYWNoZTtcblxuICAgICAgICBsZXQgb3RoZXJCb2R5ID0gb3RoZXJDb2xsaWRlci5ib2R5O1xuICAgICAgICBsZXQgcGxhdGZvcm1Cb2R5ID0gc2VsZkNvbGxpZGVyLmJvZHk7XG5cbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHdvcmxkTWFuaWZvbGQucG9pbnRzO1xuXG4gICAgICAgIGxldCBwb2ludFZlbFBsYXRmb3JtID0gdGhpcy5wb2ludFZlbFBsYXRmb3JtO1xuICAgICAgICBsZXQgcG9pbnRWZWxPdGhlciA9IHRoaXMucG9pbnRWZWxPdGhlcjtcbiAgICAgICAgbGV0IHJlbGF0aXZlVmVsID0gdGhpcy5yZWxhdGl2ZVZlbDtcbiAgICAgICAgbGV0IHJlbGF0aXZlUG9pbnQgPSB0aGlzLnJlbGF0aXZlUG9pbnQ7XG5cbiAgICAgICAgLy9jaGVjayBpZiBjb250YWN0IHBvaW50cyBhcmUgbW92aW5nIGludG8gcGxhdGZvcm1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBsYXRmb3JtQm9keS5nZXRMaW5lYXJWZWxvY2l0eUZyb21Xb3JsZFBvaW50KCBwb2ludHNbaV0sIHBvaW50VmVsUGxhdGZvcm0gKTtcbiAgICAgICAgICAgIG90aGVyQm9keS5nZXRMaW5lYXJWZWxvY2l0eUZyb21Xb3JsZFBvaW50KCBwb2ludHNbaV0sIHBvaW50VmVsT3RoZXIgKTtcbiAgICAgICAgICAgIHBsYXRmb3JtQm9keS5nZXRMb2NhbFZlY3RvciggcG9pbnRWZWxPdGhlci5zdWJTZWxmKHBvaW50VmVsUGxhdGZvcm0pLCByZWxhdGl2ZVZlbCApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHJlbGF0aXZlVmVsLnkgPCAtMzIgKSAvL2lmIG1vdmluZyBkb3duIGZhc3RlciB0aGFuIDMyIHBpeGVsL3MgKDFtL3MpLCBoYW5kbGUgYXMgYmVmb3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgLy9wb2ludCBpcyBtb3ZpbmcgaW50byBwbGF0Zm9ybSwgbGVhdmUgY29udGFjdCBzb2xpZCBhbmQgZXhpdFxuICAgICAgICAgICAgZWxzZSBpZiAoIHJlbGF0aXZlVmVsLnkgPCAzMiApIHsgLy9pZiBtb3Zpbmcgc2xvd2VyIHRoYW4gMzIgcGl4ZWwvcyAoMW0vcylcbiAgICAgICAgICAgICAgICAvL2JvcmRlcmxpbmUgY2FzZSwgbW92aW5nIG9ubHkgc2xpZ2h0bHkgb3V0IG9mIHBsYXRmb3JtXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1Cb2R5LmdldExvY2FsUG9pbnQoIHBvaW50c1tpXSwgcmVsYXRpdmVQb2ludCApO1xuICAgICAgICAgICAgICAgIGxldCBwbGF0Zm9ybUZhY2VZID0gc2VsZkNvbGxpZGVyLmdldEFBQkIoKS5oZWlnaHQgLyAyOyAgLy9mcm9udCBvZiBwbGF0Zm9ybSwgc2hvdWxkIG9ubHkgdXNlZCBvbiBhIGJveCBjb2xsaWRlclxuICAgICAgICAgICAgICAgIGlmICggcmVsYXRpdmVQb2ludC55ID4gcGxhdGZvcm1GYWNlWSAtIDAuMSozMiApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgIC8vY29udGFjdCBwb2ludCBpcyBsZXNzIHRoYW4gMy4ycGl4ZWwgKDEwY20pIGluc2lkZSBmcm9udCBmYWNlIG9mIHBsYXRmcm9tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL21vdmluZyB1cCBmYXN0ZXIgdGhhbiAxIG0vc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdG9yZSBkaXNhYmxlZCBzdGF0ZSB0byBjb250YWN0XG4gICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=
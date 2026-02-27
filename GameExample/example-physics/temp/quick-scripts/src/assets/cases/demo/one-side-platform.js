"use strict";
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
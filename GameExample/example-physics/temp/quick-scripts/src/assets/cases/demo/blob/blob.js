"use strict";
cc._RF.push(module, '4960bicKTtO84ujLGfekh0N', 'blob');
// cases/demo/blob/blob.js

"use strict";

var smooth = require('smooth');

cc.Class({
  "extends": cc.Component,
  properties: {
    particleNumber: 12,
    particleRadius: 30,
    sphereSize: 12
  },
  // use this for initialization
  init: function init() {
    this.ctx = this.getComponent(cc.Graphics);
    this.ctx.lineWidth = 6;
    this.ctx.strokeColor = cc.color().fromHEX('#495069');
    this.ctx.fillColor = cc.color().fromHEX('#ffde59');
    var x = this.node.x;
    var y = this.node.y;
    var particleNumber = this.particleNumber;
    var particleRadius = this.particleRadius;
    var sphereSize = this.sphereSize;
    var particleAngle = 2 * Math.PI / particleNumber;
    var particleDistance = Math.sin(particleAngle) * particleRadius * Math.sin((Math.PI - particleAngle) / 2);
    var spheres = [];
    spheres.push(this._createSphere(0, 0, sphereSize, this.node));

    for (var i = 0; i < particleNumber; i++) {
      var angle = particleAngle * i;
      var posX = particleRadius * Math.cos(angle);
      var posY = particleRadius * Math.sin(angle);

      var sphere = this._createSphere(posX, posY, sphereSize);

      spheres.push(sphere);
      var joint = sphere.node.addComponent(cc.DistanceJoint);
      joint.connectedBody = spheres[0];
      joint.distance = particleRadius;
      joint.dampingRatio = 0.5;
      joint.frequency = 4;

      if (i > 0) {
        joint = sphere.node.addComponent(cc.DistanceJoint);
        joint.connectedBody = spheres[spheres.length - 2];
        joint.distance = particleDistance;
        joint.dampingRatio = 1;
        joint.frequency = 0;
      }

      if (i === particleNumber - 1) {
        joint = spheres[1].node.addComponent(cc.DistanceJoint);
        joint.connectedBody = sphere;
        joint.distance = particleDistance;
        joint.dampingRatio = 1;
        joint.frequency = 0;
      }

      sphere.node.parent = this.node;
    }

    this.spheres = spheres;
  },
  _createSphere: function _createSphere(x, y, r, node) {
    if (!node) {
      node = new cc.Node();
      node.x = x;
      node.y = y;
    }

    var body = node.addComponent(cc.RigidBody);
    var collider = node.addComponent(cc.PhysicsCircleCollider);
    collider.density = 1;
    collider.restitution = 0.4;
    collider.friction = 0.5;
    collider.radius = r;
    return body;
  },
  emitTo: function emitTo(target) {
    var x = target.x;
    var y = target.y;
    var selfX = this.node.x;
    var selfY = this.node.y;
    var distance = Math.sqrt((x - selfX) * (x - selfX) + (y - selfY) * (y - selfY));
    var velocity = cc.v2(x - selfX, y - selfY);
    velocity.normalizeSelf();
    velocity.mulSelf(distance * 2);
    this.spheres.forEach(function (sphere) {
      sphere.linearVelocity = velocity;
    });
  },
  update: function update(dt) {
    var _this = this;

    var ctx = this.ctx;
    var points = this.spheres.map(function (sphere) {
      return _this.expandPosition(sphere.node.position);
    });
    points.shift();
    var result = smooth(points);
    var firstControlPoints = result[0];
    var secondControlPoints = result[1];
    var pos = points[0];
    ctx.clear();
    ctx.moveTo(pos.x, pos.y);

    for (var i = 1, len = points.length; i < len; i++) {
      var firstControlPoint = firstControlPoints[i - 1],
          secondControlPoint = secondControlPoints[i - 1];
      ctx.bezierCurveTo(firstControlPoint.x, firstControlPoint.y, secondControlPoint.x, secondControlPoint.y, points[i].x, points[i].y);
    }

    ctx.close();
    ctx.fill();
    ctx.stroke();
  },
  expandPosition: function expandPosition(pos) {
    return pos.mul(1.3);
  }
});

cc._RF.pop();
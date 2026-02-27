"use strict";
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
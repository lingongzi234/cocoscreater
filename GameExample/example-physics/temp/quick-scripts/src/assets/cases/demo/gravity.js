"use strict";
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
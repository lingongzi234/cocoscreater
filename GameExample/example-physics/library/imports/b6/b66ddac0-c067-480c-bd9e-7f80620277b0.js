"use strict";
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
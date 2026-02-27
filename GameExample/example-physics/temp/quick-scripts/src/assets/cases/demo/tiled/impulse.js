"use strict";
cc._RF.push(module, '0b1edtN8ztKxq2PMntwAWZ7', 'impulse');
// cases/demo/tiled/impulse.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    impulse: cc.v2(0, 1000)
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var manifold = contact.getWorldManifold();
    if (manifold.normal.y < 1) return;
    var body = otherCollider.body;
    body.linearVelocity = cc.v2();
    body.applyLinearImpulse(this.impulse, body.getWorldCenter(), true);
  },
  // use this for initialization
  onLoad: function onLoad() {} // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();
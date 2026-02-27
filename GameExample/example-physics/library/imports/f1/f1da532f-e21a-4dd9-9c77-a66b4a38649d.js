"use strict";
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
"use strict";
cc._RF.push(module, 'c8f672xHMpAeZdZzF0f7fa9', 'gravity-radial');
// cases/demo/gravity-radial.js

"use strict";

var Gravity = require('gravity');

cc.Class({
  "extends": Gravity,
  properties: {
    gravityForce: 500
  },
  onLoad: function onLoad() {
    this._position = cc.v2();
    this._center = cc.v2();
  },
  _applyForce: function _applyForce(body) {
    var position = this._position;
    var center = this._center;
    body.getWorldPosition(position);
    this.body.getWorldPosition(center);
    var f = center.subSelf(position).normalizeSelf().mulSelf(this.gravityForce * body.getMass());
    body.applyForce(f, position, false);
  }
});

cc._RF.pop();
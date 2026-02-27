"use strict";
cc._RF.push(module, 'b5747o+SsRLR6PWbHULtK4Z', 'conveyor-belt');
// cases/demo/conveyor-belt.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tangentSpeed: 5
  },
  onPreSolve: function onPreSolve(contact) {
    contact.setTangentSpeed(this.tangentSpeed);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();
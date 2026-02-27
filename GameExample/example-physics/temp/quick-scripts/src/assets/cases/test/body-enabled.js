"use strict";
cc._RF.push(module, 'e0ef0wdP+pAGINu16n5TmEs', 'body-enabled');
// cases/test/body-enabled.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    nodes: {
      "default": function _default() {
        return [];
      },
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  onButtonClicked: function onButtonClicked() {
    if (this.label.string === 'Disabled') {
      this.nodes.forEach(function (node) {
        node.active = false;
      });
      this.label.string = 'Enabled';
    } else if (this.label.string === 'Enabled') {
      this.nodes.forEach(function (node) {
        node.active = true;
      });
      this.label.string = 'Disabled';
    }
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();
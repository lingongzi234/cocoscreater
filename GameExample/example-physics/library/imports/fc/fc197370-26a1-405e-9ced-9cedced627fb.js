"use strict";
cc._RF.push(module, 'fc197NwJqFAXpztnO3O1if7', 'manifold');
// cases/demo/manifold.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pointTemp: {
      type: cc.Node,
      "default": null
    }
  },
  onPreSolve: function onPreSolve(contact) {
    var worldManifold = contact.getWorldManifold();
    var points = worldManifold.points;
    var scene = cc.director.getScene();

    function removeSelf() {
      this.parent = null;
    }

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var node = cc.instantiate(this.pointTemp);
      node.active = true;
      var fadeOut = cc.fadeOut(0.2);
      var remove = cc.callFunc(removeSelf, node);
      var action = cc.sequence(fadeOut, remove);
      node.runAction(action);
      node.x = p.x;
      node.y = p.y;
      node.parent = scene;
    }
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();
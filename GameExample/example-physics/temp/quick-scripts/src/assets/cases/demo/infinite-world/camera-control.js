"use strict";
cc._RF.push(module, 'd1e93YcLzhOiohXX6bHj9ay', 'camera-control');
// cases/demo/infinite-world/camera-control.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.camera = this.getComponent(cc.Camera);
  },
  // called every frame, uncomment this function to activate update callback
  lateUpdate: function lateUpdate(dt) {
    var targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
    this.node.position = this.node.parent.convertToNodeSpaceAR(targetPos);
    var ratio = targetPos.y / cc.winSize.height;
    this.camera.zoomRatio = 1 + (0.5 - ratio) * 0.5;
  }
});

cc._RF.pop();
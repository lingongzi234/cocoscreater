"use strict";
cc._RF.push(module, '9d86a1b/aNL8JDqJ7+E0XIU', 'physics-settings');
// physics-settings/physics-settings.js

"use strict";

cc.game.on(cc.game.EVENT_ENGINE_INITED, function () {
  var physicsManager = cc.director.getPhysicsManager();
  physicsManager.enabled = true;
  physicsManager.debugDrawFlags = // 0;
  // cc.PhysicsManager.DrawBits.e_aabbBit |
  cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
});

cc._RF.pop();
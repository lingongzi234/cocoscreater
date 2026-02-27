
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/physics-settings/physics-settings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9waHlzaWNzLXNldHRpbmdzL3BoeXNpY3Mtc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiY2MiLCJnYW1lIiwib24iLCJFVkVOVF9FTkdJTkVfSU5JVEVEIiwicGh5c2ljc01hbmFnZXIiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImRlYnVnRHJhd0ZsYWdzIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLElBQUgsQ0FBUUMsRUFBUixDQUFXRixFQUFFLENBQUNDLElBQUgsQ0FBUUUsbUJBQW5CLEVBQXdDLFlBQU07RUFDMUMsSUFBSUMsY0FBYyxHQUFHSixFQUFFLENBQUNLLFFBQUgsQ0FBWUMsaUJBQVosRUFBckI7RUFDQUYsY0FBYyxDQUFDRyxPQUFmLEdBQXlCLElBQXpCO0VBRUFILGNBQWMsQ0FBQ0ksY0FBZixHQUNJO0VBQ0E7RUFDQVIsRUFBRSxDQUFDUyxjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsVUFBM0IsR0FDQVgsRUFBRSxDQUFDUyxjQUFILENBQWtCQyxRQUFsQixDQUEyQkUsVUFKL0I7QUFNSCxDQVZEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfRU5HSU5FX0lOSVRFRCwgKCkgPT4ge1xuICAgIGxldCBwaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgcGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgXG4gICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSBcbiAgICAgICAgLy8gMDtcbiAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9qb2ludEJpdCB8XG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcbiAgICAgICAgO1xufSk7XG5cbiJdfQ==
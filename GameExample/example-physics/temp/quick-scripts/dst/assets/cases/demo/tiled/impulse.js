
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/tiled/impulse.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3RpbGVkL2ltcHVsc2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbXB1bHNlIiwidjIiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwibWFuaWZvbGQiLCJnZXRXb3JsZE1hbmlmb2xkIiwibm9ybWFsIiwieSIsImJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsImFwcGx5TGluZWFySW1wdWxzZSIsImdldFdvcmxkQ2VudGVyIiwib25Mb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFSixFQUFFLENBQUNLLEVBQUgsQ0FBTSxDQUFOLEVBQVMsSUFBVDtFQURELENBSFA7RUFPTEMsY0FBYyxFQUFFLHdCQUFVQyxPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7SUFDNUQsSUFBSUMsUUFBUSxHQUFHSCxPQUFPLENBQUNJLGdCQUFSLEVBQWY7SUFDQSxJQUFJRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLENBQWhCLEdBQW9CLENBQXhCLEVBQTJCO0lBRTNCLElBQUlDLElBQUksR0FBR0wsYUFBYSxDQUFDSyxJQUF6QjtJQUNBQSxJQUFJLENBQUNDLGNBQUwsR0FBc0JmLEVBQUUsQ0FBQ0ssRUFBSCxFQUF0QjtJQUNBUyxJQUFJLENBQUNFLGtCQUFMLENBQXdCLEtBQUtaLE9BQTdCLEVBQXNDVSxJQUFJLENBQUNHLGNBQUwsRUFBdEMsRUFBNkQsSUFBN0Q7RUFDSCxDQWRJO0VBZ0JMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWSxDQUVuQixDQW5CSSxDQXFCTDtFQUNBO0VBRUE7O0FBeEJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGltcHVsc2U6IGNjLnYyKDAsIDEwMDApXG4gICAgfSxcblxuICAgIG9uQmVnaW5Db250YWN0OiBmdW5jdGlvbiAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIHZhciBtYW5pZm9sZCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpO1xuICAgICAgICBpZiAobWFuaWZvbGQubm9ybWFsLnkgPCAxKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGJvZHkgPSBvdGhlckNvbGxpZGVyLmJvZHk7XG4gICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigpO1xuICAgICAgICBib2R5LmFwcGx5TGluZWFySW1wdWxzZSh0aGlzLmltcHVsc2UsIGJvZHkuZ2V0V29ybGRDZW50ZXIoKSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/cases/demo/blob/blob-emit');
require('./assets/cases/demo/blob/blob');
require('./assets/cases/demo/blob/smooth');
require('./assets/cases/demo/conveyor-belt');
require('./assets/cases/demo/cutting-objects');
require('./assets/cases/demo/gravity-radial');
require('./assets/cases/demo/gravity');
require('./assets/cases/demo/infinite-world/ball-control');
require('./assets/cases/demo/infinite-world/camera-control');
require('./assets/cases/demo/infinite-world/infinite-world');
require('./assets/cases/demo/manifold');
require('./assets/cases/demo/one-side-platform');
require('./assets/cases/demo/ray-cast-reflection');
require('./assets/cases/demo/ray-cast');
require('./assets/cases/demo/stick-arrow/arrow');
require('./assets/cases/demo/stick-arrow/shoot-arrow');
require('./assets/cases/demo/tiled/hero-control');
require('./assets/cases/demo/tiled/impulse');
require('./assets/cases/example/chain');
require('./assets/cases/example/linear-impulse');
require('./assets/cases/example/velocity');
require('./assets/cases/test/body-enabled');
require('./assets/cases/test/joint-list');
require('./assets/cases/utils/cases-settings');
require('./assets/cases/utils/physics-bound');
require('./assets/i18n/LabelLocalized');
require('./assets/i18n/data/en');
require('./assets/i18n/data/zh');
require('./assets/i18n/i18n');
require('./assets/i18n/polyglot');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/physics-settings/physics-settings');
require('./assets/start-scene/scripts/Global/AdaptiveSprite');
require('./assets/start-scene/scripts/Global/Helpers');
require('./assets/start-scene/scripts/Global/Instruction');
require('./assets/start-scene/scripts/Global/ListItem');
require('./assets/start-scene/scripts/Global/Menu');
require('./assets/start-scene/scripts/Global/SceneList');
require('./assets/start-scene/scripts/Global/TipsManager');
require('./assets/test-dt');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test-dt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9597pWXhlE+qTzsN531+wI', 'test-dt');
// test-dt.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  // use this for initialization
  onLoad: function onLoad() {},
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    console.log('test : ' + dt);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZXN0LWR0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwidXBkYXRlIiwiZHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQVZRLENBSFA7RUFnQkw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZLENBRW5CLENBbkJJO0VBcUJMO0VBQ0FDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZRixFQUF4QjtFQUNIO0FBeEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgOiAnICsgZHQpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/utils/physics-bound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bb59G9YJZM663ZrZZZSww8', 'physics-bound');
// cases/utils/physics-bound.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    size: cc.size(0, 0),
    mouseJoint: true
  },
  // use this for initialization
  onLoad: function onLoad() {
    var width = this.size.width || this.node.width;
    var height = this.size.height || this.node.height;
    var node = new cc.Node();
    var body = node.addComponent(cc.RigidBody);
    body.type = cc.RigidBodyType.Static;

    if (this.mouseJoint) {
      // add mouse joint
      var joint = node.addComponent(cc.MouseJoint);
      joint.mouseRegion = this.node;
    }

    this._addBound(node, 0, height / 2, width, 20);

    this._addBound(node, 0, -height / 2, width, 20);

    this._addBound(node, -width / 2, 0, 20, height);

    this._addBound(node, width / 2, 0, 20, height);

    node.parent = this.node;
  },
  _addBound: function _addBound(node, x, y, width, height) {
    var collider = node.addComponent(cc.PhysicsBoxCollider);
    collider.offset.x = x;
    collider.offset.y = y;
    collider.size.width = width;
    collider.size.height = height;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy91dGlscy9waHlzaWNzLWJvdW5kLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2l6ZSIsIm1vdXNlSm9pbnQiLCJvbkxvYWQiLCJ3aWR0aCIsIm5vZGUiLCJoZWlnaHQiLCJOb2RlIiwiYm9keSIsImFkZENvbXBvbmVudCIsIlJpZ2lkQm9keSIsInR5cGUiLCJSaWdpZEJvZHlUeXBlIiwiU3RhdGljIiwiam9pbnQiLCJNb3VzZUpvaW50IiwibW91c2VSZWdpb24iLCJfYWRkQm91bmQiLCJwYXJlbnQiLCJ4IiwieSIsImNvbGxpZGVyIiwiUGh5c2ljc0JveENvbGxpZGVyIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFSixFQUFFLENBQUNJLElBQUgsQ0FBUSxDQUFSLEVBQVcsQ0FBWCxDQURFO0lBRVJDLFVBQVUsRUFBRTtFQUZKLENBSFA7RUFRTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsS0FBSyxHQUFLLEtBQUtILElBQUwsQ0FBVUcsS0FBVixJQUFtQixLQUFLQyxJQUFMLENBQVVELEtBQTNDO0lBQ0EsSUFBSUUsTUFBTSxHQUFJLEtBQUtMLElBQUwsQ0FBVUssTUFBVixJQUFvQixLQUFLRCxJQUFMLENBQVVDLE1BQTVDO0lBRUEsSUFBSUQsSUFBSSxHQUFHLElBQUlSLEVBQUUsQ0FBQ1UsSUFBUCxFQUFYO0lBRUEsSUFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNJLFlBQUwsQ0FBa0JaLEVBQUUsQ0FBQ2EsU0FBckIsQ0FBWDtJQUNBRixJQUFJLENBQUNHLElBQUwsR0FBWWQsRUFBRSxDQUFDZSxhQUFILENBQWlCQyxNQUE3Qjs7SUFFQSxJQUFJLEtBQUtYLFVBQVQsRUFBcUI7TUFDakI7TUFDQSxJQUFJWSxLQUFLLEdBQUdULElBQUksQ0FBQ0ksWUFBTCxDQUFrQlosRUFBRSxDQUFDa0IsVUFBckIsQ0FBWjtNQUNBRCxLQUFLLENBQUNFLFdBQU4sR0FBb0IsS0FBS1gsSUFBekI7SUFDSDs7SUFFRCxLQUFLWSxTQUFMLENBQWVaLElBQWYsRUFBcUIsQ0FBckIsRUFBd0JDLE1BQU0sR0FBQyxDQUEvQixFQUFrQ0YsS0FBbEMsRUFBeUMsRUFBekM7O0lBQ0EsS0FBS2EsU0FBTCxDQUFlWixJQUFmLEVBQXFCLENBQXJCLEVBQXdCLENBQUNDLE1BQUQsR0FBUSxDQUFoQyxFQUFtQ0YsS0FBbkMsRUFBMEMsRUFBMUM7O0lBQ0EsS0FBS2EsU0FBTCxDQUFlWixJQUFmLEVBQXFCLENBQUNELEtBQUQsR0FBTyxDQUE1QixFQUErQixDQUEvQixFQUFrQyxFQUFsQyxFQUFzQ0UsTUFBdEM7O0lBQ0EsS0FBS1csU0FBTCxDQUFlWixJQUFmLEVBQXFCRCxLQUFLLEdBQUMsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsRUFBakMsRUFBcUNFLE1BQXJDOztJQUVBRCxJQUFJLENBQUNhLE1BQUwsR0FBYyxLQUFLYixJQUFuQjtFQUNILENBOUJJO0VBZ0NMWSxTQWhDSyxxQkFnQ01aLElBaENOLEVBZ0NZYyxDQWhDWixFQWdDZUMsQ0FoQ2YsRUFnQ2tCaEIsS0FoQ2xCLEVBZ0N5QkUsTUFoQ3pCLEVBZ0NpQztJQUNsQyxJQUFJZSxRQUFRLEdBQUdoQixJQUFJLENBQUNJLFlBQUwsQ0FBa0JaLEVBQUUsQ0FBQ3lCLGtCQUFyQixDQUFmO0lBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkosQ0FBaEIsR0FBb0JBLENBQXBCO0lBQ0FFLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkgsQ0FBaEIsR0FBb0JBLENBQXBCO0lBQ0FDLFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY0csS0FBZCxHQUFzQkEsS0FBdEI7SUFDQWlCLFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY0ssTUFBZCxHQUF1QkEsTUFBdkI7RUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNpemU6IGNjLnNpemUoMCwgMCksXG4gICAgICAgIG1vdXNlSm9pbnQ6IHRydWVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3aWR0aCAgID0gdGhpcy5zaXplLndpZHRoIHx8IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCAgPSB0aGlzLnNpemUuaGVpZ2h0IHx8IHRoaXMubm9kZS5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuXG4gICAgICAgIGxldCBib2R5ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG5cbiAgICAgICAgaWYgKHRoaXMubW91c2VKb2ludCkge1xuICAgICAgICAgICAgLy8gYWRkIG1vdXNlIGpvaW50XG4gICAgICAgICAgICBsZXQgam9pbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5Nb3VzZUpvaW50KTtcbiAgICAgICAgICAgIGpvaW50Lm1vdXNlUmVnaW9uID0gdGhpcy5ub2RlOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fYWRkQm91bmQobm9kZSwgMCwgaGVpZ2h0LzIsIHdpZHRoLCAyMCk7XG4gICAgICAgIHRoaXMuX2FkZEJvdW5kKG5vZGUsIDAsIC1oZWlnaHQvMiwgd2lkdGgsIDIwKTtcbiAgICAgICAgdGhpcy5fYWRkQm91bmQobm9kZSwgLXdpZHRoLzIsIDAsIDIwLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLl9hZGRCb3VuZChub2RlLCB3aWR0aC8yLCAwLCAyMCwgaGVpZ2h0KTtcblxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICB9LFxuXG4gICAgX2FkZEJvdW5kIChub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgIGNvbGxpZGVyLm9mZnNldC54ID0geDtcbiAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgPSB5O1xuICAgICAgICBjb2xsaWRlci5zaXplLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbGxpZGVyLnNpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/data/zh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87f1fs0gohHDIfNg4aePXbt', 'zh');
// i18n/data/zh.js

"use strict";

module.exports = {
  "example_case_nonsupport_native_desktop_tips": "该测试用例不支持 Mac 平台和 Windows 平台",
  "example_case_nonsupport_runtime_tips": "该测试用例不支持 Runtime 平台",
  "example_case_nonsupport_mobile_tips": "该测试用例不支持移动平台",
  "example_case_nonsupport_web_canvas_tips": "该测试用例不支持 Canvas 模式",
  "example_case_support_webGl_tips": "该测试用例只支持 WebGL 模式",
  "example_case_support_mobile_tips": "该测试用例只支持移动平台",
  "example_case_support_mobile_android_tips": "该测试用例只支持 Android 移动平台",
  "example_case_support_native_chrome_tips": "该测试用例只支持 PC 平台上的 Chrome 浏览器",
  "example_case_support_native_desktop_tips": "该测试用例只支持 Mac 平台和 Windows 平台",
  "TestList.fire.30": "返回列表",
  "TestList.fire.37": "查看说明",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "这个精灵来自单张图片",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "这个精灵来自图集",
  "cases/01_graphics/01_sprite/FilledSprite.fire.9": "填充类型：水平",
  "cases/01_graphics/01_sprite/FilledSprite.fire.15": "填充类型：垂直",
  "cases/01_graphics/01_sprite/FilledSprite.fire.23": "填充类型：圆形",
  "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "这是普通精灵",
  "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "这是九宫格精灵",
  "cases/01_graphics/01_sprite/TiledSprite.fire.6": "这是平铺精灵",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "自动剪裁 ",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "未自动剪裁",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": "粒子 1\n\"完成时自动移除\" 禁止",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": "粒子 2\n\"完成时自动移除\" 开启",
  "cases/01_graphics/02_particle/ToggleParticle.fire.6": "按 \"按钮\" 进行开关粒子播放",
  "cases/02_ui/01_widget/AdvancedWidget.fire.7": "左上",
  "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.14": "上",
  "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.21": "右上",
  "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.28": "左",
  "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.35": "右",
  "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.42": "左下",
  "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.49": "下",
  "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.56": "右下",
  "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.63": "高级挂件",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne 为 false 时，会一直保持对齐",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne 为 true 时，只在 Widget 生效时对齐一次",
  "cases/02_ui/01_widget/AnimatedWidget.fire.9": "动画挂件。",
  "cases/02_ui/01_widget/WidgetAlign.fire.18": "挂件对齐方式。",
  "cases/02_ui/01_widget/AutoResize.fire.13": "挂件自动调整大小。",
  "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
  "cases/02_ui/02_label/AlignFontLabel.fire.6": "文本对齐",
  "cases/02_ui/02_label/AlignFontLabel.fire.9": "水平对齐",
  "cases/02_ui/02_label/AlignFontLabel.fire.14": "哈啰！\n欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.16": "对齐: 靠左",
  "cases/02_ui/02_label/AlignFontLabel.fire.21": "哈啰！\n欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.23": "对齐: 居中",
  "cases/02_ui/02_label/AlignFontLabel.fire.28": "哈啰！\n欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.30": "对齐: 靠右",
  "cases/02_ui/02_label/AlignFontLabel.fire.33": "垂直对齐",
  "cases/02_ui/02_label/AlignFontLabel.fire.38": "欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.40": "对齐: 顶部",
  "cases/02_ui/02_label/AlignFontLabel.fire.45": "欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.47": "对齐: 居中",
  "cases/02_ui/02_label/AlignFontLabel.fire.52": "欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.54": "对齐: 底部",
  "cases/02_ui/02_label/SystemFontLabel.fire.6": "系统字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.9": "换行",
  "cases/02_ui/02_label/SystemFontLabel.fire.14": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.21": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.26": "不换行",
  "cases/02_ui/02_label/SystemFontLabel.fire.31": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.38": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.45": "哈喽! 欢迎使用 Cocos Creator",
  "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
  "cases/02_ui/03_button/ButtonInScroll.js.1": "顶部按钮被点击！",
  "cases/02_ui/03_button/ButtonInScroll.js.2": "底部按钮被点击！",
  "cases/02_ui/03_button/ButtonInScroll.fire.21": "哪个按钮被点击？",
  "cases/02_ui/03_button/ButtonInScroll.fire.27": "拖动显示更多按钮\n\n",
  "cases/02_ui/03_button/SimpleButton.js.1": "左边的按钮被点击！",
  "cases/02_ui/03_button/SimpleButton.js.2": "右边的按钮被点击！",
  "cases/02_ui/03_button/ButtonInteractable.fire.7": "播放",
  "cases/02_ui/03_button/ButtonInteractable.fire.16": "停止",
  "cases/02_ui/03_button/ButtonInteractable.fire.21": "交互(interactable): true",
  "cases/02_ui/03_button/ButtonInteractable.fire.23": "交互(interactable): false",
  "cases/02_ui/03_button/ButtonInteractable.js.1": "交互(interactable): ",
  "cases/02_ui/03_button/ButtonInteractable.js.2": "交互(interactable): ",
  "cases/02_ui/03_button/SimpleButton.fire.6": "哪个按钮被点击？",
  "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
  "cases/02_ui/04_progressbar/progressbar.fire.7": "水平进度条，进度 0.3",
  "cases/02_ui/04_progressbar/progressbar.fire.11": "反向水平进度条，进度 1.0",
  "cases/02_ui/04_progressbar/progressbar.fire.15": "垂直进度条 \n从下向上",
  "cases/02_ui/04_progressbar/progressbar.fire.19": "垂直进度条 \n从上向下",
  "cases/02_ui/04_progressbar/progressbar.fire.23": "设置了精灵的进度条",
  "cases/02_ui/04_progressbar/progressbar.fire.28": "设置了精灵（子控件）的进度条",
  "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
  "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview 完整功能",
  "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview 没有惯性",
  "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview 没有弹性",
  "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview 只能水平滚动",
  "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview 只能垂直滚动",
  "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview 没有滚动条",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView 和垂直布局容器",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView 和水平布局容器",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView 和横向网格布局容器 ",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView 和纵向网格布局容器 ",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "水平布局容器",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "垂直布局容器",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "横向网格布局容器",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "纵向网格布局容器",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "基本",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "水平",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "垂直",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "横向网格布局容器",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "纵向网格布局容器",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
  "cases/02_ui/07_editBox/editbox.js.1": "输入文本: ",
  "cases/02_ui/06_layout/LayoutNone.fire.6": "基本布局容器, 类型: None\n自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.35": "水平布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.60": "垂直布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.77": "横向网格布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.142": "纵向网格布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/07_editBox/EditBox.fire.25": "单行密码框:",
  "cases/02_ui/07_editBox/EditBox.fire.27": "单行文本框:",
  "cases/02_ui/07_editBox/EditBox.fire.29": "多行文本框:",
  "cases/02_ui/07_editBox/EditBox.fire.32": "点击",
  "cases/02_ui/07_editBox/EditBox.fire.38": "按钮必须在 EditBox 的上面, \n并且它应该允许点击.",
  "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "按 'A' 或 'D' 键控制小绵羊",
  "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
  "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "请触摸任意位置试试",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "用你的手指放缩图片！",
  "cases/03_gameplay/02_actions/SimpleAction.fire.13": "简单的动作",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "自定义动画属性",
  "cases/03_gameplay/03_animation/AnimationEvent.js.1": "开始第",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "开始第1个动画",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "动画事件",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "这是一个移动动画。",
  "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "这是精灵帧动画",
  "cases/03_gameplay/03_animation/CreateClip.fire.1": "动态创建动画剪辑",
  "cases/04_audio/SimpleAudio.fire.6": "享受音乐!",
  "cases/05_scripting/01_properties/NodeArray.fire.14": "这是节点数组",
  "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.10": "这是非序列化",
  "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
  "cases/05_scripting/01_properties/ReferenceType.fire.11": "这个例子不包括运行时演示",
  "cases/05_scripting/01_properties/ValueType.fire.6": "这个例子不包括运行时演示",
  "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "实例化预制资源",
  "cases/05_scripting/03_events/EventInMask.fire.23": "更改节点排序",
  "cases/05_scripting/03_events/SimpleEvent.fire.19": "触摸事件可以支持点击",
  "cases/05_scripting/03_events/SimpleEvent.fire.21": "鼠标事件可以支持单击、悬停、滚轮",
  "cases/05_scripting/03_events/SimpleEvent.fire.23": "自定义事件可以手动触发\n(点击上面的按钮)",
  "cases/05_scripting/03_events/SimpleEvent.fire.25": "基本事件",
  "cases/05_scripting/03_events/TouchPropagation.fire.15": "触摸事件冒泡",
  "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.12": "重复定时器",
  "cases/05_scripting/04_scheduler/scheduler.fire.18": "取消定时器",
  "cases/05_scripting/04_scheduler/scheduler.fire.24": "定时执行1次",
  "cases/05_scripting/04_scheduler/scheduler.fire.29": "使用 update 函数每帧更新计数",
  "cases/05_scripting/04_scheduler/scheduler.fire.31": "定时器",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "交叉引用",
  "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "生命周期",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "资源加载",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "加载 SpriteFrame",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "加载 Texture",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "加载 Audio",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "加载 Txt",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "加载 Font",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "加载 Plist",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "加载 Prefab",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "加载 Scene",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "加载 Animation",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "加载 Spine",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "当前尚无加载。",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "已加载 ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "播放 ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "创建 ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "播放音乐。",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "这是字体！",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "按类型",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "加载 SpriteFrame",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "按 Url",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "加载预制资源",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "这个例子不包括运行时演示",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "全部加载",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "加载全部的SpriteFrame",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "清空",
  "cases/05_scripting/08_module/load_module.fire.6": "加载模块",
  "cases/05_scripting/08_module/load_module.fire.10": "创建怪物",
  "cases/05_scripting/09_singleton/Singleton.fire.6": "这例子不包含运行时演示",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "下载完成!!",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "正在下载: ",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "点击任意地方进行下载...",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "加载完成",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "正在下载",
  "cases/05_scripting/11_network/NetworkCtrl.js.1": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.2": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.3": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.4": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\n发送二进制WS已打开.",
  "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\n收到响应.",
  "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\n发送二进制遇到错误.",
  "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\nwebsocket 实例已关闭.",
  "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\n发送二进制WS等待中...",
  "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\n",
  "cases/05_scripting/11_network/network.fire.7": "Label",
  "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
  "cases/05_scripting/11_network/network.fire.11": "Label",
  "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
  "cases/05_scripting/11_network/network.fire.15": "Label",
  "cases/05_scripting/11_network/network.fire.14": "WebSocket",
  "cases/05_scripting/11_network/network.fire.19": "Label",
  "cases/05_scripting/11_network/network.fire.18": "SocketIO",
  "cases/native_call/native_call.fire.1": "点击按钮调用静态方法！",
  "cases/native_call/native_call.fire.2": "点击",
  "cases/collider/Category.fire.3": "组: 碰撞",
  "cases/collider/Category.fire.5": "组: 碰撞",
  "cases/collider/Category.fire.7": "组: 碰撞",
  "cases/collider/Category.fire.9": "组: 默认",
  "cases/collider/Shape.fire.20": "显示多边形",
  "cases/collider/Shape.fire.27": "显示圆",
  "cases/collider/Shape.fire.34": "显示盒子",
  "cases/collider/Shape.fire.43": "显示多边形",
  "cases/collider/Shape.fire.50": "显示圆",
  "cases/collider/Shape.fire.57": "显示盒子",
  "cases/motionStreak/MotionStreak.fire.1": "改变拖尾",
  "cases/spine/SpineBoy.fire.11": "调试插槽",
  "cases/spine/SpineBoy.fire.18": "调试关节",
  "cases/spine/SpineBoy.fire.25": "时间缩放",
  "cases/spine/SpineBoy.fire.36": "停止",
  "cases/spine/SpineBoy.fire.43": "走",
  "cases/spine/SpineBoy.fire.50": "跑",
  "cases/spine/SpineBoy.fire.58": "跳",
  "cases/spine/SpineBoy.fire.65": "射击",
  "cases/tiledmap/Puzzle.fire.18": "你赢了",
  "cases/tiledmap/Puzzle.fire.21": "重新开始",
  "res/prefabs/ListItem.prefab.2": "Label ssss",
  "res/prefabs/Monster.prefab.3": "名字:",
  "res/prefabs/Monster.prefab.11": "等级 :",
  "res/prefabs/Monster.prefab.19": "血量 :",
  "res/prefabs/Monster.prefab.27": "攻击 :",
  "res/prefabs/Monster.prefab.35": "防御 :",
  "res/prefabs/loadItem.prefab.1": "Label",
  "resources/test assets/prefab.prefab.2": "这是一个预制",
  "resources/test assets/scene.fire.3": "返回资源加载场景",
  "resources/test assets/scene.fire.6": "返回",
  "scripts/Global/Menu.js.1": "说明暂缺",
  "cases/anysdk/1": "该类型只在Android、iOS、Web-Mobile上有效果",
  "cases/anysdk/2": "该类型只在Android、iOS上有效果"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pMThuL2RhdGEvemguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2YsK0NBQStDLDZCQURoQztFQUVmLHdDQUF3QyxxQkFGekI7RUFHZix1Q0FBdUMsY0FIeEI7RUFJZiwyQ0FBMkMsb0JBSjVCO0VBS2YsbUNBQW1DLG1CQUxwQjtFQU1mLG9DQUFvQyxjQU5yQjtFQU9mLDRDQUE0Qyx1QkFQN0I7RUFRZiwyQ0FBMkMsNkJBUjVCO0VBU2YsNENBQTRDLDZCQVQ3QjtFQVVmLG9CQUFvQixNQVZMO0VBV2Ysb0JBQW9CLE1BWEw7RUFZZixrREFBa0QsWUFabkM7RUFhZixtREFBbUQsVUFicEM7RUFjZixtREFBbUQsU0FkcEM7RUFlZixvREFBb0QsU0FmckM7RUFnQmYsb0RBQW9ELFNBaEJyQztFQWlCZixtREFBbUQsUUFqQnBDO0VBa0JmLG1EQUFtRCxTQWxCcEM7RUFtQmYsa0RBQWtELFFBbkJuQztFQW9CZixvREFBb0QsT0FwQnJDO0VBcUJmLHFEQUFxRCxPQXJCdEM7RUFzQmYsMkRBQTJELHNCQXRCNUM7RUF1QmYsNERBQTRELHNCQXZCN0M7RUF3QmYsdURBQXVELG1CQXhCeEM7RUF5QmYsK0NBQStDLElBekJoQztFQTBCZiwrQ0FBK0MsbUJBMUJoQztFQTJCZixnREFBZ0QsR0EzQmpDO0VBNEJmLGdEQUFnRCxZQTVCakM7RUE2QmYsZ0RBQWdELElBN0JqQztFQThCZixnREFBZ0Qsb0JBOUJqQztFQStCZixnREFBZ0QsR0EvQmpDO0VBZ0NmLGdEQUFnRCxhQWhDakM7RUFpQ2YsZ0RBQWdELEdBakNqQztFQWtDZixnREFBZ0QsY0FsQ2pDO0VBbUNmLGdEQUFnRCxJQW5DakM7RUFvQ2YsZ0RBQWdELHNCQXBDakM7RUFxQ2YsZ0RBQWdELEdBckNqQztFQXNDZixnREFBZ0QsZUF0Q2pDO0VBdUNmLGdEQUFnRCxJQXZDakM7RUF3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QixNQXRRYjtFQXVRZixrQkFBa0IsaUNBdlFIO0VBd1FmLGtCQUFrQjtBQXhRSCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfbmF0aXZlX2Rlc2t0b3BfdGlwc1wiOiBcIuivpea1i+ivleeUqOS+i+S4jeaUr+aMgSBNYWMg5bmz5Y+w5ZKMIFdpbmRvd3Mg5bmz5Y+wXCIsXG4gIFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfcnVudGltZV90aXBzXCI6IFwi6K+l5rWL6K+V55So5L6L5LiN5pSv5oyBIFJ1bnRpbWUg5bmz5Y+wXCIsXG4gIFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfbW9iaWxlX3RpcHNcIjogXCLor6XmtYvor5XnlKjkvovkuI3mlK/mjIHnp7vliqjlubPlj7BcIixcbiAgXCJleGFtcGxlX2Nhc2Vfbm9uc3VwcG9ydF93ZWJfY2FudmFzX3RpcHNcIjogXCLor6XmtYvor5XnlKjkvovkuI3mlK/mjIEgQ2FudmFzIOaooeW8j1wiLFxuICBcImV4YW1wbGVfY2FzZV9zdXBwb3J0X3dlYkdsX3RpcHNcIjogXCLor6XmtYvor5XnlKjkvovlj6rmlK/mjIEgV2ViR0wg5qih5byPXCIsXG4gIFwiZXhhbXBsZV9jYXNlX3N1cHBvcnRfbW9iaWxlX3RpcHNcIjogXCLor6XmtYvor5XnlKjkvovlj6rmlK/mjIHnp7vliqjlubPlj7BcIixcbiAgXCJleGFtcGxlX2Nhc2Vfc3VwcG9ydF9tb2JpbGVfYW5kcm9pZF90aXBzXCI6IFwi6K+l5rWL6K+V55So5L6L5Y+q5pSv5oyBIEFuZHJvaWQg56e75Yqo5bmz5Y+wXCIsXG4gIFwiZXhhbXBsZV9jYXNlX3N1cHBvcnRfbmF0aXZlX2Nocm9tZV90aXBzXCI6IFwi6K+l5rWL6K+V55So5L6L5Y+q5pSv5oyBIFBDIOW5s+WPsOS4iueahCBDaHJvbWUg5rWP6KeI5ZmoXCIsXG4gIFwiZXhhbXBsZV9jYXNlX3N1cHBvcnRfbmF0aXZlX2Rlc2t0b3BfdGlwc1wiOiBcIuivpea1i+ivleeUqOS+i+WPquaUr+aMgSBNYWMg5bmz5Y+w5ZKMIFdpbmRvd3Mg5bmz5Y+wXCIsXG4gIFwiVGVzdExpc3QuZmlyZS4zMFwiOiBcIui/lOWbnuWIl+ihqFwiLFxuICBcIlRlc3RMaXN0LmZpcmUuMzdcIjogXCLmn6XnnIvor7TmmI5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvQXRsYXNTcHJpdGUuZmlyZS43XCI6IFwi6L+Z5Liq57K+54G15p2l6Ieq5Y2V5byg5Zu+54mHXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL0F0bGFzU3ByaXRlLmZpcmUuMTFcIjogXCLov5nkuKrnsr7ngbXmnaXoh6rlm77pm4ZcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvRmlsbGVkU3ByaXRlLmZpcmUuOVwiOiBcIuWhq+WFheexu+Wei++8muawtOW5s1wiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9GaWxsZWRTcHJpdGUuZmlyZS4xNVwiOiBcIuWhq+WFheexu+Wei++8muWeguebtFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9GaWxsZWRTcHJpdGUuZmlyZS4yM1wiOiBcIuWhq+WFheexu+Wei++8muWchuW9olwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9TaW1wbGVTcHJpdGUuZmlyZS43XCI6IFwi6L+Z5piv5pmu6YCa57K+54G1XCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL1NsaWNlZFNwcml0ZS5maXJlLjdcIjogXCLov5nmmK/kuZ3lrqvmoLznsr7ngbVcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVGlsZWRTcHJpdGUuZmlyZS42XCI6IFwi6L+Z5piv5bmz6ZO657K+54G1XCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL1RyaW1tZWRTcHJpdGUuZmlyZS43XCI6IFwi6Ieq5Yqo5Ymq6KOBIFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9UcmltbWVkU3ByaXRlLmZpcmUuMTJcIjogXCLmnKroh6rliqjliaroo4FcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9BdXRvUmVtb3ZlUGFydGljbGUuZmlyZS45XCI6IFwi57KS5a2QIDFcXG5cXFwi5a6M5oiQ5pe26Ieq5Yqo56e76ZmkXFxcIiDnpoHmraJcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9BdXRvUmVtb3ZlUGFydGljbGUuZmlyZS4xM1wiOiBcIueykuWtkCAyXFxuXFxcIuWujOaIkOaXtuiHquWKqOenu+mZpFxcXCIg5byA5ZCvXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDJfcGFydGljbGUvVG9nZ2xlUGFydGljbGUuZmlyZS42XCI6IFwi5oyJIFxcXCLmjInpkq5cXFwiIOi/m+ihjOW8gOWFs+eykuWtkOaSreaUvlwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjdcIjogXCLlt6bkuIpcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS45XCI6IFwidG9wOiAxMCUgbGVmdDogNiVcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4xNFwiOiBcIuS4ilwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjE2XCI6IFwidG9wOiAtMzRweFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjIxXCI6IFwi5Y+z5LiKXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMjNcIjogXCJ0b3A6IDEwJSByaWdodDogNiVcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4yOFwiOiBcIuW3plwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjMwXCI6IFwibGVmdDogLTUwcHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4zNVwiOiBcIuWPs1wiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjM3XCI6IFwicmlnaHQ6IC01MHB4XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNDJcIjogXCLlt6bkuItcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS40NFwiOiBcImJvdHRvbTogMTAlIGxlZnQ6IDYlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNDlcIjogXCLkuItcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41MVwiOiBcImJvdHRvbTogLTM0cHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41NlwiOiBcIuWPs+S4i1wiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjU4XCI6IFwiYm90dG9tOjEwJSByaWdodDo2JVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjYzXCI6IFwi6auY57qn5oyC5Lu2XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FsaWduT25jZVdpZGdldC5maXJlLjFcIjogXCJBbGlnbk9uZSDkuLogZmFsc2Ug5pe277yM5Lya5LiA55u05L+d5oyB5a+56b2QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FsaWduT25jZVdpZGdldC5maXJlLjJcIjogXCJBbGlnbk9uZSDkuLogdHJ1ZSDml7bvvIzlj6rlnKggV2lkZ2V0IOeUn+aViOaXtuWvuem9kOS4gOasoVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BbmltYXRlZFdpZGdldC5maXJlLjlcIjogXCLliqjnlLvmjILku7bjgIJcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvV2lkZ2V0QWxpZ24uZmlyZS4xOFwiOiBcIuaMguS7tuWvuem9kOaWueW8j+OAglwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BdXRvUmVzaXplLmZpcmUuMTNcIjogXCLmjILku7boh6rliqjosIPmlbTlpKflsI/jgIJcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9Hb2xkQmVhdGluZ0FuaW1lLmpzLjFcIjogXCIwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS42XCI6IFwi5paH5pys5a+56b2QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS45XCI6IFwi5rC05bmz5a+56b2QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4xNFwiOiBcIuWTiOWVsO+8gVxcbuasoui/juS9v+eUqCBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4xNlwiOiBcIuWvuem9kDog6Z2g5bemXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yMVwiOiBcIuWTiOWVsO+8gVxcbuasoui/juS9v+eUqCBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yM1wiOiBcIuWvuem9kDog5bGF5LitXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yOFwiOiBcIuWTiOWVsO+8gVxcbuasoui/juS9v+eUqCBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4zMFwiOiBcIuWvuem9kDog6Z2g5Y+zXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4zM1wiOiBcIuWeguebtOWvuem9kFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMzhcIjogXCLmrKLov47kvb/nlKggXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDBcIjogXCLlr7npvZA6IOmhtumDqFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDVcIjogXCLmrKLov47kvb/nlKggXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDdcIjogXCLlr7npvZA6IOWxheS4rVwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNTJcIjogXCLmrKLov47kvb/nlKggXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNTRcIjogXCLlr7npvZA6IOW6lemDqFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjZcIjogXCLns7vnu5/lrZfkvZNcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS45XCI6IFwi5o2i6KGMXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMTRcIjogXCLov5nmmK/ns7vnu5/pu5jorqTlrZfkvZNcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4xNlwiOiBcIk92ZXJmbG93OiBDTEFNUFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjIxXCI6IFwi6L+Z5piv57O757uf6buY6K6k5a2X5L2TXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjNcIjogXCJPdmVyZmxvdzogU0hSSU5LXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjZcIjogXCLkuI3mjaLooYxcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4zMVwiOiBcIui/meaYr+ezu+e7n+m7mOiupOWtl+S9k1wiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjMzXCI6IFwiT3ZlcmZsb3c6IENMQU1QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMzhcIjogXCLov5nmmK/ns7vnu5/pu5jorqTlrZfkvZNcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40MFwiOiBcIk92ZXJmbG93OiBTSFJJTktcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40NVwiOiBcIuWTiOWWvSEg5qyi6L+O5L2/55SoIENvY29zIENyZWF0b3JcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40N1wiOiBcIk92ZXJmbG93OiBSRVNaSUVfSEVJR0hUXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkluU2Nyb2xsLmpzLjFcIjogXCLpobbpg6jmjInpkq7ooqvngrnlh7vvvIFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW5TY3JvbGwuanMuMlwiOiBcIuW6lemDqOaMiemSruiiq+eCueWHu++8gVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5maXJlLjIxXCI6IFwi5ZOq5Liq5oyJ6ZKu6KKr54K55Ye777yfXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkluU2Nyb2xsLmZpcmUuMjdcIjogXCLmi5bliqjmmL7npLrmm7TlpJrmjInpkq5cXG5cXG5cIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjFcIjogXCLlt6bovrnnmoTmjInpkq7ooqvngrnlh7vvvIFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjJcIjogXCLlj7PovrnnmoTmjInpkq7ooqvngrnlh7vvvIFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmZpcmUuN1wiOiBcIuaSreaUvlwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuZmlyZS4xNlwiOiBcIuWBnOatolwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuZmlyZS4yMVwiOiBcIuS6pOS6kihpbnRlcmFjdGFibGUpOiB0cnVlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5maXJlLjIzXCI6IFwi5Lqk5LqSKGludGVyYWN0YWJsZSk6IGZhbHNlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5qcy4xXCI6IFwi5Lqk5LqSKGludGVyYWN0YWJsZSk6IFwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuanMuMlwiOiBcIuS6pOS6kihpbnRlcmFjdGFibGUpOiBcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmZpcmUuNlwiOiBcIuWTquS4quaMiemSruiiq+eCueWHu++8n1wiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvSXRlbS5qcy4xXCI6IFwiVG1wbCNcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjdcIjogXCLmsLTlubPov5vluqbmnaHvvIzov5vluqYgMC4zXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4xMVwiOiBcIuWPjeWQkeawtOW5s+i/m+W6puadoe+8jOi/m+W6piAxLjBcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjE1XCI6IFwi5Z6C55u06L+b5bqm5p2hIFxcbuS7juS4i+WQkeS4ilwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMTlcIjogXCLlnoLnm7Tov5vluqbmnaEgXFxu5LuO5LiK5ZCR5LiLXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4yM1wiOiBcIuiuvue9ruS6hueyvueBteeahOi/m+W6puadoVwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMjhcIjogXCLorr7nva7kuobnsr7ngbXvvIjlrZDmjqfku7bvvInnmoTov5vluqbmnaFcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0xpc3RWaWV3LmZpcmUuMjNcIjogXCJJdGVtICMwMFwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjdcIjogXCJTY3JvbGx2aWV3IOWujOaVtOWKn+iDvVwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjMwXCI6IFwiU2Nyb2xsdmlldyDmsqHmnInmg6/mgKdcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS41M1wiOiBcIlNjcm9sbHZpZXcg5rKh5pyJ5by55oCnXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuNzZcIjogXCJTY3JvbGx2aWV3IOWPquiDveawtOW5s+a7muWKqFwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjkzXCI6IFwiU2Nyb2xsdmlldyDlj6rog73lnoLnm7Tmu5rliqhcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS4xMTBcIjogXCJTY3JvbGx2aWV3IOayoeaciea7muWKqOadoVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS42XCI6IFwiU2Nyb2xsVmlldyDlkozlnoLnm7TluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0SW5TY3JvbGxWaWV3LmZpcmUuNDBcIjogXCJTY3JvbGxWaWV3IOWSjOawtOW5s+W4g+WxgOWuueWZqFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS43NFwiOiBcIlNjcm9sbFZpZXcg5ZKM5qiq5ZCR572R5qC85biD5bGA5a655ZmoIFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS4xNDRcIjogXCJTY3JvbGxWaWV3IOWSjOe6teWQkee9keagvOW4g+WxgOWuueWZqCBcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ2hpbGRyZW4uZmlyZS42XCI6IFwi5rC05bmz5biD5bGA5a655ZmoXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNoaWxkcmVuLmZpcmUuMzFcIjogXCLlnoLnm7TluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ2hpbGRyZW4uZmlyZS40OFwiOiBcIuaoquWQkee9keagvOW4g+WxgOWuueWZqFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDaGlsZHJlbi5maXJlLjg1XCI6IFwi57q15ZCR572R5qC85biD5bGA5a655ZmoXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNvbnRhaW5lci5maXJlLjZcIjogXCLln7rmnKxcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuMzFcIjogXCLmsLTlubNcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuMzZcIjogXCLlnoLnm7RcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNDFcIjogXCLmqKrlkJHnvZHmoLzluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNDZcIjogXCLnurXlkJHnvZHmoLzluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wN19jaGFuZ2VfY2FudmFzX2FuY2hvci9Cb3R0b21MZWZ0QW5jaG9yLmZpcmUuOFwiOiBcIng6MCwgeTowXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfY2hhbmdlX2NhbnZhc19hbmNob3IvQm90dG9tTGVmdEFuY2hvci5maXJlLjEyXCI6IFwieDo0ODAsIHk6MzIwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfY2hhbmdlX2NhbnZhc19hbmNob3IvQm90dG9tTGVmdEFuY2hvci5maXJlLjE2XCI6IFwieDo5NjAsIHk6NjQwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfZWRpdEJveC9lZGl0Ym94LmpzLjFcIjogXCLovpPlhaXmlofmnKw6IFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuNlwiOiBcIuWfuuacrOW4g+WxgOWuueWZqCwg57G75Z6LOiBOb25lXFxu6Ieq5Yqo6LCD5pW05aSn5bCPXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS4zNVwiOiBcIuawtOW5s+W4g+WxgOWuueWZqO+8jOexu+WeizogTm9uZVxcbuS4jeiHquWKqOiwg+aVtOWkp+Wwj1wiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuNjBcIjogXCLlnoLnm7TluIPlsYDlrrnlmajvvIznsbvlnos6IE5vbmVcXG7kuI3oh6rliqjosIPmlbTlpKflsI9cIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0Tm9uZS5maXJlLjc3XCI6IFwi5qiq5ZCR572R5qC85biD5bGA5a655Zmo77yM57G75Z6LOiBOb25lXFxu5LiN6Ieq5Yqo6LCD5pW05aSn5bCPXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS4xNDJcIjogXCLnurXlkJHnvZHmoLzluIPlsYDlrrnlmajvvIznsbvlnos6IE5vbmVcXG7kuI3oh6rliqjosIPmlbTlpKflsI9cIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yNVwiOiBcIuWNleihjOWvhueggeahhjpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yN1wiOiBcIuWNleihjOaWh+acrOahhjpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yOVwiOiBcIuWkmuihjOaWh+acrOahhjpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4zMlwiOiBcIueCueWHu1wiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjM4XCI6IFwi5oyJ6ZKu5b+F6aG75ZyoIEVkaXRCb3gg55qE5LiK6Z2iLCBcXG7lubbkuJTlroPlupTor6XlhYHorrjngrnlh7suXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvRXZlbnRNYW5hZ2VyL0tleWJvYXJkSW5wdXQuZmlyZS42XCI6IFwi5oyJICdBJyDmiJYgJ0QnIOmUruaOp+WItuWwj+e7tee+ilwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uVG91Y2hDdHJsLmpzLjFcIjogXCJ0b3VjaCAoXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25Ub3VjaElucHV0LmZpcmUuMTBcIjogXCLor7fop6bmkbjku7vmhI/kvY3nva7or5Xor5VcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9Pbi9Pbk11bHRpVG91Y2hJbnB1dC5maXJlLjIwXCI6IFwi55So5L2g55qE5omL5oyH5pS+57yp5Zu+54mH77yBXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDJfYWN0aW9ucy9TaW1wbGVBY3Rpb24uZmlyZS4xM1wiOiBcIueugOWNleeahOWKqOS9nFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRlQ3VzdG9tUHJvcGVydHkuZmlyZS4xNFwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGVDdXN0b21Qcm9wZXJ0eS5maXJlLjE4XCI6IFwi6Ieq5a6a5LmJ5Yqo55S75bGe5oCnXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGlvbkV2ZW50LmpzLjFcIjogXCLlvIDlp4vnrKxcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uRXZlbnQuZmlyZS42XCI6IFwi5byA5aeL56ysMeS4quWKqOeUu1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC5maXJlLjE0XCI6IFwi5Yqo55S75LqL5Lu2XCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4xMVwiOiBcIkxpbmVhclwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMTdcIjogXCJDYXNlIEluIEV4cG9cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjIzXCI6IFwiQ2FzZSBPdXQgRXhwb1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMjlcIjogXCJDYXNlIE91dCBJbiBFeHBvXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4zNVwiOiBcIkJhY2sgRm9yd2FyZFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuNDFcIjogXCLov5nmmK/kuIDkuKrnp7vliqjliqjnlLvjgIJcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vU3ByaXRlQW5pbWF0aW9uLmZpcmUuOVwiOiBcIui/meaYr+eyvueBteW4p+WKqOeUu1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9DcmVhdGVDbGlwLmZpcmUuMVwiOiBcIuWKqOaAgeWIm+W7uuWKqOeUu+WJqui+kVwiLFxuICBcImNhc2VzLzA0X2F1ZGlvL1NpbXBsZUF1ZGlvLmZpcmUuNlwiOiBcIuS6q+WPl+mfs+S5kCFcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob2RlQXJyYXkuZmlyZS4xNFwiOiBcIui/meaYr+iKgueCueaVsOe7hFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL05vblNlcmlhbGl6ZWQuZmlyZS42XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob25TZXJpYWxpemVkLmZpcmUuOFwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9uU2VyaWFsaXplZC5maXJlLjEwXCI6IFwi6L+Z5piv6Z2e5bqP5YiX5YyWXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvUmVmZXJlbmNlVHlwZS5maXJlLjhcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL1JlZmVyZW5jZVR5cGUuZmlyZS4xMVwiOiBcIui/meS4quS+i+WtkOS4jeWMheaLrOi/kOihjOaXtua8lOekulwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL1ZhbHVlVHlwZS5maXJlLjZcIjogXCLov5nkuKrkvovlrZDkuI3ljIXmi6zov5DooYzml7bmvJTnpLpcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDJfcHJlZmFiL0luc3RhbnRpYXRlUHJlZmFiLmZpcmUuN1wiOiBcIuWunuS+i+WMlumihOWItui1hOa6kFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvRXZlbnRJbk1hc2suZmlyZS4yM1wiOiBcIuabtOaUueiKgueCueaOkuW6j1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4xOVwiOiBcIuinpuaRuOS6i+S7tuWPr+S7peaUr+aMgeeCueWHu1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4yMVwiOiBcIum8oOagh+S6i+S7tuWPr+S7peaUr+aMgeWNleWHu+OAgeaCrOWBnOOAgea7mui9rlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4yM1wiOiBcIuiHquWumuS5ieS6i+S7tuWPr+S7peaJi+WKqOinpuWPkVxcbijngrnlh7vkuIrpnaLnmoTmjInpkq4pXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9TaW1wbGVFdmVudC5maXJlLjI1XCI6IFwi5Z+65pys5LqL5Lu2XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9Ub3VjaFByb3BhZ2F0aW9uLmZpcmUuMTVcIjogXCLop6bmkbjkuovku7blhpLms6FcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlQ2FsbGJhY2tzLmpzLjFcIjogXCI1LjAwIHNcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjlcIjogXCI1LjAwIHNcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjEyXCI6IFwi6YeN5aSN5a6a5pe25ZmoXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4xOFwiOiBcIuWPlua2iOWumuaXtuWZqFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMjRcIjogXCLlrprml7bmiafooYwx5qyhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4yOVwiOiBcIuS9v+eUqCB1cGRhdGUg5Ye95pWw5q+P5bin5pu05paw6K6h5pWwXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4zMVwiOiBcIuWumuaXtuWZqFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNV9jcm9zc19yZWZlcmVuY2UvQ3Jvc3NSZWZlcmVuY2UuZmlyZS43XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Nyb3NzUmVmZXJlbmNlLmZpcmUuMTJcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNV9jcm9zc19yZWZlcmVuY2UvQ3Jvc3NSZWZlcmVuY2UuZmlyZS4xNFwiOiBcIuS6pOWPieW8leeUqFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNl9saWZlX2N5Y2xlL2xpZmVfY3ljbGUuZmlyZS42XCI6IFwi55Sf5ZG95ZGo5pyfXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNVwiOiBcIui1hOa6kOWKoOi9vVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjlcIjogXCLliqDovb0gU3ByaXRlRnJhbWVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4xNVwiOiBcIuWKoOi9vSBUZXh0dXJlXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMjFcIjogXCLliqDovb0gQXVkaW9cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4yN1wiOiBcIuWKoOi9vSBUeHRcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4zM1wiOiBcIuWKoOi9vSBGb250XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMzlcIjogXCLliqDovb0gUGxpc3RcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS40NVwiOiBcIuWKoOi9vSBQcmVmYWJcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS41MVwiOiBcIuWKoOi9vSBTY2VuZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjU3XCI6IFwi5Yqg6L29IEFuaW1hdGlvblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjU5XCI6IFwi5Yqg6L29IFNwaW5lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNjVcIjogXCLlvZPliY3lsJrml6DliqDovb3jgIJcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuMVwiOiBcIuW3suWKoOi9vSBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuMlwiOiBcIuaSreaUviBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuM1wiOiBcIuWIm+W7uiBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuNFwiOiBcIuaSreaUvumfs+S5kOOAglwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy41XCI6IFwi6L+Z5piv5a2X5L2T77yBXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjdcIjogXCLmjInnsbvlnotcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzLmZpcmUuMTBcIjogXCLliqDovb0gU3ByaXRlRnJhbWVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzLmZpcmUuMTdcIjogXCLmjIkgVXJsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjIwXCI6IFwi5Yqg6L296aKE5Yi26LWE5rqQXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC5maXJlLjZcIjogXCLov5nkuKrkvovlrZDkuI3ljIXmi6zov5DooYzml7bmvJTnpLpcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsLmZpcmUuMjRcIjogXCLlhajpg6jliqDovb1cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsLmZpcmUuMzBcIjogXCLliqDovb3lhajpg6jnmoRTcHJpdGVGcmFtZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXNBbGwuZmlyZS4zNlwiOiBcIua4heepulwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wOF9tb2R1bGUvbG9hZF9tb2R1bGUuZmlyZS42XCI6IFwi5Yqg6L295qih5Z2XXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA4X21vZHVsZS9sb2FkX21vZHVsZS5maXJlLjEwXCI6IFwi5Yib5bu65oCq54mpXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA5X3NpbmdsZXRvbi9TaW5nbGV0b24uZmlyZS42XCI6IFwi6L+Z5L6L5a2Q5LiN5YyF5ZCr6L+Q6KGM5pe25ryU56S6XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvTG9hZGluZ0JhckN0cmwuanMuMVwiOiBcIuS4i+i9veWujOaIkCEhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvTG9hZGluZ0JhckN0cmwuanMuMlwiOiBcIuato+WcqOS4i+i9vTogXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvTG9hZGluZ0JhckN0cmwuanMuM1wiOiBcIueCueWHu+S7u+aEj+WcsOaWuei/m+ihjOS4i+i9vS4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL2xvYWRpbmdCYXIuZmlyZS43XCI6IFwi5Yqg6L295a6M5oiQXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvbG9hZGluZ0Jhci5maXJlLjE4XCI6IFwi5q2j5Zyo5LiL6L29XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMVwiOiBcIuivt+eojeetiS4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjJcIjogXCLor7fnqI3nrYkuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4zXCI6IFwi6K+356iN562JLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuNFwiOiBcIuivt+eojeetiS4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjVcIjogXCJXZWJTb2NrZXRcXG7lj5HpgIHkuozov5vliLZXU+W3suaJk+W8gC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy42XCI6IFwiV2ViU29ja2V0XFxu5pS25Yiw5ZON5bqULlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjdcIjogXCJXZWJTb2NrZXRcXG7lj5HpgIHkuozov5vliLbpgYfliLDplJnor68uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuOFwiOiBcIldlYlNvY2tldFxcbndlYnNvY2tldCDlrp7kvovlt7LlhbPpl60uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuOVwiOiBcIldlYlNvY2tldFxcbuWPkemAgeS6jOi/m+WItldT562J5b6F5LitLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTBcIjogXCJXZWJTb2NrZXRcXG5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xMVwiOiBcIlNvY2tldElPXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTJcIjogXCJTb2NrZXRJT1xcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjEzXCI6IFwiU29ja2V0SU9cXG5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xNFwiOiBcIlNvY2tldElPXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjdcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS42XCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTFcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xMFwiOiBcIlhNTEh0dHBSZXF1ZXN0IChBcnJheUJ1ZmZlcilcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTVcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xNFwiOiBcIldlYlNvY2tldFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xOVwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjE4XCI6IFwiU29ja2V0SU9cIixcbiAgXCJjYXNlcy9uYXRpdmVfY2FsbC9uYXRpdmVfY2FsbC5maXJlLjFcIjogXCLngrnlh7vmjInpkq7osIPnlKjpnZnmgIHmlrnms5XvvIFcIixcbiAgXCJjYXNlcy9uYXRpdmVfY2FsbC9uYXRpdmVfY2FsbC5maXJlLjJcIjogXCLngrnlh7tcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9DYXRlZ29yeS5maXJlLjNcIjogXCLnu4Q6IOeisOaSnlwiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuNVwiOiBcIue7hDog56Kw5pKeXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkuZmlyZS43XCI6IFwi57uEOiDnorDmkp5cIixcbiAgXCJjYXNlcy9jb2xsaWRlci9DYXRlZ29yeS5maXJlLjlcIjogXCLnu4Q6IOm7mOiupFwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuMjBcIjogXCLmmL7npLrlpJrovrnlvaJcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjI3XCI6IFwi5pi+56S65ZyGXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS4zNFwiOiBcIuaYvuekuuebkuWtkFwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuNDNcIjogXCLmmL7npLrlpJrovrnlvaJcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjUwXCI6IFwi5pi+56S65ZyGXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS41N1wiOiBcIuaYvuekuuebkuWtkFwiLFxuICBcImNhc2VzL21vdGlvblN0cmVhay9Nb3Rpb25TdHJlYWsuZmlyZS4xXCI6IFwi5pS55Y+Y5ouW5bC+XCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS4xMVwiOiBcIuiwg+ivleaPkuanvVwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuMThcIjogXCLosIPor5XlhbPoioJcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjI1XCI6IFwi5pe26Ze057yp5pS+XCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS4zNlwiOiBcIuWBnOatolwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuNDNcIjogXCLotbBcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjUwXCI6IFwi6LeRXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS41OFwiOiBcIui3s1wiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuNjVcIjogXCLlsITlh7tcIixcbiAgXCJjYXNlcy90aWxlZG1hcC9QdXp6bGUuZmlyZS4xOFwiOiBcIuS9oOi1ouS6hlwiLFxuICBcImNhc2VzL3RpbGVkbWFwL1B1enpsZS5maXJlLjIxXCI6IFwi6YeN5paw5byA5aeLXCIsXG4gIFwicmVzL3ByZWZhYnMvTGlzdEl0ZW0ucHJlZmFiLjJcIjogXCJMYWJlbCBzc3NzXCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuM1wiOiBcIuWQjeWtlzpcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4xMVwiOiBcIuetiee6pyA6XCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuMTlcIjogXCLooYDph48gOlwiLFxuICBcInJlcy9wcmVmYWJzL01vbnN0ZXIucHJlZmFiLjI3XCI6IFwi5pS75Ye7IDpcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4zNVwiOiBcIumYsuW+oSA6XCIsXG4gIFwicmVzL3ByZWZhYnMvbG9hZEl0ZW0ucHJlZmFiLjFcIjogXCJMYWJlbFwiLFxuICBcInJlc291cmNlcy90ZXN0IGFzc2V0cy9wcmVmYWIucHJlZmFiLjJcIjogXCLov5nmmK/kuIDkuKrpooTliLZcIixcbiAgXCJyZXNvdXJjZXMvdGVzdCBhc3NldHMvc2NlbmUuZmlyZS4zXCI6IFwi6L+U5Zue6LWE5rqQ5Yqg6L295Zy65pmvXCIsXG4gIFwicmVzb3VyY2VzL3Rlc3QgYXNzZXRzL3NjZW5lLmZpcmUuNlwiOiBcIui/lOWbnlwiLFxuICBcInNjcmlwdHMvR2xvYmFsL01lbnUuanMuMVwiOiBcIuivtOaYjuaague8ulwiLFxuICBcImNhc2VzL2FueXNkay8xXCI6IFwi6K+l57G75Z6L5Y+q5ZyoQW5kcm9pZOOAgWlPU+OAgVdlYi1Nb2JpbGXkuIrmnInmlYjmnpxcIixcbiAgXCJjYXNlcy9hbnlzZGsvMlwiOiBcIuivpeexu+Wei+WPquWcqEFuZHJvaWTjgIFpT1PkuIrmnInmlYjmnpxcIixcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/cutting-objects.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c822aYVtBVMBo4yXF/8n8eH', 'cutting-objects');
// cases/demo/cutting-objects.js

"use strict";

// http://www.emanueleferonato.com/2011/08/05/slicing-splitting-and-cutting-objects-with-box2d-part-4-using-real-graphics/
var EPSILON = 0.1;
var POINT_SQR_EPSILON = 5;

function compare(a, b) {
  if (a.fraction > b.fraction) {
    return 1;
  } else if (a.fraction < b.fraction) {
    return -1;
  }

  return 0;
}

function equals(a, b, epsilon) {
  epsilon = epsilon === undefined ? EPSILON : epsilon;
  return Math.abs(a - b) < epsilon;
}

function equalsVec2(a, b, epsilon) {
  return equals(a.x, b.x, epsilon) && equals(a.y, b.y, epsilon);
}

function pointInLine(point, a, b) {
  return cc.Intersection.pointLineDistance(point, a, b, true) < 1;
}

cc.Class({
  "extends": cc.Component,
  onEnable: function onEnable() {
    this.debugDrawFlags = cc.director.getPhysicsManager().debugDrawFlags;
    cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
  },
  onDisable: function onDisable() {
    cc.director.getPhysicsManager().debugDrawFlags = this.debugDrawFlags;
  },
  // use this for initialization
  onLoad: function onLoad() {
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.ctx = this.getComponent(cc.Graphics);
  },
  onTouchStart: function onTouchStart(event) {
    this.touching = true;
    this.r1 = this.r2 = this.results = null;
    this.touchStartPoint = this.touchPoint = cc.v2(event.touch.getLocation());
  },
  onTouchMove: function onTouchMove(event) {
    this.touchPoint = cc.v2(event.touch.getLocation());
  },
  onTouchEnd: function onTouchEnd(event) {
    this.touchPoint = cc.v2(event.touch.getLocation());
    this.recalcResults();
    this.touching = false;
    var point = cc.v2(event.touch.getLocation());
    if (equals(this.touchStartPoint.sub(point).magSqr(), 0)) return; // recalculate fraction, make fraction from one direction

    this.r2.forEach(function (r) {
      r.fraction = 1 - r.fraction;
    });
    var results = this.results;
    var pairs = [];

    var _loop = function _loop(i) {
      var find = false;
      var result = results[i];

      for (var _j3 = 0; _j3 < pairs.length; _j3++) {
        var _pair = pairs[_j3];

        if (_pair[0] && result.collider === _pair[0].collider) {
          find = true; // one collider may contains several fixtures, so raycast may through the inner fixture side
          // we need remove them from the result

          var r = _pair.find(function (r) {
            return r.point.sub(result.point).magSqr() <= POINT_SQR_EPSILON;
          });

          if (r) {
            _pair.splice(_pair.indexOf(r), 1);
          } else {
            _pair.push(result);
          }

          break;
        }
      }

      if (!find) {
        pairs.push([result]);
      }
    };

    for (var i = 0; i < results.length; i++) {
      _loop(i);
    }

    for (var _i = 0; _i < pairs.length; _i++) {
      var pair = pairs[_i];

      if (pair.length < 2) {
        continue;
      } // sort pair with fraction


      pair = pair.sort(compare);
      var splitResults = []; // first calculate all results, not split collider right now

      for (var j = 0; j < pair.length - 1; j += 2) {
        var r1 = pair[j];
        var r2 = pair[j + 1];

        if (r1 && r2) {
          this.split(r1.collider, r1.point, r2.point, splitResults);
        }
      }

      if (splitResults.length <= 0) {
        continue;
      }

      var collider = pair[0].collider;
      var maxPointsResult = void 0;

      for (var _j = 0; _j < splitResults.length; _j++) {
        var splitResult = splitResults[_j];

        for (var k = 0; k < splitResult.length; k++) {
          if (typeof splitResult[k] === 'number') {
            splitResult[k] = collider.points[splitResult[k]];
          }
        }

        if (!maxPointsResult || splitResult.length > maxPointsResult.length) {
          maxPointsResult = splitResult;
        }
      }

      if (maxPointsResult.length < 3) {
        continue;
      } // keep max length points to origin collider


      collider.points = maxPointsResult;
      collider.apply();
      var body = collider.body;

      for (var _j2 = 0; _j2 < splitResults.length; _j2++) {
        var _splitResult = splitResults[_j2];
        if (_splitResult.length < 3) continue;
        if (_splitResult == maxPointsResult) continue; // create new body

        var node = new cc.Node();
        node.position = body.getWorldPosition();
        node.rotation = body.getWorldRotation();
        node.parent = cc.director.getScene();
        node.addComponent(cc.RigidBody);
        var newCollider = node.addComponent(cc.PhysicsPolygonCollider);
        newCollider.points = _splitResult;
        newCollider.apply();
      }
    }
  },
  split: function split(collider, p1, p2, splitResults) {
    var body = collider.body;
    var points = collider.points; // The manager.rayCast() method returns points in world coordinates, so use the body.getLocalPoint() to convert them to local coordinates.

    p1 = body.getLocalPoint(p1);
    p2 = body.getLocalPoint(p2);
    var newSplitResult1 = [p1, p2];
    var newSplitResult2 = [p2, p1];
    var index1, index2;

    for (var i = 0; i < points.length; i++) {
      var pp1 = points[i];
      var pp2 = i === points.length - 1 ? points[0] : points[i + 1];

      if (index1 === undefined && pointInLine(p1, pp1, pp2)) {
        index1 = i;
      } else if (index2 === undefined && pointInLine(p2, pp1, pp2)) {
        index2 = i;
      }

      if (index1 !== undefined && index2 !== undefined) {
        break;
      }
    } // console.log(index1 + ' : ' + index2);


    if (index1 === undefined || index2 === undefined) {
      debugger;
      return;
    }

    var splitResult,
        indiceIndex1 = index1,
        indiceIndex2 = index2;

    if (splitResults.length > 0) {
      for (var _i2 = 0; _i2 < splitResults.length; _i2++) {
        var indices = splitResults[_i2];
        indiceIndex1 = indices.indexOf(index1);
        indiceIndex2 = indices.indexOf(index2);

        if (indiceIndex1 !== -1 && indiceIndex2 !== -1) {
          splitResult = splitResults.splice(_i2, 1)[0];
          break;
        }
      }
    }

    if (!splitResult) {
      splitResult = points.map(function (p, i) {
        return i;
      });
    }

    for (var _i3 = indiceIndex1 + 1; _i3 !== indiceIndex2 + 1; _i3++) {
      if (_i3 >= splitResult.length) {
        _i3 = 0;
      }

      var p = splitResult[_i3];
      p = typeof p === 'number' ? points[p] : p;

      if (p.sub(p1).magSqr() < POINT_SQR_EPSILON || p.sub(p2).magSqr() < POINT_SQR_EPSILON) {
        continue;
      }

      newSplitResult2.push(splitResult[_i3]);
    }

    for (var _i4 = indiceIndex2 + 1; _i4 !== indiceIndex1 + 1; _i4++) {
      if (_i4 >= splitResult.length) {
        _i4 = 0;
      }

      var _p = splitResult[_i4];
      _p = typeof _p === 'number' ? points[_p] : _p;

      if (_p.sub(p1).magSqr() < POINT_SQR_EPSILON || _p.sub(p2).magSqr() < POINT_SQR_EPSILON) {
        continue;
      }

      newSplitResult1.push(splitResult[_i4]);
    }

    splitResults.push(newSplitResult1);
    splitResults.push(newSplitResult2);
  },
  recalcResults: function recalcResults() {
    if (!this.touching) return;
    var startPoint = this.touchStartPoint;
    var point = this.touchPoint;
    this.ctx.clear();
    this.ctx.moveTo(this.touchStartPoint.x, this.touchStartPoint.y);
    this.ctx.lineTo(point.x, point.y);
    this.ctx.stroke();
    var manager = cc.director.getPhysicsManager(); // manager.rayCast() method calls this function only when it sees that a given line gets into the body - it doesnt see when the line gets out of it.
    // I must have 2 intersection points with a body so that it can be sliced, thats why I use manager.rayCast() again, but this time from B to A - that way the point, at which BA enters the body is the point at which AB leaves it!

    var r1 = manager.rayCast(this.touchStartPoint, point, cc.RayCastType.All);
    var r2 = manager.rayCast(point, this.touchStartPoint, cc.RayCastType.All);
    var results = r1.concat(r2);

    for (var i = 0; i < results.length; i++) {
      var p = results[i].point;
      this.ctx.circle(p.x, p.y, 5);
    }

    this.ctx.fill();
    this.r1 = r1;
    this.r2 = r2;
    this.results = results;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    // body maybe moving, need calc raycast results in update
    this.recalcResults();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2N1dHRpbmctb2JqZWN0cy5qcyJdLCJuYW1lcyI6WyJFUFNJTE9OIiwiUE9JTlRfU1FSX0VQU0lMT04iLCJjb21wYXJlIiwiYSIsImIiLCJmcmFjdGlvbiIsImVxdWFscyIsImVwc2lsb24iLCJ1bmRlZmluZWQiLCJNYXRoIiwiYWJzIiwiZXF1YWxzVmVjMiIsIngiLCJ5IiwicG9pbnRJbkxpbmUiLCJwb2ludCIsImNjIiwiSW50ZXJzZWN0aW9uIiwicG9pbnRMaW5lRGlzdGFuY2UiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uRW5hYmxlIiwiZGVidWdEcmF3RmxhZ3MiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0Iiwib25EaXNhYmxlIiwib25Mb2FkIiwiY2FudmFzIiwiZmluZCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Ub3VjaFN0YXJ0IiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsImN0eCIsImdldENvbXBvbmVudCIsIkdyYXBoaWNzIiwiZXZlbnQiLCJ0b3VjaGluZyIsInIxIiwicjIiLCJyZXN1bHRzIiwidG91Y2hTdGFydFBvaW50IiwidG91Y2hQb2ludCIsInYyIiwidG91Y2giLCJnZXRMb2NhdGlvbiIsInJlY2FsY1Jlc3VsdHMiLCJzdWIiLCJtYWdTcXIiLCJmb3JFYWNoIiwiciIsInBhaXJzIiwiaSIsInJlc3VsdCIsImoiLCJsZW5ndGgiLCJwYWlyIiwiY29sbGlkZXIiLCJzcGxpY2UiLCJpbmRleE9mIiwicHVzaCIsInNvcnQiLCJzcGxpdFJlc3VsdHMiLCJzcGxpdCIsIm1heFBvaW50c1Jlc3VsdCIsInNwbGl0UmVzdWx0IiwiayIsInBvaW50cyIsImFwcGx5IiwiYm9keSIsIm5vZGUiLCJwb3NpdGlvbiIsImdldFdvcmxkUG9zaXRpb24iLCJyb3RhdGlvbiIsImdldFdvcmxkUm90YXRpb24iLCJwYXJlbnQiLCJnZXRTY2VuZSIsImFkZENvbXBvbmVudCIsIlJpZ2lkQm9keSIsIm5ld0NvbGxpZGVyIiwiUGh5c2ljc1BvbHlnb25Db2xsaWRlciIsInAxIiwicDIiLCJnZXRMb2NhbFBvaW50IiwibmV3U3BsaXRSZXN1bHQxIiwibmV3U3BsaXRSZXN1bHQyIiwiaW5kZXgxIiwiaW5kZXgyIiwicHAxIiwicHAyIiwiaW5kaWNlSW5kZXgxIiwiaW5kaWNlSW5kZXgyIiwiaW5kaWNlcyIsIm1hcCIsInAiLCJzdGFydFBvaW50IiwiY2xlYXIiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJtYW5hZ2VyIiwicmF5Q2FzdCIsIlJheUNhc3RUeXBlIiwiQWxsIiwiY29uY2F0IiwiY2lyY2xlIiwiZmlsbCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLEdBQWhCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsQ0FBMUI7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0VBQ25CLElBQUlELENBQUMsQ0FBQ0UsUUFBRixHQUFhRCxDQUFDLENBQUNDLFFBQW5CLEVBQTZCO0lBQ3pCLE9BQU8sQ0FBUDtFQUNILENBRkQsTUFFTyxJQUFJRixDQUFDLENBQUNFLFFBQUYsR0FBYUQsQ0FBQyxDQUFDQyxRQUFuQixFQUE2QjtJQUNoQyxPQUFPLENBQUMsQ0FBUjtFQUVIOztFQUNELE9BQU8sQ0FBUDtBQUNIOztBQUVELFNBQVNDLE1BQVQsQ0FBaUJILENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkcsT0FBdkIsRUFBZ0M7RUFDNUJBLE9BQU8sR0FBR0EsT0FBTyxLQUFLQyxTQUFaLEdBQXdCUixPQUF4QixHQUFrQ08sT0FBNUM7RUFDQSxPQUFPRSxJQUFJLENBQUNDLEdBQUwsQ0FBU1AsQ0FBQyxHQUFDQyxDQUFYLElBQWdC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QVQ7SUFFQSxLQUFLcEUsRUFBTCxHQUFVQSxFQUFWO0lBQ0EsS0FBS0MsRUFBTCxHQUFVQSxFQUFWO0lBQ0EsS0FBS0MsT0FBTCxHQUFlQSxPQUFmO0VBQ0gsQ0FyUkk7RUF1Ukw7RUFDQW1FLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCO0lBQ0EsS0FBSzlELGFBQUw7RUFDSDtBQTNSSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3LmVtYW51ZWxlZmVyb25hdG8uY29tLzIwMTEvMDgvMDUvc2xpY2luZy1zcGxpdHRpbmctYW5kLWN1dHRpbmctb2JqZWN0cy13aXRoLWJveDJkLXBhcnQtNC11c2luZy1yZWFsLWdyYXBoaWNzL1xuXG5jb25zdCBFUFNJTE9OID0gMC4xO1xuY29uc3QgUE9JTlRfU1FSX0VQU0lMT04gPSA1O1xuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICBpZiAoYS5mcmFjdGlvbiA+IGIuZnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhLmZyYWN0aW9uIDwgYi5mcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGVxdWFscyAoYSwgYiwgZXBzaWxvbikge1xuICAgIGVwc2lsb24gPSBlcHNpbG9uID09PSB1bmRlZmluZWQgPyBFUFNJTE9OIDogZXBzaWxvbjtcbiAgICByZXR1cm4gTWF0aC5hYnMoYS1iKSA8IGVwc2lsb247XG59XG5cbmZ1bmN0aW9uIGVxdWFsc1ZlYzIoYSxiLCBlcHNpbG9uKSB7XG4gICAgcmV0dXJuIGVxdWFscyhhLngsIGIueCwgZXBzaWxvbikgJiYgZXF1YWxzKGEueSwgYi55LCBlcHNpbG9uKTtcbn1cblxuZnVuY3Rpb24gcG9pbnRJbkxpbmUgKHBvaW50LCBhLCBiKSB7XG4gICAgcmV0dXJuIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZShwb2ludCwgYSwgYiwgdHJ1ZSkgPCAxO1xufVxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJ1Z0RyYXdGbGFncyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3M7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBcbiAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfam9pbnRCaXQgfFxuICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdFxuICAgICAgICAgICAgO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IHRoaXMuZGVidWdEcmF3RmxhZ3M7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnIxID0gdGhpcy5yMiA9IHRoaXMucmVzdWx0cyA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvaW50ID0gdGhpcy50b3VjaFBvaW50ID0gY2MudjIoIGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkgKTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoUG9pbnQgPSBjYy52MiggZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSApO1xuICAgIH0sXG5cbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFBvaW50ID0gY2MudjIoIGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkgKTtcbiAgICAgICAgdGhpcy5yZWNhbGNSZXN1bHRzKCk7XG4gICAgICAgIHRoaXMudG91Y2hpbmcgPSBmYWxzZTtcblxuICAgICAgICBsZXQgcG9pbnQgPSBjYy52MiggZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSApO1xuICAgICAgICBpZiAoIGVxdWFscyh0aGlzLnRvdWNoU3RhcnRQb2ludC5zdWIocG9pbnQpLm1hZ1NxcigpLCAwKSApIHJldHVybjtcblxuICAgICAgICAvLyByZWNhbGN1bGF0ZSBmcmFjdGlvbiwgbWFrZSBmcmFjdGlvbiBmcm9tIG9uZSBkaXJlY3Rpb25cbiAgICAgICAgdGhpcy5yMi5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgci5mcmFjdGlvbiA9IDEgLSByLmZyYWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMucmVzdWx0cztcblxuICAgICAgICBsZXQgcGFpcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhaXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAocGFpclswXSAmJiByZXN1bHQuY29sbGlkZXIgPT09IHBhaXJbMF0uY29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25lIGNvbGxpZGVyIG1heSBjb250YWlucyBzZXZlcmFsIGZpeHR1cmVzLCBzbyByYXljYXN0IG1heSB0aHJvdWdoIHRoZSBpbm5lciBmaXh0dXJlIHNpZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCByZW1vdmUgdGhlbSBmcm9tIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBwYWlyLmZpbmQoKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLnBvaW50LnN1YihyZXN1bHQucG9pbnQpLm1hZ1NxcigpIDw9IFBPSU5UX1NRUl9FUFNJTE9OO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFpci5zcGxpY2UocGFpci5pbmRleE9mKHIpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmaW5kKSB7XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaChbcmVzdWx0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgaWYgKHBhaXIubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzb3J0IHBhaXIgd2l0aCBmcmFjdGlvblxuICAgICAgICAgICAgcGFpciA9IHBhaXIuc29ydChjb21wYXJlKTtcblxuICAgICAgICAgICAgbGV0IHNwbGl0UmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBmaXJzdCBjYWxjdWxhdGUgYWxsIHJlc3VsdHMsIG5vdCBzcGxpdCBjb2xsaWRlciByaWdodCBub3dcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKHBhaXIubGVuZ3RoIC0gMSk7IGogKz0yKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIxID0gcGFpcltqXTtcbiAgICAgICAgICAgICAgICBsZXQgcjIgPSBwYWlyW2orMV07XG5cbiAgICAgICAgICAgICAgICBpZiAocjEgJiYgcjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdChyMS5jb2xsaWRlciwgcjEucG9pbnQsIHIyLnBvaW50LCBzcGxpdFJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwbGl0UmVzdWx0cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY29sbGlkZXIgPSBwYWlyWzBdLmNvbGxpZGVyO1xuXG4gICAgICAgICAgICBsZXQgbWF4UG9pbnRzUmVzdWx0O1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzcGxpdFJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRSZXN1bHQgPSBzcGxpdFJlc3VsdHNbal07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNwbGl0UmVzdWx0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BsaXRSZXN1bHRba10gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdFJlc3VsdFtrXSA9IGNvbGxpZGVyLnBvaW50c1tzcGxpdFJlc3VsdFtrXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1heFBvaW50c1Jlc3VsdCB8fCBzcGxpdFJlc3VsdC5sZW5ndGggPiBtYXhQb2ludHNSZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFBvaW50c1Jlc3VsdCA9IHNwbGl0UmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1heFBvaW50c1Jlc3VsdC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGtlZXAgbWF4IGxlbmd0aCBwb2ludHMgdG8gb3JpZ2luIGNvbGxpZGVyXG4gICAgICAgICAgICBjb2xsaWRlci5wb2ludHMgPSBtYXhQb2ludHNSZXN1bHQ7XG4gICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xuXG4gICAgICAgICAgICBsZXQgYm9keSA9IGNvbGxpZGVyLmJvZHk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3BsaXRSZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0UmVzdWx0ID0gc3BsaXRSZXN1bHRzW2pdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0UmVzdWx0Lmxlbmd0aCA8IDMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdFJlc3VsdCA9PSBtYXhQb2ludHNSZXN1bHQpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBib2R5XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBib2R5LmdldFdvcmxkUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gYm9keS5nZXRXb3JsZFJvdGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XG4gICAgICAgICAgICAgICAgbmV3Q29sbGlkZXIucG9pbnRzID0gc3BsaXRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgbmV3Q29sbGlkZXIuYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAoY29sbGlkZXIsIHAxLCBwMiwgc3BsaXRSZXN1bHRzKSB7XG4gICAgICAgIGxldCBib2R5ID0gY29sbGlkZXIuYm9keTtcbiAgICAgICAgbGV0IHBvaW50cyA9IGNvbGxpZGVyLnBvaW50cztcblxuXG4gICAgICAgIC8vIFRoZSBtYW5hZ2VyLnJheUNhc3QoKSBtZXRob2QgcmV0dXJucyBwb2ludHMgaW4gd29ybGQgY29vcmRpbmF0ZXMsIHNvIHVzZSB0aGUgYm9keS5nZXRMb2NhbFBvaW50KCkgdG8gY29udmVydCB0aGVtIHRvIGxvY2FsIGNvb3JkaW5hdGVzLlxuICAgICAgICBwMSA9IGJvZHkuZ2V0TG9jYWxQb2ludChwMSk7XG4gICAgICAgIHAyID0gYm9keS5nZXRMb2NhbFBvaW50KHAyKTtcblxuXG4gICAgICAgIGxldCBuZXdTcGxpdFJlc3VsdDEgPSBbcDEsIHAyXTtcbiAgICAgICAgbGV0IG5ld1NwbGl0UmVzdWx0MiA9IFtwMiwgcDFdO1xuXG4gICAgICAgIGxldCBpbmRleDEsIGluZGV4MjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcDEgPSBwb2ludHNbaV07XG4gICAgICAgICAgICBsZXQgcHAyID0gaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDEgPyBwb2ludHNbMF0gOiBwb2ludHNbaSsxXTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpbmRleDEgPT09IHVuZGVmaW5lZCAmJiBwb2ludEluTGluZShwMSwgcHAxLCBwcDIpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgxID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4MiA9PT0gdW5kZWZpbmVkICYmIHBvaW50SW5MaW5lKHAyLCBwcDEsIHBwMikpIHtcbiAgICAgICAgICAgICAgICBpbmRleDIgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXgxICE9PSB1bmRlZmluZWQgJiYgaW5kZXgyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4MSArICcgOiAnICsgaW5kZXgyKTtcblxuICAgICAgICBpZiAoaW5kZXgxID09PSB1bmRlZmluZWQgfHwgaW5kZXgyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BsaXRSZXN1bHQsIGluZGljZUluZGV4MSA9IGluZGV4MSwgaW5kaWNlSW5kZXgyID0gaW5kZXgyO1xuICAgICAgICBpZiAoc3BsaXRSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRSZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGljZXMgPSBzcGxpdFJlc3VsdHNbaV07XG4gICAgICAgICAgICAgICAgaW5kaWNlSW5kZXgxID0gaW5kaWNlcy5pbmRleE9mKGluZGV4MSk7XG4gICAgICAgICAgICAgICAgaW5kaWNlSW5kZXgyID0gaW5kaWNlcy5pbmRleE9mKGluZGV4Mik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kaWNlSW5kZXgxICE9PSAtMSAmJiBpbmRpY2VJbmRleDIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0UmVzdWx0ID0gc3BsaXRSZXN1bHRzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzcGxpdFJlc3VsdCkge1xuICAgICAgICAgICAgc3BsaXRSZXN1bHQgPSBwb2ludHMubWFwKChwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRpY2VJbmRleDEgKyAxOyBpICE9PSAoaW5kaWNlSW5kZXgyKzEpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHNwbGl0UmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcCA9IHNwbGl0UmVzdWx0W2ldO1xuICAgICAgICAgICAgcCA9IHR5cGVvZiBwID09PSAnbnVtYmVyJyA/IHBvaW50c1twXSA6IHA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwLnN1YihwMSkubWFnU3FyKCkgPCBQT0lOVF9TUVJfRVBTSUxPTiB8fCBwLnN1YihwMikubWFnU3FyKCkgPCBQT0lOVF9TUVJfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdTcGxpdFJlc3VsdDIucHVzaChzcGxpdFJlc3VsdFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gaW5kaWNlSW5kZXgyICsgMTsgaSAhPT0gaW5kaWNlSW5kZXgxKzE7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPj0gc3BsaXRSZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwID0gc3BsaXRSZXN1bHRbaV07XG4gICAgICAgICAgICBwID0gdHlwZW9mIHAgPT09ICdudW1iZXInID8gcG9pbnRzW3BdIDogcDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHAuc3ViKHAxKS5tYWdTcXIoKSA8IFBPSU5UX1NRUl9FUFNJTE9OIHx8IHAuc3ViKHAyKS5tYWdTcXIoKSA8IFBPSU5UX1NRUl9FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld1NwbGl0UmVzdWx0MS5wdXNoKHNwbGl0UmVzdWx0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwbGl0UmVzdWx0cy5wdXNoKG5ld1NwbGl0UmVzdWx0MSk7XG4gICAgICAgIHNwbGl0UmVzdWx0cy5wdXNoKG5ld1NwbGl0UmVzdWx0Mik7XG4gICAgfSxcblxuICAgIHJlY2FsY1Jlc3VsdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRvdWNoaW5nKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSB0aGlzLnRvdWNoU3RhcnRQb2ludDtcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy50b3VjaFBvaW50O1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnRvdWNoU3RhcnRQb2ludC54LCB0aGlzLnRvdWNoU3RhcnRQb2ludC55KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG5cbiAgICAgICAgLy8gbWFuYWdlci5yYXlDYXN0KCkgbWV0aG9kIGNhbGxzIHRoaXMgZnVuY3Rpb24gb25seSB3aGVuIGl0IHNlZXMgdGhhdCBhIGdpdmVuIGxpbmUgZ2V0cyBpbnRvIHRoZSBib2R5IC0gaXQgZG9lc250IHNlZSB3aGVuIHRoZSBsaW5lIGdldHMgb3V0IG9mIGl0LlxuICAgICAgICAvLyBJIG11c3QgaGF2ZSAyIGludGVyc2VjdGlvbiBwb2ludHMgd2l0aCBhIGJvZHkgc28gdGhhdCBpdCBjYW4gYmUgc2xpY2VkLCB0aGF0cyB3aHkgSSB1c2UgbWFuYWdlci5yYXlDYXN0KCkgYWdhaW4sIGJ1dCB0aGlzIHRpbWUgZnJvbSBCIHRvIEEgLSB0aGF0IHdheSB0aGUgcG9pbnQsIGF0IHdoaWNoIEJBIGVudGVycyB0aGUgYm9keSBpcyB0aGUgcG9pbnQgYXQgd2hpY2ggQUIgbGVhdmVzIGl0IVxuICAgICAgICBsZXQgcjEgPSBtYW5hZ2VyLnJheUNhc3QodGhpcy50b3VjaFN0YXJ0UG9pbnQsIHBvaW50LCBjYy5SYXlDYXN0VHlwZS5BbGwpO1xuICAgICAgICBsZXQgcjIgPSBtYW5hZ2VyLnJheUNhc3QocG9pbnQsIHRoaXMudG91Y2hTdGFydFBvaW50LCBjYy5SYXlDYXN0VHlwZS5BbGwpO1xuXG4gICAgICAgIGxldCByZXN1bHRzID0gcjEuY29uY2F0KHIyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gcmVzdWx0c1tpXS5wb2ludDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNpcmNsZShwLngsIHAueSwgNSk7XG4gICAgICAgIH0gIFxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5yMSA9IHIxO1xuICAgICAgICB0aGlzLnIyID0gcjI7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgLy8gYm9keSBtYXliZSBtb3ZpbmcsIG5lZWQgY2FsYyByYXljYXN0IHJlc3VsdHMgaW4gdXBkYXRlXG4gICAgICAgIHRoaXMucmVjYWxjUmVzdWx0cygpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/utils/cases-settings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d3b4anjGFIT4XGoqU9b6ri', 'cases-settings');
// cases/utils/cases-settings.js

"use strict";

if (!CC_EDITOR) {
  cc.director.setClearColor(cc.color().fromHEX('#2f69d2'));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy91dGlscy9jYXNlcy1zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJDQ19FRElUT1IiLCJjYyIsImRpcmVjdG9yIiwic2V0Q2xlYXJDb2xvciIsImNvbG9yIiwiZnJvbUhFWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLENBQUNBLFNBQUwsRUFBZ0I7RUFDWkMsRUFBRSxDQUFDQyxRQUFILENBQVlDLGFBQVosQ0FBMkJGLEVBQUUsQ0FBQ0csS0FBSCxHQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQTNCO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImlmICghQ0NfRURJVE9SKSB7XG4gICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvciggY2MuY29sb3IoKS5mcm9tSEVYKCcjMmY2OWQyJykgKTtcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/gravity-radial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2dyYXZpdHktcmFkaWFsLmpzIl0sIm5hbWVzIjpbIkdyYXZpdHkiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJncmF2aXR5Rm9yY2UiLCJvbkxvYWQiLCJfcG9zaXRpb24iLCJ2MiIsIl9jZW50ZXIiLCJfYXBwbHlGb3JjZSIsImJvZHkiLCJwb3NpdGlvbiIsImNlbnRlciIsImdldFdvcmxkUG9zaXRpb24iLCJmIiwic3ViU2VsZiIsIm5vcm1hbGl6ZVNlbGYiLCJtdWxTZWxmIiwiZ2V0TWFzcyIsImFwcGx5Rm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTSCxPQURKO0VBR0xJLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUU7RUFETixDQUhQO0VBT0xDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxTQUFMLEdBQWlCTCxFQUFFLENBQUNNLEVBQUgsRUFBakI7SUFDQSxLQUFLQyxPQUFMLEdBQWVQLEVBQUUsQ0FBQ00sRUFBSCxFQUFmO0VBQ0gsQ0FWSTtFQVlMRSxXQUFXLEVBQUUscUJBQVVDLElBQVYsRUFBZ0I7SUFDekIsSUFBSUMsUUFBUSxHQUFHLEtBQUtMLFNBQXBCO0lBQ0EsSUFBSU0sTUFBTSxHQUFHLEtBQUtKLE9BQWxCO0lBRUFFLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0JGLFFBQXRCO0lBQ0EsS0FBS0QsSUFBTCxDQUFVRyxnQkFBVixDQUEyQkQsTUFBM0I7SUFFQSxJQUFJRSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csT0FBUCxDQUFnQkosUUFBaEIsRUFBMkJLLGFBQTNCLEdBQTJDQyxPQUEzQyxDQUFtRCxLQUFLYixZQUFMLEdBQW9CTSxJQUFJLENBQUNRLE9BQUwsRUFBdkUsQ0FBUjtJQUVBUixJQUFJLENBQUNTLFVBQUwsQ0FBZ0JMLENBQWhCLEVBQW1CSCxRQUFuQixFQUE2QixLQUE3QjtFQUNIO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBHcmF2aXR5ID0gcmVxdWlyZSgnZ3Jhdml0eScpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogR3Jhdml0eSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZ3Jhdml0eUZvcmNlOiA1MDAsXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgIHRoaXMuX2NlbnRlciA9IGNjLnYyKCk7XG4gICAgfSxcbiAgICBcbiAgICBfYXBwbHlGb3JjZTogZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5fcG9zaXRpb247XG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLl9jZW50ZXI7XG5cbiAgICAgICAgYm9keS5nZXRXb3JsZFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5ib2R5LmdldFdvcmxkUG9zaXRpb24oY2VudGVyKTtcblxuICAgICAgICBsZXQgZiA9IGNlbnRlci5zdWJTZWxmKCBwb3NpdGlvbiApLm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKHRoaXMuZ3Jhdml0eUZvcmNlICogYm9keS5nZXRNYXNzKCkpO1xuXG4gICAgICAgIGJvZHkuYXBwbHlGb3JjZShmLCBwb3NpdGlvbiwgZmFsc2UpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9411orWEFD25w+n2A2WY5J', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjAueF9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0VBQ1g7RUFDQTtFQUNBRCxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsMkJBQVYsR0FBd0MsSUFBeEM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIOS5i+WJjeeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmlmIChjYy5Ub2dnbGUpIHtcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcbiAgICBjYy5Ub2dnbGUuX3RyaWdnZXJFdmVudEluU2NyaXB0X2NoZWNrID0gdHJ1ZTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/blob/blob.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4960bicKTtO84ujLGfekh0N', 'blob');
// cases/demo/blob/blob.js

"use strict";

var smooth = require('smooth');

cc.Class({
  "extends": cc.Component,
  properties: {
    particleNumber: 12,
    particleRadius: 30,
    sphereSize: 12
  },
  // use this for initialization
  init: function init() {
    this.ctx = this.getComponent(cc.Graphics);
    this.ctx.lineWidth = 6;
    this.ctx.strokeColor = cc.color().fromHEX('#495069');
    this.ctx.fillColor = cc.color().fromHEX('#ffde59');
    var x = this.node.x;
    var y = this.node.y;
    var particleNumber = this.particleNumber;
    var particleRadius = this.particleRadius;
    var sphereSize = this.sphereSize;
    var particleAngle = 2 * Math.PI / particleNumber;
    var particleDistance = Math.sin(particleAngle) * particleRadius * Math.sin((Math.PI - particleAngle) / 2);
    var spheres = [];
    spheres.push(this._createSphere(0, 0, sphereSize, this.node));

    for (var i = 0; i < particleNumber; i++) {
      var angle = particleAngle * i;
      var posX = particleRadius * Math.cos(angle);
      var posY = particleRadius * Math.sin(angle);

      var sphere = this._createSphere(posX, posY, sphereSize);

      spheres.push(sphere);
      var joint = sphere.node.addComponent(cc.DistanceJoint);
      joint.connectedBody = spheres[0];
      joint.distance = particleRadius;
      joint.dampingRatio = 0.5;
      joint.frequency = 4;

      if (i > 0) {
        joint = sphere.node.addComponent(cc.DistanceJoint);
        joint.connectedBody = spheres[spheres.length - 2];
        joint.distance = particleDistance;
        joint.dampingRatio = 1;
        joint.frequency = 0;
      }

      if (i === particleNumber - 1) {
        joint = spheres[1].node.addComponent(cc.DistanceJoint);
        joint.connectedBody = sphere;
        joint.distance = particleDistance;
        joint.dampingRatio = 1;
        joint.frequency = 0;
      }

      sphere.node.parent = this.node;
    }

    this.spheres = spheres;
  },
  _createSphere: function _createSphere(x, y, r, node) {
    if (!node) {
      node = new cc.Node();
      node.x = x;
      node.y = y;
    }

    var body = node.addComponent(cc.RigidBody);
    var collider = node.addComponent(cc.PhysicsCircleCollider);
    collider.density = 1;
    collider.restitution = 0.4;
    collider.friction = 0.5;
    collider.radius = r;
    return body;
  },
  emitTo: function emitTo(target) {
    var x = target.x;
    var y = target.y;
    var selfX = this.node.x;
    var selfY = this.node.y;
    var distance = Math.sqrt((x - selfX) * (x - selfX) + (y - selfY) * (y - selfY));
    var velocity = cc.v2(x - selfX, y - selfY);
    velocity.normalizeSelf();
    velocity.mulSelf(distance * 2);
    this.spheres.forEach(function (sphere) {
      sphere.linearVelocity = velocity;
    });
  },
  update: function update(dt) {
    var _this = this;

    var ctx = this.ctx;
    var points = this.spheres.map(function (sphere) {
      return _this.expandPosition(sphere.node.position);
    });
    points.shift();
    var result = smooth(points);
    var firstControlPoints = result[0];
    var secondControlPoints = result[1];
    var pos = points[0];
    ctx.clear();
    ctx.moveTo(pos.x, pos.y);

    for (var i = 1, len = points.length; i < len; i++) {
      var firstControlPoint = firstControlPoints[i - 1],
          secondControlPoint = secondControlPoints[i - 1];
      ctx.bezierCurveTo(firstControlPoint.x, firstControlPoint.y, secondControlPoint.x, secondControlPoint.y, points[i].x, points[i].y);
    }

    ctx.close();
    ctx.fill();
    ctx.stroke();
  },
  expandPosition: function expandPosition(pos) {
    return pos.mul(1.3);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2Jsb2IvYmxvYi5qcyJdLCJuYW1lcyI6WyJzbW9vdGgiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYXJ0aWNsZU51bWJlciIsInBhcnRpY2xlUmFkaXVzIiwic3BoZXJlU2l6ZSIsImluaXQiLCJjdHgiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsImxpbmVXaWR0aCIsInN0cm9rZUNvbG9yIiwiY29sb3IiLCJmcm9tSEVYIiwiZmlsbENvbG9yIiwieCIsIm5vZGUiLCJ5IiwicGFydGljbGVBbmdsZSIsIk1hdGgiLCJQSSIsInBhcnRpY2xlRGlzdGFuY2UiLCJzaW4iLCJzcGhlcmVzIiwicHVzaCIsIl9jcmVhdGVTcGhlcmUiLCJpIiwiYW5nbGUiLCJwb3NYIiwiY29zIiwicG9zWSIsInNwaGVyZSIsImpvaW50IiwiYWRkQ29tcG9uZW50IiwiRGlzdGFuY2VKb2ludCIsImNvbm5lY3RlZEJvZHkiLCJkaXN0YW5jZSIsImRhbXBpbmdSYXRpbyIsImZyZXF1ZW5jeSIsImxlbmd0aCIsInBhcmVudCIsInIiLCJOb2RlIiwiYm9keSIsIlJpZ2lkQm9keSIsImNvbGxpZGVyIiwiUGh5c2ljc0NpcmNsZUNvbGxpZGVyIiwiZGVuc2l0eSIsInJlc3RpdHV0aW9uIiwiZnJpY3Rpb24iLCJyYWRpdXMiLCJlbWl0VG8iLCJ0YXJnZXQiLCJzZWxmWCIsInNlbGZZIiwic3FydCIsInZlbG9jaXR5IiwidjIiLCJub3JtYWxpemVTZWxmIiwibXVsU2VsZiIsImZvckVhY2giLCJsaW5lYXJWZWxvY2l0eSIsInVwZGF0ZSIsImR0IiwicG9pbnRzIiwibWFwIiwiZXhwYW5kUG9zaXRpb24iLCJwb3NpdGlvbiIsInNoaWZ0IiwicmVzdWx0IiwiZmlyc3RDb250cm9sUG9pbnRzIiwic2Vjb25kQ29udHJvbFBvaW50cyIsInBvcyIsImNsZWFyIiwibW92ZVRvIiwibGVuIiwiZmlyc3RDb250cm9sUG9pbnQiLCJzZWNvbmRDb250cm9sUG9pbnQiLCJiZXppZXJDdXJ2ZVRvIiwiY2xvc2UiLCJmaWxsIiwic3Ryb2tlIiwibXVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxjQUFjLEVBQUUsRUFEUjtJQUVSQyxjQUFjLEVBQUUsRUFGUjtJQUdSQyxVQUFVLEVBQUU7RUFISixDQUhQO0VBU0w7RUFDQUMsSUFBSSxFQUFFLGdCQUFZO0lBQ2QsS0FBS0MsR0FBTCxHQUFXLEtBQUtDLFlBQUwsQ0FBa0JULEVBQUUsQ0FBQ1UsUUFBckIsQ0FBWDtJQUVBLEtBQUtGLEdBQUwsQ0FBU0csU0FBVCxHQUFxQixDQUFyQjtJQUNBLEtBQUtILEdBQUwsQ0FBU0ksV0FBVCxHQUF1QlosRUFBRSxDQUFDYSxLQUFILEdBQVdDLE9BQVgsQ0FBbUIsU0FBbkIsQ0FBdkI7SUFDQSxLQUFLTixHQUFMLENBQVNPLFNBQVQsR0FBcUJmLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQXJCO0lBRUEsSUFBSUUsQ0FBQyxHQUFHLEtBQUtDLElBQUwsQ0FBVUQsQ0FBbEI7SUFDQSxJQUFJRSxDQUFDLEdBQUcsS0FBS0QsSUFBTCxDQUFVQyxDQUFsQjtJQUVBLElBQUlkLGNBQWMsR0FBRyxLQUFLQSxjQUExQjtJQUNBLElBQUlDLGNBQWMsR0FBRyxLQUFLQSxjQUExQjtJQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFLQSxVQUF0QjtJQUVBLElBQUlhLGFBQWEsR0FBSSxJQUFFQyxJQUFJLENBQUNDLEVBQVIsR0FBWWpCLGNBQWhDO0lBQ0EsSUFBSWtCLGdCQUFnQixHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBU0osYUFBVCxJQUEwQmQsY0FBMUIsR0FBMkNlLElBQUksQ0FBQ0csR0FBTCxD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Q0FIM0I7SUFLSDs7SUFFRFYsR0FBRyxDQUFDd0UsS0FBSjtJQUNBeEUsR0FBRyxDQUFDeUUsSUFBSjtJQUNBekUsR0FBRyxDQUFDMEUsTUFBSjtFQUNILENBcElJO0VBc0lMZixjQXRJSywwQkFzSVdNLEdBdElYLEVBc0lnQjtJQUNqQixPQUFPQSxHQUFHLENBQUNVLEdBQUosQ0FBUSxHQUFSLENBQVA7RUFDSDtBQXhJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBzbW9vdGggPSByZXF1aXJlKCdzbW9vdGgnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGFydGljbGVOdW1iZXI6IDEyLFxuICAgICAgICBwYXJ0aWNsZVJhZGl1czogMzAsXG4gICAgICAgIHNwaGVyZVNpemU6IDEyXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyM0OTUwNjknKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbENvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjZmZkZTU5Jyk7XG5cbiAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLm5vZGUueTtcblxuICAgICAgICBsZXQgcGFydGljbGVOdW1iZXIgPSB0aGlzLnBhcnRpY2xlTnVtYmVyO1xuICAgICAgICBsZXQgcGFydGljbGVSYWRpdXMgPSB0aGlzLnBhcnRpY2xlUmFkaXVzO1xuICAgICAgICBsZXQgc3BoZXJlU2l6ZSA9IHRoaXMuc3BoZXJlU2l6ZTtcblxuICAgICAgICBsZXQgcGFydGljbGVBbmdsZSA9ICgyKk1hdGguUEkpL3BhcnRpY2xlTnVtYmVyO1xuICAgICAgICBsZXQgcGFydGljbGVEaXN0YW5jZSA9IE1hdGguc2luKHBhcnRpY2xlQW5nbGUpICogcGFydGljbGVSYWRpdXMgKiBNYXRoLnNpbigoTWF0aC5QSSAtIHBhcnRpY2xlQW5nbGUpLzIpO1xuXG4gICAgICAgIGxldCBzcGhlcmVzID0gW107XG4gICAgICAgIHNwaGVyZXMucHVzaCggdGhpcy5fY3JlYXRlU3BoZXJlKDAsIDAsIHNwaGVyZVNpemUsIHRoaXMubm9kZSkgKTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cGFydGljbGVOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuZ2xlID0gcGFydGljbGVBbmdsZSppO1xuICAgICAgICAgICAgbGV0IHBvc1ggPSBwYXJ0aWNsZVJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgICAgIGxldCBwb3NZID0gcGFydGljbGVSYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgICAgICBsZXQgc3BoZXJlID0gdGhpcy5fY3JlYXRlU3BoZXJlKHBvc1gsIHBvc1ksIHNwaGVyZVNpemUpO1xuICAgICAgICAgICAgc3BoZXJlcy5wdXNoKCBzcGhlcmUgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGpvaW50ID0gc3BoZXJlLm5vZGUuYWRkQ29tcG9uZW50KGNjLkRpc3RhbmNlSm9pbnQpO1xuICAgICAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IHNwaGVyZXNbMF07XG4gICAgICAgICAgICBqb2ludC5kaXN0YW5jZSA9IHBhcnRpY2xlUmFkaXVzO1xuICAgICAgICAgICAgam9pbnQuZGFtcGluZ1JhdGlvID0gMC41O1xuICAgICAgICAgICAgam9pbnQuZnJlcXVlbmN5ID0gNDtcblxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgam9pbnQgPSBzcGhlcmUubm9kZS5hZGRDb21wb25lbnQoY2MuRGlzdGFuY2VKb2ludCk7XG4gICAgICAgICAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IHNwaGVyZXNbc3BoZXJlcy5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgICAgICBqb2ludC5kaXN0YW5jZSA9IHBhcnRpY2xlRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgam9pbnQuZGFtcGluZ1JhdGlvID0gMTtcbiAgICAgICAgICAgICAgICBqb2ludC5mcmVxdWVuY3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSA9PT0gcGFydGljbGVOdW1iZXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgam9pbnQgPSBzcGhlcmVzWzFdLm5vZGUuYWRkQ29tcG9uZW50KGNjLkRpc3RhbmNlSm9pbnQpO1xuICAgICAgICAgICAgICAgIGpvaW50LmNvbm5lY3RlZEJvZHkgPSBzcGhlcmU7XG4gICAgICAgICAgICAgICAgam9pbnQuZGlzdGFuY2UgPSBwYXJ0aWNsZURpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGpvaW50LmRhbXBpbmdSYXRpbyA9IDE7XG4gICAgICAgICAgICAgICAgam9pbnQuZnJlcXVlbmN5ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BoZXJlLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcGhlcmVzID0gc3BoZXJlcztcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVNwaGVyZSAoeCwgeSwgciwgbm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbm9kZS54ID0geDtcbiAgICAgICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYm9keSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG5cbiAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcbiAgICAgICAgY29sbGlkZXIuZGVuc2l0eSA9IDE7XG4gICAgICAgIGNvbGxpZGVyLnJlc3RpdHV0aW9uID0gMC40O1xuICAgICAgICBjb2xsaWRlci5mcmljdGlvbiA9IDAuNTtcbiAgICAgICAgY29sbGlkZXIucmFkaXVzID0gcjtcblxuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9LFxuXG4gICAgZW1pdFRvICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIHggPSB0YXJnZXQueDtcbiAgICAgICAgdmFyIHkgPSB0YXJnZXQueTtcblxuICAgICAgICB2YXIgc2VsZlggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgdmFyIHNlbGZZID0gdGhpcy5ub2RlLnk7XG5cbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4LXNlbGZYKSooeC1zZWxmWCkgKyAoeS1zZWxmWSkqKHktc2VsZlkpKTtcbiAgICAgICAgdmFyIHZlbG9jaXR5ID0gY2MudjIoeC1zZWxmWCwgeS1zZWxmWSk7XG4gICAgICAgIHZlbG9jaXR5Lm5vcm1hbGl6ZVNlbGYoKTtcbiAgICAgICAgdmVsb2NpdHkubXVsU2VsZihkaXN0YW5jZSoyKTtcblxuICAgICAgICB0aGlzLnNwaGVyZXMuZm9yRWFjaChmdW5jdGlvbiAoc3BoZXJlKSB7XG4gICAgICAgICAgICBzcGhlcmUubGluZWFyVmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIHZhciBwb2ludHMgPSB0aGlzLnNwaGVyZXMubWFwKHNwaGVyZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBhbmRQb3NpdGlvbiggc3BoZXJlLm5vZGUucG9zaXRpb24gKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9pbnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHNtb290aCggcG9pbnRzICk7XG4gICAgICAgIHZhciBmaXJzdENvbnRyb2xQb2ludHMgPSByZXN1bHRbMF07XG4gICAgICAgIHZhciBzZWNvbmRDb250cm9sUG9pbnRzID0gcmVzdWx0WzFdO1xuXG4gICAgICAgIHZhciBwb3MgPSBwb2ludHNbMF07XG5cbiAgICAgICAgY3R4LmNsZWFyKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9zLngsIHBvcy55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcG9pbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RDb250cm9sUG9pbnQgPSBmaXJzdENvbnRyb2xQb2ludHNbaSAtIDFdLFxuICAgICAgICAgICAgICAgIHNlY29uZENvbnRyb2xQb2ludCA9IHNlY29uZENvbnRyb2xQb2ludHNbaSAtIDFdO1xuXG4gICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgICAgICBmaXJzdENvbnRyb2xQb2ludC54LCBmaXJzdENvbnRyb2xQb2ludC55LFxuICAgICAgICAgICAgICAgIHNlY29uZENvbnRyb2xQb2ludC54LCBzZWNvbmRDb250cm9sUG9pbnQueSxcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjdHguY2xvc2UoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0sXG5cbiAgICBleHBhbmRQb3NpdGlvbiAocG9zKSB7XG4gICAgICAgIHJldHVybiBwb3MubXVsKDEuMyk7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/stick-arrow/arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3N0aWNrLWFycm93L2Fycm93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJ3ZWxkSm9pbnQiLCJnZXRDb21wb25lbnQiLCJXZWxkSm9pbnQiLCJvblBvc3RTb2x2ZSIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwiaW1wdWxzZSIsImdldEltcHVsc2UiLCJNYXRoIiwiYWJzIiwibm9ybWFsSW1wdWxzZXMiLCJQaHlzaWNzTWFuYWdlciIsIlBUTV9SQVRJTyIsImpvaW50IiwiZW5hYmxlZCIsIm5vZGUiLCJuYW1lIiwiYXJyb3dCb2R5IiwiYm9keSIsInRhcmdldEJvZHkiLCJ3b3JsZENvb3Jkc0FuY2hvclBvaW50IiwiZ2V0V29ybGRQb2ludCIsInYyIiwiY29ubmVjdGVkQm9keSIsImFuY2hvciIsImdldExvY2FsUG9pbnQiLCJjb25uZWN0ZWRBbmNob3IiLCJyZWZlcmVuY2VBbmdsZSIsInJvdGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0MsWUFBTCxDQUFrQkwsRUFBRSxDQUFDTSxTQUFyQixDQUFqQjtFQUNILENBTEk7RUFPTEMsV0FBVyxFQUFFLHFCQUFVQyxPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7SUFDekQsSUFBSUMsT0FBTyxHQUFHSCxPQUFPLENBQUNJLFVBQVIsRUFBZDtJQUNBLElBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxPQUFPLENBQUNJLGNBQVIsQ0FBdUIsQ0FBdkIsQ0FBVCxJQUFzQ2YsRUFBRSxDQUFDZ0IsY0FBSCxDQUFrQkMsU0FBNUQsRUFBdUU7SUFFdkUsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLFNBQWpCOztJQUVBLElBQUljLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtNQUNmRCxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsS0FBaEI7TUFDQTtJQUNIOztJQUVELElBQUlULGFBQWEsQ0FBQ1UsSUFBZCxDQUFtQkMsSUFBbkIsS0FBNEIsT0FBaEMsRUFBeUM7TUFDckM7SUFDSDs7SUFFRCxJQUFJQyxTQUFTLEdBQUdiLFlBQVksQ0FBQ2MsSUFBN0I7SUFDQSxJQUFJQyxVQUFVLEdBQUdkLGFBQWEsQ0FBQ2EsSUFBL0I7SUFDQSxJQUFJRSxzQkFBc0IsR0FBR0gsU0FBUyxDQUFDSSxhQUFWLENBQXlCMUIsRUFBRSxDQUFDMkIsRUFBSCxDQUFNLEdBQU4sRUFBVyxDQUFYLENBQXpCLENBQTdCO0lBRUFULEtBQUssQ0FBQ1UsYUFBTixHQUFzQkosVUFBdEI7SUFDQU4sS0FBSyxDQUFDVyxNQUFOLEdBQWVQLFNBQVMsQ0FBQ1EsYUFBVixDQUF5Qkwsc0JBQXpCLENBQWY7SUFDQVAsS0FBSyxDQUFDYSxlQUFOLEdBQXdCUCxVQUFVLENBQUNNLGFBQVgsQ0FBMEJMLHNCQUExQixDQUF4QjtJQUNBUCxLQUFLLENBQUNjLGNBQU4sR0FBdUJSLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQmEsUUFBaEIsR0FBMkJYLFNBQVMsQ0FBQ0YsSUFBVixDQUFlYSxRQUFqRTtJQUVBZixLQUFLLENBQUNDLE9BQU4sR0FBZ0IsSUFBaEI7RUFDSDtBQWhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3Lmlmb3JjZTJkLm5ldC9iMmR0dXQvc3RpY2t5LXByb2plY3RpbGVzXG4vLyBodHRwOi8vd3d3LmVtYW51ZWxlZmVyb25hdG8uY29tLzIwMTIvMTIvMTQvYm94MmQtZmx5aW5nLWFycm93LWVuZ2luZS1maXJzdC1hdHRlbXB0L1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2VsZEpvaW50ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV2VsZEpvaW50KTtcbiAgICB9LFxuXG4gICAgb25Qb3N0U29sdmU6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgdmFyIGltcHVsc2UgPSBjb250YWN0LmdldEltcHVsc2UoKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGltcHVsc2Uubm9ybWFsSW1wdWxzZXNbMF0pIDwgY2MuUGh5c2ljc01hbmFnZXIuUFRNX1JBVElPKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGpvaW50ID0gdGhpcy53ZWxkSm9pbnQ7XG5cbiAgICAgICAgaWYgKGpvaW50LmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGpvaW50LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFycm93Qm9keSA9IHNlbGZDb2xsaWRlci5ib2R5O1xuICAgICAgICBsZXQgdGFyZ2V0Qm9keSA9IG90aGVyQ29sbGlkZXIuYm9keTtcbiAgICAgICAgbGV0IHdvcmxkQ29vcmRzQW5jaG9yUG9pbnQgPSBhcnJvd0JvZHkuZ2V0V29ybGRQb2ludCggY2MudjIoMC42LCAwKSApO1xuICAgIFxuICAgICAgICBqb2ludC5jb25uZWN0ZWRCb2R5ID0gdGFyZ2V0Qm9keTtcbiAgICAgICAgam9pbnQuYW5jaG9yID0gYXJyb3dCb2R5LmdldExvY2FsUG9pbnQoIHdvcmxkQ29vcmRzQW5jaG9yUG9pbnQgKTtcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gdGFyZ2V0Qm9keS5nZXRMb2NhbFBvaW50KCB3b3JsZENvb3Jkc0FuY2hvclBvaW50ICk7XG4gICAgICAgIGpvaW50LnJlZmVyZW5jZUFuZ2xlID0gdGFyZ2V0Qm9keS5ub2RlLnJvdGF0aW9uIC0gYXJyb3dCb2R5Lm5vZGUucm90YXRpb247XG5cbiAgICAgICAgam9pbnQuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/infinite-world/infinite-world.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332d37iXLNCgpDF13SoPtk+', 'infinite-world');
// cases/demo/infinite-world/infinite-world.js

"use strict";

// http://www.emanueleferonato.com/2011/10/04/create-a-terrain-like-the-one-in-tiny-wings-with-flash-and-box2d-%E2%80%93-adding-more-bumps/
cc.Class({
  "extends": cc.Component,
  properties: {
    pixelStep: 10,
    xOffset: 0,
    yOffset: 240,
    target: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.hills = [];
    this.pools = [];

    while (this.xOffset < 1200) {
      this.generateHill(10);
    }
  },
  generateHillPiece: function generateHillPiece(xOffset, points) {
    var hills = this.hills;
    var first = hills[0];

    if (first && this.target.x - first.node.x > 1000) {
      first.node.x = xOffset;
      first.collider.points = points;
      first.collider.apply();
      hills.push(hills.shift());
      return;
    }

    var node = new cc.Node();
    node.x = xOffset;
    var body = node.addComponent(cc.RigidBody);
    body.type = cc.RigidBodyType.Static;
    var collider = node.addComponent(cc.PhysicsPolygonCollider);
    collider.points = points;
    collider.friction = 1;
    node.parent = this.node;
    hills.push({
      node: node,
      collider: collider
    });
  },
  generateHill: function generateHill() {
    var pixelStep = this.pixelStep;
    var xOffset = this.xOffset;
    var yOffset = this.yOffset;
    var hillWidth = 120 + Math.ceil(Math.random() * 26) * 20;
    var numberOfSlices = hillWidth / pixelStep;
    var j; // first step

    var randomHeight;

    if (xOffset === 0) {
      randomHeight = 0;
    } else {
      randomHeight = Math.min(Math.random() * hillWidth / 7.5, 600 - yOffset); // make sure yOffset < 600
    }

    yOffset += randomHeight;

    for (j = 0; j < numberOfSlices / 2; j++) {
      var points = [];
      points.push(cc.v2(0, 0));
      points.push(cc.v2(0, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * j)));
      points.push(cc.v2(pixelStep, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * (j + 1))));
      points.push(cc.v2(pixelStep, 0));
      this.generateHillPiece(xOffset + j * pixelStep, points);
    }

    yOffset += randomHeight; // second step

    if (xOffset === 0) {
      randomHeight = 0;
    } else {
      randomHeight = Math.min(Math.random() * hillWidth / 5, yOffset - 240); // make sure yOffset > 240
    }

    yOffset -= randomHeight;

    for (j = numberOfSlices / 2; j < numberOfSlices; j++) {
      var _points = [];

      _points.push(cc.v2(0, 0));

      _points.push(cc.v2(0, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * j)));

      _points.push(cc.v2(pixelStep, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * (j + 1))));

      _points.push(cc.v2(pixelStep, 0));

      this.generateHillPiece(xOffset + j * pixelStep, _points);
    }

    yOffset -= randomHeight;
    this.xOffset += hillWidth;
    this.yOffset = yOffset;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (!this.target) return;

    while (this.target.x + 1200 > this.xOffset) {
      this.generateHill();
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2luZmluaXRlLXdvcmxkL2luZmluaXRlLXdvcmxkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGl4ZWxTdGVwIiwieE9mZnNldCIsInlPZmZzZXQiLCJ0YXJnZXQiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsImhpbGxzIiwicG9vbHMiLCJnZW5lcmF0ZUhpbGwiLCJnZW5lcmF0ZUhpbGxQaWVjZSIsInBvaW50cyIsImZpcnN0IiwieCIsIm5vZGUiLCJjb2xsaWRlciIsImFwcGx5IiwicHVzaCIsInNoaWZ0IiwiYm9keSIsImFkZENvbXBvbmVudCIsIlJpZ2lkQm9keSIsIlJpZ2lkQm9keVR5cGUiLCJTdGF0aWMiLCJQaHlzaWNzUG9seWdvbkNvbGxpZGVyIiwiZnJpY3Rpb24iLCJwYXJlbnQiLCJoaWxsV2lkdGgiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIm51bWJlck9mU2xpY2VzIiwiaiIsInJhbmRvbUhlaWdodCIsIm1pbiIsInYyIiwiY29zIiwiUEkiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFLEVBREg7SUFFUkMsT0FBTyxFQUFFLENBRkQ7SUFHUkMsT0FBTyxFQUFFLEdBSEQ7SUFLUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQURMO01BRUpDLElBQUksRUFBRVIsRUFBRSxDQUFDUztJQUZMO0VBTEEsQ0FIUDtFQWNMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxLQUFMLEdBQWEsRUFBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxFQUFiOztJQUVBLE9BQU8sS0FBS1AsT0FBTCxHQUFlLElBQXRCLEVBQTRCO01BQ3hCLEtBQUtRLFlBQUwsQ0FBa0IsRUFB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TUFDQXJCLE9BQU0sQ0FBQ00sSUFBUCxDQUFhckIsRUFBRSxDQUFDdUMsRUFBSCxDQUFPbkMsU0FBUCxFQUFrQkUsT0FBTyxHQUFHK0IsWUFBWSxHQUFDTCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxJQUFFUixJQUFJLENBQUNTLEVBQVAsR0FBVU4sY0FBVixJQUEwQkMsQ0FBQyxHQUFDLENBQTVCLENBQVQsQ0FBekMsQ0FBYjs7TUFDQXJCLE9BQU0sQ0FBQ00sSUFBUCxDQUFhckIsRUFBRSxDQUFDdUMsRUFBSCxDQUFPbkMsU0FBUCxFQUFrQixDQUFsQixDQUFiOztNQUVBLEtBQUtVLGlCQUFMLENBQXVCVCxPQUFPLEdBQUUrQixDQUFDLEdBQUNoQyxTQUFsQyxFQUE2Q1csT0FBN0M7SUFDSDs7SUFDRFQsT0FBTyxJQUFJK0IsWUFBWDtJQUVBLEtBQUtoQyxPQUFMLElBQWdCMEIsU0FBaEI7SUFDQSxLQUFLekIsT0FBTCxHQUFlQSxPQUFmO0VBQ0gsQ0EzR0k7RUE2R0w7RUFDQW9DLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLElBQUksQ0FBQyxLQUFLcEMsTUFBVixFQUFrQjs7SUFFbEIsT0FBTyxLQUFLQSxNQUFMLENBQVlVLENBQVosR0FBZ0IsSUFBaEIsR0FBdUIsS0FBS1osT0FBbkMsRUFBNEM7TUFDeEMsS0FBS1EsWUFBTDtJQUNIO0VBQ0o7QUFwSEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cDovL3d3dy5lbWFudWVsZWZlcm9uYXRvLmNvbS8yMDExLzEwLzA0L2NyZWF0ZS1hLXRlcnJhaW4tbGlrZS10aGUtb25lLWluLXRpbnktd2luZ3Mtd2l0aC1mbGFzaC1hbmQtYm94MmQtJUUyJTgwJTkzLWFkZGluZy1tb3JlLWJ1bXBzL1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwaXhlbFN0ZXA6IDEwLFxuICAgICAgICB4T2Zmc2V0OiAwLFxuICAgICAgICB5T2Zmc2V0OiAyNDAsXG5cbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpbGxzID0gW107XG4gICAgICAgIHRoaXMucG9vbHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy54T2Zmc2V0IDwgMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpbGwoMTApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdlbmVyYXRlSGlsbFBpZWNlICh4T2Zmc2V0LCBwb2ludHMpIHtcbiAgICAgICAgbGV0IGhpbGxzID0gdGhpcy5oaWxscztcblxuICAgICAgICBsZXQgZmlyc3QgPSBoaWxsc1swXTtcbiAgICAgICAgaWYgKGZpcnN0ICYmICh0aGlzLnRhcmdldC54IC0gZmlyc3Qubm9kZS54ID4gMTAwMCkpIHtcbiAgICAgICAgICAgIGZpcnN0Lm5vZGUueCA9IHhPZmZzZXQ7XG4gICAgICAgICAgICBmaXJzdC5jb2xsaWRlci5wb2ludHMgPSBwb2ludHM7XG4gICAgICAgICAgICBmaXJzdC5jb2xsaWRlci5hcHBseSgpO1xuICAgICAgICAgICAgaGlsbHMucHVzaCggaGlsbHMuc2hpZnQoKSApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLnggPSB4T2Zmc2V0O1xuXG4gICAgICAgIGxldCBib2R5ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG5cbiAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XG4gICAgICAgIGNvbGxpZGVyLnBvaW50cyA9IHBvaW50cztcbiAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAxO1xuXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgIGhpbGxzLnB1c2goIHtub2RlOiBub2RlLCBjb2xsaWRlcjogY29sbGlkZXJ9ICk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlSGlsbCAoKSB7XG4gICAgICAgIGxldCBwaXhlbFN0ZXAgPSB0aGlzLnBpeGVsU3RlcDtcbiAgICAgICAgbGV0IHhPZmZzZXQgPSB0aGlzLnhPZmZzZXQ7XG4gICAgICAgIGxldCB5T2Zmc2V0ID0gdGhpcy55T2Zmc2V0O1xuXG4gICAgICAgIGxldCBoaWxsV2lkdGggPSAxMjAgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoyNikqMjA7XG4gICAgICAgIGxldCBudW1iZXJPZlNsaWNlcyA9IGhpbGxXaWR0aC9waXhlbFN0ZXA7XG5cbiAgICAgICAgbGV0IGo7XG5cbiAgICAgICAgLy8gZmlyc3Qgc3RlcFxuICAgICAgICBsZXQgcmFuZG9tSGVpZ2h0O1xuICAgICAgICBpZiAoeE9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgcmFuZG9tSGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmRvbUhlaWdodCA9IE1hdGgubWluKCBNYXRoLnJhbmRvbSgpICogaGlsbFdpZHRoIC8gNy41LCAgNjAwIC0geU9mZnNldCk7IC8vIG1ha2Ugc3VyZSB5T2Zmc2V0IDwgNjAwXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHlPZmZzZXQgKz0gcmFuZG9tSGVpZ2h0O1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBudW1iZXJPZlNsaWNlcy8yOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggMCwgICAgIDApICk7XG4gICAgICAgICAgICBwb2ludHMucHVzaCggY2MudjIoIDAsICAgICB5T2Zmc2V0IC0gcmFuZG9tSGVpZ2h0Kk1hdGguY29zKDIqTWF0aC5QSS9udW1iZXJPZlNsaWNlcypqKSkgKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggcGl4ZWxTdGVwLCB5T2Zmc2V0IC0gcmFuZG9tSGVpZ2h0Kk1hdGguY29zKDIqTWF0aC5QSS9udW1iZXJPZlNsaWNlcyooaisxKSkpICk7XG4gICAgICAgICAgICBwb2ludHMucHVzaCggY2MudjIoIHBpeGVsU3RlcCwgMCkgKTtcblxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpbGxQaWVjZSh4T2Zmc2V0KyBqKnBpeGVsU3RlcCwgcG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgeU9mZnNldCArPSByYW5kb21IZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvLyBzZWNvbmQgc3RlcFxuICAgICAgICBpZiAoeE9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgcmFuZG9tSGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmRvbUhlaWdodCA9IE1hdGgubWluKCBNYXRoLnJhbmRvbSgpKmhpbGxXaWR0aC81LCAgeU9mZnNldCAtIDI0MCk7IC8vIG1ha2Ugc3VyZSB5T2Zmc2V0ID4gMjQwXG4gICAgICAgIH1cblxuICAgICAgICB5T2Zmc2V0IC09IHJhbmRvbUhlaWdodDtcblxuICAgICAgICBmb3IgKGogPSBudW1iZXJPZlNsaWNlcy8yOyBqIDwgbnVtYmVyT2ZTbGljZXM7IGorKykge1xuICAgICAgICAgICAgbGV0IHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goIGNjLnYyKCAwLCAgICAgMCkgKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggMCwgICAgIHlPZmZzZXQgLSByYW5kb21IZWlnaHQqTWF0aC5jb3MoMipNYXRoLlBJL251bWJlck9mU2xpY2VzKmopKSApO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goIGNjLnYyKCBwaXhlbFN0ZXAsIHlPZmZzZXQgLSByYW5kb21IZWlnaHQqTWF0aC5jb3MoMipNYXRoLlBJL251bWJlck9mU2xpY2VzKihqKzEpKSkgKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggcGl4ZWxTdGVwLCAwKSApO1xuXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSGlsbFBpZWNlKHhPZmZzZXQrIGoqcGl4ZWxTdGVwLCBwb2ludHMpO1xuICAgICAgICB9XG4gICAgICAgIHlPZmZzZXQgLT0gcmFuZG9tSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMueE9mZnNldCArPSBoaWxsV2lkdGg7XG4gICAgICAgIHRoaXMueU9mZnNldCA9IHlPZmZzZXQ7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLnRhcmdldC54ICsgMTIwMCA+IHRoaXMueE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/example/linear-impulse.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f47f9W5tSlFPbAZAN/ETuo4', 'linear-impulse');
// cases/example/linear-impulse.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    impulse: cc.Vec2
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var body = this.node.getComponent(cc.RigidBody);
    if (!body) return;
    body.applyLinearImpulse(this.impulse, body.getWorldCenter());
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9leGFtcGxlL2xpbmVhci1pbXB1bHNlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW1wdWxzZSIsIlZlYzIiLCJzdGFydCIsImJvZHkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiYXBwbHlMaW5lYXJJbXB1bHNlIiwiZ2V0V29ybGRDZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBQyxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0s7RUFqQkosQ0FIUDtFQXVCTDtFQUVBO0VBRUFDLEtBM0JLLG1CQTJCSTtJQUNMLElBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJULEVBQUUsQ0FBQ1UsU0FBMUIsQ0FBWDtJQUNBLElBQUksQ0FBQ0gsSUFBTCxFQUFXO0lBRVhBLElBQUksQ0FBQ0ksa0JBQUwsQ0FBd0IsS0FBS1AsT0FBN0IsRUFBc0NHLElBQUksQ0FBQ0ssY0FBTCxFQUF0QztFQUNILENBaENJLENBa0NMOztBQWxDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuXG4gICAgICAgIGltcHVsc2U6IGNjLlZlYzJcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcblxuICAgICAgICBib2R5LmFwcGx5TGluZWFySW1wdWxzZSh0aGlzLmltcHVsc2UsIGJvZHkuZ2V0V29ybGRDZW50ZXIoKSlcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/polyglot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
"use strict";
cc._RF.push(module, '69decSgpRlE1rzEKp0RzG3V', 'polyglot');
// i18n/polyglot.js

"use strict";

//     (c) 2012-2016 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.
//
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Polyglot = factory(root);
  }
})(typeof global !== 'undefined' ? global : void 0, function (root) {
  'use strict';

  var replace = String.prototype.replace; // ### Polyglot class constructor

  function Polyglot(options) {
    options = options || {};
    this.phrases = {};
    this.extend(options.phrases || {});
    this.currentLocale = options.locale || 'en';
    this.allowMissing = !!options.allowMissing;
    this.warn = options.warn || warn;
  } // ### Version


  Polyglot.VERSION = '1.0.0'; // ### polyglot.locale([locale])
  //
  // Get or set locale. Internally, Polyglot only uses locale for pluralization.

  Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
  }; // ### polyglot.extend(phrases)
  //
  // Use `extend` to tell Polyglot how to translate a given key.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The key can be any string.  Feel free to call `extend` multiple times;
  // it will override any phrases with the same key, but leave existing phrases
  // untouched.
  //
  // It is also possible to pass nested phrase objects, which get flattened
  // into an object with the nested keys concatenated using dot notation.
  //
  //     polyglot.extend({
  //       "nav": {
  //         "hello": "Hello",
  //         "hello_name": "Hello, %{name}",
  //         "sidebar": {
  //           "welcome": "Welcome"
  //         }
  //       }
  //     });
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}',
  //     //   'nav.sidebar.welcome': 'Welcome'
  //     // }
  //
  // `extend` accepts an optional second argument, `prefix`, which can be used
  // to prefix every key in the phrases object with some string, using dot
  // notation.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     }, "nav");
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}'
  //     // }
  //
  // This feature is used internally to support nested phrase objects.


  Polyglot.prototype.extend = function (morePhrases, prefix) {
    var phrase;

    for (var key in morePhrases) {
      if (morePhrases.hasOwnProperty(key)) {
        phrase = morePhrases[key];
        if (prefix) key = prefix + '.' + key;

        if (typeof phrase === 'object') {
          this.extend(phrase, key);
        } else {
          this.phrases[key] = phrase;
        }
      }
    }
  }; // ### polyglot.unset(phrases)
  // Use `unset` to selectively remove keys from a polyglot instance.
  //
  //     polyglot.unset("some_key");
  //     polyglot.unset({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The unset method can take either a string (for the key), or an object hash with
  // the keys that you would like to unset.


  Polyglot.prototype.unset = function (morePhrases, prefix) {
    var phrase;

    if (typeof morePhrases === 'string') {
      delete this.phrases[morePhrases];
    } else {
      for (var key in morePhrases) {
        if (morePhrases.hasOwnProperty(key)) {
          phrase = morePhrases[key];
          if (prefix) key = prefix + '.' + key;

          if (typeof phrase === 'object') {
            this.unset(phrase, key);
          } else {
            delete this.phrases[key];
          }
        }
      }
    }
  }; // ### polyglot.clear()
  //
  // Clears all phrases. Useful for special cases, such as freeing
  // up memory if you have lots of phrases but no longer need to
  // perform any translation. Also used internally by `replace`.


  Polyglot.prototype.clear = function () {
    this.phrases = {};
  }; // ### polyglot.replace(phrases)
  //
  // Completely replace the existing phrases with a new set of phrases.
  // Normally, just use `extend` to add more phrases, but under certain
  // circumstances, you may want to make sure no old phrases are lying around.


  Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
  }; // ### polyglot.t(key, options)
  //
  // The most-used method. Provide a key, and `t` will return the
  // phrase.
  //
  //     polyglot.t("hello");
  //     => "Hello"
  //
  // The phrase value is provided first by a call to `polyglot.extend()` or
  // `polyglot.replace()`.
  //
  // Pass in an object as the second argument to perform interpolation.
  //
  //     polyglot.t("hello_name", {name: "Spike"});
  //     => "Hello, Spike"
  //
  // If you like, you can provide a default value in case the phrase is missing.
  // Use the special option key "_" to specify a default.
  //
  //     polyglot.t("i_like_to_write_in_language", {
  //       _: "I like to write in %{language}.",
  //       language: "JavaScript"
  //     });
  //     => "I like to write in JavaScript."
  //


  Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    options = options == null ? {} : options; // allow number as a pluralization shortcut

    if (typeof options === 'number') {
      options = {
        smart_count: options
      };
    }

    if (typeof this.phrases[key] === 'string') {
      phrase = this.phrases[key];
    } else if (typeof options._ === 'string') {
      phrase = options._;
    } else if (this.allowMissing) {
      phrase = key;
    } else {
      this.warn('Missing translation for key: "' + key + '"');
      result = key;
    }

    if (typeof phrase === 'string') {
      options = clone(options);
      result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
      result = interpolate(result, options);
    }

    return result;
  }; // ### polyglot.has(key)
  //
  // Check if polyglot has a translation for given key


  Polyglot.prototype.has = function (key) {
    return key in this.phrases;
  }; // #### Pluralization methods
  // The string that separates the different phrase possibilities.


  var delimeter = '||||'; // Mapping from pluralization group plural logic.

  var pluralTypes = {
    chinese: function chinese(n) {
      return 0;
    },
    german: function german(n) {
      return n !== 1 ? 1 : 0;
    },
    french: function french(n) {
      return n > 1 ? 1 : 0;
    },
    russian: function russian(n) {
      return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    czech: function czech(n) {
      return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    },
    polish: function polish(n) {
      return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function icelandic(n) {
      return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
    }
  }; // Mapping from pluralization group to individual locales.

  var pluralTypeToLanguages = {
    chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
    german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['hr', 'ru'],
    czech: ['cs', 'sk'],
    polish: ['pl'],
    icelandic: ['is']
  };

  function langToTypeMap(mapping) {
    var type,
        langs,
        l,
        ret = {};

    for (type in mapping) {
      if (mapping.hasOwnProperty(type)) {
        langs = mapping[type];

        for (l in langs) {
          ret[langs[l]] = type;
        }
      }
    }

    return ret;
  } // Trim a string.


  var trimRe = /^\s+|\s+$/g;

  function trim(str) {
    return replace.call(str, trimRe, '');
  } // Based on a phrase text that contains `n` plural forms separated
  // by `delimeter`, a `locale`, and a `count`, choose the correct
  // plural form, or none if `count` is `null`.


  function choosePluralForm(text, locale, count) {
    var ret, texts, chosenText;

    if (count != null && text) {
      texts = text.split(delimeter);
      chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
      ret = trim(chosenText);
    } else {
      ret = text;
    }

    return ret;
  }

  function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale] || langToPluralType.en;
  }

  function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
  } // ### interpolate
  //
  // Does the dirty work. Creates a `RegExp` object for each
  // interpolation placeholder.


  var dollarRegex = /\$/g;
  var dollarBillsYall = '$$$$';

  function interpolate(phrase, options) {
    for (var arg in options) {
      if (arg !== '_' && options.hasOwnProperty(arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];

        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        } // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.


        phrase = replace.call(phrase, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }

    return phrase;
  } // ### warn
  //
  // Provides a warning in the console if a phrase key is missing.


  function warn(message) {
    root.console && root.console.warn && root.console.warn('WARNING: ' + message);
  } // ### clone
  //
  // Clone an object.


  function clone(source) {
    var ret = {};

    for (var prop in source) {
      ret[prop] = source[prop];
    }

    return ret;
  }

  return Polyglot;
});

cc._RF.pop();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHMvaTE4bi9wb2x5Z2xvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdDLFdBQVMsSUFBVCxFQUFlLE9BQWYsRUFBd0I7RUFDdkIsSUFBSSxPQUFPLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsTUFBTSxDQUFDLEdBQTNDLEVBQWdEO0lBQzlDLE1BQU0sQ0FBQyxFQUFELEVBQUssWUFBVztNQUNwQixPQUFPLE9BQU8sQ0FBQyxJQUFELENBQWQ7SUFDRCxDQUZLLENBQU47RUFHRCxDQUpELE1BSU8sSUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7SUFDdEMsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBTyxDQUFDLElBQUQsQ0FBeEI7RUFDRCxDQUZNLE1BRUE7SUFDTCxJQUFJLENBQUMsUUFBTCxHQUFnQixPQUFPLENBQUMsSUFBRCxDQUF2QjtFQUNEO0FBQ0YsQ0FWQSxFQVVDLE9BQU8sTUFBUCxLQUFrQixXQUFsQixHQUFnQyxNQUFoQyxTQVZELEVBVWdELFVBQVMsSUFBVCxFQUFlO0VBQzlEOztFQUVBLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE9BQS9CLENBSDhELENBSzlEOztFQUNBLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUEyQjtJQUN6QixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQXJCO0lBQ0EsS0FBSyxPQUFMLEdBQWUsRUFBZjtJQUNBLEtBQUssTUFBTCxDQUFZLE9BQU8sQ0FBQyxPQUFSLElBQW1CLEVBQS9CO0lBQ0EsS0FBSyxhQUFMLEdBQXFCLE9BQU8sQ0FBQyxNQUFSLElBQWtCLElBQXZDO0lBQ0EsS0FBSyxZQUFMLEdBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBOUI7SUFDQSxLQUFLLElBQUwsR0FBWSxPQUFPLENBQUMsSUFBUixJQUFnQixJQUE1QjtFQUNELENBYjZELENBZTlEOzs7RUFDQSxRQUFRLENBQUMsT0FBVCxHQUFtQixPQUFuQixDQWhCOEQsQ0FrQjlEO0VBQ0E7RUFDQTs7RUFDQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixHQUE0QixVQUFTLFNBQVQsRUFBb0I7SUFDOUMsSUFBSSxTQUFKLEVBQWUsS0FBSyxhQUFMLEdBQXFCLFNBQXJCO0lBQ2YsT0FBTyxLQUFLLGFBQVo7RUFDRCxDQUhELENBckI4RCxDQTBCOUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztFQUNBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLEdBQTRCLFVBQVMsV0FBVCxFQUFzQixNQUF0QixFQUE4QjtJQUN4RCxJQUFJLE1BQUo7O0lBRUEsS0FBSyxJQUFJLEdBQVQsSUFBZ0IsV0FBaEIsRUFBNkI7TUFDM0IsSUFBSSxXQUFXLENBQUMsY0FBWixDQUEyQixHQUEzQixDQUFKLEVBQXFDO1FBQ25DLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRCxDQUFwQjtRQUNBLElBQUksTUFBSixFQUFZLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBVCxHQUFlLEdBQXJCOztRQUNaLElBQUksT0FBTyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO1VBQzlCLEtBQUssTUFBTCxDQUFZLE1BQVosRUFBb0IsR0FBcEI7UUFDRCxDQUZELE1BRU87VUFDTCxLQUFLLE9BQUwsQ0FBYSxHQUFiLElBQW9CLE1BQXBCO1FBQ0Q7TUFDRjtJQUNGO0VBQ0YsQ0FkRCxDQTNFOEQsQ0EyRjlEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztFQUNBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEtBQW5CLEdBQTJCLFVBQVMsV0FBVCxFQUFzQixNQUF0QixFQUE4QjtJQUN2RCxJQUFJLE1BQUo7O0lBRUEsSUFBSSxPQUFPLFdBQVAsS0FBdUIsUUFBM0IsRUFBcUM7TUFDbkMsT0FBTyxLQUFLLE9BQUwsQ0FBYSxXQUFiLENBQVA7SUFDRCxDQUZELE1BRU87TUFDTCxLQUFLLElBQUksR0FBVCxJQUFnQixXQUFoQixFQUE2QjtRQUMzQixJQUFJLFdBQVcsQ0FBQyxjQUFaLENBQTJCLEdBQTNCLENBQUosRUFBcUM7VUFDbkMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFELENBQXBCO1VBQ0EsSUFBSSxNQUFKLEVBQVksR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFULEdBQWUsR0FBckI7O1VBQ1osSUFBSSxPQUFPLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7WUFDOUIsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFtQixHQUFuQjtVQUNELENBRkQsTUFFTztZQUNMLE9BQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFQO1VBQ0Q7UUFDRjtNQUNGO0lBQ0Y7RUFDRixDQWxCRCxDQXRHOEQsQ0EwSDlEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztFQUNBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEtBQW5CLEdBQTJCLFlBQVc7SUFDcEMsS0FBSyxPQUFMLEdBQWUsRUFBZjtFQUNELENBRkQsQ0EvSDhELENBbUk5RDtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7RUFDQSxRQUFRLENBQUMsU0FBVCxDQUFtQixPQUFuQixHQUE2QixVQUFTLFVBQVQsRUFBcUI7SUFDaEQsS0FBSyxLQUFMO0lBQ0EsS0FBSyxNQUFMLENBQVksVUFBWjtFQUNELENBSEQsQ0F4SThELENBOEk5RDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0VBQ0EsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsQ0FBbkIsR0FBdUIsVUFBUyxHQUFULEVBQWMsT0FBZCxFQUF1QjtJQUM1QyxJQUFJLE1BQUosRUFBWSxNQUFaO0lBQ0EsT0FBTyxHQUFHLE9BQU8sSUFBSSxJQUFYLEdBQWtCLEVBQWxCLEdBQXVCLE9BQWpDLENBRjRDLENBRzVDOztJQUNBLElBQUksT0FBTyxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO01BQy9CLE9BQU8sR0FBRztRQUFDLFdBQVcsRUFBRTtNQUFkLENBQVY7SUFDRDs7SUFDRCxJQUFJLE9BQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFQLEtBQTZCLFFBQWpDLEVBQTJDO01BQ3pDLE1BQU0sR0FBRyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQVQ7SUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxDQUFmLEtBQXFCLFFBQXpCLEVBQW1DO01BQ3hDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBakI7SUFDRCxDQUZNLE1BRUEsSUFBSSxLQUFLLFlBQVQsRUFBdUI7TUFDNUIsTUFBTSxHQUFHLEdBQVQ7SUFDRCxDQUZNLE1BRUE7TUFDTCxLQUFLLElBQUwsQ0FBVSxtQ0FBaUMsR0FBakMsR0FBcUMsR0FBL0M7TUFDQSxNQUFNLEdBQUcsR0FBVDtJQUNEOztJQUNELElBQUksT0FBTyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO01BQzlCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBRCxDQUFmO01BQ0EsTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQUQsRUFBUyxLQUFLLGFBQWQsRUFBNkIsT0FBTyxDQUFDLFdBQXJDLENBQXpCO01BQ0EsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFwQjtJQUNEOztJQUNELE9BQU8sTUFBUDtFQUNELENBdkJELENBdks4RCxDQWlNOUQ7RUFDQTtFQUNBOzs7RUFDQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixHQUF5QixVQUFTLEdBQVQsRUFBYztJQUNyQyxPQUFPLEdBQUcsSUFBSSxLQUFLLE9BQW5CO0VBQ0QsQ0FGRCxDQXBNOEQsQ0F5TTlEO0VBQ0E7OztFQUNBLElBQUksU0FBUyxHQUFHLE1BQWhCLENBM004RCxDQTZNOUQ7O0VBQ0EsSUFBSSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFJLGlCQUFTLENBQVQsRUFBWTtNQUFFLE9BQU8sQ0FBUDtJQUFXLENBRHBCO0lBRWhCLE1BQU0sRUFBSyxnQkFBUyxDQUFULEVBQVk7TUFBRSxPQUFPLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjLENBQXJCO0lBQXlCLENBRmxDO0lBR2hCLE1BQU0sRUFBSyxnQkFBUyxDQUFULEVBQVk7TUFBRSxPQUFPLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQW5CO0lBQXVCLENBSGhDO0lBSWhCLE9BQU8sRUFBSSxpQkFBUyxDQUFULEVBQVk7TUFBRSxPQUFPLENBQUMsR0FBRyxFQUFKLEtBQVcsQ0FBWCxJQUFnQixDQUFDLEdBQUcsR0FBSixLQUFZLEVBQTVCLEdBQWlDLENBQWpDLEdBQXFDLENBQUMsR0FBRyxFQUFKLElBQVUsQ0FBVixJQUFlLENBQUMsR0FBRyxFQUFKLElBQVUsQ0FBekIsS0FBK0IsQ0FBQyxHQUFHLEdBQUosR0FBVSxFQUFWLElBQWdCLENBQUMsR0FBRyxHQUFKLElBQVcsRUFBMUQsSUFBZ0UsQ0FBaEUsR0FBb0UsQ0FBaEg7SUFBb0gsQ0FKN0g7SUFLaEIsS0FBSyxFQUFNLGVBQVMsQ0FBVCxFQUFZO01BQUUsT0FBUSxDQUFDLEtBQUssQ0FBUCxHQUFZLENBQVosR0FBaUIsQ0FBQyxJQUFJLENBQUwsSUFBVSxDQUFDLElBQUksQ0FBaEIsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBaEQ7SUFBb0QsQ0FMN0Q7SUFNaEIsTUFBTSxFQUFLLGdCQUFTLENBQVQsRUFBWTtNQUFFLE9BQVEsQ0FBQyxLQUFLLENBQU4sR0FBVSxDQUFWLEdBQWMsQ0FBQyxHQUFHLEVBQUosSUFBVSxDQUFWLElBQWUsQ0FBQyxHQUFHLEVBQUosSUFBVSxDQUF6QixLQUErQixDQUFDLEdBQUcsR0FBSixHQUFVLEVBQVYsSUFBZ0IsQ0FBQyxHQUFHLEdBQUosSUFBVyxFQUExRCxJQUFnRSxDQUFoRSxHQUFvRSxDQUExRjtJQUErRixDQU54RztJQU9oQixTQUFTLEVBQUUsbUJBQVMsQ0FBVCxFQUFZO01BQUUsT0FBUSxDQUFDLEdBQUcsRUFBSixLQUFXLENBQVgsSUFBZ0IsQ0FBQyxHQUFHLEdBQUosS0FBWSxFQUE3QixHQUFtQyxDQUFuQyxHQUF1QyxDQUE5QztJQUFrRDtFQVAzRCxDQUFsQixDQTlNOEQsQ0F3TjlEOztFQUNBLElBQUkscUJBQXFCLEdBQUc7SUFDMUIsT0FBTyxFQUFJLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELElBQWpELENBRGU7SUFFMUIsTUFBTSxFQUFLLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELElBQWpELEVBQXVELElBQXZELEVBQTZELElBQTdELEVBQW1FLElBQW5FLEVBQXlFLElBQXpFLENBRmU7SUFHMUIsTUFBTSxFQUFLLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxPQUFiLENBSGU7SUFJMUIsT0FBTyxFQUFJLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FKZTtJQUsxQixLQUFLLEVBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUxlO0lBTTFCLE1BQU0sRUFBSyxDQUFDLElBQUQsQ0FOZTtJQU8xQixTQUFTLEVBQUUsQ0FBQyxJQUFEO0VBUGUsQ0FBNUI7O0VBVUEsU0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDO0lBQzlCLElBQUksSUFBSjtJQUFBLElBQVUsS0FBVjtJQUFBLElBQWlCLENBQWpCO0lBQUEsSUFBb0IsR0FBRyxHQUFHLEVBQTFCOztJQUNBLEtBQUssSUFBTCxJQUFhLE9BQWIsRUFBc0I7TUFDcEIsSUFBSSxPQUFPLENBQUMsY0FBUixDQUF1QixJQUF2QixDQUFKLEVBQWtDO1FBQ2hDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBRCxDQUFmOztRQUNBLEtBQUssQ0FBTCxJQUFVLEtBQVYsRUFBaUI7VUFDZixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFILEdBQWdCLElBQWhCO1FBQ0Q7TUFDRjtJQUNGOztJQUNELE9BQU8sR0FBUDtFQUNELENBOU82RCxDQWdQOUQ7OztFQUNBLElBQUksTUFBTSxHQUFHLFlBQWI7O0VBQ0EsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFrQjtJQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFSLENBQWEsR0FBYixFQUFrQixNQUFsQixFQUEwQixFQUExQixDQUFQO0VBQ0QsQ0FwUDZELENBc1A5RDtFQUNBO0VBQ0E7OztFQUNBLFNBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsRUFBd0MsS0FBeEMsRUFBOEM7SUFDNUMsSUFBSSxHQUFKLEVBQVMsS0FBVCxFQUFnQixVQUFoQjs7SUFDQSxJQUFJLEtBQUssSUFBSSxJQUFULElBQWlCLElBQXJCLEVBQTJCO01BQ3pCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLFNBQVgsQ0FBUjtNQUNBLFVBQVUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQUQsRUFBUyxLQUFULENBQWhCLENBQUwsSUFBeUMsS0FBSyxDQUFDLENBQUQsQ0FBM0Q7TUFDQSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQUQsQ0FBVjtJQUNELENBSkQsTUFJTztNQUNMLEdBQUcsR0FBRyxJQUFOO0lBQ0Q7O0lBQ0QsT0FBTyxHQUFQO0VBQ0Q7O0VBRUQsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDO0lBQzlCLElBQUksZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLHFCQUFELENBQXBDO0lBQ0EsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFELENBQWhCLElBQTRCLGdCQUFnQixDQUFDLEVBQXBEO0VBQ0Q7O0VBRUQsU0FBUyxlQUFULENBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDO0lBQ3RDLE9BQU8sV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFELENBQWYsQ0FBWCxDQUFvQyxLQUFwQyxDQUFQO0VBQ0QsQ0E1UTZELENBOFE5RDtFQUNBO0VBQ0E7RUFDQTs7O0VBQ0EsSUFBSSxXQUFXLEdBQUcsS0FBbEI7RUFDQSxJQUFJLGVBQWUsR0FBRyxNQUF0Qjs7RUFDQSxTQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkIsT0FBN0IsRUFBc0M7SUFDcEMsS0FBSyxJQUFJLEdBQVQsSUFBZ0IsT0FBaEIsRUFBeUI7TUFDdkIsSUFBSSxHQUFHLEtBQUssR0FBUixJQUFlLE9BQU8sQ0FBQyxjQUFSLENBQXVCLEdBQXZCLENBQW5CLEVBQWdEO1FBQzlDO1FBQ0E7UUFDQTtRQUNBLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFELENBQXpCOztRQUNBLElBQUksT0FBTyxXQUFQLEtBQXVCLFFBQTNCLEVBQXFDO1VBQ25DLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBUixDQUFhLE9BQU8sQ0FBQyxHQUFELENBQXBCLEVBQTJCLFdBQTNCLEVBQXdDLGVBQXhDLENBQWQ7UUFDRCxDQVA2QyxDQVE5QztRQUNBO1FBQ0E7OztRQUNBLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBUixDQUFhLE1BQWIsRUFBcUIsSUFBSSxNQUFKLENBQVcsU0FBTyxHQUFQLEdBQVcsS0FBdEIsRUFBNkIsR0FBN0IsQ0FBckIsRUFBd0QsV0FBeEQsQ0FBVDtNQUNEO0lBQ0Y7O0lBQ0QsT0FBTyxNQUFQO0VBQ0QsQ0FyUzZELENBdVM5RDtFQUNBO0VBQ0E7OztFQUNBLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUI7SUFDckIsSUFBSSxDQUFDLE9BQUwsSUFBZ0IsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUE3QixJQUFxQyxJQUFJLENBQUMsT0FBTCxDQUFhLElBQWIsQ0FBa0IsY0FBYyxPQUFoQyxDQUFyQztFQUNELENBNVM2RCxDQThTOUQ7RUFDQTtFQUNBOzs7RUFDQSxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0lBQ3JCLElBQUksR0FBRyxHQUFHLEVBQVY7O0lBQ0EsS0FBSyxJQUFJLElBQVQsSUFBaUIsTUFBakIsRUFBeUI7TUFDdkIsR0FBRyxDQUFDLElBQUQsQ0FBSCxHQUFZLE1BQU0sQ0FBQyxJQUFELENBQWxCO0lBQ0Q7O0lBQ0QsT0FBTyxHQUFQO0VBQ0Q7O0VBRUQsT0FBTyxRQUFQO0FBQ0QsQ0FwVUEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gICAgIChjKSAyMDEyLTIwMTYgQWlyYm5iLCBJbmMuXG4vL1xuLy8gICAgIHBvbHlnbG90LmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBCU0Rcbi8vICAgICBsaWNlbnNlLiBGb3IgYWxsIGxpY2Vuc2luZyBpbmZvcm1hdGlvbiwgZGV0YWlscywgYW5kIGRvY3VtZW50aW9uOlxuLy8gICAgIGh0dHA6Ly9haXJibmIuZ2l0aHViLmNvbS9wb2x5Z2xvdC5qc1xuLy9cbi8vXG4vLyBQb2x5Z2xvdC5qcyBpcyBhbiBJMThuIGhlbHBlciBsaWJyYXJ5IHdyaXR0ZW4gaW4gSmF2YVNjcmlwdCwgbWFkZSB0b1xuLy8gd29yayBib3RoIGluIHRoZSBicm93c2VyIGFuZCBpbiBOb2RlLiBJdCBwcm92aWRlcyBhIHNpbXBsZSBzb2x1dGlvbiBmb3Jcbi8vIGludGVycG9sYXRpb24gYW5kIHBsdXJhbGl6YXRpb24sIGJhc2VkIG9mZiBvZiBBaXJibmInc1xuLy8gZXhwZXJpZW5jZSBhZGRpbmcgSTE4biBmdW5jdGlvbmFsaXR5IHRvIGl0cyBCYWNrYm9uZS5qcyBhbmQgTm9kZSBhcHBzLlxuLy9cbi8vIFBvbHlsZ2xvdCBpcyBhZ25vc3RpYyB0byB5b3VyIHRyYW5zbGF0aW9uIGJhY2tlbmQuIEl0IGRvZXNuJ3QgcGVyZm9ybSBhbnlcbi8vIHRyYW5zbGF0aW9uOyBpdCBzaW1wbHkgZ2l2ZXMgeW91IGEgd2F5IHRvIG1hbmFnZSB0cmFuc2xhdGVkIHBocmFzZXMgZnJvbVxuLy8geW91ciBjbGllbnQtIG9yIHNlcnZlci1zaWRlIEphdmFTY3JpcHQgYXBwbGljYXRpb24uXG4vL1xuXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhY3Rvcnkocm9vdCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuUG9seWdsb3QgPSBmYWN0b3J5KHJvb3QpO1xuICB9XG59KHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdGhpcywgZnVuY3Rpb24ocm9vdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbiAgLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG4gIGZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgICB0aGlzLmV4dGVuZChvcHRpb25zLnBocmFzZXMgfHwge30pO1xuICAgIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8ICdlbic7XG4gICAgdGhpcy5hbGxvd01pc3NpbmcgPSAhIW9wdGlvbnMuYWxsb3dNaXNzaW5nO1xuICAgIHRoaXMud2FybiA9IG9wdGlvbnMud2FybiB8fCB3YXJuO1xuICB9XG5cbiAgLy8gIyMjIFZlcnNpb25cbiAgUG9seWdsb3QuVkVSU0lPTiA9ICcxLjAuMCc7XG5cbiAgLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbiAgLy9cbiAgLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG4gIFBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbihuZXdMb2NhbGUpIHtcbiAgICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbiAgfTtcblxuICAvLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4gIC8vXG4gIC8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbiAgLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuICAvLyAgICAgfSk7XG4gIC8vXG4gIC8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbiAgLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbiAgLy8gdW50b3VjaGVkLlxuICAvL1xuICAvLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4gIC8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcIm5hdlwiOiB7XG4gIC8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4gIC8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbiAgLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuICAvLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy9cbiAgLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuICAvLyAgICAgLy8ge1xuICAvLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbiAgLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9JyxcbiAgLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbiAgLy8gICAgIC8vIH1cbiAgLy9cbiAgLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuICAvLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3RcbiAgLy8gbm90YXRpb24uXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbiAgLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuICAvLyAgICAgfSwgXCJuYXZcIik7XG4gIC8vXG4gIC8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbiAgLy8gICAgIC8vIHtcbiAgLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4gIC8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbiAgLy8gICAgIC8vIH1cbiAgLy9cbiAgLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cbiAgUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgICB2YXIgcGhyYXNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG1vcmVQaHJhc2VzKSB7XG4gICAgICBpZiAobW9yZVBocmFzZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwaHJhc2UgPSBtb3JlUGhyYXNlc1trZXldO1xuICAgICAgICBpZiAocHJlZml4KSBrZXkgPSBwcmVmaXggKyAnLicgKyBrZXk7XG4gICAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwga2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBocmFzZXNba2V5XSA9IHBocmFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbiAgLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuICAvL1xuICAvLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbiAgLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbiAgLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4gIC8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbiAgLy8gICAgIH0pO1xuICAvL1xuICAvLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4gIC8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG4gIFBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgICB2YXIgcGhyYXNlO1xuXG4gICAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbW9yZVBocmFzZXMpIHtcbiAgICAgICAgaWYgKG1vcmVQaHJhc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBwaHJhc2UgPSBtb3JlUGhyYXNlc1trZXldO1xuICAgICAgICAgIGlmIChwcmVmaXgpIGtleSA9IHByZWZpeCArICcuJyArIGtleTtcbiAgICAgICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4gIC8vXG4gIC8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbiAgLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbiAgLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cbiAgUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5waHJhc2VzID0ge307XG4gIH07XG5cbiAgLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbiAgLy9cbiAgLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4gIC8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuICAvLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG4gIFBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24obmV3UGhyYXNlcykge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbiAgfTtcblxuXG4gIC8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbiAgLy9cbiAgLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4gIC8vIHBocmFzZS5cbiAgLy9cbiAgLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbiAgLy8gICAgID0+IFwiSGVsbG9cIlxuICAvL1xuICAvLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4gIC8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuICAvL1xuICAvLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbiAgLy9cbiAgLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbiAgLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbiAgLy9cbiAgLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4gIC8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuICAvL1xuICAvLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4gIC8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuICAvLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuICAvL1xuICBQb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuICAgIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICAgIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSB7XG4gICAgICBvcHRpb25zID0ge3NtYXJ0X2NvdW50OiBvcHRpb25zfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBocmFzZSA9IG9wdGlvbnMuXztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWxsb3dNaXNzaW5nKSB7XG4gICAgICBwaHJhc2UgPSBrZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicra2V5KydcIicpO1xuICAgICAgcmVzdWx0ID0ga2V5O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSBjbG9uZShvcHRpb25zKTtcbiAgICAgIHJlc3VsdCA9IGNob29zZVBsdXJhbEZvcm0ocGhyYXNlLCB0aGlzLmN1cnJlbnRMb2NhbGUsIG9wdGlvbnMuc21hcnRfY291bnQpO1xuICAgICAgcmVzdWx0ID0gaW50ZXJwb2xhdGUocmVzdWx0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuXG4gIC8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuICAvL1xuICAvLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG4gIFBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIHRoaXMucGhyYXNlcztcbiAgfTtcblxuXG4gIC8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4gIC8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbiAgdmFyIGRlbGltZXRlciA9ICd8fHx8JztcblxuICAvLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG4gIHZhciBwbHVyYWxUeXBlcyA9IHtcbiAgICBjaGluZXNlOiAgIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH0sXG4gICAgZ2VybWFuOiAgICBmdW5jdGlvbihuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gICAgZnJlbmNoOiAgICBmdW5jdGlvbihuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICAgIHJ1c3NpYW46ICAgZnVuY3Rpb24obikgeyByZXR1cm4gbiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjsgfSxcbiAgICBjemVjaDogICAgIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIChuID09PSAxKSA/IDAgOiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjsgfSxcbiAgICBwb2xpc2g6ICAgIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIChuID09PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7IH0sXG4gICAgaWNlbGFuZGljOiBmdW5jdGlvbihuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9XG4gIH07XG5cbiAgLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsb2NhbGVzLlxuICB2YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICAgIGNoaW5lc2U6ICAgWydmYScsICdpZCcsICdqYScsICdrbycsICdsbycsICdtcycsICd0aCcsICd0cicsICd6aCddLFxuICAgIGdlcm1hbjogICAgWydkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdodScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdiddLFxuICAgIGZyZW5jaDogICAgWydmcicsICd0bCcsICdwdC1iciddLFxuICAgIHJ1c3NpYW46ICAgWydocicsICdydSddLFxuICAgIGN6ZWNoOiAgICAgWydjcycsICdzayddLFxuICAgIHBvbGlzaDogICAgWydwbCddLFxuICAgIGljZWxhbmRpYzogWydpcyddXG4gIH07XG5cbiAgZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gICAgdmFyIHR5cGUsIGxhbmdzLCBsLCByZXQgPSB7fTtcbiAgICBmb3IgKHR5cGUgaW4gbWFwcGluZykge1xuICAgICAgaWYgKG1hcHBpbmcuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgbGFuZ3MgPSBtYXBwaW5nW3R5cGVdO1xuICAgICAgICBmb3IgKGwgaW4gbGFuZ3MpIHtcbiAgICAgICAgICByZXRbbGFuZ3NbbF1dID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gVHJpbSBhIHN0cmluZy5cbiAgdmFyIHRyaW1SZSA9IC9eXFxzK3xcXHMrJC9nO1xuICBmdW5jdGlvbiB0cmltKHN0cil7XG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChzdHIsIHRyaW1SZSwgJycpO1xuICB9XG5cbiAgLy8gQmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYCBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkXG4gIC8vIGJ5IGBkZWxpbWV0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgY291bnRgLCBjaG9vc2UgdGhlIGNvcnJlY3RcbiAgLy8gcGx1cmFsIGZvcm0sIG9yIG5vbmUgaWYgYGNvdW50YCBpcyBgbnVsbGAuXG4gIGZ1bmN0aW9uIGNob29zZVBsdXJhbEZvcm0odGV4dCwgbG9jYWxlLCBjb3VudCl7XG4gICAgdmFyIHJldCwgdGV4dHMsIGNob3NlblRleHQ7XG4gICAgaWYgKGNvdW50ICE9IG51bGwgJiYgdGV4dCkge1xuICAgICAgdGV4dHMgPSB0ZXh0LnNwbGl0KGRlbGltZXRlcik7XG4gICAgICBjaG9zZW5UZXh0ID0gdGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpXSB8fCB0ZXh0c1swXTtcbiAgICAgIHJldCA9IHRyaW0oY2hvc2VuVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRleHQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG4gIH1cblxuICBmdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICAgIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG4gIH1cblxuICAvLyAjIyMgaW50ZXJwb2xhdGVcbiAgLy9cbiAgLy8gRG9lcyB0aGUgZGlydHkgd29yay4gQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaFxuICAvLyBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICB2YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG4gIHZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQkJCc7XG4gIGZ1bmN0aW9uIGludGVycG9sYXRlKHBocmFzZSwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGFyZyBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoYXJnICE9PSAnXycgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShhcmcpKSB7XG4gICAgICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkXG4gICAgICAgIC8vIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLiB0aGUgXCIkJCQkXCIgaXMgbmVlZGVkIGJlY2F1c2UgZWFjaCBcIiRcIiBuZWVkcyB0b1xuICAgICAgICAvLyBiZSBlc2NhcGVkIHdpdGggXCIkXCIgaXRzZWxmLCBhbmQgd2UgbmVlZCB0d28gaW4gdGhlIHJlc3VsdGluZyBvdXRwdXQuXG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IG9wdGlvbnNbYXJnXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ10sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBgUmVnRXhwYCBlYWNoIHRpbWUgaW5zdGVhZCBvZiB1c2luZyBhIG1vcmUtZWZmaWNpZW50XG4gICAgICAgIC8vIHN0cmluZyByZXBsYWNlIHNvIHRoYXQgdGhlIHNhbWUgYXJndW1lbnQgY2FuIGJlIHJlcGxhY2VkIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIGluIHRoZSBzYW1lIHBocmFzZS5cbiAgICAgICAgcGhyYXNlID0gcmVwbGFjZS5jYWxsKHBocmFzZSwgbmV3IFJlZ0V4cCgnJVxcXFx7JythcmcrJ1xcXFx9JywgJ2cnKSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgLy8gIyMjIHdhcm5cbiAgLy9cbiAgLy8gUHJvdmlkZXMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGEgcGhyYXNlIGtleSBpcyBtaXNzaW5nLlxuICBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICByb290LmNvbnNvbGUgJiYgcm9vdC5jb25zb2xlLndhcm4gJiYgcm9vdC5jb25zb2xlLndhcm4oJ1dBUk5JTkc6ICcgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vICMjIyBjbG9uZVxuICAvL1xuICAvLyBDbG9uZSBhbiBvYmplY3QuXG4gIGZ1bmN0aW9uIGNsb25lKHNvdXJjZSkge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgcmV0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIFBvbHlnbG90O1xufSkpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/data/en.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '920c5VLzJxKjYCAoIUwUHym', 'en');
// i18n/data/en.js

"use strict";

module.exports = {
  "example_case_nonsupport_native_desktop_tips": "The example case nonsupport the Mac platform and Windows platform",
  "example_case_nonsupport_runtime_tips": "The example case does not support the runtime platform",
  "example_case_nonsupport_mobile_tips": "The example case nonsupport mobile platforms",
  "example_case_nonsupport_web_canvas_tips": "The example case nonsupport Canvas mode",
  "example_case_support_webGl_tips": "The example case only supports WebGL mode",
  "example_case_support_mobile_tips": "The example case only supports mobile platforms",
  "example_case_support_mobile_android_tips": "The example case only supports Android mobile platform",
  "example_case_support_native_chrome_tips": "The example case only supports Chrome browser (Native)",
  "example_case_support_native_desktop_tips": "The example case only supports the Mac platform and Windows platform",
  "TestList.fire.30": "Back list",
  "TestList.fire.37": "View intro",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "This is Spirte Single.",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "This is Spirte From Atlas.",
  "cases/01_graphics/01_sprite/FilledSprite.fire.9": "Fill Type: HORIZONTAL",
  "cases/01_graphics/01_sprite/FilledSprite.fire.15": "Fill Type: VERTICAL",
  "cases/01_graphics/01_sprite/FilledSprite.fire.23": "FILL Type: RADIAL",
  "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "This is Simple Sprite.",
  "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "This is Sliced Sprite.",
  "cases/01_graphics/01_sprite/TiledSprite.fire.6": "This is Tiled Sprite.",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "TRIMMED ",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "No TRIMMED",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": "Particle 1\n\"Auto Remove On Finish\" disabled",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": "Particle 2\n\"Auto Remove On Finish\" enabled",
  "cases/01_graphics/02_particle/ToggleParticle.fire.6": "Press \"Button\" to toggle particle play",
  "cases/02_ui/01_widget/AdvancedWidget.fire.7": "Top Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.14": "Top Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.21": "Top Right",
  "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.28": "Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.35": "Right",
  "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.42": "Bottom Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.49": "Bottom",
  "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.56": "Bottom Right",
  "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.63": "This is Advanced WIdget.",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne is false, It is always aligns",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne is true, It aligns only once",
  "cases/02_ui/01_widget/AnimatedWidget.fire.9": "This is Animation Widget.",
  "cases/02_ui/01_widget/AutoResize.fire.13": "This is Widget Auto Resize.",
  "cases/02_ui/01_widget/WidgetAlign.fire.18": "This is Widget Align.",
  "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
  "cases/02_ui/02_label/AlignFontLabel.fire.6": "Align Label",
  "cases/02_ui/02_label/AlignFontLabel.fire.9": "Horizontal Align",
  "cases/02_ui/02_label/AlignFontLabel.fire.14": "Hello! \nWelcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.16": "Align: LEFT",
  "cases/02_ui/02_label/AlignFontLabel.fire.21": "Hello! \nWelcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.23": "Align: CENTER",
  "cases/02_ui/02_label/AlignFontLabel.fire.28": "Hello! \nWelcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.30": "Align: RIGHT",
  "cases/02_ui/02_label/AlignFontLabel.fire.33": "Vertical Align",
  "cases/02_ui/02_label/AlignFontLabel.fire.38": "Welcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.40": "Align: TOP",
  "cases/02_ui/02_label/AlignFontLabel.fire.45": "Welcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.47": "Align: CENTER",
  "cases/02_ui/02_label/AlignFontLabel.fire.52": "Welcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.54": "Align: BOTTOM",
  "cases/02_ui/02_label/SystemFontLabel.fire.6": "System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.9": "Wrap",
  "cases/02_ui/02_label/SystemFontLabel.fire.14": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.21": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.26": "No Wrap",
  "cases/02_ui/02_label/SystemFontLabel.fire.31": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.38": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.45": "Hello! Welcome Come To Cocos Creator",
  "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
  "cases/02_ui/03_button/ButtonInScroll.js.1": "Top button clicked!",
  "cases/02_ui/03_button/ButtonInScroll.js.2": "Bottom button clicked!",
  "cases/02_ui/03_button/ButtonInScroll.fire.21": "Which button is clicked?",
  "cases/02_ui/03_button/ButtonInScroll.fire.27": "drag to reveal more buttons\n\n",
  "cases/02_ui/03_button/SimpleButton.js.1": "Left button clicked!",
  "cases/02_ui/03_button/SimpleButton.js.2": "Right button clicked!",
  "cases/02_ui/03_button/ButtonInteractable.fire.7": "PLAY",
  "cases/02_ui/03_button/ButtonInteractable.fire.16": "STOP",
  "cases/02_ui/03_button/ButtonInteractable.fire.21": "interactable: true",
  "cases/02_ui/03_button/ButtonInteractable.fire.23": "interactable: false",
  "cases/02_ui/03_button/ButtonInteractable.js.1": "interactable: ",
  "cases/02_ui/03_button/ButtonInteractable.js.2": "interactable: ",
  "cases/02_ui/03_button/SimpleButton.fire.6": "Which button is clicked?",
  "cases/02_ui/04_progressbar/progressbar.fire.7": "Horizontal bar with progress 0.3",
  "cases/02_ui/04_progressbar/progressbar.fire.11": "Horizontal bar reverse with progress 1.0",
  "cases/02_ui/04_progressbar/progressbar.fire.15": "Vertical bar \nfrom bottom",
  "cases/02_ui/04_progressbar/progressbar.fire.19": "Vertical bar \nfrom top",
  "cases/02_ui/04_progressbar/progressbar.fire.23": "Progress bar with sprite",
  "cases/02_ui/04_progressbar/progressbar.fire.28": "Progress bar with child sprite",
  "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
  "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
  "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview full functionality",
  "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview without inertia",
  "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview without elastic",
  "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview horizontal scroll only",
  "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview vertical only",
  "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview no scrollbar",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "Basic",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "Horizontal",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "Vertical",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "Grid Layout Axis horizontal",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "Grid Layout Axis vertical",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "Horizontal layout none",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "Vertical layout none",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "Grid start axis horizontal none",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "Grid start axis vertical none",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView with vertical  layout",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView with horizontal layout",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView with Grid Layout\nstart axis: horizontal ",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView with Grid Layout\nstart axis: vertical ",
  "cases/02_ui/06_layout/LayoutNone.fire.6": "Basic layout, Type: None\nResize container",
  "cases/02_ui/06_layout/LayoutNone.fire.35": "Horizontal layout None\nNo resize",
  "cases/02_ui/06_layout/LayoutNone.fire.60": "Vertical layout, Type: None\nNo resize",
  "cases/02_ui/06_layout/LayoutNone.fire.77": "Grid start axis: horizontal, Type: None\nNo resize",
  "cases/02_ui/06_layout/LayoutNone.fire.142": "Grid start axis: vertical, Type: None\nNo resize",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
  "cases/02_ui/07_editBox/editbox.js.1": "Enter Text: ",
  "cases/02_ui/07_editBox/EditBox.fire.25": "Single Line Password:",
  "cases/02_ui/07_editBox/EditBox.fire.27": "Single Line Text:",
  "cases/02_ui/07_editBox/EditBox.fire.29": "Mutiple Line Text:",
  "cases/02_ui/07_editBox/EditBox.fire.32": "Click",
  "cases/02_ui/07_editBox/EditBox.fire.38": "Button must be on top of EditBox, \nand it should enable click.",
  "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "Press 'A' or 'D' to control sheep",
  "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
  "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "Try touching anywhere.",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "The sample can only be effective on mobile platforms!",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21": "Use your fingers to zoom image!",
  "cases/03_gameplay/02_actions/SimpleAction.fire.13": "This is Simple Action.",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "This is Animate Custom Property.",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "Start the first animation",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "This is Animation Event.",
  "cases/03_gameplay/03_animation/AnimationEvent.js.1": "Start the",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "This is Move Animation.",
  "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "This is SprieFrame Animation.",
  "cases/03_gameplay/03_animation/CreateClip.fire.1": "Dynamic Creating AnimationClip",
  "cases/04_audio/SimpleAudio.fire.6": "Enjoy the music!",
  "cases/05_scripting/01_properties/NodeArray.fire.14": "This is Node Array.",
  "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.10": "This is Non Serialized.",
  "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
  "cases/05_scripting/01_properties/ReferenceType.fire.11": "This example does not include the runtime demonstration",
  "cases/05_scripting/01_properties/ValueType.fire.6": "This example does not include the runtime demonstration",
  "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "This is Instantiate Prefab.",
  "cases/05_scripting/03_events/EventInMask.fire.23": "Change order of nodes",
  "cases/05_scripting/03_events/SimpleEvent.fire.19": "Touch event can support click",
  "cases/05_scripting/03_events/SimpleEvent.fire.21": "Mouse event can support click, hover, wheel",
  "cases/05_scripting/03_events/SimpleEvent.fire.23": "Custom event can be triggered manually\n(Click button above)",
  "cases/05_scripting/03_events/SimpleEvent.fire.25": "This is Simple Event.",
  "cases/05_scripting/03_events/TouchPropagation.fire.15": "This is Touch Propagation.",
  "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.12": "Repeat Schedule",
  "cases/05_scripting/04_scheduler/scheduler.fire.18": "Cancel Schedules",
  "cases/05_scripting/04_scheduler/scheduler.fire.24": "Schedule Once",
  "cases/05_scripting/04_scheduler/scheduler.fire.29": "Counter use update function to change string value each frame",
  "cases/05_scripting/04_scheduler/scheduler.fire.31": "This is Scheduler.",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "This is Cross Reference.",
  "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "This is Life cycle.",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "Asset Loading",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "Load SpriteFrame",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "Load Texture",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "Load Audio",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "Load Txt",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "Load Font",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "Load Plist",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "Load Prefab",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "Load Scene",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "Load Animation",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "Load Spine",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "Not currently loaded Entity.",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "Loaded ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "Play ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "Create ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "Playing Music.",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "This is Font!",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "By Type",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "Load SpriteFrame",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "By Url",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "Load Prefab",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "LoadResDir",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "Load All",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "Load SpriteFrame All",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "Clear All",
  "cases/05_scripting/08_module/load_module.fire.6": "Load Module",
  "cases/05_scripting/08_module/load_module.fire.10": "Create Monster",
  "cases/05_scripting/09_singleton/Singleton.fire.6": "This example does not include the runtime demonstration",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "download complete!!",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "dowloading: ",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "click anywhere to download...",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "Loading Completed",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "Dowloading",
  "cases/05_scripting/11_network/NetworkCtrl.js.1": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.2": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.3": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.4": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\\nSend Binary WS was opened.",
  "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\\nResponse get.",
  "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\\nsendBinary Error was fired.",
  "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\\nwebsocket instance closed.",
  "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\\nSend Binary WS is waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\\n",
  "cases/05_scripting/11_network/network.fire.7": "Label",
  "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
  "cases/05_scripting/11_network/network.fire.11": "Label",
  "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
  "cases/05_scripting/11_network/network.fire.15": "Label",
  "cases/05_scripting/11_network/network.fire.14": "WebSocket",
  "cases/05_scripting/11_network/network.fire.19": "Label",
  "cases/05_scripting/11_network/network.fire.18": "SocketIO",
  "cases/native_call/native_call.fire.1": "JS to JAVA reflection only works Android mobile platform!",
  "cases/native_call/native_call.fire.2": "Click on the button calls the static method!",
  "cases/native_call/native_call.fire.3": "Click",
  "cases/collider/Category.fire.3": "Group: Collider",
  "cases/collider/Category.fire.5": "Group: Collider",
  "cases/collider/Category.fire.7": "Group: Collider",
  "cases/collider/Category.fire.9": "Group: Default",
  "cases/collider/Shape.fire.20": "Show Polygon",
  "cases/collider/Shape.fire.27": "Show Circle",
  "cases/collider/Shape.fire.34": "Show Box",
  "cases/collider/Shape.fire.43": "Show Polygon",
  "cases/collider/Shape.fire.50": "Show Circle",
  "cases/collider/Shape.fire.57": "Show Box",
  "cases/motionStreak/MotionStreak.fire.1": "Change MotionStreak",
  "cases/spine/SpineBoy.fire.11": "Debug Slots",
  "cases/spine/SpineBoy.fire.18": "Debug Bones",
  "cases/spine/SpineBoy.fire.25": "Time Scale",
  "cases/spine/SpineBoy.fire.36": "Stop",
  "cases/spine/SpineBoy.fire.43": "Walk",
  "cases/spine/SpineBoy.fire.50": "Run",
  "cases/spine/SpineBoy.fire.58": "Jump",
  "cases/spine/SpineBoy.fire.65": "Shoot",
  "cases/tiledmap/Puzzle.fire.18": "You Win",
  "cases/tiledmap/Puzzle.fire.21": "Restart",
  "res/prefabs/ListItem.prefab.2": "Label ssss",
  "res/prefabs/Monster.prefab.3": "Name:",
  "res/prefabs/Monster.prefab.11": "Level :",
  "res/prefabs/Monster.prefab.19": "Hp :",
  "res/prefabs/Monster.prefab.27": "Attack :",
  "res/prefabs/Monster.prefab.35": "Defense :",
  "res/prefabs/loadItem.prefab.1": "Label",
  "resources/test assets/prefab.prefab.2": "This is Prefab",
  "resources/test assets/scene.fire.3": "Return Asset Loading Scene",
  "resources/test assets/scene.fire.6": "Return",
  "scripts/Global/Menu.js.1": "Temporary lack of introduction",
  "cases/anysdk/1": "Only works in the Android or iOS or Web-Mobile platforms",
  "cases/anysdk/2": "Only works in the Android or iOS platforms"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pMThuL2RhdGEvZW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2YsK0NBQStDLG1FQURoQztFQUVmLHdDQUF3Qyx3REFGekI7RUFHZix1Q0FBdUMsOENBSHhCO0VBSWYsMkNBQTJDLHlDQUo1QjtFQUtmLG1DQUFtQywyQ0FMcEI7RUFNZixvQ0FBb0MsaURBTnJCO0VBT2YsNENBQTRDLHdEQVA3QjtFQVFmLDJDQUEyQyx3REFSNUI7RUFTZiw0Q0FBNEMsc0VBVDdCO0VBVWYsb0JBQW9CLFdBVkw7RUFXZixvQkFBb0IsWUFYTDtFQVlmLGtEQUFrRCx3QkFabkM7RUFhZixtREFBbUQsNEJBYnBDO0VBY2YsbURBQW1ELHVCQWRwQztFQWVmLG9EQUFvRCxxQkFmckM7RUFnQmYsb0RBQW9ELG1CQWhCckM7RUFpQmYsbURBQW1ELHdCQWpCcEM7RUFrQmYsbURBQW1ELHdCQWxCcEM7RUFtQmYsa0RBQWtELHVCQW5CbkM7RUFvQmYsb0RBQW9ELFVBcEJyQztFQXFCZixxREFBcUQsWUFyQnRDO0VBc0JmLDJEQUEyRCxnREF0QjVDO0VBdUJmLDREQUE0RCwrQ0F2QjdDO0VBd0JmLHVEQUF1RCwwQ0F4QnhDO0VBeUJmLCtDQUErQyxVQXpCaEM7RUEwQmYsK0NBQStDLG1CQTFCaEM7RUEyQmYsZ0RBQWdELFVBM0JqQztFQTRCZixnREFBZ0QsWUE1QmpDO0VBNkJmLGdEQUFnRCxXQTdCakM7RUE4QmYsZ0RBQWdELG9CQTlCakM7RUErQmYsZ0RBQWdELE1BL0JqQztFQWdDZixnREFBZ0QsYUFoQ2pDO0VBaUNmLGdEQUFnRCxPQWpDakM7RUFrQ2YsZ0RBQWdELGNBbENqQztFQW1DZixnREFBZ0QsYUFuQ2pDO0VBb0NmLGdEQUFnRCxzQkFwQ2pDO0VBcUNmLGdEQUFnRCxRQXJDakM7RUFzQ2YsZ0RBQWdELGVBdENqQztFQXVDZixnREFBZ0QsY0F2Q2pDO0VBd0NmLGdEQUFnRCxxQkF4Q2pDO0VBeUNmLGdEQUFnRCwwQkF6Q2pDO0VBMENmLGdEQUFnRCx3Q0ExQ2pDO0VBMkNmLGdEQUFnRCx1Q0EzQ2pDO0VBNENmLCtDQUErQywyQkE1Q2hDO0VBNkNmLDRDQUE0Qyw2QkE3QzdCO0VBOENmLDZDQUE2Qyx1QkE5QzlCO0VBK0NmLDhDQUE4QyxHQS9DL0I7RUFnRGYsOENBQThDLGFBaEQvQjtFQWlEZiw4Q0FBOEMsa0JBakQvQjtFQWtEZiwrQ0FBK0MsMENBbERoQztFQW1EZiwrQ0FBK0MsYUFuRGhDO0VBb0RmLCtDQUErQywwQ0FwRGhDO0VBcURmLCtDQUErQyxlQXJEaEM7RUFzRGYsK0NBQStDLDBDQXREaEM7RUF1RGYsK0NBQStDLGNBdkRoQztFQXdEZiwrQ0FBK0MsZ0JBeERoQztFQXlEZiwrQ0FBK0MsaUNBekRoQztFQTBEZiwrQ0FBK0MsWUExRGhDO0VBMkRmLCtDQUErQyxpQ0EzRGhDO0VBNERmLCtDQUErQyxlQTVEaEM7RUE2RGYsK0NBQStDLGlDQTdEaEM7RUE4RGYsK0NBQStDLGVBOURoQztFQStEZiwrQ0FBK0MsYUEvRGhDO0VBZ0VmLCtDQUErQyxNQWhFaEM7RUFpRWYsZ0RBQWdELHFCQWpFakM7RUFrRWYsZ0RBQWdELGlCQWxFakM7RUFtRWYsZ0RBQWdELHFCQW5FakM7RUFvRWYsZ0RBQWdELGtCQXBFakM7RUFxRWYsZ0RBQWdELFNBckVqQztFQXNFZixnREFBZ0QscUJBdEVqQztFQXVFZixnREFBZ0QsaUJBdkVqQztFQXdFZixnREFBZ0QscUJBeEVqQztFQXlFZixnREFBZ0Qsa0JBekVqQztFQTBFZixnREFBZ0Qsc0NBMUVqQztFQTJFZixnREFBZ0QseUJBM0VqQztFQTRFZiw2Q0FBNkMscUJBNUU5QjtFQTZFZiw2Q0FBNkMsd0JBN0U5QjtFQThFZixnREFBZ0QsMEJBOUVqQztFQStFZixnREFBZ0QsaUNBL0VqQztFQWdGZiwyQ0FBMkMsc0JBaEY1QjtFQWlGZiwyQ0FBMkMsdUJBakY1QjtFQWtGZixtREFBbUQsTUFsRnBDO0VBbUZmLG9EQUFvRCxNQW5GckM7RUFvRmYsb0RBQW9ELG9CQXBGckM7RUFxRmYsb0RBQW9ELHFCQXJGckM7RUFzRmYsaURBQWlELGdCQXRGbEM7RUF1RmYsaURBQWlELGdCQXZGbEM7RUF3RmYsNkNBQTZDLDBCQXhGOUI7RUF5RmYsaURBQWlELGtDQXpGbEM7RUEwRmYsa0RBQWtELDBDQTFGbkM7RUEyRmYsa0RBQWtELDRCQTNGbkM7RUE0RmYsa0RBQWtELHlCQTVGbkM7RUE2RmYsa0RBQWtELDBCQTdGbkM7RUE4RmYsa0RBQWtELGdDQTlGbkM7RUErRmYsdUNBQXVDLE9BL0Z4QjtFQWdHZiw4Q0FBOEMsVUFoRy9CO0VBaUdmLCtDQUErQywrQkFqR2hDO0VBa0dmLGdEQUFnRCw0QkFsR2pDO0VBbUdmLGdEQUFnRCw0QkFuR2pDO0VBb0dmLGdEQUFnRCxtQ0FwR2pDO0VBcUdmLGdEQUFnRCwwQkFyR2pDO0VBc0dmLGlEQUFpRCx5QkF0R2xDO0VBdUdmLHNEQUFzRCxPQXZHdkM7RUF3R2YsdURBQXVELFlBeEd4QztFQXlHZix1REFBdUQsVUF6R3hDO0VBMEdmLHVEQUF1RCw2QkExR3hDO0VBMkdmLHVEQUF1RCwyQkEzR3hDO0VBNEdmLHFEQUFxRCx3QkE1R3RDO0VBNkdmLHNEQUFzRCxzQkE3R3ZDO0VBOEdmLHNEQUFzRCxpQ0E5R3ZDO0VBK0dmLHNEQUFzRCwrQkEvR3ZDO0VBZ0hmLG1EQUFtRCxrQ0FoSHBDO0VBaUhmLG9EQUFvRCxtQ0FqSHJDO0VBa0hmLG9EQUFvRCxzREFsSHJDO0VBbUhmLHFEQUFxRCxvREFuSHRDO0VBb0hmLDJDQUEyQyw0Q0FwSDVCO0VBcUhmLDRDQUE0QyxtQ0FySDdCO0VBc0hmLDRDQUE0Qyx3Q0F0SDdCO0VBdUhmLDRDQUE0QyxvREF2SDdCO0VBd0hmLDZDQUE2QyxrREF4SDlCO0VBeUhmLCtEQUErRCxVQXpIaEQ7RUEwSGYsZ0VBQWdFLGNBMUhqRDtFQTJIZixnRUFBZ0UsY0EzSGpEO0VBNEhmLHVDQUF1QyxjQTVIeEI7RUE2SGYsMENBQTBDLHVCQTdIM0I7RUE4SGYsMENBQTBDLG1CQTlIM0I7RUErSGYsMENBQTBDLG9CQS9IM0I7RUFnSWYsMENBQTBDLE9BaEkzQjtFQWlJZiwwQ0FBMEMsaUVBakkzQjtFQWtJZix5RUFBeUUsbUNBbEkxRDtFQW1JZiwyREFBMkQsU0FuSTVDO0VBb0lmLCtEQUErRCx3QkFwSWhEO0VBcUlmLG9FQUFvRSx1REFySXJEO0VBc0lmLG9FQUFvRSxpQ0F0SXJEO0VBdUlmLHFEQUFxRCx3QkF2SXRDO0VBd0lmLGdFQUFnRSxPQXhJakQ7RUF5SWYsZ0VBQWdFLGtDQXpJakQ7RUEwSWYsd0RBQXdELDJCQTFJekM7RUEySWYseURBQXlELDBCQTNJMUM7RUE0SWYsc0RBQXNELFdBNUl2QztFQTZJZix3REFBd0QsUUE3SXpDO0VBOElmLHdEQUF3RCxjQTlJekM7RUErSWYsd0RBQXdELGVBL0l6QztFQWdKZix3REFBd0Qsa0JBaEp6QztFQWlKZix3REFBd0QsY0FqSnpDO0VBa0pmLHdEQUF3RCx5QkFsSnpDO0VBbUpmLHlEQUF5RCwrQkFuSjFDO0VBb0pmLG9EQUFvRCxnQ0FwSnJDO0VBcUpmLHFDQUFxQyxrQkFySnRCO0VBc0pmLHNEQUFzRCxxQkF0SnZDO0VBdUpmLHlEQUF5RCxPQXZKMUM7RUF3SmYseURBQXlELE9BeEoxQztFQXlKZiwwREFBMEQseUJBekozQztFQTBKZix5REFBeUQsT0ExSjFDO0VBMkpmLDBEQUEwRCx5REEzSjNDO0VBNEpmLHFEQUFxRCx5REE1SnRDO0VBNkpmLHlEQUF5RCw2QkE3SjFDO0VBOEpmLG9EQUFvRCx1QkE5SnJDO0VBK0pmLG9EQUFvRCwrQkEvSnJDO0VBZ0tmLG9EQUFvRCw2Q0FoS3JDO0VBaUtmLG9EQUFvRCw4REFqS3JDO0VBa0tmLG9EQUFvRCx1QkFsS3JDO0VBbUtmLHlEQUF5RCw0QkFuSzFDO0VBb0tmLDBEQUEwRCxRQXBLM0M7RUFxS2Ysb0RBQW9ELFFBcktyQztFQXNLZixxREFBcUQsaUJBdEt0QztFQXVLZixxREFBcUQsa0JBdkt0QztFQXdLZixxREFBcUQsZUF4S3RDO0VBeUtmLHFEQUFxRCwrREF6S3RDO0VBMEtmLHFEQUFxRCxvQkExS3RDO0VBMktmLCtEQUErRCxPQTNLaEQ7RUE0S2YsZ0VBQWdFLE9BNUtqRDtFQTZLZixnRUFBZ0UsMEJBN0tqRDtFQThLZixzREFBc0QscUJBOUt2QztFQStLZiwyREFBMkQsZUEvSzVDO0VBZ0xmLDJEQUEyRCxrQkFoTDVDO0VBaUxmLDREQUE0RCxjQWpMN0M7RUFrTGYsNERBQTRELFlBbEw3QztFQW1MZiw0REFBNEQsVUFuTDdDO0VBb0xmLDREQUE0RCxXQXBMN0M7RUFxTGYsNERBQTRELFlBckw3QztFQXNMZiw0REFBNEQsYUF0TDdDO0VBdUxmLDREQUE0RCxZQXZMN0M7RUF3TGYsNERBQTRELGdCQXhMN0M7RUF5TGYsNERBQTRELFlBekw3QztFQTBMZiw0REFBNEQsOEJBMUw3QztFQTJMZix5REFBeUQsU0EzTDFDO0VBNExmLHlEQUF5RCxPQTVMMUM7RUE2TGYseURBQXlELFNBN0wxQztFQThMZix5REFBeUQsZ0JBOUwxQztFQStMZix5REFBeUQsZUEvTDFDO0VBZ01mLHNEQUFzRCxTQWhNdkM7RUFpTWYsdURBQXVELGtCQWpNeEM7RUFrTWYsdURBQXVELFFBbE14QztFQW1NZix1REFBdUQsYUFuTXhDO0VBb01mLHlEQUF5RCxZQXBNMUM7RUFxTWYsMERBQTBELFVBck0zQztFQXNNZiwwREFBMEQsc0JBdE0zQztFQXVNZiwwREFBMEQsV0F2TTNDO0VBd01mLG1EQUFtRCxhQXhNcEM7RUF5TWYsb0RBQW9ELGdCQXpNckM7RUEwTWYsb0RBQW9ELHlEQTFNckM7RUEyTWYsd0RBQXdELHFCQTNNekM7RUE0TWYsd0RBQXdELGNBNU16QztFQTZNZix3REFBd0QsK0JBN016QztFQThNZixzREFBc0QsbUJBOU12QztFQStNZix1REFBdUQsWUEvTXhDO0VBZ05mLGtEQUFrRCxZQWhObkM7RUFpTmYsa0RBQWtELFlBak5uQztFQWtOZixrREFBa0QsWUFsTm5DO0VBbU5mLGtEQUFrRCxZQW5ObkM7RUFvTmYsa0RBQWtELHdDQXBObkM7RUFxTmYsa0RBQWtELDJCQXJObkM7RUFzTmYsa0RBQWtELHlDQXRObkM7RUF1TmYsa0RBQWtELHdDQXZObkM7RUF3TmYsa0RBQWtELDBDQXhObkM7RUF5TmYsbURBQW1ELGNBek5wQztFQTBOZixtREFBbUQsYUExTnBDO0VBMk5mLG1EQUFtRCxhQTNOcEM7RUE0TmYsbURBQW1ELGFBNU5wQztFQTZOZixtREFBbUQsYUE3TnBDO0VBOE5mLGdEQUFnRCxPQTlOakM7RUErTmYsZ0RBQWdELGdCQS9OakM7RUFnT2YsaURBQWlELE9BaE9sQztFQWlPZixpREFBaUQsOEJBak9sQztFQWtPZixpREFBaUQsT0FsT2xDO0VBbU9mLGlEQUFpRCxXQW5PbEM7RUFvT2YsaURBQWlELE9BcE9sQztFQXFPZixpREFBaUQsVUFyT2xDO0VBc09mLHdDQUF3QywyREF0T3pCO0VBdU9mLHdDQUF3Qyw4Q0F2T3pCO0VBd09mLHdDQUF3QyxPQXhPekI7RUF5T2Ysa0NBQWtDLGlCQXpPbkI7RUEwT2Ysa0NBQWtDLGlCQTFPbkI7RUEyT2Ysa0NBQWtDLGlCQTNPbkI7RUE0T2Ysa0NBQWtDLGdCQTVPbkI7RUE2T2YsZ0NBQWdDLGNBN09qQjtFQThPZixnQ0FBZ0MsYUE5T2pCO0VBK09mLGdDQUFnQyxVQS9PakI7RUFnUGYsZ0NBQWdDLGNBaFBqQjtFQWlQZixnQ0FBZ0MsYUFqUGpCO0VBa1BmLGdDQUFnQyxVQWxQakI7RUFtUGYsMENBQTBDLHFCQW5QM0I7RUFvUGYsZ0NBQWdDLGFBcFBqQjtFQXFQZixnQ0FBZ0MsYUFyUGpCO0VBc1BmLGdDQUFnQyxZQXRQakI7RUF1UGYsZ0NBQWdDLE1BdlBqQjtFQXdQZixnQ0FBZ0MsTUF4UGpCO0VBeVBmLGdDQUFnQyxLQXpQakI7RUEwUGYsZ0NBQWdDLE1BMVBqQjtFQTJQZixnQ0FBZ0MsT0EzUGpCO0VBNFBmLGlDQUFpQyxTQTVQbEI7RUE2UGYsaUNBQWlDLFNBN1BsQjtFQThQZixpQ0FBaUMsWUE5UGxCO0VBK1BmLGdDQUFnQyxPQS9QakI7RUFnUWYsaUNBQWlDLFNBaFFsQjtFQWlRZixpQ0FBaUMsTUFqUWxCO0VBa1FmLGlDQUFpQyxVQWxRbEI7RUFtUWYsaUNBQWlDLFdBblFsQjtFQW9RZixpQ0FBaUMsT0FwUWxCO0VBcVFmLHlDQUF5QyxnQkFyUTFCO0VBc1FmLHNDQUFzQyw0QkF0UXZCO0VBdVFmLHNDQUFzQyxRQXZRdkI7RUF3UWYsNEJBQTRCLGdDQXhRYjtFQXlRZixrQkFBa0IsMERBelFIO0VBMFFmLGtCQUFrQjtBQTFRSCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfbmF0aXZlX2Rlc2t0b3BfdGlwc1wiOiBcIlRoZSBleGFtcGxlIGNhc2Ugbm9uc3VwcG9ydCB0aGUgTWFjIHBsYXRmb3JtIGFuZCBXaW5kb3dzIHBsYXRmb3JtXCIsXG4gIFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfcnVudGltZV90aXBzXCI6IFwiVGhlIGV4YW1wbGUgY2FzZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBydW50aW1lIHBsYXRmb3JtXCIsXG4gIFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfbW9iaWxlX3RpcHNcIjogXCJUaGUgZXhhbXBsZSBjYXNlIG5vbnN1cHBvcnQgbW9iaWxlIHBsYXRmb3Jtc1wiLFxuICBcImV4YW1wbGVfY2FzZV9ub25zdXBwb3J0X3dlYl9jYW52YXNfdGlwc1wiOiBcIlRoZSBleGFtcGxlIGNhc2Ugbm9uc3VwcG9ydCBDYW52YXMgbW9kZVwiLFxuICBcImV4YW1wbGVfY2FzZV9zdXBwb3J0X3dlYkdsX3RpcHNcIjogXCJUaGUgZXhhbXBsZSBjYXNlIG9ubHkgc3VwcG9ydHMgV2ViR0wgbW9kZVwiLFxuICBcImV4YW1wbGVfY2FzZV9zdXBwb3J0X21vYmlsZV90aXBzXCI6IFwiVGhlIGV4YW1wbGUgY2FzZSBvbmx5IHN1cHBvcnRzIG1vYmlsZSBwbGF0Zm9ybXNcIixcbiAgXCJleGFtcGxlX2Nhc2Vfc3VwcG9ydF9tb2JpbGVfYW5kcm9pZF90aXBzXCI6IFwiVGhlIGV4YW1wbGUgY2FzZSBvbmx5IHN1cHBvcnRzIEFuZHJvaWQgbW9iaWxlIHBsYXRmb3JtXCIsXG4gIFwiZXhhbXBsZV9jYXNlX3N1cHBvcnRfbmF0aXZlX2Nocm9tZV90aXBzXCI6IFwiVGhlIGV4YW1wbGUgY2FzZSBvbmx5IHN1cHBvcnRzIENocm9tZSBicm93c2VyIChOYXRpdmUpXCIsXG4gIFwiZXhhbXBsZV9jYXNlX3N1cHBvcnRfbmF0aXZlX2Rlc2t0b3BfdGlwc1wiOiBcIlRoZSBleGFtcGxlIGNhc2Ugb25seSBzdXBwb3J0cyB0aGUgTWFjIHBsYXRmb3JtIGFuZCBXaW5kb3dzIHBsYXRmb3JtXCIsXG4gIFwiVGVzdExpc3QuZmlyZS4zMFwiOiBcIkJhY2sgbGlzdFwiLFxuICBcIlRlc3RMaXN0LmZpcmUuMzdcIjogXCJWaWV3IGludHJvXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL0F0bGFzU3ByaXRlLmZpcmUuN1wiOiBcIlRoaXMgaXMgU3BpcnRlIFNpbmdsZS5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvQXRsYXNTcHJpdGUuZmlyZS4xMVwiOiBcIlRoaXMgaXMgU3BpcnRlIEZyb20gQXRsYXMuXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL0ZpbGxlZFNwcml0ZS5maXJlLjlcIjogXCJGaWxsIFR5cGU6IEhPUklaT05UQUxcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvRmlsbGVkU3ByaXRlLmZpcmUuMTVcIjogXCJGaWxsIFR5cGU6IFZFUlRJQ0FMXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL0ZpbGxlZFNwcml0ZS5maXJlLjIzXCI6IFwiRklMTCBUeXBlOiBSQURJQUxcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvU2ltcGxlU3ByaXRlLmZpcmUuN1wiOiBcIlRoaXMgaXMgU2ltcGxlIFNwcml0ZS5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvU2xpY2VkU3ByaXRlLmZpcmUuN1wiOiBcIlRoaXMgaXMgU2xpY2VkIFNwcml0ZS5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVGlsZWRTcHJpdGUuZmlyZS42XCI6IFwiVGhpcyBpcyBUaWxlZCBTcHJpdGUuXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL1RyaW1tZWRTcHJpdGUuZmlyZS43XCI6IFwiVFJJTU1FRCBcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVHJpbW1lZFNwcml0ZS5maXJlLjEyXCI6IFwiTm8gVFJJTU1FRFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAyX3BhcnRpY2xlL0F1dG9SZW1vdmVQYXJ0aWNsZS5maXJlLjlcIjogXCJQYXJ0aWNsZSAxXFxuXFxcIkF1dG8gUmVtb3ZlIE9uIEZpbmlzaFxcXCIgZGlzYWJsZWRcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9BdXRvUmVtb3ZlUGFydGljbGUuZmlyZS4xM1wiOiBcIlBhcnRpY2xlIDJcXG5cXFwiQXV0byBSZW1vdmUgT24gRmluaXNoXFxcIiBlbmFibGVkXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDJfcGFydGljbGUvVG9nZ2xlUGFydGljbGUuZmlyZS42XCI6IFwiUHJlc3MgXFxcIkJ1dHRvblxcXCIgdG8gdG9nZ2xlIHBhcnRpY2xlIHBsYXlcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS43XCI6IFwiVG9wIExlZnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS45XCI6IFwidG9wOiAxMCUgbGVmdDogNiVcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4xNFwiOiBcIlRvcCBMZWZ0XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMTZcIjogXCJ0b3A6IC0zNHB4XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMjFcIjogXCJUb3AgUmlnaHRcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4yM1wiOiBcInRvcDogMTAlIHJpZ2h0OiA2JVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjI4XCI6IFwiTGVmdFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjMwXCI6IFwibGVmdDogLTUwcHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4zNVwiOiBcIlJpZ2h0XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMzdcIjogXCJyaWdodDogLTUwcHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS40MlwiOiBcIkJvdHRvbSBMZWZ0XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNDRcIjogXCJib3R0b206IDEwJSBsZWZ0OiA2JVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjQ5XCI6IFwiQm90dG9tXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNTFcIjogXCJib3R0b206IC0zNHB4XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNTZcIjogXCJCb3R0b20gUmlnaHRcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41OFwiOiBcImJvdHRvbToxMCUgcmlnaHQ6NiVcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS42M1wiOiBcIlRoaXMgaXMgQWR2YW5jZWQgV0lkZ2V0LlwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BbGlnbk9uY2VXaWRnZXQuZmlyZS4xXCI6IFwiQWxpZ25PbmUgaXMgZmFsc2UsIEl0IGlzIGFsd2F5cyBhbGlnbnNcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWxpZ25PbmNlV2lkZ2V0LmZpcmUuMlwiOiBcIkFsaWduT25lIGlzIHRydWUsIEl0IGFsaWducyBvbmx5IG9uY2VcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQW5pbWF0ZWRXaWRnZXQuZmlyZS45XCI6IFwiVGhpcyBpcyBBbmltYXRpb24gV2lkZ2V0LlwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BdXRvUmVzaXplLmZpcmUuMTNcIjogXCJUaGlzIGlzIFdpZGdldCBBdXRvIFJlc2l6ZS5cIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvV2lkZ2V0QWxpZ24uZmlyZS4xOFwiOiBcIlRoaXMgaXMgV2lkZ2V0IEFsaWduLlwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0dvbGRCZWF0aW5nQW5pbWUuanMuMVwiOiBcIjBcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjZcIjogXCJBbGlnbiBMYWJlbFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuOVwiOiBcIkhvcml6b250YWwgQWxpZ25cIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjE0XCI6IFwiSGVsbG8hIFxcbldlbGNvbWUgQ29tZSBUbyBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4xNlwiOiBcIkFsaWduOiBMRUZUXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yMVwiOiBcIkhlbGxvISBcXG5XZWxjb21lIENvbWUgVG8gXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMjNcIjogXCJBbGlnbjogQ0VOVEVSXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yOFwiOiBcIkhlbGxvISBcXG5XZWxjb21lIENvbWUgVG8gXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMzBcIjogXCJBbGlnbjogUklHSFRcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjMzXCI6IFwiVmVydGljYWwgQWxpZ25cIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjM4XCI6IFwiV2VsY29tZSBDb21lIFRvIFxcbkNvY29zIENyZWF0b3JcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjQwXCI6IFwiQWxpZ246IFRPUFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDVcIjogXCJXZWxjb21lIENvbWUgVG8gXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDdcIjogXCJBbGlnbjogQ0VOVEVSXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS41MlwiOiBcIldlbGNvbWUgQ29tZSBUbyBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS41NFwiOiBcIkFsaWduOiBCT1RUT01cIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS42XCI6IFwiU3lzdGVtIEZvbnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS45XCI6IFwiV3JhcFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjE0XCI6IFwiVGhpcyBpcyBTeXN0ZW0gRm9udFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjE2XCI6IFwiT3ZlcmZsb3c6IENMQU1QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjFcIjogXCJUaGlzIGlzIFN5c3RlbSBGb250XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjNcIjogXCJPdmVyZmxvdzogU0hSSU5LXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjZcIjogXCJObyBXcmFwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMzFcIjogXCJUaGlzIGlzIFN5c3RlbSBGb250XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMzNcIjogXCJPdmVyZmxvdzogQ0xBTVBcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4zOFwiOiBcIlRoaXMgaXMgU3lzdGVtIEZvbnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40MFwiOiBcIk92ZXJmbG93OiBTSFJJTktcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40NVwiOiBcIkhlbGxvISBXZWxjb21lIENvbWUgVG8gQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjQ3XCI6IFwiT3ZlcmZsb3c6IFJFU1pJRV9IRUlHSFRcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW5TY3JvbGwuanMuMVwiOiBcIlRvcCBidXR0b24gY2xpY2tlZCFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW5TY3JvbGwuanMuMlwiOiBcIkJvdHRvbSBidXR0b24gY2xpY2tlZCFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW5TY3JvbGwuZmlyZS4yMVwiOiBcIldoaWNoIGJ1dHRvbiBpcyBjbGlja2VkP1wiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5maXJlLjI3XCI6IFwiZHJhZyB0byByZXZlYWwgbW9yZSBidXR0b25zXFxuXFxuXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL1NpbXBsZUJ1dHRvbi5qcy4xXCI6IFwiTGVmdCBidXR0b24gY2xpY2tlZCFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjJcIjogXCJSaWdodCBidXR0b24gY2xpY2tlZCFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmZpcmUuN1wiOiBcIlBMQVlcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmZpcmUuMTZcIjogXCJTVE9QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5maXJlLjIxXCI6IFwiaW50ZXJhY3RhYmxlOiB0cnVlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5maXJlLjIzXCI6IFwiaW50ZXJhY3RhYmxlOiBmYWxzZVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuanMuMVwiOiBcImludGVyYWN0YWJsZTogXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5qcy4yXCI6IFwiaW50ZXJhY3RhYmxlOiBcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmZpcmUuNlwiOiBcIldoaWNoIGJ1dHRvbiBpcyBjbGlja2VkP1wiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuN1wiOiBcIkhvcml6b250YWwgYmFyIHdpdGggcHJvZ3Jlc3MgMC4zXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4xMVwiOiBcIkhvcml6b250YWwgYmFyIHJldmVyc2Ugd2l0aCBwcm9ncmVzcyAxLjBcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjE1XCI6IFwiVmVydGljYWwgYmFyIFxcbmZyb20gYm90dG9tXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4xOVwiOiBcIlZlcnRpY2FsIGJhciBcXG5mcm9tIHRvcFwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMjNcIjogXCJQcm9ncmVzcyBiYXIgd2l0aCBzcHJpdGVcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjI4XCI6IFwiUHJvZ3Jlc3MgYmFyIHdpdGggY2hpbGQgc3ByaXRlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9JdGVtLmpzLjFcIjogXCJUbXBsI1wiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvTGlzdFZpZXcuZmlyZS4yM1wiOiBcIkl0ZW0gIzAwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuN1wiOiBcIlNjcm9sbHZpZXcgZnVsbCBmdW5jdGlvbmFsaXR5XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuMzBcIjogXCJTY3JvbGx2aWV3IHdpdGhvdXQgaW5lcnRpYVwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjUzXCI6IFwiU2Nyb2xsdmlldyB3aXRob3V0IGVsYXN0aWNcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS43NlwiOiBcIlNjcm9sbHZpZXcgaG9yaXpvbnRhbCBzY3JvbGwgb25seVwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjkzXCI6IFwiU2Nyb2xsdmlldyB2ZXJ0aWNhbCBvbmx5XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuMTEwXCI6IFwiU2Nyb2xsdmlldyBubyBzY3JvbGxiYXJcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNlwiOiBcIkJhc2ljXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNvbnRhaW5lci5maXJlLjMxXCI6IFwiSG9yaXpvbnRhbFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDb250YWluZXIuZmlyZS4zNlwiOiBcIlZlcnRpY2FsXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNvbnRhaW5lci5maXJlLjQxXCI6IFwiR3JpZCBMYXlvdXQgQXhpcyBob3Jpem9udGFsXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNvbnRhaW5lci5maXJlLjQ2XCI6IFwiR3JpZCBMYXlvdXQgQXhpcyB2ZXJ0aWNhbFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDaGlsZHJlbi5maXJlLjZcIjogXCJIb3Jpem9udGFsIGxheW91dCBub25lXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNoaWxkcmVuLmZpcmUuMzFcIjogXCJWZXJ0aWNhbCBsYXlvdXQgbm9uZVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDaGlsZHJlbi5maXJlLjQ4XCI6IFwiR3JpZCBzdGFydCBheGlzIGhvcml6b250YWwgbm9uZVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDaGlsZHJlbi5maXJlLjg1XCI6IFwiR3JpZCBzdGFydCBheGlzIHZlcnRpY2FsIG5vbmVcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0SW5TY3JvbGxWaWV3LmZpcmUuNlwiOiBcIlNjcm9sbFZpZXcgd2l0aCB2ZXJ0aWNhbCAgbGF5b3V0XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dEluU2Nyb2xsVmlldy5maXJlLjQwXCI6IFwiU2Nyb2xsVmlldyB3aXRoIGhvcml6b250YWwgbGF5b3V0XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dEluU2Nyb2xsVmlldy5maXJlLjc0XCI6IFwiU2Nyb2xsVmlldyB3aXRoIEdyaWQgTGF5b3V0XFxuc3RhcnQgYXhpczogaG9yaXpvbnRhbCBcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0SW5TY3JvbGxWaWV3LmZpcmUuMTQ0XCI6IFwiU2Nyb2xsVmlldyB3aXRoIEdyaWQgTGF5b3V0XFxuc3RhcnQgYXhpczogdmVydGljYWwgXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS42XCI6IFwiQmFzaWMgbGF5b3V0LCBUeXBlOiBOb25lXFxuUmVzaXplIGNvbnRhaW5lclwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuMzVcIjogXCJIb3Jpem9udGFsIGxheW91dCBOb25lXFxuTm8gcmVzaXplXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS42MFwiOiBcIlZlcnRpY2FsIGxheW91dCwgVHlwZTogTm9uZVxcbk5vIHJlc2l6ZVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuNzdcIjogXCJHcmlkIHN0YXJ0IGF4aXM6IGhvcml6b250YWwsIFR5cGU6IE5vbmVcXG5ObyByZXNpemVcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0Tm9uZS5maXJlLjE0MlwiOiBcIkdyaWQgc3RhcnQgYXhpczogdmVydGljYWwsIFR5cGU6IE5vbmVcXG5ObyByZXNpemVcIixcbiAgXCJjYXNlcy8wMl91aS8wN19jaGFuZ2VfY2FudmFzX2FuY2hvci9Cb3R0b21MZWZ0QW5jaG9yLmZpcmUuOFwiOiBcIng6MCwgeTowXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfY2hhbmdlX2NhbnZhc19hbmNob3IvQm90dG9tTGVmdEFuY2hvci5maXJlLjEyXCI6IFwieDo0ODAsIHk6MzIwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfY2hhbmdlX2NhbnZhc19hbmNob3IvQm90dG9tTGVmdEFuY2hvci5maXJlLjE2XCI6IFwieDo5NjAsIHk6NjQwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfZWRpdEJveC9lZGl0Ym94LmpzLjFcIjogXCJFbnRlciBUZXh0OiBcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yNVwiOiBcIlNpbmdsZSBMaW5lIFBhc3N3b3JkOlwiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjI3XCI6IFwiU2luZ2xlIExpbmUgVGV4dDpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yOVwiOiBcIk11dGlwbGUgTGluZSBUZXh0OlwiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjMyXCI6IFwiQ2xpY2tcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4zOFwiOiBcIkJ1dHRvbiBtdXN0IGJlIG9uIHRvcCBvZiBFZGl0Qm94LCBcXG5hbmQgaXQgc2hvdWxkIGVuYWJsZSBjbGljay5cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9FdmVudE1hbmFnZXIvS2V5Ym9hcmRJbnB1dC5maXJlLjZcIjogXCJQcmVzcyAnQScgb3IgJ0QnIHRvIGNvbnRyb2wgc2hlZXBcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9Pbi9PblRvdWNoQ3RybC5qcy4xXCI6IFwidG91Y2ggKFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uVG91Y2hJbnB1dC5maXJlLjEwXCI6IFwiVHJ5IHRvdWNoaW5nIGFueXdoZXJlLlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uTXVsdGlUb3VjaElucHV0LmZpcmUuMjBcIjogXCJUaGUgc2FtcGxlIGNhbiBvbmx5IGJlIGVmZmVjdGl2ZSBvbiBtb2JpbGUgcGxhdGZvcm1zIVwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uTXVsdGlUb3VjaElucHV0LmZpcmUuMjFcIjogXCJVc2UgeW91ciBmaW5nZXJzIHRvIHpvb20gaW1hZ2UhXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDJfYWN0aW9ucy9TaW1wbGVBY3Rpb24uZmlyZS4xM1wiOiBcIlRoaXMgaXMgU2ltcGxlIEFjdGlvbi5cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0ZUN1c3RvbVByb3BlcnR5LmZpcmUuMTRcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRlQ3VzdG9tUHJvcGVydHkuZmlyZS4xOFwiOiBcIlRoaXMgaXMgQW5pbWF0ZSBDdXN0b20gUHJvcGVydHkuXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGlvbkV2ZW50LmZpcmUuNlwiOiBcIlN0YXJ0IHRoZSBmaXJzdCBhbmltYXRpb25cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uRXZlbnQuZmlyZS4xNFwiOiBcIlRoaXMgaXMgQW5pbWF0aW9uIEV2ZW50LlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC5qcy4xXCI6IFwiU3RhcnQgdGhlXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4xMVwiOiBcIkxpbmVhclwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMTdcIjogXCJDYXNlIEluIEV4cG9cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjIzXCI6IFwiQ2FzZSBPdXQgRXhwb1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMjlcIjogXCJDYXNlIE91dCBJbiBFeHBvXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4zNVwiOiBcIkJhY2sgRm9yd2FyZFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuNDFcIjogXCJUaGlzIGlzIE1vdmUgQW5pbWF0aW9uLlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9TcHJpdGVBbmltYXRpb24uZmlyZS45XCI6IFwiVGhpcyBpcyBTcHJpZUZyYW1lIEFuaW1hdGlvbi5cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQ3JlYXRlQ2xpcC5maXJlLjFcIjogXCJEeW5hbWljIENyZWF0aW5nIEFuaW1hdGlvbkNsaXBcIixcbiAgXCJjYXNlcy8wNF9hdWRpby9TaW1wbGVBdWRpby5maXJlLjZcIjogXCJFbmpveSB0aGUgbXVzaWMhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9kZUFycmF5LmZpcmUuMTRcIjogXCJUaGlzIGlzIE5vZGUgQXJyYXkuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9uU2VyaWFsaXplZC5maXJlLjZcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL05vblNlcmlhbGl6ZWQuZmlyZS44XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob25TZXJpYWxpemVkLmZpcmUuMTBcIjogXCJUaGlzIGlzIE5vbiBTZXJpYWxpemVkLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL1JlZmVyZW5jZVR5cGUuZmlyZS44XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9SZWZlcmVuY2VUeXBlLmZpcmUuMTFcIjogXCJUaGlzIGV4YW1wbGUgZG9lcyBub3QgaW5jbHVkZSB0aGUgcnVudGltZSBkZW1vbnN0cmF0aW9uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvVmFsdWVUeXBlLmZpcmUuNlwiOiBcIlRoaXMgZXhhbXBsZSBkb2VzIG5vdCBpbmNsdWRlIHRoZSBydW50aW1lIGRlbW9uc3RyYXRpb25cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDJfcHJlZmFiL0luc3RhbnRpYXRlUHJlZmFiLmZpcmUuN1wiOiBcIlRoaXMgaXMgSW5zdGFudGlhdGUgUHJlZmFiLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvRXZlbnRJbk1hc2suZmlyZS4yM1wiOiBcIkNoYW5nZSBvcmRlciBvZiBub2Rlc1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4xOVwiOiBcIlRvdWNoIGV2ZW50IGNhbiBzdXBwb3J0IGNsaWNrXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9TaW1wbGVFdmVudC5maXJlLjIxXCI6IFwiTW91c2UgZXZlbnQgY2FuIHN1cHBvcnQgY2xpY2ssIGhvdmVyLCB3aGVlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4yM1wiOiBcIkN1c3RvbSBldmVudCBjYW4gYmUgdHJpZ2dlcmVkIG1hbnVhbGx5XFxuKENsaWNrIGJ1dHRvbiBhYm92ZSlcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1NpbXBsZUV2ZW50LmZpcmUuMjVcIjogXCJUaGlzIGlzIFNpbXBsZSBFdmVudC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1RvdWNoUHJvcGFnYXRpb24uZmlyZS4xNVwiOiBcIlRoaXMgaXMgVG91Y2ggUHJvcGFnYXRpb24uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZUNhbGxiYWNrcy5qcy4xXCI6IFwiNS4wMCBzXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS45XCI6IFwiNS4wMCBzXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4xMlwiOiBcIlJlcGVhdCBTY2hlZHVsZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMThcIjogXCJDYW5jZWwgU2NoZWR1bGVzXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4yNFwiOiBcIlNjaGVkdWxlIE9uY2VcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjI5XCI6IFwiQ291bnRlciB1c2UgdXBkYXRlIGZ1bmN0aW9uIHRvIGNoYW5nZSBzdHJpbmcgdmFsdWUgZWFjaCBmcmFtZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMzFcIjogXCJUaGlzIGlzIFNjaGVkdWxlci5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Nyb3NzUmVmZXJlbmNlLmZpcmUuN1wiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA1X2Nyb3NzX3JlZmVyZW5jZS9Dcm9zc1JlZmVyZW5jZS5maXJlLjEyXCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Nyb3NzUmVmZXJlbmNlLmZpcmUuMTRcIjogXCJUaGlzIGlzIENyb3NzIFJlZmVyZW5jZS5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDZfbGlmZV9jeWNsZS9saWZlX2N5Y2xlLmZpcmUuNlwiOiBcIlRoaXMgaXMgTGlmZSBjeWNsZS5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS41XCI6IFwiQXNzZXQgTG9hZGluZ1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjlcIjogXCJMb2FkIFNwcml0ZUZyYW1lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMTVcIjogXCJMb2FkIFRleHR1cmVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4yMVwiOiBcIkxvYWQgQXVkaW9cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4yN1wiOiBcIkxvYWQgVHh0XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMzNcIjogXCJMb2FkIEZvbnRcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4zOVwiOiBcIkxvYWQgUGxpc3RcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS40NVwiOiBcIkxvYWQgUHJlZmFiXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNTFcIjogXCJMb2FkIFNjZW5lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNTdcIjogXCJMb2FkIEFuaW1hdGlvblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjU5XCI6IFwiTG9hZCBTcGluZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjY1XCI6IFwiTm90IGN1cnJlbnRseSBsb2FkZWQgRW50aXR5LlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy4xXCI6IFwiTG9hZGVkIFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy4yXCI6IFwiUGxheSBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuM1wiOiBcIkNyZWF0ZSBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuNFwiOiBcIlBsYXlpbmcgTXVzaWMuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjVcIjogXCJUaGlzIGlzIEZvbnQhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjdcIjogXCJCeSBUeXBlXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjEwXCI6IFwiTG9hZCBTcHJpdGVGcmFtZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXMuZmlyZS4xN1wiOiBcIkJ5IFVybFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXMuZmlyZS4yMFwiOiBcIkxvYWQgUHJlZmFiXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC5maXJlLjZcIjogXCJMb2FkUmVzRGlyXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC5maXJlLjI0XCI6IFwiTG9hZCBBbGxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsLmZpcmUuMzBcIjogXCJMb2FkIFNwcml0ZUZyYW1lIEFsbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXNBbGwuZmlyZS4zNlwiOiBcIkNsZWFyIEFsbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wOF9tb2R1bGUvbG9hZF9tb2R1bGUuZmlyZS42XCI6IFwiTG9hZCBNb2R1bGVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDhfbW9kdWxlL2xvYWRfbW9kdWxlLmZpcmUuMTBcIjogXCJDcmVhdGUgTW9uc3RlclwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wOV9zaW5nbGV0b24vU2luZ2xldG9uLmZpcmUuNlwiOiBcIlRoaXMgZXhhbXBsZSBkb2VzIG5vdCBpbmNsdWRlIHRoZSBydW50aW1lIGRlbW9uc3RyYXRpb25cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9Mb2FkaW5nQmFyQ3RybC5qcy4xXCI6IFwiZG93bmxvYWQgY29tcGxldGUhIVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjJcIjogXCJkb3dsb2FkaW5nOiBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9Mb2FkaW5nQmFyQ3RybC5qcy4zXCI6IFwiY2xpY2sgYW55d2hlcmUgdG8gZG93bmxvYWQuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9sb2FkaW5nQmFyLmZpcmUuN1wiOiBcIkxvYWRpbmcgQ29tcGxldGVkXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvbG9hZGluZ0Jhci5maXJlLjE4XCI6IFwiRG93bG9hZGluZ1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjFcIjogXCJ3YWl0aW5nLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMlwiOiBcIndhaXRpbmcuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4zXCI6IFwid2FpdGluZy4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjRcIjogXCJ3YWl0aW5nLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuNVwiOiBcIldlYlNvY2tldFxcXFxuU2VuZCBCaW5hcnkgV1Mgd2FzIG9wZW5lZC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy42XCI6IFwiV2ViU29ja2V0XFxcXG5SZXNwb25zZSBnZXQuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuN1wiOiBcIldlYlNvY2tldFxcXFxuc2VuZEJpbmFyeSBFcnJvciB3YXMgZmlyZWQuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuOFwiOiBcIldlYlNvY2tldFxcXFxud2Vic29ja2V0IGluc3RhbmNlIGNsb3NlZC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy45XCI6IFwiV2ViU29ja2V0XFxcXG5TZW5kIEJpbmFyeSBXUyBpcyB3YWl0aW5nLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTBcIjogXCJXZWJTb2NrZXRcXFxcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjExXCI6IFwiU29ja2V0SU9cXFxcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjEyXCI6IFwiU29ja2V0SU9cXFxcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjEzXCI6IFwiU29ja2V0SU9cXFxcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjE0XCI6IFwiU29ja2V0SU9cXFxcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS43XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuNlwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjExXCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTBcIjogXCJYTUxIdHRwUmVxdWVzdCAoQXJyYXlCdWZmZXIpXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjE1XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTRcIjogXCJXZWJTb2NrZXRcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTlcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xOFwiOiBcIlNvY2tldElPXCIsXG4gIFwiY2FzZXMvbmF0aXZlX2NhbGwvbmF0aXZlX2NhbGwuZmlyZS4xXCI6IFwiSlMgdG8gSkFWQSByZWZsZWN0aW9uIG9ubHkgd29ya3MgQW5kcm9pZCBtb2JpbGUgcGxhdGZvcm0hXCIsXG4gIFwiY2FzZXMvbmF0aXZlX2NhbGwvbmF0aXZlX2NhbGwuZmlyZS4yXCI6IFwiQ2xpY2sgb24gdGhlIGJ1dHRvbiBjYWxscyB0aGUgc3RhdGljIG1ldGhvZCFcIixcbiAgXCJjYXNlcy9uYXRpdmVfY2FsbC9uYXRpdmVfY2FsbC5maXJlLjNcIjogXCJDbGlja1wiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuM1wiOiBcIkdyb3VwOiBDb2xsaWRlclwiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuNVwiOiBcIkdyb3VwOiBDb2xsaWRlclwiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuN1wiOiBcIkdyb3VwOiBDb2xsaWRlclwiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuOVwiOiBcIkdyb3VwOiBEZWZhdWx0XCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS4yMFwiOiBcIlNob3cgUG9seWdvblwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuMjdcIjogXCJTaG93IENpcmNsZVwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuMzRcIjogXCJTaG93IEJveFwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuNDNcIjogXCJTaG93IFBvbHlnb25cIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjUwXCI6IFwiU2hvdyBDaXJjbGVcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjU3XCI6IFwiU2hvdyBCb3hcIixcbiAgXCJjYXNlcy9tb3Rpb25TdHJlYWsvTW90aW9uU3RyZWFrLmZpcmUuMVwiOiBcIkNoYW5nZSBNb3Rpb25TdHJlYWtcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjExXCI6IFwiRGVidWcgU2xvdHNcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjE4XCI6IFwiRGVidWcgQm9uZXNcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjI1XCI6IFwiVGltZSBTY2FsZVwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuMzZcIjogXCJTdG9wXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS40M1wiOiBcIldhbGtcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjUwXCI6IFwiUnVuXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS41OFwiOiBcIkp1bXBcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjY1XCI6IFwiU2hvb3RcIixcbiAgXCJjYXNlcy90aWxlZG1hcC9QdXp6bGUuZmlyZS4xOFwiOiBcIllvdSBXaW5cIixcbiAgXCJjYXNlcy90aWxlZG1hcC9QdXp6bGUuZmlyZS4yMVwiOiBcIlJlc3RhcnRcIixcbiAgXCJyZXMvcHJlZmFicy9MaXN0SXRlbS5wcmVmYWIuMlwiOiBcIkxhYmVsIHNzc3NcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4zXCI6IFwiTmFtZTpcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4xMVwiOiBcIkxldmVsIDpcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4xOVwiOiBcIkhwIDpcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4yN1wiOiBcIkF0dGFjayA6XCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuMzVcIjogXCJEZWZlbnNlIDpcIixcbiAgXCJyZXMvcHJlZmFicy9sb2FkSXRlbS5wcmVmYWIuMVwiOiBcIkxhYmVsXCIsXG4gIFwicmVzb3VyY2VzL3Rlc3QgYXNzZXRzL3ByZWZhYi5wcmVmYWIuMlwiOiBcIlRoaXMgaXMgUHJlZmFiXCIsXG4gIFwicmVzb3VyY2VzL3Rlc3QgYXNzZXRzL3NjZW5lLmZpcmUuM1wiOiBcIlJldHVybiBBc3NldCBMb2FkaW5nIFNjZW5lXCIsXG4gIFwicmVzb3VyY2VzL3Rlc3QgYXNzZXRzL3NjZW5lLmZpcmUuNlwiOiBcIlJldHVyblwiLFxuICBcInNjcmlwdHMvR2xvYmFsL01lbnUuanMuMVwiOiBcIlRlbXBvcmFyeSBsYWNrIG9mIGludHJvZHVjdGlvblwiLFxuICBcImNhc2VzL2FueXNkay8xXCI6IFwiT25seSB3b3JrcyBpbiB0aGUgQW5kcm9pZCBvciBpT1Mgb3IgV2ViLU1vYmlsZSBwbGF0Zm9ybXNcIixcbiAgXCJjYXNlcy9hbnlzZGsvMlwiOiBcIk9ubHkgd29ya3MgaW4gdGhlIEFuZHJvaWQgb3IgaU9TIHBsYXRmb3Jtc1wiLFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/ray-cast-reflection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42cf8MpDYNJzZAXam4qVOMI', 'ray-cast-reflection');
// cases/demo/ray-cast-reflection.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    radius: 1000
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.ctx = this.getComponent(cc.Graphics);
    this.angle = 0;
    this.center = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.angle += Math.PI / 20 * dt;
    var p1 = this.center;
    var p2 = cc.v2(Math.cos(this.angle), Math.sin(this.angle)).mulSelf(this.radius).addSelf(this.center);
    this.ctx.clear();
    this.remainLength = this.radius;
    this.rayCast(p1, p2);
  },
  rayCast: function rayCast(p1, p2) {
    var manager = cc.director.getPhysicsManager();
    var result = manager.rayCast(p1, p2)[0];

    if (result) {
      p2 = result.point;
      this.ctx.circle(p2.x, p2.y, 5);
      this.ctx.fill();
    }

    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.stroke();
    if (!result) return;
    this.remainLength = this.remainLength - p2.sub(p1).mag();
    if (this.remainLength < 1) return;
    result.normal.mul(this.remainLength);
    p1 = p2;
    p2 = result.normal.mul(this.remainLength).add(p1);
    this.rayCast(p1, p2);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3JheS1jYXN0LXJlZmxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyYWRpdXMiLCJvbkxvYWQiLCJjdHgiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsImFuZ2xlIiwiY2VudGVyIiwidjIiLCJ3aW5TaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJQSSIsInAxIiwicDIiLCJjb3MiLCJzaW4iLCJtdWxTZWxmIiwiYWRkU2VsZiIsImNsZWFyIiwicmVtYWluTGVuZ3RoIiwicmF5Q2FzdCIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwicmVzdWx0IiwicG9pbnQiLCJjaXJjbGUiLCJ4IiwieSIsImZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdWIiLCJtYWciLCJub3JtYWwiLCJtdWwiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7RUFEQSxDQUhQO0VBT0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLEdBQUwsR0FBVyxLQUFLQyxZQUFMLENBQWtCUCxFQUFFLENBQUNRLFFBQXJCLENBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY1YsRUFBRSxDQUFDVyxFQUFILENBQU1YLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXQyxLQUFYLEdBQWlCLENBQXZCLEVBQTBCYixFQUFFLENBQUNZLE9BQUgsQ0FBV0UsTUFBWCxHQUFrQixDQUE1QyxDQUFkO0VBQ0gsQ0FaSTtFQWNMO0VBQ0FDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLEtBQUtQLEtBQUwsSUFBY1EsSUFBSSxDQUFDQyxFQUFMLEdBQVUsRUFBVixHQUFlRixFQUE3QjtJQUVBLElBQUlHLEVBQUUsR0FBRyxLQUFLVCxNQUFkO0lBQ0EsSUFBSVUsRUFBRSxHQUFHcEIsRUFBRSxDQUFDVyxFQUFILENBQU1NLElBQUksQ0FBQ0ksR0FBTCxDQUFTLEtBQUtaLEtBQWQsQ0FBTixFQUE0QlEsSUFBSSxDQUFDSyxHQUFMLENBQVMsS0FBS2IsS0FBZCxDQUE1QixFQUFrRGMsT0FBbEQsQ0FBMEQsS0FBS25CLE1BQS9ELEVBQXVFb0IsT0FBdkUsQ0FBZ0YsS0FBS2QsTUFBckYsQ0FBVDtJQUVBLEtBQUtKLEdBQUwsQ0FBU21CLEtBQVQ7SUFFQSxLQUFLQyxZQUFMLEdBQW9CLEtBQUt0QixNQUF6QjtJQUNBLEtBQUt1QixPQUFMLENBQWFSLEVBQWIsRUFBaUJDLEVBQWpCO0VBQ0gsQ0F6Qkk7RUEyQkxPLE9BQU8sRUFBRSxpQkFBVVIsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0lBQ3ZCLElBQUlRLE9BQU8sR0FBRzVCLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWUMsaUJBQVosRUFBZDtJQUNBLElBQUlDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRCxPQUFSLENBQWdCUixFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0IsQ0FBeEIsQ0FBYjs7SUFFQSxJQUFJVyxNQUFKLEVBQVk7TUFDUlgsRUFBRSxHQUFHVyxNQUFNLENBQUNDLEtBQVo7TUFDQSxLQUFLMUIsR0FBTCxDQUFTMkIsTUFBVCxDQUFnQmIsRUFBRSxDQUFDYyxDQUFuQixFQUFzQmQsRUFBRSxDQUFDZSxDQUF6QixFQUE0QixDQUE1QjtNQUNBLEtBQUs3QixHQUFMLENBQVM4QixJQUFUO0lBQ0g7O0lBRUQsS0FBSzlCLEdBQUwsQ0FBUytCLE1BQVQsQ0FBZ0JsQixFQUFFLENBQUNlLENBQW5CLEVBQXNCZixFQUFFLENBQUNnQixDQUF6QjtJQUNBLEtBQUs3QixHQUFMLENBQVNnQyxNQUFULENBQWdCbEIsRUFBRSxDQUFDYyxDQUFuQixFQUFzQmQsRUFBRSxDQUFDZSxDQUF6QjtJQUNBLEtBQUs3QixHQUFMLENBQVNpQyxNQUFUO0lBRUEsSUFBSSxDQUFDUixNQUFMLEVBQWE7SUFFYixLQUFLTCxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsR0FBb0JOLEVBQUUsQ0FBQ29CLEdBQUgsQ0FBT3JCLEVBQVAsRUFBV3NCLEdBQVgsRUFBeEM7SUFDQSxJQUFJLEtBQUtmLFlBQUwsR0FBb0IsQ0FBeEIsRUFBMkI7SUFFM0JLLE1BQU0sQ0FBQ1csTUFBUCxDQUFjQyxHQUFkLENBQWtCLEtBQUtqQixZQUF2QjtJQUVBUCxFQUFFLEdBQUdDLEVBQUw7SUFDQUEsRUFBRSxHQUFHVyxNQUFNLENBQUNXLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixLQUFLakIsWUFBdkIsRUFBcUNrQixHQUFyQyxDQUF5Q3pCLEVBQXpDLENBQUw7SUFDQSxLQUFLUSxPQUFMLENBQWFSLEVBQWIsRUFBaUJDLEVBQWpCO0VBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmFkaXVzOiAxMDAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2MudjIoY2Mud2luU2l6ZS53aWR0aC8yLCBjYy53aW5TaXplLmhlaWdodC8yKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLmFuZ2xlICs9IE1hdGguUEkgLyAyMCAqIGR0O1xuXG4gICAgICAgIHZhciBwMSA9IHRoaXMuY2VudGVyO1xuICAgICAgICB2YXIgcDIgPSBjYy52MihNYXRoLmNvcyh0aGlzLmFuZ2xlKSwgTWF0aC5zaW4odGhpcy5hbmdsZSkpLm11bFNlbGYodGhpcy5yYWRpdXMpLmFkZFNlbGYoIHRoaXMuY2VudGVyICk7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXIoKTtcbiAgICBcbiAgICAgICAgdGhpcy5yZW1haW5MZW5ndGggPSB0aGlzLnJhZGl1cztcbiAgICAgICAgdGhpcy5yYXlDYXN0KHAxLCBwMik7XG4gICAgfSxcblxuICAgIHJheUNhc3Q6IGZ1bmN0aW9uIChwMSwgcDIpIHtcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbWFuYWdlci5yYXlDYXN0KHAxLCBwMilbMF07XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcDIgPSByZXN1bHQucG9pbnQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5jaXJjbGUocDIueCwgcDIueSwgNSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnJlbWFpbkxlbmd0aCA9IHRoaXMucmVtYWluTGVuZ3RoIC0gcDIuc3ViKHAxKS5tYWcoKTtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluTGVuZ3RoIDwgMSkgcmV0dXJuO1xuXG4gICAgICAgIHJlc3VsdC5ub3JtYWwubXVsKHRoaXMucmVtYWluTGVuZ3RoKTtcblxuICAgICAgICBwMSA9IHAyO1xuICAgICAgICBwMiA9IHJlc3VsdC5ub3JtYWwubXVsKHRoaXMucmVtYWluTGVuZ3RoKS5hZGQocDEpO1xuICAgICAgICB0aGlzLnJheUNhc3QocDEsIHAyKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/one-side-platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18aa1UEm79FlIskk/BhE5v3', 'one-side-platform');
// cases/demo/one-side-platform.js

"use strict";

// http://www.iforce2d.net/b2dtut/one-way-walls
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.pointVelPlatform = cc.v2();
    this.pointVelOther = cc.v2();
    this.relativeVel = cc.v2();
    this.relativePoint = cc.v2();
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var cache = this._pointsCache;
    var otherBody = otherCollider.body;
    var platformBody = selfCollider.body;
    var worldManifold = contact.getWorldManifold();
    var points = worldManifold.points;
    var pointVelPlatform = this.pointVelPlatform;
    var pointVelOther = this.pointVelOther;
    var relativeVel = this.relativeVel;
    var relativePoint = this.relativePoint; //check if contact points are moving into platform

    for (var i = 0; i < points.length; i++) {
      platformBody.getLinearVelocityFromWorldPoint(points[i], pointVelPlatform);
      otherBody.getLinearVelocityFromWorldPoint(points[i], pointVelOther);
      platformBody.getLocalVector(pointVelOther.subSelf(pointVelPlatform), relativeVel);
      if (relativeVel.y < -32) //if moving down faster than 32 pixel/s (1m/s), handle as before
        return; //point is moving into platform, leave contact solid and exit
      else if (relativeVel.y < 32) {
        //if moving slower than 32 pixel/s (1m/s)
        //borderline case, moving only slightly out of platform
        platformBody.getLocalPoint(points[i], relativePoint);
        var platformFaceY = selfCollider.getAABB().height / 2; //front of platform, should only used on a box collider

        if (relativePoint.y > platformFaceY - 0.1 * 32) return; //contact point is less than 3.2pixel (10cm) inside front face of platfrom
      } else {//moving up faster than 1 m/s
      }
    } // store disabled state to contact


    contact.disabled = true;
  } // called every frame, uncomment this function to activate update callback
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL29uZS1zaWRlLXBsYXRmb3JtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwicG9pbnRWZWxQbGF0Zm9ybSIsInYyIiwicG9pbnRWZWxPdGhlciIsInJlbGF0aXZlVmVsIiwicmVsYXRpdmVQb2ludCIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjYWNoZSIsIl9wb2ludHNDYWNoZSIsIm90aGVyQm9keSIsImJvZHkiLCJwbGF0Zm9ybUJvZHkiLCJ3b3JsZE1hbmlmb2xkIiwiZ2V0V29ybGRNYW5pZm9sZCIsInBvaW50cyIsImkiLCJsZW5ndGgiLCJnZXRMaW5lYXJWZWxvY2l0eUZyb21Xb3JsZFBvaW50IiwiZ2V0TG9jYWxWZWN0b3IiLCJzdWJTZWxmIiwieSIsImdldExvY2FsUG9pbnQiLCJwbGF0Zm9ybUZhY2VZIiwiZ2V0QUFCQiIsImhlaWdodCIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBS0xDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxnQkFBTCxHQUF3QkwsRUFBRSxDQUFDTSxFQUFILEVBQXhCO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQlAsRUFBRSxDQUFDTSxFQUFILEVBQXJCO0lBQ0EsS0FBS0UsV0FBTCxHQUFtQlIsRUFBRSxDQUFDTSxFQUFILEVBQW5CO0lBQ0EsS0FBS0csYUFBTCxHQUFxQlQsRUFBRSxDQUFDTSxFQUFILEVBQXJCO0VBQ0gsQ0FWSTtFQVlMSSxjQUFjLEVBQUUsd0JBQVVDLE9BQVYsRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnRDtJQUM1RCxJQUFJQyxLQUFLLEdBQUcsS0FBS0MsWUFBakI7SUFFQSxJQUFJQyxTQUFTLEdBQUdILGFBQWEsQ0FBQ0ksSUFBOUI7SUFDQSxJQUFJQyxZQUFZLEdBQUdOLFlBQVksQ0FBQ0ssSUFBaEM7SUFFQSxJQUFJRSxhQUFhLEdBQUdSLE9BQU8sQ0FBQ1MsZ0JBQVIsRUFBcEI7SUFDQSxJQUFJQyxNQUFNLEdBQUdGLGFBQWEsQ0FBQ0UsTUFBM0I7SUFFQSxJQUFJaEIsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQTVCO0lBQ0EsSUFBSUUsYUFBYSxHQUFHLEtBQUtBLGFBQXpCO0lBQ0EsSUFBSUMsV0FBVyxHQUFHLEtBQUtBLFdBQXZCO0lBQ0EsSUFBSUMsYUFBYSxHQUFHLEtBQUtBLGFBQXpCLENBWjRELENBYzVEOztJQUNBLEtBQUssSUFBSWEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztNQUNwQ0osWUFBWSxDQUFDTSwrQkFBYixDQUE4Q0gsTUFBTSxDQUFDQyxDQUFELENBQXBELEVBQXlEakIsZ0JBQXpEO01BQ0FXLFNBQVMsQ0FBQ1EsK0JBQVYsQ0FBMkNILE1BQU0sQ0FBQ0MsQ0FBRCxDQUFqRCxFQUFzRGYsYUFBdEQ7TUFDQVcsWUFBWSxDQUFDTyxjQUFiLENBQTZCbEIsYUFBYSxDQUFDbUIsT0FBZCxDQUFzQnJCLGdCQUF0QixDQUE3QixFQUFzRUcsV0FBdEU7TUFFQSxJQUFLQSxXQUFXLENBQUNtQixDQUFaLEdBQWdCLENBQUMsRUFBdEIsRUFBMkI7UUFDdkIsT0FESixDQUNhO01BRGIsS0FFSyxJQUFLbkIsV0FBVyxDQUFDbUIsQ0FBWixHQUFnQixFQUFyQixFQUEwQjtRQUFFO1FBQzdCO1FBQ0FULFlBQVksQ0FBQ1UsYUFBYixDQUE0QlAsTUFBTSxDQUFDQyxDQUFELENBQWxDLEVBQXVDYixhQUF2QztRQUNBLElBQUlvQixhQUFhLEdBQUdqQixZQUFZLENBQUNrQixPQUFiLEdBQXVCQyxNQUF2QixHQUFnQyxDQUFwRCxDQUgyQixDQUc2Qjs7UUFDeEQsSUFBS3RCLGFBQWEsQ0FBQ2tCLENBQWQsR0FBa0JFLGFBQWEsR0FBRyxNQUFJLEVBQTNDLEVBQ0ksT0FMdUIsQ0FLZDtNQUNoQixDQU5JLE1BT0EsQ0FDRDtNQUNIO0lBQ0osQ0FoQzJELENBa0M1RDs7O0lBQ0FsQixPQUFPLENBQUNxQixRQUFSLEdBQW1CLElBQW5CO0VBQ0gsQ0FoREksQ0FrREw7RUFDQTtFQUVBOztBQXJESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3Lmlmb3JjZTJkLm5ldC9iMmR0dXQvb25lLXdheS13YWxsc1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogeyAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucG9pbnRWZWxQbGF0Zm9ybSA9IGNjLnYyKCk7XG4gICAgICAgIHRoaXMucG9pbnRWZWxPdGhlciA9IGNjLnYyKCk7XG4gICAgICAgIHRoaXMucmVsYXRpdmVWZWwgPSBjYy52MigpO1xuICAgICAgICB0aGlzLnJlbGF0aXZlUG9pbnQgPSBjYy52MigpO1xuICAgIH0sXG5cbiAgICBvbkJlZ2luQ29udGFjdDogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLl9wb2ludHNDYWNoZTtcblxuICAgICAgICBsZXQgb3RoZXJCb2R5ID0gb3RoZXJDb2xsaWRlci5ib2R5O1xuICAgICAgICBsZXQgcGxhdGZvcm1Cb2R5ID0gc2VsZkNvbGxpZGVyLmJvZHk7XG5cbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHdvcmxkTWFuaWZvbGQucG9pbnRzO1xuXG4gICAgICAgIGxldCBwb2ludFZlbFBsYXRmb3JtID0gdGhpcy5wb2ludFZlbFBsYXRmb3JtO1xuICAgICAgICBsZXQgcG9pbnRWZWxPdGhlciA9IHRoaXMucG9pbnRWZWxPdGhlcjtcbiAgICAgICAgbGV0IHJlbGF0aXZlVmVsID0gdGhpcy5yZWxhdGl2ZVZlbDtcbiAgICAgICAgbGV0IHJlbGF0aXZlUG9pbnQgPSB0aGlzLnJlbGF0aXZlUG9pbnQ7XG5cbiAgICAgICAgLy9jaGVjayBpZiBjb250YWN0IHBvaW50cyBhcmUgbW92aW5nIGludG8gcGxhdGZvcm1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBsYXRmb3JtQm9keS5nZXRMaW5lYXJWZWxvY2l0eUZyb21Xb3JsZFBvaW50KCBwb2ludHNbaV0sIHBvaW50VmVsUGxhdGZvcm0gKTtcbiAgICAgICAgICAgIG90aGVyQm9keS5nZXRMaW5lYXJWZWxvY2l0eUZyb21Xb3JsZFBvaW50KCBwb2ludHNbaV0sIHBvaW50VmVsT3RoZXIgKTtcbiAgICAgICAgICAgIHBsYXRmb3JtQm9keS5nZXRMb2NhbFZlY3RvciggcG9pbnRWZWxPdGhlci5zdWJTZWxmKHBvaW50VmVsUGxhdGZvcm0pLCByZWxhdGl2ZVZlbCApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHJlbGF0aXZlVmVsLnkgPCAtMzIgKSAvL2lmIG1vdmluZyBkb3duIGZhc3RlciB0aGFuIDMyIHBpeGVsL3MgKDFtL3MpLCBoYW5kbGUgYXMgYmVmb3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgLy9wb2ludCBpcyBtb3ZpbmcgaW50byBwbGF0Zm9ybSwgbGVhdmUgY29udGFjdCBzb2xpZCBhbmQgZXhpdFxuICAgICAgICAgICAgZWxzZSBpZiAoIHJlbGF0aXZlVmVsLnkgPCAzMiApIHsgLy9pZiBtb3Zpbmcgc2xvd2VyIHRoYW4gMzIgcGl4ZWwvcyAoMW0vcylcbiAgICAgICAgICAgICAgICAvL2JvcmRlcmxpbmUgY2FzZSwgbW92aW5nIG9ubHkgc2xpZ2h0bHkgb3V0IG9mIHBsYXRmb3JtXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1Cb2R5LmdldExvY2FsUG9pbnQoIHBvaW50c1tpXSwgcmVsYXRpdmVQb2ludCApO1xuICAgICAgICAgICAgICAgIGxldCBwbGF0Zm9ybUZhY2VZID0gc2VsZkNvbGxpZGVyLmdldEFBQkIoKS5oZWlnaHQgLyAyOyAgLy9mcm9udCBvZiBwbGF0Zm9ybSwgc2hvdWxkIG9ubHkgdXNlZCBvbiBhIGJveCBjb2xsaWRlclxuICAgICAgICAgICAgICAgIGlmICggcmVsYXRpdmVQb2ludC55ID4gcGxhdGZvcm1GYWNlWSAtIDAuMSozMiApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgIC8vY29udGFjdCBwb2ludCBpcyBsZXNzIHRoYW4gMy4ycGl4ZWwgKDEwY20pIGluc2lkZSBmcm9udCBmYWNlIG9mIHBsYXRmcm9tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL21vdmluZyB1cCBmYXN0ZXIgdGhhbiAxIG0vc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzdG9yZSBkaXNhYmxlZCBzdGF0ZSB0byBjb250YWN0XG4gICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/gravity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db6f0HR8SZFa5tEwXjbivXZ', 'gravity');
// cases/demo/gravity.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onEnable: function onEnable() {
    var manager = cc.director.getPhysicsManager();
    this.bodies = [];
    this.body = this.getComponent(cc.RigidBody);
    this.originGravity = manager.gravity;
    manager.gravity = cc.v2();
  },
  onDisable: function onDisable() {
    cc.director.getPhysicsManager().gravity = this.originGravity;
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    this.bodies.push(otherCollider.body);
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    var index = this.bodies.indexOf(otherCollider.body);

    if (index !== -1) {
      this.bodies.splice(index, 1);
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (!this.body) {
      return;
    }

    var bodies = this.bodies;

    for (var i = 0; i < bodies.length; i++) {
      this._applyForce(bodies[i]);
    }
  },
  _applyForce: function _applyForce(body) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2dyYXZpdHkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uRW5hYmxlIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJib2RpZXMiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwib3JpZ2luR3Jhdml0eSIsImdyYXZpdHkiLCJ2MiIsIm9uRGlzYWJsZSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJwdXNoIiwib25FbmRDb250YWN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidXBkYXRlIiwiZHQiLCJpIiwibGVuZ3RoIiwiX2FwcGx5Rm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0w7RUFDQUMsUUFBUSxFQUFFLG9CQUFZO0lBQ2xCLElBQUlDLE9BQU8sR0FBR0osRUFBRSxDQUFDSyxRQUFILENBQVlDLGlCQUFaLEVBQWQ7SUFFQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLElBQUwsR0FBWSxLQUFLQyxZQUFMLENBQWtCVCxFQUFFLENBQUNVLFNBQXJCLENBQVo7SUFDQSxLQUFLQyxhQUFMLEdBQXFCUCxPQUFPLENBQUNRLE9BQTdCO0lBQ0FSLE9BQU8sQ0FBQ1EsT0FBUixHQUFrQlosRUFBRSxDQUFDYSxFQUFILEVBQWxCO0VBQ0gsQ0FYSTtFQWFMQyxTQUFTLEVBQUUscUJBQVk7SUFDbkJkLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZQyxpQkFBWixHQUFnQ00sT0FBaEMsR0FBMEMsS0FBS0QsYUFBL0M7RUFDSCxDQWZJO0VBaUJMSSxjQUFjLEVBQUUsd0JBQVVDLE9BQVYsRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnRDtJQUM1RCxLQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUJELGFBQWEsQ0FBQ1YsSUFBL0I7RUFDSCxDQW5CSTtFQXFCTFksWUFBWSxFQUFFLHNCQUFVSixPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7SUFDMUQsSUFBSUcsS0FBSyxHQUFHLEtBQUtkLE1BQUwsQ0FBWWUsT0FBWixDQUFvQkosYUFBYSxDQUFDVixJQUFsQyxDQUFaOztJQUNBLElBQUlhLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7TUFDZCxLQUFLZCxNQUFMLENBQVlnQixNQUFaLENBQW1CRixLQUFuQixFQUEwQixDQUExQjtJQUNIO0VBQ0osQ0ExQkk7RUE0Qkw7RUFDQUcsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxDQUFDLEtBQUtqQixJQUFWLEVBQWdCO01BQ1o7SUFDSDs7SUFFRCxJQUFJRCxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7O0lBQ0EsS0FBSyxJQUFJbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25CLE1BQU0sQ0FBQ29CLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDLEtBQUtFLFdBQUwsQ0FBaUJyQixNQUFNLENBQUNtQixDQUFELENBQXZCO0lBQ0g7RUFDSixDQXRDSTtFQXdDTEUsV0FBVyxFQUFFLHFCQUFVcEIsSUFBVixFQUFnQixDQUM1QjtBQXpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuXG4gICAgICAgIHRoaXMuYm9kaWVzID0gW107XG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHRoaXMub3JpZ2luR3Jhdml0eSA9IG1hbmFnZXIuZ3Jhdml0eTtcbiAgICAgICAgbWFuYWdlci5ncmF2aXR5ID0gY2MudjIoKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IHRoaXMub3JpZ2luR3Jhdml0eTtcbiAgICB9LFxuXG4gICAgb25CZWdpbkNvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgdGhpcy5ib2RpZXMucHVzaChvdGhlckNvbGxpZGVyLmJvZHkpO1xuICAgIH0sXG5cbiAgICBvbkVuZENvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ib2RpZXMuaW5kZXhPZihvdGhlckNvbGxpZGVyLmJvZHkpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmJvZGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYm9kaWVzID0gdGhpcy5ib2RpZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcmNlKGJvZGllc1tpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FwcGx5Rm9yY2U6IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/conveyor-belt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2NvbnZleW9yLWJlbHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0YW5nZW50U3BlZWQiLCJvblByZVNvbHZlIiwiY29udGFjdCIsInNldFRhbmdlbnRTcGVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRTtFQUROLENBSFA7RUFPTEMsVUFBVSxFQUFFLG9CQUFVQyxPQUFWLEVBQW1CO0lBQzNCQSxPQUFPLENBQUNDLGVBQVIsQ0FBeUIsS0FBS0gsWUFBOUI7RUFDSCxDQVRJLENBV0w7RUFDQTtFQUVBOztBQWRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhbmdlbnRTcGVlZDogNVxuICAgIH0sXG5cbiAgICBvblByZVNvbHZlOiBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgICAgICBjb250YWN0LnNldFRhbmdlbnRTcGVlZCggdGhpcy50YW5nZW50U3BlZWQgKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/ray-cast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0ac7pO5kxGfbsNUATZzFfK', 'ray-cast');
// cases/demo/ray-cast.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    rayCastType: {
      "default": cc.RayCastType.Closest,
      type: cc.RayCastType
    },
    radius: 1000
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.ctx = this.getComponent(cc.Graphics);
    this.angle = 0;
    this.center = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var _this = this;

    this.angle += Math.PI / 10 * dt;
    var p1 = this.center;
    var p2 = cc.v2(Math.cos(this.angle), Math.sin(this.angle)).mulSelf(this.radius).addSelf(this.center);
    var manager = cc.director.getPhysicsManager();
    var results = manager.rayCast(p1, p2, this.rayCastType);
    this.ctx.clear();

    if (this.rayCastType === cc.RayCastType.Closest || this.rayCastType === cc.RayCastType.Any) {
      if (results[0]) {
        p2 = results[0].point;
      }
    }

    results.forEach(function (result) {
      _this.ctx.circle(result.point.x, result.point.y, 5);
    });
    this.ctx.fill();
    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.stroke();
  },
  onClosestBtnClick: function onClosestBtnClick() {
    this.rayCastType = cc.RayCastType.Closest;
  },
  onAnyBtnClick: function onAnyBtnClick() {
    this.rayCastType = cc.RayCastType.Any;
  },
  onAllClosestBtnClick: function onAllClosestBtnClick() {
    this.rayCastType = cc.RayCastType.AllClosest;
  },
  onAllBtnClick: function onAllBtnClick() {
    this.rayCastType = cc.RayCastType.All;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3JheS1jYXN0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmF5Q2FzdFR5cGUiLCJSYXlDYXN0VHlwZSIsIkNsb3Nlc3QiLCJ0eXBlIiwicmFkaXVzIiwib25Mb2FkIiwiY3R4IiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJhbmdsZSIsImNlbnRlciIsInYyIiwid2luU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiUEkiLCJwMSIsInAyIiwiY29zIiwic2luIiwibXVsU2VsZiIsImFkZFNlbGYiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsInJlc3VsdHMiLCJyYXlDYXN0IiwiY2xlYXIiLCJBbnkiLCJwb2ludCIsImZvckVhY2giLCJyZXN1bHQiLCJjaXJjbGUiLCJ4IiwieSIsImZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJvbkNsb3Nlc3RCdG5DbGljayIsIm9uQW55QnRuQ2xpY2siLCJvbkFsbENsb3Nlc3RCdG5DbGljayIsIkFsbENsb3Nlc3QiLCJvbkFsbEJ0bkNsaWNrIiwiQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFO01BQ1QsV0FBU0osRUFBRSxDQUFDSyxXQUFILENBQWVDLE9BRGY7TUFFVEMsSUFBSSxFQUFFUCxFQUFFLENBQUNLO0lBRkEsQ0FETDtJQU1SRyxNQUFNLEVBQUU7RUFOQSxDQUhQO0VBWUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLEdBQUwsR0FBVyxLQUFLQyxZQUFMLENBQWtCWCxFQUFFLENBQUNZLFFBQXJCLENBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY2QsRUFBRSxDQUFDZSxFQUFILENBQU1mLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0MsS0FBWCxHQUFpQixDQUF2QixFQUEwQmpCLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0UsTUFBWCxHQUFrQixDQUE1QyxDQUFkO0VBQ0gsQ0FqQkk7RUFtQkw7RUFDQUMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFBQTs7SUFDbEIsS0FBS1AsS0FBTCxJQUFjUSxJQUFJLENBQUNDLEVBQUwsR0FBVSxFQUFWLEdBQWVGLEVBQTdCO0lBRUEsSUFBSUcsRUFBRSxHQUFHLEtBQUtULE1BQWQ7SUFDQSxJQUFJVSxFQUFFLEdBQUd4QixFQUFFLENBQUNlLEVBQUgsQ0FBTU0sSUFBSSxDQUFDSSxHQUFMLENBQVMsS0FBS1osS0FBZCxDQUFOLEVBQTRCUSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLYixLQUFkLENBQTVCLEVBQWtEYyxPQUFsRCxDQUEwRCxLQUFLbkIsTUFBL0QsRUFBdUVvQixPQUF2RSxDQUFnRixLQUFLZCxNQUFyRixDQUFUO0lBRUEsSUFBSWUsT0FBTyxHQUFHN0IsRUFBRSxDQUFDOEIsUUFBSCxDQUFZQyxpQkFBWixFQUFkO0lBQ0EsSUFBSUMsT0FBTyxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0JWLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QixLQUFLcEIsV0FBN0IsQ0FBZDtJQUVBLEtBQUtNLEdBQUwsQ0FBU3dCLEtBQVQ7O0lBRUEsSUFBSSxLQUFLOUIsV0FBTCxLQUFxQkosRUFBRSxDQUFDSyxXQUFILENBQWVDLE9BQXBDLElBQ0EsS0FBS0YsV0FBTCxLQUFxQkosRUFBRSxDQUFDSyxXQUFILENBQWU4QixHQUR4QyxFQUM2QztNQUN6QyxJQUFJSCxPQUFPLENBQUMsQ0FBRCxDQUFYLEVBQWdCO1FBQ1pSLEVBQUUsR0FBR1EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSSxLQUFoQjtNQUNIO0lBQ0o7O0lBRURKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFBQyxNQUFNLEVBQUk7TUFDdEIsS0FBSSxDQUFDNUIsR0FBTCxDQUFTNkIsTUFBVCxDQUFnQkQsTUFBTSxDQUFDRixLQUFQLENBQWFJLENBQTdCLEVBQWdDRixNQUFNLENBQUNGLEtBQVAsQ0FBYUssQ0FBN0MsRUFBZ0QsQ0FBaEQ7SUFDSCxDQUZEO0lBSUEsS0FBSy9CLEdBQUwsQ0FBU2dDLElBQVQ7SUFFQSxLQUFLaEMsR0FBTCxDQUFTaUMsTUFBVCxDQUFnQnBCLEVBQUUsQ0FBQ2lCLENBQW5CLEVBQXNCakIsRUFBRSxDQUFDa0IsQ0FBekI7SUFDQSxLQUFLL0IsR0FBTCxDQUFTa0MsTUFBVCxDQUFnQnBCLEVBQUUsQ0FBQ2dCLENBQW5CLEVBQXNCaEIsRUFBRSxDQUFDaUIsQ0FBekI7SUFDQSxLQUFLL0IsR0FBTCxDQUFTbUMsTUFBVDtFQUNILENBL0NJO0VBaURMQyxpQkFBaUIsRUFBRSw2QkFBWTtJQUMzQixLQUFLMUMsV0FBTCxHQUFtQkosRUFBRSxDQUFDSyxXQUFILENBQWVDLE9BQWxDO0VBQ0gsQ0FuREk7RUFxREx5QyxhQUFhLEVBQUUseUJBQVk7SUFDdkIsS0FBSzNDLFdBQUwsR0FBbUJKLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlOEIsR0FBbEM7RUFDSCxDQXZESTtFQXlETGEsb0JBQW9CLEVBQUUsZ0NBQVk7SUFDOUIsS0FBSzVDLFdBQUwsR0FBbUJKLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlNEMsVUFBbEM7RUFDSCxDQTNESTtFQTZETEMsYUFBYSxFQUFFLHlCQUFZO0lBQ3ZCLEtBQUs5QyxXQUFMLEdBQW1CSixFQUFFLENBQUNLLFdBQUgsQ0FBZThDLEdBQWxDO0VBQ0g7QUEvREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmF5Q2FzdFR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLlJheUNhc3RUeXBlLkNsb3Nlc3QsXG4gICAgICAgICAgICB0eXBlOiBjYy5SYXlDYXN0VHlwZVxuICAgICAgICB9LFxuXG4gICAgICAgIHJhZGl1czogMTAwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmNlbnRlciA9IGNjLnYyKGNjLndpblNpemUud2lkdGgvMiwgY2Mud2luU2l6ZS5oZWlnaHQvMik7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdGhpcy5hbmdsZSArPSBNYXRoLlBJIC8gMTAgKiBkdDtcblxuICAgICAgICB2YXIgcDEgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgdmFyIHAyID0gY2MudjIoTWF0aC5jb3ModGhpcy5hbmdsZSksIE1hdGguc2luKHRoaXMuYW5nbGUpKS5tdWxTZWxmKHRoaXMucmFkaXVzKS5hZGRTZWxmKCB0aGlzLmNlbnRlciApO1xuXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBtYW5hZ2VyLnJheUNhc3QocDEsIHAyLCB0aGlzLnJheUNhc3RUeXBlKTtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhcigpO1xuXG4gICAgICAgIGlmICh0aGlzLnJheUNhc3RUeXBlID09PSBjYy5SYXlDYXN0VHlwZS5DbG9zZXN0IHx8XG4gICAgICAgICAgICB0aGlzLnJheUNhc3RUeXBlID09PSBjYy5SYXlDYXN0VHlwZS5BbnkpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdKSB7XG4gICAgICAgICAgICAgICAgcDIgPSByZXN1bHRzWzBdLnBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jaXJjbGUocmVzdWx0LnBvaW50LngsIHJlc3VsdC5wb2ludC55LCA1KTtcbiAgICAgICAgfSk7ICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9LFxuXG4gICAgb25DbG9zZXN0QnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkNsb3Nlc3Q7XG4gICAgfSxcblxuICAgIG9uQW55QnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkFueTtcbiAgICB9LFxuXG4gICAgb25BbGxDbG9zZXN0QnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkFsbENsb3Nlc3Q7XG4gICAgfSxcblxuICAgIG9uQWxsQnRuQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYXlDYXN0VHlwZSA9IGNjLlJheUNhc3RUeXBlLkFsbDtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/test/joint-list.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1009rkAqtIkbogr4edzTWV', 'joint-list');
// cases/test/joint-list.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  update: function update() {
    var body = this.getComponent(cc.RigidBody);
    var list = body.getJointList();
    console.log('------------joint-list-----------');
    list.forEach(function (joint) {
      console.log(cc.js.getClassName(joint));
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy90ZXN0L2pvaW50LWxpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ1cGRhdGUiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwibGlzdCIsImdldEpvaW50TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiam9pbnQiLCJqcyIsImdldENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLENBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFWUSxDQUhQO0VBZ0JMQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsSUFBSSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JOLEVBQUUsQ0FBQ08sU0FBckIsQ0FBWDtJQUNBLElBQUlDLElBQUksR0FBR0gsSUFBSSxDQUFDSSxZQUFMLEVBQVg7SUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7SUFDQUgsSUFBSSxDQUFDSSxPQUFMLENBQWEsVUFBQUMsS0FBSyxFQUFJO01BQ2xCSCxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsRUFBRSxDQUFDYyxFQUFILENBQU1DLFlBQU4sQ0FBbUJGLEtBQW5CLENBQVo7SUFDSCxDQUZEO0VBR0g7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgdmFyIGxpc3QgPSBib2R5LmdldEpvaW50TGlzdCgpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLWpvaW50LWxpc3QtLS0tLS0tLS0tLScpO1xuICAgICAgICBsaXN0LmZvckVhY2goam9pbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2MuanMuZ2V0Q2xhc3NOYW1lKGpvaW50KSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/i18n.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93789C/shtIL6entYsZPjee', 'i18n');
// i18n/i18n.js

"use strict";

var Polyglot = require('polyglot');

var lang = cc.sys.language;
var data;

if (lang === 'zh') {
  data = require('zh');
} else {
  data = require('en');
} // let polyglot = null;


var polyglot = new Polyglot({
  phrases: data,
  allowMissing: true
});
module.exports = {
  /**
   * This method allow you to switch language during runtime, language argument should be the same as your data file name
   * such as when language is 'zh', it will load your 'zh.js' data source.
   * @method init
   * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
   */
  init: function init(language) {
    lang = language;
    data = require(lang);
    polyglot.replace(data);
  },

  /**
   * this method takes a text key as input, and return the localized string
   * Please read https://github.com/airbnb/polyglot.js for details
   * @method t
   * @return {String} localized string
   * @example
   *
   * var myText = i18n.t('MY_TEXT_KEY');
   *
   * // if your data source is defined as
   * // {"hello_name": "Hello, %{name}"}
   * // you can use the following to interpolate the text
   * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
   */
  t: function t(key, opt) {
    return polyglot.t(key, opt);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pMThuL2kxOG4uanMiXSwibmFtZXMiOlsiUG9seWdsb3QiLCJyZXF1aXJlIiwibGFuZyIsImNjIiwic3lzIiwibGFuZ3VhZ2UiLCJkYXRhIiwicG9seWdsb3QiLCJwaHJhc2VzIiwiYWxsb3dNaXNzaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJyZXBsYWNlIiwidCIsImtleSIsIm9wdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUVBLElBQUlDLElBQUksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQWxCO0FBQ0EsSUFBSUMsSUFBSjs7QUFDQSxJQUFJSixJQUFJLEtBQUssSUFBYixFQUFtQjtFQUNmSSxJQUFJLEdBQUdMLE9BQU8sQ0FBQyxJQUFELENBQWQ7QUFDSCxDQUZELE1BR0s7RUFDREssSUFBSSxHQUFHTCxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0gsRUFFRDs7O0FBQ0EsSUFBSU0sUUFBUSxHQUFHLElBQUlQLFFBQUosQ0FBYTtFQUFDUSxPQUFPLEVBQUVGLElBQVY7RUFBZ0JHLFlBQVksRUFBRTtBQUE5QixDQUFiLENBQWY7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLElBUGEsZ0JBT1BQLFFBUE8sRUFPRztJQUNaSCxJQUFJLEdBQUdHLFFBQVA7SUFDQUMsSUFBSSxHQUFHTCxPQUFPLENBQUNDLElBQUQsQ0FBZDtJQUNBSyxRQUFRLENBQUNNLE9BQVQsQ0FBaUJQLElBQWpCO0VBQ0gsQ0FYWTs7RUFZYjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lRLENBMUJhLGFBMEJWQyxHQTFCVSxFQTBCTEMsR0ExQkssRUEwQkE7SUFDVCxPQUFPVCxRQUFRLENBQUNPLENBQVQsQ0FBV0MsR0FBWCxFQUFnQkMsR0FBaEIsQ0FBUDtFQUNIO0FBNUJZLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb2x5Z2xvdCA9IHJlcXVpcmUoJ3BvbHlnbG90Jyk7XG5cbmxldCBsYW5nID0gY2Muc3lzLmxhbmd1YWdlO1xubGV0IGRhdGE7XG5pZiAobGFuZyA9PT0gJ3poJykge1xuICAgIGRhdGEgPSByZXF1aXJlKCd6aCcpO1xufVxuZWxzZSB7XG4gICAgZGF0YSA9IHJlcXVpcmUoJ2VuJyk7XG59XG5cbi8vIGxldCBwb2x5Z2xvdCA9IG51bGw7XG5sZXQgcG9seWdsb3QgPSBuZXcgUG9seWdsb3Qoe3BocmFzZXM6IGRhdGEsIGFsbG93TWlzc2luZzogdHJ1ZX0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGFsbG93IHlvdSB0byBzd2l0Y2ggbGFuZ3VhZ2UgZHVyaW5nIHJ1bnRpbWUsIGxhbmd1YWdlIGFyZ3VtZW50IHNob3VsZCBiZSB0aGUgc2FtZSBhcyB5b3VyIGRhdGEgZmlsZSBuYW1lXG4gICAgICogc3VjaCBhcyB3aGVuIGxhbmd1YWdlIGlzICd6aCcsIGl0IHdpbGwgbG9hZCB5b3VyICd6aC5qcycgZGF0YSBzb3VyY2UuXG4gICAgICogQG1ldGhvZCBpbml0XG4gICAgICogQHBhcmFtIGxhbmd1YWdlIC0gdGhlIGxhbmd1YWdlIHNwZWNpZmljIGRhdGEgZmlsZSBuYW1lLCBzdWNoIGFzICd6aCcgdG8gbG9hZCAnemguanMnXG4gICAgICovXG4gICAgaW5pdCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgbGFuZyA9IGxhbmd1YWdlO1xuICAgICAgICBkYXRhID0gcmVxdWlyZShsYW5nKTtcbiAgICAgICAgcG9seWdsb3QucmVwbGFjZShkYXRhKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIHRoaXMgbWV0aG9kIHRha2VzIGEgdGV4dCBrZXkgYXMgaW5wdXQsIGFuZCByZXR1cm4gdGhlIGxvY2FsaXplZCBzdHJpbmdcbiAgICAgKiBQbGVhc2UgcmVhZCBodHRwczovL2dpdGh1Yi5jb20vYWlyYm5iL3BvbHlnbG90LmpzIGZvciBkZXRhaWxzXG4gICAgICogQG1ldGhvZCB0XG4gICAgICogQHJldHVybiB7U3RyaW5nfSBsb2NhbGl6ZWQgc3RyaW5nXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIHZhciBteVRleHQgPSBpMThuLnQoJ01ZX1RFWFRfS0VZJyk7XG4gICAgICpcbiAgICAgKiAvLyBpZiB5b3VyIGRhdGEgc291cmNlIGlzIGRlZmluZWQgYXNcbiAgICAgKiAvLyB7XCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIn1cbiAgICAgKiAvLyB5b3UgY2FuIHVzZSB0aGUgZm9sbG93aW5nIHRvIGludGVycG9sYXRlIHRoZSB0ZXh0XG4gICAgICogdmFyIGdyZWV0aW5nVGV4dCA9IGkxOG4udCgnaGVsbG9fbmFtZScsIHtuYW1lOiAnbmFudGFzJ30pOyAvLyBIZWxsbywgbmFudGFzXG4gICAgICovXG4gICAgdCAoa2V5LCBvcHQpIHtcbiAgICAgICAgcmV0dXJuIHBvbHlnbG90LnQoa2V5LCBvcHQpO1xuICAgIH1cbn07Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/LabelLocalized.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4f88adp3hERoJ48DZ2PSAl', 'LabelLocalized');
// i18n/LabelLocalized.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Label,
  properties: {
    textKey: {
      "default": 'TEXT_KEY',
      multiline: true,
      tooltip: 'Enter i18n key here',
      notify: function notify() {
        if (this._sgNode) {
          this._sgNode.setString(this.string);

          this._updateNodeSize();
        }
      }
    },
    string: {
      override: true,
      tooltip: 'Here shows the localized string of Text Key',
      get: function get() {
        return i18n.t(this.textKey);
      },
      set: function set(value) {
        this.textKey = value;
        cc.warn('Please set label text key in Text Key property.');
      }
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pMThuL0xhYmVsTG9jYWxpemVkLmpzIl0sIm5hbWVzIjpbImkxOG4iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkxhYmVsIiwicHJvcGVydGllcyIsInRleHRLZXkiLCJtdWx0aWxpbmUiLCJ0b29sdGlwIiwibm90aWZ5IiwiX3NnTm9kZSIsInNldFN0cmluZyIsInN0cmluZyIsIl91cGRhdGVOb2RlU2l6ZSIsIm92ZXJyaWRlIiwiZ2V0IiwidCIsInNldCIsInZhbHVlIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsS0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFO01BQ0wsV0FBUyxVQURKO01BRUxDLFNBQVMsRUFBRSxJQUZOO01BR0xDLE9BQU8sRUFBRSxxQkFISjtNQUlMQyxNQUFNLEVBQUUsa0JBQVk7UUFDaEIsSUFBSSxLQUFLQyxPQUFULEVBQWtCO1VBQ2QsS0FBS0EsT0FBTCxDQUFhQyxTQUFiLENBQXVCLEtBQUtDLE1BQTVCOztVQUNBLEtBQUtDLGVBQUw7UUFDSDtNQUNKO0lBVEksQ0FERDtJQVlSRCxNQUFNLEVBQUU7TUFDSkUsUUFBUSxFQUFFLElBRE47TUFFSk4sT0FBTyxFQUFFLDZDQUZMO01BR0pPLEdBQUcsRUFBRSxlQUFZO1FBQ2IsT0FBT2YsSUFBSSxDQUFDZ0IsQ0FBTCxDQUFPLEtBQUtWLE9BQVosQ0FBUDtNQUNILENBTEc7TUFNSlcsR0FBRyxFQUFFLGFBQVVDLEtBQVYsRUFBaUI7UUFDbEIsS0FBS1osT0FBTCxHQUFlWSxLQUFmO1FBQ0FoQixFQUFFLENBQUNpQixJQUFILENBQVEsaURBQVI7TUFDSDtJQVRHO0VBWkE7QUFIUCxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkxhYmVsLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0S2V5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnVEVYVF9LRVknLFxuICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ0VudGVyIGkxOG4ga2V5IGhlcmUnLFxuICAgICAgICAgICAgbm90aWZ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NnTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZ05vZGUuc2V0U3RyaW5nKHRoaXMuc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTm9kZVNpemUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0cmluZzoge1xuICAgICAgICAgICAgb3ZlcnJpZGU6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiAnSGVyZSBzaG93cyB0aGUgbG9jYWxpemVkIHN0cmluZyBvZiBUZXh0IEtleScsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTE4bi50KHRoaXMudGV4dEtleSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRLZXkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYy53YXJuKCdQbGVhc2Ugc2V0IGxhYmVsIHRleHQga2V5IGluIFRleHQgS2V5IHByb3BlcnR5LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/tiled/hero-control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fc86RgnPlPjLOL8x/OVTmI', 'hero-control');
// cases/demo/tiled/hero-control.js

"use strict";

// game art from : https://openpixelproject.itch.io/opp2017sprites
var MOVE_LEFT = 1;
var MOVE_RIGHT = 2;
cc.macro.ENABLE_TILEDMAP_CULLING = false;
cc.Class({
  "extends": cc.Component,
  properties: {
    maxSpeed: 500,
    jumps: 2,
    acceleration: 1500,
    jumpSpeed: 200,
    drag: 600
  },
  // use this for initialization
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    this._moveFlags = 0;
    this._up = false;
    this.body = this.getComponent(cc.RigidBody);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.KEY.a:
      case cc.KEY.left:
        this._moveFlags |= MOVE_LEFT;
        break;

      case cc.KEY.d:
      case cc.KEY.right:
        this._moveFlags |= MOVE_RIGHT;
        break;

      case cc.KEY.up:
        if (!this._upPressed) {
          this._up = true;
        }

        this._upPressed = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.KEY.a:
      case cc.KEY.left:
        this._moveFlags &= ~MOVE_LEFT;
        break;

      case cc.KEY.d:
      case cc.KEY.right:
        this._moveFlags &= ~MOVE_RIGHT;
        break;

      case cc.KEY.up:
        this._upPressed = false;
        break;
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var speed = this.body.linearVelocity;

    if (this._moveFlags === MOVE_LEFT) {
      // this.anim.play('walk');
      if (this.node.scaleX > 0) {
        this.node.scaleX *= -1;
      }

      speed.x -= this.acceleration * dt;

      if (speed.x < -this.maxSpeed) {
        speed.x = -this.maxSpeed;
      }
    } else if (this._moveFlags === MOVE_RIGHT) {
      // this.anim.play('walk');
      if (this.node.scaleX < 0) {
        this.node.scaleX *= -1;
      }

      speed.x += this.acceleration * dt;

      if (speed.x > this.maxSpeed) {
        speed.x = this.maxSpeed;
      }
    } else {
      if (speed.x != 0) {
        var d = this.drag * dt;

        if (Math.abs(speed.x) <= d) {
          speed.x = 0; // this.anim.play('idle');
        } else {
          speed.x -= speed.x > 0 ? d : -d;
        }
      }
    }

    if (Math.abs(speed.y) < 1) {
      this.jumps = 2;
    }

    if (this.jumps > 0 && this._up) {
      speed.y = this.jumpSpeed;
      this.jumps--;
    }

    this._up = false;
    this.body.linearVelocity = speed;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3RpbGVkL2hlcm8tY29udHJvbC5qcyJdLCJuYW1lcyI6WyJNT1ZFX0xFRlQiLCJNT1ZFX1JJR0hUIiwiY2MiLCJtYWNybyIsIkVOQUJMRV9USUxFRE1BUF9DVUxMSU5HIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWF4U3BlZWQiLCJqdW1wcyIsImFjY2VsZXJhdGlvbiIsImp1bXBTcGVlZCIsImRyYWciLCJvbkxvYWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJfbW92ZUZsYWdzIiwiX3VwIiwiYm9keSIsImdldENvbXBvbmVudCIsIlJpZ2lkQm9keSIsImV2ZW50Iiwia2V5Q29kZSIsIktFWSIsImEiLCJsZWZ0IiwiZCIsInJpZ2h0IiwidXAiLCJfdXBQcmVzc2VkIiwidXBkYXRlIiwiZHQiLCJzcGVlZCIsImxpbmVhclZlbG9jaXR5Iiwibm9kZSIsInNjYWxlWCIsIngiLCJNYXRoIiwiYWJzIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsdUJBQVQsR0FBbUMsS0FBbkM7QUFFQUYsRUFBRSxDQUFDRyxLQUFILENBQVM7RUFDTCxXQUFTSCxFQUFFLENBQUNJLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRSxHQURGO0lBRVJDLEtBQUssRUFBRSxDQUZDO0lBR1JDLFlBQVksRUFBRSxJQUhOO0lBSVJDLFNBQVMsRUFBRSxHQUpIO0lBS1JDLElBQUksRUFBRTtFQUxFLENBSFA7RUFXTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEJYLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxFQUFmLENBQWtCYixF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NEI7UUFDeEI4QixLQUFLLENBQUNJLENBQU4sR0FBVSxLQUFLbEMsUUFBZjtNQUNIO0lBQ0osQ0FYSSxNQVlBO01BQ0QsSUFBRzhCLEtBQUssQ0FBQ0ksQ0FBTixJQUFXLENBQWQsRUFBaUI7UUFDYixJQUFJVixDQUFDLEdBQUcsS0FBS3BCLElBQUwsR0FBWXlCLEVBQXBCOztRQUNBLElBQUdNLElBQUksQ0FBQ0MsR0FBTCxDQUFTTixLQUFLLENBQUNJLENBQWYsS0FBcUJWLENBQXhCLEVBQTJCO1VBQ3ZCTSxLQUFLLENBQUNJLENBQU4sR0FBVSxDQUFWLENBRHVCLENBRXZCO1FBQ0gsQ0FIRCxNQUdPO1VBQ0hKLEtBQUssQ0FBQ0ksQ0FBTixJQUFXSixLQUFLLENBQUNJLENBQU4sR0FBVSxDQUFWLEdBQWNWLENBQWQsR0FBa0IsQ0FBQ0EsQ0FBOUI7UUFDSDtNQUNKO0lBQ0o7O0lBRUQsSUFBR1csSUFBSSxDQUFDQyxHQUFMLENBQVNOLEtBQUssQ0FBQ08sQ0FBZixJQUFvQixDQUF2QixFQUEwQjtNQUN0QixLQUFLcEMsS0FBTCxHQUFlLENBQWY7SUFDSDs7SUFFRCxJQUFJLEtBQUtBLEtBQUwsR0FBYSxDQUFiLElBQWtCLEtBQUtjLEdBQTNCLEVBQWdDO01BQzVCZSxLQUFLLENBQUNPLENBQU4sR0FBVSxLQUFLbEMsU0FBZjtNQUNBLEtBQUtGLEtBQUw7SUFDSDs7SUFFRCxLQUFLYyxHQUFMLEdBQVcsS0FBWDtJQUNBLEtBQUtDLElBQUwsQ0FBVWUsY0FBVixHQUEyQkQsS0FBM0I7RUFDSDtBQTlHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnYW1lIGFydCBmcm9tIDogaHR0cHM6Ly9vcGVucGl4ZWxwcm9qZWN0Lml0Y2guaW8vb3BwMjAxN3Nwcml0ZXNcblxuY29uc3QgTU9WRV9MRUZUID0gMTtcbmNvbnN0IE1PVkVfUklHSFQgPSAyO1xuXG5jYy5tYWNyby5FTkFCTEVfVElMRURNQVBfQ1VMTElORyA9IGZhbHNlO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXhTcGVlZDogNTAwLFxuICAgICAgICBqdW1wczogMixcbiAgICAgICAgYWNjZWxlcmF0aW9uOiAxNTAwLFxuICAgICAgICBqdW1wU3BlZWQ6IDIwMCxcbiAgICAgICAgZHJhZzogNjAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl9tb3ZlRmxhZ3MgPSAwO1xuXG4gICAgICAgIHRoaXMuX3VwID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlRmxhZ3MgfD0gTU9WRV9MRUZUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuZDpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVGbGFncyB8PSBNT1ZFX1JJR0hUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91cFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl91cFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlRmxhZ3MgJj0gfk1PVkVfTEVGVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlRmxhZ3MgJj0gfk1PVkVfUklHSFQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcbiAgICAgICAgICAgICAgICB0aGlzLl91cFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdmFyIHNwZWVkID0gdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5O1xuXG4gICAgICAgIGlmKHRoaXMuX21vdmVGbGFncyA9PT0gTU9WRV9MRUZUKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheSgnd2FsaycpO1xuXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwZWVkLnggLT0gdGhpcy5hY2NlbGVyYXRpb24gKiBkdDtcbiAgICAgICAgICAgIGlmKHNwZWVkLnggPCAtdGhpcy5tYXhTcGVlZCkge1xuICAgICAgICAgICAgICAgIHNwZWVkLnggPSAtdGhpcy5tYXhTcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fbW92ZUZsYWdzID09PSBNT1ZFX1JJR0hUKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheSgnd2FsaycpO1xuXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwZWVkLnggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiBkdDtcbiAgICAgICAgICAgIGlmKHNwZWVkLnggPiB0aGlzLm1heFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgc3BlZWQueCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHNwZWVkLnggIT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5kcmFnICogZHQ7XG4gICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMoc3BlZWQueCkgPD0gZCkge1xuICAgICAgICAgICAgICAgICAgICBzcGVlZC54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoJ2lkbGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcGVlZC54IC09IHNwZWVkLnggPiAwID8gZCA6IC1kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoTWF0aC5hYnMoc3BlZWQueSkgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBzICAgPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuanVtcHMgPiAwICYmIHRoaXMuX3VwKSB7XG4gICAgICAgICAgICBzcGVlZC55ID0gdGhpcy5qdW1wU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBzLS07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBzcGVlZDtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/stick-arrow/shoot-arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ac60G/olhOy7Kbp3Jz4Kon', 'shoot-arrow');
// cases/demo/stick-arrow/shoot-arrow.js

"use strict";

// http://www.iforce2d.net/b2dtut/sticky-projectiles
// http://www.emanueleferonato.com/2012/12/14/box2d-flying-arrow-engine-first-attempt/
cc.Class({
  "extends": cc.Component,
  properties: {
    arrow: {
      type: cc.Node,
      "default": null
    }
  },
  onEnable: function onEnable() {
    this.debugDrawFlags = cc.director.getPhysicsManager().debugDrawFlags;
    cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
  },
  onDisable: function onDisable() {
    cc.director.getPhysicsManager().debugDrawFlags = this.debugDrawFlags;
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.arrowBodies = [];
  },
  onTouchBegan: function onTouchBegan(event) {
    var touchLoc = event.touch.getLocation();
    var node = cc.instantiate(this.arrow);
    node.active = true;
    var vec = cc.v2(touchLoc).sub(node.position);
    node.rotation = -Math.atan2(vec.y, vec.x) * 180 / Math.PI;
    cc.director.getScene().addChild(node);
    var distance = vec.mag();
    var velocity = vec.normalize().mulSelf(800);
    var arrowBody = node.getComponent(cc.RigidBody);
    arrowBody.linearVelocity = velocity;
    this.arrowBodies.push(arrowBody);
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var dragConstant = 0.1;
    var arrowBodies = this.arrowBodies;

    for (var i = 0; i < arrowBodies.length; i++) {
      var arrowBody = arrowBodies[i];
      var velocity = arrowBody.linearVelocity;
      var speed = velocity.mag();
      if (speed === 0) continue;
      var direction = velocity.normalize();
      var pointingDirection = arrowBody.getWorldVector(cc.v2(1, 0));
      var flightDirection = arrowBody.linearVelocity;
      var flightSpeed = flightDirection.mag();
      flightDirection.normalizeSelf();
      var dot = flightDirection.dot(pointingDirection);
      var dragForceMagnitude = (1 - Math.abs(dot)) * flightSpeed * flightSpeed * dragConstant * arrowBody.getMass();
      var arrowTailPosition = arrowBody.getWorldPoint(cc.v2(-80, 0));
      arrowBody.applyForce(flightDirection.mul(-dragForceMagnitude), arrowTailPosition, false);
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL3N0aWNrLWFycm93L3Nob290LWFycm93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXJyb3ciLCJ0eXBlIiwiTm9kZSIsIm9uRW5hYmxlIiwiZGVidWdEcmF3RmxhZ3MiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0Iiwib25EaXNhYmxlIiwib25Mb2FkIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJhcnJvd0JvZGllcyIsImV2ZW50IiwidG91Y2hMb2MiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwiaW5zdGFudGlhdGUiLCJhY3RpdmUiLCJ2ZWMiLCJ2MiIsInN1YiIsInBvc2l0aW9uIiwicm90YXRpb24iLCJNYXRoIiwiYXRhbjIiLCJ5IiwieCIsIlBJIiwiZ2V0U2NlbmUiLCJhZGRDaGlsZCIsImRpc3RhbmNlIiwibWFnIiwidmVsb2NpdHkiLCJub3JtYWxpemUiLCJtdWxTZWxmIiwiYXJyb3dCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwibGluZWFyVmVsb2NpdHkiLCJwdXNoIiwidXBkYXRlIiwiZHQiLCJkcmFnQ29uc3RhbnQiLCJpIiwibGVuZ3RoIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJwb2ludGluZ0RpcmVjdGlvbiIsImdldFdvcmxkVmVjdG9yIiwiZmxpZ2h0RGlyZWN0aW9uIiwiZmxpZ2h0U3BlZWQiLCJub3JtYWxpemVTZWxmIiwiZG90IiwiZHJhZ0ZvcmNlTWFnbml0dWRlIiwiYWJzIiwiZ2V0TWFzcyIsImFycm93VGFpbFBvc2l0aW9uIiwiZ2V0V29ybGRQb2ludCIsImFwcGx5Rm9yY2UiLCJtdWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSxF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QUFoQjtNQUVBLElBQUljLGlCQUFpQixHQUFHWixTQUFTLENBQUNhLGNBQVYsQ0FBMEIzRCxFQUFFLENBQUM4QixFQUFILENBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBMUIsQ0FBeEI7TUFDQSxJQUFJOEIsZUFBZSxHQUFHZCxTQUFTLENBQUNHLGNBQWhDO01BQ0EsSUFBSVksV0FBVyxHQUFHRCxlQUFlLENBQUNsQixHQUFoQixFQUFsQjtNQUNBa0IsZUFBZSxDQUFDRSxhQUFoQjtNQUVBLElBQUlDLEdBQUcsR0FBR0gsZUFBZSxDQUFDRyxHQUFoQixDQUFvQkwsaUJBQXBCLENBQVY7TUFDQSxJQUFJTSxrQkFBa0IsR0FBRyxDQUFDLElBQUk5QixJQUFJLENBQUMrQixHQUFMLENBQVNGLEdBQVQsQ0FBTCxJQUFzQkYsV0FBdEIsR0FBb0NBLFdBQXBDLEdBQWtEUixZQUFsRCxHQUFpRVAsU0FBUyxDQUFDb0IsT0FBVixFQUExRjtNQUVBLElBQUlDLGlCQUFpQixHQUFHckIsU0FBUyxDQUFDc0IsYUFBVixDQUF5QnBFLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTyxDQUFDLEVBQVIsRUFBWSxDQUFaLENBQXpCLENBQXhCO01BQ0FnQixTQUFTLENBQUN1QixVQUFWLENBQXNCVCxlQUFlLENBQUNVLEdBQWhCLENBQW9CLENBQUNOLGtCQUFyQixDQUF0QixFQUFnRUcsaUJBQWhFLEVBQW1GLEtBQW5GO0lBQ0g7RUFDSjtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3Lmlmb3JjZTJkLm5ldC9iMmR0dXQvc3RpY2t5LXByb2plY3RpbGVzXG4vLyBodHRwOi8vd3d3LmVtYW51ZWxlZmVyb25hdG8uY29tLzIwMTIvMTIvMTQvYm94MmQtZmx5aW5nLWFycm93LWVuZ2luZS1maXJzdC1hdHRlbXB0L1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYnVnRHJhd0ZsYWdzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncztcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IFxuICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9qb2ludEJpdCB8XG4gICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XG4gICAgICAgICAgICA7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gdGhpcy5kZWJ1Z0RyYXdGbGFncztcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFycm93Qm9kaWVzID0gW107XG4gICAgfSxcblxuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaExvYyA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFycm93KTtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGxldCB2ZWMgPSBjYy52Mih0b3VjaExvYykuc3ViKG5vZGUucG9zaXRpb24pO1xuICAgICAgICBub2RlLnJvdGF0aW9uID0gLU1hdGguYXRhbjIodmVjLnksIHZlYy54KSAqIDE4MCAvIE1hdGguUEk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlKTtcblxuICAgICAgICBsZXQgZGlzdGFuY2UgPSAgdmVjLm1hZygpO1xuICAgICAgICBsZXQgdmVsb2NpdHkgPSAgdmVjLm5vcm1hbGl6ZSgpLm11bFNlbGYoODAwKTtcblxuICAgICAgICBsZXQgYXJyb3dCb2R5ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYXJyb3dCb2R5LmxpbmVhclZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cbiAgICAgICAgdGhpcy5hcnJvd0JvZGllcy5wdXNoKGFycm93Qm9keSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgbGV0IGRyYWdDb25zdGFudCA9IDAuMTtcbiAgICAgICAgbGV0IGFycm93Qm9kaWVzID0gdGhpcy5hcnJvd0JvZGllcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJvd0JvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFycm93Qm9keSA9IGFycm93Qm9kaWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gYXJyb3dCb2R5LmxpbmVhclZlbG9jaXR5O1xuICAgICAgICAgICAgbGV0IHNwZWVkID0gdmVsb2NpdHkubWFnKCk7XG4gICAgICAgICAgICBpZiAoc3BlZWQgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHZlbG9jaXR5Lm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICBsZXQgcG9pbnRpbmdEaXJlY3Rpb24gPSBhcnJvd0JvZHkuZ2V0V29ybGRWZWN0b3IoIGNjLnYyKCAxLCAwICkgKTtcbiAgICAgICAgICAgIGxldCBmbGlnaHREaXJlY3Rpb24gPSBhcnJvd0JvZHkubGluZWFyVmVsb2NpdHk7XG4gICAgICAgICAgICBsZXQgZmxpZ2h0U3BlZWQgPSBmbGlnaHREaXJlY3Rpb24ubWFnKCk7XG4gICAgICAgICAgICBmbGlnaHREaXJlY3Rpb24ubm9ybWFsaXplU2VsZigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZG90ID0gZmxpZ2h0RGlyZWN0aW9uLmRvdChwb2ludGluZ0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgZHJhZ0ZvcmNlTWFnbml0dWRlID0gKDEgLSBNYXRoLmFicyhkb3QpKSAqIGZsaWdodFNwZWVkICogZmxpZ2h0U3BlZWQgKiBkcmFnQ29uc3RhbnQgKiBhcnJvd0JvZHkuZ2V0TWFzcygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYXJyb3dUYWlsUG9zaXRpb24gPSBhcnJvd0JvZHkuZ2V0V29ybGRQb2ludCggY2MudjIoIC04MCwgMCApICk7XG4gICAgICAgICAgICBhcnJvd0JvZHkuYXBwbHlGb3JjZSggZmxpZ2h0RGlyZWN0aW9uLm11bCgtZHJhZ0ZvcmNlTWFnbml0dWRlKSwgYXJyb3dUYWlsUG9zaXRpb24sIGZhbHNlICk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/manifold.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL21hbmlmb2xkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicG9pbnRUZW1wIiwidHlwZSIsIk5vZGUiLCJvblByZVNvbHZlIiwiY29udGFjdCIsIndvcmxkTWFuaWZvbGQiLCJnZXRXb3JsZE1hbmlmb2xkIiwicG9pbnRzIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwicmVtb3ZlU2VsZiIsInBhcmVudCIsImkiLCJsZW5ndGgiLCJwIiwibm9kZSIsImluc3RhbnRpYXRlIiwiYWN0aXZlIiwiZmFkZU91dCIsInJlbW92ZSIsImNhbGxGdW5jIiwiYWN0aW9uIiwic2VxdWVuY2UiLCJydW5BY3Rpb24iLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRTtNQUNQQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFERjtNQUVQLFdBQVM7SUFGRjtFQURILENBSFA7RUFVTEMsVUFBVSxFQUFFLG9CQUFVQyxPQUFWLEVBQW1CO0lBQzNCLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxnQkFBUixFQUFwQjtJQUNBLElBQUlDLE1BQU0sR0FBR0YsYUFBYSxDQUFDRSxNQUEzQjtJQUNBLElBQUlDLEtBQUssR0FBR1osRUFBRSxDQUFDYSxRQUFILENBQVlDLFFBQVosRUFBWjs7SUFFQSxTQUFTQyxVQUFULEdBQXVCO01BQ25CLEtBQUtDLE1BQUwsR0FBYyxJQUFkO0lBQ0g7O0lBRUQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixNQUFNLENBQUNPLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDLElBQUlFLENBQUMsR0FBR1IsTUFBTSxDQUFDTSxDQUFELENBQWQ7TUFFQSxJQUFJRyxJQUFJLEdBQUdwQixFQUFFLENBQUNxQixXQUFILENBQWUsS0FBS2pCLFNBQXBCLENBQVg7TUFDQWdCLElBQUksQ0FBQ0UsTUFBTCxHQUFjLElBQWQ7TUFFQSxJQUFJQyxPQUFPLEdBQUd2QixFQUFFLENBQUN1QixPQUFILENBQVcsR0FBWCxDQUFkO01BQ0EsSUFBSUMsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsUUFBSCxDQUFZVixVQUFaLEVBQXdCSyxJQUF4QixDQUFiO01BQ0EsSUFBSU0sTUFBTSxHQUFHMUIsRUFBRSxDQUFDMkIsUUFBSCxDQUFZSixPQUFaLEVBQXFCQyxNQUFyQixDQUFiO01BRUFKLElBQUksQ0FBQ1EsU0FBTCxDQUFlRixNQUFmO01BQ0FOLElBQUksQ0FBQ1MsQ0FBTCxHQUFTVixDQUFDLENBQUNVLENBQVg7TUFDQVQsSUFBSSxDQUFDVSxDQUFMLEdBQVNYLENBQUMsQ0FBQ1csQ0FBWDtNQUVBVixJQUFJLENBQUNKLE1BQUwsR0FBY0osS0FBZDtJQUNIO0VBQ0osQ0FuQ0ksQ0FxQ0w7RUFDQTtFQUVBOztBQXhDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwb2ludFRlbXA6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QcmVTb2x2ZTogZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHdvcmxkTWFuaWZvbGQucG9pbnRzO1xuICAgICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNlbGYgKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9pbnRUZW1wKTtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgbGV0IGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlID0gY2MuY2FsbEZ1bmMocmVtb3ZlU2VsZiwgbm9kZSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoZmFkZU91dCwgcmVtb3ZlKTtcblxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICAgIG5vZGUueCA9IHAueDtcbiAgICAgICAgICAgIG5vZGUueSA9IHAueTtcblxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBzY2VuZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIFxuICAgIC8vIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/infinite-world/ball-control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09655/MMz1HLqVdisNNarvD', 'ball-control');
// cases/demo/infinite-world/ball-control.js

"use strict";

var MOVE_LEFT = 1;
var MOVE_RIGHT = 2;
cc.Class({
  "extends": cc.Component,
  properties: {
    maxSpeed: 1200
  },
  // use this for initialization
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    var canvas = cc.find('/Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.moveFlags = 0;
  },
  start: function start() {
    this.body = this.getComponent(cc.RigidBody);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.KEY.a:
      case cc.KEY.left:
        this.moveFlags |= MOVE_LEFT;
        this.updateMotorSpeed();
        break;

      case cc.KEY.d:
      case cc.KEY.right:
        this.moveFlags |= MOVE_RIGHT;
        this.updateMotorSpeed();
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.KEY.a:
      case cc.KEY.left:
        this.moveFlags &= ~MOVE_LEFT; // this.updateMotorSpeed();

        break;

      case cc.KEY.d:
      case cc.KEY.right:
        this.moveFlags &= ~MOVE_RIGHT; // this.updateMotorSpeed();

        break;
    }
  },
  onTouchStart: function onTouchStart(event) {
    var touchLoc = event.touch.getLocation();

    if (touchLoc.x < cc.winSize.width / 2) {
      this.moveFlags |= MOVE_LEFT;
    } else {
      this.moveFlags |= MOVE_RIGHT;
    }

    this.updateMotorSpeed();
  },
  onTouchEnd: function onTouchEnd(event) {
    var touchLoc = event.touch.getLocation();

    if (touchLoc.x < cc.winSize.width / 2) {
      this.moveFlags &= ~MOVE_LEFT;
    } else {
      this.moveFlags &= ~MOVE_RIGHT;
    } // this.updateMotorSpeed();

  },
  updateMotorSpeed: function updateMotorSpeed() {
    if (!this.body) return;
    var desiredSpeed = 0;
    if ((this.moveFlags & MOVE_LEFT) == MOVE_LEFT) desiredSpeed = -this.maxSpeed;else if ((this.moveFlags & MOVE_RIGHT) == MOVE_RIGHT) desiredSpeed = this.maxSpeed;
    this.body.angularVelocity = desiredSpeed;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (this.moveFlags) {
      this.updateMotorSpeed();
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2luZmluaXRlLXdvcmxkL2JhbGwtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJNT1ZFX0xFRlQiLCJNT1ZFX1JJR0hUIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXhTcGVlZCIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsImNhbnZhcyIsImZpbmQiLCJOb2RlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwibW92ZUZsYWdzIiwic3RhcnQiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiZXZlbnQiLCJrZXlDb2RlIiwiS0VZIiwiYSIsImxlZnQiLCJ1cGRhdGVNb3RvclNwZWVkIiwiZCIsInJpZ2h0IiwidG91Y2hMb2MiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwieCIsIndpblNpemUiLCJ3aWR0aCIsImRlc2lyZWRTcGVlZCIsImFuZ3VsYXJWZWxvY2l0eSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRyxDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFO0VBREYsQ0FIUDtFQU9MO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQkwsRUFBRSxDQUFDTSxXQUFILENBQWVDLEVBQWYsQ0FBa0JQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtJQUNBWCxFQUFFLENBQUNNLFdBQUgsQ0FBZUMs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Q0FBbkI7SUFDQSxJQUFLLENBQUMsS0FBS25CLFNBQUwsR0FBaUJ2QixTQUFsQixLQUFnQ0EsU0FBckMsRUFDSTBDLFlBQVksR0FBRyxDQUFDLEtBQUtwQyxRQUFyQixDQURKLEtBRUssSUFBSyxDQUFDLEtBQUtpQixTQUFMLEdBQWlCdEIsVUFBbEIsS0FBaUNBLFVBQXRDLEVBQ0R5QyxZQUFZLEdBQUcsS0FBS3BDLFFBQXBCO0lBQ0osS0FBS21CLElBQUwsQ0FBVWtCLGVBQVYsR0FBNEJELFlBQTVCO0VBQ0gsQ0FwRkk7RUFzRkw7RUFDQUUsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxLQUFLdEIsU0FBVCxFQUFvQjtNQUNoQixLQUFLVSxnQkFBTDtJQUNIO0VBQ0o7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTU9WRV9MRUZUID0gMTtcbmNvbnN0IE1PVkVfUklHSFQgPSAyO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXhTcGVlZDogMTIwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG5cbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJy9DYW52YXMnKTtcbiAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgPSAwO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGbGFncyB8PSBNT1ZFX0xFRlQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb3RvclNwZWVkKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgfD0gTU9WRV9SSUdIVDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVVwIChldmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgJj0gfk1PVkVfTEVGVDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGbGFncyAmPSB+TU9WRV9SSUdIVDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgdG91Y2hMb2MgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBpZiAodG91Y2hMb2MueCA8IGNjLndpblNpemUud2lkdGgvMikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgfD0gTU9WRV9MRUZUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgfD0gTU9WRV9SSUdIVDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaExvYyA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGlmICh0b3VjaExvYy54IDwgY2Mud2luU2l6ZS53aWR0aC8yKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVGbGFncyAmPSB+TU9WRV9MRUZUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgJj0gfk1PVkVfUklHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy51cGRhdGVNb3RvclNwZWVkKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZU1vdG9yU3BlZWQgKCkge1xuICAgICAgICBpZiAoICF0aGlzLmJvZHkgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzaXJlZFNwZWVkID0gMDtcbiAgICAgICAgaWYgKCAodGhpcy5tb3ZlRmxhZ3MgJiBNT1ZFX0xFRlQpID09IE1PVkVfTEVGVCApXG4gICAgICAgICAgICBkZXNpcmVkU3BlZWQgPSAtdGhpcy5tYXhTcGVlZDtcbiAgICAgICAgZWxzZSBpZiAoICh0aGlzLm1vdmVGbGFncyAmIE1PVkVfUklHSFQpID09IE1PVkVfUklHSFQgKVxuICAgICAgICAgICAgZGVzaXJlZFNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IGRlc2lyZWRTcGVlZDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZlRmxhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW90b3JTcGVlZCgpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/example/velocity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4983aK95ZdJRLBOaL9SiJYr', 'velocity');
// cases/example/velocity.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tmpNode: {
      "default": null,
      type: cc.Node
    },
    label: {
      "default": null,
      type: cc.Label
    },
    autoAllocTime: 0.5
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.allocedNodes = 0;
    this.time = 0;
    cc.find('Canvas').on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
  },
  allocNode: function allocNode() {
    if (!this.node) return;
    var node = cc.instantiate(this.tmpNode);
    node.parent = this.node;
    node.active = true;
    var body = node.getComponent(cc.RigidBody);
    this.allocedNodes++;

    if (this.label) {
      this.label.string = 'Nodes : ' + this.allocedNodes;
    }
  },
  onTouchStart: function onTouchStart() {
    // this.allocNode();
    this.stop = !this.stop;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (this.stop) return;
    this.time += dt;
    if (this.time < this.autoAllocTime) return;
    this.time = 0;
    this.allocNode();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9leGFtcGxlL3ZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidG1wTm9kZSIsInR5cGUiLCJOb2RlIiwibGFiZWwiLCJMYWJlbCIsImF1dG9BbGxvY1RpbWUiLCJvbkxvYWQiLCJhbGxvY2VkTm9kZXMiLCJ0aW1lIiwiZmluZCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJhbGxvY05vZGUiLCJub2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhY3RpdmUiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwic3RyaW5nIiwic3RvcCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFO01BQ0wsV0FBUyxJQURKO01BRUxDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZKLENBREQ7SUFLUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZOLENBTEM7SUFTUkMsYUFBYSxFQUFFO0VBVFAsQ0FIUDtFQWVMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLENBQVo7SUFFQVosRUFBRSxDQUFDYSxJQUFILENBQVEsUUFBUixFQUFrQkMsRUFBbEIsQ0FBcUJkLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxTQUFSLENBQWtCQyxXQUF2QyxFQUFvRCxLQUFLQyxZQUF6RCxFQUF1RSxJQUF2RTtFQUNILENBckJJO0VBdUJMQyxTQUFTLEVBQUUscUJBQVk7SUFDbkIsSUFBSSxDQUFDLEtBQUtDLElBQVYsRUFBZ0I7SUFFaEIsSUFBSUEsSUFBSSxHQUFHbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlLEtBQUtoQixPQUFwQixDQUFYO0lBQ0FlLElBQUksQ0FBQ0UsTUFBTCxHQUFjLEtBQUtGLElBQW5CO0lBQ0FBLElBQUksQ0FBQ0csTUFBTCxHQUFjLElBQWQ7SUFFQSxJQUFJQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssWUFBTCxDQUFrQnhCLEVBQUUsQ0FBQ3lCLFNBQXJCLENBQVg7SUFFQSxLQUFLZCxZQUFMOztJQUVBLElBQUksS0FBS0osS0FBVCxFQUFnQjtNQUNaLEtBQUtBLEtBQUwsQ0FBV21CLE1BQVgsR0FBb0IsYUFBYSxLQUFLZixZQUF0QztJQUNIO0VBQ0osQ0FyQ0k7RUF1Q0xNLFlBQVksRUFBRSx3QkFBWTtJQUN0QjtJQUNBLEtBQUtVLElBQUwsR0FBWSxDQUFDLEtBQUtBLElBQWxCO0VBQ0gsQ0ExQ0k7RUE0Q0w7RUFDQUMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxLQUFLRixJQUFULEVBQWU7SUFFZixLQUFLZixJQUFMLElBQWFpQixFQUFiO0lBQ0EsSUFBSSxLQUFLakIsSUFBTCxHQUFZLEtBQUtILGFBQXJCLEVBQW9DO0lBRXBDLEtBQUtHLElBQUwsR0FBWSxDQUFaO0lBQ0EsS0FBS00sU0FBTDtFQUNIO0FBckRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRtcE5vZGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b0FsbG9jVGltZTogMC41XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFsbG9jZWROb2RlcyA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIFxuICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBhbGxvY05vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUpIHJldHVybjtcblxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudG1wTm9kZSk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIGJvZHkgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuXG4gICAgICAgIHRoaXMuYWxsb2NlZE5vZGVzICsrO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ05vZGVzIDogJyArIHRoaXMuYWxsb2NlZE5vZGVzO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLmFsbG9jTm9kZSgpO1xuICAgICAgICB0aGlzLnN0b3AgPSAhdGhpcy5zdG9wO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3ApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGltZSArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMuYXV0b0FsbG9jVGltZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuYWxsb2NOb2RlKCk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/blob/smooth.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '728adjSVu9P25Kw0adaz7UV', 'smooth');
// cases/demo/blob/smooth.js

'use strict'; // smooth helper

function getFirstControlPoints(rhs) {
  var n = rhs.length,
      x = [],
      // Solution vector.
  tmp = [],
      // Temp workspace.
  b = 2.0,
      i;
  x[0] = rhs[0] / b;

  for (i = 1; i < n; i++) {
    // Decomposition and forward substitution.
    tmp[i] = 1 / b;
    b = (i < n - 1 ? 4.0 : 2.0) - tmp[i];
    x[i] = (rhs[i] - x[i - 1]) / b;
  }

  for (i = 1; i < n; i++) {
    x[n - i - 1] -= tmp[n - i] * x[n - i]; // Backsubstitution.
  }

  return x;
}

function getCubicBezierCurvePoints(points, firstControlPoints, secondControlPoints) {
  var size = points.length,
      closed = points[size - 1].x === points[0].x && points[size - 1].y === points[0].y,
      n = size,
      // Add overlapping ends for averaging handles in closed paths
  overlap = 0;

  if (closed) {
    size = n = size - 1;
  }

  if (size <= 2) return;

  if (closed) {
    // Overlap up to 4 points since averaging beziers affect the 4
    // neighboring points
    overlap = Math.min(size, 4);
    n += Math.min(size, overlap) * 2;
  }

  var knots = [];

  for (var i = 0; i < size; i++) {
    knots[i + overlap] = points[i];
  }

  if (closed) {
    // If we're averaging, add the 4 last points again at the
    // beginning, and the 4 first ones at the end.
    for (var i = 0; i < overlap; i++) {
      knots[i] = points[i + size - overlap];
      knots[i + size + overlap] = points[i];
    }
  } else {
    n--;
  } // Calculate first Bezier control points
  // Right hand side vector


  var rhs = []; // Set right hand side X values

  for (var i = 1; i < n - 1; i++) {
    rhs[i] = 4 * knots[i].x + 2 * knots[i + 1].x;
  }

  rhs[0] = knots[0].x + 2 * knots[1].x;
  rhs[n - 1] = 3 * knots[n - 1].x; // Get first control points X-values

  var x = getFirstControlPoints(rhs); // Set right hand side Y values

  for (var i = 1; i < n - 1; i++) {
    rhs[i] = 4 * knots[i].y + 2 * knots[i + 1].y;
  }

  rhs[0] = knots[0].y + 2 * knots[1].y;
  rhs[n - 1] = 3 * knots[n - 1].y; // Get first control points Y-values

  var y = getFirstControlPoints(rhs);

  if (closed) {
    // Do the actual averaging simply by linearly fading between the
    // overlapping values.
    for (var i = 0, j = size; i < overlap; i++, j++) {
      var f1 = i / overlap,
          f2 = 1 - f1,
          ie = i + overlap,
          je = j + overlap; // Beginning

      x[j] = x[i] * f1 + x[j] * f2;
      y[j] = y[i] * f1 + y[j] * f2; // End

      x[je] = x[ie] * f2 + x[je] * f1;
      y[je] = y[ie] * f2 + y[je] * f1;
    }

    n--;
  } // Now set the calculated handles


  for (var i = overlap; i <= n - overlap; i++) {
    firstControlPoints[i - overlap] = {
      x: x[i],
      y: y[i]
    };

    if (i < n - 1) {
      secondControlPoints[i - overlap] = {
        x: 2 * knots[i + 1].x - x[i + 1],
        y: 2 * knots[i + 1].y - y[i + 1]
      };
    } else {
      secondControlPoints[i - overlap] = {
        x: (knots[n].x + x[n - 1]) / 2,
        y: (knots[n].y + y[n - 1]) / 2
      };
    }
  }
}

function getCubicBezierCurvePath(knots) {
  var firstControlPoints = [],
      secondControlPoints = [];
  getCubicBezierCurvePoints(knots, firstControlPoints, secondControlPoints);
  return [firstControlPoints, secondControlPoints];
}

module.exports = getCubicBezierCurvePath;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2Jsb2Ivc21vb3RoLmpzIl0sIm5hbWVzIjpbImdldEZpcnN0Q29udHJvbFBvaW50cyIsInJocyIsIm4iLCJsZW5ndGgiLCJ4IiwidG1wIiwiYiIsImkiLCJnZXRDdWJpY0JlemllckN1cnZlUG9pbnRzIiwicG9pbnRzIiwiZmlyc3RDb250cm9sUG9pbnRzIiwic2Vjb25kQ29udHJvbFBvaW50cyIsInNpemUiLCJjbG9zZWQiLCJ5Iiwib3ZlcmxhcCIsIk1hdGgiLCJtaW4iLCJrbm90cyIsImoiLCJmMSIsImYyIiwiaWUiLCJqZSIsImdldEN1YmljQmV6aWVyQ3VydmVQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FFQTs7QUFDQSxTQUFTQSxxQkFBVCxDQUErQkMsR0FBL0IsRUFBb0M7RUFDaEMsSUFBSUMsQ0FBQyxHQUFHRCxHQUFHLENBQUNFLE1BQVo7RUFBQSxJQUNJQyxDQUFDLEdBQUcsRUFEUjtFQUFBLElBQ2dCO0VBQ1pDLEdBQUcsR0FBRyxFQUZWO0VBQUEsSUFFZ0I7RUFDWkMsQ0FBQyxHQUFHLEdBSFI7RUFBQSxJQUlJQyxDQUpKO0VBTUFILENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0gsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTSyxDQUFoQjs7RUFFQSxLQUFLQyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdMLENBQWhCLEVBQW1CSyxDQUFDLEVBQXBCLEVBQXdCO0lBQUU7SUFDdEJGLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFILEdBQVMsSUFBSUQsQ0FBYjtJQUNBQSxDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHTCxDQUFDLEdBQUcsQ0FBUixHQUFZLEdBQVosR0FBa0IsR0FBbkIsSUFBMEJHLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFqQztJQUNBSCxDQUFDLENBQUNHLENBQUQsQ0FBRCxHQUFPLENBQUNOLEdBQUcsQ0FBQ00sQ0FBRCxDQUFILEdBQVNI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QUcsQ0FBTCxDQURNO1FBRS9CTyxDQUFDLEVBQUUsSUFBSUksS0FBSyxDQUFDWCxDQUFDLEdBQUcsQ0FBTCxDQUFMLENBQWFPLENBQWpCLEdBQXFCQSxDQUFDLENBQUNQLENBQUMsR0FBRyxDQUFMO01BRk0sQ0FBbkM7SUFJSCxDQUxELE1BTUs7TUFDREksbUJBQW1CLENBQUNKLENBQUMsR0FBR1EsT0FBTCxDQUFuQixHQUFtQztRQUMvQlgsQ0FBQyxFQUFFLENBQUNjLEtBQUssQ0FBQ2hCLENBQUQsQ0FBTCxDQUFTRSxDQUFULEdBQWFBLENBQUMsQ0FBQ0YsQ0FBQyxHQUFHLENBQUwsQ0FBZixJQUEwQixDQURFO1FBRS9CWSxDQUFDLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDaEIsQ0FBRCxDQUFMLENBQVNZLENBQVQsR0FBYUEsQ0FBQyxDQUFDWixDQUFDLEdBQUcsQ0FBTCxDQUFmLElBQTBCO01BRkUsQ0FBbkM7SUFJSDtFQUNKO0FBQ0o7O0FBRUQsU0FBU3NCLHVCQUFULENBQWlDTixLQUFqQyxFQUF3QztFQUNwQyxJQUFJUixrQkFBa0IsR0FBRyxFQUF6QjtFQUFBLElBQ0lDLG1CQUFtQixHQUFHLEVBRDFCO0VBR0FILHlCQUF5QixDQUFDVSxLQUFELEVBQVFSLGtCQUFSLEVBQTRCQyxtQkFBNUIsQ0FBekI7RUFFQSxPQUFPLENBQUNELGtCQUFELEVBQXFCQyxtQkFBckIsQ0FBUDtBQUNIOztBQUVEYyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLHVCQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBzbW9vdGggaGVscGVyXG5mdW5jdGlvbiBnZXRGaXJzdENvbnRyb2xQb2ludHMocmhzKSB7XG4gICAgdmFyIG4gPSByaHMubGVuZ3RoLFxuICAgICAgICB4ID0gW10sICAgICAvLyBTb2x1dGlvbiB2ZWN0b3IuXG4gICAgICAgIHRtcCA9IFtdLCAgIC8vIFRlbXAgd29ya3NwYWNlLlxuICAgICAgICBiID0gMi4wLFxuICAgICAgICBpO1xuXG4gICAgeFswXSA9IHJoc1swXSAvIGI7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7IC8vIERlY29tcG9zaXRpb24gYW5kIGZvcndhcmQgc3Vic3RpdHV0aW9uLlxuICAgICAgICB0bXBbaV0gPSAxIC8gYjtcbiAgICAgICAgYiA9IChpIDwgbiAtIDEgPyA0LjAgOiAyLjApIC0gdG1wW2ldO1xuICAgICAgICB4W2ldID0gKHJoc1tpXSAtIHhbaSAtIDFdKSAvIGI7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICB4W24gLSBpIC0gMV0gLT0gdG1wW24gLSBpXSAqIHhbbiAtIGldOyAvLyBCYWNrc3Vic3RpdHV0aW9uLlxuICAgIH1cbiAgICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3ViaWNCZXppZXJDdXJ2ZVBvaW50cyhwb2ludHMsIGZpcnN0Q29udHJvbFBvaW50cywgc2Vjb25kQ29udHJvbFBvaW50cykge1xuICAgIHZhciBzaXplID0gcG9pbnRzLmxlbmd0aCxcbiAgICAgICAgY2xvc2VkID0gcG9pbnRzW3NpemUtMV0ueCA9PT0gcG9pbnRzWzBdLnggJiYgcG9pbnRzW3NpemUtMV0ueSA9PT0gcG9pbnRzWzBdLnksXG4gICAgICAgIG4gPSBzaXplLFxuICAgICAgICAvLyBBZGQgb3ZlcmxhcHBpbmcgZW5kcyBmb3IgYXZlcmFnaW5nIGhhbmRsZXMgaW4gY2xvc2VkIHBhdGhzXG4gICAgICAgIG92ZXJsYXAgPSAwO1xuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgICBzaXplID0gbiA9IHNpemUtMTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSAyKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgICAvLyBPdmVybGFwIHVwIHRvIDQgcG9pbnRzIHNpbmNlIGF2ZXJhZ2luZyBiZXppZXJzIGFmZmVjdCB0aGUgNFxuICAgICAgICAvLyBuZWlnaGJvcmluZyBwb2ludHNcbiAgICAgICAgb3ZlcmxhcCA9IE1hdGgubWluKHNpemUsIDQpO1xuICAgICAgICBuICs9IE1hdGgubWluKHNpemUsIG92ZXJsYXApICogMjtcbiAgICB9XG5cbiAgICB2YXIga25vdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKylcbiAgICAgICAga25vdHNbaSArIG92ZXJsYXBdID0gcG9pbnRzW2ldO1xuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgICAgLy8gSWYgd2UncmUgYXZlcmFnaW5nLCBhZGQgdGhlIDQgbGFzdCBwb2ludHMgYWdhaW4gYXQgdGhlXG4gICAgICAgIC8vIGJlZ2lubmluZywgYW5kIHRoZSA0IGZpcnN0IG9uZXMgYXQgdGhlIGVuZC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvdmVybGFwOyBpKyspIHtcbiAgICAgICAgICAgIGtub3RzW2ldID0gcG9pbnRzW2kgKyBzaXplIC0gb3ZlcmxhcF07XG4gICAgICAgICAgICBrbm90c1tpICsgc2l6ZSArIG92ZXJsYXBdID0gcG9pbnRzW2ldO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICAvLyBDYWxjdWxhdGUgZmlyc3QgQmV6aWVyIGNvbnRyb2wgcG9pbnRzXG4gICAgLy8gUmlnaHQgaGFuZCBzaWRlIHZlY3RvclxuICAgIHZhciByaHMgPSBbXTtcblxuICAgIC8vIFNldCByaWdodCBoYW5kIHNpZGUgWCB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG4gLSAxOyBpKyspXG4gICAgICAgIHJoc1tpXSA9IDQgKiBrbm90c1tpXS54ICsgMiAqIGtub3RzW2kgKyAxXS54O1xuICAgIHJoc1swXSA9IGtub3RzWzBdLnggKyAyICoga25vdHNbMV0ueDtcbiAgICByaHNbbiAtIDFdID0gMyAqIGtub3RzW24gLSAxXS54O1xuICAgIC8vIEdldCBmaXJzdCBjb250cm9sIHBvaW50cyBYLXZhbHVlc1xuICAgIHZhciB4ID0gZ2V0Rmlyc3RDb250cm9sUG9pbnRzKHJocyk7XG5cbiAgICAvLyBTZXQgcmlnaHQgaGFuZCBzaWRlIFkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKVxuICAgICAgICByaHNbaV0gPSA0ICoga25vdHNbaV0ueSArIDIgKiBrbm90c1tpICsgMV0ueTtcbiAgICByaHNbMF0gPSBrbm90c1swXS55ICsgMiAqIGtub3RzWzFdLnk7XG4gICAgcmhzW24gLSAxXSA9IDMgKiBrbm90c1tuIC0gMV0ueTtcbiAgICAvLyBHZXQgZmlyc3QgY29udHJvbCBwb2ludHMgWS12YWx1ZXNcbiAgICB2YXIgeSA9IGdldEZpcnN0Q29udHJvbFBvaW50cyhyaHMpO1xuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgICAvLyBEbyB0aGUgYWN0dWFsIGF2ZXJhZ2luZyBzaW1wbHkgYnkgbGluZWFybHkgZmFkaW5nIGJldHdlZW4gdGhlXG4gICAgICAgIC8vIG92ZXJsYXBwaW5nIHZhbHVlcy5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBzaXplOyBpIDwgb3ZlcmxhcDsgaSsrLCBqKyspIHtcbiAgICAgICAgICAgIHZhciBmMSA9IGkgLyBvdmVybGFwLFxuICAgICAgICAgICAgICAgIGYyID0gMSAtIGYxLFxuICAgICAgICAgICAgICAgIGllID0gaSArIG92ZXJsYXAsXG4gICAgICAgICAgICAgICAgamUgPSBqICsgb3ZlcmxhcDtcbiAgICAgICAgICAgIC8vIEJlZ2lubmluZ1xuICAgICAgICAgICAgeFtqXSA9IHhbaV0gKiBmMSArIHhbal0gKiBmMjtcbiAgICAgICAgICAgIHlbal0gPSB5W2ldICogZjEgKyB5W2pdICogZjI7XG4gICAgICAgICAgICAvLyBFbmRcbiAgICAgICAgICAgIHhbamVdID0geFtpZV0gKiBmMiArIHhbamVdICogZjE7XG4gICAgICAgICAgICB5W2plXSA9IHlbaWVdICogZjIgKyB5W2plXSAqIGYxO1xuICAgICAgICB9XG4gICAgICAgIG4tLTtcbiAgICB9XG5cbiAgICAvLyBOb3cgc2V0IHRoZSBjYWxjdWxhdGVkIGhhbmRsZXNcbiAgICBmb3IgKHZhciBpID0gb3ZlcmxhcDsgaSA8PSBuIC0gb3ZlcmxhcDsgaSsrKSB7XG5cbiAgICAgICAgZmlyc3RDb250cm9sUG9pbnRzW2kgLSBvdmVybGFwXSA9IHtcbiAgICAgICAgICAgIHg6IHhbaV0sXG4gICAgICAgICAgICB5OiB5W2ldXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGkgPCBuIC0gMSkge1xuICAgICAgICAgICAgc2Vjb25kQ29udHJvbFBvaW50c1tpIC0gb3ZlcmxhcF0gPSB7XG4gICAgICAgICAgICAgICAgeDogMiAqIGtub3RzW2kgKyAxXS54IC0geFtpICsgMV0sXG4gICAgICAgICAgICAgICAgeTogMiAqIGtub3RzW2kgKyAxXS55IC0geVtpICsgMV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWNvbmRDb250cm9sUG9pbnRzW2kgLSBvdmVybGFwXSA9IHtcbiAgICAgICAgICAgICAgICB4OiAoa25vdHNbbl0ueCArIHhbbiAtIDFdKSAvIDIsXG4gICAgICAgICAgICAgICAgeTogKGtub3RzW25dLnkgKyB5W24gLSAxXSkgLyAyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdWJpY0JlemllckN1cnZlUGF0aChrbm90cykge1xuICAgIHZhciBmaXJzdENvbnRyb2xQb2ludHMgPSBbXSxcbiAgICAgICAgc2Vjb25kQ29udHJvbFBvaW50cyA9IFtdO1xuXG4gICAgZ2V0Q3ViaWNCZXppZXJDdXJ2ZVBvaW50cyhrbm90cywgZmlyc3RDb250cm9sUG9pbnRzLCBzZWNvbmRDb250cm9sUG9pbnRzKTtcblxuICAgIHJldHVybiBbZmlyc3RDb250cm9sUG9pbnRzLCBzZWNvbmRDb250cm9sUG9pbnRzXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRDdWJpY0JlemllckN1cnZlUGF0aDtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/infinite-world/camera-control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2luZmluaXRlLXdvcmxkL2NhbWVyYS1jb250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJjYW1lcmEiLCJnZXRDb21wb25lbnQiLCJDYW1lcmEiLCJsYXRlVXBkYXRlIiwiZHQiLCJ0YXJnZXRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMyIiwiWkVSTyIsIm5vZGUiLCJwb3NpdGlvbiIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicmF0aW8iLCJ5Iiwid2luU2l6ZSIsImhlaWdodCIsInpvb21SYXRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFETDtNQUVKQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTDtFQURBLENBSFA7RUFVTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsTUFBTCxHQUFjLEtBQUtDLFlBQUwsQ0FBa0JULEVBQUUsQ0FBQ1UsTUFBckIsQ0FBZDtFQUNILENBYkk7RUFlTDtFQUNBQyxVQUFVLEVBQUUsb0JBQVVDLEVBQVYsRUFBYztJQUN0QixJQUFJQyxTQUFTLEdBQUcsS0FBS1QsTUFBTCxDQUFZVSxxQkFBWixDQUFrQ2QsRUFBRSxDQUFDZSxJQUFILENBQVFDLElBQTFDLENBQWhCO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLEdBQXFCLEtBQUtELElBQUwsQ0FBVUUsTUFBVixDQUFpQkMsb0JBQWpCLENBQXNDUCxTQUF0QyxDQUFyQjtJQUVBLElBQUlRLEtBQUssR0FBR1IsU0FBUyxDQUFDUyxDQUFWLEdBQWN0QixFQUFFLENBQUN1QixPQUFILENBQVdDLE1BQXJDO0lBQ0EsS0FBS2hCLE1BQUwsQ0FBWWlCLFNBQVosR0FBd0IsSUFBSSxDQUFDLE1BQU1KLEtBQVAsSUFBZ0IsR0FBNUM7RUFDSDtBQXRCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICBsYXRlVXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMudGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFBvcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmF0aW8gPSB0YXJnZXRQb3MueSAvIGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxICsgKDAuNSAtIHJhdGlvKSAqIDAuNTtcbiAgICB9LFxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/example/chain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b66ddrAwGdIDL2ef4BiAnew', 'chain');
// cases/example/chain.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var itemWidth = 30;
    var itemHeight = 8;
    var y = 250;
    var prevBody = this.getComponent(cc.RigidBody);

    for (var i = 0; i < 15; ++i) {
      var node = new cc.Node();
      node.position = cc.v2((0.5 + i) * itemWidth, y);
      var body = node.addComponent(cc.RigidBody);
      var collider = node.addComponent(cc.PhysicsBoxCollider);
      collider.size = cc.size(itemWidth, itemHeight);
      collider.density = 20;
      var joint = node.addComponent(cc.RevoluteJoint);
      joint.collideConnected = false;
      joint.anchor = cc.v2(-itemWidth / 2, 0);
      joint.connectedAnchor = i === 0 ? cc.v2(0, y) : cc.v2(itemWidth / 2, 0);
      joint.connectedBody = prevBody;
      this.node.addChild(node);
      prevBody = body;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9leGFtcGxlL2NoYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJpdGVtV2lkdGgiLCJpdGVtSGVpZ2h0IiwieSIsInByZXZCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiaSIsIm5vZGUiLCJOb2RlIiwicG9zaXRpb24iLCJ2MiIsImJvZHkiLCJhZGRDb21wb25lbnQiLCJjb2xsaWRlciIsIlBoeXNpY3NCb3hDb2xsaWRlciIsInNpemUiLCJkZW5zaXR5Iiwiam9pbnQiLCJSZXZvbHV0ZUpvaW50IiwiY29sbGlkZUNvbm5lY3RlZCIsImFuY2hvciIsImNvbm5lY3RlZEFuY2hvciIsImNvbm5lY3RlZEJvZHkiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLENBQWpCO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHLEdBQVI7SUFDQSxJQUFJQyxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQlIsRUFBRSxDQUFDUyxTQUFyQixDQUFmOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtNQUN6QixJQUFJQyxJQUFJLEdBQUcsSUFBSVgsRUFBRSxDQUFDWSxJQUFQLEVBQVg7TUFDQUQsSUFBSSxDQUFDRSxRQUFMLEdBQWdCYixFQUFFLENBQUNjLEVBQUgsQ0FBTSxDQUFDLE1BQUlKLENBQUwsSUFBVU4sU0FBaEIsRUFBMkJFLENBQTNCLENBQWhCO01BQ0EsSUFBSVMsSUFBSSxHQUFHSixJQUFJLENBQUNLLFlBQUwsQ0FBa0JoQixFQUFFLENBQUNTLFNBQXJCLENBQVg7TUFFQSxJQUFJUSxRQUFRLEdBQUdOLElBQUksQ0FBQ0ssWUFBTCxDQUFrQmhCLEVBQUUsQ0FBQ2tCLGtCQUFyQixDQUFmO01BQ0FELFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQm5CLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUWYsU0FBUixFQUFtQkMsVUFBbkIsQ0FBaEI7TUFDQVksUUFBUSxDQUFDRyxPQUFULEdBQW1CLEVBQW5CO01BRUEsSUFBSUMsS0FBSyxHQUFHVixJQUFJLENBQUNLLFlBQUwsQ0FBa0JoQixFQUFFLENBQUNzQixhQUFyQixDQUFaO01BQ0FELEtBQUssQ0FBQ0UsZ0JBQU4sR0FBeUIsS0FBekI7TUFDQUYsS0FBSyxDQUFDRyxNQUFOLEdBQWV4QixFQUFFLENBQUNjLEVBQUgsQ0FBTSxDQUFDVixTQUFELEdBQVcsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBZjtNQUNBaUIsS0FBSyxDQUFDSSxlQUFOLEdBQXdCZixDQUFDLEtBQUssQ0FBTixHQUFVVixFQUFFLENBQUNjLEVBQUgsQ0FBTSxDQUFOLEVBQVNSLENBQVQsQ0FBVixHQUF3Qk4sRUFBRSxDQUFDYyxFQUFILENBQU1WLFNBQVMsR0FBQyxDQUFoQixFQUFtQixDQUFuQixDQUFoRDtNQUNBaUIsS0FBSyxDQUFDSyxhQUFOLEdBQXNCbkIsUUFBdEI7TUFFQSxLQUFLSSxJQUFMLENBQVVnQixRQUFWLENBQW1CaEIsSUFBbkI7TUFFQUosUUFBUSxHQUFHUSxJQUFYO0lBQ0g7RUFDSjtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBpdGVtV2lkdGggPSAzMDtcbiAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSA4O1xuICAgICAgICBsZXQgeSA9IDI1MDtcbiAgICAgICAgbGV0IHByZXZCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MudjIoKDAuNStpKSAqIGl0ZW1XaWR0aCwgeSk7XG4gICAgICAgICAgICBsZXQgYm9keSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG5cbiAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZShpdGVtV2lkdGgsIGl0ZW1IZWlnaHQpO1xuICAgICAgICAgICAgY29sbGlkZXIuZGVuc2l0eSA9IDIwO1xuXG4gICAgICAgICAgICBsZXQgam9pbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcbiAgICAgICAgICAgIGpvaW50LmNvbGxpZGVDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGpvaW50LmFuY2hvciA9IGNjLnYyKC1pdGVtV2lkdGgvMiwgMCk7XG4gICAgICAgICAgICBqb2ludC5jb25uZWN0ZWRBbmNob3IgPSBpID09PSAwID8gY2MudjIoMCwgeSkgOiBjYy52MihpdGVtV2lkdGgvMiwgMCk7XG4gICAgICAgICAgICBqb2ludC5jb25uZWN0ZWRCb2R5ID0gcHJldkJvZHk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcblxuICAgICAgICAgICAgcHJldkJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/test/body-enabled.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy90ZXN0L2JvZHktZW5hYmxlZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwibm9kZXMiLCJOb2RlIiwib25Mb2FkIiwib25CdXR0b25DbGlja2VkIiwic3RyaW5nIiwiZm9yRWFjaCIsIm5vZGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRk4sQ0FEQztJQU1SQyxLQUFLLEVBQUU7TUFDSCxXQUFTLG9CQUFNO1FBQUUsT0FBTyxFQUFQO01BQVksQ0FEMUI7TUFFSEYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRk47RUFOQyxDQUhQO0VBZUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZLENBRW5CLENBbEJJO0VBb0JMQyxlQUFlLEVBQUUsMkJBQVk7SUFDekIsSUFBSSxLQUFLTixLQUFMLENBQVdPLE1BQVgsS0FBc0IsVUFBMUIsRUFBc0M7TUFDbEMsS0FBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CLFVBQUFDLElBQUksRUFBSTtRQUN2QkEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsS0FBZDtNQUNILENBRkQ7TUFHQSxLQUFLVixLQUFMLENBQVdPLE1BQVgsR0FBb0IsU0FBcEI7SUFDSCxDQUxELE1BTUssSUFBSSxLQUFLUCxLQUFMLENBQVdPLE1BQVgsS0FBc0IsU0FBMUIsRUFBcUM7TUFDdEMsS0FBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CLFVBQUFDLElBQUksRUFBSTtRQUN2QkEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsSUFBZDtNQUNILENBRkQ7TUFHQSxLQUFLVixLQUFMLENBQVdPLE1BQVgsR0FBb0IsVUFBcEI7SUFDSDtFQUNKLENBakNJLENBbUNMO0VBQ0E7RUFFQTs7QUF0Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG5cbiAgICBvbkJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFiZWwuc3RyaW5nID09PSAnRGlzYWJsZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTsgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdFbmFibGVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmxhYmVsLnN0cmluZyA9PT0gJ0VuYWJsZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlOyAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0Rpc2FibGVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/blob/blob-emit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11e48Geo5JDBIVpJkHK7DFw', 'blob-emit');
// cases/demo/blob/blob-emit.js

"use strict";

var Blob = require('blob');

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    blob: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
  },
  onTouchBegan: function onTouchBegan(event) {
    var touchLoc = event.touch.getLocation();
    var node = cc.instantiate(this.blob);
    var blob = node.getComponent(Blob);
    blob.init();
    blob.emitTo(touchLoc);
    node.active = true;
    node.parent = cc.director.getScene();
  } // called every frame, uncomment this function to activate update callback
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2Jsb2IvYmxvYi1lbWl0LmpzIl0sIm5hbWVzIjpbIkJsb2IiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9iIiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hCZWdhbiIsImV2ZW50IiwidG91Y2hMb2MiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiZW1pdFRvIiwiYWN0aXZlIiwicGFyZW50IiwiZGlyZWN0b3IiLCJnZXRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQWxCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQyxJQUFJLEVBQUU7TUFDRixXQUFTLElBRFA7TUFFRkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRlA7RUFYRSxDQUhQO0VBb0JMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVQsRUFBRSxDQUFDTSxJQUFILENBQVFJLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFlBQWpELEVBQStELElBQS9EO0VBQ0gsQ0F2Qkk7RUF5QkxBLFlBQVksRUFBRSxzQkFBVUMsS0FBVixFQUFpQjtJQUMzQixJQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxXQUFaLEVBQWY7SUFFQSxJQUFJUixJQUFJLEdBQUdSLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZSxLQUFLYixJQUFwQixDQUFYO0lBQ0EsSUFBSUEsSUFBSSxHQUFHSSxJQUFJLENBQUNVLFlBQUwsQ0FBa0JwQixJQUFsQixDQUFYO0lBQ0FNLElBQUksQ0FBQ2UsSUFBTDtJQUNBZixJQUFJLENBQUNnQixNQUFMLENBQVlOLFFBQVo7SUFFQU4sSUFBSSxDQUFDYSxNQUFMLEdBQWMsSUFBZDtJQUNBYixJQUFJLENBQUNjLE1BQUwsR0FBY3RCLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsUUFBWixFQUFkO0VBQ0gsQ0FuQ0ksQ0FxQ0w7RUFDQTtFQUVBOztBQXhDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQmxvYiA9IHJlcXVpcmUoJ2Jsb2InKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgYmxvYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0b3VjaExvYyA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2IpO1xuICAgICAgICB2YXIgYmxvYiA9IG5vZGUuZ2V0Q29tcG9uZW50KEJsb2IpO1xuICAgICAgICBibG9iLmluaXQoKTtcbiAgICAgICAgYmxvYi5lbWl0VG8odG91Y2hMb2MpO1xuXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/AdaptiveSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4edf1JTF/BHIKZVY3FaAqsT', 'AdaptiveSprite');
// start-scene/scripts/Global/AdaptiveSprite.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    padding: 20,
    label: {
      "default": null,
      type: cc.Node
    },
    backgroup: {
      "default": null,
      type: cc.Node
    }
  },
  update: function update() {
    if (this.backgroup.width !== this.label.width) {
      this.backgroup.width = this.label.width + this.padding;
    }

    if (this.backgroup.height !== this.label.height) {
      this.backgroup.height = this.label.height + this.padding;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9BZGFwdGl2ZVNwcml0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZGRpbmciLCJsYWJlbCIsInR5cGUiLCJOb2RlIiwiYmFja2dyb3VwIiwidXBkYXRlIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUVSQyxPQUFPLEVBQUUsRUFGRDtJQUlSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFTixFQUFFLENBQUNPO0lBRk4sQ0FKQztJQVNSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEYsSUFBSSxFQUFFTixFQUFFLENBQUNPO0lBRkY7RUFUSCxDQUhQO0VBbUJMRSxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSSxLQUFLRCxTQUFMLENBQWVFLEtBQWYsS0FBeUIsS0FBS0wsS0FBTCxDQUFXSyxLQUF4QyxFQUErQztNQUMzQyxLQUFLRixTQUFMLENBQWVFLEtBQWYsR0FBdUIsS0FBS0wsS0FBTCxDQUFXSyxLQUFYLEdBQW1CLEtBQUtOLE9BQS9DO0lBQ0g7O0lBQ0QsSUFBSSxLQUFLSSxTQUFMLENBQWVHLE1BQWYsS0FBMEIsS0FBS04sS0FBTCxDQUFXTSxNQUF6QyxFQUFpRDtNQUM3QyxLQUFLSCxTQUFMLENBQWVHLE1BQWYsR0FBd0IsS0FBS04sS0FBTCxDQUFXTSxNQUFYLEdBQW9CLEtBQUtQLE9BQWpEO0lBQ0g7RUFDSjtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHBhZGRpbmc6IDIwLFxuXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIGJhY2tncm91cDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdXAud2lkdGggIT09IHRoaXMubGFiZWwud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VwLndpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHRoaXMucGFkZGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdXAuaGVpZ2h0ICE9PSB0aGlzLmxhYmVsLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdXAuaGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyB0aGlzLnBhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa63bWNE8hBf4P4Sp0X2uT0', 'ListItem');
// start-scene/scripts/Global/ListItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    url: '',
    bg: cc.Sprite,
    btn: cc.Button
  },
  init: function init(menu) {
    this.index = -1;
    this.menu = menu;
  },
  loadExample: function loadExample() {
    if (this.url) {
      this.menu.loadScene(this.url);
    }
  },
  updateItem: function updateItem(idx, y, name, url) {
    var isDir = !url;
    this.index = idx;
    this.node.y = y;
    this.node.x = isDir ? 50 : 100;
    this.label.string = name;
    this.url = url;
    this.bg.enabled = !isDir;
    this.btn.interactable = !isDir;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidXJsIiwiYmciLCJTcHJpdGUiLCJidG4iLCJCdXR0b24iLCJpbml0IiwibWVudSIsImluZGV4IiwibG9hZEV4YW1wbGUiLCJsb2FkU2NlbmUiLCJ1cGRhdGVJdGVtIiwiaWR4IiwieSIsIm5hbWUiLCJpc0RpciIsIm5vZGUiLCJ4Iiwic3RyaW5nIiwiZW5hYmxlZCIsImludGVyYWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtNQUNILFdBQVMsSUFETjtNQUVIQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTixDQURDO0lBS1JDLEdBQUcsRUFBRSxFQUxHO0lBTVJDLEVBQUUsRUFBRVIsRUFBRSxDQUFDUyxNQU5DO0lBT1JDLEdBQUcsRUFBRVYsRUFBRSxDQUFDVztFQVBBLENBSFA7RUFhTEMsSUFiSyxnQkFhQ0MsSUFiRCxFQWFPO0lBQ1IsS0FBS0MsS0FBTCxHQUFhLENBQUMsQ0FBZDtJQUNBLEtBQUtELElBQUwsR0FBWUEsSUFBWjtFQUNILENBaEJJO0VBa0JMRSxXQUFXLEVBQUUsdUJBQVk7SUFDckIsSUFBSSxLQUFLUixHQUFULEVBQWM7TUFDVixLQUFLTSxJQUFMLENBQVVHLFNBQVYsQ0FBb0IsS0FBS1QsR0FBekI7SUFDSDtFQUNKLENBdEJJO0VBd0JMVSxVQXhCSyxzQkF3Qk9DLEdBeEJQLEVBd0JZQyxDQXhCWixFQXdCZUMsSUF4QmYsRUF3QnFCYixHQXhCckIsRUF3QjBCO0lBQzNCLElBQUljLEtBQUssR0FBRyxDQUFDZCxHQUFiO0lBQ0EsS0FBS08sS0FBTCxHQUFhSSxHQUFiO0lBQ0EsS0FBS0ksSUFBTCxDQUFVSCxDQUFWLEdBQWNBLENBQWQ7SUFDQSxLQUFLRyxJQUFMLENBQVVDLENBQVYsR0FBY0YsS0FBSyxHQUFHLEVBQUgsR0FBUSxHQUEzQjtJQUNBLEtBQUtqQixLQUFMLENBQVdvQixNQUFYLEdBQW9CSixJQUFwQjtJQUNBLEtBQUtiLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEVBQUwsQ0FBUWlCLE9BQVIsR0FBa0IsQ0FBQ0osS0FBbkI7SUFDQSxLQUFLWCxHQUFMLENBQVNnQixZQUFULEdBQXdCLENBQUNMLEtBQXpCO0VBQ0g7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBiZzogY2MuU3ByaXRlLFxuICAgICAgICBidG46IGNjLkJ1dHRvblxuICAgIH0sXG5cbiAgICBpbml0IChtZW51KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICB9LFxuXG4gICAgbG9hZEV4YW1wbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUubG9hZFNjZW5lKHRoaXMudXJsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVJdGVtIChpZHgsIHksIG5hbWUsIHVybCkge1xuICAgICAgICBsZXQgaXNEaXIgPSAhdXJsO1xuICAgICAgICB0aGlzLmluZGV4ID0gaWR4O1xuICAgICAgICB0aGlzLm5vZGUueSA9IHk7XG4gICAgICAgIHRoaXMubm9kZS54ID0gaXNEaXIgPyA1MCA6IDEwMDtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBuYW1lO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5iZy5lbmFibGVkID0gIWlzRGlyO1xuICAgICAgICB0aGlzLmJ0bi5pbnRlcmFjdGFibGUgPSAhaXNEaXI7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/Instruction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a871gy73FDLap3Eje/2h6i', 'Instruction');
// start-scene/scripts/Global/Instruction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    text: {
      "default": '',
      multiline: true
    } // foo: {
    //    default: null,
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...

  },
  // use this for initialization
  onLoad: function onLoad() {} // called every frame
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9JbnN0cnVjdGlvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHQiLCJtdWx0aWxpbmUiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUU7TUFDRixXQUFTLEVBRFA7TUFFRkMsU0FBUyxFQUFFO0lBRlQsQ0FERSxDQUtSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFiUSxDQUhQO0VBbUJMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWSxDQUVuQixDQXRCSSxDQXdCTDtFQUNBO0VBRUE7O0FBM0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04525pyYBlN26SWawaUF3dA', 'Menu');
// start-scene/scripts/Global/Menu.js

"use strict";

var i18n = require('i18n');

var SceneList = require('SceneList');

var emptyFunc = function emptyFunc(event) {
  event.stopPropagation();
};

cc.Class({
  "extends": cc.Component,
  properties: {
    text: {
      "default": null,
      type: cc.Label
    },
    readme: {
      "default": null,
      type: cc.Node
    },
    mask: {
      "default": null,
      type: cc.Node
    },
    btnInfo: {
      "default": null,
      type: cc.Button
    },
    btnBack: {
      "default": null,
      type: cc.Button
    },
    testList: {
      "default": null,
      type: cc.ScrollView
    },
    uiCamera: {
      "default": null,
      type: cc.Camera
    }
  },
  onLoad: function onLoad() {
    this._isLoadingScene = false;
    this.showDebugDraw = false;
    cc.game.addPersistRootNode(this.node);
    this.currentSceneUrl = 'TestList.fire';
    this.contentPos = null;
    this.isMenu = true;
    this.loadInstruction(this.currentSceneUrl);
    this.node.zIndex = 999;
    cc.game.addPersistRootNode(this.testList.node);

    if (this.testList && this.testList.content) {
      // in main scene
      this.sceneList = this.testList.content.getComponent('SceneList');
      this.sceneList.init(this);
    }

    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this._onSceneLaunched, this);
  },
  _onSceneLaunched: function _onSceneLaunched() {
    var cameras = cc.Camera.cameras;

    for (var i = 0, l = cameras.length; i < l; i++) {
      var camera = cameras[i];

      if (camera === this.uiCamera) {
        camera.cullingMask = 1 << this.node.groupIndex;
      } else {
        camera.cullingMask = camera.cullingMask & ~(1 << this.node.groupIndex);
      }
    }
  },
  backToList: function backToList() {
    if (this._isLoadingScene) {
      return;
    }

    this._isLoadingScene = true;
    this.showReadme(null, false);
    this.currentSceneUrl = 'TestList.fire';
    this.isMenu = true;
    cc.director.loadScene('TestList', this.onLoadSceneFinish.bind(this));
  },
  loadScene: function loadScene(url) {
    this._isLoadingScene = true;
    this.contentPos = this.testList.getContentPosition();
    this.currentSceneUrl = url;
    this.isMenu = false;
    this.testList.node.active = false;
    cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
  },
  onLoadSceneFinish: function onLoadSceneFinish() {
    var url = this.currentSceneUrl;
    this.loadInstruction(url);
    this.testList.node.active = false;

    if (this.isMenu && this.contentPos) {
      this.testList.node.active = true;
      this.testList.setContentPosition(this.contentPos);
    }

    this._isLoadingScene = false;
  },
  loadInstruction: function loadInstruction(url) {
    var self = this;
    var urlArr = url.split('/');
    var fileName = urlArr[urlArr.length - 1].replace('.fire', '');
    cc.loader.loadRes('readme/' + fileName, function (err, txt) {
      if (err) {
        self.text.string = i18n.t("scripts/Global/Menu.js.1");
        return;
      }

      self.text.string = txt;
    });
  },
  showReadme: function showReadme(event, active) {
    if (active === undefined) {
      this.readme.active = !this.readme.active;
    } else {
      this.readme.active = active;
    }

    if (this.readme.active) {
      this.mask.on('touchstart', emptyFunc, this);
    } else {
      this.mask.off('touchstart', emptyFunc, this);
    }

    var labelTxt = this.readme.active ? '关闭说明' : '查看说明';
    cc.find('label', this.btnInfo.node).getComponent(cc.Label).textKey = labelTxt; // en: fix Collider DebugDraw always displayed on top of the problem.
    // zh：解决 Collider DebugDraw 一直显示在最上层的问题。

    var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;

    if (this.readme.active) {
      this.showDebugDraw = enabledDebugDraw;
      cc.director.getCollisionManager().enabledDebugDraw = false;
    } else {
      cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
    } // en: fix Video Player always displayed on top of the problem.
    // zh：修复 Video Player 一直显示在最上层的问题。


    var videoPlayer = cc.find('Canvas/VideoPlayer');

    if (videoPlayer) {
      videoPlayer.active = !this.readme.active;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9NZW51LmpzIl0sIm5hbWVzIjpbImkxOG4iLCJyZXF1aXJlIiwiU2NlbmVMaXN0IiwiZW1wdHlGdW5jIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHQiLCJ0eXBlIiwiTGFiZWwiLCJyZWFkbWUiLCJOb2RlIiwibWFzayIsImJ0bkluZm8iLCJCdXR0b24iLCJidG5CYWNrIiwidGVzdExpc3QiLCJTY3JvbGxWaWV3IiwidWlDYW1lcmEiLCJDYW1lcmEiLCJvbkxvYWQiLCJfaXNMb2FkaW5nU2NlbmUiLCJzaG93RGVidWdEcmF3IiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJjdXJyZW50U2NlbmVVcmwiLCJjb250ZW50UG9zIiwiaXNNZW51IiwibG9hZEluc3RydWN0aW9uIiwiekluZGV4IiwiY29udGVudCIsInNjZW5lTGlzdCIsImdldENvbXBvbmVudCIsImluaXQiLCJkaXJlY3RvciIsIm9uIiwiRGlyZWN0b3IiLCJFVkVOVF9BRlRFUl9TQ0VORV9MQVVOQ0giLCJfb25TY2VuZUxhdW5jaGVkIiwiY2FtZXJhcyIsImkiLCJsIiwibGVuZ3RoIiwiY2FtZXJhIiwiY3VsbGluZ01hc2siLCJncm91cEluZGV4IiwiYmFja1RvTGlzdCIsInNob3dSZWFkbWUiLCJsb2FkU2NlbmUiLCJvbkxvYWRTY2VuZUZpbmlzaCIsImJpbmQiLCJ1cmwiLCJnZXRDb250ZW50UG9zaXRpb24iLCJhY3RpdmUiLCJzZXRDb250ZW50UG9zaXRpb24iLCJzZWxmIiwidXJsQXJyIiwic3BsaXQiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwidHh0Iiwic3RyaW5nIiwidCIsInVuZGVmaW5lZCIsIm9mZiIsImxhYmVsVHh0IiwiZmluZCIsInRleHRLZXkiLCJlbmFibGVkRGVidWdEcmF3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cmNlc0NvbnRlbnQiOlsiY29uc3QgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcbmNvbnN0IFNjZW5lTGlzdCA9IHJlcXVpcmUoJ1NjZW5lTGlzdCcpO1xuXG52YXIgZW1wdHlGdW5jID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZG1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBtYXNrOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5JbmZvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ0bkJhY2s6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgdGVzdExpc3Q6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XG4gICAgICAgIH0sXG5cbiAgICAgICAgdWlDYW1lcmE6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5DYW1lcmFcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93RGVidWdEcmF3ID0gZmFsc2U7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lVXJsID0gJ1Rlc3RMaXN0LmZpcmUnO1xuICAgICAgICB0aGlzLmNvbnRlbnRQb3MgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTWVudSA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZEluc3RydWN0aW9uKHRoaXMuY3VycmVudFNjZW5lVXJsKTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTtcblxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLnRlc3RMaXN0Lm5vZGUpO1xuICAgICAgICBpZiAodGhpcy50ZXN0TGlzdCAmJiB0aGlzLnRlc3RMaXN0LmNvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIGluIG1haW4gc2NlbmVcbiAgICAgICAgICAgIHRoaXMuc2NlbmVMaXN0ID0gdGhpcy50ZXN0TGlzdC5jb250ZW50LmdldENvbXBvbmVudCgnU2NlbmVMaXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lTGlzdC5pbml0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfU0NFTkVfTEFVTkNILCB0aGlzLl9vblNjZW5lTGF1bmNoZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfb25TY2VuZUxhdW5jaGVkICgpIHtcbiAgICAgICAgbGV0IGNhbWVyYXMgPSBjYy5DYW1lcmEuY2FtZXJhcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjYW1lcmFzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNhbWVyYSA9IGNhbWVyYXNbaV07XG4gICAgICAgICAgICBpZiAoY2FtZXJhID09PSB0aGlzLnVpQ2FtZXJhKSB7XG4gICAgICAgICAgICAgICAgY2FtZXJhLmN1bGxpbmdNYXNrID0gMSA8PCB0aGlzLm5vZGUuZ3JvdXBJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jdWxsaW5nTWFzayA9IGNhbWVyYS5jdWxsaW5nTWFzayAmICh+KDEgPDwgdGhpcy5ub2RlLmdyb3VwSW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgYmFja1RvTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0xvYWRpbmdTY2VuZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1JlYWRtZShudWxsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lVXJsID0gJ1Rlc3RMaXN0LmZpcmUnO1xuICAgICAgICB0aGlzLmlzTWVudSA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnVGVzdExpc3QnLCB0aGlzLm9uTG9hZFNjZW5lRmluaXNoLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBsb2FkU2NlbmU6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nU2NlbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRlbnRQb3MgPSB0aGlzLnRlc3RMaXN0LmdldENvbnRlbnRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZVVybCA9IHVybDtcbiAgICAgICAgdGhpcy5pc01lbnUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodXJsLCB0aGlzLm9uTG9hZFNjZW5lRmluaXNoLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBvbkxvYWRTY2VuZUZpbmlzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5jdXJyZW50U2NlbmVVcmw7XG4gICAgICAgIHRoaXMubG9hZEluc3RydWN0aW9uKHVybCk7XG4gICAgICAgIHRoaXMudGVzdExpc3Qubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNNZW51ICYmIHRoaXMuY29udGVudFBvcykge1xuICAgICAgICAgICAgdGhpcy50ZXN0TGlzdC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRlc3RMaXN0LnNldENvbnRlbnRQb3NpdGlvbih0aGlzLmNvbnRlbnRQb3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzTG9hZGluZ1NjZW5lID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGxvYWRJbnN0cnVjdGlvbjogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB1cmxBcnIgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gdXJsQXJyW3VybEFyci5sZW5ndGggLSAxXS5yZXBsYWNlKCcuZmlyZScsICcnKTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JlYWRtZS8nICsgZmlsZU5hbWUsIGZ1bmN0aW9uKGVyciwgdHh0KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0LnN0cmluZyA9IGkxOG4udChcInNjcmlwdHMvR2xvYmFsL01lbnUuanMuMVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnRleHQuc3RyaW5nID0gdHh0O1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd1JlYWRtZTogZnVuY3Rpb24gKGV2ZW50LCBhY3RpdmUpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRtZS5hY3RpdmUgPSAhdGhpcy5yZWFkbWUuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWFkbWUuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlYWRtZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubWFzay5vbigndG91Y2hzdGFydCcsIGVtcHR5RnVuYywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sub2ZmKCd0b3VjaHN0YXJ0JywgZW1wdHlGdW5jLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFiZWxUeHQgPSB0aGlzLnJlYWRtZS5hY3RpdmUgPyAn5YWz6Zet6K+05piOJyA6ICfmn6XnnIvor7TmmI4nO1xuICAgICAgICBjYy5maW5kKCdsYWJlbCcsIHRoaXMuYnRuSW5mby5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnRleHRLZXkgPSBsYWJlbFR4dDtcblxuICAgICAgICAvLyBlbjogZml4IENvbGxpZGVyIERlYnVnRHJhdyBhbHdheXMgZGlzcGxheWVkIG9uIHRvcCBvZiB0aGUgcHJvYmxlbS5cbiAgICAgICAgLy8gemjvvJrop6PlhrMgQ29sbGlkZXIgRGVidWdEcmF3IOS4gOebtOaYvuekuuWcqOacgOS4iuWxgueahOmXrumimOOAglxuICAgICAgICB2YXIgZW5hYmxlZERlYnVnRHJhdyA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3O1xuICAgICAgICBpZiAodGhpcy5yZWFkbWUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dEZWJ1Z0RyYXcgPSBlbmFibGVkRGVidWdEcmF3O1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdGhpcy5zaG93RGVidWdEcmF3O1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuOiBmaXggVmlkZW8gUGxheWVyIGFsd2F5cyBkaXNwbGF5ZWQgb24gdG9wIG9mIHRoZSBwcm9ibGVtLlxuICAgICAgICAvLyB6aO+8muS/ruWkjSBWaWRlbyBQbGF5ZXIg5LiA55u05pi+56S65Zyo5pyA5LiK5bGC55qE6Zeu6aKY44CCXG4gICAgICAgIHZhciB2aWRlb1BsYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9WaWRlb1BsYXllcicpO1xuICAgICAgICBpZiAodmlkZW9QbGF5ZXIpIHtcbiAgICAgICAgICAgIHZpZGVvUGxheWVyLmFjdGl2ZSA9ICF0aGlzLnJlYWRtZS5hY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/TipsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c9bezFtu5AHZUcydh+6QJj', 'TipsManager');
// start-scene/scripts/Global/TipsManager.js

"use strict";

//
// 用于提示用户哪些范例不支持平台
//
var i18n = require('i18n'); // 平台检查


var PlatformType = cc.Enum({
  Node: 0,
  Native: 1,
  Native_Desktop: 2,
  Mobile: 10,
  Mobile_Android: 11,
  Runtime: 20,
  WebGl: 30,
  Canvas: 31,
  Native_Browser_Chrome: 100
});
var canvas = null;
cc.Class({
  "extends": cc.Component,
  properties: {
    support: false,
    // 需要检测的平台
    platform: {
      "default": PlatformType.Node,
      type: PlatformType
    }
  },
  onLoad: function onLoad() {
    this._showTips();
  },
  _checkNonSupport: function _checkNonSupport() {
    var showed = false,
        textKey = '';

    switch (this.platform) {
      case PlatformType.Native_Desktop:
        showed = cc.sys.isNative && (cc.sys.platform === cc.sys.WIN32 || cc.sys.platform === cc.sys.MACOS);
        textKey = i18n.t("example_case_nonsupport_native_desktop_tips");
        break;

      case PlatformType.Mobile:
        showed = cc.sys.isMobile;
        textKey = i18n.t("example_case_nonsupport_mobile_tips");
        break;

      case PlatformType.Runtime:
        showed = cc.runtime;
        textKey = i18n.t("example_case_nonsupport_runtime_tips");
        break;

      case PlatformType.Canvas:
        showed = cc._renderType === cc.game.RENDER_TYPE_CANVAS;
        textKey = i18n.t("example_case_nonsupport_web_canvas_tips");
        break;
    }

    return {
      showed: showed,
      textKey: textKey
    };
  },
  _checkSupport: function _checkSupport() {
    var showed = false,
        textKey = '';

    switch (this.platform) {
      case PlatformType.Mobile:
        showed = !cc.sys.isMobile || cc.runtime;
        textKey = i18n.t("example_case_support_mobile_tips");
        break;

      case PlatformType.WebGl:
        showed = cc._renderType !== cc.game.RENDER_TYPE_WEBGL;
        textKey = i18n.t("example_case_support_webGl_tips");
        break;

      case PlatformType.Mobile_Android:
        showed = !(cc.sys.isMobile && cc.sys.platform === cc.sys.ANDROID) || cc.runtime;
        textKey = i18n.t("example_case_support_mobile_android_tips");
        break;

      case PlatformType.Native_Browser_Chrome:
        showed = !(!cc.sys.isMobile && cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_CHROME);
        textKey = i18n.t("example_case_support_native_chrome_tips");
        break;
    }

    return {
      showed: showed,
      textKey: textKey
    };
  },
  _showTips: function _showTips() {
    if (this.type === PlatformType.Node) {
      return;
    }

    var info = this.support ? this._checkSupport() : this._checkNonSupport();
    var bg = this.node.getComponent(cc.Sprite);
    bg.enabled = info.showed;

    if (info.showed) {
      var content = this.node.getChildByName('Content').getComponent(cc.Label);
      content.textKey = info.textKey;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9UaXBzTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJpMThuIiwicmVxdWlyZSIsIlBsYXRmb3JtVHlwZSIsImNjIiwiRW51bSIsIk5vZGUiLCJOYXRpdmUiLCJOYXRpdmVfRGVza3RvcCIsIk1vYmlsZSIsIk1vYmlsZV9BbmRyb2lkIiwiUnVudGltZSIsIldlYkdsIiwiQ2FudmFzIiwiTmF0aXZlX0Jyb3dzZXJfQ2hyb21lIiwiY2FudmFzIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3VwcG9ydCIsInBsYXRmb3JtIiwidHlwZSIsIm9uTG9hZCIsIl9zaG93VGlwcyIsIl9jaGVja05vblN1cHBvcnQiLCJzaG93ZWQiLCJ0ZXh0S2V5Iiwic3lzIiwiaXNOYXRpdmUiLCJXSU4zMiIsIk1BQ09TIiwidCIsImlzTW9iaWxlIiwicnVudGltZSIsIl9yZW5kZXJUeXBlIiwiZ2FtZSIsIlJFTkRFUl9UWVBFX0NBTlZBUyIsIl9jaGVja1N1cHBvcnQiLCJSRU5ERVJfVFlQRV9XRUJHTCIsIkFORFJPSUQiLCJpc0Jyb3dzZXIiLCJicm93c2VyVHlwZSIsIkJST1dTRVJfVFlQRV9DSFJPTUUiLCJpbmZvIiwiYmciLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiZW5hYmxlZCIsImNvbnRlbnQiLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEIsRUFFQTs7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtFQUN2QkMsSUFBSSxFQUFFLENBRGlCO0VBRXZCQyxNQUFNLEVBQUUsQ0FGZTtFQUd2QkMsY0FBYyxFQUFFLENBSE87RUFLdkJDLE1BQU0sRUFBRSxFQUxlO0VBTXZCQyxjQUFjLEVBQUUsRUFOTztF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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8g55So5LqO5o+Q56S655So5oi35ZOq5Lqb6IyD5L6L5LiN5pSv5oyB5bmz5Y+wXG4vL1xuY29uc3QgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuLy8g5bmz5Y+w5qOA5p+lXG52YXIgUGxhdGZvcm1UeXBlID0gY2MuRW51bSh7XG4gICAgTm9kZTogMCxcbiAgICBOYXRpdmU6IDEsXG4gICAgTmF0aXZlX0Rlc2t0b3A6IDIsXG5cbiAgICBNb2JpbGU6IDEwLFxuICAgIE1vYmlsZV9BbmRyb2lkOiAxMSxcblxuICAgIFJ1bnRpbWU6IDIwLFxuXG4gICAgV2ViR2w6IDMwLFxuICAgIENhbnZhczogMzEsXG5cbiAgICBOYXRpdmVfQnJvd3Nlcl9DaHJvbWU6IDEwMFxufSk7XG5cbnZhciBjYW52YXMgPSBudWxsO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdXBwb3J0OiBmYWxzZSxcbiAgICAgICAgLy8g6ZyA6KaB5qOA5rWL55qE5bmz5Y+wXG4gICAgICAgIHBsYXRmb3JtOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBQbGF0Zm9ybVR5cGUuTm9kZSxcbiAgICAgICAgICAgIHR5cGU6IFBsYXRmb3JtVHlwZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuX3Nob3dUaXBzKCk7XG4gICAgfSxcblxuICAgIF9jaGVja05vblN1cHBvcnQgKCkge1xuICAgICAgICB2YXIgc2hvd2VkID0gZmFsc2UsIHRleHRLZXkgPSAnJztcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtVHlwZS5OYXRpdmVfRGVza3RvcDpcbiAgICAgICAgICAgICAgICBzaG93ZWQgPSAoY2Muc3lzLmlzTmF0aXZlICYmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XSU4zMiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5NQUNPUykpO1xuICAgICAgICAgICAgICAgIHRleHRLZXkgPSBpMThuLnQoXCJleGFtcGxlX2Nhc2Vfbm9uc3VwcG9ydF9uYXRpdmVfZGVza3RvcF90aXBzXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybVR5cGUuTW9iaWxlOlxuICAgICAgICAgICAgICAgIHNob3dlZCA9IGNjLnN5cy5pc01vYmlsZTtcbiAgICAgICAgICAgICAgICB0ZXh0S2V5ID0gaTE4bi50KFwiZXhhbXBsZV9jYXNlX25vbnN1cHBvcnRfbW9iaWxlX3RpcHNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtVHlwZS5SdW50aW1lOlxuICAgICAgICAgICAgICAgIHNob3dlZCA9IGNjLnJ1bnRpbWU7XG4gICAgICAgICAgICAgICAgdGV4dEtleSA9IGkxOG4udChcImV4YW1wbGVfY2FzZV9ub25zdXBwb3J0X3J1bnRpbWVfdGlwc1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm1UeXBlLkNhbnZhczpcbiAgICAgICAgICAgICAgICBzaG93ZWQgPSBjYy5fcmVuZGVyVHlwZSA9PT0gY2MuZ2FtZS5SRU5ERVJfVFlQRV9DQU5WQVM7XG4gICAgICAgICAgICAgICAgdGV4dEtleSA9IGkxOG4udChcImV4YW1wbGVfY2FzZV9ub25zdXBwb3J0X3dlYl9jYW52YXNfdGlwc1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd2VkOiBzaG93ZWQsXG4gICAgICAgICAgICB0ZXh0S2V5OiB0ZXh0S2V5XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NoZWNrU3VwcG9ydCAoKSB7XG4gICAgICAgIHZhciBzaG93ZWQgPSBmYWxzZSwgdGV4dEtleSA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm1UeXBlLk1vYmlsZTpcbiAgICAgICAgICAgICAgICBzaG93ZWQgPSAhY2Muc3lzLmlzTW9iaWxlIHx8IGNjLnJ1bnRpbWU7XG4gICAgICAgICAgICAgICAgdGV4dEtleSA9IGkxOG4udChcImV4YW1wbGVfY2FzZV9zdXBwb3J0X21vYmlsZV90aXBzXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybVR5cGUuV2ViR2w6XG4gICAgICAgICAgICAgICAgc2hvd2VkID0gY2MuX3JlbmRlclR5cGUgIT09IGNjLmdhbWUuUkVOREVSX1RZUEVfV0VCR0w7XG4gICAgICAgICAgICAgICAgdGV4dEtleSA9IGkxOG4udChcImV4YW1wbGVfY2FzZV9zdXBwb3J0X3dlYkdsX3RpcHNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtVHlwZS5Nb2JpbGVfQW5kcm9pZDpcbiAgICAgICAgICAgICAgICBzaG93ZWQgPSAhKGNjLnN5cy5pc01vYmlsZSAmJiBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5BTkRST0lEKSB8fCBjYy5ydW50aW1lO1xuICAgICAgICAgICAgICAgIHRleHRLZXkgPSBpMThuLnQoXCJleGFtcGxlX2Nhc2Vfc3VwcG9ydF9tb2JpbGVfYW5kcm9pZF90aXBzXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybVR5cGUuTmF0aXZlX0Jyb3dzZXJfQ2hyb21lOlxuICAgICAgICAgICAgICAgIHNob3dlZCA9ICEoIWNjLnN5cy5pc01vYmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5pc0Jyb3dzZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfQ0hST01FKTtcbiAgICAgICAgICAgICAgICB0ZXh0S2V5ID0gaTE4bi50KFwiZXhhbXBsZV9jYXNlX3N1cHBvcnRfbmF0aXZlX2Nocm9tZV90aXBzXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93ZWQ6IHNob3dlZCxcbiAgICAgICAgICAgIHRleHRLZXk6IHRleHRLZXlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2hvd1RpcHMgKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSBQbGF0Zm9ybVR5cGUuTm9kZSkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIGluZm8gPSB0aGlzLnN1cHBvcnQgPyB0aGlzLl9jaGVja1N1cHBvcnQoKSA6IHRoaXMuX2NoZWNrTm9uU3VwcG9ydCgpO1xuICAgICAgICB2YXIgYmcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGJnLmVuYWJsZWQgPSBpbmZvLnNob3dlZDtcbiAgICAgICAgaWYgKGluZm8uc2hvd2VkKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnQ29udGVudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBjb250ZW50LnRleHRLZXkgPSBpbmZvLnRleHRLZXk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/Helpers.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8640M3ozRErrV/Go3uTknt', 'Helpers');
// start-scene/scripts/Global/Helpers.js

"use strict";

if (CC_JSB && cc.runtime) {
  // fix cocos-creator/fireball#3578
  cc.LoaderLayer.setUseDefaultSource(false);
  cc.Dialog.setUseDefaultSource(false);
} // Returns a random integer between min (included) and max (excluded)


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  getRandomInt: getRandomInt
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9IZWxwZXJzLmpzIl0sIm5hbWVzIjpbIkNDX0pTQiIsImNjIiwicnVudGltZSIsIkxvYWRlckxheWVyIiwic2V0VXNlRGVmYXVsdFNvdXJjZSIsIkRpYWxvZyIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxJQUFJQyxFQUFFLENBQUNDLE9BQWpCLEVBQTBCO0VBQ3RCO0VBQ0FELEVBQUUsQ0FBQ0UsV0FBSCxDQUFlQyxtQkFBZixDQUFtQyxLQUFuQztFQUNBSCxFQUFFLENBQUNJLE1BQUgsQ0FBVUQsbUJBQVYsQ0FBOEIsS0FBOUI7QUFDSCxFQUVEOzs7QUFDQSxTQUFTRSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7RUFDNUIsT0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsR0FBRyxHQUFHRCxHQUF2QixDQUFYLElBQTBDQSxHQUFqRDtBQUNIOztBQUVESyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7RUFDaEJQLFlBQVksRUFBRUE7QUFERSxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKENDX0pTQiAmJiBjYy5ydW50aW1lKSB7XG4gICAgLy8gZml4IGNvY29zLWNyZWF0b3IvZmlyZWJhbGwjMzU3OFxuICAgIGNjLkxvYWRlckxheWVyLnNldFVzZURlZmF1bHRTb3VyY2UoZmFsc2UpO1xuICAgIGNjLkRpYWxvZy5zZXRVc2VEZWZhdWx0U291cmNlKGZhbHNlKTtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0UmFuZG9tSW50OiBnZXRSYW5kb21JbnRcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start-scene/scripts/Global/SceneList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '473b8wxs55OsJvoxVdYCzTF', 'SceneList');
// start-scene/scripts/Global/SceneList.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemPrefab: {
      "default": null,
      type: cc.Prefab
    },
    initItemCount: 0,
    scrollView: cc.ScrollView,
    bufferZone: 0 // when item is away from bufferZone, we relocate it

  },
  createItem: function createItem(x, y, name, url) {
    var item = cc.instantiate(this.itemPrefab);
    var itemComp = item.getComponent('ListItem');
    var label = itemComp.label;
    label.string = name;

    if (url) {
      itemComp.url = url;
    } // item.width = w;


    item.x = x;
    item.y = y;
    this.node.addChild(item);
    return item;
  },
  init: function init(menu) {
    this.menu = menu;
    this.sceneList = [];
    this.itemList = [];
    this.updateTimer = 0;
    this.updateInterval = 0.2;
    this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down

    this.initList();
  },
  // use this for initialization
  initList: function initList() {
    var scenes = cc.game._sceneInfos;
    var dict = {};

    if (scenes) {
      var i, j;

      for (i = 0; i < scenes.length; ++i) {
        var url = scenes[i].url;
        var dirname = cc.path.dirname(url).replace('db://assets/cases/', '');

        if (dirname === 'db://assets/resources/test assets') {
          continue;
        }

        var scenename = cc.path.basename(url, '.fire');
        if (scenename === 'TestList') continue;
        if (!dirname) dirname = '_root';

        if (!dict[dirname]) {
          dict[dirname] = {};
        }

        dict[dirname][scenename] = url;
      }
    } else {
      cc.log('failed to get scene list!');
    } // compile scene dict to an array


    var dirs = Object.keys(dict);
    dirs.sort();

    for (var _i = 0; _i < dirs.length; ++_i) {
      this.sceneList.push({
        name: dirs[_i],
        url: null
      });
      var scenenames = Object.keys(dict[dirs[_i]]);
      scenenames.sort();

      for (var _j = 0; _j < scenenames.length; ++_j) {
        var name = scenenames[_j];
        this.sceneList.push({
          name: name,
          url: dict[dirs[_i]][name]
        });
      }
    }

    var y = 0;
    this.node.height = (this.sceneList.length + 1) * 50;

    for (var _i2 = 0; _i2 < this.initItemCount; ++_i2) {
      var item = cc.instantiate(this.itemPrefab).getComponent('ListItem');
      var itemInfo = this.sceneList[_i2];
      item.init(this.menu);
      this.node.addChild(item.node);
      y -= 50;
      item.updateItem(_i2, y, itemInfo.name, itemInfo.url);
      this.itemList.push(item);
    }
  },
  getPositionInView: function getPositionInView(item) {
    // get item position in scrollview's node space
    var worldPos = item.parent.convertToWorldSpaceAR(item.position);
    var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
    return viewPos;
  },
  update: function update(dt) {
    this.updateTimer += dt;

    if (this.updateTimer < this.updateInterval) {
      return; // we don't need to do the math every frame
    }

    this.updateTimer = 0;
    var items = this.itemList;
    var buffer = this.bufferZone;
    var isDown = this.node.y < this.lastContentPosY; // scrolling direction

    var curItemCount = this.itemList.length;
    var offset = 50 * curItemCount;

    for (var i = 0; i < curItemCount; ++i) {
      var item = items[i];
      var itemNode = item.node;
      var viewPos = this.getPositionInView(itemNode);

      if (isDown) {
        // if away from buffer zone and not reaching top of content
        if (viewPos.y < -buffer && itemNode.y + offset < 0) {
          var newIdx = item.index - curItemCount;
          var newInfo = this.sceneList[newIdx];
          item.updateItem(newIdx, itemNode.y + offset, newInfo.name, newInfo.url);
        }
      } else {
        // if away from buffer zone and not reaching bottom of content
        if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
          var _newIdx = item.index + curItemCount;

          var _newInfo = this.sceneList[_newIdx];
          item.updateItem(_newIdx, itemNode.y - offset, _newInfo.name, _newInfo.url);
        }
      }
    } // update lastContentPosY


    this.lastContentPosY = this.node.y;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdGFydC1zY2VuZS9zY3JpcHRzL0dsb2JhbC9TY2VuZUxpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsImluaXRJdGVtQ291bnQiLCJzY3JvbGxWaWV3IiwiU2Nyb2xsVmlldyIsImJ1ZmZlclpvbmUiLCJjcmVhdGVJdGVtIiwieCIsInkiLCJuYW1lIiwidXJsIiwiaXRlbSIsImluc3RhbnRpYXRlIiwiaXRlbUNvbXAiLCJnZXRDb21wb25lbnQiLCJsYWJlbCIsInN0cmluZyIsIm5vZGUiLCJhZGRDaGlsZCIsImluaXQiLCJtZW51Iiwic2NlbmVMaXN0IiwiaXRlbUxpc3QiLCJ1cGRhdGVUaW1lciIsInVwZGF0ZUludGVydmFsIiwibGFzdENvbnRlbnRQb3NZIiwiaW5pdExpc3QiLCJzY2VuZXMiLCJnYW1lIiwiX3NjZW5lSW5mb3MiLCJkaWN0IiwiaSIsImoiLCJsZW5ndGgiLCJkaXJuYW1lIiwicGF0aCIsInJlcGxhY2UiLCJzY2VuZW5hbWUiLCJiYXNlbmFtZSIsImxvZyIsImRpcnMiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInB1c2giLCJzY2VuZW5hbWVzIiwiaGVpZ2h0IiwiaXRlbUluZm8iLCJ1cGRhdGVJdGVtIiwiZ2V0UG9zaXRpb25JblZpZXciLCJ3b3JsZFBvcyIsInBhcmVudCIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInBvc2l0aW9uIiwidmlld1BvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwidXBkYXRlIiwiZHQiLCJpdGVtcyIsImJ1ZmZlciIsImlzRG93biIsImN1ckl0ZW1Db3VudCIsIm9mZnNldCIsIml0ZW1Ob2RlIiwibmV3SWR4IiwiaW5kZXgiLCJuZXdJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0Us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Q0FBQ3ZELENBQVQsR0FBYXNELE1BQXJDLEVBQTZDSSxRQUFPLENBQUN6RCxJQUFyRCxFQUEyRHlELFFBQU8sQ0FBQ3hELEdBQW5FO1FBQ0g7TUFDSjtJQUNKLENBOUJPLENBK0JSOzs7SUFDQSxLQUFLZSxlQUFMLEdBQXVCLEtBQUtSLElBQUwsQ0FBVVQsQ0FBakM7RUFDSDtBQXhJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpdGVtUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRJdGVtQ291bnQ6IDAsXG4gICAgICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcsXG4gICAgICAgIGJ1ZmZlclpvbmU6IDAsIC8vIHdoZW4gaXRlbSBpcyBhd2F5IGZyb20gYnVmZmVyWm9uZSwgd2UgcmVsb2NhdGUgaXRcbiAgICB9LFxuXG4gICAgY3JlYXRlSXRlbTogZnVuY3Rpb24gKHgsIHksIG5hbWUsIHVybCkge1xuICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgIHZhciBpdGVtQ29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdMaXN0SXRlbScpO1xuICAgICAgICB2YXIgbGFiZWwgPSBpdGVtQ29tcC5sYWJlbDtcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gbmFtZTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBpdGVtQ29tcC51cmwgPSB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpdGVtLndpZHRoID0gdztcbiAgICAgICAgaXRlbS54ID0geDtcbiAgICAgICAgaXRlbS55ID0geTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9LFxuXG4gICAgaW5pdCAobWVudSkge1xuICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgICAgICB0aGlzLnNjZW5lTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1MaXN0ID0gW107XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gMC4yO1xuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IDA7IC8vIHVzZSB0aGlzIHZhcmlhYmxlIHRvIGRldGVjdCBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwIG9yIGRvd25cbiAgICAgICAgdGhpcy5pbml0TGlzdCgpO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBpbml0TGlzdCAoKSB7XG4gICAgICAgIHZhciBzY2VuZXMgPSBjYy5nYW1lLl9zY2VuZUluZm9zO1xuICAgICAgICB2YXIgZGljdCA9IHt9O1xuXG4gICAgICAgIGlmIChzY2VuZXMpIHtcbiAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBzY2VuZXNbaV0udXJsO1xuICAgICAgICAgICAgICAgIGxldCBkaXJuYW1lID0gY2MucGF0aC5kaXJuYW1lKHVybCkucmVwbGFjZSgnZGI6Ly9hc3NldHMvY2FzZXMvJywgJycpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJuYW1lID09PSAnZGI6Ly9hc3NldHMvcmVzb3VyY2VzL3Rlc3QgYXNzZXRzJykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNjZW5lbmFtZSA9IGNjLnBhdGguYmFzZW5hbWUodXJsLCAnLmZpcmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmVuYW1lID09PSAnVGVzdExpc3QnKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmICghZGlybmFtZSkgZGlybmFtZSA9ICdfcm9vdCc7XG4gICAgICAgICAgICAgICAgaWYgKCFkaWN0W2Rpcm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpY3RbZGlybmFtZV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGljdFtkaXJuYW1lXVtzY2VuZW5hbWVdID0gdXJsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coJ2ZhaWxlZCB0byBnZXQgc2NlbmUgbGlzdCEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb21waWxlIHNjZW5lIGRpY3QgdG8gYW4gYXJyYXlcbiAgICAgICAgbGV0IGRpcnMgPSBPYmplY3Qua2V5cyhkaWN0KTtcbiAgICAgICAgZGlycy5zb3J0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGlyc1tpXSxcbiAgICAgICAgICAgICAgICB1cmw6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHNjZW5lbmFtZXMgPSBPYmplY3Qua2V5cyhkaWN0W2RpcnNbaV1dKTtcbiAgICAgICAgICAgIHNjZW5lbmFtZXMuc29ydCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY2VuZW5hbWVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBzY2VuZW5hbWVzW2pdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGRpY3RbZGlyc1tpXV1bbmFtZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSAodGhpcy5zY2VuZUxpc3QubGVuZ3RoICsgMSkgKiA1MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluaXRJdGVtQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpLmdldENvbXBvbmVudCgnTGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIGxldCBpdGVtSW5mbyA9IHRoaXMuc2NlbmVMaXN0W2ldO1xuICAgICAgICAgICAgaXRlbS5pbml0KHRoaXMubWVudSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgIHkgLT0gNTA7XG4gICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0gKGksIHksIGl0ZW1JbmZvLm5hbWUsIGl0ZW1JbmZvLnVybCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0UG9zaXRpb25JblZpZXc6IGZ1bmN0aW9uIChpdGVtKSB7IC8vIGdldCBpdGVtIHBvc2l0aW9uIGluIHNjcm9sbHZpZXcncyBub2RlIHNwYWNlXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLnBvc2l0aW9uKTtcbiAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVyIDwgdGhpcy51cGRhdGVJbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZSBtYXRoIGV2ZXJ5IGZyYW1lXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbUxpc3Q7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLmJ1ZmZlclpvbmU7XG4gICAgICAgIGxldCBpc0Rvd24gPSB0aGlzLm5vZGUueSA8IHRoaXMubGFzdENvbnRlbnRQb3NZOyAvLyBzY3JvbGxpbmcgZGlyZWN0aW9uXG4gICAgICAgIGxldCBjdXJJdGVtQ291bnQgPSB0aGlzLml0ZW1MaXN0Lmxlbmd0aDtcbiAgICAgICAgbGV0IG9mZnNldCA9IDUwICogY3VySXRlbUNvdW50O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1ckl0ZW1Db3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gaXRlbS5ub2RlO1xuICAgICAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLmdldFBvc2l0aW9uSW5WaWV3KGl0ZW1Ob2RlKTtcbiAgICAgICAgICAgIGlmIChpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyB0b3Agb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPCAtYnVmZmVyICYmIGl0ZW1Ob2RlLnkgKyBvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdJZHggPSBpdGVtLmluZGV4IC0gY3VySXRlbUNvdW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SW5mbyA9IHRoaXMuc2NlbmVMaXN0W25ld0lkeF07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlSXRlbShuZXdJZHgsIGl0ZW1Ob2RlLnkgKyBvZmZzZXQsIG5ld0luZm8ubmFtZSwgbmV3SW5mby51cmwgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIGJvdHRvbSBvZiBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSA+IGJ1ZmZlciAmJiBpdGVtTm9kZS55IC0gb2Zmc2V0ID4gLXRoaXMubm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0lkeCA9IGl0ZW0uaW5kZXggKyBjdXJJdGVtQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbmZvID0gdGhpcy5zY2VuZUxpc3RbbmV3SWR4XTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKG5ld0lkeCwgaXRlbU5vZGUueSAtIG9mZnNldCwgbmV3SW5mby5uYW1lLCBuZXdJbmZvLnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBsYXN0Q29udGVudFBvc1lcbiAgICAgICAgdGhpcy5sYXN0Q29udGVudFBvc1kgPSB0aGlzLm5vZGUueTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

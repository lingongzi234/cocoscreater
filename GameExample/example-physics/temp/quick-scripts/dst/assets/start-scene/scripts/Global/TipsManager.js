
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

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
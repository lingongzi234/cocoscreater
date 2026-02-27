
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
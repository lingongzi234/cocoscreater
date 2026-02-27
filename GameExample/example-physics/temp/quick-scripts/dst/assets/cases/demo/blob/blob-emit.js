
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

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
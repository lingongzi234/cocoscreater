
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
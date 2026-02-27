
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
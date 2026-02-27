
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
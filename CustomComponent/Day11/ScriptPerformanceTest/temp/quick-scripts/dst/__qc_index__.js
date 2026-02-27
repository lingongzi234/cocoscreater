
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
require('./assets/Script/GameControl');
require('./assets/Script/NewScript');
require('./assets/Script/normal/BallLineTestNormal');
require('./assets/Script/normal/LineRectTestNormal');
require('./assets/Script/optimize/BallLineTestOptimize');
require('./assets/Script/optimize/LineRectTestOptimize');
require('./assets/Script/test/CopyArrayTest');
require('./assets/Script/test/FunctionTest');
require('./assets/Script/test/NumberJITTest');

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
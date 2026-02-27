
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
require('./assets/script/CCClassStudy');
require('./assets/script/CompDefaultProperty');
require('./assets/script/CompLifeSudy');
require('./assets/script/CustomSprite');
require('./assets/script/GameConst');
require('./assets/script/ImportNPMPackageAndJS');
require('./assets/script/ImportOtherComp');
require('./assets/script/NodeEvent');
require('./assets/script/NodePropertyStudy');
require('./assets/script/PropertyStudy');

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
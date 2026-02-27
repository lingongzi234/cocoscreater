
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
require('./assets/migration/use_reversed_rotateBy');
require('./assets/scripts/FlashLightCtrlComponent');
require('./assets/scripts/FlashLightEffectScene');
require('./assets/scripts/GaussianBlurV1EffectScene');
require('./assets/scripts/GlowInnerV1EffectScene');
require('./assets/scripts/GlowInnerV2EffectScene');
require('./assets/scripts/GlowOutterEffectScene');
require('./assets/scripts/GrayEffectScene');
require('./assets/scripts/LoadingStyleEffect1Scene');
require('./assets/scripts/MosaicEffectScene');
require('./assets/scripts/OldPhotoEffectScene');
require('./assets/scripts/OutlineEffectScene');
require('./assets/scripts/PointLightCtrlComponent');
require('./assets/scripts/PointLightEffectScene');
require('./assets/scripts/PreviewEffectScene');
require('./assets/scripts/RoundCornerCropV1EffectScene');
require('./assets/scripts/RoundCornerCropV2EffectScene');
require('./assets/scripts/ccutils/multiresolution/ContentAdapter');

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
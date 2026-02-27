
(function () {
var scripts = [{"deps":{"./assets/test-dt":1,"./assets/cases/utils/physics-bound":2,"./assets/i18n/data/zh":3,"./assets/cases/demo/cutting-objects":4,"./assets/cases/utils/cases-settings":5,"./assets/cases/demo/gravity-radial":6,"./assets/migration/use_v2.0.x_cc.Toggle_event":7,"./assets/physics-settings/physics-settings":8,"./assets/cases/demo/blob/blob":9,"./assets/cases/demo/stick-arrow/arrow":10,"./assets/cases/demo/tiled/impulse":11,"./assets/cases/demo/infinite-world/infinite-world":12,"./assets/cases/example/linear-impulse":13,"./assets/i18n/polyglot":14,"./assets/i18n/data/en":15,"./assets/cases/demo/ray-cast-reflection":16,"./assets/cases/demo/one-side-platform":17,"./assets/cases/demo/gravity":18,"./assets/cases/demo/conveyor-belt":19,"./assets/cases/demo/ray-cast":20,"./assets/cases/test/joint-list":21,"./assets/i18n/i18n":22,"./assets/i18n/LabelLocalized":23,"./assets/cases/demo/tiled/hero-control":24,"./assets/cases/demo/stick-arrow/shoot-arrow":25,"./assets/cases/demo/manifold":26,"./assets/cases/demo/infinite-world/ball-control":27,"./assets/cases/example/velocity":28,"./assets/cases/demo/blob/smooth":29,"./assets/cases/demo/infinite-world/camera-control":30,"./assets/cases/example/chain":31,"./assets/cases/test/body-enabled":32,"./assets/cases/demo/blob/blob-emit":33,"./assets/start-scene/scripts/Global/AdaptiveSprite":34,"./assets/start-scene/scripts/Global/ListItem":35,"./assets/start-scene/scripts/Global/Instruction":36,"./assets/start-scene/scripts/Global/Menu":37,"./assets/start-scene/scripts/Global/TipsManager":38,"./assets/start-scene/scripts/Global/Helpers":39,"./assets/start-scene/scripts/Global/SceneList":40},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/test-dt.js"},{"deps":{},"path":"preview-scripts/assets/cases/utils/physics-bound.js"},{"deps":{},"path":"preview-scripts/assets/i18n/data/zh.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/cutting-objects.js"},{"deps":{},"path":"preview-scripts/assets/cases/utils/cases-settings.js"},{"deps":{"gravity":18},"path":"preview-scripts/assets/cases/demo/gravity-radial.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/physics-settings/physics-settings.js"},{"deps":{"smooth":29},"path":"preview-scripts/assets/cases/demo/blob/blob.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/stick-arrow/arrow.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/tiled/impulse.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/infinite-world/infinite-world.js"},{"deps":{},"path":"preview-scripts/assets/cases/example/linear-impulse.js"},{"deps":{},"path":"preview-scripts/assets/i18n/polyglot.js"},{"deps":{},"path":"preview-scripts/assets/i18n/data/en.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/ray-cast-reflection.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/one-side-platform.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/gravity.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/conveyor-belt.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/ray-cast.js"},{"deps":{},"path":"preview-scripts/assets/cases/test/joint-list.js"},{"deps":{"polyglot":14,"zh":3,"en":15},"path":"preview-scripts/assets/i18n/i18n.js"},{"deps":{"i18n":22},"path":"preview-scripts/assets/i18n/LabelLocalized.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/tiled/hero-control.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/stick-arrow/shoot-arrow.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/manifold.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/infinite-world/ball-control.js"},{"deps":{},"path":"preview-scripts/assets/cases/example/velocity.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/blob/smooth.js"},{"deps":{},"path":"preview-scripts/assets/cases/demo/infinite-world/camera-control.js"},{"deps":{},"path":"preview-scripts/assets/cases/example/chain.js"},{"deps":{},"path":"preview-scripts/assets/cases/test/body-enabled.js"},{"deps":{"blob":9},"path":"preview-scripts/assets/cases/demo/blob/blob-emit.js"},{"deps":{},"path":"preview-scripts/assets/start-scene/scripts/Global/AdaptiveSprite.js"},{"deps":{},"path":"preview-scripts/assets/start-scene/scripts/Global/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/start-scene/scripts/Global/Instruction.js"},{"deps":{"i18n":22,"SceneList":40},"path":"preview-scripts/assets/start-scene/scripts/Global/Menu.js"},{"deps":{"i18n":22},"path":"preview-scripts/assets/start-scene/scripts/Global/TipsManager.js"},{"deps":{},"path":"preview-scripts/assets/start-scene/scripts/Global/Helpers.js"},{"deps":{},"path":"preview-scripts/assets/start-scene/scripts/Global/SceneList.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    
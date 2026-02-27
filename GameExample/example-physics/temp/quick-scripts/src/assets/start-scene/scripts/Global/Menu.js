"use strict";
cc._RF.push(module, '04525pyYBlN26SWawaUF3dA', 'Menu');
// start-scene/scripts/Global/Menu.js

"use strict";

var i18n = require('i18n');

var SceneList = require('SceneList');

var emptyFunc = function emptyFunc(event) {
  event.stopPropagation();
};

cc.Class({
  "extends": cc.Component,
  properties: {
    text: {
      "default": null,
      type: cc.Label
    },
    readme: {
      "default": null,
      type: cc.Node
    },
    mask: {
      "default": null,
      type: cc.Node
    },
    btnInfo: {
      "default": null,
      type: cc.Button
    },
    btnBack: {
      "default": null,
      type: cc.Button
    },
    testList: {
      "default": null,
      type: cc.ScrollView
    },
    uiCamera: {
      "default": null,
      type: cc.Camera
    }
  },
  onLoad: function onLoad() {
    this._isLoadingScene = false;
    this.showDebugDraw = false;
    cc.game.addPersistRootNode(this.node);
    this.currentSceneUrl = 'TestList.fire';
    this.contentPos = null;
    this.isMenu = true;
    this.loadInstruction(this.currentSceneUrl);
    this.node.zIndex = 999;
    cc.game.addPersistRootNode(this.testList.node);

    if (this.testList && this.testList.content) {
      // in main scene
      this.sceneList = this.testList.content.getComponent('SceneList');
      this.sceneList.init(this);
    }

    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this._onSceneLaunched, this);
  },
  _onSceneLaunched: function _onSceneLaunched() {
    var cameras = cc.Camera.cameras;

    for (var i = 0, l = cameras.length; i < l; i++) {
      var camera = cameras[i];

      if (camera === this.uiCamera) {
        camera.cullingMask = 1 << this.node.groupIndex;
      } else {
        camera.cullingMask = camera.cullingMask & ~(1 << this.node.groupIndex);
      }
    }
  },
  backToList: function backToList() {
    if (this._isLoadingScene) {
      return;
    }

    this._isLoadingScene = true;
    this.showReadme(null, false);
    this.currentSceneUrl = 'TestList.fire';
    this.isMenu = true;
    cc.director.loadScene('TestList', this.onLoadSceneFinish.bind(this));
  },
  loadScene: function loadScene(url) {
    this._isLoadingScene = true;
    this.contentPos = this.testList.getContentPosition();
    this.currentSceneUrl = url;
    this.isMenu = false;
    this.testList.node.active = false;
    cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
  },
  onLoadSceneFinish: function onLoadSceneFinish() {
    var url = this.currentSceneUrl;
    this.loadInstruction(url);
    this.testList.node.active = false;

    if (this.isMenu && this.contentPos) {
      this.testList.node.active = true;
      this.testList.setContentPosition(this.contentPos);
    }

    this._isLoadingScene = false;
  },
  loadInstruction: function loadInstruction(url) {
    var self = this;
    var urlArr = url.split('/');
    var fileName = urlArr[urlArr.length - 1].replace('.fire', '');
    cc.loader.loadRes('readme/' + fileName, function (err, txt) {
      if (err) {
        self.text.string = i18n.t("scripts/Global/Menu.js.1");
        return;
      }

      self.text.string = txt;
    });
  },
  showReadme: function showReadme(event, active) {
    if (active === undefined) {
      this.readme.active = !this.readme.active;
    } else {
      this.readme.active = active;
    }

    if (this.readme.active) {
      this.mask.on('touchstart', emptyFunc, this);
    } else {
      this.mask.off('touchstart', emptyFunc, this);
    }

    var labelTxt = this.readme.active ? '关闭说明' : '查看说明';
    cc.find('label', this.btnInfo.node).getComponent(cc.Label).textKey = labelTxt; // en: fix Collider DebugDraw always displayed on top of the problem.
    // zh：解决 Collider DebugDraw 一直显示在最上层的问题。

    var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;

    if (this.readme.active) {
      this.showDebugDraw = enabledDebugDraw;
      cc.director.getCollisionManager().enabledDebugDraw = false;
    } else {
      cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
    } // en: fix Video Player always displayed on top of the problem.
    // zh：修复 Video Player 一直显示在最上层的问题。


    var videoPlayer = cc.find('Canvas/VideoPlayer');

    if (videoPlayer) {
      videoPlayer.active = !this.readme.active;
    }
  }
});

cc._RF.pop();
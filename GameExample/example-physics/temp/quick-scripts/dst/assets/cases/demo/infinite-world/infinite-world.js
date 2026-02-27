
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/infinite-world/infinite-world.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332d37iXLNCgpDF13SoPtk+', 'infinite-world');
// cases/demo/infinite-world/infinite-world.js

"use strict";

// http://www.emanueleferonato.com/2011/10/04/create-a-terrain-like-the-one-in-tiny-wings-with-flash-and-box2d-%E2%80%93-adding-more-bumps/
cc.Class({
  "extends": cc.Component,
  properties: {
    pixelStep: 10,
    xOffset: 0,
    yOffset: 240,
    target: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.hills = [];
    this.pools = [];

    while (this.xOffset < 1200) {
      this.generateHill(10);
    }
  },
  generateHillPiece: function generateHillPiece(xOffset, points) {
    var hills = this.hills;
    var first = hills[0];

    if (first && this.target.x - first.node.x > 1000) {
      first.node.x = xOffset;
      first.collider.points = points;
      first.collider.apply();
      hills.push(hills.shift());
      return;
    }

    var node = new cc.Node();
    node.x = xOffset;
    var body = node.addComponent(cc.RigidBody);
    body.type = cc.RigidBodyType.Static;
    var collider = node.addComponent(cc.PhysicsPolygonCollider);
    collider.points = points;
    collider.friction = 1;
    node.parent = this.node;
    hills.push({
      node: node,
      collider: collider
    });
  },
  generateHill: function generateHill() {
    var pixelStep = this.pixelStep;
    var xOffset = this.xOffset;
    var yOffset = this.yOffset;
    var hillWidth = 120 + Math.ceil(Math.random() * 26) * 20;
    var numberOfSlices = hillWidth / pixelStep;
    var j; // first step

    var randomHeight;

    if (xOffset === 0) {
      randomHeight = 0;
    } else {
      randomHeight = Math.min(Math.random() * hillWidth / 7.5, 600 - yOffset); // make sure yOffset < 600
    }

    yOffset += randomHeight;

    for (j = 0; j < numberOfSlices / 2; j++) {
      var points = [];
      points.push(cc.v2(0, 0));
      points.push(cc.v2(0, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * j)));
      points.push(cc.v2(pixelStep, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * (j + 1))));
      points.push(cc.v2(pixelStep, 0));
      this.generateHillPiece(xOffset + j * pixelStep, points);
    }

    yOffset += randomHeight; // second step

    if (xOffset === 0) {
      randomHeight = 0;
    } else {
      randomHeight = Math.min(Math.random() * hillWidth / 5, yOffset - 240); // make sure yOffset > 240
    }

    yOffset -= randomHeight;

    for (j = numberOfSlices / 2; j < numberOfSlices; j++) {
      var _points = [];

      _points.push(cc.v2(0, 0));

      _points.push(cc.v2(0, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * j)));

      _points.push(cc.v2(pixelStep, yOffset - randomHeight * Math.cos(2 * Math.PI / numberOfSlices * (j + 1))));

      _points.push(cc.v2(pixelStep, 0));

      this.generateHillPiece(xOffset + j * pixelStep, _points);
    }

    yOffset -= randomHeight;
    this.xOffset += hillWidth;
    this.yOffset = yOffset;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (!this.target) return;

    while (this.target.x + 1200 > this.xOffset) {
      this.generateHill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2luZmluaXRlLXdvcmxkL2luZmluaXRlLXdvcmxkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGl4ZWxTdGVwIiwieE9mZnNldCIsInlPZmZzZXQiLCJ0YXJnZXQiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsImhpbGxzIiwicG9vbHMiLCJnZW5lcmF0ZUhpbGwiLCJnZW5lcmF0ZUhpbGxQaWVjZSIsInBvaW50cyIsImZpcnN0IiwieCIsIm5vZGUiLCJjb2xsaWRlciIsImFwcGx5IiwicHVzaCIsInNoaWZ0IiwiYm9keSIsImFkZENvbXBvbmVudCIsIlJpZ2lkQm9keSIsIlJpZ2lkQm9keVR5cGUiLCJTdGF0aWMiLCJQaHlzaWNzUG9seWdvbkNvbGxpZGVyIiwiZnJpY3Rpb24iLCJwYXJlbnQiLCJoaWxsV2lkdGgiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIm51bWJlck9mU2xpY2VzIiwiaiIsInJhbmRvbUhlaWdodCIsIm1pbiIsInYyIiwiY29zIiwiUEkiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFLEVBREg7SUFFUkMsT0FBTyxFQUFFLENBRkQ7SUFHUkMsT0FBTyxFQUFFLEdBSEQ7SUFLUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQURMO01BRUpDLElBQUksRUFBRVIsRUFBRSxDQUFDUztJQUZMO0VBTEEsQ0FIUDtFQWNMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxLQUFMLEdBQWEsRUFBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxFQUFiOztJQUVBLE9BQU8sS0FBS1AsT0FBTCxHQUFlLElBQXRCLEVBQTRCO01BQ3hCLEtBQUtRLFlBQUwsQ0FBa0IsRUFB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TUFDQXJCLE9BQU0sQ0FBQ00sSUFBUCxDQUFhckIsRUFBRSxDQUFDdUMsRUFBSCxDQUFPbkMsU0FBUCxFQUFrQkUsT0FBTyxHQUFHK0IsWUFBWSxHQUFDTCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxJQUFFUixJQUFJLENBQUNTLEVBQVAsR0FBVU4sY0FBVixJQUEwQkMsQ0FBQyxHQUFDLENBQTVCLENBQVQsQ0FBekMsQ0FBYjs7TUFDQXJCLE9BQU0sQ0FBQ00sSUFBUCxDQUFhckIsRUFBRSxDQUFDdUMsRUFBSCxDQUFPbkMsU0FBUCxFQUFrQixDQUFsQixDQUFiOztNQUVBLEtBQUtVLGlCQUFMLENBQXVCVCxPQUFPLEdBQUUrQixDQUFDLEdBQUNoQyxTQUFsQyxFQUE2Q1csT0FBN0M7SUFDSDs7SUFDRFQsT0FBTyxJQUFJK0IsWUFBWDtJQUVBLEtBQUtoQyxPQUFMLElBQWdCMEIsU0FBaEI7SUFDQSxLQUFLekIsT0FBTCxHQUFlQSxPQUFmO0VBQ0gsQ0EzR0k7RUE2R0w7RUFDQW9DLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLElBQUksQ0FBQyxLQUFLcEMsTUFBVixFQUFrQjs7SUFFbEIsT0FBTyxLQUFLQSxNQUFMLENBQVlVLENBQVosR0FBZ0IsSUFBaEIsR0FBdUIsS0FBS1osT0FBbkMsRUFBNEM7TUFDeEMsS0FBS1EsWUFBTDtJQUNIO0VBQ0o7QUFwSEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cDovL3d3dy5lbWFudWVsZWZlcm9uYXRvLmNvbS8yMDExLzEwLzA0L2NyZWF0ZS1hLXRlcnJhaW4tbGlrZS10aGUtb25lLWluLXRpbnktd2luZ3Mtd2l0aC1mbGFzaC1hbmQtYm94MmQtJUUyJTgwJTkzLWFkZGluZy1tb3JlLWJ1bXBzL1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwaXhlbFN0ZXA6IDEwLFxuICAgICAgICB4T2Zmc2V0OiAwLFxuICAgICAgICB5T2Zmc2V0OiAyNDAsXG5cbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpbGxzID0gW107XG4gICAgICAgIHRoaXMucG9vbHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy54T2Zmc2V0IDwgMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpbGwoMTApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdlbmVyYXRlSGlsbFBpZWNlICh4T2Zmc2V0LCBwb2ludHMpIHtcbiAgICAgICAgbGV0IGhpbGxzID0gdGhpcy5oaWxscztcblxuICAgICAgICBsZXQgZmlyc3QgPSBoaWxsc1swXTtcbiAgICAgICAgaWYgKGZpcnN0ICYmICh0aGlzLnRhcmdldC54IC0gZmlyc3Qubm9kZS54ID4gMTAwMCkpIHtcbiAgICAgICAgICAgIGZpcnN0Lm5vZGUueCA9IHhPZmZzZXQ7XG4gICAgICAgICAgICBmaXJzdC5jb2xsaWRlci5wb2ludHMgPSBwb2ludHM7XG4gICAgICAgICAgICBmaXJzdC5jb2xsaWRlci5hcHBseSgpO1xuICAgICAgICAgICAgaGlsbHMucHVzaCggaGlsbHMuc2hpZnQoKSApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLnggPSB4T2Zmc2V0O1xuXG4gICAgICAgIGxldCBib2R5ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG5cbiAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XG4gICAgICAgIGNvbGxpZGVyLnBvaW50cyA9IHBvaW50cztcbiAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAxO1xuXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgIGhpbGxzLnB1c2goIHtub2RlOiBub2RlLCBjb2xsaWRlcjogY29sbGlkZXJ9ICk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlSGlsbCAoKSB7XG4gICAgICAgIGxldCBwaXhlbFN0ZXAgPSB0aGlzLnBpeGVsU3RlcDtcbiAgICAgICAgbGV0IHhPZmZzZXQgPSB0aGlzLnhPZmZzZXQ7XG4gICAgICAgIGxldCB5T2Zmc2V0ID0gdGhpcy55T2Zmc2V0O1xuXG4gICAgICAgIGxldCBoaWxsV2lkdGggPSAxMjAgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoyNikqMjA7XG4gICAgICAgIGxldCBudW1iZXJPZlNsaWNlcyA9IGhpbGxXaWR0aC9waXhlbFN0ZXA7XG5cbiAgICAgICAgbGV0IGo7XG5cbiAgICAgICAgLy8gZmlyc3Qgc3RlcFxuICAgICAgICBsZXQgcmFuZG9tSGVpZ2h0O1xuICAgICAgICBpZiAoeE9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgcmFuZG9tSGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmRvbUhlaWdodCA9IE1hdGgubWluKCBNYXRoLnJhbmRvbSgpICogaGlsbFdpZHRoIC8gNy41LCAgNjAwIC0geU9mZnNldCk7IC8vIG1ha2Ugc3VyZSB5T2Zmc2V0IDwgNjAwXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHlPZmZzZXQgKz0gcmFuZG9tSGVpZ2h0O1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBudW1iZXJPZlNsaWNlcy8yOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggMCwgICAgIDApICk7XG4gICAgICAgICAgICBwb2ludHMucHVzaCggY2MudjIoIDAsICAgICB5T2Zmc2V0IC0gcmFuZG9tSGVpZ2h0Kk1hdGguY29zKDIqTWF0aC5QSS9udW1iZXJPZlNsaWNlcypqKSkgKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggcGl4ZWxTdGVwLCB5T2Zmc2V0IC0gcmFuZG9tSGVpZ2h0Kk1hdGguY29zKDIqTWF0aC5QSS9udW1iZXJPZlNsaWNlcyooaisxKSkpICk7XG4gICAgICAgICAgICBwb2ludHMucHVzaCggY2MudjIoIHBpeGVsU3RlcCwgMCkgKTtcblxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpbGxQaWVjZSh4T2Zmc2V0KyBqKnBpeGVsU3RlcCwgcG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgeU9mZnNldCArPSByYW5kb21IZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvLyBzZWNvbmQgc3RlcFxuICAgICAgICBpZiAoeE9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgcmFuZG9tSGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmRvbUhlaWdodCA9IE1hdGgubWluKCBNYXRoLnJhbmRvbSgpKmhpbGxXaWR0aC81LCAgeU9mZnNldCAtIDI0MCk7IC8vIG1ha2Ugc3VyZSB5T2Zmc2V0ID4gMjQwXG4gICAgICAgIH1cblxuICAgICAgICB5T2Zmc2V0IC09IHJhbmRvbUhlaWdodDtcblxuICAgICAgICBmb3IgKGogPSBudW1iZXJPZlNsaWNlcy8yOyBqIDwgbnVtYmVyT2ZTbGljZXM7IGorKykge1xuICAgICAgICAgICAgbGV0IHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goIGNjLnYyKCAwLCAgICAgMCkgKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggMCwgICAgIHlPZmZzZXQgLSByYW5kb21IZWlnaHQqTWF0aC5jb3MoMipNYXRoLlBJL251bWJlck9mU2xpY2VzKmopKSApO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goIGNjLnYyKCBwaXhlbFN0ZXAsIHlPZmZzZXQgLSByYW5kb21IZWlnaHQqTWF0aC5jb3MoMipNYXRoLlBJL251bWJlck9mU2xpY2VzKihqKzEpKSkgKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MiggcGl4ZWxTdGVwLCAwKSApO1xuXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSGlsbFBpZWNlKHhPZmZzZXQrIGoqcGl4ZWxTdGVwLCBwb2ludHMpO1xuICAgICAgICB9XG4gICAgICAgIHlPZmZzZXQgLT0gcmFuZG9tSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMueE9mZnNldCArPSBoaWxsV2lkdGg7XG4gICAgICAgIHRoaXMueU9mZnNldCA9IHlPZmZzZXQ7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLnRhcmdldC54ICsgMTIwMCA+IHRoaXMueE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
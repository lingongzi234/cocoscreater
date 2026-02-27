"use strict";
cc._RF.push(module, 'c822aYVtBVMBo4yXF/8n8eH', 'cutting-objects');
// cases/demo/cutting-objects.js

"use strict";

// http://www.emanueleferonato.com/2011/08/05/slicing-splitting-and-cutting-objects-with-box2d-part-4-using-real-graphics/
var EPSILON = 0.1;
var POINT_SQR_EPSILON = 5;

function compare(a, b) {
  if (a.fraction > b.fraction) {
    return 1;
  } else if (a.fraction < b.fraction) {
    return -1;
  }

  return 0;
}

function equals(a, b, epsilon) {
  epsilon = epsilon === undefined ? EPSILON : epsilon;
  return Math.abs(a - b) < epsilon;
}

function equalsVec2(a, b, epsilon) {
  return equals(a.x, b.x, epsilon) && equals(a.y, b.y, epsilon);
}

function pointInLine(point, a, b) {
  return cc.Intersection.pointLineDistance(point, a, b, true) < 1;
}

cc.Class({
  "extends": cc.Component,
  onEnable: function onEnable() {
    this.debugDrawFlags = cc.director.getPhysicsManager().debugDrawFlags;
    cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
  },
  onDisable: function onDisable() {
    cc.director.getPhysicsManager().debugDrawFlags = this.debugDrawFlags;
  },
  // use this for initialization
  onLoad: function onLoad() {
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.ctx = this.getComponent(cc.Graphics);
  },
  onTouchStart: function onTouchStart(event) {
    this.touching = true;
    this.r1 = this.r2 = this.results = null;
    this.touchStartPoint = this.touchPoint = cc.v2(event.touch.getLocation());
  },
  onTouchMove: function onTouchMove(event) {
    this.touchPoint = cc.v2(event.touch.getLocation());
  },
  onTouchEnd: function onTouchEnd(event) {
    this.touchPoint = cc.v2(event.touch.getLocation());
    this.recalcResults();
    this.touching = false;
    var point = cc.v2(event.touch.getLocation());
    if (equals(this.touchStartPoint.sub(point).magSqr(), 0)) return; // recalculate fraction, make fraction from one direction

    this.r2.forEach(function (r) {
      r.fraction = 1 - r.fraction;
    });
    var results = this.results;
    var pairs = [];

    var _loop = function _loop(i) {
      var find = false;
      var result = results[i];

      for (var _j3 = 0; _j3 < pairs.length; _j3++) {
        var _pair = pairs[_j3];

        if (_pair[0] && result.collider === _pair[0].collider) {
          find = true; // one collider may contains several fixtures, so raycast may through the inner fixture side
          // we need remove them from the result

          var r = _pair.find(function (r) {
            return r.point.sub(result.point).magSqr() <= POINT_SQR_EPSILON;
          });

          if (r) {
            _pair.splice(_pair.indexOf(r), 1);
          } else {
            _pair.push(result);
          }

          break;
        }
      }

      if (!find) {
        pairs.push([result]);
      }
    };

    for (var i = 0; i < results.length; i++) {
      _loop(i);
    }

    for (var _i = 0; _i < pairs.length; _i++) {
      var pair = pairs[_i];

      if (pair.length < 2) {
        continue;
      } // sort pair with fraction


      pair = pair.sort(compare);
      var splitResults = []; // first calculate all results, not split collider right now

      for (var j = 0; j < pair.length - 1; j += 2) {
        var r1 = pair[j];
        var r2 = pair[j + 1];

        if (r1 && r2) {
          this.split(r1.collider, r1.point, r2.point, splitResults);
        }
      }

      if (splitResults.length <= 0) {
        continue;
      }

      var collider = pair[0].collider;
      var maxPointsResult = void 0;

      for (var _j = 0; _j < splitResults.length; _j++) {
        var splitResult = splitResults[_j];

        for (var k = 0; k < splitResult.length; k++) {
          if (typeof splitResult[k] === 'number') {
            splitResult[k] = collider.points[splitResult[k]];
          }
        }

        if (!maxPointsResult || splitResult.length > maxPointsResult.length) {
          maxPointsResult = splitResult;
        }
      }

      if (maxPointsResult.length < 3) {
        continue;
      } // keep max length points to origin collider


      collider.points = maxPointsResult;
      collider.apply();
      var body = collider.body;

      for (var _j2 = 0; _j2 < splitResults.length; _j2++) {
        var _splitResult = splitResults[_j2];
        if (_splitResult.length < 3) continue;
        if (_splitResult == maxPointsResult) continue; // create new body

        var node = new cc.Node();
        node.position = body.getWorldPosition();
        node.rotation = body.getWorldRotation();
        node.parent = cc.director.getScene();
        node.addComponent(cc.RigidBody);
        var newCollider = node.addComponent(cc.PhysicsPolygonCollider);
        newCollider.points = _splitResult;
        newCollider.apply();
      }
    }
  },
  split: function split(collider, p1, p2, splitResults) {
    var body = collider.body;
    var points = collider.points; // The manager.rayCast() method returns points in world coordinates, so use the body.getLocalPoint() to convert them to local coordinates.

    p1 = body.getLocalPoint(p1);
    p2 = body.getLocalPoint(p2);
    var newSplitResult1 = [p1, p2];
    var newSplitResult2 = [p2, p1];
    var index1, index2;

    for (var i = 0; i < points.length; i++) {
      var pp1 = points[i];
      var pp2 = i === points.length - 1 ? points[0] : points[i + 1];

      if (index1 === undefined && pointInLine(p1, pp1, pp2)) {
        index1 = i;
      } else if (index2 === undefined && pointInLine(p2, pp1, pp2)) {
        index2 = i;
      }

      if (index1 !== undefined && index2 !== undefined) {
        break;
      }
    } // console.log(index1 + ' : ' + index2);


    if (index1 === undefined || index2 === undefined) {
      debugger;
      return;
    }

    var splitResult,
        indiceIndex1 = index1,
        indiceIndex2 = index2;

    if (splitResults.length > 0) {
      for (var _i2 = 0; _i2 < splitResults.length; _i2++) {
        var indices = splitResults[_i2];
        indiceIndex1 = indices.indexOf(index1);
        indiceIndex2 = indices.indexOf(index2);

        if (indiceIndex1 !== -1 && indiceIndex2 !== -1) {
          splitResult = splitResults.splice(_i2, 1)[0];
          break;
        }
      }
    }

    if (!splitResult) {
      splitResult = points.map(function (p, i) {
        return i;
      });
    }

    for (var _i3 = indiceIndex1 + 1; _i3 !== indiceIndex2 + 1; _i3++) {
      if (_i3 >= splitResult.length) {
        _i3 = 0;
      }

      var p = splitResult[_i3];
      p = typeof p === 'number' ? points[p] : p;

      if (p.sub(p1).magSqr() < POINT_SQR_EPSILON || p.sub(p2).magSqr() < POINT_SQR_EPSILON) {
        continue;
      }

      newSplitResult2.push(splitResult[_i3]);
    }

    for (var _i4 = indiceIndex2 + 1; _i4 !== indiceIndex1 + 1; _i4++) {
      if (_i4 >= splitResult.length) {
        _i4 = 0;
      }

      var _p = splitResult[_i4];
      _p = typeof _p === 'number' ? points[_p] : _p;

      if (_p.sub(p1).magSqr() < POINT_SQR_EPSILON || _p.sub(p2).magSqr() < POINT_SQR_EPSILON) {
        continue;
      }

      newSplitResult1.push(splitResult[_i4]);
    }

    splitResults.push(newSplitResult1);
    splitResults.push(newSplitResult2);
  },
  recalcResults: function recalcResults() {
    if (!this.touching) return;
    var startPoint = this.touchStartPoint;
    var point = this.touchPoint;
    this.ctx.clear();
    this.ctx.moveTo(this.touchStartPoint.x, this.touchStartPoint.y);
    this.ctx.lineTo(point.x, point.y);
    this.ctx.stroke();
    var manager = cc.director.getPhysicsManager(); // manager.rayCast() method calls this function only when it sees that a given line gets into the body - it doesnt see when the line gets out of it.
    // I must have 2 intersection points with a body so that it can be sliced, thats why I use manager.rayCast() again, but this time from B to A - that way the point, at which BA enters the body is the point at which AB leaves it!

    var r1 = manager.rayCast(this.touchStartPoint, point, cc.RayCastType.All);
    var r2 = manager.rayCast(point, this.touchStartPoint, cc.RayCastType.All);
    var results = r1.concat(r2);

    for (var i = 0; i < results.length; i++) {
      var p = results[i].point;
      this.ctx.circle(p.x, p.y, 5);
    }

    this.ctx.fill();
    this.r1 = r1;
    this.r2 = r2;
    this.results = results;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    // body maybe moving, need calc raycast results in update
    this.recalcResults();
  }
});

cc._RF.pop();
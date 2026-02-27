
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/demo/infinite-world/ball-control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09655/MMz1HLqVdisNNarvD', 'ball-control');
// cases/demo/infinite-world/ball-control.js

"use strict";

var MOVE_LEFT = 1;
var MOVE_RIGHT = 2;
cc.Class({
  "extends": cc.Component,
  properties: {
    maxSpeed: 1200
  },
  // use this for initialization
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    var canvas = cc.find('/Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.moveFlags = 0;
  },
  start: function start() {
    this.body = this.getComponent(cc.RigidBody);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.KEY.a:
      case cc.KEY.left:
        this.moveFlags |= MOVE_LEFT;
        this.updateMotorSpeed();
        break;

      case cc.KEY.d:
      case cc.KEY.right:
        this.moveFlags |= MOVE_RIGHT;
        this.updateMotorSpeed();
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.KEY.a:
      case cc.KEY.left:
        this.moveFlags &= ~MOVE_LEFT; // this.updateMotorSpeed();

        break;

      case cc.KEY.d:
      case cc.KEY.right:
        this.moveFlags &= ~MOVE_RIGHT; // this.updateMotorSpeed();

        break;
    }
  },
  onTouchStart: function onTouchStart(event) {
    var touchLoc = event.touch.getLocation();

    if (touchLoc.x < cc.winSize.width / 2) {
      this.moveFlags |= MOVE_LEFT;
    } else {
      this.moveFlags |= MOVE_RIGHT;
    }

    this.updateMotorSpeed();
  },
  onTouchEnd: function onTouchEnd(event) {
    var touchLoc = event.touch.getLocation();

    if (touchLoc.x < cc.winSize.width / 2) {
      this.moveFlags &= ~MOVE_LEFT;
    } else {
      this.moveFlags &= ~MOVE_RIGHT;
    } // this.updateMotorSpeed();

  },
  updateMotorSpeed: function updateMotorSpeed() {
    if (!this.body) return;
    var desiredSpeed = 0;
    if ((this.moveFlags & MOVE_LEFT) == MOVE_LEFT) desiredSpeed = -this.maxSpeed;else if ((this.moveFlags & MOVE_RIGHT) == MOVE_RIGHT) desiredSpeed = this.maxSpeed;
    this.body.angularVelocity = desiredSpeed;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (this.moveFlags) {
      this.updateMotorSpeed();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kZW1vL2luZmluaXRlLXdvcmxkL2JhbGwtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJNT1ZFX0xFRlQiLCJNT1ZFX1JJR0hUIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXhTcGVlZCIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsImNhbnZhcyIsImZpbmQiLCJOb2RlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwibW92ZUZsYWdzIiwic3RhcnQiLCJib2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiZXZlbnQiLCJrZXlDb2RlIiwiS0VZIiwiYSIsImxlZnQiLCJ1cGRhdGVNb3RvclNwZWVkIiwiZCIsInJpZ2h0IiwidG91Y2hMb2MiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwieCIsIndpblNpemUiLCJ3aWR0aCIsImRlc2lyZWRTcGVlZCIsImFuZ3VsYXJWZWxvY2l0eSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRyxDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFO0VBREYsQ0FIUDtFQU9MO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQkwsRUFBRSxDQUFDTSxXQUFILENBQWVDLEVBQWYsQ0FBa0JQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtJQUNBWCxFQUFFLENBQUNNLFdBQUgsQ0FBZUMs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Q0FBbkI7SUFDQSxJQUFLLENBQUMsS0FBS25CLFNBQUwsR0FBaUJ2QixTQUFsQixLQUFnQ0EsU0FBckMsRUFDSTBDLFlBQVksR0FBRyxDQUFDLEtBQUtwQyxRQUFyQixDQURKLEtBRUssSUFBSyxDQUFDLEtBQUtpQixTQUFMLEdBQWlCdEIsVUFBbEIsS0FBaUNBLFVBQXRDLEVBQ0R5QyxZQUFZLEdBQUcsS0FBS3BDLFFBQXBCO0lBQ0osS0FBS21CLElBQUwsQ0FBVWtCLGVBQVYsR0FBNEJELFlBQTVCO0VBQ0gsQ0FwRkk7RUFzRkw7RUFDQUUsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxLQUFLdEIsU0FBVCxFQUFvQjtNQUNoQixLQUFLVSxnQkFBTDtJQUNIO0VBQ0o7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTU9WRV9MRUZUID0gMTtcbmNvbnN0IE1PVkVfUklHSFQgPSAyO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXhTcGVlZDogMTIwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG5cbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJy9DYW52YXMnKTtcbiAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgPSAwO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIH0sXG5cbiAgICBvbktleURvd24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGbGFncyB8PSBNT1ZFX0xFRlQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb3RvclNwZWVkKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgfD0gTU9WRV9SSUdIVDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVVwIChldmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgJj0gfk1PVkVfTEVGVDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGbGFncyAmPSB+TU9WRV9SSUdIVDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgdG91Y2hMb2MgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBpZiAodG91Y2hMb2MueCA8IGNjLndpblNpemUud2lkdGgvMikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgfD0gTU9WRV9MRUZUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgfD0gTU9WRV9SSUdIVDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vdG9yU3BlZWQoKTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaExvYyA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGlmICh0b3VjaExvYy54IDwgY2Mud2luU2l6ZS53aWR0aC8yKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVGbGFncyAmPSB+TU9WRV9MRUZUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRmxhZ3MgJj0gfk1PVkVfUklHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy51cGRhdGVNb3RvclNwZWVkKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZU1vdG9yU3BlZWQgKCkge1xuICAgICAgICBpZiAoICF0aGlzLmJvZHkgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzaXJlZFNwZWVkID0gMDtcbiAgICAgICAgaWYgKCAodGhpcy5tb3ZlRmxhZ3MgJiBNT1ZFX0xFRlQpID09IE1PVkVfTEVGVCApXG4gICAgICAgICAgICBkZXNpcmVkU3BlZWQgPSAtdGhpcy5tYXhTcGVlZDtcbiAgICAgICAgZWxzZSBpZiAoICh0aGlzLm1vdmVGbGFncyAmIE1PVkVfUklHSFQpID09IE1PVkVfUklHSFQgKVxuICAgICAgICAgICAgZGVzaXJlZFNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IGRlc2lyZWRTcGVlZDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZlRmxhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW90b3JTcGVlZCgpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
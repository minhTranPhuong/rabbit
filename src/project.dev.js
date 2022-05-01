window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  blackRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0041aUDdotN07HWWX9WPLEu", "blackRabbit");
    "use strict";
    var whiteRabbit = require("whiteRabbit");
    cc.Class({
      extends: whiteRabbit,
      properties: {
        _timeScale: 1,
        _oldScale: 0,
        _flip: false,
        _oldPosition: 0,
        _move: false
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("Hello");
        this._oldScale = this.node.scale;
        this._oldPosition = this.node.x;
      },
      update: function update(dt) {
        cc.log("update black Rabbit !!!");
        if (this._timeScale < 3) {
          this._timeScale += .01;
          this.node.scale = this._oldScale * this._timeScale;
        } else if (!this._move && this.node.x < 100) this.move(); else if (false == this._flip) {
          this.node.scaleX *= -1;
          this._flip = true;
          this._move = true;
        } else {
          this.node.x -= 3;
          if (this.node.x == this._oldPosition) {
            this.node.scaleX *= -1;
            this.enabled = false;
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    whiteRabbit: "whiteRabbit"
  } ],
  brownRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fdb0vx8ZFLK7B406TotRVe", "brownRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        greyRabbit: {
          default: null,
          type: cc.Component
        }
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("Hello");
        cc.log("I'm Brownie");
      },
      update: function update(dt) {
        cc.log("update brow Rabbit!!!");
        if (this.node.x < 100) {
          this.node.angle -= 9;
          this.node.x += 3;
        } else {
          this.node.angle = 0;
          this.enabled = false;
          this.greyRabbit.node.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  greyRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e481ajDISxJKoOonUjnQci5", "greyRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _time: 0,
        _Ystart: 0,
        _Yend: 0,
        _state: "up",
        blackGrabbit: {
          default: null,
          type: cc.Component
        }
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("Hmmm");
        this._Ystart = this.node.y;
        this._Yend = this.node.y + 49;
      },
      update: function update(dt) {
        cc.log("update grey Rabbit !!!");
        if (3 == this._time) {
          this.enabled = false;
          this.blackGrabbit.node.active = true;
          return;
        }
        if ("up" === this._state) {
          this.node.y == this._Yend && (this._state = "down");
          this.node.y += 1;
        } else {
          if (this.node.y == this._Ystart) {
            this._state = "up";
            this._time++;
          }
          this.node.y -= 1;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  whiteRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b10f+pFL5Dkr6Qh1Iu4qQu", "whiteRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        brownRabbit: {
          default: null,
          type: cc.Component
        }
      },
      start: function start() {
        cc.log("Hello");
      },
      update: function update(dt) {
        cc.log("update White Rabbit !!!");
        this.move();
      },
      move: function move() {
        if (this.node.x >= 100) {
          this.enabled = false;
          this.brownRabbit.node.active = true;
        } else this.node.x = this.node.x + 3;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "blackRabbit", "brownRabbit", "greyRabbit", "whiteRabbit" ]);
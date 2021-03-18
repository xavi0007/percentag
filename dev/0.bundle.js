(this["webpackJsonpwatchr2"] = this["webpackJsonpwatchr2"] || []).push([[0],{

/***/ "./node_modules/web-vitals/dist/web-vitals.js":
/*!****************************************************!*\
  !*** ./node_modules/web-vitals/dist/web-vitals.js ***!
  \****************************************************/
/*! exports provided: getCLS, getFCP, getFID, getLCP, getTTFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return b; });
var e,
    t,
    n,
    i,
    a = function (e, t) {
  return {
    name: e,
    value: void 0 === t ? -1 : t,
    delta: 0,
    entries: [],
    id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
  };
},
    r = function (e, t) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      var n = new PerformanceObserver(function (e) {
        return e.getEntries().map(t);
      });
      return n.observe({
        type: e,
        buffered: !0
      }), n;
    }
  } catch (e) {}
},
    o = function (e, t) {
  var n = function n(i) {
    "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
  };

  addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
},
    c = function (e) {
  addEventListener("pageshow", function (t) {
    t.persisted && e(t);
  }, !0);
},
    u = "function" == typeof WeakSet ? new WeakSet() : new Set(),
    s = function (e, t, n) {
  var i;
  return function () {
    t.value >= 0 && (n || u.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)));
  };
},
    f = function (e, t) {
  var n,
      i = a("CLS", 0),
      u = function (e) {
    e.hadRecentInput || (i.value += e.value, i.entries.push(e), n());
  },
      f = r("layout-shift", u);

  f && (n = s(e, i, t), o(function () {
    f.takeRecords().map(u), n();
  }), c(function () {
    i = a("CLS", 0), n = s(e, i, t);
  }));
},
    m = -1,
    v = function () {
  return "hidden" === document.visibilityState ? 0 : 1 / 0;
},
    d = function () {
  o(function (e) {
    var t = e.timeStamp;
    m = t;
  }, !0);
},
    p = function () {
  return m < 0 && (m = v(), d(), c(function () {
    setTimeout(function () {
      m = v(), d();
    }, 0);
  })), {
    get timeStamp() {
      return m;
    }

  };
},
    l = function (e, t) {
  var n,
      i = p(),
      o = a("FCP"),
      f = r("paint", function (e) {
    "first-contentful-paint" === e.name && (f && f.disconnect(), e.startTime < i.timeStamp && (o.value = e.startTime, o.entries.push(e), u.add(o), n()));
  });
  f && (n = s(e, o, t), c(function (i) {
    o = a("FCP"), n = s(e, o, t), requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        o.value = performance.now() - i.timeStamp, u.add(o), n();
      });
    });
  }));
},
    h = {
  passive: !0,
  capture: !0
},
    S = new Date(),
    y = function (i, a) {
  e || (e = a, t = i, n = new Date(), w(removeEventListener), g());
},
    g = function () {
  if (t >= 0 && t < n - S) {
    var a = {
      entryType: "first-input",
      name: e.type,
      target: e.target,
      cancelable: e.cancelable,
      startTime: e.timeStamp,
      processingStart: e.timeStamp + t
    };
    i.forEach(function (e) {
      e(a);
    }), i = [];
  }
},
    E = function (e) {
  if (e.cancelable) {
    var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
    "pointerdown" == e.type ? function (e, t) {
      var n = function () {
        y(e, t), a();
      },
          i = function () {
        a();
      },
          a = function () {
        removeEventListener("pointerup", n, h), removeEventListener("pointercancel", i, h);
      };

      addEventListener("pointerup", n, h), addEventListener("pointercancel", i, h);
    }(t, e) : y(t, e);
  }
},
    w = function (e) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
    return e(t, E, h);
  });
},
    L = function (n, f) {
  var m,
      v = p(),
      d = a("FID"),
      l = function (e) {
    e.startTime < v.timeStamp && (d.value = e.processingStart - e.startTime, d.entries.push(e), u.add(d), m());
  },
      h = r("first-input", l);

  m = s(n, d, f), h && o(function () {
    h.takeRecords().map(l), h.disconnect();
  }, !0), h && c(function () {
    var r;
    d = a("FID"), m = s(n, d, f), i = [], t = -1, e = null, w(addEventListener), r = l, i.push(r), g();
  });
},
    T = function (e, t) {
  var n,
      i = p(),
      f = a("LCP"),
      m = function (e) {
    var t = e.startTime;
    t < i.timeStamp && (f.value = t, f.entries.push(e)), n();
  },
      v = r("largest-contentful-paint", m);

  if (v) {
    n = s(e, f, t);

    var d = function () {
      u.has(f) || (v.takeRecords().map(m), v.disconnect(), u.add(f), n());
    };

    ["keydown", "click"].forEach(function (e) {
      addEventListener(e, d, {
        once: !0,
        capture: !0
      });
    }), o(d, !0), c(function (i) {
      f = a("LCP"), n = s(e, f, t), requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          f.value = performance.now() - i.timeStamp, u.add(f), n();
        });
      });
    });
  }
},
    b = function (e) {
  var t,
      n = a("TTFB");
  t = function () {
    try {
      var t = performance.getEntriesByType("navigation")[0] || function () {
        var e = performance.timing,
            t = {
          entryType: "navigation",
          startTime: 0
        };

        for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));

        return t;
      }();

      n.value = n.delta = t.responseStart, n.entries = [t], e(n);
    } catch (e) {}
  }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t);
};



/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map
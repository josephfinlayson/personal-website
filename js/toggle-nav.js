!function (e) {
  "use strict";
  var t = function (t, n, r) {
    function o(e) {
      if (i.body)
        return e();
      setTimeout(function () {
        o(e)
      })
    }

    function a() {
      d.addEventListener && d.removeEventListener("load", a),
        d.media = r || "all"
    }

    var l, i = e.document, d = i.createElement("link");
    if (n)
      l = n;
    else {
      var s = (i.body || i.getElementsByTagName("head")[0]).childNodes;
      l = s[s.length - 1]
    }
    var u = i.styleSheets;
    d.rel = "stylesheet",
      d.href = t,
      d.media = "only x",
      o(function () {
        l.parentNode.insertBefore(d, n ? l : l.nextSibling)
      });
    var f = function (e) {
      for (var t = d.href, n = u.length; n--;)
        if (u[n].href === t)
          return e();
      setTimeout(function () {
        f(e)
      })
    };
    return d.addEventListener && d.addEventListener("load", a),
      d.onloadcssdefined = f,
      f(a),
      d
  };
  "undefined" != typeof exports ? exports.loadCSS = t : e.loadCSS = t
}("undefined" != typeof global ? global : this),
  function (e) {
    if (e.loadCSS) {
      var t = loadCSS.relpreload = {};
      if (t.support = function () {
          try {
            return e.document.createElement("link").relList.supports("preload")
          } catch (e) {
            return !1
          }
        }
          ,
          t.poly = function () {
            for (var t = e.document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
              var r = t[n];
              "preload" === r.rel && "style" === r.getAttribute("as") && (e.loadCSS(r.href, r, r.getAttribute("media")),
                r.rel = null)
            }
          }
          ,
          !t.support()) {
        t.poly();
        var n = e.setInterval(t.poly, 300);
        e.addEventListener && e.addEventListener("load", function () {
          t.poly(),
            e.clearInterval(n)
        }),
        e.attachEvent && e.attachEvent("onload", function () {
          e.clearInterval(n)
        })
      }
    }
  }(this)
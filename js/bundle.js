!function(e) {
    function n(o) {
        if (t[o])
            return t[o].exports;
        var c = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(c.exports, c, c.exports, n),
        c.l = !0,
        c.exports
    }
    var t = {};
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, n) {
    !function() {
        function e() {
            window.pageYOffset > window.innerHeight / 3 ? document.body.classList.add(n) : document.body.classList.remove(n)
        }
        var n = "navbar-black";
        document.addEventListener("scroll", function(n) {
            return e()
        }),
        e()
    }(),
    function() {
        var e = document.getElementById("navbar-collapse")
          , n = document.getElementById("navigation")
          , t = function() {
            e.classList.add("collapse"),
            n.classList.add("collapsed")
        };
        n.addEventListener("click", function(e) {
            return e.stopPropagation()
        }),
        document.body.addEventListener("click", t),
        document.getElementById("navbar-toggle").addEventListener("click", function() {
            e.classList.toggle("collapse"),
            n.classList.toggle("collapsed")
        });
        for (var o = document.querySelectorAll(".navbar li a"), c = 0; c < o.length; c++)
            o[c].addEventListener("click", t)
    }()
}
]);

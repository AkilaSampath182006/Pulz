!(function (e, t) {
  "object" == typeof module && module.exports
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("_iub_spinner", function () {
        e.IubSpinner = t();
      })
    : (e.IubSpinner = t());
})(this, function () {
  "use strict";
  function b(e, t) {
    var n,
      i = document.createElement(e || "div");
    for (n in t) i[n] = t[n];
    return i;
  }
  function u(e) {
    for (var t = 1, n = arguments.length; t < n; t++)
      e.appendChild(arguments[t]);
    return e;
  }
  function o(e, t, n, i) {
    var r = ["opacity", t, ~~(100 * e), n, i].join("-"),
      a = 0.01 + (n / i) * 100,
      o = Math.max(1 - ((1 - e) / t) * (100 - a), e),
      l = y.substring(0, y.indexOf("Animation")).toLowerCase(),
      s = (l && "-" + l + "-") || "";
    return (
      d[r] ||
        (f.insertRule(
          "@" +
            s +
            "keyframes " +
            r +
            "{0%{opacity:" +
            o +
            "}" +
            a +
            "%{opacity:" +
            e +
            "}" +
            (a + 0.01) +
            "%{opacity:1}" +
            ((a + t) % 100) +
            "%{opacity:" +
            e +
            "}100%{opacity:" +
            o +
            "}}",
          f.cssRules.length
        ),
        (d[r] = 1)),
      r
    );
  }
  function i(e, t) {
    var n,
      i,
      r = e.style;
    for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < a.length; i++)
      if (r[(n = a[i] + t)] !== undefined) return n;
    if (r[t] !== undefined) return t;
  }
  function m(e, t) {
    for (var n in t) e.style[i(e, n) || n] = t[n];
    return e;
  }
  function t(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) e[i] === undefined && (e[i] = n[i]);
    }
    return e;
  }
  function g(e) {
    for (var t = { x: e.offsetLeft, y: e.offsetTop }; (e = e.offsetParent); )
      (t.x += e.offsetLeft), (t.y += e.offsetTop);
    return t;
  }
  function c(e, t) {
    return "string" == typeof e ? e : e[t % e.length];
  }
  function n(e) {
    if (void 0 === this) return new n(e);
    this.opts = t(e || {}, n.defaults, l);
  }
  function e() {
    function d(e, t) {
      return b(
        "<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
        t
      );
    }
    f.addRule(".spin-vml", "behavior:url(#default#VML)"),
      (n.prototype.lines = function (e, i) {
        function r() {
          return m(
            d("group", { coordsize: o + " " + o, coordorigin: -a + " " + -a }),
            { width: o, height: o }
          );
        }
        function t(e, t, n) {
          u(
            s,
            u(
              m(r(), { rotation: (360 / i.lines) * e + "deg", left: ~~t }),
              u(
                m(d("roundrect", { arcsize: i.corners }), {
                  width: a,
                  height: i.width,
                  left: i.radius,
                  top: -i.width >> 1,
                  filter: n,
                }),
                d("fill", { color: c(i.color, e), opacity: i.opacity }),
                d("stroke", { opacity: 0 })
              )
            )
          );
        }
        var n,
          a = i.length + i.width,
          o = 2 * a,
          l = 2 * -(i.width + i.length) + "px",
          s = m(r(), { position: "absolute", top: l, left: l });
        if (i.shadow)
          for (n = 1; n <= i.lines; n++)
            t(
              n,
              -2,
              "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"
            );
        for (n = 1; n <= i.lines; n++) t(n);
        return u(e, s);
      }),
      (n.prototype.opacity = function (e, t, n, i) {
        var r = e.firstChild;
        (i = (i.shadow && i.lines) || 0),
          r &&
            t + i < r.childNodes.length &&
            (r =
              (r = (r = r.childNodes[t + i]) && r.firstChild) &&
              r.firstChild) &&
            (r.opacity = n);
      });
  }
  var y,
    r,
    a = ["webkit", "Moz", "ms", "O"],
    d = {},
    f =
      ((r = b("style", { type: "text/css" })),
      u(document.getElementsByTagName("head")[0], r),
      r.sheet || r.styleSheet),
    l = {
      lines: 12,
      length: 7,
      width: 5,
      radius: 10,
      rotate: 0,
      corners: 1,
      color: "#000",
      direction: 1,
      speed: 1,
      trail: 100,
      opacity: 0.25,
      fps: 20,
      zIndex: 2e9,
      className: "spinner",
      top: "auto",
      left: "auto",
      position: "relative",
    };
  (n.defaults = {}),
    t(n.prototype, {
      spin: function (e) {
        this.stop();
        var t,
          n,
          i = this,
          r = i.opts,
          a = (i.el = m(b(0, { className: r.className }), {
            position: r.position,
            width: 0,
            zIndex: r.zIndex,
          })),
          o = r.radius + r.length + r.width;
        if (
          (e &&
            (e.insertBefore(a, e.firstChild || null),
            (n = g(e)),
            (t = g(a)),
            m(a, {
              left:
                ("auto" == r.left
                  ? n.x - t.x + (e.offsetWidth >> 1)
                  : parseInt(r.left, 10) + o) + "px",
              top:
                ("auto" == r.top
                  ? n.y - t.y + (e.offsetHeight >> 1)
                  : parseInt(r.top, 10) + o) + "px",
            })),
          a.setAttribute("role", "progressbar"),
          i.lines(a, i.opts),
          !y)
        ) {
          var l,
            s = 0,
            d = ((r.lines - 1) * (1 - r.direction)) / 2,
            u = r.fps,
            c = u / r.speed,
            f = (1 - r.opacity) / ((c * r.trail) / 100),
            p = c / r.lines;
          !(function h() {
            s++;
            for (var e = 0; e < r.lines; e++)
              (l = Math.max(1 - ((s + (r.lines - e) * p) % c) * f, r.opacity)),
                i.opacity(a, e * r.direction + d, l, r);
            i.timeout = i.el && setTimeout(h, ~~(1e3 / u));
          })();
        }
        return i;
      },
      stop: function () {
        var e = this.el;
        return (
          e &&
            (clearTimeout(this.timeout),
            e.parentNode && e.parentNode.removeChild(e),
            (this.el = undefined)),
          this
        );
      },
      lines: function (e, n) {
        function t(e, t) {
          return m(b(), {
            position: "absolute",
            width: n.length + n.width + "px",
            height: n.width + "px",
            background: e,
            boxShadow: t,
            transformOrigin: "left",
            transform:
              "rotate(" +
              ~~((360 / n.lines) * r + n.rotate) +
              "deg) translate(" +
              n.radius +
              "px,0)",
            borderRadius: ((n.corners * n.width) >> 1) + "px",
          });
        }
        for (
          var i, r = 0, a = ((n.lines - 1) * (1 - n.direction)) / 2;
          r < n.lines;
          r++
        )
          (i = m(b(), {
            position: "absolute",
            top: 1 + ~(n.width / 2) + "px",
            transform: n.hwaccel ? "translate3d(0,0,0)" : "",
            opacity: n.opacity,
            animation:
              y &&
              o(n.opacity, n.trail, a + r * n.direction, n.lines) +
                " " +
                1 / n.speed +
                "s linear infinite",
          })),
            n.shadow && u(i, m(t("#000", "0 0 4px #000"), { top: "2px" })),
            u(e, u(i, t(c(n.color, r), "0 0 1px rgba(0,0,0,.1)")));
        return e;
      },
      opacity: function (e, t, n) {
        t < e.childNodes.length && (e.childNodes[t].style.opacity = n);
      },
    });
  var s = m(b("group"), { behavior: "url(#default#VML)" });
  return !i(s, "transform") && s.adj ? e() : (y = i(s, "animation")), n;
}),
  String.prototype.trim ||
    (String.prototype.trim = function trim() {
      return this.replace(/^\s+|\s+$/g, "");
    });
var _iub = window._iub || [];
(_iub.badges = _iub.badges || []),
  (_iub.embedBs = _iub.embedBs || []),
  (function initEmbeddings(E, T, I) {
    function t() {
      var e = d("iubenda-embed", T);
      if (e.length)
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            i = { ppId: D(n.getAttribute("href")), isLegal: p(n) };
          -1 !== P(n.className.split(" "), "iub-body-embed")
            ? h({ linkA: n, embedB: !0 }) ||
              ((i.index = Math.floor(1e10 * Math.random())),
              (i.linkA = a(n, i, i.index)),
              I.embedBs.push(i))
            : h({ linkA: n }) || ((i.linkA = a(n, i)), I.badges.push(i));
        }
      else {
        var r = T.getElementById("iubenda-embed");
        r && a(r);
      }
    }
    function a(t, e, n) {
      var i = t,
        r = !1,
        a = !1,
        o = !1,
        l = !1,
        s = !1,
        d = !1,
        u = !1,
        c = "iubenda-white",
        f = t.getAttribute("href").split("?")[0],
        p = D(f),
        h = "//",
        b = parseInt(t.getAttribute("data-iub-z-index"), 10) || null,
        m = t.getAttribute("data-iub-overflow") || "html",
        g = t.className.split(" ");
      R(g, "no-brand") && (r = !0),
        R(g, "skip-track") && (a = !0),
        R(g, "iub-body-embed") && (o = !0),
        R(g, "iub-legal-only") && (l = !0),
        R(g, "iub-anchor") && (s = !0),
        R(g, "iubenda-noiframe") && (u = !0),
        R(g, "iub-no-markup") && (l = d = !0),
        -1 !== f.indexOf("http://")
          ? (h = "http://")
          : -1 !== f.indexOf("https://") && (h = "https://");
      var y = U(W, h),
        v = U($, h),
        x = U(X, h),
        w = U(q, h),
        N = U(G, h);
      if (
        (-1 !== P(g, "iubenda-no-icon")
          ? (c = "iubenda-nostyle")
          : -1 ===
              (c = z(
                [
                  "iubenda-green",
                  "iubenda-green-m",
                  "iubenda-green-s",
                  "iubenda-green-xs",
                  "iubenda-lowgray",
                  "iubenda-lowgray-m",
                  "iubenda-lowgray-s",
                  "iubenda-lowgray-xs",
                  "iubenda-midgray",
                  "iubenda-midgray-m",
                  "iubenda-midgray-s",
                  "iubenda-midgray-xs",
                  "iubenda-darkgray",
                  "iubenda-darkgray-m",
                  "iubenda-darkgray-s",
                  "iubenda-darkgray-xs",
                  "iubenda-white",
                  "iubenda-black",
                  "iubenda-nostyle",
                ],
                g
              )) && (c = "iubenda-white"),
        "iubenda-nostyle" !== c &&
          ((t.style.outline = "0px"),
          (t.style.border = "0px"),
          (t.style.textDecoration = "none"),
          (t.style.display = "inline-block"),
          (t.style.background = "none")),
        o)
      )
        i = M(t, N, l, d, h, e, n);
      else if (-1 === P(["iubenda-white", "iubenda-black"], c) || u) {
        if ((l && (t.href = t.href + "/full-legal"), "iubenda-nostyle" !== c)) {
          var A = 116,
            k = 25,
            C = ".gif";
          ((-1 !== c.indexOf("-m") && -1 === c.indexOf("-mid")) ||
            -1 !== c.indexOf("midgray-m")) &&
            ((A = 81), (k = 21)),
            (-1 === c.indexOf("-s") && -1 === c.indexOf("-xs")) ||
              ((A = 82), (k = 17), (C = ".png")),
            (t.style.width = A + "px"),
            (t.style.height = k + "px"),
            _(t, y + (c += C), A, k, u);
        }
        O(v, t, {
          onLoadCallB: function B() {
            var e = F(y, t.href);
            I.ifr.iubendaStartBadge({
              linkA: t,
              embedP: "",
              iFrUrl: t.href,
              cdnBaseUrl: e,
              useProtocol: h,
              zIndex: b,
              overflow: m,
            });
          },
        }),
          a || L(t, p),
          (i = t);
      } else i = S(t, c, null, null, p, r, y, v, w, a, l, s, h, b, m);
      return (
        "undefined" != typeof editLinkA &&
          null !== E.editLinkA &&
          (E.editLinkA = null),
        u && V(x),
        i
      );
    }
    function _(e, t, n, i, r) {
      l(e.id, t, 100, n, i, r);
    }
    function L() {}
    function S(e, t, n, i, r, a, o, l, s, d, u, c, f, p, h) {
      e.style.display = "none";
      var b = e.innerHTML.trim() || "Privacy Policy",
        m = e.getAttribute("title") || "Privacy Policy",
        g = f || "//",
        y = F(o, e.href),
        v = H(b, a),
        x = i || 22,
        w = e.title || "iubenda badge",
        N = T.createElement("IFRAME"),
        A = c ? "iubenda-ibadge iubenda-iframe-anchor" : "iubenda-ibadge";
      N.setAttribute("class", A),
        N.setAttribute("scrolling", "no"),
        N.setAttribute("frameBorder", "0"),
        N.setAttribute("allowtransparency", "true");
      var k = "width:" + v + "px; height:" + x + "px;";
      c && (k += " z-index:9998; position:fixed; bottom:0px; right:0px;"),
        j(N, k),
        N.setAttribute("title", m),
        e.parentNode.insertBefore(N, e.nextSibling),
        e.parentNode.removeChild(e);
      var C = e.href.split("?")[0];
      C = U((C = u ? C + "/full-legal" : C), g);
      var B = null,
        E = N.contentWindow || N,
        I = N.contentDocument || E.document;
      I.open(),
        I.write(
          '<a href="' +
            C +
            '" class="' +
            t +
            " " +
            (a ? "no-brand" : "") +
            " " +
            (c ? "iub-anchor" : "") +
            '" id="i_badge-link" title="' +
            m +
            '" target="_parent" >' +
            b +
            "</a>"
        ),
        I.close(),
        (I.title = w);
      var _ = I.createDocumentFragment(),
        S = I.createElement("meta");
      (S.name = "viewport"),
        (S.content = "width=device-width"),
        _.appendChild(S);
      var M = I.createElement("link");
      (M.type = "text/css"),
        (M.rel = "stylesheet"),
        (M.href = s),
        (M.media = "screen"),
        _.appendChild(M);
      var O = I.createElement("script");
      return (
        (O.type = "text/javascript"),
        (O.src = l),
        (O.onload = function () {
          var e = { useProtocol: g, zIndex: p, overflow: h, cdnBaseUrl: y };
          B && (e.iFrUrl = B), N.contentWindow._iub.ifr.iubendaStartBadge(e);
        }),
        (O.onerror = function () {
          console.log(
            "IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting."
          );
        }),
        _.appendChild(O),
        I.head.appendChild(_),
        d || L(N, r),
        N
      );
    }
    function M(e, t, n, i, r, a, o) {
      var l = r || "//";
      i || u(t);
      var s =
        e.href.split("?")[0] +
        (i
          ? "/embed-no-markup.json"
          : n
          ? "/embed-legal.json"
          : "/embed.json") +
        "?i=" +
        o;
      if (((s = U(s, l)), (a.url = s), "undefined" != typeof IubSpinner)) {
        var d = new IubSpinner({
          lines: 8,
          length: 2,
          width: 2,
          radius: 2,
          color: "#696969",
          speed: 1.2,
          trail: 60,
          shadow: !1,
        }).spin();
        (d.el.className = "_iub-pp-loading-alert"),
          j(d.el, "position:relative; display:inline-block; padding: 6px;"),
          e.parentNode.insertBefore(d.el, e);
      }
      return (e.style.display = "none"), O(s, e, { tries: 1 }), e;
    }
    function u(e) {
      var t = T.createElement("link");
      (t.type = "text/css"),
        (t.rel = "stylesheet"),
        (t.href = e),
        T.getElementsByTagName("head")[0].appendChild(t);
    }
    function e(e) {
      try {
        var t = h({ url: e.path, embedB: !0, inDom: !0 });
        if (t && t.linkA) {
          var n = t.linkA,
            i = T.createElement("div");
          i.setAttribute("id", "iub-pp-container"),
            (i.innerHTML = e.content),
            n.parentNode.insertBefore(i, n.nextSibling);
          var r = n.previousSibling;
          "_iub-pp-loading-alert" === r.className &&
            r.parentNode.removeChild(r),
            n.parentNode.removeChild(n),
            o(i);
        }
      } catch (a) {
        console.log(
          "IUBENDA: Error while loading [ " +
            a.message +
            " ]. Please contact info@iubenda.com for support and troubleshooting."
        );
      }
    }
    function o(e) {
      function t(e, t) {
        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
      }
      function n(e) {
        var t = e.text || e.textContent || e.innerHTML || "",
          n = T.getElementsByTagName("head")[0] || T.documentElement,
          i = T.createElement("script");
        i.type = "text/javascript";
        try {
          i.appendChild(T.createTextNode(t));
        } catch (r) {
          i.text = t;
        }
        n.insertBefore(i, n.firstChild), n.removeChild(i);
      }
      function o(e, t, n) {
        var i = n + 1;
        if (i <= Math.max(1, s)) {
          t.push(e);
          for (var r = e.childNodes, a = 0; a < r.length; a++)
            1 === r[a].nodeType && o(r[a], t, i);
        }
      }
      for (
        var i, r, a = [], l = [], s = 8, d = e.childNodes, u = 0;
        u < d.length;
        u++
      )
        1 === d[u].nodeType && o(d[u], l, 1);
      for (var c = 0; l[c]; c++)
        !t((r = l[c]), "script") ||
          (r.type && "text/javascript" !== r.type.toLowerCase()) ||
          a.push(r);
      for (var f = 0; a[f]; f++)
        (i = a[f]).parentNode && i.parentNode.removeChild(i), n(a[f]);
    }
    function j(e, t) {
      var n = s();
      -1 !== n && n < 8 ? (e.style.cssText = t) : e.setAttribute("style", t);
    }
    function l(e, t, n, i, r, a) {
      if (!(n <= 0 || a)) {
        var o = T.getElementById(e),
          l = T.createElement("img");
        (l.src = t),
          (l.style.width = i + "px"),
          (l.style.height = r + "px"),
          (l.style.border = "0px"),
          o && l.width
            ? ((l.alt = o.firstChild.nodeValue),
              (l.title = o.firstChild.nodeValue),
              o.replaceChild(l, o.firstChild))
            : setTimeout(
                "_iub.imageFastReplace('" +
                  e +
                  "','" +
                  t +
                  "'," +
                  --n +
                  "," +
                  i +
                  "," +
                  r +
                  ");",
                150
              );
      }
    }
    function s() {
      var e = -1;
      if ("Microsoft Internet Explorer" === navigator.appName) {
        var t = navigator.userAgent;
        null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t) &&
          (e = parseFloat(RegExp.$1));
      }
      return e;
    }
    function O(e, t, n) {
      var i = n || {},
        r = e,
        a = t,
        o = i.onLoadCallB,
        l = i.tries,
        s = T.createElement("script");
      s.setAttribute("type", "text/javascript"),
        s.setAttribute("src", e),
        t.parentNode.insertBefore(s, t.nextSibling),
        "function" == typeof o && c(s, o),
        (s.onerror = function d() {
          0 < l && O(f(r, "t", l), a, { onLoadCallB: o, tries: l - 1 });
        });
    }
    function c(e, t) {
      var n = s();
      -1 !== n && n < 9
        ? (e.onreadystatechange = function i() {
            ("loaded" !== this.readyState && "complete" !== this.readyState) ||
              t();
          })
        : (e.onload = function r() {
            t();
          });
    }
    function P(e, t) {
      var n = Object(e),
        i = n.length >>> 0;
      if (0 === i) return -1;
      var r = 0;
      if (
        (0 < arguments.length &&
          ((r = Number(t)),
          isNaN(r)
            ? (r = 0)
            : 0 !== r &&
              r !== 1 / 0 &&
              r !== -1 / 0 &&
              (r = (0 < r || -1) * Math.floor(Math.abs(r)))),
        i <= r)
      )
        return -1;
      for (var a = 0 <= r ? r : Math.max(i - Math.abs(r), 0); a < i; a++)
        if (a in n && n[a] === t) return a;
      return -1;
    }
    function z(e, t) {
      var n = Object(e);
      if (0 === n.length >>> 0) return -1;
      for (var i = 0; i < t.length; i++) if (-1 !== P(n, t[i])) return t[i];
      return -1;
    }
    function R(e, t) {
      return -1 !== P(e, t) && (e.splice(P(e, t), 1), !0);
    }
    function d(e, t) {
      for (
        var n = t || T.getElementsByTagName("body")[0],
          i = [],
          r = new RegExp("\\b" + e + "\\b"),
          a = n.getElementsByTagName("*"),
          o = 0,
          l = a.length;
        o < l;
        o++
      )
        r.test(a[o].className) && i.push(a[o]);
      return i;
    }
    function U(e, t) {
      var n = -1 !== e.indexOf("//") ? e.split("//")[1] : e;
      return t.concat(n);
    }
    function f(e, t, n) {
      if (n) {
        var i = e.split("#")[0],
          r = e.split("#")[1];
        return (
          (i += (-1 !== i.indexOf("?") ? "&" : "?") + t + "=" + n),
          r ? i + "#" + r : i
        );
      }
      return e;
    }
    function D(e) {
      for (var t = e.split("/"), n = t.length - 1; -1 < n; n--)
        if (!isNaN(parseInt(t[n], 10))) return parseInt(t[n], 10);
      return null;
    }
    function p(e) {
      return (
        -1 !== e.getAttribute("href").indexOf("/legal") ||
        -1 !== e.getAttribute("href").indexOf("/full-legal") ||
        -1 !== P(e.className.split(" "), "iub-legal-only") ||
        -1 !== P(e.className.split(" "), "iub-no-markup")
      );
    }
    function h(e) {
      for (
        var t = e || {},
          n = t.embedB ? I.embedBs : I.badges,
          i = !!t.inDom,
          r = 0;
        r < n.length;
        r++
      )
        if (t.linkA && n[r].linkA === t.linkA) {
          if (!i || T.body.contains(n[r].linkA)) return n[r];
        } else if (
          t.url &&
          -1 < n[r].url.indexOf(t.url) &&
          (!i || T.body.contains(n[r].linkA))
        )
          return n[r];
      return null;
    }
    function F(e, t) {
      var n,
        i = ["/privacy-policy", "/terms-and-conditions"];
      if (e) return e;
      for (var r = 0, a = i.length; r < a; r++)
        if (((n = i[r]), -1 < t.indexOf(n))) return t.split(n)[0] + "/cdn/";
      return null;
    }
    function H(e, t) {
      var n = T.createElement("div");
      (n.style.fontSize = "11px"),
        (n.style.fontWeight = "bold"),
        (n.style.height = "auto"),
        (n.style.width = "auto"),
        (n.style.position = "absolute"),
        (n.style.fontFamily = "Helvetica,Arial,FreeSans,sans-serif"),
        (n.style.visibility = "hidden"),
        (n.innerHTML = e),
        T.body.appendChild(n);
      var i = n.clientWidth + 40;
      return t && (i -= 18), T.body.removeChild(n), i;
    }
    function V(e) {
      if (!T.getElementById("iub_css")) {
        var t = T.createElement("link");
        (t.id = "iub_css"),
          (t.type = "text/css"),
          (t.as = "style"),
          (t.rel = "stylesheet"),
          (t.href = e),
          (t.media = "screen"),
          T.head.appendChild(t);
      }
    }
    var n = "1.6.4",
      W = "https://cdn.iubenda.com/",
      $ = "https://cdn.iubenda.com/iubenda_i_badge.js",
      X = "https://cdn.iubenda.com/iubenda_badge.css",
      q = "https://cdn.iubenda.com/iubenda_i_badge.css",
      G =
        "https://www.iubenda.com/assets/privacy_policy-637a0c5875120390258ba7ad6b6b99e7f9e79c6fab53bcf26d529ff0da1054f4.css";
    !(function i() {
      try {
        t();
      } catch (e) {
        console.log(
          "IUBENDA: Error while loading [ " +
            e.message +
            " ]. Please contact info@iubenda.com for support and troubleshooting."
        );
      }
    })(),
      (I.setStyle = j),
      (I.onLoadCall = c),
      (I.imageFastReplace = l),
      (I.getElementsByClassName = d),
      (I.loadPPContent = e),
      (I.VERSION = n);
  })(window, document, _iub);

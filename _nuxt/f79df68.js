/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    1: function (t, e, n) {
      "use strict";
      n.d(e, "k", function () {
        return x;
      }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return _;
        }),
        n.d(e, "e", function () {
          return O;
        }),
        n.d(e, "b", function () {
          return j;
        }),
        n.d(e, "s", function () {
          return $;
        }),
        n.d(e, "g", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return k;
        }),
        n.d(e, "d", function () {
          return S;
        }),
        n.d(e, "r", function () {
          return E;
        }),
        n.d(e, "j", function () {
          return P;
        }),
        n.d(e, "t", function () {
          return T;
        }),
        n.d(e, "o", function () {
          return N;
        }),
        n.d(e, "q", function () {
          return D;
        }),
        n.d(e, "f", function () {
          return M;
        }),
        n.d(e, "c", function () {
          return L;
        }),
        n.d(e, "i", function () {
          return I;
        }),
        n.d(e, "p", function () {
          return U;
        }),
        n.d(e, "a", function () {
          return X;
        }),
        n.d(e, "v", function () {
          return Q;
        }),
        n.d(e, "n", function () {
          return V;
        }),
        n.d(e, "u", function () {
          return G;
        });
      n(54), n(35), n(64), n(65), n(70), n(36), n(71);
      var r = n(33),
        o = n(9),
        c = n(32),
        f = n(19),
        l =
          (n(53),
          n(16),
          n(42),
          n(209),
          n(51),
          n(121),
          n(45),
          n(43),
          n(34),
          n(37),
          n(56),
          n(27),
          n(93),
          n(166),
          n(167),
          n(213),
          n(126),
          n(134),
          n(215),
          n(68),
          n(69),
          n(2)),
        h = n(24);
      function d(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? d(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : d(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function v(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          },
        };
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function x(t) {
        l.a.config.errorHandler && l.a.config.errorHandler(t);
      }
      function w(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }
      function _(t) {
        return (
          t.$options &&
          "function" == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function O(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = v(r);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && O(c, n);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return n;
      }
      function j(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                m(m({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function $(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = l.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o];
            });
          })
        );
      }
      function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return C(t, e, "instances");
      }
      function S(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }
      function E(t, e) {
        return Promise.all(
          S(
            t,
            (function () {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  var f, l;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof n || n.options) {
                              t.next = 11;
                              break;
                            }
                            return (t.prev = 1), (t.next = 4), n();
                          case 4:
                            (n = t.sent), (t.next = 11);
                            break;
                          case 7:
                            throw (
                              ((t.prev = 7),
                              (t.t0 = t.catch(1)),
                              t.t0 &&
                                "ChunkLoadError" === t.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((f = Date.now()),
                                (!(l = parseInt(
                                  window.sessionStorage.getItem("nuxt-reload")
                                )) ||
                                  l + 6e4 < f) &&
                                  (window.sessionStorage.setItem(
                                    "nuxt-reload",
                                    f
                                  ),
                                  window.location.reload(!0))),
                              t.t0)
                            );
                          case 11:
                            return (
                              (o.components[c] = n = $(n)),
                              t.abrupt(
                                "return",
                                "function" == typeof e ? e(n, r, o, c) : n
                              )
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function P(t) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), E(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      m(
                        m({}, e),
                        {},
                        {
                          meta: C(e).map(function (t, n) {
                            return m(
                              m({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function T(t, e) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o, c, l, d;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: e.router.options.base,
                          env: {},
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var o = Object(r.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== o && "object" !== o) ||
                                ((n = path || {}),
                                (path = t),
                                (o = Object(r.a)(path)),
                                (t = 302)),
                              "object" === o &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(h.d)(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([P(n.route), P(n.from)])
                    );
                  case 3:
                    (o = t.sent),
                      (c = Object(f.a)(o, 2)),
                      (l = c[0]),
                      (d = c[1]),
                      n.route && (e.context.route = l),
                      n.from && (e.context.from = d),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function N(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : D(t[0], e).then(function () {
              return N(t.slice(1), e);
            });
      }
      function D(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function M(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(h.c)(e);
      }
      function L(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(r.a)(t[i]) &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", J(e)));
          return function (e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? F : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var f = t[c];
              if ("string" != typeof f) {
                var l = data[f.name || "pathMatch"],
                  h = void 0;
                if (null == l) {
                  if (f.optional) {
                    f.partial && (path += f.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + f.name + '" to be defined'
                  );
                }
                if (Array.isArray(l)) {
                  if (!f.repeat)
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        "`"
                    );
                  if (0 === l.length) {
                    if (f.optional) continue;
                    throw new TypeError(
                      'Expected "' + f.name + '" to not be empty'
                    );
                  }
                  for (var d = 0; d < l.length; d++) {
                    if (((h = o(l[d])), !n[c].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          f.name +
                          '" to match "' +
                          f.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          "`"
                      );
                    path += (0 === d ? f.prefix : f.delimiter) + h;
                  }
                } else {
                  if (((h = f.asterisk ? K(l) : o(l)), !n[c].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to match "' +
                        f.pattern +
                        '", but received "' +
                        h +
                        '"'
                    );
                  path += f.prefix + h;
                }
              } else path += f;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              f = (e && e.delimiter) || "/";
            for (; null != (n = B.exec(t)); ) {
              var l = n[0],
                h = n[1],
                d = n.index;
              if (((path += t.slice(c, d)), (c = d + l.length), h))
                path += h[1];
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  x = n[4],
                  w = n[5],
                  _ = n[6],
                  O = n[7];
                path && (r.push(path), (path = ""));
                var j = null != v && null != m && m !== v,
                  $ = "+" === _ || "*" === _,
                  C = "?" === _ || "*" === _,
                  k = n[2] || f,
                  pattern = x || w;
                r.push({
                  name: y || o++,
                  prefix: v || "",
                  delimiter: k,
                  optional: C,
                  repeat: $,
                  partial: j,
                  asterisk: Boolean(O),
                  pattern: pattern
                    ? H(pattern)
                    : O
                    ? ".*"
                    : "[^" + z(k) + "]+?",
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }
      function I(t, e) {
        var n = {},
          r = m(m({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function U(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return m(
          m({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var B = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function F(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function K(t) {
        return F(t, !0);
      }
      function z(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function H(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function J(t) {
        return t && t.sensitive ? "" : "i";
      }
      function X(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var Q = h.b,
        V = (h.e, h.a);
      function G(t) {
        try {
          window.history.scrollRestoration = t;
        } catch (t) {}
      }
    },
    100: function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            c = o[0],
            f = { id: t + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
          r[c] ? r[c].parts.push(f) : n.push((r[c] = { id: c, parts: [f] }));
        }
        return n;
      }
      n.r(e),
        n.d(e, "default", function () {
          return x;
        });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var c = {},
        head = o && (document.head || document.getElementsByTagName("head")[0]),
        f = null,
        l = 0,
        h = !1,
        d = function () {},
        m = null,
        v = "data-vue-ssr-id",
        y =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function x(t, e, n, o) {
        (h = n), (m = o || {});
        var f = r(t, e);
        return (
          w(f),
          function (e) {
            for (var n = [], i = 0; i < f.length; i++) {
              var o = f[i];
              (l = c[o.id]).refs--, n.push(l);
            }
            e ? w((f = r(t, e))) : (f = []);
            for (i = 0; i < n.length; i++) {
              var l;
              if (0 === (l = n[i]).refs) {
                for (var h = 0; h < l.parts.length; h++) l.parts[h]();
                delete c[l.id];
              }
            }
          }
        );
      }
      function w(t) {
        for (var i = 0; i < t.length; i++) {
          var e = t[i],
            n = c[e.id];
          if (n) {
            n.refs++;
            for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]);
            for (; r < e.parts.length; r++) n.parts.push(O(e.parts[r]));
            n.parts.length > e.parts.length &&
              (n.parts.length = e.parts.length);
          } else {
            var o = [];
            for (r = 0; r < e.parts.length; r++) o.push(O(e.parts[r]));
            c[e.id] = { id: e.id, refs: 1, parts: o };
          }
        }
      }
      function _() {
        var t = document.createElement("style");
        return (t.type = "text/css"), head.appendChild(t), t;
      }
      function O(t) {
        var e,
          n,
          r = document.querySelector("style[" + v + '~="' + t.id + '"]');
        if (r) {
          if (h) return d;
          r.parentNode.removeChild(r);
        }
        if (y) {
          var o = l++;
          (r = f || (f = _())),
            (e = C.bind(null, r, o, !1)),
            (n = C.bind(null, r, o, !0));
        } else
          (r = _()),
            (e = k.bind(null, r)),
            (n = function () {
              r.parentNode.removeChild(r);
            });
        return (
          e(t),
          function (r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return;
              e((t = r));
            } else n();
          }
        );
      }
      var j,
        $ =
          ((j = []),
          function (t, e) {
            return (j[t] = e), j.filter(Boolean).join("\n");
          });
      function C(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = $(e, o);
        else {
          var c = document.createTextNode(o),
            f = t.childNodes;
          f[e] && t.removeChild(f[e]),
            f.length ? t.insertBefore(c, f[e]) : t.appendChild(c);
        }
      }
      function k(t, e) {
        var n = e.css,
          r = e.media,
          o = e.sourceMap;
        if (
          (r && t.setAttribute("media", r),
          m.ssrId && t.setAttribute(v, e.id),
          o &&
            ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
    },
    124: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    127: function (t, e, n) {
      "use strict";
      e.a = {};
    },
    128: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(96),
        o = n(135),
        c = n(92),
        f = n(97);
      function l(t) {
        return (
          Object(r.a)(t) || Object(o.a)(t) || Object(c.a)(t) || Object(f.a)()
        );
      }
    },
    129: function (t, e, n) {
      "use strict";
      var r = {
        name: "ClientOnly",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            c = r(),
            f = c.default;
          void 0 === f && (f = []);
          var l = c.placeholder;
          return n._isMounted
            ? f
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || l)
                ? t(
                    o.placeholderTag,
                    { class: ["client-only-placeholder"] },
                    o.placeholder || l
                  )
                : f.length > 0
                ? f.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = r;
    },
    135: function (t, e, n) {
      "use strict";
      function r(t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    168: function (t, e, n) {
      var content = n(223);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(100).default)("4a1cbb1a", content, !1, { sourceMap: !1 });
    },
    169: function (t, e, n) {
      var content = n(225);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(100).default)("fa7ff0ca", content, !1, { sourceMap: !1 });
    },
    170: function (t, e, n) {
      "use strict";
      e.a = function (t, e) {
        return (
          (e = e || {}),
          new Promise(function (n, r) {
            var s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function () {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]));
                  },
                  clone: a,
                  headers: {
                    keys: function () {
                      return o;
                    },
                    entries: function () {
                      return u;
                    },
                    get: function (t) {
                      return i[t.toLowerCase()];
                    },
                    has: function (t) {
                      return t.toLowerCase() in i;
                    },
                  },
                };
              };
            for (var c in (s.open(e.method || "get", t, !0),
            (s.onload = function () {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, n) {
                  o.push((e = e.toLowerCase())),
                    u.push([e, n]),
                    (i[e] = i[e] ? i[e] + "," + n : n);
                }),
                n(a());
            }),
            (s.onerror = r),
            (s.withCredentials = "include" == e.credentials),
            e.headers))
              s.setRequestHeader(c, e.headers[c]);
            s.send(e.body || null);
          })
        );
      };
    },
    171: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    172: function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function o(t, e, n) {
        return (
          e && r(t.prototype, e),
          n && r(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      n.d(e, "a", function () {
        return o;
      });
    },
    174: function (t, e, n) {
      "use strict";
      var r = function (t) {
        return (
          (function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t);
            return (
              "[object RegExp]" === e ||
              "[object Date]" === e ||
              (function (t) {
                return t.$$typeof === o;
              })(t)
            );
          })(t)
        );
      };
      var o =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function c(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? m(((n = t), Array.isArray(n) ? [] : {}), t, e)
          : t;
        var n;
      }
      function f(t, source, e) {
        return t.concat(source).map(function (element) {
          return c(element, e);
        });
      }
      function l(t) {
        return Object.keys(t).concat(
          (function (t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (symbol) {
                  return t.propertyIsEnumerable(symbol);
                })
              : [];
          })(t)
        );
      }
      function h(object, t) {
        try {
          return t in object;
        } catch (t) {
          return !1;
        }
      }
      function d(t, source, e) {
        var n = {};
        return (
          e.isMergeableObject(t) &&
            l(t).forEach(function (r) {
              n[r] = c(t[r], e);
            }),
          l(source).forEach(function (r) {
            (function (t, e) {
              return (
                h(t, e) &&
                !(
                  Object.hasOwnProperty.call(t, e) &&
                  Object.propertyIsEnumerable.call(t, e)
                )
              );
            })(t, r) ||
              (h(t, r) && e.isMergeableObject(source[r])
                ? (n[r] = (function (t, e) {
                    if (!e.customMerge) return m;
                    var n = e.customMerge(t);
                    return "function" == typeof n ? n : m;
                  })(r, e)(t[r], source[r], e))
                : (n[r] = c(source[r], e)));
          }),
          n
        );
      }
      function m(t, source, e) {
        ((e = e || {}).arrayMerge = e.arrayMerge || f),
          (e.isMergeableObject = e.isMergeableObject || r),
          (e.cloneUnlessOtherwiseSpecified = c);
        var n = Array.isArray(source);
        return n === Array.isArray(t)
          ? n
            ? e.arrayMerge(t, source, e)
            : d(t, source, e)
          : c(source, e);
      }
      m.all = function (t, e) {
        if (!Array.isArray(t))
          throw new Error("first argument should be an array");
        return t.reduce(function (t, n) {
          return m(t, n, e);
        }, {});
      };
      var v = m;
      t.exports = v;
    },
    175: function (t, e, n) {
      "use strict";
      var r = n(9),
        o = (n(53), n(16), n(67), n(2)),
        c = n(1),
        f = window.__NUXT__;
      function l() {
        if (!this._hydrated) return this.$fetch();
      }
      function h() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = f.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.a.set(this.$data, e, data[e]);
        }
      }
      function d() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function m() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = d.bind(this)),
            Object(c.a)(this, "created", h),
            Object(c.a)(this, "beforeMount", l));
        },
      };
    },
    184: function (t, e, n) {
      (function (t) {
        t.installComponents = function (component, t) {
          var n =
            "function" == typeof component.exports
              ? component.exports.extendOptions
              : component.options;
          for (var i in ("function" == typeof component.exports &&
            (n.components = component.exports.options.components),
          (n.components = n.components || {}),
          t))
            n.components[i] = n.components[i] || t[i];
          n.functional &&
            (function (component, t) {
              if (component.exports[e]) return;
              component.exports[e] = !0;
              var n = component.exports.render;
              component.exports.render = function (e, r) {
                return n(
                  e,
                  Object.assign({}, r, {
                    _c: function (e, a, b) {
                      return r._c(t[e] || e, a, b);
                    },
                  })
                );
              };
            })(component, n.components);
        };
        var e = "_functionalComponents";
      }.call(this, n(28)));
    },
    185: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n(56), n(54), n(35), n(64), n(65);
          var e = n(33),
            r = n(9),
            o =
              (n(114),
              n(195),
              n(205),
              n(206),
              n(53),
              n(51),
              n(16),
              n(36),
              n(42),
              n(43),
              n(68),
              n(69),
              n(121),
              n(45),
              n(27),
              n(34),
              n(37),
              n(67),
              n(2)),
            c = n(170),
            f = n(127),
            l = n(1),
            h = n(25),
            d = n(175),
            m = n(98);
          function v(t, e) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return y(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e);
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              c = !0,
              f = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (f = !0), (o = t);
              },
              f: function () {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (f) throw o;
                }
              },
            };
          }
          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          o.a.__nuxt__fetch__mixin__ ||
            (o.a.mixin(d.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(m.a.name, m.a),
            o.a.component("NLink", m.a),
            t.fetch || (t.fetch = c.a);
          var x,
            w,
            _ = [],
            O = window.__NUXT__ || {},
            j = O.config || {};
          j._app && (n.p = Object(l.v)(j._app.cdnURL, j._app.assetsPath)),
            Object.assign(o.a.config, { silent: !0, performance: !1 });
          var $ = o.a.config.errorHandler || console.error;
          function C(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", e, n) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                o = n ? Object(l.g)(n) : [],
                c = Math.max(t.length, o.length),
                f = [],
                h = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e[t];
                    }),
                    f.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              h(i);
            return f;
          }
          function k(t, e, n) {
            return S.apply(this, arguments);
          }
          function S() {
            return (S = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  f,
                  h,
                  d = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(x.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(l.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(l.r)(e, function (t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return d._diffQuery[t];
                                    })
                                  : "function" == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (f =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (h = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 23:
                          this.error({ statusCode: f, message: h }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            r();
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function E(t, e) {
            return O.serverRendered && e && Object(l.b)(t, e), (t._Ctor = t), t;
          }
          function P(t) {
            return Object(l.d)(
              t,
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var f;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (f = E(
                                Object(l.s)(e),
                                O.data ? O.data[c] : null
                              )),
                              (r.components[o] = f),
                              t.abrupt("return", f)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function R(t, e, n) {
            var r = this,
              o = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(l.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function (t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof f.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t,
                      })),
                    f.a[t]);
              })),
              !c)
            )
              return Object(l.o)(o, e);
          }
          function T(t, e, n) {
            return A.apply(this, arguments);
          }
          function A() {
            return (
              (A = Object(r.a)(
                regeneratorRuntime.mark(function t(e, n, o) {
                  var c,
                    f,
                    d,
                    m,
                    y,
                    w,
                    O,
                    j,
                    $,
                    k,
                    S,
                    E,
                    P,
                    T,
                    A,
                    N = this;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !1 !== this._routeChanged ||
                              !1 !== this._paramChanged ||
                              !1 !== this._queryChanged
                            ) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 2:
                            return (
                              !1,
                              e === n
                                ? ((_ = []), !0)
                                : ((c = []),
                                  (_ = Object(l.g)(n, c).map(function (t, i) {
                                    return Object(l.c)(n.matched[c[i]].path)(
                                      n.params
                                    );
                                  }))),
                              (f = !1),
                              (d = function (path) {
                                n.path === path.path &&
                                  N.$loading.finish &&
                                  N.$loading.finish(),
                                  n.path !== path.path &&
                                    N.$loading.pause &&
                                    N.$loading.pause(),
                                  f || ((f = !0), o(path));
                              }),
                              (t.next = 8),
                              Object(l.t)(x, {
                                route: e,
                                from: n,
                                next: d.bind(this),
                              })
                            );
                          case 8:
                            if (
                              ((this._dateLastError = x.nuxt.dateErr),
                              (this._hadError = Boolean(x.nuxt.err)),
                              (m = []),
                              (y = Object(l.g)(e, m)).length)
                            ) {
                              t.next = 27;
                              break;
                            }
                            return (t.next = 15), R.call(this, y, x.context);
                          case 15:
                            if (!f) {
                              t.next = 17;
                              break;
                            }
                            return t.abrupt("return");
                          case 17:
                            return (
                              (w = (h.a.options || h.a).layout),
                              (t.next = 20),
                              this.loadLayout(
                                "function" == typeof w
                                  ? w.call(h.a, x.context)
                                  : w
                              )
                            );
                          case 20:
                            return (
                              (O = t.sent),
                              (t.next = 23),
                              R.call(this, y, x.context, O)
                            );
                          case 23:
                            if (!f) {
                              t.next = 25;
                              break;
                            }
                            return t.abrupt("return");
                          case 25:
                            return (
                              x.context.error({
                                statusCode: 404,
                                message: "This page could not be found",
                              }),
                              t.abrupt("return", o())
                            );
                          case 27:
                            return (
                              y.forEach(function (t) {
                                t._Ctor &&
                                  t._Ctor.options &&
                                  ((t.options.asyncData =
                                    t._Ctor.options.asyncData),
                                  (t.options.fetch = t._Ctor.options.fetch));
                              }),
                              this.setTransitions(C(y, e, n)),
                              (t.prev = 29),
                              (t.next = 32),
                              R.call(this, y, x.context)
                            );
                          case 32:
                            if (!f) {
                              t.next = 34;
                              break;
                            }
                            return t.abrupt("return");
                          case 34:
                            if (!x.context._errored) {
                              t.next = 36;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 36:
                            return (
                              "function" == typeof (j = y[0].options.layout) &&
                                (j = j(x.context)),
                              (t.next = 40),
                              this.loadLayout(j)
                            );
                          case 40:
                            return (
                              (j = t.sent),
                              (t.next = 43),
                              R.call(this, y, x.context, j)
                            );
                          case 43:
                            if (!f) {
                              t.next = 45;
                              break;
                            }
                            return t.abrupt("return");
                          case 45:
                            if (!x.context._errored) {
                              t.next = 47;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 47:
                            ($ = !0),
                              (t.prev = 48),
                              (k = v(y)),
                              (t.prev = 50),
                              k.s();
                          case 52:
                            if ((S = k.n()).done) {
                              t.next = 63;
                              break;
                            }
                            if (
                              "function" ==
                              typeof (E = S.value).options.validate
                            ) {
                              t.next = 56;
                              break;
                            }
                            return t.abrupt("continue", 61);
                          case 56:
                            return (t.next = 58), E.options.validate(x.context);
                          case 58:
                            if (($ = t.sent)) {
                              t.next = 61;
                              break;
                            }
                            return t.abrupt("break", 63);
                          case 61:
                            t.next = 52;
                            break;
                          case 63:
                            t.next = 68;
                            break;
                          case 65:
                            (t.prev = 65), (t.t0 = t.catch(50)), k.e(t.t0);
                          case 68:
                            return (t.prev = 68), k.f(), t.finish(68);
                          case 71:
                            t.next = 77;
                            break;
                          case 73:
                            return (
                              (t.prev = 73),
                              (t.t1 = t.catch(48)),
                              this.error({
                                statusCode: t.t1.statusCode || "500",
                                message: t.t1.message,
                              }),
                              t.abrupt("return", o())
                            );
                          case 77:
                            if ($) {
                              t.next = 80;
                              break;
                            }
                            return (
                              this.error({
                                statusCode: 404,
                                message: "This page could not be found",
                              }),
                              t.abrupt("return", o())
                            );
                          case 80:
                            return (
                              (t.next = 82),
                              Promise.all(
                                y.map(
                                  (function () {
                                    var t = Object(r.a)(
                                      regeneratorRuntime.mark(function t(r, i) {
                                        var o, c, f, h, d, v, y, w, p;
                                        return regeneratorRuntime.wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (
                                                    ((r._path = Object(l.c)(
                                                      e.matched[m[i]].path
                                                    )(e.params)),
                                                    (r._dataRefresh = !1),
                                                    (o = r._path !== _[i]),
                                                    N._routeChanged && o
                                                      ? (r._dataRefresh = !0)
                                                      : N._paramChanged && o
                                                      ? ((c =
                                                          r.options.watchParam),
                                                        (r._dataRefresh =
                                                          !1 !== c))
                                                      : N._queryChanged &&
                                                        (!0 ===
                                                        (f =
                                                          r.options.watchQuery)
                                                          ? (r._dataRefresh =
                                                              !0)
                                                          : Array.isArray(f)
                                                          ? (r._dataRefresh =
                                                              f.some(function (
                                                                t
                                                              ) {
                                                                return N
                                                                  ._diffQuery[
                                                                  t
                                                                ];
                                                              }))
                                                          : "function" ==
                                                              typeof f &&
                                                            (P ||
                                                              (P = Object(l.h)(
                                                                e
                                                              )),
                                                            (r._dataRefresh =
                                                              f.apply(P[i], [
                                                                e.query,
                                                                n.query,
                                                              ])))),
                                                    N._hadError ||
                                                      !N._isMounted ||
                                                      r._dataRefresh)
                                                  ) {
                                                    t.next = 6;
                                                    break;
                                                  }
                                                  return t.abrupt("return");
                                                case 6:
                                                  return (
                                                    (h = []),
                                                    (d =
                                                      r.options.asyncData &&
                                                      "function" ==
                                                        typeof r.options
                                                          .asyncData),
                                                    (v =
                                                      Boolean(
                                                        r.options.fetch
                                                      ) &&
                                                      r.options.fetch.length),
                                                    (y = d && v ? 30 : 45),
                                                    d &&
                                                      ((w = Object(l.q)(
                                                        r.options.asyncData,
                                                        x.context
                                                      )).then(function (t) {
                                                        Object(l.b)(r, t),
                                                          N.$loading.increase &&
                                                            N.$loading.increase(
                                                              y
                                                            );
                                                      }),
                                                      h.push(w)),
                                                    (N.$loading.manual =
                                                      !1 === r.options.loading),
                                                    v &&
                                                      (((p = r.options.fetch(
                                                        x.context
                                                      )) &&
                                                        (p instanceof Promise ||
                                                          "function" ==
                                                            typeof p.then)) ||
                                                        (p =
                                                          Promise.resolve(p)),
                                                      p.then(function (t) {
                                                        N.$loading.increase &&
                                                          N.$loading.increase(
                                                            y
                                                          );
                                                      }),
                                                      h.push(p)),
                                                    t.abrupt(
                                                      "return",
                                                      Promise.all(h)
                                                    )
                                                  );
                                                case 14:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t
                                        );
                                      })
                                    );
                                    return function (e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              )
                            );
                          case 82:
                            f ||
                              (this.$loading.finish &&
                                !this.$loading.manual &&
                                this.$loading.finish(),
                              o()),
                              (t.next = 99);
                            break;
                          case 85:
                            if (
                              ((t.prev = 85),
                              (t.t2 = t.catch(29)),
                              "ERR_REDIRECT" !== (T = t.t2 || {}).message)
                            ) {
                              t.next = 90;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              this.$nuxt.$emit("routeChanged", e, n, T)
                            );
                          case 90:
                            return (
                              (_ = []),
                              Object(l.k)(T),
                              "function" ==
                                typeof (A = (h.a.options || h.a).layout) &&
                                (A = A(x.context)),
                              (t.next = 96),
                              this.loadLayout(A)
                            );
                          case 96:
                            this.error(T),
                              this.$nuxt.$emit("routeChanged", e, n, T),
                              o();
                          case 99:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [
                      [29, 85],
                      [48, 73],
                      [50, 65, 68, 71],
                    ]
                  );
                })
              )),
              A.apply(this, arguments)
            );
          }
          function N(t, n) {
            Object(l.d)(t, function (t, n, r, c) {
              return (
                "object" !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              );
            });
          }
          function D(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(x.context)), this.setLayout(n);
          }
          function M(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function L(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(l.h)(t),
                c = Object(l.g)(t),
                f = !1;
              o.a.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.a.set(t.$data, n, e[n]);
                    f = !0;
                  }
                }),
                  f &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  M(n);
              });
            }
          }
          function I(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              w.afterEach(function (e, n) {
                o.a.nextTick(function () {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function U() {
            return (U = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, f;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (x = e.app),
                          (w = e.router),
                          e.store,
                          (n = new o.a(x)),
                          (r = function () {
                            n.$mount("#__nuxt"),
                              w.afterEach(N),
                              w.afterEach(D.bind(n)),
                              w.afterEach(L.bind(n)),
                              o.a.nextTick(function () {
                                I(n);
                              });
                          }),
                          (t.next = 7),
                          Promise.all(P(x.context.route))
                        );
                      case 7:
                        if (
                          ((c = t.sent),
                          (n.setTransitions =
                            n.$options.nuxt.setTransitions.bind(n)),
                          c.length &&
                            (n.setTransitions(C(c, w.currentRoute)),
                            (_ = w.currentRoute.matched.map(function (t) {
                              return Object(l.c)(t.path)(w.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          O.error && n.error(O.error),
                          w.beforeEach(k.bind(n)),
                          w.beforeEach(T.bind(n)),
                          !O.serverRendered ||
                            !Object(l.n)(O.routePath, n.context.route.path))
                        ) {
                          t.next = 16;
                          break;
                        }
                        return t.abrupt("return", r());
                      case 16:
                        return (
                          (f = function () {
                            N(w.currentRoute, w.currentRoute),
                              D.call(n, w.currentRoute),
                              M(n),
                              r();
                          }),
                          (t.next = 19),
                          new Promise(function (t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 19:
                        T.call(
                          n,
                          w.currentRoute,
                          w.currentRoute,
                          function (path) {
                            if (path) {
                              var t = w.afterEach(function (e, n) {
                                t(), f();
                              });
                              w.push(path, void 0, function (t) {
                                t && $(t);
                              });
                            } else f();
                          }
                        );
                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(h.b)(null, O.config)
            .then(function (t) {
              return U.apply(this, arguments);
            })
            .catch($);
        }.call(this, n(28));
    },
    19: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      var r = n(96);
      var o = n(92),
        c = n(97);
      function f(t, i) {
        return (
          Object(r.a)(t) ||
          (function (t, i) {
            var e =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var n,
                r,
                o = [],
                c = !0,
                f = !1;
              try {
                for (
                  e = e.call(t);
                  !(c = (n = e.next()).done) &&
                  (o.push(n.value), !i || o.length !== i);
                  c = !0
                );
              } catch (t) {
                (f = !0), (r = t);
              } finally {
                try {
                  c || null == e.return || e.return();
                } finally {
                  if (f) throw r;
                }
              }
              return o;
            }
          })(t, i) ||
          Object(o.a)(t, i) ||
          Object(c.a)()
        );
      }
    },
    222: function (t, e, n) {
      "use strict";
      n(168);
    },
    223: function (t, e, n) {
      var r = n(99)(!1);
      r.push([
        t.i,
        ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",
        "",
      ]),
        (t.exports = r);
    },
    224: function (t, e, n) {
      "use strict";
      n(169);
    },
    225: function (t, e, n) {
      var r = n(99)(!1);
      r.push([
        t.i,
        ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",
        "",
      ]),
        (t.exports = r);
    },
    25: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return nt;
      }),
        n.d(e, "a", function () {
          return A;
        });
      var r = {};
      n.r(r),
        n.d(r, "Loader", function () {
          return J;
        }),
        n.d(r, "UploadNote", function () {
          return X;
        }),
        n.d(r, "NoteEditor", function () {
          return Q;
        }),
        n.d(r, "NoteEditorOptions", function () {
          return V;
        }),
        n.d(r, "NoteEditorPage", function () {
          return G;
        });
      n(43), n(35), n(42), n(70), n(36), n(71);
      var o = n(9),
        c = n(32),
        f = (n(53), n(51), n(16), n(45), n(27), n(93), n(2)),
        l = n(66),
        h = n(173),
        d = n(129),
        m = n.n(d),
        v = n(52),
        y = n.n(v),
        x = (n(34), n(37), n(130)),
        w = n(24),
        _ = n(1);
      "scrollRestoration" in window.history &&
        (Object(_.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(_.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(_.u)("manual");
        }));
      function O(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function j(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? O(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : O(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var $ = function () {};
      f.a.use(x.a);
      var C = {
        mode: "history",
        base: "/xerox-page-builder/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = t !== e;
          n
            ? (r = n)
            : o &&
              (function (t) {
                var e = Object(_.g)(t);
                if (1 === e.length) {
                  var n = e[0].options;
                  return !1 !== (void 0 === n ? {} : n).scrollToTop;
                }
                return e.some(function (t) {
                  var e = t.options;
                  return e && e.scrollToTop;
                });
              })(t) &&
              (r = { x: 0, y: 0 });
          var c = window.$nuxt;
          return (
            (!o || (t.path === e.path && t.hash !== e.hash)) &&
              c.$nextTick(function () {
                return c.$emit("triggerScroll");
              }),
            new Promise(function (e) {
              c.$once("triggerScroll", function () {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/",
            component: function () {
              return Object(_.m)(
                Promise.all([n.e(0), n.e(1), n.e(8)]).then(n.bind(null, 257))
              );
            },
            name: "index",
          },
        ],
        fallback: !1,
      };
      function k(t, e) {
        var base = (e._app && e._app.basePath) || C.base,
          n = new x.a(j(j({}, C), {}, { base: base })),
          r = n.push;
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : $,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return r.call(this, t, e, n);
        };
        var o = n.resolve.bind(n);
        return (
          (n.resolve = function (t, e, n) {
            return "string" == typeof t && (t = Object(w.c)(t)), o(t, e, n);
          }),
          n
        );
      }
      var S = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                f = n.$nuxt.nuxt.transitions,
                l = n.$nuxt.nuxt.defaultTransition,
                h = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && h++, (n = n.$parent);
            data.nuxtChildDepth = h;
            var d = f[h] || l,
              m = {};
            E.forEach(function (t) {
              void 0 !== d[t] && (m[t] = d[t]);
            });
            var v = {};
            P.forEach(function (t) {
              "function" == typeof d[t] && (v[t] = d[t].bind(c));
            });
            var y = v.beforeEnter;
            if (
              ((v.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  y)
                )
                  return y.call(c, t);
              }),
              !1 === d.css)
            ) {
              var x = v.leave;
              (!x || x.length < 2) &&
                (v.leave = function (t, e) {
                  x && x.call(c, t), c.$nextTick(e);
                });
            }
            var w = o("routerView", data);
            return (
              r.keepAlive &&
                (w = o("keep-alive", { props: r.keepAliveProps }, [w])),
              o("transition", { props: m, on: v }, [w])
            );
          },
        },
        E = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        P = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        R = {
          name: "NuxtError",
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function () {
              return (this.error && this.error.statusCode) || 500;
            },
            message: function () {
              return this.error.message || "Error";
            },
          },
          head: function () {
            return {
              title: this.message,
              meta: [
                {
                  name: "viewport",
                  content:
                    "width=device-width,initial-scale=1.0,minimum-scale=1.0",
                },
              ],
            };
          },
        },
        T = (n(222), n(41)),
        A = Object(T.a)(
          R,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "__nuxt-error-page" }, [
              n("div", { staticClass: "error" }, [
                n(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "90",
                      height: "90",
                      fill: "#DBE1EC",
                      viewBox: "0 0 48 48",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                n("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
                t._v(" "),
                404 === t.statusCode
                  ? n(
                      "p",
                      { staticClass: "description" },
                      [
                        void 0 === t.$route
                          ? n("a", {
                              staticClass: "error-link",
                              attrs: { href: "/" },
                            })
                          : n(
                              "NuxtLink",
                              { staticClass: "error-link", attrs: { to: "/" } },
                              [t._v("Back to the home page")]
                            ),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t._m(0),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "logo" }, [
                n(
                  "a",
                  {
                    attrs: {
                      href: "https://nuxtjs.org",
                      target: "_blank",
                      rel: "noopener",
                    },
                  },
                  [t._v("Nuxt")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        N = n(19),
        D =
          (n(126),
          {
            name: "Nuxt",
            components: { NuxtChild: S, NuxtError: A },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (t) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = t), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(_.c)(this.$route.matched[0].path)(this.$route.params)
                  );
                var t = Object(N.a)(this.$route.matched, 1)[0];
                if (!t) return this.$route.path;
                var e = t.components.default;
                if (e && e.options) {
                  var n = e.options;
                  if (n.key)
                    return "function" == typeof n.key
                      ? n.key(this.$route)
                      : n.key;
                }
                return /\/$/.test(t.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              f.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
            },
            render: function (t) {
              var e = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (e.errorFromNuxtError = !1);
                    }),
                    t("div", {}, [
                      t("h2", "An error occurred while showing the error page"),
                      t(
                        "p",
                        "Unfortunately an error occurred and while showing the error page another error occurred"
                      ),
                      t(
                        "p",
                        "Error details: ".concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (e.displayingNuxtError = !1);
                    }),
                    t(A, { props: { error: this.nuxt.err } }))
                : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props,
                  });
            },
          }),
        M =
          (n(56),
          n(54),
          n(64),
          n(65),
          n(67),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed,
                    },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                e
              );
            },
          }),
        L =
          (n(224),
          Object(T.a)(M, undefined, undefined, !1, null, null, null).exports),
        I =
          (n(226),
          Object(T.a)(
            {},
            function () {
              var t = this.$createElement;
              return (this._self._c || t)("Nuxt");
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);
      function U(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return B(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return B(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          },
        };
      }
      function B(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var F = { _default: Object(_.s)(I) },
        K = {
          render: function (t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            f.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
            isPreview: function () {
              return Boolean(this.$options.previewData);
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(_.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(_.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    r = U(
                                      Object(_.e)(e.$vnode.componentInstance)
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    r.e(t);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(_.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          f.a.set(e.$data, n, t[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(_.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var t = (A.options || A).layout;
                "function" == typeof t && (t = t(this.context)),
                  this.setLayout(t);
              }
            },
            setLayout: function (t) {
              return (
                (t && F["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = F["_" + t]),
                this.layout
              );
            },
            loadLayout: function (t) {
              return (
                (t && F["_" + t]) || (t = "default"),
                Promise.resolve(F["_" + t])
              );
            },
          },
          components: { NuxtLoading: L },
        };
      f.a.use(l.a);
      var z = {};
      (z = (function (t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return (
          "function" != typeof t && (t = Object.assign({}, t)),
          (function (t, e) {
            if (t.state && "function" != typeof t.state) {
              console.warn(
                "'state' should be a method that returns an object in ".concat(
                  e
                )
              );
              var n = Object.assign({}, t.state);
              t = Object.assign({}, t, {
                state: function () {
                  return n;
                },
              });
            }
            return t;
          })(t, e)
        );
      })(n(228), "store/index.js")).modules = z.modules || {};
      var H =
        z instanceof Function
          ? z
          : function () {
              return new l.a.Store(Object.assign({ strict: !1 }, z));
            };
      n(68), n(69);
      var J = function () {
          return n
            .e(4)
            .then(n.bind(null, 249))
            .then(function (t) {
              return W(t.default || t);
            });
        },
        X = function () {
          return Promise.all([n.e(0), n.e(7)])
            .then(n.bind(null, 247))
            .then(function (t) {
              return W(t.default || t);
            });
        },
        Q = function () {
          return n
            .e(1)
            .then(n.bind(null, 256))
            .then(function (t) {
              return W(t.default || t);
            });
        },
        V = function () {
          return n
            .e(5)
            .then(n.bind(null, 248))
            .then(function (t) {
              return W(t.default || t);
            });
        },
        G = function () {
          return n
            .e(6)
            .then(n.bind(null, 246))
            .then(function (t) {
              return W(t.default || t);
            });
        };
      function W(t) {
        if (!t || !t.functional) return t;
        var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
        return {
          render: function (n) {
            var r = {},
              o = {};
            for (var c in this.$attrs)
              e.includes(c) ? (o[c] = this.$attrs[c]) : (r[c] = this.$attrs[c]);
            return n(
              t,
              {
                on: this.$listeners,
                attrs: r,
                props: o,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      for (var Y in r) f.a.component(Y, r[Y]), f.a.component("Lazy" + Y, r[Y]);
      function Z(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function tt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Z(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Z(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      f.a.component(m.a.name, m.a),
        f.a.component(
          y.a.name,
          tt(
            tt({}, y.a),
            {},
            {
              render: function (t, e) {
                return (
                  y.a._warned ||
                    ((y.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  y.a.render(t, e)
                );
              },
            }
          )
        ),
        f.a.component(S.name, S),
        f.a.component("NChild", S),
        f.a.component(D.name, D),
        Object.defineProperty(f.a.prototype, "$nuxt", {
          get: function () {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt;
          },
          configurable: !0,
        }),
        f.a.use(h.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var et = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to",
      };
      l.a.Store.prototype.registerModule;
      function nt(t) {
        return ot.apply(this, arguments);
      }
      function ot() {
        return (
          (ot = Object(o.a)(
            regeneratorRuntime.mark(function t(e) {
              var n,
                r,
                c,
                l,
                h,
                d,
                path,
                m,
                v = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (m = function (t, e) {
                          if (!t)
                            throw new Error(
                              "inject(key, value) has no key provided"
                            );
                          if (void 0 === e)
                            throw new Error(
                              "inject('".concat(
                                t,
                                "', value) has no value provided"
                              )
                            );
                          (l[(t = "$" + t)] = e),
                            l.context[t] || (l.context[t] = e),
                            (c[t] = l[t]);
                          var n = "__nuxt_" + t + "_installed__";
                          f.a[n] ||
                            ((f.a[n] = !0),
                            f.a.use(function () {
                              Object.prototype.hasOwnProperty.call(
                                f.a.prototype,
                                t
                              ) ||
                                Object.defineProperty(f.a.prototype, t, {
                                  get: function () {
                                    return this.$root.$options[t];
                                  },
                                });
                            }));
                        }),
                        (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                        (t.next = 4),
                        k(0, n)
                      );
                    case 4:
                      return (
                        (r = t.sent),
                        ((c = H(e)).$router = r),
                        (l = tt(
                          {
                            head: {
                              title:
                                "Xerox Page Builder for Physicswallah, Unacademy etc. notes",
                              htmlAttrs: { lang: "en" },
                              meta: [
                                { charset: "utf-8" },
                                {
                                  name: "viewport",
                                  content:
                                    "width=device-width, initial-scale=1",
                                },
                                {
                                  hid: "description",
                                  name: "description",
                                  content: "",
                                },
                                {
                                  name: "format-detection",
                                  content: "telephone=no",
                                },
                              ],
                              link: [
                                {
                                  rel: "icon",
                                  type: "image/x-icon",
                                  href: "/xerox-page-builder/images/icon.svg",
                                },
                                {
                                  rel: "preconnect",
                                  href: "https://fonts.gstatic.com",
                                },
                                {
                                  rel: "stylesheet",
                                  href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;800&display=swap",
                                },
                              ],
                              style: [],
                              script: [],
                            },
                            store: c,
                            router: r,
                            nuxt: {
                              defaultTransition: et,
                              transitions: [et],
                              setTransitions: function (t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function (t) {
                                    return (t = t
                                      ? "string" == typeof t
                                        ? Object.assign({}, et, { name: t })
                                        : Object.assign({}, et, t)
                                      : et);
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                );
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                (t = t || null),
                                  (l.context._errored = Boolean(t)),
                                  (t = t ? Object(_.p)(t) : null);
                                var n = l.nuxt;
                                return (
                                  this && (n = this.nuxt || this.$options.nuxt),
                                  (n.dateErr = Date.now()),
                                  (n.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                );
                              },
                            },
                          },
                          K
                        )),
                        (c.app = l),
                        (h = e
                          ? e.next
                          : function (t) {
                              return l.router.push(t);
                            }),
                        e
                          ? (d = r.resolve(e.url).route)
                          : ((path = Object(_.f)(
                              r.options.base,
                              r.options.mode
                            )),
                            (d = r.resolve(path).route)),
                        (t.next = 13),
                        Object(_.t)(l, {
                          store: c,
                          route: d,
                          next: h,
                          error: l.nuxt.error.bind(l),
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                          ssrContext: e,
                        })
                      );
                    case 13:
                      m("config", n),
                        window.__NUXT__ &&
                          window.__NUXT__.state &&
                          c.replaceState(window.__NUXT__.state),
                        (l.context.enablePreview = function () {
                          var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          (l.previewData = Object.assign({}, t)),
                            m("preview", t);
                        }),
                        (t.next = 19);
                      break;
                    case 19:
                      return (
                        (l.context.enablePreview = function () {
                          console.warn(
                            "You cannot call enablePreview() outside a plugin."
                          );
                        }),
                        (t.next = 22),
                        new Promise(function (t, e) {
                          if (
                            !r.resolve(l.context.route.fullPath).route.matched
                              .length
                          )
                            return t();
                          r.replace(l.context.route.fullPath, t, function (n) {
                            if (!n._isRouter) return e(n);
                            if (2 !== n.type) return t();
                            var c = r.afterEach(
                              (function () {
                                var e = Object(o.a)(
                                  regeneratorRuntime.mark(function e(n, r) {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 3), Object(_.j)(n);
                                          case 3:
                                            (l.context.route = e.sent),
                                              (l.context.params =
                                                n.params || {}),
                                              (l.context.query = n.query || {}),
                                              c(),
                                              t();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          });
                        })
                      );
                    case 22:
                      return t.abrupt("return", {
                        store: c,
                        app: l,
                        router: r,
                      });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          ot.apply(this, arguments)
        );
      }
    },
    32: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    33: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    52: function (t, e, n) {
      "use strict";
      var r = {
        name: "NoSsr",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var n = e.parent,
            r = e.slots,
            o = e.props,
            c = r(),
            f = c.default;
          void 0 === f && (f = []);
          var l = c.placeholder;
          return n._isMounted
            ? f
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || l)
                ? t(
                    o.placeholderTag,
                    { class: ["no-ssr-placeholder"] },
                    o.placeholder || l
                  )
                : f.length > 0
                ? f.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = r;
    },
    9: function (t, e, n) {
      "use strict";
      function r(t, e, n, r, o, c, f) {
        try {
          var l = t[c](f),
            h = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(h) : Promise.resolve(h).then(r, o);
      }
      function o(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, c) {
            var f = t.apply(e, n);
            function l(t) {
              r(f, o, c, l, h, "next", t);
            }
            function h(t) {
              r(f, o, c, l, h, "throw", t);
            }
            l(void 0);
          });
        };
      }
      n.d(e, "a", function () {
        return o;
      });
    },
    92: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(124);
      function o(t, e) {
        if (t) {
          if ("string" == typeof t) return Object(r.a)(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(t, e)
              : void 0
          );
        }
      }
    },
    96: function (t, e, n) {
      "use strict";
      function r(t) {
        if (Array.isArray(t)) return t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    97: function (t, e, n) {
      "use strict";
      function r() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    98: function (t, e, n) {
      "use strict";
      n(67),
        n(16),
        n(36),
        n(68),
        n(69),
        n(45),
        n(42),
        n(56),
        n(51),
        n(54),
        n(34),
        n(27),
        n(35),
        n(64),
        n(65),
        n(37);
      var r = n(2);
      function o(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          f = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (f = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              f || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var f =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        l =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        h =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = f(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          l(this.handleId),
            this.__observed &&
              (h.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            h &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              h.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              h.unobserve(this.$el);
              var t,
                e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          },
        },
      };
    },
    99: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var content = (function (t, e) {
                var content = t[1] || "",
                  n = t[3];
                if (!n) return content;
                if (e && "function" == typeof btoa) {
                  var r =
                      ((c = n),
                      (f = btoa(
                        unescape(encodeURIComponent(JSON.stringify(c)))
                      )),
                      (data =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          f
                        )),
                      "/*# ".concat(data, " */")),
                    o = n.sources.map(function (source) {
                      return "/*# sourceURL="
                        .concat(n.sourceRoot || "")
                        .concat(source, " */");
                    });
                  return [content].concat(o).concat([r]).join("\n");
                }
                var c, f, data;
                return [content].join("\n");
              })(e, t);
              return e[2]
                ? "@media ".concat(e[2], " {").concat(content, "}")
                : content;
            }).join("");
          }),
          (e.i = function (t, n, r) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var c = this[i][0];
                null != c && (o[c] = !0);
              }
            for (var f = 0; f < t.length; f++) {
              var l = [].concat(t[f]);
              (r && o[l[0]]) ||
                (n &&
                  (l[2]
                    ? (l[2] = "".concat(n, " and ").concat(l[2]))
                    : (l[2] = n)),
                e.push(l));
            }
          }),
          e
        );
      };
    },
  },
]);

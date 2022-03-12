(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    229: function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(9);
        n(53), n(16), n(67);
        t.a = {
          methods: {
            delay: function (e) {
              return new Promise(
                (function () {
                  var t = Object(r.a)(
                    regeneratorRuntime.mark(function t(n, r) {
                      return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              try {
                                setTimeout(function () {
                                  n();
                                }, e);
                              } catch (e) {
                                r(e);
                              }
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            },
            checkIfWebsiteIsAuthorized: function () {
              0 !==
                location.href.indexOf(
                  "https://soumodip.github.io/xerox-page-builder"
                ) && (document.body.innerHTML = "");
            },
            displayConsoleLog: function (t) {
              "production" !== e.env.nodeEnvironment && console.log(t);
            },
          },
        };
      }.call(this, n(176)));
    },
    230: function (e, t, n) {
      "use strict";
      var r = n(9);
      n(53), n(16);
      t.a = {
        methods: {
          fetchNotePdf: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(function (t, n) {
                            var r = window["pdfjs-dist/build/pdf"];
                            r.GlobalWorkerOptions.workerSrc =
                              "//mozilla.github.io/pdf.js/build/pdf.worker.js";
                            var o = e.parsedNote;
                            r.getDocument({ url: o }).promise.then(
                              function (e) {
                                t(e);
                              },
                              function (e) {
                                n(e);
                              }
                            );
                          })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          buildAndDownloadPdf: function (e) {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                var r,
                  o,
                  c,
                  d,
                  l,
                  f,
                  h,
                  m,
                  v,
                  x,
                  w,
                  y,
                  I,
                  P,
                  k,
                  C,
                  O,
                  j,
                  _,
                  R,
                  z,
                  E,
                  L,
                  A,
                  H,
                  S;
                return regeneratorRuntime.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (r = e.height),
                            (o = e.width),
                            (c = e.processedPages),
                            (n.prev = 1),
                            (d = r > o ? "horizontal-wrapped" : "vertical"),
                            (l = new jsPDF("p", "mm", "a4")),
                            (f = l.internal.pageSize.width),
                            (h = l.internal.pageSize.height),
                            (m = 0);
                        case 7:
                          if (!(m < c.length)) {
                            n.next = 18;
                            break;
                          }
                          if (0 !== (v = c[m]).length) {
                            n.next = 11;
                            break;
                          }
                          return n.abrupt("continue", 15);
                        case 11:
                          if ("vertical" === d)
                            for (
                              x = (0.95 * h) / v.length,
                                w = 0.95 * f,
                                y = 0.025 * h,
                                I = 0;
                              I < v.length;
                              I++
                            )
                              (P = v[I]),
                                (O =
                                  (C = (1 * x) / r) > (k = (1 * w) / o)
                                    ? k
                                    : C),
                                l.addImage(
                                  P,
                                  "JPEG",
                                  0.025 * f,
                                  y,
                                  o * O,
                                  r * O
                                ),
                                (y += x);
                          else
                            for (
                              j = (0.95 * h) / (v.length > 2 ? 2 : 1),
                                _ = (0.95 * f) / (v.length >= 2 ? 2 : 1),
                                R = 0.025 * h,
                                z = 0;
                              z < v.length;
                              z++
                            )
                              (E = v[z]),
                                (H =
                                  (A = (1 * j) / r) > (L = (1 * _) / o)
                                    ? L
                                    : A),
                                l.addImage(
                                  E,
                                  "JPEG",
                                  _ * (z % 2) + 0.025 * f,
                                  R,
                                  o * H,
                                  r * H
                                ),
                                1 === z && (R += j);
                          return (
                            m !== c.length - 1 && l.addPage(),
                            (n.next = 15),
                            t.delay(100)
                          );
                        case 15:
                          m++, (n.next = 7);
                          break;
                        case 18:
                          return (
                            l.save("xerox.pdf"), (n.next = 21), t.delay(100)
                          );
                        case 21:
                          (t.isProcessing = !1),
                            (document.body.innerHTML =
                              '<section class="\n          flex-column\n          align-items-center\n          justify-content-center\n          position-absolute\n          top-left\n          full-height full-width\n          background-color-light\n        "\n      >\n        <img src="/xerox-page-builder/images/icons/download-dark.svg" class="height-36 margin-bottom-12" />\n        <p class="opacity-medium color-dark text-align-center margin-top-12">\n          We\'ve generated the PDF and have <br/>pushed it for download.\n        </p>\n      </section>'),
                            (n.next = 29);
                          break;
                        case 25:
                          (n.prev = 25),
                            (n.t0 = n.catch(1)),
                            (S = n.t0.message),
                            t.displayConsoleLog(S);
                        case 29:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 25]]
                );
              })
            )();
          },
        },
      };
    },
    233: function (e, t, n) {
      var content = n(240);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(100).default)("22ec4052", content, !1, { sourceMap: !1 });
    },
    239: function (e, t, n) {
      "use strict";
      n(233);
    },
    240: function (e, t, n) {
      var r = n(99)(!1);
      r.push([
        e.i,
        ".page-container[data-v-32a53d04]{align-self:flex-start;margin:0 24px 24px 0;background:#f8f8fd}.page-container .page-no[data-v-32a53d04]{position:absolute;top:0;left:0;padding:5px 7px;font-size:12px;color:#fff;background:#2c2f3b}.page-container .btn-dark[data-v-32a53d04]{min-width:18px;margin:0 12px 0 0;padding:4px 9px;font-size:12px;font-weight:400;color:#2c2f3b;background:#fff;border:1px solid rgba(44,47,59,.15);border-radius:4px}.page-container .btn-dark img[data-v-32a53d04]{height:11px;margin:0 5px 0 0}",
        "",
      ]),
        (e.exports = r);
    },
    246: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(124);
      var o = n(135),
        c = n(92);
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(r.a)(e);
          })(e) ||
          Object(o.a)(e) ||
          Object(c.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var l = n(9),
        f = (n(68), n(69), n(178), n(53), n(229)),
        h = n(230),
        m = {
          props: ["notePdf", "pageIndex", "numberOfPages"],
          data: function () {
            return { isInverted: !1 };
          },
          computed: {
            hiddenPageIndexes: {
              get: function () {
                return this.$store.state.hiddenPageIndexes;
              },
              set: function (e) {
                this.$store.commit("updateHiddenPageIndexes", e);
              },
            },
          },
          mixins: [f.a, h.a],
          methods: {
            setUpPage: function () {
              var e = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r, o;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          try {
                            (n = e.notePdf),
                              (r = e.pageIndex),
                              e,
                              n.getPage(r + 1).then(function (e) {
                                var t = e.getViewport({ scale: 1 }),
                                  canvas = document.getElementById(
                                    "page-".concat(r)
                                  ),
                                  n = canvas.getContext("2d");
                                (canvas.height = t.height),
                                  (canvas.width = t.width);
                                var o = { canvasContext: n, viewport: t };
                                e.render(o).promise.then(function () {});
                              });
                          } catch (t) {
                            (o = t.message), e.displayConsoleLog(o);
                          }
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            toggleHidePage: function () {
              try {
                var e = this.pageIndex,
                  t = d(this.hiddenPageIndexes);
                t.includes(e) ? t.splice(t.indexOf(e), 1) : t.push(e),
                  (this.hiddenPageIndexes = t);
              } catch (e) {
                var n = e.message;
                this.displayConsoleLog(n);
              }
            },
            toggleInvertOfCurrentPage: function () {
              try {
                var e = this.pageIndex,
                  canvas = document.getElementById("page-".concat(e)),
                  t = canvas.getContext("2d"),
                  n = canvas.height,
                  r = canvas.width;
                (t.globalCompositeOperation = "difference"),
                  (t.fillStyle = "white"),
                  (t.globalAlpha = 1),
                  t.fillRect(0, 0, r, n),
                  (this.isInverted = !this.isInverted);
              } catch (e) {
                var o = e.message;
                this.displayConsoleLog(o);
              }
            },
          },
          mounted: function () {
            this.setUpPage();
          },
        },
        v = (n(239), n(41)),
        component = Object(v.a)(
          m,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "page-container position-relative" },
              [
                n(
                  "section",
                  {
                    class: [
                      {
                        "opacity-none": e.hiddenPageIndexes.includes(
                          e.pageIndex
                        ),
                      },
                    ],
                  },
                  [n("canvas", { attrs: { id: "page-" + e.pageIndex } })]
                ),
                e._v(" "),
                n("p", { staticClass: "page-no" }, [
                  n("b", [e._v(e._s(e.pageIndex + 1))]),
                  e._v(" / " + e._s(e.numberOfPages) + "\n  "),
                ]),
                e._v(" "),
                n(
                  "section",
                  {
                    staticClass:
                      "\n      position-absolute\n      top-right\n      margin-top-12 margin-right-12\n      flex-row\n      align-items-center\n    ",
                  },
                  [
                    n(
                      "a",
                      {
                        staticClass: "btn-dark cursor-pointer-opacity",
                        on: { click: e.toggleInvertOfCurrentPage },
                      },
                      [
                        n("img", {
                          attrs: {
                            src: "/xerox-page-builder/images/icons/convert-dark.svg",
                          },
                        }),
                        e._v(
                          "\n      " +
                            e._s(e.isInverted ? "Undo" : "Black to White") +
                            "\n    "
                        ),
                      ]
                    ),
                    e._v(" "),
                    n("img", {
                      staticClass: "height-24 cursor-pointer-opacity",
                      attrs: {
                        src:
                          "/xerox-page-builder/images/icons/" +
                          (e.hiddenPageIndexes.includes(e.pageIndex)
                            ? "view-dark"
                            : "hide-danger") +
                          ".svg",
                      },
                      on: { click: e.toggleHidePage },
                    }),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "32a53d04",
          null
        );
      t.default = component.exports;
    },
  },
]);

(window.webpackJsonp = window.webpackJsonp || []).push([
  [1, 5, 6],
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
                  P,
                  k,
                  O,
                  C,
                  I,
                  j,
                  _,
                  R,
                  B,
                  A,
                  E,
                  W,
                  T,
                  $;
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
                                P = 0;
                              P < v.length;
                              P++
                            )
                              (k = v[P]),
                                (I =
                                  (C = (1 * x) / r) > (O = (1 * w) / o)
                                    ? O
                                    : C),
                                l.addImage(
                                  k,
                                  "JPEG",
                                  0.025 * f,
                                  y,
                                  o * I,
                                  r * I
                                ),
                                (y += x);
                          else
                            for (
                              j = (0.95 * h) / (v.length > 2 ? 2 : 1),
                                _ = (0.95 * f) / (v.length >= 2 ? 2 : 1),
                                R = 0.025 * h,
                                B = 0;
                              B < v.length;
                              B++
                            )
                              (A = v[B]),
                                (T =
                                  (W = (1 * j) / r) > (E = (1 * _) / o)
                                    ? E
                                    : W),
                                l.addImage(
                                  A,
                                  "JPEG",
                                  _ * (B % 2) + 0.025 * f,
                                  R,
                                  o * T,
                                  r * T
                                ),
                                1 === B && (R += j);
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
                            ($ = n.t0.message),
                            t.displayConsoleLog($);
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
    232: function (e, t, n) {
      var content = n(238);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(100).default)("60c2d9ed", content, !1, { sourceMap: !1 });
    },
    233: function (e, t, n) {
      var content = n(240);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(100).default)("22ec4052", content, !1, { sourceMap: !1 });
    },
    237: function (e, t, n) {
      "use strict";
      n(232);
    },
    238: function (e, t, n) {
      var r = n(99)(!1);
      r.push([
        e.i,
        ".option-container[data-v-7f1b8d6a]{height:56px;width:100%;padding:0 18px;border-bottom:1px solid rgba(44,47,59,.1)}.option-container .checkbox[data-v-7f1b8d6a]{height:16px;width:16px;margin:0 7px 0 0;border:2px solid #2c2f3b;border-radius:5px}.option-container .checkbox.active[data-v-7f1b8d6a]{background:#2c2f3b}",
        "",
      ]),
        (e.exports = r);
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
    244: function (e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    245: function (e, t, n) {
      var content = n(255);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(100).default)("72530ec2", content, !1, { sourceMap: !1 });
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
    248: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(9),
        o =
          (n(53),
          {
            data: function () {
              return { combineOptions: [] };
            },
            computed: {
              selectedCombineOption: {
                get: function () {
                  return this.$store.state.selectedCombineOption;
                },
                set: function (e) {
                  this.$store.commit("updateSelectedCombineOption", e);
                },
              },
              isConvertBlackToWhite: {
                get: function () {
                  return this.$store.state.isConvertBlackToWhite;
                },
                set: function (e) {
                  this.$store.commit("updateIsConvertBlackToWhite", e);
                },
              },
              triggerAction: {
                get: function () {
                  return this.$store.state.triggerAction;
                },
                set: function (e) {
                  this.$store.commit("updateTriggerAction", e);
                },
              },
              isProcessing: {
                get: function () {
                  return this.$store.state.isProcessing;
                },
                set: function (e) {
                  this.$store.commit("updateIsProcessing", e);
                },
              },
            },
            mixins: [n(229).a],
            methods: {
              setUpOptions: function () {
                var e = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function t() {
                    var canvas, n, r;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.delay(1e3);
                          case 2:
                            (canvas = document.getElementById("page-0")) &&
                              ((n = canvas.height),
                              (r = canvas.width),
                              (e.combineOptions =
                                r > n
                                  ? ["2 in 1", "3 in 1", "4 in 1", "5 in 1"]
                                  : ["2 in 1", "3 in 1", "4 in 1"]));
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              updateSelectedCombineOption: function (e) {
                this.selectedCombineOption = e;
              },
              toggleConvertBlackToWhite: function () {
                this.isConvertBlackToWhite = !this.isConvertBlackToWhite;
              },
              generatePdf: function () {
                (this.isProcessing = !0),
                  (this.triggerAction = { type: "generatePdf" });
              },
            },
            mounted: function () {
              this.setUpOptions();
            },
          }),
        c = (n(237), n(41)),
        component = Object(c.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              {
                staticClass:
                  "\n    option-container\n    flex-row\n    align-items-center\n    justify-content-space-between\n  ",
              },
              [
                n("section", { staticClass: "flex-row align-items-center" }, [
                  n(
                    "section",
                    {
                      staticClass:
                        "flex-row align-items-center margin-right-12",
                    },
                    [
                      n(
                        "p",
                        {
                          staticClass:
                            "font-size-14 color-dark opacity-medium margin-right-12",
                        },
                        [e._v("\n        Combine Pages\n      ")]
                      ),
                      e._v(" "),
                      e._l(e.combineOptions, function (t, r) {
                        return n(
                          "section",
                          {
                            key: "combine-option-" + r,
                            class: [
                              "flex-row align-items-center cursor-pointer-opacity",
                              {
                                "opacity-medium": t !== e.selectedCombineOption,
                              },
                            ],
                            on: {
                              click: function (n) {
                                return e.updateSelectedCombineOption(t);
                              },
                            },
                          },
                          [
                            n("div", {
                              class: [
                                "checkbox",
                                { active: t === e.selectedCombineOption },
                              ],
                            }),
                            e._v(" "),
                            n(
                              "p",
                              {
                                staticClass:
                                  "font-size-14 color-dark margin-right-8",
                              },
                              [e._v("\n          " + e._s(t) + "\n        ")]
                            ),
                          ]
                        );
                      }),
                    ],
                    2
                  ),
                  e._v(" "),
                  n(
                    "section",
                    {
                      class: [
                        "flex-row align-items-center margin-left-12 cursor-pointer-opacity",
                        { "opacity-medium": !e.isConvertBlackToWhite },
                      ],
                      on: { click: e.toggleConvertBlackToWhite },
                    },
                    [
                      n("div", {
                        class: [
                          "checkbox",
                          { active: e.isConvertBlackToWhite },
                        ],
                      }),
                      e._v(" "),
                      n(
                        "p",
                        {
                          staticClass: "font-size-14 color-dark margin-right-8",
                        },
                        [e._v("\n        Convert Black to White (all)\n      ")]
                      ),
                    ]
                  ),
                ]),
                e._v(" "),
                n(
                  "a",
                  {
                    staticClass:
                      "\n      font-size-14\n      color-dark\n      cursor-pointer-opacity\n      flex-row\n      align-items-center\n    ",
                    on: { click: e.generatePdf },
                  },
                  [
                    e._v("Generate\n    "),
                    n("img", {
                      staticClass: "margin-left-8 height-16",
                      attrs: {
                        src: "/xerox-page-builder/images/icons/download-dark.svg",
                      },
                    }),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "7f1b8d6a",
          null
        );
      t.default = component.exports;
    },
    251: function (e, t, n) {
      "use strict";
      var r = n(6),
        o = n(252).trim;
      r(
        { target: "String", proto: !0, forced: n(253)("trim") },
        {
          trim: function () {
            return o(this);
          },
        }
      );
    },
    252: function (e, t, n) {
      var r = n(3),
        o = n(20),
        c = n(12),
        d = n(244),
        l = r("".replace),
        f = "[" + d + "]",
        h = RegExp("^" + f + f + "*"),
        m = RegExp(f + f + "*$"),
        v = function (e) {
          return function (t) {
            var n = c(o(t));
            return 1 & e && (n = l(n, h, "")), 2 & e && (n = l(n, m, "")), n;
          };
        };
      e.exports = { start: v(1), end: v(2), trim: v(3) };
    },
    253: function (e, t, n) {
      var r = n(72).PROPER,
        o = n(4),
        c = n(244);
      e.exports = function (e) {
        return o(function () {
          return !!c[e]() || "​᠎" !== "​᠎"[e]() || (r && c[e].name !== e);
        });
      };
    },
    254: function (e, t, n) {
      "use strict";
      n(245);
    },
    255: function (e, t, n) {
      var r = n(99)(!1);
      r.push([
        e.i,
        ".collection-of-page-container[data-v-75d20980]{position:relative!important;max-height:100%;height:100%;padding:24px;overflow-y:auto}@media only screen and (max-width:1000px){.flex-wrap-wrap[data-v-75d20980]{margin:24px 0 0 24px!important;flex-wrap:none!important;overflow-x:auto}}",
        "",
      ]),
        (e.exports = r);
    },
    256: function (e, t, n) {
      "use strict";
      n.r(t);
      n(43), n(35), n(70), n(36), n(71);
      var r = n(9),
        o = n(32),
        c =
          (n(53),
          n(45),
          n(54),
          n(34),
          n(251),
          n(134),
          n(27),
          n(181),
          n(42),
          n(16),
          n(68),
          n(69),
          n(66)),
        d = n(248),
        l = n(246),
        f = n(229),
        h = n(230);
      function m(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var v = {
          props: ["notePdf"],
          data: function () {
            return { pages: [], processedPages: [] };
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? m(Object(source), !0).forEach(function (t) {
                    Object(o.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : m(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t)
                    );
                  });
            }
            return e;
          })(
            {},
            Object(c.b)([
              "hiddenPageIndexes",
              "selectedCombineOption",
              "isConvertBlackToWhite",
              "triggerAction",
            ])
          ),
          watch: {
            triggerAction: function () {
              var e = this.triggerAction;
              "generatePdf" === e.type && this.generatePdf();
            },
          },
          components: { Options: d.default, NotePdfPage: l.default },
          mixins: [f.a, h.a],
          methods: {
            setUpPages: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r, o;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          try {
                            (n = e.notePdf),
                              (r = n._pdfInfo.numPages),
                              (e.pages = Array.from(Array(r)).map(function (
                                data,
                                e
                              ) {
                                return e;
                              }));
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
            fetchPageImageData: function (e) {
              try {
                var t = this.isConvertBlackToWhite,
                  canvas = document.getElementById("page-".concat(e)),
                  n = canvas.getContext("2d"),
                  r = canvas.height,
                  o = canvas.width;
                return (
                  t &&
                    ((n.globalCompositeOperation = "difference"),
                    (n.fillStyle = "white"),
                    (n.globalAlpha = 1),
                    n.fillRect(0, 0, o, r)),
                  canvas.toDataURL("image/jpeg")
                );
              } catch (e) {
                var c = e.message;
                this.displayConsoleLog(c);
              }
            },
            generatePdf: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r, o, c, d, l, f, h, m, v, x, w, y, P;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((t.prev = 0),
                              (n = e.pages),
                              (r = e.selectedCombineOption),
                              (o = e.hiddenPageIndexes),
                              (c =
                                "" !== r
                                  ? parseInt(
                                      String(r).split("in 1").join().trim()
                                    )
                                  : 1),
                              !(n.length > 0))
                            ) {
                              t.next = 20;
                              break;
                            }
                            (d = []),
                              (l = []),
                              (f = document.getElementById("page-0")),
                              (h = f.height),
                              (m = f.width),
                              (v = n.filter(function (e, t) {
                                return !o.includes(t);
                              })),
                              (x = 0);
                          case 9:
                            if (!(x < v.length)) {
                              t.next = 19;
                              break;
                            }
                            return (
                              (w = v[x]),
                              (y = e.fetchPageImageData(w)),
                              x > 0 && x % c == 0
                                ? (d.push(l), (l = [y]))
                                : l.push(y),
                              x === v.length - 1 && d.push(l),
                              (t.next = 16),
                              e.delay(300)
                            );
                          case 16:
                            x++, (t.next = 9);
                            break;
                          case 19:
                            e.buildAndDownloadPdf({
                              height: h,
                              width: m,
                              processedPages: d,
                            });
                          case 20:
                            t.next = 26;
                            break;
                          case 22:
                            (t.prev = 22),
                              (t.t0 = t.catch(0)),
                              (P = t.t0.message),
                              e.displayConsoleLog(P);
                          case 26:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 22]]
                  );
                })
              )();
            },
          },
          mounted: function () {
            var e = this.notePdf;
            this.checkIfWebsiteIsAuthorized(), e && this.setUpPages();
          },
        },
        x = v,
        w = (n(254), n(41)),
        component = Object(w.a)(
          x,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "section",
              {
                staticClass:
                  "\n    position-absolute\n    top-left\n    full-height full-width\n    background-color-light\n    flex-column\n    justify-content-space-between\n    bring-to-front\n  ",
              },
              [
                n("options"),
                e._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "\n      collection-of-page-container\n      flex-row\n      justify-content-center\n      flex-wrap-wrap\n    ",
                  },
                  e._l(e.pages, function (t, r) {
                    return n("note-pdf-page", {
                      key: "page-" + r,
                      attrs: {
                        pageIndex: r,
                        numberOfPages: e.pages.length,
                        notePdf: e.notePdf,
                      },
                    });
                  }),
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "75d20980",
          null
        );
      t.default = component.exports;
    },
  },
]);

(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 4],
  {
    231: function (t, e, n) {
      var content = n(236);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(100).default)("747eed04", content, !1, { sourceMap: !1 });
    },
    234: function (t, e, n) {
      var content = n(242);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(100).default)("46104bde", content, !1, { sourceMap: !1 });
    },
    235: function (t, e, n) {
      "use strict";
      n(231);
    },
    236: function (t, e, n) {
      var r = n(99)(!1);
      r.push([
        t.i,
        ".upload-btn[data-v-a78498a8]{min-height:40px;padding:9px 12px 9px 9px;border:1px solid rgba(44,47,59,.15);border-radius:9px}.upload-btn .icon[data-v-a78498a8]{display:inline-flex;justify-content:center;align-items:center;min-height:24px;min-width:24px;background:rgba(44,47,59,.1);border-radius:7px}img[data-v-a78498a8]{height:64px;width:auto;margin:0 0 18px}",
        "",
      ]),
        (t.exports = r);
    },
    241: function (t, e, n) {
      "use strict";
      n(234);
    },
    242: function (t, e, n) {
      var r = n(99)(!1);
      r.push([
        t.i,
        ".loader-holder .dot[data-v-36390076]{height:12px;width:12px;background:rgba(44,47,59,.15);border-radius:50%;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-name:blink-data-v-36390076;animation-name:blink-data-v-36390076;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.loader-holder .dot[data-v-36390076]:nth-child(2){-webkit-animation-delay:.33s;animation-delay:.33s}.loader-holder .dot[data-v-36390076]:nth-child(3){-webkit-animation-delay:.66s;animation-delay:.66s}@-webkit-keyframes blink-data-v-36390076{0%{background:rgba(44,47,59,.15)}33%{background:#2c2f3b}}@keyframes blink-data-v-36390076{0%{background:rgba(44,47,59,.15)}33%{background:#2c2f3b}}",
        "",
      ]),
        (t.exports = r);
    },
    247: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(9),
        o =
          (n(53),
          n(16),
          n(34),
          n(37),
          n(243),
          n(177),
          {
            computed: {
              isProcessing: {
                get: function () {
                  return this.$store.state.isProcessing;
                },
                set: function (t) {
                  this.$store.commit("updateIsProcessing", t);
                },
              },
              parsedNote: {
                get: function () {
                  return this.$store.state.parsedNote;
                },
                set: function (t) {
                  this.$store.commit("updateParsedNote", t);
                },
              },
            },
            mixins: [n(229).a],
            methods: {
              triggerUploadOfNote: function () {
                try {
                  document.getElementById("note-file").click();
                } catch (e) {
                  var t = e.message;
                  this.displayConsoleLog(t);
                }
              },
              onNoteFileChange: function (t) {
                var e = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!((r = t.target.files).length > 0)) {
                              n.next = 7;
                              break;
                            }
                            return (
                              (e.isProcessing = !0),
                              (e.parsedNote = URL.createObjectURL(r[0])),
                              (n.next = 6),
                              e.delay(750)
                            );
                          case 6:
                            e.isProcessing = !1;
                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
            },
            mounted: function () {
              this.checkIfWebsiteIsAuthorized();
            },
          }),
        c = (n(235), n(41)),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass:
                  "\n    position-absolute\n    top-left\n    full-height full-width\n    background-color-light\n    flex-column\n    align-items-center\n    justify-content-center\n    bring-to-front\n  ",
              },
              [
                n("img", {
                  attrs: {
                    src: "/xerox-page-builder/images/icon.svg",
                    draggable: "false",
                  },
                }),
                t._v(" "),
                n(
                  "p",
                  { staticClass: "font-size-36 font-weight-800 no-margin" },
                  [t._v("Xerox Page Builder")]
                ),
                t._v(" "),
                n(
                  "p",
                  {
                    staticClass:
                      "\n      font-size-18 font-weight-400\n      margin-top-12\n      color-dark\n      opacity-medium\n      half-width\n      text-align-center\n    ",
                  },
                  [
                    t._v(
                      "\n    If you have notes of Physicswallah, Unacademy etc then you can upload it\n    here and we'll help you create a inverted PDF out of it.\n  "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "a",
                  {
                    staticClass: "upload-btn cursor-pointer-opacity",
                    on: { click: t.triggerUploadOfNote },
                  },
                  [
                    n("span", { staticClass: "icon margin-right-5" }, [
                      t._v("+"),
                    ]),
                    t._v(" Upload "),
                    n("b", [t._v("Note")]),
                  ]
                ),
                t._v(" "),
                n("input", {
                  staticClass: "hidden",
                  attrs: {
                    id: "note-file",
                    type: "file",
                    accept: "application/pdf",
                  },
                  on: { change: t.onNoteFileChange },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "a78498a8",
          null
        );
      e.default = component.exports;
    },
    249: function (t, e, n) {
      "use strict";
      n.r(e);
      n(241);
      var r = n(41),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement;
            t._self._c;
            return t._m(0);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "section",
                {
                  staticClass:
                    "\n    position-absolute\n    top-left\n    full-height full-width\n    background-color-light\n    flex-row\n    align-items-center\n    justify-content-center\n    bring-to-front\n  ",
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "loader-holder flex-row align-items-center",
                    },
                    [
                      n("div", { staticClass: "dot blink margin-right-5" }),
                      t._v(" "),
                      n("div", { staticClass: "dot blink margin-right-5" }),
                      t._v(" "),
                      n("div", { staticClass: "dot blink" }),
                    ]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          "36390076",
          null
        );
      e.default = component.exports;
    },
    257: function (t, e, n) {
      "use strict";
      n.r(e);
      n(43), n(35), n(42), n(16), n(70), n(36), n(71);
      var r = n(9),
        o = n(32),
        c = (n(53), n(66)),
        l = n(229),
        d = n(230);
      function f(object, t) {
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
      var h,
        m = {
          data: function () {
            return {
              loadedExternalScripts: 0,
              numberOfExternalScripts: 2,
              notePdf: null,
            };
          },
          head: function () {
            var t = this;
            return {
              script: [
                {
                  src: "//mozilla.github.io/pdf.js/build/pdf.js",
                  callback: function () {
                    t.loadedExternalScripts += 1;
                  },
                },
                {
                  src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js",
                  callback: function () {
                    t.loadedExternalScripts += 1;
                  },
                },
              ],
            };
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? f(Object(source), !0).forEach(function (e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : f(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {
              isProcessing: {
                get: function () {
                  return this.$store.state.isProcessing;
                },
                set: function (t) {
                  this.$store.commit("updateIsProcessing", t);
                },
              },
            },
            Object(c.b)(["parsedNote"])
          ),
          watch: {
            loadedExternalScripts:
              ((h = Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var e, n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((e = this.loadedExternalScripts),
                              (n = this.numberOfExternalScripts),
                              e !== n)
                            ) {
                              t.next = 5;
                              break;
                            }
                            return (t.next = 4), this.delay(750);
                          case 4:
                            this.isProcessing = !1;
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function () {
                return h.apply(this, arguments);
              }),
            parsedNote: function () {
              this.setUpEditor();
            },
          },
          mixins: [l.a, d.a],
          methods: {
            setUpEditor: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), t.fetchNotePdf();
                          case 3:
                            (t.notePdf = e.sent), (e.next = 10);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              (n = e.t0.message),
                              t.displayConsoleLog(n);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              )();
            },
          },
          mounted: function () {
            this.checkIfWebsiteIsAuthorized();
          },
        },
        v = m,
        x = n(41),
        component = Object(x.a)(
          v,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass:
                  "position-absolute top-left full-height full-width",
              },
              [
                !t.notePdf &&
                (!t.parsedNote || (t.isProcessing && t.parsedNote))
                  ? n("upload-note")
                  : t._e(),
                t._v(" "),
                t.notePdf
                  ? n("note-editor", { attrs: { notePdf: t.notePdf } })
                  : t._e(),
                t._v(" "),
                t.isProcessing ? n("loader") : t._e(),
                t._v(" "),
                t._m(0),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "section",
                {
                  staticClass:
                    "\n      position-absolute\n      bottom-left\n      full-width\n      margin-bottom-12\n      flex-row\n      align-items-center\n      justify-content-center\n      bring-to-front\n    ",
                },
                [
                  n(
                    "p",
                    { staticClass: "no-margin margin-right-8 color-dark" },
                    [t._v("Developed by")]
                  ),
                  t._v(" "),
                  n(
                    "a",
                    {
                      staticClass:
                        "text-decoration-none color-dark font-weight-500",
                      attrs: {
                        target: "_blank",
                        href: "https://in.linkedin.com/in/soumodippaul",
                      },
                    },
                    [t._v("Soumodip Paul")]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        UploadNote: n(247).default,
        NoteEditor: n(256).default,
        Loader: n(249).default,
      });
    },
  },
]);

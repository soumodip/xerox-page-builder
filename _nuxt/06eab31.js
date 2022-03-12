(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    229: function (t, e, n) {
      "use strict";
      (function (t) {
        var o = n(9);
        n(53), n(16), n(67);
        e.a = {
          methods: {
            delay: function (t) {
              return new Promise(
                (function () {
                  var e = Object(o.a)(
                    regeneratorRuntime.mark(function e(n, o) {
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              try {
                                setTimeout(function () {
                                  n();
                                }, t);
                              } catch (t) {
                                o(t);
                              }
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
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
            displayConsoleLog: function (e) {
              "production" !== t.env.nodeEnvironment && console.log(e);
            },
          },
        };
      }.call(this, n(176)));
    },
    231: function (t, e, n) {
      var content = n(236);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(100).default)("747eed04", content, !1, { sourceMap: !1 });
    },
    235: function (t, e, n) {
      "use strict";
      n(231);
    },
    236: function (t, e, n) {
      var o = n(99)(!1);
      o.push([
        t.i,
        ".upload-btn[data-v-a78498a8]{min-height:40px;padding:9px 12px 9px 9px;border:1px solid rgba(44,47,59,.15);border-radius:9px}.upload-btn .icon[data-v-a78498a8]{display:inline-flex;justify-content:center;align-items:center;min-height:24px;min-width:24px;background:rgba(44,47,59,.1);border-radius:7px}img[data-v-a78498a8]{height:64px;width:auto;margin:0 0 18px}",
        "",
      ]),
        (t.exports = o);
    },
    247: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(9),
        r =
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
                return Object(o.a)(
                  regeneratorRuntime.mark(function n() {
                    var o;
                    return regeneratorRuntime.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!((o = t.target.files).length > 0)) {
                              n.next = 7;
                              break;
                            }
                            return (
                              (e.isProcessing = !0),
                              (e.parsedNote = URL.createObjectURL(o[0])),
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
          r,
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
  },
]);

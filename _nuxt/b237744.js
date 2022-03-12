(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
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
    232: function (t, e, n) {
      var content = n(238);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(100).default)("60c2d9ed", content, !1, { sourceMap: !1 });
    },
    237: function (t, e, n) {
      "use strict";
      n(232);
    },
    238: function (t, e, n) {
      var o = n(99)(!1);
      o.push([
        t.i,
        ".option-container[data-v-7f1b8d6a]{height:56px;width:100%;padding:0 18px;border-bottom:1px solid rgba(44,47,59,.1)}.option-container .checkbox[data-v-7f1b8d6a]{height:16px;width:16px;margin:0 7px 0 0;border:2px solid #2c2f3b;border-radius:5px}.option-container .checkbox.active[data-v-7f1b8d6a]{background:#2c2f3b}",
        "",
      ]),
        (t.exports = o);
    },
    248: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(9),
        r =
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
                set: function (t) {
                  this.$store.commit("updateSelectedCombineOption", t);
                },
              },
              isConvertBlackToWhite: {
                get: function () {
                  return this.$store.state.isConvertBlackToWhite;
                },
                set: function (t) {
                  this.$store.commit("updateIsConvertBlackToWhite", t);
                },
              },
              triggerAction: {
                get: function () {
                  return this.$store.state.triggerAction;
                },
                set: function (t) {
                  this.$store.commit("updateTriggerAction", t);
                },
              },
              isProcessing: {
                get: function () {
                  return this.$store.state.isProcessing;
                },
                set: function (t) {
                  this.$store.commit("updateIsProcessing", t);
                },
              },
            },
            mixins: [n(229).a],
            methods: {
              setUpOptions: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var canvas, n, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.delay(1e3);
                          case 2:
                            (canvas = document.getElementById("page-0")) &&
                              ((n = canvas.height),
                              (o = canvas.width),
                              (t.combineOptions =
                                o > n
                                  ? ["2 in 1", "3 in 1", "4 in 1", "5 in 1"]
                                  : ["2 in 1", "3 in 1", "4 in 1"]));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              updateSelectedCombineOption: function (t) {
                this.selectedCombineOption = t;
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
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
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
                        [t._v("\n        Combine Pages\n      ")]
                      ),
                      t._v(" "),
                      t._l(t.combineOptions, function (e, o) {
                        return n(
                          "section",
                          {
                            key: "combine-option-" + o,
                            class: [
                              "flex-row align-items-center cursor-pointer-opacity",
                              {
                                "opacity-medium": e !== t.selectedCombineOption,
                              },
                            ],
                            on: {
                              click: function (n) {
                                return t.updateSelectedCombineOption(e);
                              },
                            },
                          },
                          [
                            n("div", {
                              class: [
                                "checkbox",
                                { active: e === t.selectedCombineOption },
                              ],
                            }),
                            t._v(" "),
                            n(
                              "p",
                              {
                                staticClass:
                                  "font-size-14 color-dark margin-right-8",
                              },
                              [t._v("\n          " + t._s(e) + "\n        ")]
                            ),
                          ]
                        );
                      }),
                    ],
                    2
                  ),
                  t._v(" "),
                  n(
                    "section",
                    {
                      class: [
                        "flex-row align-items-center margin-left-12 cursor-pointer-opacity",
                        { "opacity-medium": !t.isConvertBlackToWhite },
                      ],
                      on: { click: t.toggleConvertBlackToWhite },
                    },
                    [
                      n("div", {
                        class: [
                          "checkbox",
                          { active: t.isConvertBlackToWhite },
                        ],
                      }),
                      t._v(" "),
                      n(
                        "p",
                        {
                          staticClass: "font-size-14 color-dark margin-right-8",
                        },
                        [t._v("\n        Convert Black to White (all)\n      ")]
                      ),
                    ]
                  ),
                ]),
                t._v(" "),
                n(
                  "a",
                  {
                    staticClass:
                      "\n      font-size-14\n      color-dark\n      cursor-pointer-opacity\n      flex-row\n      align-items-center\n    ",
                    on: { click: t.generatePdf },
                  },
                  [
                    t._v("Generate\n    "),
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
      e.default = component.exports;
    },
  },
]);

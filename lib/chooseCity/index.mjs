import { defineComponent as N, ref as c, resolveComponent as t, openBlock as p, createBlock as z, unref as i, isRef as d, withCtx as n, createElementVNode as m, toDisplayString as v, createVNode as l, normalizeClass as D, createElementBlock as f, Fragment as g, renderList as w } from "vue";
const F = { class: "result" }, I = { class: "container" }, L = /* @__PURE__ */ N({
  __name: "index",
  setup(_) {
    let u = c("请选择"), o = c(!1), a = c("按城市"), s = c("");
    const x = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    let V = {
      a: "城市1",
      b: "城市2"
    };
    return (j, r) => {
      const y = t("el-icon-arrowdown"), b = t("el-radio-button"), k = t("el-radio-group"), O = t("el-col"), C = t("el-option"), B = t("el-select"), U = t("el-row"), h = t("el-popover");
      return p(), z(h, {
        placement: "bottom-start",
        visible: i(o),
        "onUpdate:visible": r[2] || (r[2] = (e) => d(o) ? o.value = e : o = e),
        width: 500,
        trigger: "click"
      }, {
        reference: n(() => [
          m("div", F, [
            m("div", null, v(i(u)), 1),
            l(y, {
              class: D({ rotate: i(o) })
            }, null, 8, ["class"])
          ])
        ]),
        default: n(() => [
          m("div", I, [
            l(U, null, {
              default: n(() => [
                l(O, { span: 8 }, {
                  default: n(() => [
                    l(k, {
                      modelValue: i(a),
                      "onUpdate:modelValue": r[0] || (r[0] = (e) => d(a) ? a.value = e : a = e)
                    }, {
                      default: n(() => [
                        l(b, { label: "按城市" }),
                        l(b, { label: "按省份" })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(O, { span: 16 }, {
                  default: n(() => [
                    l(B, {
                      modelValue: i(s),
                      "onUpdate:modelValue": r[1] || (r[1] = (e) => d(s) ? s.value = e : s = e),
                      filterable: "",
                      placeholder: "请选择"
                    }, {
                      default: n(() => [
                        (p(), f(g, null, w(x, (e) => l(C, {
                          key: e.value,
                          label: e.label,
                          value: e.value
                        }, null, 8, ["label", "value"])), 64))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            (p(!0), f(g, null, w(i(V), (e, E) => (p(), f("div", null, v(e) + "-" + v(E), 1))), 256))
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
const R = (_, u) => {
  const o = _.__vccOpts || _;
  for (const [a, s] of u)
    o[a] = s;
  return o;
}, S = /* @__PURE__ */ R(L, [["__scopeId", "data-v-fd34a8a1"]]), A = {
  install(_) {
    _.component("m-choose-city", S);
  }
};
export {
  A as default
};

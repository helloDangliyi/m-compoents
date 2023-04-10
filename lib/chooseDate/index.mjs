import { defineComponent as h, ref as i, watch as m, resolveComponent as D, openBlock as g, createElementBlock as b, Fragment as y, createTextVNode as V, toDisplayString as x, createElementVNode as c, createVNode as _, unref as u } from "vue";
const C = { class: "main" }, T = { class: "letf" }, k = { class: "right" }, P = /* @__PURE__ */ h({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    // 是否禁用今天之前的日期
    disabledToday: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["startDateChange", "endDateChange"],
  setup(t, { emit: d }) {
    const n = t, a = i(null), l = i(null);
    let s = i(!0), f = (e) => {
      if (n.disabledToday)
        return e.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, v = (e) => {
      if (a.value)
        return e.getTime() < a.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return m(() => a.value, (e) => {
      e ? (s.value = !1, d("startDateChange", e)) : (s.value = !0, l.value = null);
    }), m(() => l.value, (e) => {
      e && d("endDateChange", {
        startDate: a.value,
        endDate: e
      });
    }), (e, o) => {
      const p = D("el-date-picker");
      return g(), b(y, null, [
        V(x(e.$attrs) + " ", 1),
        c("div", C, [
          c("div", T, [
            _(p, {
              modelValue: a.value,
              "onUpdate:modelValue": o[0] || (o[0] = (r) => a.value = r),
              type: "date",
              placeholder: t.startPlaceholder,
              "disabled-date": u(f)
            }, null, 8, ["modelValue", "placeholder", "disabled-date"])
          ]),
          c("div", k, [
            _(p, {
              modelValue: l.value,
              "onUpdate:modelValue": o[1] || (o[1] = (r) => l.value = r),
              type: "date",
              placeholder: t.endPlaceholder,
              disabled: u(s),
              "disabled-date": u(v)
            }, null, 8, ["modelValue", "placeholder", "disabled", "disabled-date"])
          ])
        ])
      ], 64);
    };
  }
});
const B = (t, d) => {
  const n = t.__vccOpts || t;
  for (const [a, l] of d)
    n[a] = l;
  return n;
}, N = /* @__PURE__ */ B(P, [["__scopeId", "data-v-dcbf2d65"]]), w = {
  install(t) {
    t.component("m-choose-date", N);
  }
};
export {
  w as default
};

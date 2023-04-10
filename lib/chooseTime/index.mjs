import { defineComponent as f, ref as o, watch as u, resolveComponent as v, openBlock as g, createElementBlock as S, Fragment as h, createTextVNode as T, toDisplayString as y, createElementVNode as i, createVNode as c, mergeProps as p, unref as _ } from "vue";
const V = { class: "main" }, x = { class: "letf" }, C = { class: "right" }, E = /* @__PURE__ */ f({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 开始时间开始的选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    // 开始时间结束的选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    // 结束时间开始的选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    // 结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    // 结束时间结束的选择
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: d }) {
    const a = o(""), n = o("");
    let l = o(!0);
    return u(() => a.value, (t) => {
      t === "" ? (n.value = "", l.value = !0) : (l.value = !1, d("startChange", t));
    }), u(() => n.value, (t) => {
      t !== "" && d("endChange", {
        startTime: a.value,
        endTime: t
      });
    }), (t, s) => {
      const m = v("el-time-select");
      return g(), S(h, null, [
        T(y(t.$attrs) + " ", 1),
        i("div", V, [
          i("div", x, [
            c(m, p({
              modelValue: a.value,
              "onUpdate:modelValue": s[0] || (s[0] = (r) => a.value = r),
              "max-time": n.value,
              class: "mr-4",
              placeholder: e.startPlaceholder,
              start: e.startTimeStart,
              step: e.startStep,
              end: e.startTimeEnd
            }, t.$attrs.startOption), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
          ]),
          i("div", C, [
            c(m, p({
              modelValue: n.value,
              "onUpdate:modelValue": s[1] || (s[1] = (r) => n.value = r),
              "min-time": a.value,
              placeholder: e.endPlaceholder,
              start: e.endTimeStart,
              step: e.endStep,
              end: e.endTimeEnd,
              disabled: _(l)
            }, t.$attrs.endOption), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
          ])
        ])
      ], 64);
    };
  }
});
const b = (e, d) => {
  const a = e.__vccOpts || e;
  for (const [n, l] of d)
    a[n] = l;
  return a;
}, P = /* @__PURE__ */ b(E, [["__scopeId", "data-v-2b6e9294"]]), N = {
  install(e) {
    e.component("m-choose-time", P);
  }
};
export {
  N as default
};

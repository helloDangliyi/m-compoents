import { defineComponent as l, ref as p, onMounted as s, resolveComponent as c, openBlock as i, createElementBlock as m, createVNode as u, mergeProps as f, unref as g } from "vue";
const d = /* @__PURE__ */ l({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      default: 0
    },
    // 进度条是否有动画效果
    isAnimation: {
      type: Boolean,
      default: !1
    },
    // 动画时长（毫秒）
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(n) {
    const e = n;
    let t = p(0);
    return s(() => {
      if (e.isAnimation) {
        let r = Math.ceil(e.time / e.percentage), o = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(o));
        }, r);
      } else
        t.value = e.percentage;
    }), (r, o) => {
      const a = c("el-progress");
      return i(), m("div", null, [
        u(a, f(r.$attrs, { percentage: g(t) }), null, 16, ["percentage"])
      ]);
    };
  }
}), _ = {
  install(n) {
    n.component("m-progress", d);
  }
};
export {
  _ as default
};

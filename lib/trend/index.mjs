import { defineComponent as p, useSlots as f, computed as v, openBlock as o, createElementBlock as d, createElementVNode as a, normalizeStyle as s, unref as l, renderSlot as C, toDisplayString as x, createBlock as u, resolveDynamicComponent as i } from "vue";
const y = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), m = { class: "trend" }, g = { key: 0 }, S = { key: 1 }, _ = { class: "icon" }, w = /* @__PURE__ */ p({
  __name: "index",
  props: {
    // 标记当前趋势是上升(up)还是下降(down)
    type: {
      type: String,
      default: "up"
    },
    // 上升趋势图标
    upIcon: {
      type: String,
      default: "arrowup"
    },
    // 下降趋势图标
    downIcon: {
      type: String,
      default: "arrowup"
    },
    // 趋势显示的文字
    // 1. 父组件传递过来的数据
    // 2.插槽
    text: {
      type: String,
      default: "文字"
    },
    // 上升趋势的图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 颜色反转只在默认的颜色下生效，如果使用了自定义的颜色，这个属性就不生效了
    reverseColor: {
      type: Boolean,
      default: !1
    },
    // 上升趋势的文字颜色
    upTextColor: {
      type: String,
      default: "#000"
    },
    downTextColor: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    const t = e;
    let n = f(), r = v(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (c, h) => (o(), d("div", m, [
      a("div", {
        class: "text",
        style: s({ color: l(r) })
      }, [
        l(n).default ? (o(), d("div", g, [
          C(c.$slots, "default", {}, void 0, !0)
        ])) : (o(), d("div", S, x(e.text), 1))
      ], 4),
      a("div", _, [
        e.type === "up" ? (o(), u(i(`el-icon-${l(y)(e.upIcon)}`), {
          key: 0,
          style: s({ color: e.reverseColor ? "#52c41a" : e.upIconColor })
        }, null, 8, ["style"])) : (o(), u(i(`el-icon-${l(y)(e.downIcon)}`), {
          key: 1,
          style: s({ color: e.reverseColor ? "#f5222d" : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const I = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, c] of t)
    n[r] = c;
  return n;
}, k = /* @__PURE__ */ I(w, [["__scopeId", "data-v-a8554090"]]), T = {
  install(e) {
    e.component("m-trend", k);
  }
};
export {
  T as default
};

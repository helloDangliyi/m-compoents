import { defineComponent as i, resolveComponent as o, openBlock as n, createBlock as l, withCtx as t, createVNode as m, resolveDynamicComponent as u, unref as s, renderSlot as p } from "vue";
const d = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), f = /* @__PURE__ */ i({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: Number,
      default: 0
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (a, v) => {
      const r = o("el-badge"), c = o("el-popover");
      return n(), l(c, {
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        reference: t(() => [
          m(r, {
            style: { cursor: "pointer" },
            value: e.value,
            max: e.max,
            isDot: e.isDot
          }, {
            default: t(() => [
              (n(), l(u(`el-icon-${s(d)(e.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "isDot"])
        ]),
        default: t(() => [
          p(a.$slots, "default")
        ]),
        _: 3
      });
    };
  }
}), g = {
  install(e) {
    e.component("m-notification", f);
  }
};
export {
  g as default
};

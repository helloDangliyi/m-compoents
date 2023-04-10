import { defineComponent as b, ref as d, watch as m, resolveComponent as c, openBlock as g, createElementBlock as B, normalizeClass as O, createVNode as u, mergeProps as h, unref as f, isRef as R, withCtx as t, renderSlot as l } from "vue";
const C = /* @__PURE__ */ b({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    // 只在区域内滚动
    isScroll: {
      type: Boolean,
      default: !1
    },
    // 下面全是处理上传的事件
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onBeforeUpload: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: p }) {
    const i = e;
    let n = d(i.visible);
    m(() => i.visible, (o) => {
      n.value = o;
    }), m(() => n.value, (o) => {
      p("update:visible", o);
    });
    let a = d();
    return (o, s) => {
      const v = c("m-form"), y = c("el-dialog");
      return g(), B("div", {
        class: O({ "m-choose-icon-dialog-body-height": e.isScroll })
      }, [
        u(y, h({
          modelValue: f(n),
          "onUpdate:modelValue": s[0] || (s[0] = (r) => R(n) ? n.value = r : n = r)
        }, o.$attrs, {
          onOnPreview: e.onPreview,
          onOnRemove: e.onRemove,
          onBeforeRemove: e.beforeRemove,
          onOnExceed: e.onExceed,
          onOnSuccess: e.onSuccess,
          onOnChange: e.onChange,
          onBeforeUpload: e.onBeforeUpload
        }), {
          default: t(() => [
            u(v, {
              "label-width": "100px",
              ref_key: "form",
              ref: a,
              options: e.options
            }, {
              uploadArea: t(() => [
                l(o.$slots, "uploadArea")
              ]),
              uploadTip: t(() => [
                l(o.$slots, "uploadTip")
              ]),
              _: 3
            }, 8, ["options"])
          ]),
          footer: t(() => [
            l(o.$slots, "footer", { form: f(a) })
          ]),
          _: 3
        }, 16, ["modelValue", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnExceed", "onOnSuccess", "onOnChange", "onBeforeUpload"])
      ], 2);
    };
  }
}), F = {
  install(e) {
    e.component("m-model-form", C);
  }
};
export {
  F as default
};

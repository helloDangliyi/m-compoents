import { defineComponent as a, openBlock as t, createElementBlock as n, Fragment as i, renderList as p, createElementVNode as l, toDisplayString as r } from "vue";
const c = /* @__PURE__ */ a({
  __name: "index",
  props: {
    // 列表内容
    list: {
      type: Array,
      required: !0
    },
    // 操作内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return console.log("props: ", e.list), (m, y) => (t(!0), n(i, null, p(e.list, (o, u) => (t(), n("div", { key: u }, [
      l("div", null, r(o.title), 1),
      (t(!0), n(i, null, p(o.content, (s) => (t(), n("div", null, [
        l("span", null, r(s.title), 1),
        l("span", null, r(s.desc), 1)
      ]))), 256))
    ]))), 128));
  }
}), x = {
  install(e) {
    e.component("m-list", c);
  }
};
export {
  x as default
};

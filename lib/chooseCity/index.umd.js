(function(e,a){typeof exports=="object"&&typeof module<"u"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(e=typeof globalThis<"u"?globalThis:e||self,e.index=a(e.vue))})(this,function(e){"use strict";const a={class:"result"},p={class:"container"},_=e.defineComponent({__name:"index",setup(i){let s=e.ref("请选择"),t=e.ref(!1),l=e.ref("按城市"),n=e.ref("");const m=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];let b={a:"城市1",b:"城市2"};return(u,r)=>{const x=e.resolveComponent("el-icon-arrowdown"),c=e.resolveComponent("el-radio-button"),C=e.resolveComponent("el-radio-group"),d=e.resolveComponent("el-col"),V=e.resolveComponent("el-option"),w=e.resolveComponent("el-select"),N=e.resolveComponent("el-row"),h=e.resolveComponent("el-popover");return e.openBlock(),e.createBlock(h,{placement:"bottom-start",visible:e.unref(t),"onUpdate:visible":r[2]||(r[2]=o=>e.isRef(t)?t.value=o:t=o),width:500,trigger:"click"},{reference:e.withCtx(()=>[e.createElementVNode("div",a,[e.createElementVNode("div",null,e.toDisplayString(e.unref(s)),1),e.createVNode(x,{class:e.normalizeClass({rotate:e.unref(t)})},null,8,["class"])])]),default:e.withCtx(()=>[e.createElementVNode("div",p,[e.createVNode(N,null,{default:e.withCtx(()=>[e.createVNode(d,{span:8},{default:e.withCtx(()=>[e.createVNode(C,{modelValue:e.unref(l),"onUpdate:modelValue":r[0]||(r[0]=o=>e.isRef(l)?l.value=o:l=o)},{default:e.withCtx(()=>[e.createVNode(c,{label:"按城市"}),e.createVNode(c,{label:"按省份"})]),_:1},8,["modelValue"])]),_:1}),e.createVNode(d,{span:16},{default:e.withCtx(()=>[e.createVNode(w,{modelValue:e.unref(n),"onUpdate:modelValue":r[1]||(r[1]=o=>e.isRef(n)?n.value=o:n=o),filterable:"",placeholder:"请选择"},{default:e.withCtx(()=>[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(m,o=>e.createVNode(V,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(b),(o,k)=>(e.openBlock(),e.createElementBlock("div",null,e.toDisplayString(o)+"-"+e.toDisplayString(k),1))),256))])]),_:1},8,["visible"])}}}),y="",f=((i,s)=>{const t=i.__vccOpts||i;for(const[l,n]of s)t[l]=n;return t})(_,[["__scopeId","data-v-fd34a8a1"]]);return{install(i){i.component("m-choose-city",f)}}});
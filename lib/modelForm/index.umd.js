(function(e,i){typeof exports=="object"&&typeof module<"u"?module.exports=i(require("vue")):typeof define=="function"&&define.amd?define(["vue"],i):(e=typeof globalThis<"u"?globalThis:e||self,e.index=i(e.vue))})(this,function(e){"use strict";const i=e.defineComponent({__name:"index",props:{visible:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},isScroll:{type:Boolean,default:!1},onPreview:{type:Function},onRemove:{type:Function},beforeRemove:{type:Function},onExceed:{type:Function},onSuccess:{type:Function},onChange:{type:Function},onBeforeUpload:{type:Function}},emits:["update:visible"],setup(o,{emit:a}){const l=o;let t=e.ref(l.visible);e.watch(()=>l.visible,n=>{t.value=n}),e.watch(()=>t.value,n=>{a("update:visible",n)});let d=e.ref();return(n,r)=>{const f=e.resolveComponent("m-form"),c=e.resolveComponent("el-dialog");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass({"m-choose-icon-dialog-body-height":o.isScroll})},[e.createVNode(c,e.mergeProps({modelValue:e.unref(t),"onUpdate:modelValue":r[0]||(r[0]=s=>e.isRef(t)?t.value=s:t=s)},n.$attrs,{onOnPreview:o.onPreview,onOnRemove:o.onRemove,onBeforeRemove:o.beforeRemove,onOnExceed:o.onExceed,onOnSuccess:o.onSuccess,onOnChange:o.onChange,onBeforeUpload:o.onBeforeUpload}),{default:e.withCtx(()=>[e.createVNode(f,{"label-width":"100px",ref_key:"form",ref:d,options:o.options},{uploadArea:e.withCtx(()=>[e.renderSlot(n.$slots,"uploadArea")]),uploadTip:e.withCtx(()=>[e.renderSlot(n.$slots,"uploadTip")]),_:3},8,["options"])]),footer:e.withCtx(()=>[e.renderSlot(n.$slots,"footer",{form:e.unref(d)})]),_:3},16,["modelValue","onOnPreview","onOnRemove","onBeforeRemove","onOnExceed","onOnSuccess","onOnChange","onBeforeUpload"])],2)}}});return{install(o){o.component("m-model-form",i)}}});
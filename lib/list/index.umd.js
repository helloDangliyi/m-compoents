(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.index=n(e.vue))})(this,function(e){"use strict";const n=e.defineComponent({__name:"index",props:{list:{type:Array,required:!0},actions:{type:Array,default:()=>[]}},setup(t){return console.log("props: ",t.list),(c,d)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.list,(l,r)=>(e.openBlock(),e.createElementBlock("div",{key:r},[e.createElementVNode("div",null,e.toDisplayString(l.title),1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.content,o=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("span",null,e.toDisplayString(o.title),1),e.createElementVNode("span",null,e.toDisplayString(o.desc),1)]))),256))]))),128))}});return{install(t){t.component("m-list",n)}}});
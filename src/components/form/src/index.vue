<template>
  <el-form  v-if="model" v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false">
    <template v-for="(item,index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label" >
        <component v-if="item.type !== 'upload'" :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]"></component>
        <el-upload 
        v-else 
        v-bind="item.uploadAttrs"
        :on-preview="onPreview"
        :on-remove="onRemove"
        :on-success="onSuccess"
        :on-error="onError"
        :on-progress="onProgress"
        :on-change="onChange"
        :on-exceed="onExceed"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        :http-request="httpRequest"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>

      <el-form-item v-else :prop="item.prop" :label="item.label" >
        <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]">
          <component 
          v-for="(child,i) in item.children" 
          :key="i" 
          :is="`el-${child.type}`"
          :label="child.label"
          :value="child.value"
          ></component>
        </component>
      </el-form-item>

    </template>
  </el-form>
</template>

<script lang='ts' setup>
import {PropType,ref,onMounted,watch} from "vue"
import { FormOptions } from "./type";
import { cloneDeep } from "lodash";

let emits = defineEmits(['on-preview','on-remove','on-success','on-error','on-progress','on-change','on-exceed','before-upload','before-remove'])

let props = defineProps({
  options:{
    type: Array as PropType<FormOptions[]>
  },
  // 用户自定义上传的方法
  httpRequest:{
    type:Function,
  }
})

let model = ref<any>(null)
let rules = ref<any>(null)

let initForm = () => {
  if(props.options && props.options.length) {
    let m :any = {}
    let r: any = {}
    props.options?.map((item:FormOptions) =>{
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })

    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}



// 上传组件的所有方法
let onPreview = (file:any) => {
  emits('on-preview',file)
}
let onRemove = (file:any,fileList:any) => {
  emits('on-remove',{ file,fileList})
}
let onSuccess = (response: any,file:any,fileList:any) => {
  console.log('success');
  emits('on-success',{ response,file,fileList})
}
let onError = (err:any,file:any,fileList:any) => {
  emits('on-error',{ err,file,fileList})
}
let onProgress = (evt:any,file:any,fileList:any) => {
  emits('on-progress',{ evt,file,fileList})
}
let onChange = (file:any,fileList:any) => {
  emits('on-change',{ file,fileList})
}
let onExceed = (files:any,fileList:any) => {
  emits('on-exceed',{ files,fileList})
}
let beforeUpload = (file:any) => {
  emits('before-upload', file)
}
let beforeRemove = (file:any,fileList:any) => {
  emits('before-remove',{ file,fileList})
}

watch(()=>props.options,val => {
  initForm()
},{ deep: true})

onMounted(()=>{
  initForm()
})
</script>

<style lang="scss" scoped></style>

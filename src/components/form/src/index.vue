<template>
  <el-form ref="form"  v-if="model" v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false">
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
    <el-form-item>
      <!-- 作用域插槽：可以把实例分发出去 -->
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>

  </el-form>

</template>

<script lang='ts' setup>
import {PropType,ref,onMounted,watch,nextTick} from "vue"
import { FormOptions } from "./type";
import { cloneDeep } from "lodash";
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;

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
let form = ref<FormInstance | null>(null)

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
let onPreview = (file:File) => {
  emits('on-preview',file)
}
let onRemove = (file:File,fileList:FileList) => {
  emits('on-remove',{ file,fileList})
}
let onSuccess = (response: any,file:File,fileList:FileList) => {
  // 上传图片成功，给表单上传项赋值
  let uploadItem = props.options?.find(item =>item.type === 'upload')
  model.value[uploadItem?.prop!] = { response,file,fileList}
  console.log('success');
  emits('on-success',{ response,file,fileList})
}
let onError = (err:any,file:File,fileList:FileList) => {
  emits('on-error',{ err,file,fileList})
}
let onProgress = (evt:any,file:File,fileList:FileList) => {
  emits('on-progress',{ evt,file,fileList})
}
let onChange = (file:File,fileList:FileList) => {
  emits('on-change',{ file,fileList})
}
let onExceed = (files:any,fileList:FileList) => {
  emits('on-exceed',{ files,fileList})
}
let beforeUpload = (file:File) => {
  emits('before-upload', file)
}
let beforeRemove = (file:File,fileList:FileList) => {
  emits('before-remove',{ file,fileList})
}

watch(()=>props.options,val => {
  initForm()
},{ deep: true})

onMounted(()=>{
  initForm()
})

// 重写表单重置方法
const resetFields = () =>{
  //加 nextTick=> 弹框初始化的时候 editorRef.value拿不到的bug
  nextTick(() => {
    form.value!.resetFields()
  })
}

defineExpose({
  resetFields
})


</script>

<style lang="scss" scoped></style>

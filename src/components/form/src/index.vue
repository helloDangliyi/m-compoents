<template>
  <el-form ref="form" v-if="model" v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">

        <el-upload v-if="item.type == 'upload'" v-bind="item.uploadAttrs" :on-preview="onPreview" :on-remove="onRemove"
          :on-success="onSuccess" :on-error="onError" :on-progress="onProgress" :on-change="onChange"
          :on-exceed="onExceed" :before-upload="beforeUpload" :before-remove="beforeRemove" :http-request="httpRequest">
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>

        <div v-else-if="item.type == 'editor'">
          <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
            mode="default" />
          <Editor style="height: 400px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
            mode="default" @onCreated="handleCreated" @onChange="handleChange" />
        </div>

        <component v-else :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]"></component>
      </el-form-item>

      <el-form-item v-else :prop="item.prop" :label="item.label">
        <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]">
          <component v-for="(child, i) in item.children" :key="i" :is="`el-${child.type}`" :label="child.label"
            :value="child.value"></component>
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
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { PropType, ref, onMounted, watch, nextTick,shallowRef } from "vue"
import { FormOptions } from "./types/type";
import { cloneDeep } from "lodash";
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;


let emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove'])

let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>
  },
  // 用户自定义上传的方法
  httpRequest: {
    type: Function,
  }
})

let model = ref<any>(null)
let rules = ref<any>(null)
let form = ref<FormInstance | null>(null)
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入描述...' }

const handleCreated = (editor:any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// 表单校验
let validate = () =>{
  return form.value!.validate
}

// 获取表单数据
let getFormData = () =>{
  return model.value
}

const handleChange = (editor:any)=>{

  if (props.options && props.options.length) {
  props.options?.map((item: FormOptions) => {
      if(item.type === 'editor'){
        model.value[item.prop!] =  valueHtml.value
      }
    })
  }
}

let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options?.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules

      if(item.type === 'editor'){
        valueHtml.value = item.value
      }
    })

    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}



// 上传组件的所有方法
let onPreview = (file: File) => {
  emits('on-preview', file)
}
let onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList })
}
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传图片成功，给表单上传项赋值
  let uploadItem = props.options?.find(item => item.type === 'upload')
  model.value[uploadItem?.prop!] = { response, file, fileList }
  console.log('success');
  emits('on-success', { response, file, fileList })
}
let onError = (err: any, file: File, fileList: FileList) => {
  emits('on-error', { err, file, fileList })
}
let onProgress = (evt: any, file: File, fileList: FileList) => {
  emits('on-progress', { evt, file, fileList })
}
let onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })
}
let onExceed = (files: any, fileList: FileList) => {
  emits('on-exceed', { files, fileList })
}
let beforeUpload = (file: File) => {
  emits('before-upload', file)
}
let beforeRemove = (file: File, fileList: FileList) => {
  emits('before-remove', { file, fileList })
}

watch(() => props.options, val => {
  initForm()
}, { deep: true })

onMounted(() => {
  initForm()
})

// 重写表单重置方法
const resetFields = () => {
  //加 nextTick=> 弹框初始化的时候 editorRef.value拿不到的bug
  nextTick(() => {
    // 重置表单
    form.value!.resetFields()

    if (props.options && props.options.length) {
      const editorItem = props.options.find(c => c.type === 'editor')!
      valueHtml.value = editorItem.value
    }
  })
}

defineExpose({
  resetFields,
  validate,
  getFormData
})


</script>

<style lang="scss" scoped></style>

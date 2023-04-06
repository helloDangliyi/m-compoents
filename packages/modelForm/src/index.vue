<template>
<div :class="{'m-choose-icon-dialog-body-height':isScroll}">
  <el-dialog
  v-model="dialogVisible"
  v-bind="$attrs"
  @on-preview="onPreview" 
  @on-remove="onRemove"
  @before-remove="beforeRemove" 
  @on-exceed="onExceed" 
  @on-success="onSuccess" 
  @on-change="onChange"
  @before-upload="onBeforeUpload"
  >
  <template #default>
    <m-form label-width="100px" ref="form" :options="options">
      <template #uploadArea>
        <slot name="uploadArea"></slot>
      </template>
      <template #uploadTip>
        <slot name = "uploadTip"></slot>
      </template>
    </m-form>
  </template>

  <template #footer>
    <slot name="footer" :form="form"></slot>
  </template>

  </el-dialog>
</div>
</template>

<script lang='ts' setup>
import {ref,watch} from "vue"
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;

let emits = defineEmits(['update:visible'])

let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: ()=>[]
  },
  // 只在区域内滚动
  isScroll:{
    type: Boolean,
    default: false
  },
  // 下面全是处理上传的事件
  onPreview:{
    type: Function
  },
  onRemove:{
    type: Function
  },
  beforeRemove:{
    type: Function
  },
  onExceed:{
    type: Function
  },
  onSuccess:{
    type: Function
  },
  onChange:{
    type: Function
  },
  onBeforeUpload:{
    type: Function
  },
})

let dialogVisible = ref<boolean>(props.visible)

watch(()=> props.visible,val => {
  dialogVisible.value = val

})

watch(()=> dialogVisible.value,val => {
  emits('update:visible',val)
})

// 表单实例
let form = ref<FormInstance | null>()

</script>

<style lang="scss" scoped>

</style>

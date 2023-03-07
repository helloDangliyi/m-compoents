<template>
  {{ $attrs }}
  <div class="main">
    <div class="letf">
    <el-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      :placeholder="startPlaceholder"
      :start="startTimeStart"
      :step="startStep"
      :end="startTimeEnd"
      v-bind="$attrs.startOption"
    />
  </div>
  <div class="right"> 
    <el-time-select
      v-model="endTime"
      :min-time="startTime"
      :placeholder="endPlaceholder"
      :start="endTimeStart"
      :step="endStep"
      :end="endTimeEnd"
      :disabled="endTimeDisabled"
      v-bind="$attrs.endOption"
    />
  </div>
  </div>
  
    
</template>

<script lang='ts' setup>
import { ref,watch } from 'vue'

let props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间开始的选择
  startTimeStart :{
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '00:30'
  },
  // 开始时间结束的选择
  startTimeEnd :{
    type: String,
    default: '24:00'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间开始的选择
  endTimeStart :{
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '00:30'
  },
  // 结束时间结束的选择
  endTimeEnd :{
    type: String,
    default: '24:00'
  },
})



const startTime = ref<string>('')
const endTime = ref<string>('')

let endTimeDisabled = ref<Boolean>(true)

let emit = defineEmits(['startChange','endChange'])

watch(()=> startTime.value,val => {
  if(val === '') {
    endTime.value = ''
    endTimeDisabled.value = true
  }else {
    endTimeDisabled.value = false
    emit('startChange',val)
  }

})

watch(()=> endTime.value,val => {
  if(val !== '') {
    emit('endChange',{
      startTime: startTime.value,
      endTime: val
    })
  }

})

</script>

<style lang="scss" scoped>
.main{
  display: flex;
  justify-content: flex-start;
  .letf{
    margin-right: 20px;
  }
}

</style>

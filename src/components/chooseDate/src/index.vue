<template>
  {{ $attrs }}

  <div class="main">
    <div class="letf">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabled"
      />
    </div>
  <div class="right"> 
    <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisabled"
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
    default: '请选择开始日期'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用今天之前的日期
  disabledToday: {
    type: Boolean,
    default: false
  }
})


// 开始日期
const startDate = ref<Date | null>(null)
// 结束日期
const endDate = ref<Date | null>(null)

// 控制结束日期的禁用状态
let endDateDisabled = ref<Boolean>(true)

let emit = defineEmits(['startDateChange','endDateChange'])
// 禁用开始日期的函数
let startDisabled = (time: Date)=> {
  // console.log('time: ', time.getTime()); 13位，毫秒数
  // console.log(Date.now()); 当前日期的毫秒数
  if( props.disabledToday) {
    return time.getTime()< Date.now() - 1000*60*60*24
  }
  
}

// 禁用结束日期的函数
let endDisabled = (time: Date)=> {
  if(startDate.value) {
    return time.getTime()<startDate.value.getTime() + 1000*60*60*24
  }
}

watch(()=> startDate.value,val => {
  if(!val) {
    endDateDisabled.value = true
    endDate.value = null
  }else {
    endDateDisabled.value = false
    emit('startDateChange',val)
  }
})

watch(()=> endDate.value,val => {
  if(val) {
    emit('endDateChange',{
      startDate:startDate.value,
      endDate: val
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

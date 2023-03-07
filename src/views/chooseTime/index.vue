<template>
  <div>
    <m-choose-time @startChange="startChange" @endChange="endChange" :startOption="startOption" :endOption="endOption"></m-choose-time>
    <br>
    <br>
    <br>
    <m-choose-date :disabledToday="true" @startDateChange="startDateChange" @endDateChange="endDateChange"></m-choose-date>
  </div>
</template>

<script lang='ts' setup>
import {} from "vue"
interface endValue {
  startTime: string,
  endTime: string
}
let startChange= (val: string)=> {
  console.log('val: ', val);

}
let endChange= (val: endValue)=> {
  console.log('val: ', val);
}

let startOption = {
  size :'small',
  clearable: false
}

let endOption = {

}


// 日期

interface endDateValue {
  startDate: string,
  endDate: string
}

let startDateChange = (val: string)=> {
  console.log('val: ', val);

}
let endDateChange = (val: endDateValue)=> {
  console.log('val: ', val);
}
</script>

<style lang="scss" scoped></style>

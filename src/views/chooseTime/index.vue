<template>
  <div>
    <m-choose-time @startChange="startChange" @endChange="endChange" :startOption="startOption" :endOption="endOption"></m-choose-time>
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
</script>

<style lang="scss" scoped></style>

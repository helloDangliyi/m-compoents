<script lang='ts' setup>
import {useTimerleft} from '../../hooks/useTimeLeft/index.js'

const props = defineProps({
  timerCount:{
    type:Number,
    default:10
  }
})

const { timeText,beginTimer,isBegin} = useTimerleft(props.timerCount)
</script>

<template>
  <el-button @click="beginTimer" :disable="isBegin">{{ timeText }}</el-button>
</template>

<style lang="scss" scoped></style>

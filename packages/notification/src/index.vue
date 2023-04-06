<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <template #reference>
      <el-badge style="cursor: pointer" :value="value" :max="max" :isDot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>

    <template #default>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script lang='ts' setup>
import { } from "vue"
import { toLine } from "../../utils";

let props = defineProps({
  icon: {
    type: String,
    default: 'Bell'
  },
  value: {
    type: [Number, String],
    default: ''
  },
  max: {
    type: Number,
    default: 0
  },
  isDot: {
    type: Boolean,
    default: false
  },

})
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <mChooseIcon v-model:visible="visible" title="选择图标">选择图标</mChooseIcon>
  </div>
</template>

<script lang='ts' setup>
import {ref} from "vue"
import mChooseIcon from '../../components/chooseIcon/src/index.vue'

let visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>

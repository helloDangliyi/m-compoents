<template>
  <div>
    <m-choose-icon v-model:visible="visible" title="选择图标">选择图标</m-choose-icon>
  </div>
</template>

<script lang='ts' setup>
import {ref} from "vue"
// import mChooseIcon from '../../components/chooseIcon/src/index.vue'

let visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>

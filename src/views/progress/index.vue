<template>
  <div>
    <m-progress :percentage="60" isAnimation></m-progress>
    <m-progress :percentage="60" type="circle" isAnimation></m-progress>
    <m-progress :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning" isAnimation></m-progress>
  </div>
</template>

<script lang='ts' setup>
import {} from "vue"
</script>

<style lang="scss" scoped></style>

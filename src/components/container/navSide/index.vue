<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon-menu />
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <template #title>趋势标记</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

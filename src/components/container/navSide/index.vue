<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <!-- <component :is="oreo"></component> -->
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <!-- <component :is="pudding"></component> -->
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="3">
      <!-- <component :is="radish"></component> -->
      <template #title>趋势标记</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
import oreo from '../../../assets/menu/oreo.svg'
import pudding from '../../../assets/menu/pudding.svg'
import radish from '../../../assets/menu/radish.svg'
let props = defineProps<{
  collapse: boolean
}>()

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

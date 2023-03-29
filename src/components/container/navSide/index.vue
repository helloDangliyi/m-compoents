<template>
  <!-- <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <component :is="oreo"></component>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <component :is="pudding"></component>
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="3">
      <component :is="radish"></component>
      <template #title>趋势标记</template>
    </el-menu-item>
  </el-menu> -->

  <m-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></m-menu>
</template>

<script lang='ts' setup>
import oreo from '../../../assets/menu/oreo.svg'
import pudding from '../../../assets/menu/pudding.svg'
import radish from '../../../assets/menu/radish.svg'
let props = defineProps<{
  collapse: boolean
}>()

let data=[
  {
    icon:'HomeFilled',
    name:'首页',
    index:'/'
  },
  {
    icon:'Check',
    name:'图标选择器',
    index:'/chooseIcon'
  },
  {
    icon:'Location',
    name:'省市区选择',
    index:'/chooseArea'
  },
  {
    icon:'Sort',
    name:'趋势标记',
    index:'/trend'
  },
  {
    icon:'Timer',
    name:'时间选择',
    index:'/chooseTime'
  },
  {
    icon:'Bell',
    name:'通知菜单',
    index:'/notification'
  },
  {
    icon:'Menu',
    name:'导航菜单',
    index:'/menu'
  },
  {
    icon:'TurnOff',
    name:'城市选择',
    index:'/chooseCity'
  },
  {
    icon:'SetUp',
    name:'进度条',
    index:'/progress'
  },
  
  {
    icon:'Memo',
    name:'表单',
    index:'/form'
  },
  {
    icon:'Memo',
    name:'表格',
    index:'/table'
  },
  {
    icon:'Memo',
    name:'日历',
    index:'/calendar'
  },
]

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

<template>
  <!-- v-bind="$attrs":接收父组件传递的数据，并且没有在props接收，则剩余的属性会作用在指定的标签上 -->
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item,i) in data" :key="i">
      <!-- 有子菜单 -->
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      
      <!-- 没有子菜单 -->
      <el-sub-menu v-else :index="item[index]">
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
            <span>{{ item[name] }}</span>
          </template>
        <el-menu-item v-for="(item1,index1) in item[children]" :key="index1" :index="item1[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang='ts' setup>
import {PropType} from "vue"
import { toLine } from "../../../utils";
// import { MenuItem } from "./type";

let props = defineProps({
  data:{
    // type: Array as PropType<MenuItem []>,
    // 改为any是为了解决这个item[children]的报错
    type: Array as PropType<any []>,
    require: true
  },
  // 默认选中的菜单
  defaultActive:{
    type:String,
    default:''
  },
  // 是否是路由模式
  router:{
    type:Boolean,
    default: false
  },
  // 键名,为了防止传入的路由数组名称 不一样.item[name]访问时，name是一个变量，可以自定义
  // 菜单标题的键名
  name:{
    type: String,
    default: 'name'
  },
  // 菜单索引的键名
  index:{
    type: String,
    default: 'index'
  },
  // 菜单图标标题的键名
  icon:{
    type: String,
    default: 'icon'
  },
  // 子菜单的键名
  children:{
    type: String,
    default: 'children'
  }
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
}
</style>

<template>
  <!-- v-bind="$attrs":接收父组件传递的数据，并且没有在props接收，则剩余的属性会作用在指定的标签上 -->
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item,index) in data" :key="index">
      <!-- 有子菜单 -->
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
        <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      
      <!-- 没有子菜单 -->
      <el-sub-menu v-else :index="item.index">
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
            <span>{{ item.name }}</span>
          </template>
        <el-menu-item v-for="(item1,index1) in item.children" :key="index1" :index="item1.index">
        <component v-if="item1.icon" :is="`el-icon-${toLine(item1.icon)}`"></component>
        <span>{{ item1.name }}</span>
      </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang='ts' setup>
import {PropType} from "vue"
import { toLine } from "../../../utils";
import { MenuItem } from "./type";

let props = defineProps({
  data:{
    type: Array as PropType<MenuItem []>,
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
  }
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
}
</style>

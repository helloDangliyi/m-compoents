<template>
  <div class="trend">

    <div class="text" :style="{color:textColor}">
      <div v-if="slots.default">
        <slot></slot>
      </div>
      <div v-else>{{ text }}</div>
      
    </div>
    <div class="icon">
      <!-- <el-icon-arrowup :style="{color: !reverseColor ? upIconColor:'#52c41a'}" v-if="type === 'up'"></el-icon-arrowup>
      <el-icon-arrowdown :style="{color: !reverseColor ? downIconColor:'#f5222d'}" v-else></el-icon-arrowdown> -->

      <component :is="`el-icon-${toLine(upIcon)}`" v-if="type === 'up'" :style="{color: !reverseColor ? upIconColor:'#52c41a'}"></component>
      <component :is="`el-icon-${toLine(downIcon)}`" v-else :style="{color: !reverseColor ? downIconColor:'#f5222d'}"></component>
    </div>

  </div>
</template>

<script lang='ts' setup>
import { useSlots,computed} from "vue"
import { toLine } from "../../utils";

let props = defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  type:{
    type: String,
    default:'up'
  },
  // 上升趋势图标
  upIcon:{
    type: String,
    default:'arrowup'
  },
  // 下降趋势图标
  downIcon:{
    type: String,
    default:'arrowup'
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2.插槽
  text :{
    type: String,
    default: '文字'
  },
  // 上升趋势的图标颜色
  upIconColor:{
    type: String,
    default: '#f5222d'
  },
  downIconColor: {
    type: String,
    default:'#52c41a'
  },
  // 颜色反转只在默认的颜色下生效，如果使用了自定义的颜色，这个属性就不生效了
  reverseColor:{
    type: Boolean,
    default: false
  },
  // 上升趋势的文字颜色
  upTextColor:{
    type: String,
    default: '#000'
  },
  downTextColor: {
    type: String,
    default:'#000'
  },
})

let slots =useSlots()
// console.log('slots: ', slots);

let textColor = computed(()=> {
  return props.type === 'up' ? props.upTextColor: props.downTextColor
})
</script>

<style lang="scss" scoped>
.trend{
  display: flex;
  align-items: center;
  .text{
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    .svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>

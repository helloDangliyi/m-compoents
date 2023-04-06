<template>
  <div v-for="(item,index) in list" :key="index">
    <div>{{ item.title }}</div>
    <div v-for="item2 in item.content">
    <span>{{ item2.title }}</span>
    <span>{{ item2.desc }}</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {PropType} from "vue"
import { ActionOptions, ListOptions } from "./type";

// PropType
// 1、用一句简单的话来说，就是为了类型推论，让我们在使用属性的时候获取更丰富的类型提示，
// 比如在这里我们定义了一个属性 list，使用 vue 默认的 Array，只能确定它是一个数组类型，
// 不能确定数组里面的每一项到底是什么样子的。你在 setup 中，看 props.list 就是一个any数组，
// 但是如果使用PropType <ListOptions[]> 这个时候，props.list 就变成一个 ListOptions 的数组，
// 你使用它的时候不论在 ts 中还是模版中都能获得类型的推断和自动补全等等。
// 2、属性校验

// 举例：number类型的数组
// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];

let props = defineProps({
  // 列表内容
  list : {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

console.log('props: ', props.list);

</script>

<style lang="scss" scoped></style>

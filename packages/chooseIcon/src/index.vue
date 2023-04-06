<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog v-model="dialogVisible" :title="title" :height="'700px'">
        <!-- <el-scrollbar height="100%"> -->
            <div class="container">
            <div @click="clickItem(item)" class="item" v-for="(item,index) in Object.keys(ElIcons)" :key="index">
                <div class="text">
                    <!-- is是可以在页面上生成对应的标签 -->
                    <component :is="`el-icon-${toLine(item)}`"></component>
                </div>
                <div class="icon">{{ item }}</div>
            </div>
        </div>
        <!-- </el-scrollbar> -->
        
    </el-dialog>
  </div>
</template>

<script lang='ts' setup name="MChooseArea">
import { watch,ref } from "vue"
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from "../../utils";
import { useCopy } from "../../hooks/useCopy";

// 在ts中的写法
let props = defineProps<{
    // 弹出框标题
    title: string,
    // 弹出框的显示与隐藏
    visible: boolean
}>()

let emits = defineEmits(['update:visible'])

// 拷贝一份父组件传递过来的visible:因为vue是单向数据流，不能直接修改父组件的数据，需要拷贝一份
let dialogVisible = ref <boolean>(props.visible)

// 点击按钮显示弹出框
let handleClick = ()=>{
    emits('update:visible', !props.visible)
}

// 点击图标
let clickItem = (item: string) => {
    let text = `<el-icon-${toLine(item)} />`
    useCopy(text)
    dialogVisible.value = false
}

watch(() => props.visible, val => {
    dialogVisible.value = val
})

watch(() => dialogVisible.value, val => {
    emits('update:visible', val)
})

</script>

<style lang="scss" scoped>
.container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item{
        margin-bottom: 20px;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 70px;
    }
    .text{
        font-size: 14px;
    }
    .icon{
        flex: 1;
    }
}
svg{
    width: 2em;
    height: 2em;
}
</style>

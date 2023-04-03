<template>
  <el-table :data="data" v-loading="isLoading"
  :element-loading-text="elementLoadingText"
  :element-loading-spinner="elementLoadingSpinner"
  :element-loading-background="elementLoadingBackground"
  :element-loading-svg="elementLoadingSvg"
  :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="(item,index) in tableOptions" :key="index">
      <el-table-column  :prop="item.prop" :label="item.label" :width="item.width">
        <template  #default="scope">
          <template v-if="scope.$index+scope.column.id === currentEidt">
            <el-row>
              <el-col :span="13">
                <el-input v-model="scope.row[item.prop]"></el-input>
              </el-col>
              <el-col :span="11">
                <div @click="clickEditCell">
                  <slot name="editCell" v-if="$slots.editCell" :scope="scope"></slot>
                  <div class="icons" v-else>
                    <el-icon-check color="green" class="check" @click="clickCheck(scope)"/>
                    <el-icon-close color="red" class="close" @click="clickClose(scope)"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </template>
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop] }}</span>
            <component :is="`el-icon-${toLine(editIcon)}`" @click="clickEdit(scope)" class="edit" v-if="item.editTable"></component>
          </template>
        </template>
      </el-table-column>
      
    </template>
    <el-table-column
    :label="actionOptions!.label"
    :align="actionOptions!.align"
    :width="actionOptions!.width"
    >
    <template #default="scope">
      <slot name="action" :scope="scope"></slot>
    </template>
    </el-table-column>
  </el-table>
</template>

<script lang='ts' setup>
import { PropType,computed,ref } from "vue"
import { TableOptions } from "./types/type";
import { toLine } from "../../../utils";

let props = defineProps({
  options:{
    type: Array as PropType<TableOptions []>,
    require: true
  },
  //表格数据
  data:{
    type: Array as PropType<any []>,
    require: true
  },
  // 加载文案
  elementLoadingText:{
    type:String
  },
  // 加载图标名
  elementLoadingSpinner:{
    type:String
  },
  // 加载背景色
  elementLoadingBackground:{
    type:String
  },
  // 加载SVG
  elementLoadingSvg:{
    type:String
  },
  // 加载SVG的配置
  elementLoadingSvgViewBox:{
    type:String
  },
  // 可编辑单元格显示的图标
  editIcon:{
    type: String,
    default:'edit'
  }
})

let emits = defineEmits(['comfirm','cancel'])
// 当前点击的单元格
let currentEidt = ref<string>('')

// 过滤操作选项之后的配置
let tableOptions = computed(()=> props.options?.filter(item=> !item.action))

// 找出操作项的配置
let actionOptions = computed(()=> props.options?.find(item=> item.action))

// 表格是否在加载中
let isLoading = computed(()=>!props.data || !props.data.length)

let clickEdit = (scope:any)=>{
  currentEidt.value = scope.$index + scope.column.id
}

// 点击勾
let clickCheck = (scope:any) =>{
  emits('comfirm',scope)
}

// 点击×
let clickClose = (scope:any) =>{
  emits('cancel',scope)
}
let clickEditCell= ()=>{
  currentEidt.value = ''
}
</script>

<style lang="scss" scoped>
.edit{
  width: 1em;
  height: 1em;
  cursor: pointer;
  margin-left:4px;
}
.icons {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
}
</style>

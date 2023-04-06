<template>
  <el-table
  v-bind="$attrs"
  :data="tableData" 
  v-loading="isLoading"
  :element-loading-text="elementLoadingText"
  :element-loading-spinner="elementLoadingSpinner"
  :element-loading-background="elementLoadingBackground"
  :element-loading-svg="elementLoadingSvg"
  :element-loading-svg-view-box="elementLoadingSvgViewBox"
  @row-click="rowClick"
  >
    <template v-for="(item,index) in tableOptions" :key="index">
      <el-table-column  :prop="item.prop" :label="item.label" :width="item.width">
        <template  #default="scope">
          <template v-if="scope.row.rowEidt">
          <el-input v-model="scope.row[item.prop]"></el-input>
          </template>
          <template v-else>
            <template v-if="scope.$index+scope.column.id === currentEidt">
            <el-row>
              <el-col :span="13">
                <el-input v-model="scope.row[item.prop]"></el-input>
              </el-col>
              <el-col :span="11">
                <div @click.stop="clickEditCell">
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
            <component :is="`el-icon-${toLine(editIcon)}`" @click.stop="clickEdit(scope)" class="edit" v-if="item.editTable"></component>
          </template>
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

      <slot name="editRow" v-if="scope.row.rowEidt" :scope="scope"></slot>
      <slot name="action" :scope="scope" v-else></slot>
    </template>
    </el-table-column>
  </el-table>
</template>

<script lang='ts' setup>
import { PropType,computed,ref,reactive,onMounted,watch } from "vue"
import { TableOptions } from "./types/type";
import { toLine } from "../../utils";
// import cloneDeep from 'lodash'
import cloneDeep from 'lodash/cloneDeep'
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
  },
  // 是否可以编辑行
  isEditRow:{
    type: Boolean,
    default: false
  },
  // 编辑行按钮的标识
  editRowIndex:{
    type: String,
    default: ''
  },
})

let emits = defineEmits(['comfirm','cancel','update:editRowIndex'])
// 当前点击的单元格
let currentEidt = ref<string>('')

// 拷贝一份表格的数据
let tableData = ref<any []>(cloneDeep(props.data))

// 拷贝一份按钮的标识
let cloneEditRowIndex = ref<string>(props.editRowIndex)

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

let rowClick = (row:any,column:any)=>{
  // 判断点击的是否是操作项的内容
  if(column.label === actionOptions.value?.label){
    // 编辑行的操作
    if(props.isEditRow && cloneEditRowIndex.value === props.editRowIndex){
      // 点击的按钮可以做编辑的操作
      row.rowEidt = !row.rowEidt
      // 重置其他数据的isEditRow
      tableData.value.map(item=>{
        if(item !== row) {
          item.rowEidt = false
        }
      })

      // 要重置按钮的标识
      if(!row.rowEidt ){
        emits('update:editRowIndex','')
      }
    }
  }
}

watch(()=>props.data,val =>{
  tableData.value = cloneDeep(val)
  tableData.value.map(item=>{
    // 代表当前是否是可以编辑的状态
    item.rowEidt = false 
  })
},{ deep: true})

// 监听父组件传递过来的标识
watch(()=>props.editRowIndex,val =>{
  if(val) cloneEditRowIndex.value = val
})

onMounted(()=>{

  tableData.value.map(item=>{
    // 代表当前是否是可以编辑的状态
    item.rowEidt = false
  })
})
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

<template>
  <m-table 
  :data="tableData" 
  :options="options"
  elementLoadingText="加载中..."
  elementLoadingBackground="rgba(0,0,0,.8)"
  :elementLoadingSvg="svg"
  elementLoadingSvgViewBox="-10, -10, 50, 50"
  @comfirm="clickCheck"
  @cancel="clickClose"
  editIcon="tools"
  >
    <template #date="{scope}">
      <el-icon-timer />
      {{ scope.row.date }}
    </template>
    <template #name="{scope}">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
    </template>
    <template #address="{scope}">
      {{ scope.row.address }}
    </template>
    
   
  <template #action="{scope}">
    <el-button type="primary" @click="onEdit(scope)">编辑</el-button>
    <el-button type="danger" @click="onDelete(scope)">删除</el-button>
  </template>

  <!-- <template #editCell="{scope}">
    <div style="display: flex;align-items: center;justify-content: center;height:100%">
      <el-button type="primary" size="small" @click="clickCheck(scope)">确认</el-button>
      <el-button type="danger" size="small" @click="clickClose(scope)">取消</el-button>
    </div>
  </template> -->
  </m-table>
</template>

<script lang='ts' setup>
import {ref} from "vue"
import { TableOptions } from "../../components/table/src/types/type";

interface TableData {
  date: string,
  name: string,
  address: string,
}

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

let tableData = ref<TableData []>([])

setTimeout(()=>{
   tableData.value = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
},100)



let options: TableOptions [] = [
  {
    label:'日期',
    prop:'date',
    align:'center',
    // slot:'date',
    editTable:true
  },
  {
    label:'姓名',
    prop:'name',
    align:'center'
    ,
    slot:'name'
  },
  {
    label:'地址',
    prop:'address',
    align:'center',
    slot:'address',
    editTable:true
  },
  {
    label:'操作',
    action:true,
    align:'center'
  },
]

let onEdit = (row :any)=>{
  console.log('row: ', row);

}
let onDelete = (row :any)=>{
  console.log('row: ', row);

}

let clickCheck = (value:any) =>{
  console.log('clickCheckvalue: ', value);
}

let clickClose = (value:any) =>{
  console.log('clickClosevalue: ', value);
}
</script>

<style lang="scss" scoped>
svg{
  width: 1em;
  height: 1em;
}
</style>

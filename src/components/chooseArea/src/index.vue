<template>
  <div>
    <el-select clearable v-model="provice" placeholder="请选择省份">
    <el-option
      v-for="item in allArea"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </el-select>
  <el-select clearable :disabled="!provice" style="margin: 0 20px;" v-model="city" placeholder="请选择城市">
    <el-option
      v-for="item in selectCity"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </el-select>
  <el-select clearable :disabled="!provice || !city" v-model="area" placeholder="请选择区域">
    <el-option
      v-for="item in selectArea"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </el-select>
  </div>
</template>

<script lang='ts' setup name="MChooseArea">
import { ref,watch,reactive } from "vue"
import allAreas from '../lib/pca-code.json'

// 接口特性之一：属性接口，专门用来约束对象中的每一个属性
export interface AreaItem{
  name:string,
  code :string,
  // ? 代表属性是可选的
  children?: AreaItem[]
}

export interface Data{
  name:string,
  code: string
}

let provice = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')

let allArea = ref(allAreas)
let selectCity = ref<AreaItem[]>([])
let selectArea = ref<AreaItem[]>([])


let emits = defineEmits(['getData'])

watch(()=>provice.value,(val)=>{
  if(val){
    // ! 代表前一个一定是有值的
    let citiesArr =  allArea.value.find(item => item.code === provice.value)!.children
    selectCity.value = citiesArr
  }
  city.value = ''
  area.value = ''
})

watch(()=>city.value,(val)=>{
  if(val){
    let areaArr =  selectCity.value.find(item => item.code === city.value)!.children!
    selectArea.value = areaArr
  }
  area.value = ''
})

watch(()=>area.value, val=> {
  if(!val) return
    let proviceData: Data={
      name: allArea.value.find(item => item.code === provice.value)!.name,
      code:provice.value
    }

    let cityData: Data={
      name: selectCity.value.find(item => item.code === city.value)!.name,
      code:city.value
    }
    let areaData: Data={
      name: selectArea.value.find(item => item.code === area.value)!.name,
      code:area.value
    }

    emits('getData',{
    provice :proviceData,
    city: cityData,
    area: areaData
  })

})



</script>

<style lang="scss" scoped></style>
<!-- 上移/下移复制行
· 在Windows系统：Shift键 + Alt键 + 上键/下键 -->
<!-- 选定单词
· 在Windows系统: Ctrl键+ d键 -->

<!-- 省市区：去github的仓库下载压缩包 -->
<!-- Administrative-divisions-of-China -->

<!-- find() -->
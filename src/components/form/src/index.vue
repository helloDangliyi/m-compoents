<template>
  <el-form  v-if="model" v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false">
    <template v-for="(item,index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label" >
        <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]"></component>
      </el-form-item>

      <el-form-item v-else :prop="item.prop" :label="item.label" >
        <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]">
          <component 
          v-for="(child,i) in item.children" 
          :key="i" 
          :is="`el-${child.type}`"
          :label="child.label"
          :value="child.value"
          ></component>
        </component>
      </el-form-item>

    </template>
  </el-form>
</template>

<script lang='ts' setup>
import {PropType,ref,onMounted,watch} from "vue"
import { FormOptions } from "./type";
import { cloneDeep } from "lodash";

let props = defineProps({
  options:{
    type: Array as PropType<FormOptions[]>
  }
})

let model = ref<any>(null)
let rules = ref<any>(null)

let initForm = () => {
  if(props.options && props.options.length) {
    let m :any = {}
    let r: any = {}
    props.options?.map((item:FormOptions) =>{
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })

    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

watch(()=>props.options,val => {
  initForm()
},{ deep: true})

onMounted(()=>{
  initForm()
})
</script>

<style lang="scss" scoped></style>

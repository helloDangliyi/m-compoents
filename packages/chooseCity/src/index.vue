<template>
  <el-popover placement="bottom-start" v-model:visible="visible" :width="500" trigger="click">
    <template #reference>
      <div class="result">

        <div>{{ result }}</div>
          <el-icon-arrowdown :class="{'rotate': visible}" />
      </div>
    </template>

    <div class="container">
      <el-row>
        <el-col :span="8">
            <el-radio-group v-model="radio2">
              <el-radio-button label="按城市" />
              <el-radio-button label="按省份" />
            </el-radio-group>
        </el-col>
        <el-col :span="16">
          <el-select v-model="value" filterable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
      </el-row>

      <div v-for="(value,key) in cities" >
        {{ value }}-{{ key }}
      </div>

      <!-- <div v-for="(item,index) in Object.keys(cities)" >
      {{ item }}-{{ index }}
      </div> -->

    </div>
  </el-popover>
</template>

<script lang='ts' setup>
import { ref } from "vue"

let result = ref<string>('请选择')
let visible = ref<boolean>(false)

let radio2 = ref<string>('按城市')
let value = ref<string>('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

let cities = {
  'a':'城市1',
  'b':'城市2'
}
</script>

<style lang="scss" scoped>
.result {
  width: fit-content; //自适应内容的宽度
  display: flex;
  align-items: center;
  cursor: pointer
}

.rotate {
  transform: rotate(180deg) ;
}

svg {
  width: 1em;
  height: 1em;
  transition:all 0.25s linear;
}

.container {
  padding: 6px;
}
</style>

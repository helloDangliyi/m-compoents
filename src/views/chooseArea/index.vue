<template>
  <m-choose-area @getData="changeData"></m-choose-area>
</template>

<script lang='ts' setup>
import {} from "vue"
// import mChooseArea from '../../components/chooseArea/src/index.vue'

const changeData = (data: any)=>{
  console.log('data: ', data);

}
</script>

<style lang="scss" scoped></style>

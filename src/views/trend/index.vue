<template>
  <!-- 基础使用：1. 父组件传递过来的数据 -->
  <!-- 
     <div class="flex">
    <div>
      <m-trend text="营业额" upIconColor="pink"></m-trend>
    </div>
    <div>
      <m-trend text="销售额" type="'down'" downIconColor="purple"></m-trend>
    </div>
  </div>
   -->
 

  <br>

  <!-- 2.插槽; -->
  <!-- <div class="flex">
    <div>
      <m-trend text="营业额">营业额2</m-trend>
    </div>
    <div>
      <m-trend text="销售额" type="down" ></m-trend>
    </div>
  </div> -->


  <!-- 图标颜色反转 ：？？？他在说什么？-->
  <div class="flex">
    <div>
      <m-trend text="营业额" reverseColor></m-trend>
    </div>
    <div>
      <m-trend text="销售额" type="down" ></m-trend>
    </div>
  </div>

  <!-- 文字颜色的改变,图标 -->
  <!-- <div class="flex">
    <div>
      <m-trend text="营业额" upIcon="avatar"></m-trend>
    </div>
    <div>
      <m-trend text="销售额" downTextColor="pink" type="down" ></m-trend>
    </div>
  </div> -->
  
  
</template>

<script lang='ts' setup>
import {} from "vue"
</script>

<style lang="scss" scoped>
.flex{
  display: flex;
  div{
    margin-right: 10px;
  }
}
</style>

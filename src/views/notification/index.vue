<template>
<div class="layout">
  <div>
    <div class="base">基础使用</div>
    <!-- m-notification 是为了封装悬浮嵌套其他组件的 -->
    <div>
      <m-notification :value="50"></m-notification>
      <br>
      <br>
    <m-notification :value="50" :max="30"></m-notification>
      <br>
      <br>
    <m-notification :value="50" isDot></m-notification>
      <br>
      <br>
    <m-notification :value="50" icon="ChatRound"></m-notification>
      <br>
      <br>
    </div>
  </div>

  <div>
    <div class="base">其他使用</div>
    <div>
      <m-notification :value="50">
      <!-- # 是v-slot的缩写 -->
      <template #default>
        <m-list :list="list"></m-list>
      </template>
    </m-notification>
    </div>
  </div>
</div>
</template>

<script lang='ts' setup>

let list=[
  {
    title:'通知',
    content:[
      {
        title:'通知1',
        desc:'描述1-1',
        tag:'hhh'
      },
      {
        title:'通知2',
        desc:'描述1-2',
        tag:'hhh'
      },

    ]
    
  },
  {
    title:'会议',
    content:[
      {
        title:'会议1',
        desc:'描述2-1',
        tag:'hhh'
      },
      {
        title:'会议2',
        desc:'描述2-2',
        tag:'hhh'
      },

    ]
    
  },

]
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  justify-content: space-around;
  .base{
    margin-bottom: 20px;
    color: #c3bfbf;
  }
}
</style>

<template>
  <div >
    <!-- <m-notification :value="50"></m-notification>
      <br>
      <br>
    <m-notification :value="50" :max="30"></m-notification>
      <br>
      <br>
    <m-notification :value="50" isDot></m-notification>
      <br>
      <br>
    <m-notification :value="50" icon="ChatRound" v-sattr></m-notification>
      <br>
      <br> -->

      <m-notification :value="50">
        <!-- # 是v-slot的缩写 -->
        <template #default>
          <m-list></m-list>
        </template>
      </m-notification>
  </div>
</template>

<script lang='ts' setup>
import {} from "vue"
</script>

<style lang="scss" scoped></style>

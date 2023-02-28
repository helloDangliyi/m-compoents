<template>
  <div style="display: flex;justify-content: space-around;">

    <div :style="{ width: '200px' }">
      <div style="margin-bottom: 20px;">基础菜单</div>
      <m-menu :data="data1" defaultActive="2" active-text-color="red"></m-menu>
    </div>



    <!-- 1、本地开发环境安装jsx插件  npm i -D @vitejs/plugin-vue-jsx -->
    <!-- 2、在vite.config.ts引入并配置 
      import vueJsx from '@vitejs/plugin-vue-jsx'
    -->
    <div :style="{ width: '200px' }">
      <div  style="margin-bottom: 20px;">无限层级菜单</div>
      <m-infinite-menu :data="data2" defaultActive="2" active-text-color="red"></m-infinite-menu>
    </div>
  </div>
</template>

<script lang='ts' setup>
// import {} from "vue"

let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    child: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      },
    ]
  },

]

let data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    child: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document',
        child: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'document',
            child: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'document',
                child: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'document',
                  }
                ]
              }
            ]
          }]
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'document',
      }
    ]
  },

]
</script>

<style lang="scss" scoped></style>

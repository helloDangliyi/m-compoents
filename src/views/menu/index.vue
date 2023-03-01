<template>
  <div style="display: flex;justify-content: space-around;">

    <div :style="{ width: '200px' }">
      <div style="margin-bottom: 20px;">基础菜单</div>
      <m-menu :data="data1" defaultActive="2" active-text-color="red" name="a" index="a" icon="c" children="d"></m-menu>
    </div>



    <!-- 1、本地开发环境安装jsx插件  npm i -D @vitejs/plugin-vue-jsx -->
    <!-- 2、在vite.config.ts引入并配置 
      import vueJsx from '@vitejs/plugin-vue-jsx'
    -->
    <div :style="{ width: '200px' }">
      <div  style="margin-bottom: 20px;">无限层级菜单</div>
      <m-infinite-menu :data="data2" defaultActive="2" active-text-color="red"  name="a" index="a" icon="c" children="d"></m-infinite-menu>
    </div>
  </div>
</template>

<script lang='ts' setup>
// import {} from "vue"

let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document'
      },
    ]
  },

]

let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document',
                  }
                ]
              }
            ]
          }]
      },
      {
        a: '导航3-2',
        b: '3-2',
        c: 'Document',
      }
    ]
  },

]
</script>

<style lang="scss" scoped></style>

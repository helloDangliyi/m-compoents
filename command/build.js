const path = require('path')
const { defineConfig, build} = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 打包入口文件夹:把components文件夹编写的组件复制到packages
const entryDir = path.resolve(__dirname,'../packages')

// 出口文件夹
const outDir = path.resolve(__dirname,'../lib')

// 基础配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins:[vue(), vueJsx()]
})

// rollup配置
const rollupOptions = {
    external:['vue','vue-router'],
    output:{
        globals:{
            vue:'vue'
        }
    }
}

// 全量打包构建
const buildAll = async()=>{
    await build({
        ...baseConfig,
        build:{
            rollupOptions,
            lib:{
                entry: path.resolve(entryDir,'index.ts'),
                name: 'mooc-element-components',
                fileName: 'mooc-element-components',
                formats:['es','umd']
            },
            outDir
        }
    })
}

// 打包成库
const buildLib = async ()=>{
    await buildAll()
}
buildLib()
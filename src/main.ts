import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

const app = createApp(App)

app.use(router).use(ElementPlus)

// 全局注册图标，牺牲一点性能
// 转换图标的命名为：el-icon-xxx
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

for( let i in Icons) {
    app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
    
}

app.mount('#app')

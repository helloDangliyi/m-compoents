import { App } from 'vue'
import chooseIcon from './src/index.vue'

// 让这个组件可以通过use的
export default {
    install(app:App){
        // 注册全局组件
            app.component('m-choose-icon',chooseIcon)

    }
}
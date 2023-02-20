import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'

const components = [
    chooseArea,
    chooseIcon
]

// 让这个组件可以通过use的
export default {
    install(app:App){
        components.map(item => {
            app.use(item)
        })
    }
}
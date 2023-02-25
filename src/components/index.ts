import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'

const components = [
    chooseArea,
    chooseIcon,
    trend,
    notification,
    list
]

// 让这个组件可以通过use的
export default {
    install(app:App){
        components.map(item => {
            app.use(item)
        })
    }
}
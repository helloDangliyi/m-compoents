import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import table from './table'
import modelForm from './modelForm'
import calendar from './calendar'
import './styles/ui.scss'
import './styles/base.scss'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

const components = [
    chooseArea,
    chooseIcon,
    trend,
    notification,
    list,
    menu,
    progress,
    chooseTime,
    chooseDate,
    chooseCity,
    form,
    table,
    modelForm,
    calendar
]

// 让这个组件可以通过use的
export default {
    install(app:App){
        for( let i in Icons) {
            app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
        }

        components.map(item => {
            app.use(item)
        })
    }
}
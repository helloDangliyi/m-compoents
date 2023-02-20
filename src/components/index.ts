import { App } from 'vue'
import chooseArea from './chooseArea/src/index.vue'
import chooseIcon from './chooseIcon/src/index.vue'

const component = [
    chooseArea,
    chooseIcon
]

console.log('component: ', component);
 

export default {
    install(app:App){
        // for(let item in component) {
        //     console.log('item: ', item);
        //     app.component(i.name,i)
        // }
    }
}
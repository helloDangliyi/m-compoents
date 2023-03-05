import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Container from '../components/container/src/index.vue'
import Home from '../views/Home.vue';
import ChooseIcon from '../views/chooseIcon/index.vue'
import ChooseArea from '../views/chooseArea/index.vue'
import Trend from '../views/trend/index.vue'
import Notification from '../views/notification/index.vue'
import Menu from '../views/menu/index.vue'
import Progress from '../views/progress/index.vue'

const routes: RouteRecordRaw[]= [
    {
        path: '/',
        component: Container,
        children: [
            {
                path:'/',
                component: Home
            },
            {
                path: '/chooseIcon',
                // 使用路由懒加载
                component: ChooseIcon
            },
            {
                path: '/chooseArea',
                // 使用路由懒加载
                component: ChooseArea
            },
            {
                path: '/trend',
                component: Trend
            },
            {
                path:'/notification',
                component: Notification
            },
            {
                path:'/menu',
                component: Menu
            },
            {
                path:'/progress',
                component: Progress
            }
        ]
    }
    
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
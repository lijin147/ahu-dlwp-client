import {createRouter,createWebHistory} from 'vue-router'
import login from '../views/login.vue'
//引入layout组件
import layout from '@/layout/index.vue'
import Index from '@/layout/index.vue'
const constRounter = [
    //也可以重定向
    {
        path: '',
        redirect: "/login"
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },{
        path: '/',
        name: 'index',
        component: layout,
        children: [
            {
                path: '/index',
                component: () => import('@/views/index.vue')
            },
            {
                path: '/run',
                component: () => import('@/views/run/index.vue')
            },
            {
                path: '/val',
                component: () => import('@/views/val/index.vue')
            },
            {
                path: '/prepare',
                component: () => import('@/views/prepare/index.vue')
            },
            {
                path: '/result',
                component: () => import('@/views/result/index.vue')
            }
        ]
    },
]

//创建路由
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //所有的路由规则
    routes: constRounter
})

export default router
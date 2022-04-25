import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
const LoginView = () => import('../views/LoginView')
const ProfileView = () => import('../views/ProfileView')
const SearchView= () => import('../views/SearchView')
const VideoView = () => import('../views/VideoView')
const YunCunView = () => import('../views/YunCunView')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/search',
        name: 'search',
        component: SearchView
    },
    {
        path: '/video',
        name: 'video',
        component: VideoView
    },
    {
        path: '/yun-cun',
        name: 'yuncun',
        component: YunCunView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

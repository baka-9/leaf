import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/Index.vue';
import { spaceRoutes } from './space-routes';
import { uploadRoutes } from './upload-routes';

const baseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/login/Index.vue")
    },
    {
        path: '/video/:vid',
        name: 'Video',
        component: () => import("../views/video/Index.vue")
    },
]

const routes = baseRoutes.concat(spaceRoutes, uploadRoutes);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
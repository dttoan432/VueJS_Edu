import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Profile from "../views/Profile";
import Post from "../views/Post";
// import Ex5_1 from "../components/Exercise/Lessons 5/Ex5_1";
import BaseLessons5 from "../components/Learn/Lessons 5/Baselayout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: BaseLessons5,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Exercise/Lessons 5/Login'),
    },
    {
        path: '/overview',
        name: 'Overview',
        component: () => import('../components/Exercise/Lessons 5/Overview'),
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('../components/Exercise/Lessons 5/ProductPage'),
    },
    {
        path: '/receipt',
        name: 'Receipt',
        component: () => import('../components/Exercise/Lessons 5/ReceiptPage'),
    },
    {
        path: '/statistic',
        name: 'Statistic',
        component: () => import('../components/Exercise/Lessons 5/StatisticPage'),
    },
    {
        path: '/branch-product',
        name: 'BranchProduct',
        component: () => import('../components/Exercise/Lessons 5/BranchProduct'),
    },
    {
        path: '/branch-Order',
        name: 'BranchOrder',
        component: () => import('../components/Exercise/Lessons 5/BranchOrder'),
    },
    {
        path: '/branch-customer',
        name: 'BranchCustomer',
        component: () => import('../components/Exercise/Lessons 5/BranchCustomer'),
    },
    {
        path: '/branch-revenue',
        name: 'BranchRevenue',
        component: () => import('../components/Exercise/Lessons 5/BranchRevenue'),
    },
    {
        path: '/branch-inventory',
        name: 'BranchInventory',
        component: () => import('../components/Exercise/Lessons 5/BranchInventory'),
    },
    {
        path: '/system',
        name: 'System',
        component: () => import('../components/Exercise/Lessons 5/SystemPage'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
        children: [
            {
                path: 'profile',
                component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
            },
            {
                path: 'posts',
                component: Post
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

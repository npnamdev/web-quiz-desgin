import { createRouter, createWebHistory } from 'vue-router'

import User from '../components/UserPage/User.vue';
import Admin from '../components/AdminPage/Admin.vue';
import Dashboard from '../components/AdminPage/Content/Dashboard.vue';
import ManageUser from '../components/AdminPage/Content/ManageUser.vue';

const routes = [
    {
        path: '/',
        component: User,

    },
    {
        path: '/admin',
        component: Admin,
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'user',
                component: ManageUser,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
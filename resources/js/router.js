import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'
import Ls from './services/ls';

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue'
import LayoutLogin from './views/layouts/LayoutAuth.vue'

// Auth
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

// Dashboard
import Dashboard from './views/admin/Dashboard.vue'


// Error
import NotFoundPage from './views/layouts/LayoutError.vue'

Vue.use(VueRouter);

const routes = [

    /*
     |--------------------------------------------------------------------------
     | Layout Routes for DEMO  Layout
     |--------------------------------------------------------------------------|
     */

    {
        path: '/portal-admin',
        component: LayoutBasic,
        redirect: 'admin/dashboard/basic'
    },
    /*
     |--------------------------------------------------------------------------
     | Admin Backend Routes
     |--------------------------------------------------------------------------|
     */
    {
        path: '/admin',
        meta: {requiresAuth: true},
        component: LayoutBasic,
        children: [
            {
                path: 'dashboard/basic',
                component: Dashboard,
                name: 'dashboard'
            }
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Auth & Registration Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/admin/authenticate',
        component: LayoutLogin,
        children: [
            {
                path: 'login',
                component: Login,
                name: 'login'
            },
            {
                path: 'register',
                component: Register,
                name: 'register'
            }
        ]
    },

    {path: '*', component: NotFoundPage}
];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'mm-active'
});
router.beforeEach((to, from, next) => {

    if (to.matched.some(m => m.meta.requiresAuth)) {
        return AuthService.check().then(authenticated => {
            if (!authenticated) {
                return next({path: '/admin/authenticate/login'})
            }

            return next()
        })
    }

    if (to.path === '/admin/authenticate/login' || to.path === '/admin/authenticate/register') {
        if (Ls.get('auth.token') === null) {
            return next();
        } else {
            return AuthService.check().then(authenticated => {
                if (!authenticated) {
                    Ls.remove('auth.token');
                    return next();
                } else {
                    return next({path: '/admin/dashboard/basic'})
                }
            });
        }
    }
    return next();
});
export default router

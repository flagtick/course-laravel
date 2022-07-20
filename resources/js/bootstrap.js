import Vuelidate from 'vuelidate'
import Ls from './services/ls'

window._ = require('lodash');

import DataTable from 'laravel-vue-datatable';
Vue.use(DataTable);

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
});

import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;

Vue.component('pagination', require('laravel-vue-pagination'));


window.Fire = new Vue();

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

global.Vue = require('vue');

global.axios = require('axios');

global.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

global.axios.interceptors.request.use(function (config) {
    const AUTH_TOKEN = Ls.get('auth.token');
    if (AUTH_TOKEN) {
        config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
    }
    return config
}, function (error) {
    return Promise.reject(error)
});

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

Vue.use(Vuelidate);
Vue.use(VueRouter);

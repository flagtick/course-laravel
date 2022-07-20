/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
import router from './router.js'

// Loading indicator
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'
import {LoadingIndicatorConfig} from './constants/config';

Vue.use(Loading);

require('./bootstrap');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    i18n,
    router,

    components: {
        Loading
    },
    mounted() {
        this.enableInterceptor();
    },
    data: {
        isLoading: false,
        requestCount: 0,
        axiosInterceptor: null,
        indicatorOptions: LoadingIndicatorConfig
    },
    methods: {
        increaseReqCount() {
            this.requestCount++;
        },
        decreaseReqCount() {
            this.requestCount--;
        },
        enableInterceptor() {
            const self = this;
            self.axiosInterceptor = window.axios.interceptors.request.use(config => {

                self.increaseReqCount();
                setTimeout(function () {
                    if (self.requestCount > 0) {
                        self.isLoading = true;
                    }
                }, self.indicatorOptions.timeout);
                return config;
            }, error => {
                self.decreaseReqCount();
                self.isLoading = false;
                return Promise.reject(error);
            });
            window.axios.interceptors.response.use(response => {

                self.decreaseReqCount();
                self.isLoading = (self.requestCount > 0);
                return response;
            }, error => {
                self.decreaseReqCount();
                self.isLoading = false;
                return Promise.reject(error);
            });
        },
        disableInterceptor() {
            window.axios.interceptors.request.eject(this.axiosInterceptor);
        }
    }
}).$mount('#app');

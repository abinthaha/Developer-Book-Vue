import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes';

import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes
}); 

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
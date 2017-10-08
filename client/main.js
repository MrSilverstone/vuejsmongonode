import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)


const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'Topic',
        path: '/topic',
        component: Topic
    },
    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({history: true, mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

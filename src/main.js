import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Home from './components/Home.vue'
import GoogleMap from './components/GoogleMap.vue';
import Topic from './components/Topic.vue'


import HeaderMenu from './components/HeaderMenu.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Topic',
        path: '/topic',
        component: Topic
    }
]

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

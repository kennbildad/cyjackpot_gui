import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

axios.defaults.baseURL = 'https://desolate-caverns-82715.herokuapp.com/';
// axios.defaults.baseURL = 'http://127.0.0.1:5000/';
axios.interceptors.request.use(function(config){
    const token = window.localStorage.getItem('cy_jackpot_token')
    config.headers.Authorization = 'Bearer ' + token;
    config.headers['x-access-tokens'] = token;

    return config;
})

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

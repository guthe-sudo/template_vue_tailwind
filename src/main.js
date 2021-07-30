import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')


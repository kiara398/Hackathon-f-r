import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'


createApp(App).use(router).mount('#app')


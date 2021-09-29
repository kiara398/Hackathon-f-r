
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/js/dist/collapse"
import"bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'
import responsive from 'vue-responsive'




import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)




createApp(App)
.use(router)
.component('fas', FontAwesomeIcon)
.use(responsive)
.mount('#app')


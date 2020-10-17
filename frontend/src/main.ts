import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// we import jquery and pooperjs
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')

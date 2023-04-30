import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.min.css'
import './main.css'

createApp(App).use(createPinia()).use(router).mount('#app')

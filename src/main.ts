import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ErrorBoundary from './components/common/ErrorBoundary.vue'
import router from './router'

import 'bulma/css/bulma.min.css'
import './main.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .component('ErrorBoundary', ErrorBoundary)
  .mount('#app')

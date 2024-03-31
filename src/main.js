import './assets/main.css'
import router from '@/plugins/vue-router'
import store from '@/plugins/vuex/store/index'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

import './assets/main.css'
import '@/plugins/vee-validate/rules'
import '@/plugins/vee-validate'
import store from '@/plugins/vuex/store/index'
import router from '@/plugins/vue-router/index'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

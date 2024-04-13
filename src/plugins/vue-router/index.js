import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import QuizesPage from '@/views/QuizesPage.vue'
import QuizPage from '@/views/QuizPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'
import NewPasswordPage from '@/views/NewPasswordPage.vue'
import store from '@/plugins/vuex/store/index'

const guest = (from, to) => {
  if (store.getters['isUserLoggedIn'] && to.name !== 'home') {
    return { name: 'home' }
  }
}
const loadQuizes = (from) => {
  if (!store.getters['getQuizes']) {
    if (from.query.page) {
      let params = { ...from.query }
      params.totalPage = from.query.page
      delete params.page
      store.dispatch('quizes/handleLoadQuizes', params)
    } else {
      store.dispatch('quizes/handleLoadQuizes')
    }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/quizes', name: 'quizes', component: QuizesPage, beforeEnter: [loadQuizes] },
    { path: '/quizes/:id', name: 'quiz', component: QuizPage },
    { path: '/register', name: 'register', component: RegisterPage, beforeEnter: [guest] },
    { path: '/login', name: 'login', component: LoginPage, beforeEnter: [guest] },
    {
      path: '/login/email/verify/:id/:hash',
      name: 'login-verify',
      component: LoginPage,
      beforeEnter: [guest]
    },
    {
      path: '/forgot-password',
      name: 'resetPass',
      component: ResetPasswordPage,
      beforeEnter: [guest]
    },
    {
      path: '/reset-password',
      name: 'newPass',
      component: NewPasswordPage,
      beforeEnter: [guest]
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import QuizesPage from '@/views/QuizesPage.vue'
import QuizPage from '@/views/QuizPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'
import NewPasswordPage from '@/views/NewPasswordPage.vue'
import store from '@/plugins/vuex/store/index'
import StartQuizPage from '@/views/StartQuizPage.vue'
import FrontErrorPage from '@/views/FrontErrorPage.vue'
import ServerErrorPage from '@/views/ServerErrorPage.vue'

const guest = (to, from) => {
  if (store.getters['isUserLoggedIn'] && from.name !== 'home') {
    return { name: 'home' }
  }
}
const loadQuizes = (to, from) => {
  if (from.name === undefined) {
    if (!store.getters['getQuizes']) {
      // handle refresh
      let params = { ...to.query }
      if (params.cat && !Array.isArray(params.cat)) {
        params.cat = [params.cat]
      }
      if (params.level && !Array.isArray(params.level)) {
        params.level = [params.level]
      }
      if (to.query.page) {
        params.totalPage = to.query.page
        delete params.page
      }

      store.dispatch('quizes/handleLoadQuizes', params)
    }
  } else {
    if (to.fullPath !== '/quizes') {
      store.dispatch('quizes/handleLoadQuizes', {})
      return { ...to, query: {} }
    }
    store.dispatch('quizes/handleLoadQuizes', {})
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/quizes', name: 'quizes', component: QuizesPage, beforeEnter: [loadQuizes] },
    { path: '/quizes/:id', name: 'quiz', component: QuizPage },
    { path: '/start-quiz/:id', name: 'start-quiz', component: StartQuizPage },
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
    },
    {
      path: '/:wrongUrl',
      name: 'wrongUrl',
      component: FrontErrorPage
    },
    {
      path: '/internal-error',
      name: 'internalError',
      component: ServerErrorPage
    }
  ]
})

export default router

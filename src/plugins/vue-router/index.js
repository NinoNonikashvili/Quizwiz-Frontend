import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import QuizesPage from '@/views/QuizesPage.vue'
import QuizPage from '@/views/QuizPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'
import NewPasswordPage from '@/views/NewPasswordPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/quizes', name: 'quizes', component: QuizesPage },
    { path: '/quizes/:id', name: 'quiz', component: QuizPage },
    { path: '/register', name: 'register', component: RegisterPage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/login/email/verify/:id/:hash', name: 'login-verify', component: LoginPage },
    { path: '/reset', name: 'resetPass', component: ResetPasswordPage },
    { path: '/newPassword', name: 'newPass', component: NewPasswordPage }
  ]
})

export default router

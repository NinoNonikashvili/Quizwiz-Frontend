import loadQuizes from '@/services/axios/quizes/loadQuizes'
import loadSingleQuiz from '@/services/axios/quizes/loadSingleQuiz'
import loadSimilarQuizes from '@/services/axios/quizes/loadSimilarQuizes'
import loadQuizQuestions from '@/services/axios/quizes/loadQuizQuestions'
import sendQuizResult from '@/services/axios/quizes/sendQuizResult'
import router from '@/plugins/vue-router/index'

export default {
  handleLoadQuizes(context, payload = null) {
    loadQuizes(payload)
      .then((res) => {
        context.commit('setIsLoading', false)
        if (res.data.links.next === null) {
          context.commit('setisMorePage', false)
        } else {
          context.commit('setisMorePage', true)
        }
        if (payload && 'page' in payload) {
          context.commit('updateQuizes', res.data.data)
        } else {
          if (payload && 'search' in payload) {
            context.commit('setSearchedQuizes', true)
          }
          context.commit('setQuizes', res.data.data)
        }
      })
      .catch(() => {
        context.commit('setIsLoading', false)
      })
  },

  handleLoadSingleQuiz(context, id) {
    loadSingleQuiz(id)
      .then((res) => {
        if (res.data) {
          context.commit('setSingleQuiz', res.data.data)
        }
      })
      .catch(() => router.push({ name: 'home' }))
  },
  handleLoadSimilarQuizes(context, id) {
    loadSimilarQuizes(id)
      .then((res) => {
        if (res.data) {
          context.commit('setSimilarQuizes', res.data.data)
        }
      })
      .catch(() => router.push({ name: 'home' }))
  },
  handleLoadQuizQuestions(context, id) {
    loadQuizQuestions(id)
      .then((res) => {
        if (res.data) {
          context.commit('setQuizQuestions', res.data.data)
        }
      })
      .catch(() => router.push({ name: 'home' }))
  },
  handleSendQuizResult(context, payload) {
    sendQuizResult(payload)
      .then((res) => {
        context.commit('setQuizResult', res.data)
      })
      .catch(() => router.push({ name: 'home' }))
  }
}

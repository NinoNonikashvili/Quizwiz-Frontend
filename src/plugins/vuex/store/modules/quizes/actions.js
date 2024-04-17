import loadQuizes from '@/services/axios/quizes/loadQuizes'
import loadSingleQuiz from '@/services/axios/quizes/loadSingleQuiz'
import loadSimilarQuizes from '@/services/axios/quizes/loadSimilarQuizes'
import loadQuizQuestions from '@/services/axios/quizes/loadQuizQuestions'

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
          context.commit('setQuizes', res.data.data)
        }
      })
      .catch((err) => {
        context.commit('setIsLoading', false)
        console.log(err)
      })
  },
  handleLoadSingleQuiz(context, id) {
    loadSingleQuiz(id)
      .then((res) => {
        if (res.data) {
          context.commit('setSingleQuiz', res.data.data)
          console.log(res.data.data)
        }
      })
      .catch((err) => console.log('err' + err))
  },
  handleLoadSimilarQuizes(context, id) {
    loadSimilarQuizes(id)
      .then((res) => {
        if (res.data) {
          context.commit('setSimilarQuizes', res.data.data)
        }
      })
      .catch((err) => console.log(err))
  },
  handleLoadQuizQuestions(context, id) {
    loadQuizQuestions(id)
      .then((res) => {
        if (res.data) {
          console.log(res.data)
          context.commit('setQuizQuestions', res.data.data)
        }
      })
      .catch((err) => console.log(err))
  }
}

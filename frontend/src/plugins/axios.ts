import * as Vue from 'vue'
import axios from 'axios'
import store from '../store'
import NotificationService from '@/services/NotificationService'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.interceptors.request
  .use((config) => {
    store.commit('isMakingRequest', true)
    return config
  }, function (error) {
    return Promise.reject(error)
  })

axios.interceptors.response
  .use((response) => {
    store.commit('isMakingRequest', false)
    return response
  }, (error) => {
    store.commit('isMakingRequest', false)
    if (error.response) {
      const status = error.response.status
      switch (status) {
        case 422:
          NotificationService.throwValidationErrors(error.response.data)
          break
        case 400:
          NotificationService.throwValidationError(error.response.data.errors[0].message)
          break
        case 500:
          NotificationService.danger('Erro interno do servidor, tente novamente!')
          break
        case 401:
          alert('TOKEN EXPIRADO!')
          break
      }
    }
    return Promise.reject(error)
  })

const app = Vue.createApp({})
app.use({
  install (app) {
    app.config.globalProperties.$http = () => axios
  }
})

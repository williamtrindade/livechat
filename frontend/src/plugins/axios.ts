import * as Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const app = Vue.createApp({})
app.use({
  install (app) {
    app.config.globalProperties.$http = () => axios
  }
})

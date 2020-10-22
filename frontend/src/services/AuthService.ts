import axios from 'axios'
import UserInterface from '@/interfaces/UserInterface'

export default class AuthService {
  async register (user: UserInterface) {
    return await axios.post('/register', user)
  }

  async login (user: UserInterface) {
    return await axios.post('/login', user)
      .then((response) => {
        localStorage.setItem('accessToken', JSON.stringify(response.data.token))
        localStorage.setItem('user', JSON.stringify(response.data.user))
      })
      .catch((error) => Promise.reject(error))
  }

  async logout () {
    const accessToken = JSON.parse(localStorage.getItem('accessToken') ?? '')
    const token = accessToken.token
    const options = { headers: { authorization: `Bearer ${token}` } }

    return await axios.post('/logout', options)
      .then(() => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
      })
      .catch((error) => Promise.reject(error))
  }
}

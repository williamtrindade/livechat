import axios from 'axios'
import UserInterface from '@/interfaces/UserInterface'

export default class AuthService {
  async register (user: UserInterface) {
    return await axios.post('/register', user)
  }
}

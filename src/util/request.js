import axios from 'axios'
import serverAdress from './serverAdress'

export default{
  requestMovie (params) {
    return axios.get(serverAdress + 'movie/' + params)
  },
  requestBook (params) {
    return axios.get(serverAdress + 'book/' + params)
  }
}

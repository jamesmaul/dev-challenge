import Axios from 'axios'

const Api = Axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default Api

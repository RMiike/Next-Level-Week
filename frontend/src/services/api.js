import axios from 'axios'

const ufApi = axios.create({
  baseURL: 'http://localhost:61133/api/createpoint'
})

export default ufApi
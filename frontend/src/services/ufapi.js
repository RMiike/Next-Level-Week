import axios from 'axios'

const ufApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
})

export default ufApi
import axios, { AxiosInstance } from 'axios'

const httpClient: AxiosInstance = axios.create({
  baseURL: 'http://working2.atm.loc/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default httpClient

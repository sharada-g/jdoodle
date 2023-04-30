import axios from 'axios'
import type { AxiosInstance } from 'axios'

const axiosBackendInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export { axiosBackendInstance }

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

const axiosJdoodleInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_JDOODLE_API_URL,
  timeout: 10000
})

export { axiosBackendInstance, axiosJdoodleInstance }

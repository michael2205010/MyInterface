import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.interceptors.request.use(request => {
    request.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return request;
})

export default axios
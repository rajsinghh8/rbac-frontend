import axios from 'axios'

const apiClient = axios.create({ baseURL: import.meta.env.VITE_API_URL || '' })
apiClient.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem('auth_token')
  let token = storedToken

  try {
    const auth = JSON.parse(storedToken || 'null')
    token = auth && (auth.accessToken || auth.token)
  } catch (error) {
    // A raw JWT is also supported for compatibility with externally persisted sessions.
  }

  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
apiClient.interceptors.response.use((response) => response, (error) => Promise.reject(error.response || error))
export default apiClient

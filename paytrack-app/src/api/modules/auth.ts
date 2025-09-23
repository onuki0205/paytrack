import { apiClient } from '../client'

export const login = (payload: { email: string; password: string }) => {
  return apiClient.post('/auth/login', payload)
}
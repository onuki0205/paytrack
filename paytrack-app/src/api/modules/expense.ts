import { apiClient } from '../client'

export const fetchExpenses = () => {
  return apiClient.get('/expenses')
}
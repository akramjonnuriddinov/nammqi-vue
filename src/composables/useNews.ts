import { Article, Teacher } from '@/types'
import httpClient from './useApi'

export const getNews = async () => {
  return await httpClient.get('/news')
}

export const postNews = async (news: Article) => {
  const response = await httpClient.post(`/news`, news)
  return response
}

export const postTeacher = async (teacher: any) => {
  const response = await httpClient.post('/teacher', teacher)
  return response
}

export const getTeacher = async (): Promise<Teacher> => {
  const response = await httpClient.get('/teacher')
  return response.data
}
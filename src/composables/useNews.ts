import { Article, Teacher } from '@/types'
import httpClient from '@/composables/useApi'

export const getNews = async (): Promise<Article[]> => {
  const response = await httpClient.get('/news')
  return response.data
}

export const postNews = async (news: Article) => {
  const response = await httpClient.post(`/news`, news)
  return response
}

export const getNewsById = async (id: string): Promise<Article> => {
  const response = await httpClient.get(`/news/${id}`)
  return response.data
}

export const postTeacher = async (teacher: any) => {
  const response = await httpClient.post('/teachers', teacher)
  return response
}

export const getTeacher = async (): Promise<Teacher> => {
  const response = await httpClient.get('/teachers')
  return response.data
}

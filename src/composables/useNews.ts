import { Article } from '@/types'
import httpClient from './useApi'

export const getNews = async () => {
  return await httpClient.get('/news')
}

export const postNews = async (news: Article) => {
  const response = await httpClient.post(`/news`, news)
  return response
}

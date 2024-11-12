import httpClient from './useApi'

export const getNews = async () => {
  return await httpClient.get('/news')
}

export const getFacultyDetails = async (id: string) => {
  return await httpClient.get(`/faculties/${id}`)
}

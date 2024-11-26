import httpClient from '@/composables/useApi'

export const getTeachers = async (
  page: number,
  limit: number
): Promise<{ data: any[]; total: number }> => {
  try {
    const response = await httpClient.get(
      `/teachers?_page=${page}&_limit=${limit}`
    )
    const totalCount = response.headers['x-total-count'] // Fetch total count from headers
    return {
      data: response.data,
      total: Number(totalCount), // Convert to a number
    }
  } catch (error) {
    console.error('Failed to fetch teachers:', error)
    throw error
  }
}

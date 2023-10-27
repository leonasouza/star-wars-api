import axios from 'axios'

// TYPES
import { GetPeopleResponse } from '@types'

// API
import { BASEURL } from '@services/api'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const getAllPeople = async (): Promise<GetPeopleResponse> => {
  const { data } = await axios.get(`${BASEURL}/people`)
  return data
}

export const useGetAllPeople = (): UseQueryResult<GetPeopleResponse> => {
  return useQuery<GetPeopleResponse>({
    queryKey: ['GetAllPeople'],
    queryFn: () => getAllPeople(),
    refetchOnWindowFocus: false,
  })
}

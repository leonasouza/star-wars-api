import axios from 'axios'

// TYPES
import { Paginated, Person } from '@types'

// API
import { BASEURL } from '@services/api'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const getAllPeople = async (): Promise<Paginated<Person>> => {
  const { data } = await axios.get(`${BASEURL}/people`)
  return data
}

export const useGetAllPeople = (): UseQueryResult<Paginated<Person>> => {
  return useQuery<Paginated<Person>>({
    queryKey: ['GetAllPeople'],
    queryFn: () => getAllPeople(),
    refetchOnWindowFocus: false,
  })
}

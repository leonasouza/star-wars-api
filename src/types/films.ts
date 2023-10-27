import { Person, Planet, Specie, Starship, Vehicle } from '@types'

export interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
  characters: Person[]
  planets: Planet[]
  url: string
  created: string
  edited: string
}

import { Film, Specie, Starship, Vehicle } from '@types'

export interface Person {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: Film[]
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
  url: string
  created: string
  edited: string
}

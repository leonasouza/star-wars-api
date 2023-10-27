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
  films: []
  species: []
  starships: []
  vehicles: []
  url: string
  created: string
  edited: string
}

export interface GetPeopleResponse {
  count: number
  next: string
  previous: string
  results: Person[]
}

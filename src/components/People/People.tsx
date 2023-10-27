import { useEffect, useState } from 'react'

// STYLES
import * as S from './People.styles.ts'

// API
import { useGetAllPeople } from '@services/people'

// TYPES
import { Person } from '@types'

export const People = (): JSX.Element => {
  const [people, setPeople] = useState<Person[]>([])

  const peopleRequest = useGetAllPeople()

  useEffect(() => {
    if (peopleRequest.data) {
      setPeople(peopleRequest.data.results)
    }
  }, [peopleRequest.data])

  return (
    <S.Container>
      <S.Title>People</S.Title>
      <S.Description>{people.map((person) => person.name)}</S.Description>
    </S.Container>
  )
}

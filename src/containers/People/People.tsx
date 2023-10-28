import { useEffect, useState } from 'react'

// STYLES
import * as S from './People.styles.ts'

// API
import { useGetAllPeople } from '@services/people'

// COMPONENTS
import { Card } from '@ui'

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
      <S.List>
        {people.map((person) => (
          <Card key={person.name}>
            <S.Name>{person.name}</S.Name>
            <S.Gender>{person.gender}</S.Gender>
            <S.Height>{person.height} m</S.Height>
            <S.Mass>{person.mass} kg</S.Mass>
          </Card>
        ))}
      </S.List>
    </S.Container>
  )
}

// STYLES
import * as S from './Navbar.styles.ts'

// ROUTER
import { useLocation } from 'react-router-dom'

const categories = [
  { label: 'People', value: '/people' },
  { label: 'Films', value: '/films' },
  { label: 'Starships', value: '/starships' },
  { label: 'Vehicles', value: '/vehicles' },
  { label: 'Species', value: '/species' },
  { label: 'Planets', value: '/planets' },
]

export const Navbar = (): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      {categories.map((category) => (
        <S.Link
          key={category.value}
          to={category.value}
          selected={pathname === category.value}
        >
          {category.label}
        </S.Link>
      ))}
    </S.Container>
  )
}

// STYLES
import * as S from './Navbar.styles.ts'

const categories = [
  'People',
  'Films',
  'Starships',
  'Vehicles',
  'Species',
  'Planets',
]

export const Navbar = (): JSX.Element => {
  return (
    <S.Container>
      {categories.map((category) => (
        <S.MenuOption key={category}>{category}</S.MenuOption>
      ))}
    </S.Container>
  )
}

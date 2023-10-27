import * as S from './Home.styles.ts'

export const Home = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>Welcome to the Star Wars Database</S.Title>
      <S.Description>
        This database is not hosted by me. This project is only a interface to
        browse some cool Star Wars data. Feel free to browse through the options
        above.
      </S.Description>
    </S.Container>
  )
}

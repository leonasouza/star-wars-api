// STYLES
import * as S from './Card.styles.ts'

// TYPES
import { ButtonProps as Props } from './Card.types.ts'

export const Card = ({ children }: Props): JSX.Element => {
  return <S.Container>{children}</S.Container>
}

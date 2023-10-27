// STYLES
import * as S from './Button.styles.ts'

// TYPES
import { ButtonProps as Props } from './Button.types'

export const Button = ({ label }: Props): JSX.Element => {
  return <S.Component onClick={() => console.log('click')}>{label}</S.Component>
}

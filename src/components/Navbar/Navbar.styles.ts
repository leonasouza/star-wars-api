import styled from 'styled-components'

// HELPERS
import { fontSize, spacing } from '@ui/helpers'

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: ${spacing('xl')};
  font-size: ${fontSize('large')};
`

export const MenuOption = styled.span`
  cursor: pointer;
`

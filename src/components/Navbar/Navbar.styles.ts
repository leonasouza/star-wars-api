import styled from 'styled-components'

// COMPONENTS
import { Link as RouterLink } from 'react-router-dom'

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

interface LinkProps {
  selected: boolean
}

export const Link = styled(RouterLink)<LinkProps>`
  font-weight: ${({ selected }) => (selected ? '500' : '300')};
`

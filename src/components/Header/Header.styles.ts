import styled from 'styled-components'

// HELPERS
import { color, spacing } from '@ui/helpers'

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  background-color: ${color('blue-300')};
  height: 150px;
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: ${spacing('huge')};
`

import styled from 'styled-components'

// helpers
import { color, spacing } from '@ui/helpers'

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  background-color: ${color('blue-300')};
  height: 200px;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin: ${spacing('huge')};
`

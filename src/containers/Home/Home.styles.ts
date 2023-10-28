import styled from 'styled-components'

// HELPERS
import { spacing } from '@ui/helpers'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-top: ${spacing('huge')};
`

export const Description = styled.p`
  margin-top: ${spacing('huge')};
`

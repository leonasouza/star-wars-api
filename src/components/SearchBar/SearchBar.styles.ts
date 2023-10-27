import styled from 'styled-components'

// HELPERS
import { color, spacing } from '@ui/helpers'

export const TextInput = styled.input`
  margin-top: ${spacing('xxl')};
  align-self: center;
  font-size: 2rem;
  border: 1px solid ${color('neutral-950')};
  border-radius: 2rem;
  padding: ${spacing('sm')} ${spacing('md')};
`

import styled from 'styled-components'

// HELPERS
import { color, spacing } from '@ui/helpers'

export const Component = styled.button`
  background-color: ${color('blue-300')};
  padding: ${spacing('xs')} ${spacing('md')};
  border: 1px solid ${color('neutral-900')};
  border-radius: ${spacing('huge')};

  &:hover {
    cursor: pointer;
    background-color: ${color('blue-400')};
  }
`

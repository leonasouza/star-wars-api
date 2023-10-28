import styled from 'styled-components'

// HELPERS
import { color, spacing } from '@ui/helpers'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color('blue-100')};
  padding: ${spacing('xs')} ${spacing('md')};
  border: 1px solid ${color('neutral-500')};
  border-radius: ${spacing('huge')};
`

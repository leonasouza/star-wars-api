import styled from 'styled-components'

// HELPERS
import { fontSize, spacing } from '@ui/helpers'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing('xxl')};
`

export const Name = styled.p`
  font-size: ${fontSize('title')};
  font-weight: 600;
  margin-bottom: ${spacing('xxs')};
`

export const Gender = styled.p`
  font-size: ${fontSize('large')};
  text-transform: capitalize;
`

export const Height = styled.p`
  font-size: ${fontSize('large')};
`

export const Mass = styled.p`
  font-size: ${fontSize('large')};
`

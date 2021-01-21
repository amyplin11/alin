import React from 'react'
import { BottomAvo, TopAvo, InnerLayer, Pit } from './avo.styled'
import { Container, EyeBall, Eye, Shadow } from '../shared'

export const Avocado = () => {
  return (
    <Container width={180}>
      <TopAvo />
      <BottomAvo />
      <InnerLayer />
      <Pit />
      <Eye left={66} top={110}>
        <EyeBall />
      </Eye>

      <Eye left={96} top={110}>
        <EyeBall />
      </Eye>

      <Shadow width={120} />
    </Container>
  )
}

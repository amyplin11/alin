import React from 'react'
import { Container, BottomAvo, TopAvo, InnerLayer, Pit, Shadow } from './avo.styled'
import { EyeBall, Eye } from '../shared'

export const Avocado = () => {
  return (
    <Container>
      <TopAvo />
      <BottomAvo />
      <InnerLayer />
      <Pit />
      <Eye left={76} top={110}>
        <EyeBall />
      </Eye>

      <Eye left={104} top={110}>
        <EyeBall />
      </Eye>

      <Shadow />
    </Container>
  )
}

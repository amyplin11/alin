import React from 'react'
import { BodyBall, TriangleUp, TriangleDown } from './blueberry.styled'
import { Container, EyeBall, Eye, Shadow } from '../shared'

export const Blueberry = () => {
  return (
    <Container width={100}>
      <TriangleDown left={20} top={122} />
      <TriangleDown left={36} top={120} />
      <TriangleDown left={50} top={122} />

      <BodyBall />

      <Eye left={26} top={150}>
        <EyeBall />
      </Eye>

      <Eye left={54} top={150}>
        <EyeBall />
      </Eye>

      <Shadow width={60} />
    </Container>
  )
}

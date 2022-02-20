import React from 'react'
import { BodyBall, TriangleDown } from './blueberry.styled'
import { Container, EyeBall, Eye, Shadow } from '../shared'

export const Blueberry = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  return (
    <Container width={100}>
      <TriangleDown left={50} top={120}>
        &#9658;
      </TriangleDown>
      <TriangleDown left={68} top={118}>
        &#9658;
      </TriangleDown>
      <TriangleDown left={85} top={120}>
        &#9658;
      </TriangleDown>

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

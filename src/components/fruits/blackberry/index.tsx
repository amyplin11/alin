import React from 'react'
import { Container, Shadow, BodyBall } from './blackberry.styled'
import { EyeBall, Eye } from '../shared'

export const Blackberry = () => {
  return (
    <Container>
      <BodyBall left={120} top={20} />
      <BodyBall left={60} top={20} />
      <BodyBall left={0} top={20} />

      <BodyBall left={90} top={80} />
      <BodyBall left={30} top={80} />

      <BodyBall left={60} top={140} />

      <Eye left={76} top={60}>
        <EyeBall />
      </Eye>

      <Eye left={104} top={60}>
        <EyeBall />
      </Eye>

      <Shadow />
    </Container>
  )
}

import React from 'react'
import { Container, BodyBall } from './blackberry.styled'
import { EyeBall, Eye, Shadow } from '../shared'

export const Blackberry = () => {
  return (
    <Container width={100}>
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

      <Shadow width={60} />
    </Container>
  )
}

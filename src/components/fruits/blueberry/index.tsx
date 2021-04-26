import React from 'react'
import { BodyBall, TriangleDown } from './blueberry.styled'
import { AnimationContainer, EyeBall, Eye, Shadow } from '../shared'

export const Blueberry = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  return (
    <AnimationContainer width={100} shouldAnimate={shouldAnimate}>
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
    </AnimationContainer>
  )
}

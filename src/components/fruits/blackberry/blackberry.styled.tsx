import styled from '@emotion/styled'
import { Colors } from 'src/styles/colors'

interface BodyBallProps {
  left?: number
  top?: number
}

export const BodyBall = styled.div`
  position: absolute;
  background: ${Colors.Indigo500};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  top: ${({ top }: BodyBallProps) => `${top}px`};
  left: ${({ left }: BodyBallProps) => `${left}px`};
`

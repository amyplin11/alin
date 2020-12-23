import styled from '@emotion/styled'
import { Colors } from 'src/styles/colors'

export const Container = styled.div`
  display: flex;
  width: 200px;
  height: 220px;
  position: relative;
  justify-content: center;
`

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

export const Shadow = styled.div`
  width: 120px;
  height: 16px;
  top: 228px;
  opacity: 0.2;
  position: absolute;
  border-radius: 50%;
  background: #f3f3f3;
`

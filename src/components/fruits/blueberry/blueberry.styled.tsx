import styled from '@emotion/styled'
import { Colors } from 'src/styles/colors'

export const BodyBall = styled.div`
  position: absolute;
  background: ${Colors.Blue400};
  border-radius: 50%;
  width: 90px;
  height: 90px;
  top: 120px;
`

interface PositionProps {
  left?: number
  top?: number
}

export const TriangleDown = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: ${({ top }: PositionProps) => `${top}px`};
  left: ${({ left }: PositionProps) => `${left}px`};
  z-index: 2;
  color: ${Colors.Green400};
  transform: rotate(0.25turn) scale(1.5, 2);
`

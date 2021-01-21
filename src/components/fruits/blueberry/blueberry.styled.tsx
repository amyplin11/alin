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

export const TriangleUp = styled.div`
  position: absolute;
  width: 0;
  height: 110px;
  left: 10px;
  z-index: 2;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 14px solid ${Colors.Green400};
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
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${Colors.Green400};
`

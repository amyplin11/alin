import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const blink = keyframes`
    0%, 100% {
        transform: scale(1, 0.05);
    }
    5%, 95% {
        transform: scale(1, 1);
    }
`
interface EyeProps {
  left: number
  top: number
}

export const Eye = styled.div`
  left: ${(props: EyeProps) => `${props.left}px`};
  top: ${(props: EyeProps) => `${props.top}px`};
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 1;
  background: #fff;
  border-radius: 50%;
  animation: ${blink} 3s infinite;
`

export const EyeBall = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-top: 5px;
  background: black;
  border-radius: 50%;
`

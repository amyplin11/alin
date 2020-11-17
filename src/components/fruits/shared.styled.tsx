import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Colors } from '../../styles/colors'

const blink = keyframes`
    0%, 100% {
        transform: scale(1, 0.05);
    }
    5%, 95% {
        transform: scale(1, 1);
    }
`

export const Container = styled.div`
  display: flex;
  width: 200px;
  height: 220px;
  position: relative;
  justify-content: center;
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
export const Smile = styled.div`
    top: 47px;
    border: solid 2px #000;
    width: 20px;
    height: 100px;
    position: absolute;
    border-color: transparent transparent #000 transparent;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    transition: transform 2s;

    ${Container}:hover & {
        transform: scaleX(3);
    }
`


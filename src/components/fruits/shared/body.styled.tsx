import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const grow = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    1% {
        display: block;
        opacity: 0;
        transform: translateY(80px);
    }
    100% {
        opacity: 1;
    }
`

export const Shadow = styled.div`
  width: ${({ width }: { width?: number }) => `${width}px`};
  height: 16px;
  top: 228px;
  opacity: 0.2;
  position: absolute;
  border-radius: 50%;
  background: #f3f3f3;
`

export const Container = styled.div`
  display: flex;
  width: ${({ width }: { width?: number }) => `${width}px`};
  height: 220px;
  position: relative;
  justify-content: center;
`

export const AnimationContainer = styled(Container)`
  transition-delay: 2s;
  display: ${({ shouldAnimate = false }: { shouldAnimate?: boolean }) => (shouldAnimate ? 'flex' : 'none')};
  animation: ${({ shouldAnimate = false }: { shouldAnimate?: boolean }) =>
    shouldAnimate
      ? css`
          ${grow} 3s
        `
      : 'none'};
`

export const Smile = styled.div`
  top: 47px;
  border: solid 2px #000;g
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

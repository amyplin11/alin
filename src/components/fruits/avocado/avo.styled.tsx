import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Colors } from '../../../styles/colors'

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

export const BottomAvo = styled.div`
  position: absolute;
  background: ${Colors.Green400};
  border-radius: 50%;
  width: 160px;
  height: 200px;
  top: 20px;
`

export const TopAvo = styled.div`
  position: absolute;
  background: ${Colors.Green400};
  border-radius: 50%;
  height: 100px;
  transform-origin: left top;
  transition: transform 3s;
  width: 90px;
`

export const InnerLayer = styled.div`
  position: absolute;
  top: 40px;
  background: ${Colors.Green300};
  border-radius: 50%;
  height: 160px;
  transform-origin: left top;
  transition: transform 3s;
  width: 120px;
`

export const Pit = styled.div`
  position: relative;
  top: 88px;
  background: ${Colors.Brown300};
  position: absolute;
  border-radius: 50%;
  height: 90px;
  width: 90px;

  transform-origin: left top;
  transition: transform 3s;
`
const Eye = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 1;
  background: #fff;
  border-radius: 50%;
  animation: ${blink} 3s infinite;
`

export const LeftEye = styled(Eye)`
  left: 76px;
  top: 110px;
`

export const RightEye = styled(Eye)`
  left: 104px;
  top: 110px;
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

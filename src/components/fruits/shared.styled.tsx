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

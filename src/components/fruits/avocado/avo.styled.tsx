import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const blink = keyframes`
    0%, 100% {
        transform: scale(1, 0.05);
    }
    5%, 95% {
        transform: scale(1, 1);
    }
`

export const BottomAvo = styled.div`
    position: absolute;
    background: #57b56f;
    border-radius: 50%;
    width: 160px;
    height: 200px;
    top: 20px;

`

export const TopAvo = styled.div`
    position: absolute;
    background: #57b56f;
    border-radius: 50%;
    height: 100px;
    transform-origin: left top;
    transition: transform 3s;
    width: 90px;

    &:hover {
        transform: rotate(100deg);
    }
`

export const InnerLayer = styled.div`
    position: absolute;
    top: 40px;
    background: #83dc9a;
    border-radius: 50%;
    height: 160px;
    transform-origin: left top;
    transition: transform 3s;
    width: 120px;
`
    
export const Pit = styled.div`
    position: relative;
    top: 88px;
    background: brown;
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
    height: 20px;
    top: 220px;
    position: absolute;
    border-radius: 50%;
    background: #f3f3f3;
`

export const Smile = styled.div`
    top: 47px;
    width: 40px;
    height: 100px;
    border: solid 2px #000;
    position: absolute;
    border-color: transparent transparent #000 transparent;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    transition: transform 3s;

    &:hover {
        transform: scale(2, 1);
    }
`
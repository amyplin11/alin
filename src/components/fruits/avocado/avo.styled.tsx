import styled from '@emotion/styled'
import { Colors } from 'src/styles/colors'

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

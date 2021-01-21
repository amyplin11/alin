import styled from '@emotion/styled'
import { Colors } from 'src/styles/colors'

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

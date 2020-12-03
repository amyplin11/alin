import styled from '@emotion/styled'

import { Widths } from 'src/styles/widths'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 320px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 20px 80px;
  }

  @media only screen and (min-width: ${Widths.MediumScreen}px) {
    padding: 20px 160px;
  }
`

export const Paper = styled.div`
  background-color: #f4f4f4;
  align-self: center;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`

export const ImageLayout = styled.div`
  display: grid;
  grid-template-rows: 400px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
  margin: 20px 0;
`

export const RowImageLayout = styled.div`
  display: grid;
  grid-template-rows: 500px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  margin: 20px 0;
`

export const Picture = styled.div`
  display: grid;
  grid-template-rows: 500px;
  grid-template-columns: 400px;
  justify-self: center;
  align-self: center;
  margin: 20px 0;
`

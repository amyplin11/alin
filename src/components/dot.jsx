import styled from '@emotion/styled'

export const Dot = styled.div`
  height: 20px;
  width: 20px;
  margin: 2px;
  border-radius: 50%;
  padding: 20px;
  background-color: ${props => props.color};
  transition: transform 0.3s linear;

  &:hover {
    transform: translateY(-16px);
  }
`

  
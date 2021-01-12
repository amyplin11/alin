import styled from '@emotion/styled'
import { Colors } from 'src/styles/colors'

export const SourceLink = styled.a`
  text-decoration: none;
  color: ${Colors.Blue500};
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  word-break: break-word;

  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`

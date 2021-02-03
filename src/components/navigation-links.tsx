import React from 'react'
import styled from '@emotion/styled'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'

import { Colors } from 'src/styles/colors'
import { Link as GatsbyLink } from 'gatsby'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const Link = styled(GatsbyLink)`
  color: ${Colors.Green500};
  text-decoration: none;
`

export const NavigationLinks = ({ prev, next }: { prev: any; next: any }) => (
  <Container>
    <div>
      {prev && (
        <Link to={prev.fields.slug}>
          <DoubleLeftOutlined /> Previous
        </Link>
      )}
    </div>

    <div>
      {next && (
        <Link to={next.fields.slug}>
          Next <DoubleRightOutlined />
        </Link>
      )}
    </div>
  </Container>
)

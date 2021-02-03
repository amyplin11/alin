import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { NavigationLinks } from 'src/components/navigation-links'
import { Container, Paper, RowImageLayout } from 'src/components/layouts.styled'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        images {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Text = styled.span`
  color: black;
  font-family: monospace;
  font-size: 16px;
  line-height: 26px;
`
const Title = styled.h1`
  font-size: 32px;
  font-family: monospace;
  font-weight: 500;
  position: absolute;
  z-index: 1;
  color: white;
`

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { prev, next } = pageContext

  return (
    <PageContainer linkColor={Colors.Green500}>
      <Global
        styles={css`
          html {
            color: ${Colors.Green500};
            background-color: ${Colors.White};
          }
        `}
      />
      <Container>
        <Title>{post.frontmatter.title}</Title>
        <RowImageLayout>
          <Img fluid={post.frontmatter.images[0].childImageSharp.fluid} />
          <Img fluid={post.frontmatter.images[1].childImageSharp.fluid} />
        </RowImageLayout>

        <Paper>
          <Text dangerouslySetInnerHTML={{ __html: post.html }} />
        </Paper>
        <NavigationLinks prev={prev} next={next} />
      </Container>
    </PageContainer>
  )
}

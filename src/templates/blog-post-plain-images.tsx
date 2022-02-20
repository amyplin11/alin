import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { Container, RowImageLayout } from 'src/components/layouts.styled'
import { NavigationLinks } from 'src/components/navigation-links'

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
  font-size: 40px;
  font-family: monospace;
  font-weight: 500;
  color: black;
  z-index: 1;
`

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { title, images } = post.frontmatter
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
        <Title>{title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
        <RowImageLayout>
          {images.map(image => {
            return <Img fluid={image.childImageSharp.fluid} />
          })}
        </RowImageLayout>
        <NavigationLinks prev={prev} next={next} />
      </Container>
    </PageContainer>
  )
}

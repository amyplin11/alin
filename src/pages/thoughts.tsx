import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

import { PageContainer } from 'src/components/page-container'
import { Colors } from '../styles/colors'
import { Widths } from 'src/styles/widths'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            images {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Container = styled.div`
  padding: 20px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 50px 100px;
  }
`

const Square = styled(Link)`
  text-decoration: none;
  color: ${Colors.Gray300};
  border: 1px solid ${Colors.Gray100};
  border-radius: 10px;
  padding: 40px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 20px;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 10px;
  margin-bottom: 40px;
  margin-top: 20px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Title = styled.h1`
  font-style: italic;
  color: ${Colors.Gray400};
`

export default function Thoughts({ data }) {
  return (
    <PageContainer linkColor={Colors.Green500}>
      <Global
        styles={css`
          html {
            color: ${Colors.Gray200};
            background-color: ${Colors.White};
          }
        `}
      />
      <Container>
        <Layout>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Square key={node.id} to={node.fields.slug}>
              <Title>{node.frontmatter.title}</Title>
              <p>{node.frontmatter.description}</p>
              {node.frontmatter.date}
            </Square>
          ))}
        </Layout>
      </Container>
    </PageContainer>
  )
}

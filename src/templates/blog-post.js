import React from "react"
import Layout from "../components/layout"
import { Container, Row } from 'react-bootstrap';
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout pageClass="blog-post">
      <Container>
        <main>
          <article>
            <header>
              <h1>{post.title}</h1>
            </header>
            <Row>
              <div dangerouslySetInnerHTML={{ __html: post.content }} class="offset-md-2 col-md-8"/>
            </Row>

          </article>
        </main>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
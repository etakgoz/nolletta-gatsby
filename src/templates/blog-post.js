import React from "react"
import Layout from "../components/layout"
import { Container, Row } from 'react-bootstrap';
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;
  console.log(post);
  return (
    <Layout pageClass="blog-post">
      <Container>
        <main>
          <article>
            <header>
              <h1>{post.title}</h1>
              <p className="byline">by <Link to="/about">E. Tolga Akgoz</Link><time pubdate="true" dateTime={post.date}>{post.date}</time></p>
            </header>
            <Row>
              <div dangerouslySetInnerHTML={{ __html: post.content }} className="col-lg-8 offset-lg-2 col-md-10 offset-md-1"/>
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
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
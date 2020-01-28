import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../components/welcome';
import AboutMe from '../components/about-me';
import { Container, Row } from 'react-bootstrap';

export default ({ data }) => {
  return (
    <Layout pageClass="home">
      <SEO title="home" />
      <Welcome message="Welcome to nolletta."/>
      <AboutMe />
      <Container>
        <Row>
          <div class="blog-posts col-md-8 offset-md-2">
            {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <article className="blog-post">
                <Link to={node.slug}>{node.title}</Link>
                <time pubdate datetime={node.date}>{node.date}</time>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <Link className="small" to={node.slug}>Keep Reading →</Link>
              </article>
            </div>
            ))}
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
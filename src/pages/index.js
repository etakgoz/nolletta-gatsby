import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../components/welcome';
import AboutMe from '../components/about-me';
import { Container } from 'react-bootstrap';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <Welcome message="Welcome to nolletta."/>
      <AboutMe />
      <Container>
      {data.allWordpressPost.edges.map(({ node }) => (
        <section>
          <div key={node.slug}>
            <article>
              <Link to={node.slug}>
                <p>{node.title}</p>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </article>
          </div>
        </section>
      ))}
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
        }
      }
    }
  }
`
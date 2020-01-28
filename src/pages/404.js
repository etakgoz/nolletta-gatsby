import React from "react"
import { Container, Row } from 'react-bootstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageClass="not-found">
    <SEO title="404: Not found" />
    <Container>
      <article>
        <header>
          <h1>404: Page Not Found</h1>
        </header>
        <Row>
          <div class="offset-md-2 col-md-8">
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </Row>

      </article>
    </Container>
  </Layout>
)

export default NotFoundPage

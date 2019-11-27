import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Adeel Here</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/learn">Learn</Link>&nbsp;&nbsp;
    <Link to="/npm-packages">Npm Packages</Link>&nbsp;&nbsp;
    <Link to="/components">Components</Link>&nbsp;&nbsp;
    <Link to="/about/">About</Link><br/>
  </Layout>
)

export default IndexPage

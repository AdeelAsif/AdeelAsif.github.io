import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Components = () => (
  <Layout>
    <SEO title="NPM Packages" />
    <h1>Hi Adeel Here</h1>
    <p>My Components</p>
    <Link to="/">Go Back</Link>
  </Layout>
)

export default Components

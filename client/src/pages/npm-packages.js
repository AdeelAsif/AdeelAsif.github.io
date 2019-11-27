import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NPMPackages = () => (
  <Layout>
    <SEO title="NPM Packages" />
    <h1>Hi Adeel Here</h1>
    <p>My NPM Packages</p>
    <Link to="learn">Go Back</Link>
  </Layout>
)

export default NPMPackages

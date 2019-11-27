import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const LearnJavascript = () => (
  <Layout>
    <SEO title="Javascript" />
    <h1>Hi Adeel Here</h1>
    <p>Welcome to your Javascript Lessons.</p>
    <Link to="learn">Go Back</Link>
  </Layout>
)

export default LearnJavascript

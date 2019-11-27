import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const topics = ["React", "Javascript"];

const Learn = () => (
  <Layout>
    <SEO title="Learn with Me" />
    <h1>Hi Adeel Here</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      {topics.map((topic, index) => {
        return (
          <li key={index}>
            <Link
              to={'learn/'+topic.toLocaleLowerCase()}
            >
              {topic}
            </Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default Learn

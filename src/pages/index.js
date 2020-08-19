import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'

const IndexPage = () => (
  <div style={{backgroundColor:'#A9A9A9'}}>
    <Layout>
      <SEO title="Front End Jr Dev Take Home" />
      <Hero />
    </Layout>
  </div>
)

export default IndexPage

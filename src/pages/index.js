import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Cards from '../components/Cards.jsx';

const IndexPage = () => (
    <Layout>
      <SEO title="Front End Jr Dev Take Home" />
      <Hero />
      <Cards />
    </Layout>
)

export default IndexPage

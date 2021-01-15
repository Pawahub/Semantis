import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Develop from "../components/develop-page/develop"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Страница в разработке"/>
      <Develop/>
    </Layout>
  )
}

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Develop from "../components/develop-page/develop"


const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Страница в разработке"/>
      <Develop/>
    </Layout>
  )
}

export default IndexPage

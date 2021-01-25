import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../components/404"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Страница не найдена" />
    <NotFound/>
  </Layout>
)

export default NotFoundPage

import React, { useState } from "react"
import ReactPageScroller from "react-page-scroller"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Develop from "../components/develop-page/develop"




const IndexPage = () => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
  }


  return (
    <Layout>
      <SEO title="Страница в разработке"/>
      <Develop/>
    </Layout>
  )
}

export default IndexPage

import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import FirstSectionDesign from "../components/design-page/first-section"
import Identity from "../components/design-page/identity"
import Presentations from "../components/design-page/presentations"
import Logo from "../components/design-page/logo"
import Contacts from "../components/home-page/contacts"


const DesignPage = () => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
  }

  if (document.documentElement.clientWidth <= 991) {
    return (
      <Layout>
        <SEO title="Разработка сайтов и веб-приложений"/>
        <FirstSectionDesign/>
        <Identity/>
        <Presentations/>
        <Logo/>
        <Contacts/>
      </Layout>
    )
  } else return (
    <Layout selectedSection={sectionNumber}>
      <SEO title="Разработка сайтов и веб-приложений"/>
      <ReactPageScroller
        customPageNumber={sectionNumber}
        onBeforePageScroll={handleSectionChange}
        renderAllPagesOnFirstRender
        animationTimerBuffer={50}
        animationTimer={750}
      >
        <FirstSectionDesign/>
        <Identity/>
        <Presentations/>
        <Logo/>
        <Contacts/>
      </ReactPageScroller>
    </Layout>
  )
}

export default DesignPage

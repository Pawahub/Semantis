import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import FirstSection from "../components/web-dev/first-section"
import WeWillDo from "../components/web-dev/we-will-do"
import StagesOfCreation from "../components/web-dev/stages-of-creation"
import Case from "../components/web-dev/case"

const IndexPage = () => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
  }

  if (/Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) {
    return (
      <Layout>
        <SEO title="Разработка сайтов и веб-приложений"/>
        <FirstSection/>
        <WeWillDo/>
        <StagesOfCreation/>
        <Case/>
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
        <FirstSection/>
        <WeWillDo/>
        <StagesOfCreation/>
        <Case/>
      </ReactPageScroller>
    </Layout>
  )
}

export default IndexPage

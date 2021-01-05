import React, { useState } from "react"
import PageScroller from "../react-page-scroller-master/src/index"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Home from "../pages/home/home"
import About from "../pages/home/about"
import How from "../pages/home/how"
import Review from "../pages/home/review"
import Contacts from "../pages/home/contacts"

const IndexPage = () => {
  const [sectionNumber, setSectionNumber] = useState(0)

  const handleSectionChange = number => {
    setSectionNumber(number)
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) {
    return (
      <Layout>
        <SEO title="Разработка сайтов и веб-приложений"/>
        <Home/>
        <About/>
        <How/>
        <Review/>
        <Contacts/>
      </Layout>
    )
  } else return (
    <Layout selectedSection={sectionNumber}>
      <SEO title="Разработка сайтов и веб-приложений"/>
      <PageScroller
        customPageNumber={sectionNumber}
        onBeforePageScroll={handleSectionChange}
        renderAllPagesOnFirstRender
        animationTimerBuffer={50}
        animationTimer={750}
      >
        <Home/>
        <About/>
        <How/>
        <Review/>
        <Contacts/>
      </PageScroller>
    </Layout>
  )
}

export default IndexPage

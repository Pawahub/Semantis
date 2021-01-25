import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Home from "../components/home-page/home"
import About from "../components/home-page/about"
import How from "../components/home-page/how"
import Review from "../components/home-page/review"
import Contacts from "../components/home-page/contacts"

const IndexPage = ({ location }) => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
  }

  if (typeof window !== `undefined`) {
    if (/Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) {
      return (
        <Layout location={location}>
          <SEO title="Разработка сайтов и веб-приложений"/>
          <Home/>
          <About/>
          <How/>
          <Review/>
          <Contacts/>
        </Layout>
      )
    } else return (
      <Layout selectedSection={sectionNumber} location={location}>
        <SEO title="Разработка сайтов и веб-приложений"/>
        <ReactPageScroller
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
        </ReactPageScroller>
      </Layout>
    )
  } else return <SEO title="Разработка сайтов и веб-приложений"/>
}

export default IndexPage

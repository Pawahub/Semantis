import React, { useState } from "react"
import ReactPageScroller from "react-page-scroller"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Home from "../components/home/home"
import About from "../components/home/about"
import How from "../components/home/how"
import Review from "../components/home/review"
import Contacts from "../components/home/contacts"

const IndexPage = () => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
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
      <ReactPageScroller
        customPageNumber={sectionNumber}
        pageOnChange={handleSectionChange}
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
}

export default IndexPage

import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"


import FirstSectionSMM from "../components/smm-page/first-section"
import Instacard from "../components/smm-page/instacard"
import CaseInstagram from "../components/smm-page/case-instagram"
import Case from "../components/web-dev/case"
import Contacts from "../components/home-page/contacts"

const SMM = ({location}) => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
  }

  if (document.documentElement.clientWidth <= 991) {
    return (
      <Layout location={location}>
        <SEO title="Разработка сайтов и веб-приложений"/>
        <FirstSectionSMM/>
        <Instacard/>
        <CaseInstagram/>
        <Case/>
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
        <FirstSectionSMM/>
        <Instacard/>
        <CaseInstagram/>
        <Case/>
        <Contacts/>
      </ReactPageScroller>
    </Layout>
  )
}

export default SMM

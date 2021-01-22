import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"


import Contacts from "../components/home-page/contacts"
import FirstSectionSMM from "../components/smm-page/first-section"
import Instacard from "../components/smm-page/instacard"
import CaseInstagram from "../components/smm-page/case-instagram"
import Case from "../components/web-dev/case"

const SMM = () => {
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
        <FirstSectionSMM/>
        <Instacard/>
        <CaseInstagram/>
        <Case/>
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

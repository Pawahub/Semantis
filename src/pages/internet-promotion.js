import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import FirstSectionIP from "../components/internet-promotion/first-section"
import OptimizationSite from "../components/internet-promotion/optimization-site"
import TargetedAdvertising from "../components/internet-promotion/targeted-advertising"
import ContextualAdvertising from "../components/internet-promotion/contextual-advertising"
import Contacts from "../components/home-page/contacts"

const InternetPromotionPage = ({ location }) => {
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
          <SEO title="Продвижение в интернете"/>
          <FirstSectionIP/>
          <OptimizationSite/>
          <TargetedAdvertising/>
          <ContextualAdvertising/>
          <Contacts/>
        </Layout>
      )
    } else return (
      <Layout selectedSection={sectionNumber} location={location}>
        <SEO title="Продвижение в интернете"/>
        <ReactPageScroller
          customPageNumber={sectionNumber}
          onBeforePageScroll={handleSectionChange}
          renderAllPagesOnFirstRender
          animationTimerBuffer={50}
          animationTimer={750}
        >
          <FirstSectionIP/>
          <OptimizationSite/>
          <TargetedAdvertising/>
          <ContextualAdvertising/>
          <Contacts/>
        </ReactPageScroller>
      </Layout>
    )
  } else return <SEO title="Продвижение в интернете"/>
}

export default InternetPromotionPage

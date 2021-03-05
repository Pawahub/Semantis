import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Home from "../components/home-page/home"
import About from "../components/home-page/about"
import How from "../components/home-page/how"
import Testimonials from "../components/home-page/testimonials"
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
          <SEO title="Веб-студия"/>
          <Home/>
          <About/>
          <How/>
          <Testimonials/>
          <Contacts/>
        </Layout>
      )
    } else return (
      <Layout selectedSection={sectionNumber} location={location}>
        <SEO title="Веб-студия"
        />
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
          <Testimonials/>
          <Contacts/>
        </ReactPageScroller>
      </Layout>
    )
  } else return (
    <>
      <SEO title="Веб-студия"
           description="Разработка сайтов и веб-приложений. Оптимизация, поддержка и продвижение сайтов. Дизайн. Продвижение в соц.сетях."
      />
      <main style={{ opacity: 0 }}>
        <h1>Веб-студия</h1>
        <p> Мы не просто специализируемся на создании сайтов, а создаём лицо вашей компании, которое захочет видеть ваш
          клиент. Мы помогаем бизнесу достигать новые высоты благодаря правильному позиционированию в интернете. Даём
          возможность даже небольшим компаниям выглядеть конкурентоспособными и внушать доверие своим клиентам.

          Нам нравится видеть как результат своей работы благодарность клиентов. Наши клиенты — компании из разных
          стран:
          США, Канады, России, и разных сфер бизнеса, от розничной торговли до строительства заводов и создания
          телекоммуникационных сетей.

          Мы всегда готовы предложить комплексные решения по целому ряду digital-услуг. Таким образом, мы закрываем все
          вопросы своих клиентов без привлечения специалистов на аутсорсинге и без дополнительных затрат. Вдобавок наши
          клиенты получают не только желаемый результат, но и полную техническую и информационную поддержку по всем
          направлениям.

          Мы всегда выполняем все условия контракта. На протяжении всего проекта поддерживаем связь с заказчиком и
          постоянно информируем о прогрессе на наиболее важных этапах. Строго соблюдаем условия о неразглашении
          коммерческой тайны. И выполняем свою работу точно в срок.
        </p>
      </main>
    </>
  )
}

export default IndexPage

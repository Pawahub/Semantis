import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import FirstSectionDesign from "../components/design-page/first-section"
import Identity from "../components/design-page/identity"
import Presentations from "../components/design-page/presentations"
import Logo from "../components/design-page/logo"
import Contacts from "../components/home-page/contacts"

const DesignPage = ({ location }) => {
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
          <SEO title="Дизайн"/>
          <FirstSectionDesign/>
          <Identity/>
          <Presentations/>
          <Logo/>
          <Contacts/>
        </Layout>
      )
    } else return (
      <Layout selectedSection={sectionNumber} location={location}>
        <SEO title="Дизайн"/>
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
  } else return (
    <>
      <SEO title="Дизайн"
           description="Веб-дизайн. Разработка логотипа. Создание фирменного стиля. Создание презентаций. Создание рекламных баннеров и промороликов. Оформление профиля в социальных сетях."
      />
      <main className="opacity">
        <h1>Дизайн</h1>
        <p>Сайт компании выглядит не современно и похож на множество других? Снизилось
          количество посетителей? Оптимальное решение — сделать редизайн сайта.
          Это возможность улучшить образ и имидж компании в глазах клиента, привлечь новых
          посетителей и удержать старых, открыть компанию с новой стороны и увеличить объём
          продаж.
        </p>
        <p>Логотип — уникальный символ компании. Он раскрывает целостный образ бренда, его идеи,
          философию и имидж.

          Мы создадим для вас эффективный логотип, который будет:
          - простым и понятным для потребителя
          - выделяться и закрепляться в памяти с первого взгляда
          - соответствовать целям и задачам компании
          - формировать образ надежной, стабильной компании со своим неповторимым лицом
        </p>
        <p>То, что помогает идентифицировать вас как бренд и увеличить узнаваемость.
          Это фундамент, на котором строится маркетинговая стратегия компании.

          Здесь решающее значение имеет дизайн, который начинается с логотипа и
          прослеживается в визитках, на сайте, в бланках документов и в презентациях.

          Ваш собственный фирменный стиль поможет не затеряться среди конкурентов,
          запомниться клиентам, создать положительный имидж организации и увеличить
          доверие к вашему бренду.
        </p>
        <p>Презентация — возможность эффектно презентовать себя в любой
          сфере бизнеса в доступной форме. Визуальный ряд из грамотного
          текста с графическими композициями, оформленный в вашем
          фирменном стиле, способен повысить статус вашей компании и вызвать
          интерес у ваших деловых партнёров.

          С помощью презентации мы подчеркнём вашу экспертность, выделим
          ваши сильные стороны, сосредоточим внимание клиента на выгодах от
          сотрудничества с вами, повысим лояльность к вашему продукту.
        </p>
      </main>
    </>
  )
}

export default DesignPage

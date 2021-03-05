import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import FirstSectionIP from "../components/internet-promotion/first-section"
import OptimizationSite from "../components/internet-promotion/optimization-site"
import ContextualAdvertising from "../components/internet-promotion/contextual-advertising"
import TargetedAdvertising from "../components/internet-promotion/targeted-advertising"
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
          <ContextualAdvertising/>
          <TargetedAdvertising/>
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
          <ContextualAdvertising/>
          <TargetedAdvertising/>
          <Contacts/>
        </ReactPageScroller>
      </Layout>
    )
  } else return (
    <>
      <SEO title="Продвижение в интернете"
           description="Контекстная реклама. Таргетированная реклама. Оптимизация сайта. Продвижение сайта в Google. Продвижение сайта в Яндекс. Продвижение в социальных сетях."
      />
      <main style={{ opacity: 0 }}>
        <h1>Продвижение в интернете</h1>
        <p>Сделаем seo для вашего сайта. Поднимем на верхние позиции в поисковой выдаче.
          SEO (Search Engine Optimization) — комплекс мер по оптимизации сайта для улучшения позиции в выдаче поисковых
          систем по определённым запросам и увеличения скорости его работы, а именно:
          - Оптимизация кода;
          - Регистрация в каталогах поисковых систем;
          - Создание микроразметки;
          - Создание сниппетов;
          - Создание внешних ссылок;
          - Работа над контентом.
        </p>
        <p>Настройка и запуск таргетированной рекламы.
          Таргетинг даёт возможность не только увеличить продажи, но и продавать легко. Мы настроим её на вашу целевую
          аудиторию по
          заданным параметрам: пол, возраст, геолокация и т.д., что позволит большинству потенциальных клиентов прийти
          именно к вам.
          Преимущества таргетированной рекламы:
          1) Охват только целевой аудитории.
          2) Низкий порог входа (можно запустить кампанию с небольшими вложениями).
          3) Четкий измеримый результат (все данные о рекламных кампаниях качественно предоставляются в личных рекламных
          кабинетах, выгружаются в удобных форматах).
        </p>
        <p>Настройка и запуск контекстной рекламы.
          Контекстная реклама показывается пользователям, которые уже ищут рекламируемый товар. Её цель — моментально
          зацепить аудиторию,
          которая кликает по вашему объявлению, переходит на сайт и заказывает товар или услугу. Тем самым контекстная
          реклама даёт нужный результат вашему бизнесу. Гибкое управление бюджетом и настройками.
          Преимущества контекстной рекламы:
          1) Быстрая отдача вложенных инвестиций.
          2) Возможность оперативно отслеживать статистику и вносить корректировки.
        </p>
        <p>Продвижение в социальных сетях.
          Социальные сети — эффективный маркетинговый канал для продвижения брендов, который помогает привлечь новых
          клиентов, познакомить целевую аудиторию с вашими товарами (услугами) и выявить её предпочтения.

          Вместе мы станем одной командой, нацеленной на создание имиджа компании, повышения лояльности клиентов и
          увеличения количества заявок.

          Продвижение в соцсетях SMM Гарантируем положительную динамику уже в первый месяц работы с нами.
        </p>
      </main>
    </>
  )
}

export default InternetPromotionPage

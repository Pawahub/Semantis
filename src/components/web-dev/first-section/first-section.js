import React from "react"
import QuizBtn from "../../buttons/quizBtn"
import SectionLeftRight from "../../section-left-right"

import macBook from "../../../images/web-dev/macBook.jpg"
import item1 from "../../../images/web-dev/item1.svg"
import item2 from "../../../images/web-dev/item2.svg"

import "./first-section.sass"

export default function FirstSection() {
  const right = (
    <div className="container fist-section">
      <div className="row justify-content-end">
        <div className="col-lg-5 col-md-6 col-sm-12 d-flex flex-column align-items-start">
          <h1>Разработка сайтов</h1>
          <p>Мы поможем вам определиться с типом сайта, продумать взаимодействие с пользователями и сделать сайт
            функциональным, удобным и привлекательным для пользователя с учетом ваших бизнес-целей. Ещё до начала работы
            над проектом мы собираем данные и детально прорабатываем все вопросы, связанные с вашим
            видом деятельности.
          </p>
          <QuizBtn/>
        </div>
      </div>
    </div>
  )
  const left = (
    <>
      <div className="section-img section50 section50-left">
        <img className="img-responsive" src={macBook} alt="Разработка сайтов"/>
      </div>
      <div className="item-img item-img__1">
        <img src={item1} alt="Semantis"/>
      </div>
      <div className="item-img item-img__2">
        <img src={item2} alt="Semantis"/>
      </div>
    </>
  )

  return (
    <SectionLeftRight left={left} right={right}/>
  )
}
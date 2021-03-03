import React from "react"
import SectionLeftRight from "../../section-left-right"
import QuizBtn from "../../buttons/quizBtn"

import dots from "../../../images/internet-promotion/dots.png"
import mac from "../../../images/internet-promotion/mac2.png"
import ellipse1 from "../../../images/internet-promotion/ellipse1.png"
import ellipse2 from "../../../images/internet-promotion/ellipse2.png"

import "./first-section.sass"

export default function FirstSectionIP() {

  const list = (arr) => {
    return arr.map((el, idx) => {
      return (
        <li key={idx}>
          <div className="number"><span>{idx < 10 ? "0" + (idx + 1) : idx + 1} </span><strong>&#8228;</strong></div>
          <span className="span-child">{el}</span>
        </li>
      )
    })
  }

  const left = (
    <div className="first-section-IP section50 section50-left">
      <div className="first-section-IP__elements">
        <img className="mac" src={mac} alt="mac"/>
        <img className="dots-img" src={dots} alt="dots"/>
      </div>
    </div>
  )
  const right = (
    <div className="container first-section-IP">
      <img className="ellipse1" src={ellipse1} alt="ellipse1"/>
      <img className="ellipse2" src={ellipse2} alt="ellipse2"/>

      <div className="row justify-content-end">
        <div className="col-lg-7 col-md-8">
          <div className="first-section-IP__content">
            <h1>Продвижение <br/>
              <span>в интернете</span></h1>
            <p>Сайт есть, но не работает так, как хотелось бы? Клиенты не могут найти информацию о вас?
              Сделайте свой бизнес заметнее. <br/>
              Мы можем заняться продвижением вашего бизнеса в интернете, даже если у вас нет сайта.</p>
            <ul className="home-list">
              {list(["Оптимизация сайта", "Контекстная реклама", "Таргетированная реклама"])}
            </ul>
            <QuizBtn/>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SectionLeftRight left={left} right={right}/>
  )
}
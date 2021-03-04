import React, { useContext } from "react"
import { StateContext } from "../../../state/stateCotext"
import SectionLeftRight from "../../section-left-right"
import List from "../../list"

import seo from "../../../images/internet-promotion/seo.png"

import "./optimization-site.sass"

export default function OptimizationSite() {
  const { dispatch } = useContext(StateContext)

  const listArr = [
    "Регистрация в каталогах поисковых систем",
    "Добавление микроразметки",
    "Создание сниппетов",
    "Наращивание ссылочной массы",
    "Оптимизация тегов и мета-тегов",
    "Работа над контентом"
  ]

  const left = (
    <div className="optimization-site section50 section50-left">
      <div className="container">
        <div className="row justify-content-start">
          <h2>Оптимизация <span>сайта</span></h2>
          <div className="optimization-site__content">
            <p>SEO (Search Engine Optimization) — комплекс мер по оптимизации сайта для
              улучшения позиции в выдаче поисковых систем по определённым запросам и
              увеличения скорости его работы, а именно:
            </p>
            <List listArr={listArr}/>
            <button className="mainBtn whiteBtn align-self-md-start"
                    onClick={() => dispatch({ type: "open", payload: "lead" })}>
              Получить предложение
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const right = (
    <div className="optimization-site section50 section50-right">
      <img src={seo} alt="seo"/>
    </div>
  )

  return (
    <SectionLeftRight
      left={left}
      right={right}
    />
  )
}
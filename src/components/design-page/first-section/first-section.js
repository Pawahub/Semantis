import React, { useContext } from "react"
import { StateContext } from "../../../state/stateCotext"

import drop from "../../../images/design/drop.png"
import drops from "../../../images/design/drops.png"
import laptop from "../../../images/design/laptop.png"

import "./first-section.sass"


export default function FirstSectionDesign() {
  const { dispatch } = useContext(StateContext)

  const elements = (
    <div className="first-section-design__elements">
      <div>
        <img src={drop} className="drop" alt="drop"/>
        <img src={drops} className="drops" alt="drops"/>
        <img src={laptop} className="laptop" alt="laptop"/>
      </div>
    </div>
  )

  return (
    <section className="first-section-design">
      {window.innerWidth >= 990 ? elements : null}
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8 col-lg-6 d-flex flex-column">
            <h1>Дизайн сайта</h1>
            <p>Сайт компании выглядит не современно и похож на множество других?<br/>
              Снизилось количество посетителей?<br/><br/>
              Оптимальное решение — <b>сделать редизайн сайта!</b> Это возможность улучшить образ и имидж компании в глазах
              клиента, привлечь новых посетителей и удержать старых, открыть компанию с новой
              стороны.</p>
            <button className="mainBtn whiteBtn mt-3 align-self-md-start"
                    onClick={() => dispatch({ type: "open", payload: "lead" })}>
              Получить предложение
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
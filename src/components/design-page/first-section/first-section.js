import React from "react"
import './first-section.sass'
import drop from '../../../images/design/drop.png'
import drops from '../../../images/design/drops.png'
import laptop from '../../../images/design/laptop.png'
export default function FirstSectionDesign() {
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
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="h1">Дизайн сайта</h1>
            <p>Сайт компании выглядит не современно и похож на множество других?
              Снизилось количество посетителей? Оптимальное решение — сделать редизайн сайта.
              Это возможность улучшить образ и имидж компании в глазах клиента,
              привлечь новых посетителей и удержать старых, открыть компанию с новой
              стороны и увеличить объём продаж.</p>
              {/*//todo(добавить кнопку заявки)*/}
          </div>
        </div>
      </div>
    </section>
  )
}
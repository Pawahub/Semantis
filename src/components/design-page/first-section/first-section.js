import React from "react"
import './first-section.sass'
export default function FirstSectionDesign() {
  return (
    <section className="first-section-design">
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
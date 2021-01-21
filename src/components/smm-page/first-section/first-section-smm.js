import React from "react"
import './first-section-smm.sass'
import likes from '../../../images/smm/likes.png'
import dots from '../../../images/smm/dots.svg'
import dots1 from "../../../images/design/dots1.svg"
import polygon from "../../../images/design/polygon.png"
import ellipse2 from "../../../images/design/ellipse2.png"

export default function FirstSectionSMM() {
  const right = (
    <div className="smm__elements">
      <div>
        <img src={likes} alt="likes"/>
      </div>
      <img className="smm-dots" src={dots} alt="dots"/>
    </div>
  )
  return (
    <section className="smm">
      {window.innerWidth >= 990 ? right : null}
      <img src={dots1} className='dots1' alt="dots1"/>
      <img src={polygon} className='polygon' alt="polygon"/>
      <img src={ellipse2} className='ellipse2' alt="ellipse2"/>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-4">
            <h1 className="h1">SMM</h1>
            <p>Социальные сети — эффективный маркетинговый канал для продвижения брендов,
              который помогает привлечь новых клиентов, познакомить целевую аудиторию с
              вашими товарами (услугами) и выявить её предпочтения.
            </p>
            <p>Вместе мы станем одной командой, нацеленной на создание имиджа компании,
              повышения лояльности клиентов и увеличения количества заявок.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
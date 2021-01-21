import React from "react"
import './instacard.sass'
import card1 from '../../../images/smm/card1.png'
import card2 from '../../../images/smm/card2.png'
import ellipse from '../../../images/smm/ellipse.svg'
export default function Instacard() {
  const element = (
    <div className="instacard__elements">
      <div>
        <img className="card1" src={card1} alt="card1"/>
        <img className="card2" src={card2} alt="card2"/>
        <img className="ellipse" src={ellipse} alt="ellipse"/>
      </div>
    </div>
  )
  return (
    <section className="instacard">
      {window.innerWidth >= 990 ? element : null}
      <div className="container">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-md-8 col-lg-6">
            <h2 className="h1">Instacard</h2>
            <p>
              Инстаграм-визитка — это пластиковая карта класса премиум с уникальным дизайном,
              оформленная в вашем фирменном стиле. Она всегда находится с вами, дополняет ваш
              имидж и подчеркивает статус. Но самое главное — это удобный способ поделиться своими
              контактами. Просто подносите карту к телефону вашего собеседника, и открывается ваш Instagram.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
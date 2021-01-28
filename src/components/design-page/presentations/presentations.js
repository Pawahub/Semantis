import React from "react"
import "./presentations.sass"
import dots from "../../../images/design/dots.svg"
import items from "../../../images/design/items.png"
import cart1 from "../../../images/design/cart1.png"
import cart2 from "../../../images/design/cart2.png"
import cart3 from "../../../images/design/cart3.png"
import sircle2 from "../../../images/design/sircle2.png"

export default function Presentations() {
  const elements = (
    <div className="presentations__elements">
      <div>
        <img className="dots1" src={dots} alt="dots"/>
        <img className="items" src={items} alt="items"/>
        <div className="group">
          <img className="cart1" src={cart1} alt="cart1"/>
          <img className="cart2" src={cart2} alt="cart2"/>
          <img className="cart3" src={cart3} alt="cart3"/>
          <img className="sircle2" src={sircle2} alt="sircle2"/>
        </div>
      </div>
    </div>
  )
  return (
    <section className="presentations">
      {window.innerWidth >= 990 ? elements : (
        <img className="dots1" src={dots} alt="dots"/>
      )}
      <div className="container">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-md-8 col-lg-6">
            <h2 className="h1">Презентации</h2>
            <p>Презентация — возможность эффектно презентовать себя в любой сфере бизнеса в доступной форме.
              Визуальный ряд из грамотного текста с графическими композициями, оформленный в вашем фирменном стиле,
              способен повысить статус вашей компании и вызвать интерес у ваших деловых партнёров.
            </p>
            <p>С помощью презентации мы подчеркнём вашу экспертность, выделим ваши сильные стороны, сосредоточим
              внимание клиента на выгодах от сотрудничества с вами, повысим лояльность к вашему продукту.</p>
            {/*//todo(добавить кнопку)*/}
          </div>
        </div>
      </div>
    </section>
  )
}
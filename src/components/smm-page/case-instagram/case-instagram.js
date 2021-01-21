import React from "react"
import './case-instagram.sass'
import img1 from '../../../images/smm/inst1.png'
import img2 from '../../../images/smm/inst2.png'
import dots from "../../../images/smm/dots.svg"
export default function CaseInstagram() {
  return (
    <section className="case-instagram">
      <div className="row">
        <div className="col-md-6 order-md-0 order-1">
          <div className="case-instagram__images">
            <img src={img1} alt="img1"/>
            <img src={img2} alt="img2"/>
            <img className="smm-dots" src={dots} alt="dots"/>
          </div>
        </div>
        <div className="col-md-6 order-md-1 order-0">
          <h2 className="h1">Упаковка <span> Instagram</span></h2>
          <p>Сегодня Instagram — это, прежде всего, отличная рекламная площадка с
            широчайшим охватом аудитории.
          </p>
          <p>Не воспользоваться таким эффективным средством — осознанно ограничить
            возможность маркетинговой стратегии и упустить потенциальных клиентов.
          </p>
          <p>Доверив нам свой Instagram аккаунт, вы выйдете на новый уровень, улучшите
            свой имидж и привлечете новую целевую аудиторию.</p>
        </div>
      </div>
    </section>
  )
}
import React from "react"
import './identity.sass'
import bg from '../../../images/design/bg.jpg'
import blue from '../../../images/design/blue.png'
import color from '../../../images/design/color.png'
export default function Identity() {
  const elements = (
    <div className="identity__elements">
      <div className="items">
        <img src={blue} className="blue" alt="blue"/>
        <img src={color} className="color" alt="color"/>
      </div>
    </div>
  )
  return (
    <section
      className="identity"
      style={window.innerWidth >= 990 ? {backgroundImage: `url(${bg})`} : null}>
      {window.innerWidth >= 990 ? elements : null}
      <div className="container">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-md-8 col-lg-6">
            <h2 className="h1">Айдентика</h2>
            <p>Айдентика помогает идентифицировать вас как бренд и увеличить
              узнаваемость. Это фундамент, на котором строится маркетинговая стратегия компании.
              Здесь решающее значение имеет дизайн, который начинается с логотипа и
              прослеживается в визитках, на сайте, в бланках документов  и в презентациях.
              Ваш собственный фирменный стиль поможет не затеряться среди конкурентов,
              запомниться клиентам, создать положительный имидж организации и увеличить
              доверие к вашему бренду.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
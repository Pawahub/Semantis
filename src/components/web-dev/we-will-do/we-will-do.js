import React from "react"
import "./we-will-do.sass"
import SectionLeftRight from "../../section-left-right"
import macBook3 from "../../../images/web-dev/macBook3.jpg"
import macBook4 from "../../../images/web-dev/macBook4.jpg"
import line1 from "../../../images/web-dev/line1.svg"
import line2 from "../../../images/web-dev/line2.svg"
import ellipse from "../../../images/web-dev/ellipse.svg"
import polygon from "../../../images/web-dev/polygon.svg"

export default () => {

  const list = (arr) => {
    return arr.map((el, idx) => {
      return (
        <li key={idx}>
          <div className="number"><span>{idx < 10 ? "0" + (idx + 1) : idx + 1} </span><strong>&#8228;</strong></div>
          <span>{el}</span>
        </li>
      )
    })
  }

  const left = (
    <>
      <div className="container we-will-do">
        <div className="row justify-content-md-start justify-content-sm-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <h1 className='h1'>Вы можете у нас заказать сайт:</h1>
            <ul className="home-list">
              {list(["Имиджевый сайт", "Промо-сайт", "Корпоративный сайт", "Сайт-визитку",
                "Онлайн-сервис", "Интернет-магазин", "Продающую страницу"])}
            </ul>
          </div>
        </div>
      </div>
      <div className="we-will-do__left">
        <div className="we-will-do__left-img1">
          <img src={ellipse} alt="ellipse"/>
        </div>
        <div className="we-will-do__left-img2">
          <img src={polygon} alt="polygon"/>
        </div>
        <div className="we-will-do__left-img3">
          <img src={ellipse} alt="ellipse"/>
        </div>
      </div>
    </>
  )

  const right = (
    <div className="section50 section50-right we-will-do__right">
      <div className="we-will-do__right-img1">
        <img src={macBook3} alt="Semantis"/>
      </div>
      <div className="we-will-do__right-img2">
        <img src={macBook4} alt="Semantis"/>
      </div>
      <div className="we-will-do__right-line1">
        <img src={line1} alt="line1"/>
      </div>
      <div className="we-will-do__right-line2">
        <img src={line2} alt="line2"/>
      </div>
    </div>
  )
  return (
    <SectionLeftRight left={left} right={right}/>
  )
}
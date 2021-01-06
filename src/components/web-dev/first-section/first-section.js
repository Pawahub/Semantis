import React from "react"
import './first-section.sass'
import macBook from "../../../images/web-dev/macBook.jpg"
import item1 from "../../../images/web-dev/item1.svg"
import item2 from "../../../images/web-dev/item2.svg"
import SectionLeftRight from "../../section-left-right"
import { ButtonCviz } from "../../buttons"

export default function FirstSection() {
  const right = (
    <div className="container fist-section">
      <div className="row justify-content-end">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <h1 className='h1'>Разработка <br/>сайтов</h1>
          <p>Мы поможем вам определиться с типом сайта, продумать взаимодействие с пользователями и сделать сайт привлекательным для потребителя с учетом ваших бизнес-целей.
            До начала работы над проектом мы собираем данные и детально прорабатываем все вопросы, связанные с видом деятельности нашего заказчика.
          </p>
          <ButtonCviz/>
        </div>
      </div>
    </div>
  )
  const left = (
    <>
      <div className="section-img section50 section50-left">
        <img className='img-responsive' src={macBook} alt="Разработка сайтов"/>
      </div>
      <div className="item-img item-img__1">
        <img src={item1} alt="Semantis"/>
      </div>
      <div className="item-img item-img__2">
        <img src={item2} alt="Semantis"/>
      </div>
    </>
  )

  return (
    <SectionLeftRight left={left} right={right}/>
  )
}
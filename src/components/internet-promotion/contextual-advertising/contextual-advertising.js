import React from "react"
import "./contextual-advertising.sass"
import List from "../../list"

import dots from "../../../images/internet-promotion/dots.svg"
import sircl from "../../../images/internet-promotion/sircl.svg"
import laptop from "../../../images/internet-promotion/laptop.png"

export default function ContextualAdvertising() {
  const listArr = [
    "Гибкое управление бюджетом и настройками",
    "Быстрая отдача вложенных инвестиций",
    "Возможность оперативно отслеживать статистику и вносить корректировки"
  ]

  const elements = (
    <div className="contextual-advertising__elements">
      <img src={dots} className="dots" alt="dots"/>
      <img src={sircl} className="sircl" alt="sircl"/>
      <img src={laptop} className="laptop" alt="laptop"/>
    </div>
  )

  return (
    <section className="contextual-advertising">
      {window.innerWidth >= 990 ? elements : null}
      <div className="container">
        {window.innerWidth <= 990 ? (
          <img src={dots} className="dots" alt="dots"/>
        ) : null}
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-md-8 col-lg-6">
            <h2>Контекстная <span>реклама</span></h2>
            <p>
              Показывается пользователям, которые уже ищут рекламируемый товар.
              Её цель — моментально зацепить аудиторию, которая кликает по вашему объявлению,
              переходит на сайт и заказывает товар или услугу.
              Тем самым контекстная реклама даёт нужный результат вашему бизнесу.
            </p>
            <List listArr={listArr}/>
          </div>
        </div>
      </div>
    </section>
  )
}
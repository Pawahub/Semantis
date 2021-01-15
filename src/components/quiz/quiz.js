import React, { useState } from "react"
import { rippleEffect } from "../main"

export default () => {
  const [state, setState] = useState(1)

  const handleQuiz = (e, direction) => {
    rippleEffect(e)
    setTimeout( () => {
      direction === "prev" ? setState(state - 1) : setState(state + 1)
    }, 500)
  }

  const [quizData, setQuizData] = useState({
    step1: null,
    step2: null,
    step3: null,
    step4: null
  })

  const handleCheckbox = (e) => {
    for (let key in quizData) {
      if (key === e.target.name) setQuizData({ ...quizData, [key]: e.target.value })
    }
  }

  const firstSection = (
    <div className="d-flex flex-column">
      Какой тип сайта вас интересует?
      <div className="checkbox mt-3">
        <input
          id="CV"
          name="step1"
          type="radio"
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="step1"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="step1"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="step1"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="step1"
          type="radio"
          value="Онлайн-сервис"/>
        <label htmlFor="OS">Онлайн-сервис</label>
      </div>
    </div>
  )

  const secondSection = (
    <div className="d-flex flex-column">
      Какой функционал необходимо реализовать на сайте?
      <div className="checkbox mt-3">
        <input
          id="CV"
          name="step2"
          type="radio"
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="step2"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="step2"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="step2"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="step2"
          type="radio"
          value="Онлайн-сервис"/>
        <label htmlFor="OS">Онлайн-сервис</label>
      </div>
    </div>
  )

  const thirdSection = (
    <div className="d-flex flex-column">
      Какой тип сайта вас интересует?
      <div className="checkbox mt-3">
        <input
          id="CV"
          name="step3"
          type="radio"
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="step3"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="step3"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="step3"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="step3"
          type="radio"
          value="Онлайн-сервис"/>
        <label htmlFor="OS">Онлайн-сервис</label>
      </div>
    </div>
  )

  const fourthSection = (
    <div className="d-flex flex-column">
      Какой тип сайта вас интересует?
      <div className="checkbox mt-3">
        <input
          id="CV"
          name="step4"
          type="radio"
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="step4"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="step4"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="step4"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="step4"
          type="radio"
          value="Онлайн-сервис"/>
        <label htmlFor="OS">Онлайн-сервис</label>
      </div>
    </div>
  )

  console.log(quizData)

  return (
    <form name="quiz" className="p-3 col-6 border-top" onClick={e => handleCheckbox(e)}>
      {state === 1 ? firstSection : null}
      {state === 2 ? secondSection : null}
      {state === 3 ? thirdSection : null}
      {state === 4 ? fourthSection : null}

      <div className="d-flex justify-content-between">
        {state === 1 ? null :
          <button type="button" className="mainBtn mr-3" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
        }
        {state === 4 ?
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Отправить</button> :
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "submit")}>Далее</button>
        }
      </div>
    </form>
  )
}

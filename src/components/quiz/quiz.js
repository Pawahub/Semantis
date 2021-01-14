import React, { useState } from "react"
import { rippleEffect } from "../main"

export default () => {
  const [state, setState] = useState(1);
  const [value, setValue] = useState({
    site1: null,
    site2: null,
    site3: null,
    site4: null
  })

  // const [quizData, setQuizData] = useState({
  //   name: {
  //     value: "",
  //     isValid: false
  //   },
  //   phone: {
  //     value: "",
  //     isValid: false
  //   },
  //   email: {
  //     value: "",
  //     isValid: false
  //   },
  //   message: "",
  //   copy: false
  // })

  // const handleCheckbox = e => {
  //   for (let key in quizData) if (key === e.target.name) setQuizData({ ...quizData, [key]: !quizData.copy })
  // }

  const handleQuiz = (e, direction) => {
    rippleEffect(e)
    if (direction == 'prev') {
      setState(state - 1)
    } else {setState(state + 1)}

  }
  const handleCheckbox = (e) => {
    if (e.target.tagName !== 'INPUT') return
    const val = e.target.value;
    switch (e.target.name) {
      case 'site1':
        setValue({
          ...value,
          site1: val
        })
        break;
      case 'site2':
        setValue({
          ...value,
          site2: val
        })
        break;
      case 'site3':
        setValue({
          ...value,
          site3: val
        })
        break;
      case 'site4':
        setValue({
          ...value,
          site4: val
        })
        break;
    }
  }
  console.log(value)

  const firtsSection = (
    <div className="d-flex flex-column">
      Какой тип сайта вас интересует?
      <div className="checkbox mt-3">
        <input
          id="CV"
          name="site1"
          type="radio"
          checked={}
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="site1"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="site1"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="site1"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="site1"
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
            name="site2"
            type="radio"
            value="Сайт-визитка"/>
          <label htmlFor="CV">Сайт-визитка</label>
        </div>
        <div className="checkbox">
          <input
            id="EC"
            name="site2"
            type="radio"
            value="Интернет-магазин"/>
          <label htmlFor="EC">Интернет-магазин</label>
        </div>
        <div className="checkbox">
          <input
            id="LP"
            name="site2"
            type="radio"
            value="Продающая страница"/>
          <label htmlFor="LP">Продающая страница</label>
        </div>
        <div className="checkbox">
          <input
            id="CS"
            name="site2"
            type="radio"
            value="Корпоративный сайт"/>
          <label htmlFor="CS">Корпоративный сайт</label>
        </div>
        <div className="checkbox">
          <input
            id="OS"
            name="site2"
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
          name="site3"
          type="radio"
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="site3"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="site3"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="site3"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="site3"
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
          name="site4"
          type="radio"
          value="Сайт-визитка"/>
        <label htmlFor="CV">Сайт-визитка</label>
      </div>
      <div className="checkbox">
        <input
          id="EC"
          name="site4"
          type="radio"
          value="Интернет-магазин"/>
        <label htmlFor="EC">Интернет-магазин</label>
      </div>
      <div className="checkbox">
        <input
          id="LP"
          name="site4"
          type="radio"
          value="Продающая страница"/>
        <label htmlFor="LP">Продающая страница</label>
      </div>
      <div className="checkbox">
        <input
          id="CS"
          name="site4"
          type="radio"
          value="Корпоративный сайт"/>
        <label htmlFor="CS">Корпоративный сайт</label>
      </div>
      <div className="checkbox">
        <input
          id="OS"
          name="site4"
          type="radio"
          value="Онлайн-сервис"/>
        <label htmlFor="OS">Онлайн-сервис</label>
      </div>
    </div>
  )
  return (
    <form name="quiz" className="p-3 col-6 border-top" onClick={e => handleCheckbox(e)}>
      {state === 1 ? firtsSection : null}
      {state === 2 ? secondSection : null}
      {state === 3 ? thirdSection : null}
      {state === 4 ? fourthSection : null}

      <div className="d-flex justify-content-between">
        {state === 1 ? null : (
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
        )}
        {state === 4 ? null : (
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее</button>
        )}
      </div>

    </form>
  )
}

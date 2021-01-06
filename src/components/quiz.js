import React from "react"
import { rippleEffect } from "./main"

export default () => {
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
    // console.log("следующая страница")
  }

  return (
    <form name="quiz" className="p-3 col-6 border-top">
      <div className="d-flex flex-column">
        Какой тип сайта вас интересует?
        <div className="checkbox mt-3">
          <input
            id="CV"
            name="site"
            type="radio"
            value="Сайт-визитка"/>
          <label htmlFor="CV">Сайт-визитка</label>
        </div>
        <div className="checkbox">
          <input
            id="EC"
            name="site"
            type="radio"
            value="Интернет-магазин"/>
          <label htmlFor="EC">Интернет-магазин</label>
        </div>
        <div className="checkbox">
          <input
            id="LP"
            name="site"
            type="radio"
            value="Продающая страница"/>
          <label htmlFor="LP">Продающая страница</label>
        </div>
        <div className="checkbox">
          <input
            id="CS"
            name="site"
            type="radio"
            value="Корпоративный сайт"/>
          <label htmlFor="CS">Корпоративный сайт</label>
        </div>
        <div className="checkbox">
          <input
            id="OS"
            name="site"
            type="radio"
            value="Онлайн-сервис"/>
          <label htmlFor="OS">Онлайн-сервис</label>
        </div>
        <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее</button>
      </div>
      <div className="d-flex flex-column">
        Какой функционал необходимо реализовать на сайте?
        <div className="checkbox mt-3">
          <input
            id="CV"
            name="site"
            type="radio"
            value="Сайт-визитка"/>
          <label htmlFor="CV">Сайт-визитка</label>
        </div>
        <div className="checkbox">
          <input
            id="EC"
            name="site"
            type="radio"
            value="Интернет-магазин"/>
          <label htmlFor="EC">Интернет-магазин</label>
        </div>
        <div className="checkbox">
          <input
            id="LP"
            name="site"
            type="radio"
            value="Продающая страница"/>
          <label htmlFor="LP">Продающая страница</label>
        </div>
        <div className="checkbox">
          <input
            id="CS"
            name="site"
            type="radio"
            value="Корпоративный сайт"/>
          <label htmlFor="CS">Корпоративный сайт</label>
        </div>
        <div className="checkbox">
          <input
            id="OS"
            name="site"
            type="radio"
            value="Онлайн-сервис"/>
          <label htmlFor="OS">Онлайн-сервис</label>
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее</button>
        </div>
      </div>
      <div className="d-flex flex-column">
        Какой тип сайта вас интересует?
        <div className="checkbox mt-3">
          <input
            id="CV"
            name="site"
            type="radio"
            value="Сайт-визитка"/>
          <label htmlFor="CV">Сайт-визитка</label>
        </div>
        <div className="checkbox">
          <input
            id="EC"
            name="site"
            type="radio"
            value="Интернет-магазин"/>
          <label htmlFor="EC">Интернет-магазин</label>
        </div>
        <div className="checkbox">
          <input
            id="LP"
            name="site"
            type="radio"
            value="Продающая страница"/>
          <label htmlFor="LP">Продающая страница</label>
        </div>
        <div className="checkbox">
          <input
            id="CS"
            name="site"
            type="radio"
            value="Корпоративный сайт"/>
          <label htmlFor="CS">Корпоративный сайт</label>
        </div>
        <div className="checkbox">
          <input
            id="OS"
            name="site"
            type="radio"
            value="Онлайн-сервис"/>
          <label htmlFor="OS">Онлайн-сервис</label>
        </div>
        <button type="button" className="mainBtn" onClick={handleQuiz}>Далее</button>
      </div>
      <div className="d-flex flex-column">
        Какой тип сайта вас интересует?
        <div className="checkbox mt-3">
          <input
            id="CV"
            name="site"
            type="radio"
            value="Сайт-визитка"/>
          <label htmlFor="CV">Сайт-визитка</label>
        </div>
        <div className="checkbox">
          <input
            id="EC"
            name="site"
            type="radio"
            value="Интернет-магазин"/>
          <label htmlFor="EC">Интернет-магазин</label>
        </div>
        <div className="checkbox">
          <input
            id="LP"
            name="site"
            type="radio"
            value="Продающая страница"/>
          <label htmlFor="LP">Продающая страница</label>
        </div>
        <div className="checkbox">
          <input
            id="CS"
            name="site"
            type="radio"
            value="Корпоративный сайт"/>
          <label htmlFor="CS">Корпоративный сайт</label>
        </div>
        <div className="checkbox">
          <input
            id="OS"
            name="site"
            type="radio"
            value="Онлайн-сервис"/>
          <label htmlFor="OS">Онлайн-сервис</label>
        </div>
        <button type="button" className="mainBtn" onClick={handleQuiz}>Далее</button>
      </div>
    </form>
  )
}

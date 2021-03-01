import React, { useState } from "react"
import { rippleEffect } from "../main"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import FourthSection from "./fourthSection"

export default ({ status }) => {
  const [step, setStep] = useState(1)

  const initialStep1 = {
    logo: "",
    brand: "",
    presentation: "",
    vector: "",
    social: "",
    webdesign: "",
    other: ""
  }

  const [step1, setStep1] = useState(initialStep1)
  const [step2, setStep2] = useState(new Date())
  const [step3, setStep3] = useState("")
  const [submit, setSubmit] = useState(false)

  const cancelSubmit = () => setSubmit(false)

  const handleQuiz = (e, direction) => {
    if (!direction) {
      rippleEffect(e)
      setTimeout(() => setSubmit(true), 500)
    } else if (direction === "next") {
      rippleEffect(e)
      setTimeout(() => setStep(step + 1), 500)
    } else setStep(step - 1)
  }

  const handleCheckbox = e => {
    if (step1[e.target.name] === "") setStep1({ ...step1, [e.target.name]: e.target.value })
    else setStep1({ ...step1, [e.target.name]: "" })
  }

  const handleDate = date => setStep2(date)

  const handleTextarea = e => setStep3(e.target.value)

  const firstSection = (
    <div className="d-flex flex-column">
      <span className="mb-2">Что именно вас интересует?</span>
      <div className="checkbox mt-3">
        <input
          id="step1.1"
          name="logo"
          type="checkbox"
          value=" Интересует разработка логотипа."
          checked={step1.logo === " Интересует разработка логотипа."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.1">Разработка логотипа</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.2"
          name="brand"
          type="checkbox"
          value=" Необходимо разработать айдентику."
          checked={step1.brand === " Необходимо разработать айдентику."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.2">Создание уникального фирменного стиля</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.3"
          name="presentation"
          type="checkbox"
          value=" Необходимо создать презентацию."
          checked={step1.presentation === " Необходимо создать презентацию."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.3">Создание презентации</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.4"
          name="vector"
          type="checkbox"
          value=" Интересует создание рекламных баннеров или других изображений."
          checked={step1.vector === " Интересует создание рекламных баннеров или других изображений."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.4">Создание рекламных баннеров или других изображений</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.5"
          name="social"
          type="checkbox"
          value=" Необходимо сделать дизайн для профиля в соц.сети."
          checked={step1.social === " Необходимо сделать дизайн для профиля в соц.сети."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.5">Оформление профиля в социальных сетях</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.6"
          name="webdesign"
          type="checkbox"
          value=" Необходимо разработать макет сайта."
          checked={step1.webdesign === " Необходимо разработать макет сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.6">Разработка макета сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.7"
          name="other"
          type="checkbox"
          value=" Интересует услуга дизайн."
          checked={step1.other === " Интересует услуга дизайн."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.7">Другое</label>
      </div>
    </div>
  )

  const secondSection = (
    <div className="input-group-main">
      <label htmlFor="step2" className="mb-2">Если есть конкретный дедлайн, до которого работа должна быть выполнена,
        пожалуйста, укажите здесь</label><br/>
      <DatePicker
        selected={step2}
        onChange={handleDate}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  )

  const thirdSection = (
    <div className="input-group-main">
      <label htmlFor="step3" className="mb-2">Если у вас есть особенные пожелания, которые необходимо учесть,
        пожалуйста, укажите их здесь. Также можно указать ссылку на референс.</label>
      <textarea
        id="step3"
        name="message"
        rows="6"
        placeholder="Например:
        Нравиться стилистика оформления блока с карточками на этом сайте https://example.com/"
        value={step3}
        onChange={handleTextarea}
      />
    </div>
  )
  return (
    <div className="quiz">
      <span className="progressbar" style={{ transform: `scaleX(${status[step]})` }}/>
      {step === 1 ? firstSection : null}
      {step === 2 ? secondSection : null}
      {step === 3 ? thirdSection : null}
      {step === 4 ? <FourthSection
        step1={step1}
        step2={step2}
        step3={step3}
        submit={submit}
        setSubmit={cancelSubmit}
        header="Почти готово"
      /> : null}

      <div className="d-flex justify-content-between flex-row-reverse">
        {step === 4 ?
          <button type="button" className="mainBtn" onClick={handleQuiz}>Узнать цену</button> :
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее > </button>
        }
        {step === 1 ? null :
          <button type="button" className="mainBtn whiteBtn mr-3" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
        }
      </div>
    </div>
  )
}

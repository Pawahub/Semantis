import React, { useState } from "react"
import { rippleEffect } from "../main"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import FourthSection from "./fourthSection"

export default ({ status }) => {
  const [step, setStep] = useState(1)

  const initialStep1 = {
    logo: false,
    brand: false,
    presentation: false,
    vector: false,
    social: false,
    webdesign: false,
    other: false
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

  const handleCheckbox = e => setStep1({ ...step1, [e.target.value]: !step1[e.target.value] })

  const handleDate = date => setStep2(date)

  const handleTextarea = e => setStep3(e.target.value)

  const firstSection = (
    <div className="d-flex flex-column">
      <span className="mb-2">Что именно вас интересует?</span>
      <div className="checkbox mt-3">
        <input
          id="step1.1"
          step="1"
          type="checkbox"
          value="logo"
          checked={step1.logo}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.1">Разработка логотипа</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.2"
          step="1"
          type="checkbox"
          value="brand"
          checked={step1.brand}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.2">Создание уникального фирменного стиля</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.3"
          step="1"
          type="checkbox"
          value="presentation"
          checked={step1.presentation}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.3">Создание презентации</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.4"
          step="1"
          type="checkbox"
          value="vector"
          checked={step1.vector}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.4">Создание рекламных баннеров или других изображений</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.5"
          step="1"
          type="checkbox"
          value="social"
          checked={step1.social}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.5">Оформление профиля в социальных сетях</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.6"
          step="1"
          type="checkbox"
          value="webdesign"
          checked={step1.webdesign}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.6">Разработка макета сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.6"
          step="1"
          type="checkbox"
          value="other"
          checked={step1.other}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.6">Другое</label>
      </div>
    </div>
  )

  const secondSection = (
    <div className="input-group-main">
      <label htmlFor="step2" className="mb-2">Если есть конкретный дедлайн когда должна быть выполнена работа,
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
      <span className="progressbar" style={{transform: `scaleX(${status[step]})`}}/>
      {step === 1 ? firstSection : null}
      {step === 2 ? secondSection : null}
      {step === 3 ? thirdSection : null}
      {step === 4 ? <FourthSection
        step1={step1}
        step2={step2}
        step3={step3}
        submit={submit}
        setSubmit={cancelSubmit}
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

import React, { useState } from "react"
import { rippleEffect } from "../main"

import FourthSection from "./fourthSection"

export default () => {
  const [step, setStep] = useState(1)

  const initialStep1 = {
    field: "",
    website: ""
  }

  const initialStep2 = {
    context: false,
    targeting: false,
    smm: false,
    complex: false
  }

  const [step1, setStep1] = useState(initialStep1)
  const [step2, setStep2] = useState(initialStep2)
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

  const handleCheckbox = e => setStep2({ ...step2, [e.target.value]: !step2[e.target.value] })

  const handleTextarea = e => setStep3(e.target.value)

  const handleInput = e => {
    switch (e.target.step) {
      case "1":
        setStep1({ ...step1, [e.target.name]: e.target.value })
        break
      case "2":
        setStep2({ ...step2, [e.target.name]: e.target.value })
        break
    }
  }

  const focusInput = e => e.target.classList.contains("failed") ? e.target.classList.remove("failed") : null

  const checkInput = (e, expression) => expression.test(e.target.value) ? null : e.target.classList.add("failed")

  const firstSection = (
    <div className="d-flex flex-column">
      <div className="input-group-main">
        <label htmlFor="field">Какая у вас деятельности</label><br/>
        <input
          id="field"
          name="field"
          type="text"
          placeholder="Производство оборудования"
          value={step1.field}
          onFocus={focusInput}
          onChange={handleInput}
          onBlur={(e) => checkInput(e, /^[а-яА-ЯёЁ\s]+|[a-zA-Z\s]+$/)}
        />
      </div>
      <div className="input-group-main">
        <label htmlFor="website">Укажите ссылку на ваш сайт</label><br/>
        <input
          id="website"
          name="website"
          type="text"
          value={step1.website}
          placeholder="https://example.com/"
          onFocus={focusInput}
          onChange={handleInput}
          onBlur={(e) => checkInput(e, /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)}
        />
      </div>
    </div>
  )

  const secondSection = (
    <div className="d-flex flex-column">
      <span className="mb-2">Какой вид продвижения вас интересует?</span>
      <div className="checkbox mt-3">
        <input
          id="step2.1"
          step="2"
          name="ads"
          type="checkbox"
          value="context"
          checked={step2.context}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1">Контекстная реклама</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.2"
          step="2"
          name="ads"
          type="checkbox"
          value="targeting"
          checked={step2.targeting}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2">Таргетированная реклама</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.3"
          step="2"
          name="ads"
          type="checkbox"
          value="smm"
          checked={step2.smm}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.3">Продвижение в соц.сетях</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.4"
          step="2"
          name="ads"
          type="checkbox"
          value="complex"
          checked={step2.complex}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.4">Комплексное продвижение</label>
      </div>
    </div>
  )

  const thirdSection = (
    <div className="input-group-main">
      <label htmlFor="goal" className="mb-2">Опишите кратко ваши цели продвижения в интеренте.</label>
      <textarea
        id="goal"
        name="message"
        rows="6"
        placeholder="Например:
        - Увеличение обёмов реализации резиновой крошки.
        - Поиск потенциальных инвесторов для модернизации производста и увеличения мощностей.
        - ..."
        value={step3}
        onChange={handleTextarea}
      />
    </div>
  )

  return (
    <div className="quiz">
      <span className="progressbar"/>
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
          <button type="button" className="mainBtn prev mr-3" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
        }
      </div>
    </div>
  )
}

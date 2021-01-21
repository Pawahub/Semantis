import React, { useState } from "react"
import { rippleEffect } from "../main"

import FourthSection from "./fourthSection"

export default () => {
  const [step, setStep] = useState(1)

  const initialStep2 = {
    speed: false,
    search: false,
    visual: false,
    functional: false,
    errors: false,
    schema: false,
    other: false
  }

  const [step1, setStep1] = useState("")
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

  const handleInput = e => setStep1(e.target.value)

  const focusInput = e => e.target.classList.contains("failed") ? e.target.classList.remove("failed") : null

  const checkInput = (e, expression) => expression.test(e.target.value) ? null : e.target.classList.add("failed")

  const firstSection = (
    <div className="input-group-main">
      <label htmlFor="website" className="mb-2">Укажите ссылку на ваш сайт</label><br/>
      <input
        id="website"
        step="1"
        name="website"
        type="text"
        value={step1}
        placeholder="https://example.com/"
        onFocus={focusInput}
        onChange={handleInput}
        onBlur={(e) => checkInput(e, /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)}
      />
    </div>
  )

  const secondSection = (
    <div className="d-flex flex-column">
      <span className="mb-2">Что бы вы хотели улучшить в своём сайте?</span>
      <div className="checkbox mt-3">
        <input
          id="step2.1"
          step="2"
          type="checkbox"
          value="speed"
          checked={step2.speed}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1">Увеличить скорость загрузки сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.2"
          step="2"
          type="checkbox"
          value="search"
          checked={step2.search}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2">Поднять рейтинг сайта в поисковой выдаче</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.3"
          step="2"
          type="checkbox"
          value="visual"
          checked={step2.visual}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.3">Изменить дизайн сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.4"
          step="2"
          type="checkbox"
          value="functional"
          checked={step2.functional}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.4">Исправить/добавить функционал</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.5"
          step="2"
          type="checkbox"
          value="errors"
          checked={step2.errors}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.5">Исправить общие ошибки в коде</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.6"
          step="2"
          type="checkbox"
          value="schema"
          checked={step2.schema}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.6">Добавить микроразметку</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.7"
          step="2"
          type="checkbox"
          value="other"
          checked={step2.other}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.7">Другое</label>
      </div>
    </div>
  )

  const thirdSection = (
    <div className="input-group-main">
      <label htmlFor="step3" className="mb-2">Если у вас есть пожелания, которые необходимо учесть, пожалуйста, укажите
        их здесь.</label>
      <textarea
        id="step3"
        name="message"
        rows="6"
        placeholder="Например:
        Необходимо добавить интерактивную карту с указанием нашего офиса внизу сайта"
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
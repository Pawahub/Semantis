import React, { useState } from "react"
import { rippleEffect } from "../main"

import FourthSection from "./fourthSection"

export default ({status}) => {
  const [step, setStep] = useState(1)

  const initialStep1 = {
    recognizability: false,
    communication: false,
    loyalty: false,
    customers: false,
    sales: false,
    members: false
  }

  const initialStep2 = {
    template: "",
    content: "",
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

  const handleCheckbox = e => {
    switch (e.target.step) {
      case "1":
        setStep1({ ...step1, [e.target.value]: !step1[e.target.value] })
        break
      case "2":
        setStep2({ ...step2, [e.target.name]: e.target.value })
        break
    }
  }

  const handleTextarea = e => setStep3(e.target.value)

  const firstSection = (
    <div className="d-flex flex-column">
      <span className="mb-2">Какие задачи вы хоите решать с помощью сайта?</span>
      <div className="checkbox mt-3">
        <input
          id="step1.1"
          step="1"
          type="checkbox"
          value="recognizability"
          checked={step1.recognizability}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.1">Повысить имидж и узнаваемость бренда</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.2"
          step="1"
          type="checkbox"
          value="communication"
          checked={step1.communication}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.2">Организровать связь между клиентами и компанией</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.3"
          step="1"
          type="checkbox"
          value="loyalty"
          checked={step1.loyalty}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.3">Повысить лояльность клиентов</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.4"
          step="1"
          type="checkbox"
          value="customers"
          checked={step1.customers}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.4">Привлекать новых клиентов через интернет</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.5"
          step="1"
          type="checkbox"
          value="sales"
          checked={step1.sales}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.5">Осуществлять прямые продажи с сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.6"
          step="1"
          type="checkbox"
          value="members"
          checked={step1.members}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.6">Привлечь публику для участия в мероприятии</label>
      </div>
    </div>
  )

  const secondSection = (
    <div className="d-flex flex-column">
      <span className="mb-2">Для сайта необходим индивидуальный дизайн?</span>
      <div className="checkbox d-flex flex-column">
        <input
          id="step2.1.1"
          step="2"
          name="template"
          type="checkbox"
          value="Да"
          checked={step2.template === "Да"}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1.1">Да</label>
        <input
          id="step2.1.2"
          step="2"
          name="template"
          type="checkbox"
          value="Нет"
          checked={step2.template === "Нет"}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1.2">Нет</label>
      </div>
      <span className="my-2">У вас уже есть необходимые материалы для сайта?</span>
      <div className="checkbox d-flex flex-column">
        <input
          id="step2.2.1"
          step="2"
          name="content"
          type="checkbox"
          value="Да"
          checked={step2.content === "Да"}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2.1">Да</label>
        <input
          id="step2.2.2"
          step="2"
          name="content"
          type="checkbox"
          value="Нет"
          checked={step2.content === "Нет"}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2.2">Нет</label>
        <input
          id="step2.2.3"
          step="2"
          name="content"
          type="checkbox"
          value="Частично"
          checked={step2.content === "Частично"}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2.3">Частично</label>
      </div>
    </div>
  )

  const thirdSection = (
    <div className="input-group-main">
      <label htmlFor="step3" className="mb-2">Если у вас есть конкретные требования к сайту, которые необходимо учесть,
        пожалуйста, укажите их здесь. Также можно указать в качестве примера ссылки на другие сайты.</label>
      <textarea
        id="step3"
        name="message"
        rows="6"
        placeholder="Например:
        На сайте необходимо разместить калькулятор стоимости заказа как здесь https://example.com/calculator"
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

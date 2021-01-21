import React, { useContext, useEffect, useState } from "react"
import { StateContext } from "../../state/stateCotext"

import NumberFormat from "react-number-format"

import ok from "../../images/contacts/okblue.svg"
import whatsapp from "../../images/nav/whatsapp.png"
import telegram from "../../images/nav/telegram.png"
import viber from "../../images/nav/viber.png"

export default ({ step1, step2, step3, submit, setSubmit }) => {
  const { dispatch } = useContext(StateContext)

  const initialStep4 = {
    name: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    whatsapp: false,
    telegram: false,
    viber: false
  }

  const [step4, setStep4] = useState(initialStep4)

  const quizData = {
    step1,
    step2,
    step3,
    ...step4
  }

  const mail = async (quizData) => {
    await fetch("https://semantis.by/quiz.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: JSON.stringify(quizData)
    })
  }

  const submitQuiz = (quizData) => {
    if (step4.name.isValid && step4.phone.isValid) {
      mail(quizData).then((response) => console.log(response))
      dispatch({ type: "open", payload: "success" })
    } else setSubmit()
  }

  useEffect(() => {
    if (submit) {
      submitQuiz(quizData)
    }
  }, [submit])

  const handleCheckbox = e => setStep4({ ...step4, [e.target.value]: !step4[e.target.value] })

  const focusInput = e => {
    if (e.target.classList.contains("failed")) e.target.classList.remove("failed")
    if (e.target.name === "phone" && !e.target.value) setShowMask(true)
    if (template.dropdown) toggleSelect()
  }

  const handleInput = e => setStep4({ ...step4, [e.target.name]: { value: e.target.value, isValid: false } })

  const checkInput = (e, expression) => {
    if (e.target.name === "phone") {
      setShowMask(false)
      setStep4({ ...step4, phone: { value: e.target.value, isValid: false } })
    }
    if (expression.test(e.target.value)) {
      for (let key in step4) {
        if (key === e.target.name) setStep4({
          ...step4,
          [key]: { value: e.target.value, isValid: true }
        })
      }
    } else e.target.classList.add("failed")
  }

  const BY = {
    format: "+375 (##) ### ## ##",
    placeholder: "+375 (29) 262 40 63",
    flag: "flag by",
    rexp: /^(\+375)\s\((29|25|44|33)\)\s(\d{3})\s(\d{2})\s(\d{2})$/
  }

  const RU = {
    format: "+7 (###) ### ## ##",
    placeholder: "+7 (921) 775 03 28",
    flag: "flag ru",
    rexp: /^(\+7)\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})$/
  }

  const [template, setTemplate] = useState({
    template: BY,
    dropdown: false
  })

  const toggleSelect = () => setTemplate({ ...template, dropdown: !template.dropdown })

  const [showMask, setShowMask] = useState(false)

  const selectMask = e => {
    document.getElementById("phoneQuiz").classList.remove("failed")
    if (e.target.dataset.country === "by") {
      setTemplate({
        template: BY,
        dropdown: false
      })
    } else {
      setTemplate({
        template: RU,
        dropdown: false
      })
    }
    setStep4({ ...step4, phone: { value: "", isValid: false } })
  }

  return (
    <div className="quiz">
      <div className="d-flex flex-column">
        <span className="mb-2">Почти готово!</span>
        <div className="input-group-main">
          <label htmlFor="nameQuiz">Ваше имя</label><br/>
          <input
            id="nameQuiz"
            name="name"
            type="text"
            placeholder="Ваше имя"
            value={step4.name.value}
            onFocus={focusInput}
            onChange={handleInput}
            onBlur={(e) => checkInput(e, /^[а-яА-ЯёЁ\s]+|[a-zA-Z\s]+$/)}
          />
          <img className={step4.name.isValid ? "ok d-block" : "ok d-none"} src={ok} alt=""/>
        </div>
        <div className="input-group-main">
          <label htmlFor="phoneQuiz">Ваш телефон</label><br/>
          <div className="phone-group-mask">
            <button type="button" className="chose-mask" onClick={toggleSelect}>
              <span className={template.template.flag}/>
              <span className="iti-arrow"/>
            </button>
            <ul role="menu" className={!template.dropdown ? "dropdown" : "dropdown active"} onClick={selectMask}>
              <li data-country="by"><span className="flag by"/>Беларусь +375</li>
              <li data-country="ru"><span className="flag ru"/>Россия +7</li>
            </ul>
            <NumberFormat
              id="phoneQuiz"
              name="phone"
              type="tel"
              placeholder={template.template.placeholder}
              format={template.template.format}
              value={step4.phone.value}
              mask="_"
              allowEmptyFormatting={showMask}
              onFocus={focusInput}
              onBlur={(e) => checkInput(e, template.template.rexp)}
            />
            <img className={step4.phone.isValid ? "ok d-block" : "ok d-none"} src={ok} alt=""/>
          </div>
        </div>
        <div className="d-flex flex-column">
          В каком мессенджере с вами можно связаться?
          <div className="checkbox mt-3">
            <input
              id="step4.1"
              step="4"
              type="checkbox"
              value="whatsapp"
              checked={step4.whatsapp}
              onChange={handleCheckbox}
            />
            <label htmlFor="step4.1"><img src={whatsapp} alt="whatsapp" width="20px"/>&nbsp;WhatsApp</label>
          </div>
          <div className="checkbox">
            <input
              id="step4.2"
              step="4"
              type="checkbox"
              value="telegram"
              checked={step4.telegram}
              onChange={handleCheckbox}
            />
            <label htmlFor="step4.2"><img src={telegram} alt="telegram" width="20px"/>&nbsp;Telegram</label>
          </div>
          <div className="checkbox">
            <input
              id="step4.3"
              step="4"
              type="checkbox"
              value="viber"
              checked={step4.viber}
              onChange={handleCheckbox}
            />
            <label htmlFor="step4.3"><img src={viber} alt="viber" width="20px"/>&nbsp;Viber</label>
          </div>
        </div>
      </div>
    </div>
  )
}

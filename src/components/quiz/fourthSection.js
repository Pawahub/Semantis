import React, { useContext, useEffect, useState } from "react"
import { StateContext } from "../../state/stateCotext"

import NumberFormat from "react-number-format"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import whatsapp from "../../images/nav/whatsapp.png"
import telegram from "../../images/nav/telegram.png"
import viber from "../../images/nav/viber.png"


export default ({ step1, step2, step3, submit, setSubmit }) => {
  const { dispatch } = useContext(StateContext)

  const initialQuizData = {
    name: {
      value: "",
      isValid: false,
      failed: false
    },
    phone: {
      value: "",
      isValid: false,
      failed: false
    },
    description: "",
    message: step3,
    whatsapp: "",
    telegram: "",
    viber: ""
  }

  const [quizData, setQuizData] = useState(initialQuizData)

  const stepsData = [step1, step2].map((item) => typeof item === "object" ? Object.values(item) : item).flat().filter((item) => item !== "")

  const mail = async (quizData) => {
    await fetch("https://semantis.by/email.php", {
      method: "POST",
      body: quizData
    })
  }

  const submitQuiz = () => {
    if (!quizData.name.isValid) {
      setSubmit()
      setQuizData({ ...quizData, name: { value: quizData.name.value, isValid: false, failed: true } })
    } else if (!quizData.phone.isValid) {
      setSubmit()
      setQuizData({ ...quizData, phone: { value: quizData.phone.value, isValid: false, failed: true } })
    } else {
      setQuizData({ ...quizData, description: stepsData })
      const data = new FormData()
      for (let key in quizData) {
        if (key === "name" || key === "phone") data.append(key, quizData[key].value)
        else if (quizData[key]) data.append(key, quizData[key])
      }
      mail(data).then((response) => console.log(response))
      dispatch({ type: "open", payload: "success" })
    }
  }

  useEffect(() => {
    if (submit) submitQuiz(quizData)
  }, [submit])

  const handleCheckbox = e => {
    if (quizData[e.target.value] === "") setQuizData({ ...quizData, [e.target.value]: e.target.value })
    else setQuizData({ ...quizData, [e.target.value]: "" })
  }

  const focusInput = e => {
    if (quizData[e.target.name].failed) setQuizData({
      ...quizData,
      [e.target.name]: { value: e.target.value, isValid: false, failed: false }
    })
    if (e.target.name === "phone" && !e.target.value) setShowMask(true)
    if (template.dropdown) toggleSelect()
  }

  const handleInput = e => setQuizData({
    ...quizData,
    [e.target.name]: { value: e.target.value, isValid: false, failed: false }
  })

  const checkInput = (e, expression) => {
    if (e.target.name === "phone") setShowMask(false)

    if (expression.test(e.target.value)) {
      setQuizData({ ...quizData, [e.target.name]: { value: e.target.value, isValid: true, failed: false } })
    } else setQuizData({ ...quizData, [e.target.name]: { value: e.target.value, isValid: false, failed: true } })
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
    setQuizData({ ...quizData, phone: { value: "", isValid: false, failed: false } })
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
            value={quizData.name.value}
            onFocus={focusInput}
            onChange={handleInput}
            onBlur={(e) => checkInput(e, /^[а-яА-ЯёЁ\s]+|[a-zA-Z\s]+$/)}
            className={quizData.name.failed ? "failed" : ""}
          />
          <FontAwesomeIcon icon={faCheckCircle} size="lg"
                           className={quizData.name.isValid ? "ok blue-color d-block" : "ok d-none"}
          />
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
              value={quizData.phone.value}
              mask="_"
              allowEmptyFormatting={showMask}
              onFocus={focusInput}
              onBlur={(e) => checkInput(e, template.template.rexp)}
              className={quizData.phone.failed ? "failed" : ""}
            />
            <FontAwesomeIcon icon={faCheckCircle} size="lg"
                             className={quizData.phone.isValid ? "ok blue-color d-block" : "ok d-none"}/>
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
              checked={quizData.whatsapp === "whatsapp"}
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
              checked={quizData.telegram === "telegram"}
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
              checked={quizData.viber === "viber"}
              onChange={handleCheckbox}
            />
            <label htmlFor="step4.3"><img src={viber} alt="viber" width="20px"/>&nbsp;Viber</label>
          </div>
        </div>
      </div>
    </div>
  )
}

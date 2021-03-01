import React, { useContext, useState } from "react"
import { StateContext } from "../state/stateCotext"
import { rippleEffect } from "./main"

import NumberFormat from "react-number-format"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import whatsapp from "../images/nav/whatsapp.png"
import telegram from "../images/nav/telegram.png"
import viber from "../images/nav/viber.png"

export default () => {
  const { dispatch } = useContext(StateContext)

  const initialFormData = {
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
    whatsapp: "",
    telegram: "",
    viber: ""
  }

  const [formData, setFormData] = useState(initialFormData)

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
    template: RU,
    dropdown: false
  })

  const toggleSelect = () => setTemplate({ ...template, dropdown: !template.dropdown })

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
    setFormData({ ...formData, phone: { value: "", isValid: false, failed: false } })
  }

  const [showMask, setShowMask] = useState(false)

  const focusInput = e => {
    if (formData[e.target.name].failed) setFormData({
      ...formData,
      [e.target.name]: { value: e.target.value, isValid: false, failed: false }
    })
    if (e.target.name === "phone" && !e.target.value) setShowMask(true)
    if (template.dropdown) toggleSelect()
  }

  const handleInput = e => setFormData({
    ...formData,
    [e.target.name]: { value: e.target.value, isValid: false, failed: false }
  })

  const checkInput = (e, expression) => {
    if (e.target.name === "phone") setShowMask(false)

    if (expression.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: { value: e.target.value, isValid: true, failed: false } })
    } else setFormData({ ...formData, [e.target.name]: { value: e.target.value, isValid: false, failed: true } })
  }

  const handleCheckbox = e => {
    if (formData[e.target.value] === "") setFormData({ ...formData, [e.target.value]: e.target.value })
    else setFormData({ ...formData, [e.target.value]: "" })
  }

  const mail = async (formData) => {
    await fetch("https://semantis.by/email.php", {
      method: "POST",
      body: formData
    })
  }

  const handleSubmit = e => {
    rippleEffect(e)
    e.preventDefault()
    if (!formData.name.isValid) {
      setFormData({ ...formData, name: { value: formData.name.value, isValid: false, failed: true } })
    } else if (!formData.phone.isValid) {
      setFormData({ ...formData, phone: { value: formData.phone.value, isValid: false, failed: true } })
    } else {
      const data = new FormData()
      for (let key in formData) {
        if (key === "name" || key === "phone") data.append(key, formData[key].value)
        else if (formData[key]) data.append(key, formData[key])
      }
      mail(data).then((response) => console.log(response))
      dispatch({ type: "open", payload: "success" })
    }
  }

  return (
    <form className="quiz p-3">
      <div className="d-flex flex-column">
        <div className="input-group-main">
          <label htmlFor="nameQuiz">Ваше имя</label><br/>
          <input
            id="nameQuiz"
            name="name"
            type="text"
            placeholder="Ваше имя"
            value={formData.name.value}
            onFocus={focusInput}
            onChange={handleInput}
            onBlur={(e) => checkInput(e, /^[а-яА-ЯёЁ\s]+|[a-zA-Z\s]+$/)}
            className={formData.name.failed ? "failed" : ""}
          />
          <FontAwesomeIcon icon={faCheckCircle} size="lg"
                           className={formData.name.isValid ? "ok blue-color d-block" : "ok d-none"}
          />
        </div>
        <div className="input-group-main">
          <label htmlFor="phoneQuiz">Ваш телефон</label><br/>
          <div className="phone-group-mask">
            <button type="button" className="chose-mask" onClick={toggleSelect}>
              <span className={template.template.flag}/>
              <FontAwesomeIcon icon={faCaretDown} className="ml-2"/>
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
              value={formData.phone.value}
              mask="_"
              allowEmptyFormatting={showMask}
              onFocus={focusInput}
              onBlur={(e) => checkInput(e, template.template.rexp)}
              className={formData.phone.failed ? "failed" : ""}
            />
            <FontAwesomeIcon icon={faCheckCircle} size="lg"
                             className={formData.phone.isValid ? "ok blue-color d-block" : "ok d-none"}/>
          </div>
        </div>
        <div className="d-flex flex-column">
          В каком мессенджере с Вами можно связаться?
          <div className="checkbox mt-3">
            <input
              id="step4.1"
              step="4"
              type="checkbox"
              value="whatsapp"
              checked={formData.whatsapp === "whatsapp"}
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
              checked={formData.telegram === "telegram"}
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
              checked={formData.viber === "viber"}
              onChange={handleCheckbox}
            />
            <label htmlFor="step4.3"><img src={viber} alt="viber" width="20px"/>&nbsp;Viber</label>
          </div>
        </div>
        <button className="mainBtn align-self-md-start" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} className="pr-2" size="lg"/> Получить предложение
        </button>
      </div>
      // todo Нажимая на кнопку "Получить предложение" Вы даёте согласие на обработку ваших персональных данных
    </form>
  )
}

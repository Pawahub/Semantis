import React, { useState } from "react"

import NumberFormat from "react-number-format"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import whatsapp from "../images/nav/whatsapp.png"
import telegram from "../images/nav/telegram.png"
import viber from "../images/nav/viber.png"

export default ({ initialFormData }) => {
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

  const handleInput = e => {
    setFormData({ ...formData, [e.target.id]: { value: e.target.value, isValid: false, failed: false } })
  }

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

  return (
    <div className="d-flex flex-column">
      <div className="input-group-main">
        <label htmlFor="name">Ваше имя</label><br/>
        <input
          id="name"
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
        <label htmlFor="phone">Ваш телефон</label><br/>
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
            id="phone"
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
        В каком мессенджере с вами можно связаться?
        <div className="checkbox mt-3">
          <input
            id="whatsapp"
            type="checkbox"
            value="whatsapp"
            checked={formData.whatsapp === "whatsapp"}
            onChange={handleCheckbox}
          />
          <label htmlFor="whatsapp"><img src={whatsapp} alt="whatsapp" width="20px"/>&nbsp;WhatsApp</label>
        </div>
        <div className="checkbox">
          <input
            id="telegram"
            type="checkbox"
            value="telegram"
            checked={formData.telegram === "telegram"}
            onChange={handleCheckbox}
          />
          <label htmlFor="telegram"><img src={telegram} alt="telegram" width="20px"/>&nbsp;Telegram</label>
        </div>
        <div className="checkbox">
          <input
            id="viber"
            type="checkbox"
            value="viber"
            checked={formData.viber === "viber"}
            onChange={handleCheckbox}
          />
          <label htmlFor="viber"><img src={viber} alt="viber" width="20px"/>&nbsp;Viber</label>
        </div>
      </div>
    </div>
  )
}

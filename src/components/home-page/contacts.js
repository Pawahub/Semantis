import React, { useState, useEffect, useContext } from "react"
import { rippleEffect } from "../main"
import { StateContext } from "../../state/stateCotext"

import NumberFormat from "react-number-format"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faCheckCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import dotted from "../../images/contacts/dotted2.svg"
import dottedgroup from "../../images/contacts/dottedgroup.svg"
import zCircle from "../../images/contacts/zcircle.svg"

export default () => {
  const { state, dispatch } = useContext(StateContext)

  useEffect(() => {
    if (state.selectedSection === 4 || /Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (document.documentElement.clientWidth <= 991)) {
      setShowForm(true)
    } else setShowForm(false)
  }, [state.selectedSection])

  const [showForm, setShowForm] = useState(false)

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
    email: {
      value: "",
      isValid: false,
      failed: false
    },
    message: "",
    copy: false
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
    setFormData({ ...formData, [e.target.id]: { value: e.target.value, isValid: false, failed: false } })
    if (e.target.name === "phone" && !e.target.value) setShowMask(true)
    if (template.dropdown) toggleSelect()
  }

  const handleInput = e => {
    if (e.target.id === "message") setFormData({ ...formData, message: e.target.value })
    else setFormData({ ...formData, [e.target.id]: { value: e.target.value, isValid: false, failed: false } })
  }

  const checkInput = (e, expression) => {
    if (e.target.name === "phone") {
      setShowMask(false)
      setFormData({ ...formData, phone: { value: e.target.value, isValid: false, failed: false } })
    }

    if (expression.test(e.target.value)) {
      for (let key in formData) {
        if (key === e.target.name) setFormData({
          ...formData,
          [key]: { value: e.target.value, isValid: true, failed: false }
        })
      }
    } else setFormData({ ...formData, [e.target.id]: { value: e.target.value, isValid: false, failed: true } })
  }

  const checkMessage = e => {
    if (e.target.value) setFormData({ ...formData, message: e.target.value })
    else setFormData({ ...formData, message: "" })
  }

  const handleCheckbox = () => setFormData({ ...formData, copy: !formData.copy })

  const mail = async (formData) => {
    await fetch("https://semantis.by/email.php", {
      method: "POST",
      body: formData
    })
  }

  const handleSubmit = e => {
    rippleEffect(e)
    e.preventDefault()
    let { name, phone, email } = formData
    if (name.isValid && phone.isValid) {
      const data = new FormData()
      data.append("name", name.value)
      data.append("phone", phone.value)
      data.append("email", email.value)
      data.append("message", formData.message)
      data.append("copy", formData.copy)
      mail(data).then((response) => console.log(response))
      dispatch({ type: "open", payload: "success" })
      setFormData({
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
        email: {
          value: "",
          isValid: false,
          failed: false
        },
        message: "",
        copy: false
      })
    }
  }

  return (
    <section id="contacts" className="contacts">
      <img className="dotted2 d-none d-lg-block" src={dotted} alt=""/>
      <img className="dottedgroup d-none d-md-block" src={dottedgroup} alt=""/>
      <img className="zCircle d-none d-lg-block" src={zCircle} alt=""/>
      <span className={showForm ? "bg-white show" : "bg-white"}/>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className={showForm ? "col-12 col-md-6 px-3 form show" : "col-12 col-md-6 form"}>
            <h2>Есть вопрос?</h2>
            <form name="contactForm" className="mr-md-5">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="input-group-main w-45 mr-xl-3">
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
                                   className={formData.name.isValid ? "ok blue-color d-block" : "ok d-none"}/>
                </div>
                <div className="input-group-main w-45 ml-xl-3">
                  <label htmlFor="phone">Ваш телефон</label><br/>
                  <div className="phone-group-mask">
                    <button type="button" className="chose-mask" onClick={toggleSelect}>
                      <span className={template.template.flag}/>
                      <FontAwesomeIcon icon={faCaretDown} className="ml-2"/>
                    </button>
                    <ul role="menu" className={!template.dropdown ? "dropdown" : "dropdown active"}
                        onClick={selectMask}>
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
              </div>
              <div className="input-group-main m-0">
                <label htmlFor="email">Ваш e-mail</label><br/>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email.value}
                  onFocus={focusInput}
                  onChange={handleInput}
                  onBlur={(e) => checkInput(e, /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)}
                  className={formData.email.failed ? "failed" : ""}
                />
                <FontAwesomeIcon icon={faCheckCircle} size="lg"
                                 className={formData.email.isValid ? "ok blue-color d-block" : "ok d-none"}/>
              </div>
              <sub>Вы не будете получать автоматическую рассылку на указанный E-mail</sub>
              <div className="input-group-main">
                <label htmlFor="message">Опишите в двух словах ваш вопрос</label><br/>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder='Например: "Какой выбрать тип сайта в рамках заданного бюджета?"'
                  value={formData.message}
                  onChange={handleInput}
                  onBlur={checkMessage}/>
              </div>
              <div className="input-group-main checkbox">
                <input
                  id="copy"
                  name="copy"
                  type="checkbox"
                  checked={formData.copy}
                  onChange={handleCheckbox}/>
                <label htmlFor="copy">Отправить мне копию сообщения</label>
              </div>
              <button className="mainBtn align-self-md-start" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faPaperPlane} className="pr-2" size="lg"/> Отправить
              </button>
              <sub className="pt-2">нажимая кнопку "Отправить" Вы даёте своё согласие на обработку персональных данных</sub>
            </form>
          </div>
          <div className="col-12 col-md-6 px-3 pl-md-5 pt-5 pt-md-0">
            <h2>Контакты</h2>
            <div className="mb-4"><h6>Телефоны</h6>
              <a href="tel:+79217750328">+7 (921) 7750328</a>
              <br/>
              <a href="tel:+375292624063">+375 (29) 2624063</a>
            </div>
            <div className="mb-4"><h6>E-mail</h6>
              <a href="mailto:mail@semantis.online">mail@semantis.online</a>
            </div>
            <div className="mb-4"><h6>Адрес</h6>
              <a href="https://goo.gl/maps/jPtF6GyeSa6DTf178" rel="noreferrer noopener" target="_blank">
                Беларусь, Гродно, ул. Урицкого, 12, офис 306
              </a>
            </div>
            <div>
              <h6>Новости компании</h6>
              <a href="https://www.instagram.com/semantis.online/" rel="noreferrer noopener" target="_blank"
                 className="mr-2">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="blue-color"/>
              </a>
              <a href="https://www.facebook.com/semantis.online/" rel="noreferrer noopener" target="_blank"
                 className="mr-2">
                <FontAwesomeIcon icon={faFacebook} size="lg" className="blue-color"/>
              </a>
              <a href="https://www.linkedin.com/company/semantisonline/" rel="noreferrer noopener" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="blue-color"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

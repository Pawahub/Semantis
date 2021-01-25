import React, { useState, useEffect, useContext } from "react"
import { rippleEffect } from "../main"
import { StateContext } from "../../state/stateCotext"

import NumberFormat from "react-number-format"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import dotted from "../../images/contacts/dotted2.svg"
import dottedgroup from "../../images/contacts/dottedgroup.svg"
import zCircle from "../../images/contacts/zcircle.svg"
import ok from "../../images/contacts/okblue.svg"
import fb from "../../images/home/fb.svg"
import ig from "../../images/home/ig.svg"
import ln from "../../images/home/in.svg"

export default () => {
  const { state, dispatch } = useContext(StateContext)

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (state.selectedSection === 4 || /Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (document.documentElement.clientWidth <= 991)) {
      setShowForm(true)
    } else setShowForm(false)
  }, [state.selectedSection])

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

  const [formData, setFormData] = useState({
    name: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    message: "",
    copy: false
  })

  const selectMask = (e) => {
    document.getElementById("phone").classList.remove("failed")
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
    setFormData({ ...formData, phone: { value: "", isValid: false } })
  }

  const [showMask, setShowMask] = useState(false)

  const focusInput = (e) => {
    if (e.target.classList.contains("failed")) e.target.classList.remove("failed")
    if (e.target.name === "phone" && !e.target.value) setShowMask(true)
    if (template.dropdown) toggleSelect()
  }

  const handleInput = (e) => {
    if (e.target.id === "message") setFormData({ ...formData, message: e.target.value })
    else setFormData({ ...formData, [e.target.id]: { value: e.target.value, isValid: false } })
  }

  const checkInput = (e, expression) => {
    if (e.target.name === "phone") {
      setShowMask(false)
      setFormData({ ...formData, phone: { value: e.target.value, isValid: false } })
    }

    if (expression.test(e.target.value)) {
      for (let key in formData) {
        if (key === e.target.name) setFormData({ ...formData, [key]: { value: e.target.value, isValid: true } })
      }
    } else e.target.classList.add("failed")
  }

  const checkMessage = (e) => {
    if (e.target.value) setFormData({ ...formData, message: e.target.value })
    else setFormData({ ...formData, message: "" })
  }

  const handleCheckbox = () => setFormData({ ...formData, copy: !formData.copy })

  const mail = async () => {
    await fetch("https://semantis.by/email.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: JSON.stringify(formData)
    })
  }

  const handleSubmit = (e) => {
    rippleEffect(e)
    e.preventDefault()
    let { name, phone, email } = formData
    if (name.isValid && phone.isValid && email.isValid) {
      const data = new FormData
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
          isValid: false
        },
        phone: {
          value: "",
          isValid: false
        },
        email: {
          value: "",
          isValid: false
        },
        message: "",
        copy: false
      })
    }
  }

  return (
    <section className="contacts">
      <span className={showForm ? "bg-white col-12 col-md-6 show" : "bg-white col-12 col-md-6"}/>
      <div className="container py-5 d-flex justify-content-center flex-wrap">
        <img className="dotted2 d-none d-lg-block" src={dotted} alt=""/>
        <img className="dottedgroup d-none d-md-block" src={dottedgroup} alt=""/>
        <img className="zCircle d-none d-lg-block" src={zCircle} alt=""/>
        <div className={showForm ? "form col-12 col-md-6 p-0 pt-md-5 show" : "form col-12 col-md-6 p-0 pt-md-5"}>
          <h2 className="h1">Оставьте заявку</h2>
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
                  onBlur={(e) => checkInput(e, /^[а-яА-ЯёЁ\s]+|[a-zA-Z\s]+$/)}/>
                <img className={formData.name.isValid ? "ok d-block" : "ok d-none"} src={ok} alt=""/>
              </div>
              <div className="input-group-main w-45 ml-xl-3">
                <label htmlFor="phone">Ваш телефон</label><br/>
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
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={template.template.placeholder}
                    format={template.template.format}
                    value={formData.phone.value}
                    mask="_"
                    allowEmptyFormatting={showMask}
                    onFocus={focusInput}
                    onBlur={(e) => checkInput(e, template.template.rexp)}/>
                  <img className={formData.phone.isValid ? "ok d-block" : "ok d-none"} src={ok} alt=""/>
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
                onBlur={(e) => checkInput(e, /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)}/>
              <img className={formData.email.isValid ? "ok d-block" : "ok d-none"} src={ok} alt=""/>
            </div>
            <sub>Вы не будете получать рассылку на указанный E-mail.</sub>
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
            <button className="mainBtn align-self-start" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faPaperPlane} className="pr-2" size="lg"/> Отправить
            </button>
          </form>
        </div>
        <div className="col-12 col-md-6 p-0 pt-5 pl-md-5">
          <h2 className="h1">Есть вопрос?</h2>
          <div className="mb-4"><h6>Наши телефоны</h6>
            <a href="tel:+375292624063">+375 (29) 2624063</a> <br/>
            <a href="tel:+79217750328">+7 (921) 7750328</a>
          </div>
          <div className="mb-4"><h6>Наш E-mail</h6>
            <a href="mailto:info@semantis.by">info@semantis.by</a>
          </div>
          <div className="mb-4"><h6>Наш адрес</h6>
            <a href="https://goo.gl/maps/jPtF6GyeSa6DTf178" rel="noreferrer" target="_blank">
              Беларусь, Гродно, ул. Урицкого, 12, офис 306
            </a>
          </div>
          <div>
            <h6>Мы в соцсетях:</h6>
            <a href="https://www.instagram.com/semantis.online/" rel="noreferrer" target="_blank" className="mr-2">
              <img src={ig} alt="instagram"/>
            </a>
            <a href="https://www.facebook.com/semantis.online" rel="noreferrer" target="_blank" className="mr-2">
              <img src={fb} alt="facebook"/>
            </a>
            <a href="https://www.linkedin.com/company/semantisonline/" rel="noreferrer" target="_blank">
              <img src={ln} alt="linkedin"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useState } from "react"

export default ({ step, desc, mess }) => {
  const initialStep1 = {
    value: "",
    isValid: false
  }
  const initialStep2 = {
    speed: "",
    search: "",
    visual: "",
    functional: "",
    errors: "",
    schema: "",
    other: ""
  }

  const [step1, setStep1] = useState(initialStep1)
  const [step2, setStep2] = useState(initialStep2)

  useEffect(() => {
    const stepsData = [step1, step2].map((item) => typeof item === "object" ? Object.values(item) : item).flat().filter((item) => item !== "")
    desc(stepsData)
  }, [step === 3])

  const handleCheckbox = e => {
    if (step2[e.target.name] === "") setStep2({ ...step2, [e.target.name]: e.target.value })
    else setStep2({ ...step2, [e.target.name]: "" })
  }

  const handleInput = e => setStep1({ value: e.target.value, isValid: false })

  const focusInput = e => e.target.classList.contains("failed") ? e.target.classList.remove("failed") : null

  const checkInput = (e, expression) => {
    if (expression.test(e.target.value)) setStep1({ value: e.target.value, isValid: true })
    else {
      setStep1({ value: e.target.value, isValid: false })
      e.target.classList.add("failed")
    }
  }

  if (step === 1) return (
    <div className="input-group-main align-self-start w-100">
      <label htmlFor="website" className="mb-2">Укажите ссылку на Ваш сайт:</label><br/>
      <input
        id="website"
        step="1"
        name="website"
        type="text"
        value={step1.value}
        placeholder="https://example.com/"
        onFocus={focusInput}
        onChange={handleInput}
        onBlur={(e) => checkInput(e, /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)}
      />
    </div>
  )
  else if (step === 2) return (
    <div className="d-flex flex-column">
      <span className="mb-2">Что бы вы хотели улучшить в своём сайте?</span>
      <div className="checkbox mt-3">
        <input
          id="step2.1"
          name="speed"
          type="checkbox"
          value=" Хотелось бы увеличить скорость загрузки сайта."
          checked={step2.speed === " Хотелось бы увеличить скорость загрузки сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1">Увеличить скорость загрузки сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.2"
          name="search"
          type="checkbox"
          value=" Нужно поднять рейтинг сайта в поисковой выдаче."
          checked={step2.search === " Нужно поднять рейтинг сайта в поисковой выдаче."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2">Поднять рейтинг сайта в поисковой выдаче</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.3"
          name="visual"
          type="checkbox"
          value=" Нужен редизайн сайта."
          checked={step2.visual === " Нужен редизайн сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.3">Изменить дизайн сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.4"
          name="functional"
          type="checkbox"
          value=" Необходимо исправить/добавить функционал."
          checked={step2.functional === " Необходимо исправить/добавить функционал."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.4">Исправить/добавить функционал</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.5"
          name="errors"
          type="checkbox"
          value=" Необходимо исправить ошибки в коде сайта."
          checked={step2.errors === " Необходимо исправить ошибки в коде сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.5">Исправить общие ошибки в коде сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.6"
          name="schema"
          type="checkbox"
          value=" Надо сделать микроразметку."
          checked={step2.schema === " Надо сделать микроразметку."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.6">Добавить микроразметку</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.7"
          name="other"
          type="checkbox"
          value=" Надо провести аудит сайта."
          checked={step2.other === " Надо провести аудит сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.7">Надо провести аудит сайта</label>
      </div>
    </div>
  )
  else if (step === 3) return (
    <div className="input-group-main">
      <label htmlFor="step3" className="mb-2">Если у Вас есть пожелания, которые необходимо учесть, пожалуйста, укажите
        их здесь:</label>
      <textarea
        id="step3"
        name="message"
        rows="6"
        placeholder="Также необходимо добавить интерактивную карту с указанием нашего офиса внизу главной страницы сайта"
        onChange={mess}
      />
    </div>
  )
  else return null
}
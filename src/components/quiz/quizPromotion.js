import React, { useEffect, useState } from "react"

export default ({ step, desc, mess }) => {
  const initialStep1 = {
    field: "",
    website: ""
  }

  const [step1, setStep1] = useState(initialStep1)
  const [step2, setStep2] = useState("")

  useEffect(() => {
    const stepsData = [step1, step2].map((item) => typeof item === "object" ? Object.values(item) : item).flat().filter((item) => item !== "")
    desc(stepsData)
  }, [step === 3])

  const handleCheckbox = e => step2 !== e.target.value ? setStep2(e.target.value) : setStep2("")

  const handleInput = e => setStep1({ ...step1, [e.target.name]: e.target.value })

  const focusInput = e => e.target.classList.contains("failed") ? e.target.classList.remove("failed") : null

  const checkInput = (e, expression) => expression.test(e.target.value) ? null : e.target.classList.add("failed")

  if (step === 1) return (
    <div className="d-flex flex-column align-self-start w-100">
      <div className="input-group-main">
        <label htmlFor="field">Ваша сфера деятельности:</label><br/>
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
        <label htmlFor="website">Ссылка на Ваш сайт:</label><br/>
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
  else if (step === 2) return (
    <div className="d-flex flex-column">
      <span className="mb-2">Какой вид продвижения Вас интересует?</span>
      <div className="checkbox mt-3">
        <input
          id="step2.1"
          name="ads"
          type="checkbox"
          value=" Нужна настройка контекстной рекламы."
          checked={step2 === " Нужна настройка контекстной рекламы."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1">Контекстная реклама</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.2"
          name="ads"
          type="checkbox"
          value=" Нужна настройка таргетированной рекламы."
          checked={step2 === " Нужна настройка таргетированной рекламы."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2">Таргетированная реклама</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.3"
          name="ads"
          type="checkbox"
          value=" Интересует продвижение в соц.сетях."
          checked={step2 === " Интересует продвижение в соц.сетях."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.3">Продвижение в соц.сетях</label>
      </div>
      <div className="checkbox">
        <input
          id="step2.4"
          name="ads"
          type="checkbox"
          value=" Интересует комплексное продвижение."
          checked={step2 === " Интересует комплексное продвижение."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.4">Комплексное продвижение</label>
      </div>
    </div>
  )
  else if (step === 3) return (
    <div className="input-group-main">
      <label htmlFor="goal" className="mb-2">Опишите кратко Ваши цели продвижения в интеренте:</label>
      <textarea
        id="goal"
        name="message"
        rows="6"
        placeholder=" 1) увеличение обёмов реализации продукции;
        2) поиск потенциальных инвесторов для модернизации производста;
        3) ..."
        onChange={mess}
      />
    </div>
  )
  else return null
}

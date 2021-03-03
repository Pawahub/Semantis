import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default ({ step, desc, mess }) => {
  const initialStep1 = {
    logo: "",
    brand: "",
    presentation: "",
    vector: "",
    social: "",
    webdesign: "",
    other: ""
  }

  const [step1, setStep1] = useState(initialStep1)
  const [step2, setStep2] = useState(new Date())

  const handleCheckbox = e => {
    if (step1[e.target.name] === "") setStep1({ ...step1, [e.target.name]: e.target.value })
    else setStep1({ ...step1, [e.target.name]: "" })
  }

  useEffect(() => {
    const stepsData = [step1, step2].map((item) => typeof item === "object" ? Object.values(item) : item).flat().filter((item) => item !== "")
    desc(stepsData)
  }, [step === 3])

  if (step === 1) return (
    <div className="d-flex flex-column">
      <span className="mb-2">Что именно Вас интересует?</span>
      <div className="checkbox mt-3">
        <input
          id="step1.1"
          name="logo"
          type="checkbox"
          value=" Интересует разработка логотипа."
          checked={step1.logo === " Интересует разработка логотипа."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.1">Разработка логотипа</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.2"
          name="brand"
          type="checkbox"
          value=" Необходимо разработать айдентику."
          checked={step1.brand === " Необходимо разработать айдентику."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.2">Создание уникального фирменного стиля</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.3"
          name="presentation"
          type="checkbox"
          value=" Необходимо создать презентацию."
          checked={step1.presentation === " Необходимо создать презентацию."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.3">Создание презентации</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.4"
          name="vector"
          type="checkbox"
          value=" Интересует создание рекламных баннеров или других изображений."
          checked={step1.vector === " Интересует создание рекламных баннеров или других изображений."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.4">Создание рекламных баннеров или других изображений</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.5"
          name="social"
          type="checkbox"
          value=" Необходимо сделать дизайн для профиля в соц.сети."
          checked={step1.social === " Необходимо сделать дизайн для профиля в соц.сети."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.5">Оформление профиля в социальных сетях</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.6"
          name="webdesign"
          type="checkbox"
          value=" Необходимо разработать макет сайта."
          checked={step1.webdesign === " Необходимо разработать макет сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.6">Разработка макета сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.7"
          name="other"
          type="checkbox"
          value=" Интересует услуга дизайн."
          checked={step1.other === " Интересует услуга дизайн."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.7">Другое</label>
      </div>
    </div>
  )
  else if (step === 2) return (
    <div className="input-group-main text-center">
      <label htmlFor="step2" className="mb-2">Если есть конкретный дедлайн, пожалуйста, укажите его здесь</label><br/>
      <DatePicker
        selected={step2}
        onChange={date => setStep2(date)}
        dateFormat="dd.MM.yyyy"
      /><br/>
      <sub className="p-0">если нет, просто пропустите этот шаг</sub>
    </div>
  )
  else if (step === 3) return (
    <div className="input-group-main">
      <label htmlFor="step3" className="mb-2">Если у Вас есть особенные пожелания, которые необходимо учесть,
        пожалуйста, укажите их здесь</label>
      <textarea
        id="step3"
        name="message"
        rows="6"
        placeholder="Нравиться стилистика оформления блока с карточками, как на этом сайте https://example.com/"
        onChange={mess}
      />
      <sub className="pt-3">в качестве примера можно прикрепить ссылки на другие сайты</sub>
    </div>
  )
  else return null
}

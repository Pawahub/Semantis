import React, { useContext, useState } from "react"
import { StateContext } from "../../state/stateCotext"
import { rippleEffect } from "../main"

import QuizWebsite from "./quizWebsite"
import QuizSEO from "./quizSEO"
import QuizDesign from "./quizDesign"
import QuizPromotion from "./quizPromotion"
import Form from "../form"


export default ({ init }) => {
  const { dispatch } = useContext(StateContext)

  const [quiz, setQuiz] = useState(init)
  const [step, setStep] = useState(0)

  const startQuiz = e => {
    if (e.target.dataset.value) setQuiz(e.target.dataset.value)
    else if (e.target.parentNode.dataset.value) setQuiz(e.target.parentNode.dataset.value)
    else return false
    setStep(1)
  }

  const handleQuiz = (e, direction) => {
    if (direction === "next") {
      rippleEffect(e)
      setTimeout(() => setStep(step + 1), 500)
    } else setStep(step - 1)
  }

  const mail = async (formData) => {
    await fetch("https://semantis.online/email.php", {
      method: "POST",
      body: formData
    })
  }

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
    description: [],
    message: "",
    whatsapp: "",
    telegram: "",
    viber: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const setDescription = stepsData => setFormData({ ...formData, description: stepsData })

  const setMessage = e => setFormData({ ...formData, message: e.target.value })

  const submitQuiz = e => {
    rippleEffect(e)
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
      mail(data).then(() => dispatch({ type: "open", payload: "success" }))
    }
  }

  const initSection = (
    <div className="initSection" onClick={startQuiz}>
      <h6 className="mb-4">Какого вида услуга вас интересует?</h6>
      <div data-value="/web-dev/"><span className="number">1</span>Создание сайта</div>
      <div data-value="/seo/"><span className="number">2</span>Оптимизация сайта</div>
      <div data-value="/design/"><span className="number">3</span>Дизайн</div>
      <div data-value="/internet-promotion/"><span className="number">4</span>Продвижение в интернете</div>
    </div>
  )

  const status = [0, 0.25, 0.5, 0.75, 1]

  return (
    <form className="col-12 p-3 border-top align-items-center quiz">
      <span className="progressbar" style={{ transform: `scaleX(${status[step]})` }}/>
      {quiz === "/" ? initSection : null}
      {quiz === "/web-dev/" ? <QuizWebsite step={step} desc={setDescription} mess={setMessage}/> : null}
      {quiz === "/seo/" ? <QuizSEO step={step} desc={setDescription} mess={setMessage}/> : null}
      {quiz === "/design/" ? <QuizDesign step={step} desc={setDescription} mess={setMessage}/> : null}
      {quiz === "/internet-promotion/" ? <QuizPromotion step={step} desc={setDescription} mess={setMessage}/> : null}
      {step === 4 ?
        <>
          <span className="mb-3 align-self-start">Почти готово!</span>
          <Form initialFormData={formData}/>
        </> : null}
      {quiz !== "/" ? <div className="d-flex justify-content-between flex-row-reverse w-100">
        {step === 4 ? <button type="button" className="mainBtn" onClick={submitQuiz}>Узнать цену</button> :
          <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее > </button>
        }
        {step === 1 ? null :
          <button type="button" className="mainBtn whiteBtn mr-3" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
        }
      </div> : null}
      {step === 4 ?
        <sub className="pt-3 m-0">нажимая кнопку "Узнать цену" Вы даёте своё согласие на обработку персональных
          данных</sub>
        : null}
    </form>
  )
}

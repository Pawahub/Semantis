import React, { useContext, useState } from "react"
import { StateContext } from "../state/stateCotext"
import { rippleEffect } from "./main"

import Form from "./form"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

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

  const mail = async (formData) => {
    await fetch("https://semantis.online/email.php", {
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
      mail(data).then(() => dispatch({ type: "open", payload: "success" }))
    }
  }

  return (
    <form className="quiz p-3">
      <Form initialFormData={formData}/>
      <button className="mainBtn align-self-md-start" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faPaperPlane} className="pr-2" size="lg"/> Получить предложение
      </button>
      <sub className="pt-2">нажимая кнопку "Получить предложение" Вы даёте своё согласие на обработку персональных
        данных</sub>
    </form>
  )
}

import React, { useEffect, useState } from "react"

export default ({ step, desc, mess }) => {
  const initialStep1 = {
    recognizability: "",
    communication: "",
    loyalty: "",
    customers: "",
    sales: "",
    members: ""
  }
  const initialStep2 = {
    template: "",
    content: ""
  }

  const [step1, setStep1] = useState(initialStep1)
  const [step2, setStep2] = useState(initialStep2)

  useEffect(() => {
    const stepsData = [step1, step2].map((item) => typeof item === "object" ? Object.values(item) : item).flat().filter((item) => item !== "")
    desc(stepsData)
  }, [step === 3])

  const handleCheckbox = e => {
    switch (e.target.step) {
      case "1":
        if (step1[e.target.name] === "") setStep1({ ...step1, [e.target.name]: e.target.value })
        else setStep1({ ...step1, [e.target.name]: "" })
        break
      case "2":
        if (step2[e.target.name] !== e.target.value) setStep2({ ...step2, [e.target.name]: e.target.value })
        else setStep2({ ...step2, [e.target.name]: "" })
        break
    }
  }

  if (step === 1) return (
    <div className="d-flex flex-column">
      <span className="mb-2">Какие задачи вы хоите решать с помощью сайта?</span>
      <div className="checkbox mt-3">
        <input
          id="step1.1"
          name="recognizability"
          step="1"
          type="checkbox"
          value=" Надо повысить имидж и узнаваемость бренда."
          checked={step1.recognizability === " Надо повысить имидж и узнаваемость бренда."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.1">Повысить имидж и узнаваемость бренда</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.2"
          name="communication"
          step="1"
          type="checkbox"
          value=" Надо организровать связь между клиентами и компанией."
          checked={step1.communication === " Надо организровать связь между клиентами и компанией."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.2">Организровать связь между клиентами и компанией</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.3"
          name="loyalty"
          step="1"
          type="checkbox"
          value=" Надо повысить лояльность клиентов."
          checked={step1.loyalty === " Надо повысить лояльность клиентов."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.3">Повысить лояльность клиентов</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.4"
          name="customers"
          step="1"
          type="checkbox"
          value=" Надо привлечь новых клиентов."
          checked={step1.customers === " Надо привлечь новых клиентов."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.4">Привлекать новых клиентов через интернет</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.5"
          name="sales"
          step="1"
          type="checkbox"
          value=" С сайта необходимо осуществлять прямые продажи."
          checked={step1.sales === " С сайта необходимо осуществлять прямые продажи."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.5">Осуществлять прямые продажи с сайта</label>
      </div>
      <div className="checkbox">
        <input
          id="step1.6"
          name="members"
          step="1"
          type="checkbox"
          value=" Надо привлечь публику для участия в мероприятии."
          checked={step1.members === " Надо привлечь публику для участия в мероприятии."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step1.6">Привлечь публику для участия в мероприятии</label>
      </div>
    </div>
  )
  else if (step === 2) return (
    <div className="d-flex flex-column">
      <span className="mb-2">Для сайта необходим индивидуальный дизайн?</span>
      <div className="checkbox d-flex flex-column">
        <input
          id="step2.1.1"
          name="template"
          step="2"
          type="checkbox"
          value=" Нужен индивидуальный дизайн для сайта."
          checked={step2.template === " Нужен индивидуальный дизайн для сайта."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1.1">Да</label>
        <input
          id="step2.1.2"
          name="template"
          step="2"
          type="checkbox"
          value=" Монжо сделать сайт из шаблона."
          checked={step2.template === " Монжо сделать сайт из шаблона."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.1.2">Нет</label>
      </div>
      <span className="my-2">У вас уже есть необходимые материалы для сайта?</span>
      <div className="checkbox d-flex flex-column">
        <input
          id="step2.2.1"
          name="content"
          step="2"
          type="checkbox"
          value=" Контент для сайта есть."
          checked={step2.content === " Контент для сайта есть."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2.1">Да</label>
        <input
          id="step2.2.2"
          name="content"
          step="2"
          type="checkbox"
          value=" Контента для сайта нет."
          checked={step2.content === " Контента для сайта нет."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2.2">Нет</label>
        <input
          id="step2.2.3"
          name="content"
          step="2"
          type="checkbox"
          value=" Материалы требуют доработки."
          checked={step2.content === " Материалы требуют доработки."}
          onChange={handleCheckbox}
        />
        <label htmlFor="step2.2.3">Частично</label>
      </div>
    </div>
  )
  else if (step === 3) return (
    <div className="input-group-main">
      <label htmlFor="step3" className="mb-2">Если у Вас есть требования к сайту, которые необходимо учесть,
        пожалуйста, укажите их здесь:</label>
      <textarea
        id="step3"
        name="message"
        rows="6"
        placeholder="На сайте необходимо реализовать калькулятор стоимости заказа как здесь: https://example.com/calculator"
        onChange={mess}
      />
      <sub className="pt-3">в качестве примера можно прикрепить ссылки на другие сайты</sub>
    </div>
  )
  else return null
}

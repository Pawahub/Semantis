import React, { useContext, useState } from "react"
import { StateContext } from "../../../state/stateCotext"
import { rippleEffect } from "../../main"
import List from "../../list"

import img1 from "../../../images/internet-promotion/slider/img1.png"
import img2 from "../../../images/internet-promotion/slider/img2.png"
import img3 from "../../../images/internet-promotion/slider/img3.png"
import img4 from "../../../images/internet-promotion/slider/img4.png"
import arrow from "../../../images/internet-promotion/arrow.svg"

import "./targeted-advertising.sass"

export default function TargetedAdvertising() {
  const { dispatch } = useContext(StateContext)

  const [state, setState] = useState(1)
  const sliderItems = [img1, img2, img3, img4]
  const sliderHandler = (e) => {
    const value = sliderItems.length - 1
    if (e.target.classList.contains("prev")) {
      if (state === 0) setState(value)
      else setState(state - 1)
    }
    if (e.target.classList.contains("next")) {
      if (state === value) setState(0)
      else setState(state + 1)
    }
  }

  const handleClick = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "lead" })

  }
  const listArr = [
    "Охват только целевой аудитории",
    "Низкий порог входа (можно запустить кампанию с небольшими вложениями)",
    "Четкий измеримый результат (все данные о рекламных кампаниях качественно предоставляются в личных " +
    "рекламных кабинетах, выгружаются в удобных форматах)"
  ]

  return (
    <section className="targeted-advertising py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column">
            <h2 className="d-block d-md-none">Таргетинг</h2>
            <h2 className="d-none d-md-block">Таргетированная реклама</h2>
            <p className="mt-3 mt-md-5">
              Даёт возможность не только увеличить продажи, но и продавать легко.
              Мы настроим её на вашу целевую аудиторию по заданным параметрам: пол, возраст, геолокация и т.д.,
              что позволит большинству потенциальных клиентов прийти именно к вам.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8 d-flex flex-column justify-content-between">
            <h3>Преимущества таргетированной рекламы:</h3>
            <List listArr={listArr}/>
            <button className="mainBtn align-self-md-start" onClick={handleClick}>Мне подходит</button>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-5">
            <div className="targeted-advertising__slider" onClick={sliderHandler}>
              <div className="targeted-advertising__slider-item prev">
                <div className="arrow"><img src={arrow} alt="arrow"/></div>
                <img src={sliderItems[state - 1] ? sliderItems[state - 1] : sliderItems[sliderItems.length - 1]}
                     alt="Продвижение"/>
              </div>
              <div className="targeted-advertising__slider-item active">
                <img src={sliderItems[state]} alt="Продвижение"/>
              </div>
              <div className="targeted-advertising__slider-item next">
                <div className="arrow"><img src={arrow} alt="arrow"/></div>
                <img src={sliderItems[state + 1] ? sliderItems[state + 1] : sliderItems[0]} alt="Продвижение"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
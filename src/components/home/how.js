import React, { useContext, useEffect } from "react"
import { StateContext } from "../../state/stateCotext"

import triangles from "../../images/how/triangles.svg"
import zz from "../../images/how/zz.svg"
import dot from "../../images/how/dot.svg"
import step1 from "../../images/how/1.png"
import step2 from "../../images/how/2.png"
import step3 from "../../images/how/3.png"
import step4 from "../../images/how/4.png"
import step5 from "../../images/how/5.png"
import step6 from "../../images/how/6.png"

export default () => {
  const { state } = useContext(StateContext)

  useEffect(() => {
    if (state.selectedSection === 2 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (document.documentElement.clientWidth <= 991)) {
      let delay
      document.querySelectorAll(".step").forEach(item => {
        item.childNodes[0].style.animationDelay = `${delay}s`
        item.style.transitionDelay = `${delay}s`
        item.classList.add("fadeIn")
        item.nextElementSibling.style.transitionDelay = `${delay - 0.3}s`
        item.nextElementSibling.style.color = `#085DDB`
        item.nextElementSibling.classList.add("fadeIn")
        delay += 0.5
      })
    }
  },[state.selectedSection])

  return (
    <section className="how">
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap">
        <img className="triangles d-none d-md-block" src={triangles} alt=""/>
        <img className="zz2 d-none d-lg-block" src={zz} alt=""/>
        <h2 className="text-white h1">Как мы работаем?</h2>
        <div className="row m-0 justify-content-center">
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="step">
              <img src={step1} alt="Формирование бизнес-логики проекта" className="rounded-circle"/>
              <div>
                <div className="d-md-none d-flex number">01<img src={dot} alt="" className="ml-1"/></div>
                <h6>Формирование бизнес-логики</h6>
              </div>
            </div>
            <div className="progressLine">1</div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="step">
              <img src={step2} alt="Разработка функционала" className="rounded-circle"/>
              <div>
                <div className="d-md-none d-flex number">02<img src={dot} alt="" className="ml-1"/></div>
                <h6>Разработка функционала</h6>
              </div>
            </div>
            <div className="progressLine">2</div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="step">
              <img src={step3} alt="Разработка дизайна" className="rounded-circle"/>
              <div>
                <div className="d-md-none d-flex number">03<img src={dot} alt="" className="ml-1"/></div>
                <h6>Разработка дизайна</h6>
              </div>
            </div>
            <div className="progressLine">3</div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="step">
              <img src={step4} alt="Вёрстка сайта" className="rounded-circle"/>
              <div>
                <div className="d-md-none d-flex number">04<img src={dot} alt="" className="ml-1"/></div>
                <h6>Вёрстка сайта</h6>
              </div>
            </div>
            <div className="progressLine">4</div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="step">
              <img src={step5} alt="Наполнение контентом" className="rounded-circle"/>
              <div>
                <div className="d-md-none d-flex number">05<img src={dot} alt="" className="ml-1"/></div>
                <h6>Наполнение контентом</h6>
              </div>
            </div>
            <div className="progressLine">5</div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="step">
              <img src={step6} alt="Публикация и оптимизация" className="rounded-circle"/>
              <div>
                <div className="d-md-none d-flex number">06<img src={dot} alt="" className="ml-1"/></div>
                <h6>Публикация и оптимизация</h6>
              </div>
            </div>
            <div className="progressLine">6</div>
          </div>
        </div>
      </div>
    </section>
  )
}

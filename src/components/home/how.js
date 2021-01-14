import React, { useContext, useEffect } from "react"
import { StateContext } from "../../state/stateCotext"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import triangles from "../../images/how/triangles.svg"
import zz from "../../images/how/zz.svg"
import step1 from "../../images/how/1.png"
import step2 from "../../images/how/2.png"
import step3 from "../../images/how/3.png"
import step4 from "../../images/how/4.png"
import step5 from "../../images/how/5.png"
import step6 from "../../images/how/6.png"

export default () => {
  const { state } = useContext(StateContext)

  const steps = [
    { img: step1, text: "Формирование бизнес-логики" },
    { img: step2, text: "Разработка функционала" },
    { img: step3, text: "Разработка дизайна" },
    { img: step4, text: "Вёртска сайта" },
    { img: step5, text: "Наполнение контентом" },
    { img: step6, text: "Публикация и оптимизация" }
  ]

  // const startAnimate = (e, initialDelay) => {
  //   document.querySelectorAll(".step").forEach(item => {
  //     item.childNodes[0].style.animationDelay = `${initialDelay}s`
  //     item.style.transitionDelay = `${initialDelay}s`
  //     item.classList.add("fadeIn")
  //     e.target.childNodes[1].style.transitionDelay = `${initialDelay - 0.3}s`
  //     e.target.childNodes[1].style.color = `#085DDB`
  //     e.target.childNodes[1].classList.add("fadeIn")
  //   })
  // }

  useEffect(() => {
    if (state.selectedSection === 2 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (document.documentElement.clientWidth <= 991)) {
      // startAnimate()
    }
  }, [state.selectedSection])

  const delay = [500, 1000, 1500, 2000, 2500, 3000]

  return (
    <section className="how">
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap">
        <img className="triangles d-none d-md-block" src={triangles} alt=""/>
        <img className="zz2 d-none d-lg-block" src={zz} alt=""/>
        <h2 className="text-white h1">Как мы работаем?</h2>
        <TransitionGroup className="row m-0 justify-content-center">
          {steps.map(({ img, text }, index) => {
            return (
              <div className="col-12 col-md-4 m-0 p-0">
                <CSSTransition
                  in={state.selectedSection === 2}
                  key={index}
                  timeout={500}
                  classNames="fade"
                >
                  <div className="step" style={{transitionDelay: `${delay[index]}ms`}}>
                    <img src={img} alt={text} className="rounded-circle"/>
                    <div>
                      <div className="d-md-none d-flex number">{index + 1}
                        <strong>&#8228;</strong>
                      </div>
                      <h6>{text}</h6>
                    </div>
                  </div>
                </CSSTransition>
                <div className="progressLine" style={{transitionDelay: delay[index] - 450 + 'ms'}}>{index + 1}</div>
              </div>
            )
          })}
        </TransitionGroup>
      </div>
    </section>
  )
}

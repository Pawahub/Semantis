import React, { useContext } from "react"
import { StateContext } from "../../../state/stateCotext"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import dots from "../../../images/web-dev/dots.svg"
import treangls from "../../../images/web-dev/treangls.svg"
import stage1 from "../../../images/web-dev/1.png"
import stage2 from "../../../images/web-dev/2.png"
import stage3 from "../../../images/web-dev/3.png"
import stage4 from "../../../images/web-dev/4.png"
import stage5 from "../../../images/web-dev/5.png"
import stage6 from "../../../images/web-dev/6.png"

import "./stages-of-creation.sass"

export default function StagesOfCreation() {
  const { state } = useContext(StateContext)

  const stages = [
    { img: stage1, text: "Формирование бизнес-логики" },
    { img: stage2, text: "Разработка дизайна" },
    { img: stage3, text: "Разработка функционала" },
    { img: stage4, text: "Вёртска сайта" },
    { img: stage5, text: "Наполнение контентом" },
    { img: stage6, text: "Оптимизация и публикация" }
  ]

  const delay = [500, 1000, 1500, 2000, 2500, 3000]

  return (
    <section className="stages-of-creation">
      <div className="stages-of-creation__items">
        <div className="item1">
          <img src={dots} alt="dots"/>
        </div>
        <div className="item2">
          <img src={treangls} alt="treangls"/>
        </div>
      </div>
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap">
        <h2>Как мы работаем?</h2>
        <TransitionGroup className="row m-0 justify-content-center">
          {(state.selectedSection === 3 || /Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) ?
            (stages.map(({ img, text }, index) => (
              <div className="col-12 col-md-4 m-0 p-0">
                <CSSTransition
                  in={state.selectedSection === 3}
                  key={index}
                  timeout={500}
                  classNames="fade"
                >
                  <div className={(/Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) ? "step fade-enter-done" : "step"} style={{ transitionDelay: delay[index] + "ms" }}>
                    <img src={img} alt={text} className="rounded-circle"
                         style={{ animationDelay: delay[index] + "ms" }}/>
                    <div>
                      <div className="d-md-none d-flex number">{index + 1}
                        <strong>&#8228;</strong>
                      </div>
                      <h6>{text}</h6>
                    </div>
                  </div>
                </CSSTransition>
                <div className="progressLine" style={{ transitionDelay: delay[index] - 450 + "ms" }}>{index + 1}</div>
              </div>
            ))) : null}
        </TransitionGroup>
      </div>
    </section>
  )
}
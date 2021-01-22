import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import triangles from "../../images/how/triangles.svg"
import zz from "../../images/how/zz.svg"
import stage1 from "../../images/how/1.png"
import stage2 from "../../images/how/2.png"
import stage3 from "../../images/how/3.png"
import stage4 from "../../images/how/4.png"
import stage5 from "../../images/how/5.png"
import stage6 from "../../images/how/6.png"

export default () => {
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
    <section className="how">
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap">
        <img className="triangles d-none d-md-block" src={triangles} alt=""/>
        <img className="zz2 d-none d-lg-block" src={zz} alt=""/>
        <h2 className="text-white h1">Как мы работаем?</h2>
        <TransitionGroup className="row m-0 justify-content-center">
          {(state.selectedSection === 2 || /Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) ?
            (stages.map(({ img, text }, index) => (
              <div className="col-12 col-md-4 m-0 p-0">
                <CSSTransition
                  in={state.selectedSection === 2}
                  key={index}
                  timeout={500}
                  classNames="fade"
                >
                  <div className={document.documentElement.clientWidth <= 991 ? "step fade-enter-done" : "step"}
                       style={{ transitionDelay: delay[index] + "ms" }}>
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

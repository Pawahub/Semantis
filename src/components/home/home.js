import React, { useContext } from "react"
import { rippleEffect } from "../main"
import { StateContext } from "../../state/stateCotext"

import Modal from "../modal/modal"
import Quiz from "../quiz"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingUsd, faTimes } from "@fortawesome/free-solid-svg-icons"
import mouse from "../../images/home/mouse.svg"
import fb from "../../images/home/fb.svg"
import ig from "../../images/home/ig.svg"
import ln from "../../images/home/in.svg"
import dot from "../../images/home/dot.png"

export default () => {
  const { state, dispatch } = useContext(StateContext)

  const handleGetPrice = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "quiz" })
  }

  return (
    <section className="home">
      <div className="container py-5">
        <div
          className="offset-sm-4 offset-md-6 offset-lg-8 col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column align-items-start p-0 mt-5">
          <h6 className="blue-color m-0"><strong>веб-студия</strong></h6>
          <h1 className="h1">Семантис</h1>
          <ul className="home-list">
            <li>
              <div className="number">01</div>
              <img src={dot} alt="Разработка сайтов" className="ml-2 mr-3 text"/>
              Разработка сайтов
            </li>
            <li>
              <div className="number">02</div>
              <img src={dot} alt="Оптимизация сайтов" className="ml-2 mr-3 text"/>
              Оптимизация сайтов
            </li>
            <li>
              <div className="number">03</div>
              <img src={dot} alt="Дизайн" className="ml-2 mr-3"/>
              Дизайн
            </li>
            <li>
              <div className="number">04</div>
              <img src={dot} alt="Продвижение в интернете" className="ml-2 mr-3"/>
              Продвижение в интернете
            </li>
          </ul>
          <button className="mainBtn" onClick={handleGetPrice}>
            Узнать цену <FontAwesomeIcon icon={faHandHoldingUsd} className="pr-2" size="lg"/>
          </button>
          {state.show === "quiz" ?
            <Modal>
              <div className="modal-header">
                <h6 className="m-0">Расскажите нам о своём проекте</h6>
                <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
              </div>
              <Quiz/>
            </Modal>
            : null
          }
        </div>
        <div className="offset-sm-4 offset-md-6 offset-lg-0 mt-5 social">
          <a href="https://www.instagram.com/semantis.online/" rel="noreferrer"
             target="_blank" className="my-2 mr-2"><img src={ig} alt="instagram"/></a>
          <a href="https://www.facebook.com/semantis.online" rel="noreferrer"
             target="_blank" className="my-2 mr-2"><img src={fb} alt="facebook"/></a>
          <a href="https://www.linkedin.com/company/semantisonline/" rel="noreferrer"
             target="_blank" className="my-2 mr-2"><img src={ln} alt="linkedin"/></a>
        </div>
      </div>
      <div className="mouse d-lg-block d-none">
        <img src={mouse} alt=""/>
      </div>
    </section>
  )
}

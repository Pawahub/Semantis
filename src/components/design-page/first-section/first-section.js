import React, { useContext, useState } from "react"
import { StateContext } from "../../../state/stateCotext"
import { rippleEffect } from "../../main"

import Modal from "../../modal/modal"
import FourthSection from "../../quiz/fourthSection"

import drop from "../../../images/design/drop.png"
import drops from "../../../images/design/drops.png"
import laptop from "../../../images/design/laptop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons"

import "./first-section.sass"

export default function FirstSectionDesign() {
  const { state, dispatch } = useContext(StateContext)

  const elements = (
    <div className="first-section-design__elements">
      <div>
        <img src={drop} className="drop" alt="drop"/>
        <img src={drops} className="drops" alt="drops"/>
        <img src={laptop} className="laptop" alt="laptop"/>
      </div>
    </div>
  )

  const [submit, setSubmit] = useState(false)

  const handleSubmit = e => {
    rippleEffect(e)
    setTimeout(() => setSubmit(true), 500)
  }

  const cancelSubmit = () => setSubmit(false)

  return (
    <section className="first-section-design">
      {window.innerWidth >= 990 ? elements : null}
      <div className="container">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="h1">Дизайн сайта</h1>
            <p>Сайт компании выглядит не современно и похож на множество других?
              Снизилось количество посетителей? Оптимальное решение — сделать редизайн сайта.
              Это возможность улучшить образ и имидж компании в глазах клиента,
              привлечь новых посетителей и удержать старых, открыть компанию с новой
              стороны.</p>
            <button className="mainBtn whiteBtn" onClick={() => dispatch({ type: "open", payload: "lead" })}>
              Оставить заявку
            </button>
            {state.show === "lead" ?
              <Modal>
                <div className="modal-header">
                  <h6 className="m-0">Оставьте заявку</h6>
                  <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
                </div>
                <div className="grey-color p-3">
                  <FourthSection
                    submit={submit}
                    setSubmit={cancelSubmit}
                  />
                  <button className="mainBtn" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPaperPlane} className="pr-2" size="lg"/> Отправить
                  </button>
                </div>
              </Modal>
              : null
            }
          </div>
        </div>
      </div>
    </section>
  )
}
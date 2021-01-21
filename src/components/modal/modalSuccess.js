import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"

import Modal from "../modal/modal"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export default () => {
  const { dispatch } = useContext(StateContext)

  return (
    <Modal>
      <div className="modal-header">
        <span>Спасибо</span>
        <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
      </div>
      <p className="text-center align-middle p-3 m-0">Мы приняли Вашу заявку и обязательно свяжемся с Вами в ближайшее время!</p>
      <button className="mainBtn align-self-center m-3" onClick={() => dispatch({ type: "close" })}>
        OK
      </button>
    </Modal>
  )
}

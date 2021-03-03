import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"
import { rippleEffect } from "../main"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons"

export default function QuizBtn() {
  const { dispatch } = useContext(StateContext)

  const handleGetPrice = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "quiz" })
  }

  return (
    <button className="mainBtn" onClick={handleGetPrice}>
      Узнать цену&nbsp;<FontAwesomeIcon icon={faHandHoldingUsd} className="pr-2" size="lg"/>
    </button>
  )
}
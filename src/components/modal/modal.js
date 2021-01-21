import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"

import "./modal.css"

export default ({ children }) => {
  const { state, dispatch } = useContext(StateContext)

  const modalClose = e => {
    if (e.target.classList.contains("overlay") && state.show !== "quiz") dispatch({ type: "close" })
  }

  return (
    <div role="dialog" className="overlay" onClick={modalClose}>
      <div className="modal open">
        {children}
      </div>
    </div>
  )
}

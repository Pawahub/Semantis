import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"
import { CSSTransition } from "react-transition-group"

import "./modal.css"

export default ({ children }) => {
  const { state, dispatch } = useContext(StateContext)

  const modalClose = e => {
    if (e.target.classList.contains("overlay") && state.show !== "quiz") dispatch({ type: "close" })
  }

  return (
    <div role="dialog" className="overlay" onClick={modalClose}>
      <CSSTransition
        in={children !== ""}
        appear={children !== ""}
        timeout={500}
        classNames="modal"
      >
        <div className="modal">
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

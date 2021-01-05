import React, { useContext, useRef, useEffect } from "react"
import { StateContext } from "../state/stateCotext"

import "../style/modal.css"

export default ({ children }) => {
  const { state, dispatch } = useContext(StateContext)

  const modalRef = useRef()

  useEffect(() => {
    modalRef.current.classList.add("open")
  }, [])

  const modalClose = e => {
    if (e.target.classList.contains("overlay") && state.show !== "quiz") dispatch({ type: "close" })
  }

  return (
    <div role="dialog" className="overlay" onClick={modalClose}>
      <div ref={modalRef} className="modal">
        {children}
      </div>
    </div>
  )
}

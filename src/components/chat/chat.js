import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import whatsapp from "../../images/nav/whatsapp.png"
import telegram from "../../images/nav/telegram.png"
import viber from "../../images/nav/viber.png"

import "./chat.css"

export default () => {
  const { state, dispatch } = useContext(StateContext)

  let chatBtn

  if (state.selectedSection === 2) {
    if (state.show === "messengers") chatBtn = "chatBtn chatBtnLightOpen"
    else chatBtn = "chatBtn chatBtnLight"
  } else {
    if (state.show === "messengers") chatBtn = "chatBtn chatBtnDarkOpen"
    else chatBtn = "chatBtn"
  }

  const handlerMessengerMenu = () => {
    state.show === "messengers" ? dispatch({ type: "close" }) : dispatch({ type: "open", payload: "messengers" })
  }

  return (
    <div
      className={state.show === "messengers" ? "btnContainer d-none d-sm-flex chat_active" : "btnContainer d-none d-sm-flex"}>
      <a href="https://wa.me/79217750328" className="m-2"><img src={whatsapp} alt="whatsapp" width="40px"/></a>
      <a href="https://t.me/semantis" className="m-2"><img src={telegram} alt="telegram" width="40px"/></a>
      <a href="viber://chat?number=+375292624063" className="m-2"><img src={viber} alt="viber" width="40px"/></a>
      <button className={chatBtn} onClick={handlerMessengerMenu}>
        <FontAwesomeIcon icon={faComments} size="lg" className={state.show === "messengers" ? "icon rotate" : "icon"}/>
      </button>
    </div>
  )
}

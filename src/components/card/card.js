import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"
import { rippleEffect } from "../main"

import "./card.sass"
import { faCaretDown, faGift } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card({ content }) {
  const { dispatch } = useContext(StateContext)

  const handleClick = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "lead" })
  }

  return (
    <div className="card card__element">
      <div className="card-header">
        <h5 className="card-title">{content.title}</h5>
      </div>
      <div className="card-body">
        {content.description ?
          <div className="description">
            <FontAwesomeIcon icon={faGift} size="lg" className={"mr-2"}/>
            <div>{content.description}</div>
          </div> : null}
        <div className="row mt-3">
          <div className="col-6">
            <p className="oldPrice">{content.oldPrice}</p>
            <p className="price">{content.price}</p>
          </div>
          <div className="col-6 discount p-3">{content.discount}</div>
        </div>

      </div>
      <button className="mainBtn" onClick={handleClick}>Узнать подробнее</button>

    </div>
  )
}
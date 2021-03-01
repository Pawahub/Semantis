import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"

import "./card.sass"

export default ({ content }) => {
  return (
    <div className="card card__element">
      <div className="card-view">
        <a href={content.pdf} target="_blank" rel="nofollow">Подробнее</a>
        <FontAwesomeIcon icon={faEllipsisV} color="#085DDB"/>
      </div>
      <div className="card-body">
        <div className="card-header">
          <a href={content.pdf} target="_blank" rel="nofollow">
            <img className="img-responsive" src={content.img} alt="content.title"/>
          </a>
        </div>
        <h5 className="card-title">{content.title}</h5>
        <a href={content.link} rel="nofollow">{content.link}</a>
        <p className="card-text">{content.description}</p>
      </div>
    </div>
  )
}
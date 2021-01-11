import React from "react"
import './card.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
export default function CardCase({content}) {
  return (
    <div className="card card__element">
      <div className="card-view">
        <a href={content.pdf} target="_blank">Подробнее</a>
        <FontAwesomeIcon icon={faEllipsisV} color="#085DDB"/>
      </div>
      <div className="card-body">
        <div className="card-header">
          <img className="img-responsive" src={content.img} alt="content.title"/>
        </div>
        <h5 className="card-title">{content.title}</h5>
        <a href={content.link}>{content.link}</a>
        <p className="card-text"><strong>Задача: </strong>{content.description}</p>
      </div>
    </div>
  )
}
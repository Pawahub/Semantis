import React from "react"
import './card.sass'
export default function Card({content}) {
  return (
    <div className="card card__element">
      <div className="card-body">
        <div className="card-header">
          <img src={content.img} alt="content.title"/> <strong>{content.nomer}</strong>
        </div>
        <h5 className="card-title">{content.title}</h5>
        <p className="card-text">{content.description}</p>
      </div>
    </div>
  )
}
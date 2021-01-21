import React from "react"
import './list.sass'
export default function List({ listArr }) {
  const list = (arr) => {
    return arr.map((el, idx) => {
      return (
        <li key={idx}>
          <div className="number"><span>{idx < 10 ? '0' + (idx + 1) : idx + 1} </span><strong>&#8228;</strong></div>
          <span className="span-child">{el}</span>
        </li>
      )
    })
  }
  return (
    <ul className="home-list">
      {list(listArr)}
    </ul>
  )
}
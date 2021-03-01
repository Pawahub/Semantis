import React from "react"
import QuizBtn from "../buttons/quizBtn"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import mouse from "../../images/home/mouse.svg"

export default () => {
  const list = (arr) => {
    return arr.map((el, idx) => {
      return (
        <li key={idx}>
          <div className="number"><span>{idx < 10 ? "0" + (idx + 1) : idx + 1} </span><strong>&#8228;</strong></div>
          <span>{el}</span>
        </li>
      )
    })
  }

  return (
    <section className="home">
      <div className="container py-5">
        <div
          className="offset-sm-4 offset-md-6 offset-lg-8 col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column align-items-start p-0 mt-5">
          <span className="blue-color font-weight-bold">веб-студия</span>
          <h1>Семантис</h1>
          <ul className="home-list">
            {list(["Разработка сайтов", "Оптимизация сайтов", "Дизайн", "Продвижение в интернете"])}
          </ul>
          <QuizBtn/>
        </div>
        <div className="offset-sm-4 offset-md-6 offset-lg-0 mt-5 social">
          <a href="https://www.instagram.com/semantis.online/" rel="noreferrer noopener" target="_blank"
             className="my-2 mr-2">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="blue-color"/>
          </a>
          <a href="https://www.facebook.com/semantis.online/" rel="noreferrer noopener" target="_blank"
             className="my-2 mr-2">
            <FontAwesomeIcon icon={faFacebook} size="lg" className="blue-color"/>
          </a>
          <a href="https://www.linkedin.com/company/semantisonline/" rel="noreferrer noopener" target="_blank"
             className="my-2 mr-2">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="blue-color"/>
          </a>
        </div>
      </div>
      <div className="mouse d-lg-block d-none">
        <img src={mouse} alt=""/>
      </div>
    </section>
  )
}

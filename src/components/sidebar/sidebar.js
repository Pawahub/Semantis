import React, { useContext } from "react"
import { Link } from "gatsby"
import { currentPage } from "../main"
import { StateContext } from "../../state/stateCotext"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import whiteLogo from "../../images/nav/logo-white.svg"

import "./sidebar.css"

export default () => {
  const { state, dispatch } = useContext(StateContext)

  const setCurrentPage = (e) => {
    currentPage(e)
    if (e.target.tagName === "A") dispatch({ type: "close" })
  }

  return (
    <div id="sidebar" className={state.show === "sidebar" ? "px-4 open" : "px-4"}>
      <div className="d-flex justify-content-between">
        <img className="img-fluid" src={whiteLogo} alt="Semantis"/>
        <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
      </div>
      <ul role="navigation" onClick={setCurrentPage} onKeyDown={setCurrentPage}>
        <li><Link to="/" className="active">Главная</Link></li>
        <li><Link to="/">Разработка сайтов</Link></li>
        <li><Link to="/">Продвижение в интернете</Link></li>
        <li><Link to="/">Дизайн</Link></li>
        <li><Link to="/">SMM</Link></li>
      </ul>
      <div>
        <a href="https://www.instagram.com/semantis.online/" rel="noreferrer" target="_blank" className="mr-2">
          <FontAwesomeIcon icon={faInstagram} size="lg"/>
        </a>
        <a href="https://www.facebook.com/semantis.online" rel="noreferrer" target="_blank" className="mr-2">
          <FontAwesomeIcon icon={faFacebook} size="lg"/>
        </a>
        <a href="https://www.linkedin.com/company/semantisonline/" rel="noreferrer" target="_blank" className="mr-2">
          <FontAwesomeIcon icon={faLinkedin} size="lg"/>
        </a>
      </div>
      <div className="contact">
        <a href="tel:+375292624063">+375 (29) 2624063</a>
        <a href="tel:+79217750328">+7 (921) 7750328</a>
        <a href="mailto:info@semantis.by">info@semantis.by</a>
      </div>
    </div>
  )
}

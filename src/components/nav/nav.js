import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { currentPage } from "../main"
import { StateContext } from "../../state/stateCotext"

import Modal from "../modal/modal"
import Sidebar from "../sidebar/sidebar"
import Button from "../chat/chat"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faComments, faBars, faTimes, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import blueLogo from "../../images/nav/logo.png"
import whiteLogo from "../../images/nav/logo-white.svg"
import whatsapp from "../../images/nav/whatsapp.png"
import telegram from "../../images/nav/telegram.png"
import viber from "../../images/nav/viber.png"
import ru from "../../images/nav/ru.svg"
import by from "../../images/nav/by.svg"

import "./nav.css"
import './nav-state.sass'

export default ({ siteTitle }) => {
  const { state, dispatch } = useContext(StateContext)

  const [active, setActive] = useState({
    activeEl: null,
    parth: null
  })


  const line = useRef()

  const spyLine = (e) => {
    let target

    (!e || e.type === "mouseleave" || e.target.tagName !== "A") ?
      target = document.querySelectorAll(".active, .activeWhite")[0] :
      target = e.target

    let width = target.getBoundingClientRect().width,
      height = target.getBoundingClientRect().height,
      left = target.getBoundingClientRect().left,
      top = target.getBoundingClientRect().top

    line.current.style.width = `${width - 16}px`
    line.current.style.height = `${height}px`
    line.current.style.left = `${left + 8}px`
    line.current.style.top = `${top}px`
    line.current.style.transform = "none"
  }

  const handlerMessengerMenu = () => {
    state.show === "messengers" ? dispatch({ type: "close" }) : dispatch({ type: "open", payload: "messengers" })
  }

  useEffect(() => {
    setTimeout(spyLine, 1000)
    window.addEventListener("resize", spyLine)
    return () => {
      window.removeEventListener("resize", spyLine)
    }
  }, [])

  const parth = window.location.pathname;

  const styleMenu = () => {
    switch (parth) {
      case '/':
        return state.selectedSection === 2 ? 'whiteMenu' : 'greyMenu';
        break;
      case '/web-dev':
        if (state.selectedSection === 1) {
          return 'left-gray_right-white'
        } else if (state.selectedSection === 3) {
          return 'whiteMenu';
        } else return 'greyMenu'
      break;
      case '/develop':
        return 'greyMenu line-none'
        break;
      default:
        return 'greyMenu'
    }
  }
  const styleImg = () => {
    console.log(parth)
    switch (parth) {
      case '/':
        return state.selectedSection === 2 ? whiteLogo : blueLogo
        break;
      case '/web-dev':
        return state.selectedSection === 3 ? whiteLogo : blueLogo
        break;
      default:
        return blueLogo
    }
  }


  return (
    <header className={styleMenu()}>
      <div className="container d-flex justify-content-between align-items-center mt-3 mb-2"
           >
        <div>
          <img src={styleImg()} alt={siteTitle} className="img-fluid"
               width="120px"/>
        </div>
        <nav className="menu d-none d-md-flex align-items-center">
          <ul
            role="navigation"
            onMouseOver={spyLine}
            onMouseLeave={spyLine}
            onClick={(e) => currentPage(e, state.selectedSection)}>
              <li><Link className={parth === '/' ? 'active': null} to="/">Главная</Link></li>
              <li><Link className={parth === '/web-dev' ? 'active': null} to="/web-dev">Веб-разработка</Link></li>
              <li><Link to="/develop">Продвижение</Link></li>
              <li><Link to="/develop">Дизайн</Link></li>
              <li><Link to="/develop">SMM</Link></li>
          </ul>
        </nav>
        <span ref={line} id="line" className="d-none d-md-block"/>
        <div className="tel d-none d-lg-block">
          <ul>
            <li>
              <img src={ru} alt="ru"/>
              <a href="tel:+79217750328">+79217750328</a>
            </li>
            |&nbsp;
            <li>
              <img src={by} alt="by"/>
              <a href="tel:+375292624063">+375292624063</a>
            </li>
          </ul>
        </div>
        <div className="d-flex d-lg-none">
          <button
            className={state.show === "phone" ? "modalBtn d-flex d-lg-none mr-2 open" : "modalBtn d-flex d-lg-none mr-2"}
            onClick={() => dispatch({ type: "open", payload: "phone" })}>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
          </button>
          <button role="menu"
            className={state.show === "messengers" ? "chatTop d-flex d-sm-none mr-2 open" : "chatTop d-flex d-sm-none mr-2"}
            onClick={handlerMessengerMenu}>
            <FontAwesomeIcon icon={faComments} size="lg"/>
            <div className={state.show === "messengers" ? "chat d-sm-none active" : "chat d-sm-none"}>
              <a href="https://wa.me/79217750328" className="m-2">
                <img src={whatsapp} alt="whatsapp" width="40px"/>
              </a>
              <a href="https://t.me/semantis" className="m-2">
                <img src={telegram} alt="telegram" width="40px"/>
              </a>
              <a href="viber://chat?number=+375292624063" className="m-2">
                <img src={viber} alt="viber" width="40px"/>
              </a>
            </div>
          </button>
          <button
            className={state.show === "sidebar" ? "burger d-flex d-md-none open" : "burger d-flex d-md-none"}
            onClick={() => dispatch({ type: "open", payload: "sidebar" })}>
            <FontAwesomeIcon icon={faBars} size="lg"/>
          </button>
        </div>
      </div>
      {state.show === "phone" ?
        <Modal>
          <div className="modal-header">
            <p className="m-0">Свяжитесь с нами</p>
            <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
          </div>
          <button className="mainBtn mt-3 justify-content-start" onClick={() => dispatch({ type: "close" })}>
            <a href="tel:+79217750328"><FontAwesomeIcon icon={faMobileAlt} size="lg"
                                                        className="vibrate mr-1"/> +79217750328</a>
          </button>
          <button className="mainBtn my-3 justify-content-start" onClick={() => dispatch({ type: "close" })}>
            <a href="tel:+375292624063"><FontAwesomeIcon icon={faMobileAlt} size="lg"
                                                         className="vibrate mr-1"/> +375292624063</a>
          </button>
        </Modal>
        : ""
      }
      <Sidebar/>
      <Button/>
    </header>
  )
}

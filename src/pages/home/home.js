import React, { useContext, useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import { rippleEffect } from "../../components/main"
import { StateContext } from "../../state/stateCotext"

import Modal from "../../components/modal"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingUsd, faTimes } from "@fortawesome/free-solid-svg-icons"
import mouse from "../../images/home/mouse.svg"
import fb from "../../images/home/fb.svg"
import ig from "../../images/home/ig.svg"
import ln from "../../images/home/in.svg"
import dot from "../../images/home/dot.png"

export default () => {
  const { state, dispatch } = useContext(StateContext)

  const handleGetPrice = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "quiz" })
  }

  // const [quizData, setQuizData] = useState({
  //   name: {
  //     value: "",
  //     isValid: false
  //   },
  //   phone: {
  //     value: "",
  //     isValid: false
  //   },
  //   email: {
  //     value: "",
  //     isValid: false
  //   },
  //   message: "",
  //   copy: false
  // })

  // const handleCheckbox = e => {
  //   for (let key in quizData) if (key === e.target.name) setQuizData({ ...quizData, [key]: !quizData.copy })
  // }

  const handleQuiz = (e, direction) => {
    rippleEffect(e)
    // console.log("следующая страница")
  }

  return (
    <section className="home">
      <div className="container py-5">
        <div
          className="offset-sm-4 offset-md-6 offset-lg-8 col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column align-items-start p-0 mt-5">
          <h6 className="blue-color m-0"><strong>веб-студия</strong></h6>
          <h1 className="h1">Семантис</h1>
          <ul className="home-list">
            <li>
              <div className="number">01</div>
              <img src={dot} alt="Разработка сайтов" className="ml-2 mr-3 text"/>
              Разработка сайтов
            </li>
            <li>
              <div className="number">02</div>
              <img src={dot} alt="Оптимизация сайтов" className="ml-2 mr-3 text"/>
              Оптимизация сайтов
            </li>
            <li>
              <div className="number">03</div>
              <img src={dot} alt="Дизайн" className="ml-2 mr-3"/>
              Дизайн
            </li>
            <li>
              <div className="number">04</div>
              <img src={dot} alt="Продвижение в интернете" className="ml-2 mr-3"/>
              Продвижение в интернете
            </li>
          </ul>
          <button className="mainBtn" onClick={handleGetPrice}>
            Узнать цену <FontAwesomeIcon icon={faHandHoldingUsd} className="pr-2" size="lg"/>
          </button>
          {state.show === "quiz" ?
            <Modal className="w-50">
              <div className="modal-header">
                <p className="m-0">Расскажите нам о своём проекте</p>
                <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
              </div>
              <form name="quiz" className="p-3 col-6 border-top">
                <Carousel
                  className="col-6"
                  indicators={false}
                  interval={null}>
                  <Carousel.Item className="d-flex flex-column">
                    Какой тип сайта вас интересует?
                    <div className="checkbox mt-3">
                      <input
                        id="CV"
                        name="site"
                        type="radio"
                        value="Сайт-визитка"/>
                      <label htmlFor="CV">Сайт-визитка</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="EC"
                        name="site"
                        type="radio"
                        value="Интернет-магазин"/>
                      <label htmlFor="EC">Интернет-магазин</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="LP"
                        name="site"
                        type="radio"
                        value="Продающая страница"/>
                      <label htmlFor="LP">Продающая страница</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="CS"
                        name="site"
                        type="radio"
                        value="Корпоративный сайт"/>
                      <label htmlFor="CS">Корпоративный сайт</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="OS"
                        name="site"
                        type="radio"
                        value="Онлайн-сервис"/>
                      <label htmlFor="OS">Онлайн-сервис</label>
                    </div>
                    <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее</button>
                  </Carousel.Item>
                  <Carousel.Item className="d-flex flex-column">
                    Какой функционал необходимо реализовать на сайте?
                    <div className="checkbox mt-3">
                      <input
                        id="CV"
                        name="site"
                        type="radio"
                        value="Сайт-визитка"/>
                      <label htmlFor="CV">Сайт-визитка</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="EC"
                        name="site"
                        type="radio"
                        value="Интернет-магазин"/>
                      <label htmlFor="EC">Интернет-магазин</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="LP"
                        name="site"
                        type="radio"
                        value="Продающая страница"/>
                      <label htmlFor="LP">Продающая страница</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="CS"
                        name="site"
                        type="radio"
                        value="Корпоративный сайт"/>
                      <label htmlFor="CS">Корпоративный сайт</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="OS"
                        name="site"
                        type="radio"
                        value="Онлайн-сервис"/>
                      <label htmlFor="OS">Онлайн-сервис</label>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "prev")}>Назад</button>
                      <button type="button" className="mainBtn" onClick={(e) => handleQuiz(e, "next")}>Далее</button>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="d-flex flex-column">
                    Какой тип сайта вас интересует?
                    <div className="checkbox mt-3">
                      <input
                        id="CV"
                        name="site"
                        type="radio"
                        value="Сайт-визитка"/>
                      <label htmlFor="CV">Сайт-визитка</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="EC"
                        name="site"
                        type="radio"
                        value="Интернет-магазин"/>
                      <label htmlFor="EC">Интернет-магазин</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="LP"
                        name="site"
                        type="radio"
                        value="Продающая страница"/>
                      <label htmlFor="LP">Продающая страница</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="CS"
                        name="site"
                        type="radio"
                        value="Корпоративный сайт"/>
                      <label htmlFor="CS">Корпоративный сайт</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="OS"
                        name="site"
                        type="radio"
                        value="Онлайн-сервис"/>
                      <label htmlFor="OS">Онлайн-сервис</label>
                    </div>
                    <button type="button" className="mainBtn" onClick={handleQuiz}>Далее</button>
                  </Carousel.Item>
                  <Carousel.Item className="d-flex flex-column">
                    Какой тип сайта вас интересует?
                    <div className="checkbox mt-3">
                      <input
                        id="CV"
                        name="site"
                        type="radio"
                        value="Сайт-визитка"/>
                      <label htmlFor="CV">Сайт-визитка</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="EC"
                        name="site"
                        type="radio"
                        value="Интернет-магазин"/>
                      <label htmlFor="EC">Интернет-магазин</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="LP"
                        name="site"
                        type="radio"
                        value="Продающая страница"/>
                      <label htmlFor="LP">Продающая страница</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="CS"
                        name="site"
                        type="radio"
                        value="Корпоративный сайт"/>
                      <label htmlFor="CS">Корпоративный сайт</label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="OS"
                        name="site"
                        type="radio"
                        value="Онлайн-сервис"/>
                      <label htmlFor="OS">Онлайн-сервис</label>
                    </div>
                    <button type="button" className="mainBtn" onClick={handleQuiz}>Далее</button>
                  </Carousel.Item>
                </Carousel>
              </form>
            </Modal>
            : ""
          }
        </div>
        <div className="offset-sm-4 offset-md-6 offset-lg-0 mt-5 social">
          <a href="https://www.instagram.com/semantis.online/" rel="noreferrer"
             target="_blank" className="my-2 mr-2"><img src={ig} alt="instagram"/></a>
          <a href="https://www.facebook.com/semantis.online" rel="noreferrer"
             target="_blank" className="my-2 mr-2"><img src={fb} alt="facebook"/></a>
          <a href="https://www.linkedin.com/company/semantisonline/" rel="noreferrer"
             target="_blank" className="my-2 mr-2"><img src={ln} alt="linkedin"/></a>
        </div>
      </div>
      <div className="mouse d-lg-block d-none">
        <img src={mouse} alt=""/>
      </div>
    </section>
  )
}

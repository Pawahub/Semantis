import React from "react"
import { rippleEffect } from "../main"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import logo from "../../images/about/semantis.svg"
import dots from "../../images/about/4dot.svg"
import dotted from "../../images/about/dotted.svg"
import z from "../../images/about/z.svg"
import zz from "../../images/about/zz.svg"

export default () => {
  return (
    <section role="article" className="about py-5">
      <div className="container p-0 d-flex justify-content-center align-items-center flex-wrap">
        <img className="dots d-none d-lg-block" src={dots} alt=""/>
        <img className="z d-none d-md-block" src={z} alt=""/>
        <img className="zz d-none d-md-block" src={zz} alt=""/>
        <div className="d-flex flex-column col-12 col-md-6 col-lg-7">
          <h2>Почему мы?</h2>
          <h6 className="blue-color p-0 mt-4">Наша команда помогает бизнесу достигать новых высот благодаря правильному
            позиционированию в интернете</h6>
          <p className="we p-0 mt-2">
            Нам нравится видеть как результат своей работы благодарность наших клиентов. Наши клиенты
            - компании из разных стран: США, Канады, России, и разных сфер бизнеса, от розничной
            торговли до строительства заводов и создания телекоммуникационных сетей.<br/><br/>

            Мы всегда готовы предложить комплексные решения по целому ряду digital-услуг. Таким образом мы закрываем все
            вопросы своих клиентов без привлечения специалистов на аутсорсинге и без дополнительных затрат. В добавок
            наши клиенты получают не только желаемый результат, но и полную техническую и информационную поддержку по
            всем направлениям.
          </p>
          <a href="/src/Semantis.pdf" target="_blank" rel="noreferrer noopener" className="mainBtn align-self-md-start mt-md-3" onClick={rippleEffect}>
            <FontAwesomeIcon icon={faDownload} className="pr-2" size="lg"/> Пезентация pdf
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-5 my-md-0">
          <img id="Semantis" className="img-fluid" src={logo} alt="Semantis" data-translate="2"/>
          <img className="dotted" src={dotted} alt=""/>
        </div>
      </div>
    </section>
  )
}

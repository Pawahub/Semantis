import React, { useContext, useState } from "react"
import { StateContext } from "../../../state/stateCotext"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { rippleEffect } from "../../main"

import SectionLeftRight from "../../section-left-right"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import ellipse from "../../../images/web-dev/ellipse.svg"
import polygon from "../../../images/web-dev/polygon.svg"

import "./we-will-do.sass"

export default () => {
  const { dispatch } = useContext(StateContext)

  const handleClick = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "lead" })
  }

  const [currentText, setText] = useState(0)

  const handleList = e => {
    if (e.target.closest("li[data-index]")) {
      let idx = Number(e.target.closest("li[data-index]").dataset.index)
      setText(idx)
    }
  }

  const list = (arr) => {
    return arr.map((el, idx) => {
      if (document.documentElement.clientWidth < 768) {
        return (
          <li key={idx} className={currentText === idx ? "active" : null} data-index={idx}>
            <div className="d-flex">
              <div className="number"><span>{idx < 10 ? "0" + (idx + 1) : idx + 1} </span><strong>&#8228;</strong></div>
              <span>{el}</span>
              <span>
                {currentText === idx ? <FontAwesomeIcon icon={faAngleUp} size="lg"/> :
                  <FontAwesomeIcon icon={faAngleDown} size="lg"/>}
              </span>
            </div>
            <div className="text">
              <SwitchTransition>
                <CSSTransition
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  key={currentText}
                  timeout={0}
                  classNames="toggle"
                >
                  {text[idx]}
                </CSSTransition>
              </SwitchTransition>
              <button className="mainBtn whiteBtn my-3" onClick={() => dispatch({ type: "open", payload: "lead" })}>Мне
                подходит
              </button>
            </div>
          </li>
        )
      } else {
        return (
          <li key={idx} className={currentText === idx ? "active" : null} data-index={idx}>
            {currentText === idx ? <FontAwesomeIcon icon={faCaretRight} size="lg" className="curret"/> : null}
            <div className="number"><span>{idx < 10 ? "0" + (idx + 1) : idx + 1} </span><strong>&#8228;</strong></div>
            <span>{el}</span>
          </li>
        )
      }
    })
  }

  const text = [
    <p>Имиджевый сайт может быть, как одностраничным, так и многостраничным. Он позволяет сформировать необходимое
      восприятие вашего продукта у публики, создать репутацию успешного бренда, произвести хорошее впечатление на Вашу
      целевую аудиторию и сделать её более лояльной к Вашему продукту.<br/><br/>
      Преимущества такого сайта:<br/>
      • Уникальный запоминающийся дизайн<br/>
      • Удобный пользовательский интерфейс<br/><br/>
      Отлично подходит для стартапов и компаний, продукт которых еще не пользуется широкой
      популярностью.</p>,

    <p>Корпоративный сайт — это полноценный онлайн-ресурс компании с широким функционалом и продуманной маркетинговой
      составляющей. Он позволяет презентовать Вашу компанию как надёжного партнёра, подробно ознакомиться с
      Вашим продуктом, сделать бизнес-идею компании более понятной и открытой для публики.<br/><br/>
      Преимущества такого сайта:<br/>
      • Возможность внедрить CRM-систему<br/>
      • Оптимизация бизнес-процессов компании<br/>
      • Возможность масштабировать географию компании</p>,

    <p>
      Интернет-магазин — это инструмент, помогающий бизнесу реализовывать свою главную идею — получение
      прибыли путём осуществления прямых продаж товаров и услуг.<br/><br/>
      Преимущества интернет-магазина:<br/>
      • Отсутствие затрат на содержание (аренда, ФОТ и др.)<br/>
      • Непрерывная продажа товаров 24/7<br/>
      • Неограниченное количество клиентов<br/>
      • Обратная связь с покупателями<br/>
      • Возможность оперативного мониторинга остатков товара и спроса</p>,

    <p>Сайт-визитка — один из самых простых, но очень эффективных способов рассказать публике о себе. Каждому бизнесу
      нужна своя страничка с контактами, благодарая которой клиенты смогут убедиться, что им стоит обратиться именно в
      эту компанию.<br/><br/>
      Преимущества такого сайта:<br/>
      • Простой и понятный интерфейс<br/>
      • Отсутствие необходимости в постоянной поддержке</p>,

    <p>Онлайн-сервис — это веб-приложение, выполняющее для пользователя необходимую для него полезную работу бесплатно
      либо за вознаграждение.<br/><br/>
      Вариативность сайтов данного типа настолько велика, что невозможно в двух словах
      описать их преимущества и определить их чёткое назначение. Такие проекты, как правило, обладают более сложной
      бизнес-логикой и требуют максимальной проработки деталей до стадии разработки.</p>,

    <p>Лучший инструмент для того, чтобы познакомить пользователей с новым продуктом и вовлечь аудиторию это —
      промо-сайт. Обычно это одностраничный сайт с элементами игры или квизами, на котором развёрнута целая
      маркетинговая стратегия по привлечению клиентов.<br/><br/>
      Преимущества такого сайта:<br/>
      • Кротчайшие сроки разработки<br/>
      • Повышение эффективности рекламных кампаний и/или основного сайта</p>,

    <p>Лендинг или продающая страница — мощный маркетинговый инструмент, который сегодня является неотъемлемой частью
      практически любой воронки продаж в интернете. Основная задача такого сайта — подтолкнуть пользователя совершить
      целевое действие: это может быть покупка товара, получение оффера в обмен на контактные данные или, например,
      регистрация на вебинар.<br/><br/>
      Преимущества такого сайта:<br/>
      • Быстрая отдача вложенных средств<br/>
      • Повышение эффективности рекламных кампаний и/или основного сайта</p>
  ]

  const left = (
    <div className="container we-will-do">
      <div className="row justify-content-md-start justify-content-sm-center">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <h2>Мы делаем:</h2>
          <ul className="home-list m-0 py-2" onClick={handleList}>
            {list(["Имиджевые сайты", "Корпоративные сайты", "Интернет-магазины", "Сайты-визитки",
              "Онлайн-сервисы", "Промосайты", "Лендинги"])}
          </ul>
          и другие типы сайтов...
        </div>
      </div>
      <img src={ellipse} alt="ellipse"/>
      <img src={polygon} alt="polygon"/>
    </div>
  )

  const right = (
    <div className="section50 section50-right we-will-do__right">
      <div className="text">
        <SwitchTransition>
          <CSSTransition
            key={currentText}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            timeout={0}
            classNames="fade"
          >
            {text[currentText]}
          </CSSTransition>
        </SwitchTransition>
        <button className="mainBtn mt-3" onClick={handleClick}>Мне подходит</button>
      </div>

    </div>
  )

  return (
    <SectionLeftRight
      left={left}
      right={right}
    />
  )
}
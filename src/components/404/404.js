import React from "react"
import './404.sass'
import eye from '../../images/periscope.gif'
import union1 from '../../images/union1.png'
import union2 from '../../images/union2.png'
export default function NotFound() {


  return (
    <section className="none-found">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-4">
            <div className="none-found__content">
              <h1>404</h1>
              <h2>Страница не найдена</h2>
              <p>Упс! Похоже, такой страницы не существует...</p>
              <a href='/' className="mainBtn">
                На главную
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="none-found__element">
        <div className="item1" style={{ backgroundImage: `url(${union1})` }}></div>
        <div className="item2" style={{ backgroundImage: `url(${union2})` }}></div>
        <img src={eye} alt="eye"/>
      </div>
    </section>
  )
}
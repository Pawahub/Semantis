import React from "react"
import './develop.sass'
import develop from '../../images/develop.svg'

export default function Develop() {
  return (
    <section className="develop">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="img-responsive" src={develop} alt="develop"/>
          </div>
          <div className="col-md-6">
            <div className="develop__container">
              <h2 className="text-center">Мы работаем
                над этой страницей</h2>
              <p className="text-center">Дання страница пока в разработке, мы скоро ее опубликуем.</p>
              <button className="mainBtn mt-4">
                <a href="/">На главную</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
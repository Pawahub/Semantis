import React from "react"
import Carousel from "react-bootstrap/Carousel"

import z from "../../images/review/z.svg"
import zz from "../../images/about/zz.svg"
import astronaut from "../../images/review/astronaut.png"
import lexor from "../../images/review/lexor.png"
import citrus from "../../images/review/citrus.png"
import rullex from "../../images/review/rullex.png"
import rusinvest from "../../images/review/rusinvest.png"
import probusiness from "../../images/review/probusiness.png"
import yuri from "../../images/review/yuri.png"
import alex from "../../images/review/alex.png"
import mantashjan from "../../images/review/mantashjan.png"

export default () => {
  return (
    <section className="review">
      <img className="zz d-none d-md-block" src={zz} alt="zz"/>
      <img className="z3 d-none d-md-block" src={z} alt="z"/>
      <div className="circle circle1">
        <img src={astronaut} className="img-fluid" alt="astronaut"/>
      </div>
      <div className="circle circle2">
        <img src={rusinvest} className="img-fluid" alt="rusinvest"/>
      </div>
      <div className="circle circle3">
        <img src={probusiness} className="img-fluid" alt="probusiness"/>
      </div>
      <div className="circle circle4">
        <img src={citrus} className="img-fluid" alt="citrus"/>
      </div>
      <div className="circle circle5">
        <img src={lexor} className="img-fluid" alt="lexor"/>
      </div>
      <div className="circle circle6">
        <img src={rullex} className="img-fluid" alt="rullex"/>
      </div>
      <div className="container py-5 overflow-hidden">
        <div className="row flex-column align-items-center pt-md-5 m-0">
          <h2>Наши клиенты</h2>
          <Carousel className="col-12 col-md-8 col-lg-6" indicators={false}>
            <Carousel.Item>
              <div className="d-flex my-3">
                <div>
                  <img src={yuri} className="rounded-circle" alt="Отзывы клиентов"/>
                </div>
                <div className="ml-3">
                  <h5>Юрий Козловский</h5>
                  <div>Генеральный директор ООО "Лексор"</div>
                </div>
              </div>
              <a href="https://lexor.spb.ru/" target="_blank" rel="noreferrer noopener">lexor.spb.ru</a>
              <p className="mt-3">
                Приятно иметь делао с ваешй компанией. Сервис на высоте и поддержка по всем направлениям.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex my-3">
                <div>
                  <img src={alex} className="rounded-circle" alt="Отзывы клиентов"/>
                </div>
                <div className="ml-3">
                  <h5>Алексей Чирко</h5>
                  <div>Директор ООО "Астронавт"</div>
                </div>
              </div>
              <a href="https://astronaut.by/" target="_blank" rel="noreferrer noopener">astronaut.by</a>
              <p className="mt-3">
                Команда настоящих профессионалов. Свою работу выполняют качественно и точно в срок.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex my-3">
                <div>
                  <img src={mantashjan} className="rounded-circle" alt="Отзывы клиентов"/>
                </div>
                <div className="ml-3">
                  <h5>Ани Манташян</h5>
                  <div>Директор юридической компании</div>
                </div>
              </div>
              <a href="https://uk-am.com/" target="_blank" rel="noreferrer noopener">uk-am.com</a>
              <p className="mt-3">
                Очень порадовал ваш профессиональный подход к созданию сайта и в целом. Благодоря вам теперь знаю как
                это всё работает. Очень рада что обратилась к вам. Спасибо!
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

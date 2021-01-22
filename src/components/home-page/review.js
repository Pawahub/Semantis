import React from "react"
import Carousel from "react-bootstrap/Carousel"

import z from "../../images/review/z.svg"
import zz from "../../images/about/zz.svg"
import astronaut from "../../images/review/astronaut.png"
import lexor from "../../images/review/lexor.png"
import citrus from "../../images/review/citrus.png"
import rullex from "../../images/review/rullex.png"
import vinokurova from "../../images/review/vinokurova.png"
import mantashjan from "../../images/review/mantashjan.png"

export default () => {
  return (
    <section className="review">
      <img className="zz d-none d-md-block" src={zz} alt=""/>
      <img className="z3 d-none d-md-block" src={z} alt=""/>
      <div className="circle circle1">
        <img src={astronaut} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle2">
        <img src={vinokurova} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle3">
        <img src={lexor} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle4">
        <img src={citrus} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle5">
        <img src={rullex} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle6">
        <img src={mantashjan} className="img-fluid" alt=""/>
      </div>
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap overflow-hidden">
        <h2 className="h1 text-md-center">Наши клиенты</h2>
        <div className="row m-0 justify-content-center">
          <Carousel className="col-12 col-md-8 col-lg-6" indicators={false}>
            <Carousel.Item>
              <div className="d-flex my-3">
                <img src={lexor} className="rounded-circle" alt=""/>
                <div className="ml-3">
                  <h5>Юрий Козловский</h5>
                  Генеральный директор компании Lexor
                </div>
              </div>
              <a href="https://lexor.spb.ru/" target="_blank">lexor.spb.ru</a>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid commodi consectetur
                consequuntur cum deserunt ducimus explicabo facilis ipsum laudantium libero molestiae necessitatibus
                odit omnis pariatur possimus provident quod repudiandae suscipit ullam unde voluptates, voluptatibus.
                Ad distinctio harum impedit maxime nihil nobis rem. A corporis cum deleniti omnis rem tenetur.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex my-3">
                <img src={astronaut} className="rounded-circle" alt=""/>
                <div className="ml-3">
                  <h5>Алексей Чирко</h5>
                  Директор ООО "Астронавт"
                </div>
              </div>
              <a href="https://astronaut.by/">astronaut.by</a>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid commodi consectetur
                consequuntur cum deserunt ducimus explicabo facilis ipsum laudantium libero molestiae necessitatibus
                odit omnis pariatur possimus provident quod repudiandae suscipit ullam unde voluptates, voluptatibus.
                Ad distinctio harum impedit maxime nihil nobis rem. A corporis cum deleniti omnis rem tenetur.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex my-3">
                <img src={citrus} className="rounded-circle" alt=""/>
                <div className="ml-3">
                  <h5>Romew Potusjdiotrd</h5>
                  Lorem ipsum
                </div>
              </div>
              <a href="">instagram.com</a>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid commodi consectetur
                consequuntur cum deserunt ducimus explicabo facilis ipsum laudantium libero molestiae necessitatibus
                odit omnis pariatur possimus provident quod repudiandae suscipit ullam unde voluptates, voluptatibus.
                Ad distinctio harum impedit maxime nihil nobis rem. A corporis cum deleniti omnis rem tenetur.
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

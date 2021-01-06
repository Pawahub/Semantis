import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { parallax } from "../main"

import z from "../../images/review/z.svg"
import zz from "../../images/about/zz.svg"
import step1 from "../../images/how/1.png"

export default () => {
  let circles = document.querySelectorAll(".circle")
  return (
    <section onMouseMove={(e) => parallax(e, circles)} className="review">
      <img className="zz d-none d-md-block" src={zz} alt=""/>
      <img className="z3 d-none d-md-block" src={z} alt=""/>
      <div className="circle circle1" data-translate="10">
        <img src={step1} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle2" data-translate="5">
        <img src={step1} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle3" data-translate="50">
        <img src={step1} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle4" data-translate="7">
        <img src={step1} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle5" data-translate="50">
        <img src={step1} className="img-fluid" alt=""/>
      </div>
      <div className="circle circle6" data-translate="10">
        <img src={step1} className="img-fluid" alt=""/>
      </div>
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap overflow-hidden">
        <h2 className="h1 col-12 text-center">Наши клиенты</h2>
        <Carousel className="col-12 col-md-8 col-lg-6" indicators={false}>
          <Carousel.Item>
            <div className="d-flex my-3">
              <img src={step1} className="rounded-circle" alt=""/>
              <div className="ml-3">
                <h5>Feodapdosapod Potusjdiotrd</h5>
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
          <Carousel.Item>
            <div className="d-flex my-3">
              <img src={step1} className="rounded-circle" alt=""/>
              <div className="ml-3">
                <h5>Oplfdsf Potusjdiotrd</h5>
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
          <Carousel.Item>
            <div className="d-flex my-3">
              <img src={step1} className="rounded-circle" alt=""/>
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
    </section>
  )
}

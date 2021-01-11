import React, { useContext } from "react"
import './case.sass'
import LineWithDot from '../../../images/web-dev/line-with-dot.svg'
import Line from '../../../images/web-dev/line3.svg'
import SliderSlick from "../../slider"
import img1 from "../../../images/web-dev/case/1.jpg"
import img2 from "../../../images/web-dev/case/2.jpg"
import img3 from "../../../images/web-dev/case/3.jpg"
import { CardCase } from "../../card"
import { StateContext } from "../../../state/stateCotext"

export default function Case() {
  const globalState = useContext(StateContext);
  const section = globalState.state.selectedSection;

  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  const slider = (
    <SliderSlick settings={settingsSlider}>
      <CardCase content={{
        img: img1,
        pdf: '',
        link: 'https://citruscleaning.ca',
        title: 'Citrus Cleaning',
        description: 'создать на существующем сайте интернет-магазин.' }}/>
      <CardCase content={{
        img: img2,
        pdf: '',
        link: 'https://citruscleaning.ca',
        title: 'Gusiatin’s Handywork',
        description: 'создание сайта-визитки под ключ.' }}/>
      <CardCase content={{
        img: img3,
        pdf: '',
        link: 'https://citruscleaning.ca',
        title: 'Summermedia',
        description: 'создание лендинга для компании, занимающейся SMM.' }}/>
    </SliderSlick>
  )

  return (
    <section className={section === 3 ? 'case active' : 'case'}>
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="h1 text-center">Кейсы</h2>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            {slider}
          </div>
        </div>
      </div>
      <div className="case__items">
        <div className="item1">
          <img src={LineWithDot} alt="LineWithDot"/>
        </div>
        <div className="item2">
          <img src={Line} alt="LineWithDot"/>
        </div>
      </div>
    </section>
  )
}
import React, { useState } from "react"
import './targeted-advertising.sass'
import List from "../../list"
import img1 from '../../../images/internet-promotion/slider/img1.png'
import img2 from '../../../images/internet-promotion/slider/img2.png'
import img3 from '../../../images/internet-promotion/slider/img3.png'
import arrow from '../../../images/internet-promotion/arrow.svg'
export default function TargetedAdvertising() {
  const [state, setState] = useState(1)
  const sliderItems = [img1, img2, img3, img1];
  const sliderHandler = (e) => {
    const value = sliderItems.length - 1;
    if (e.target.classList.contains('prev')) {
      if (state - 1 === 0) return
      setState(state - 1)
    }
    if (e.target.classList.contains('next')) {
      if (state + 1 === value) return
      setState(state + 1)
    }
  }
  const listArr = [
    'Охват только целевой аудитории',
    'Низкий порог входа (можно запустить кампанию с небольшими вложениями)',
    'Четкий измеримый результат (все данные о рекламных кампаниях качественно предоставляются в личных ' +
    'рекламных кабинетах, выгружаются в удобных форматах)'
  ]
  return (
    <section className='targeted-advertising'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="h1">Таргетированная реклама</h2>
            <p className="description">
              Даёт возможность не только увеличить продажи, но и продавать легко.
              Мы настроим её на вашу целевую аудиторию по заданным параметрам: пол, возраст, геолокация и т.д.,
              что позволит большинству потенциальных клиентов прийти именно к вам.
            </p>
            {/*//todo (Добавить кнопку "оставить заявку)*/}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Преимущества таргетированной рекламы:</h3>
            <List listArr={listArr}/>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="targeted-advertising__slider" onClick={sliderHandler}>
              <div className="targeted-advertising__slider-item prev">
                <div className="arrow"><img  src={arrow} alt="arrow"/></div>
                <img src={sliderItems[state - 1]} alt={state - 1}/>
              </div>
              <div className="targeted-advertising__slider-item active">
                <img src={sliderItems[state]} alt={state - 1}/>
              </div>
              <div className="targeted-advertising__slider-item next">
                <div className="arrow"><img  src={arrow} alt="arrow"/></div>
                <img src={sliderItems[state + 1]} alt={state - 1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import React from "react"
import SliderSlick from "../slider"

import astronaut from "../../images/testimonials/astronaut.png"
import lexor from "../../images/testimonials/lexor.png"
import citrus from "../../images/testimonials/citrus.png"
import rullex from "../../images/testimonials/rullex.png"
import rusinvest from "../../images/testimonials/rusinvest.png"
import probusiness from "../../images/testimonials/probusiness.png"
import yuri from "../../images/testimonials/yuri.png"
import alex from "../../images/testimonials/alex.png"
import mantashjan from "../../images/testimonials/mantashjan.png"

export default () => {
  const settingsSlider = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      }
    ]
  }

  const testimonialList = (arr) => {
    return arr.map(({ img, name, link, title, testimonial }, id) => {
      return (
        <div className="p-3" key={id}>
          <div className="d-flex mb-3">
            <div>
              <img src={img} className="rounded-circle" alt="Отзывы клиентов"/>
            </div>
            <div className="d-flex flex-column justify-content-center ml-3">
              <h5>{name}</h5>
              <div>{title}</div>
            </div>
          </div>
          <a href={link} target="_blank" rel="noreferrer noopener">{link}</a>
          <p className="mt-3">
            {testimonial}
          </p>
        </div>
      )
    })
  }

  const arr = [
    {
      img: yuri,
      name: "Юрий Козловский",
      title: "Генеральный директор ООО \"Лексор\"",
      link: "https://lexor.spb.ru/",
      testimonial: "Если хотите найти исполнителя для конкретной задачи, то здесь Вы найдёте ещё и надежного партнёра, и профессионального подрядчика по всем направлениям."
    },
    {
      img: alex,
      name: "Алексей Чирко",
      title: "Директор ООО \"Астронавт\"",
      link: "https://astronaut.by/",
      testimonial: "Приятно иметь дело с такой командой. Свою работу выполняют качественно и точно в срок. Сервис на высоте."
    },
    {
      img: mantashjan,
      name: "Ани Манташян",
      title: "Директор юридической компании",
      link: "https://uk-am.com/",
      testimonial: "Очень порадовал подход к созданию сайта и к продвижению. Благодоря вам теперь знаю как это всё работает. Очень рада, что обратилась к вам. Спасибо!"
    }
  ]

  return (
    <section className="testimonials">
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
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h2 className="text-center">Наши клиенты</h2>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-12 col-md-6">
            <SliderSlick settings={settingsSlider}>
              {testimonialList(arr)}
            </SliderSlick>
          </div>
        </div>
      </div>
    </section>
  )
}

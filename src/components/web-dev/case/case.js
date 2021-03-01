import React, { useContext } from "react"
import SliderSlick from "../../slider"
import { StateContext } from "../../../state/stateCotext"

import { CardCase } from "../../card"

import LineWithDot from "../../../images/web-dev/line-with-dot.svg"
import Line from "../../../images/web-dev/line3.svg"
import Citrus from "../../../images/web-dev/case/citruscleaning.jpg"
import Lexor from "../../../images/web-dev/case/lexor.jpg"
import Consigliere from "../../../images/web-dev/case/consigliere.jpg"
import Astronaut from "../../../images/web-dev/case/astronaut.jpg"
import Ukam from "../../../images/web-dev/case/ukam.jpg"
import TheVip from "../../../images/web-dev/case/thevip.jpg"
import Probusiness from "../../../images/web-dev/case/probusiness.jpg"
import Chinahelp from "../../../images/web-dev/case/chinahelp.jpg"
import Handyman from "../../../images/web-dev/case/handyman.jpg"

import "./case.sass"

export default function Case() {
  const globalState = useContext(StateContext)
  const section = globalState.state.selectedSection

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
  }

  const caseList = (arr) => {
    return arr.map(({ img, pdf, link, title, description }, id) => {
      return (
        <CardCase key={id} content={{
          img,
          pdf,
          link,
          title,
          description
        }}/>
      )
    })
  }

  const arr = [
    {
      img: Citrus,
      pdf: "/src/citruscleaning.pdf",
      link: "https://citruscleaning.ca",
      title: "Citrus Cleaning",
      description: "Функционал интернет-магазина для сайта клининговой компании"
    },
    {
      img: Lexor,
      pdf: "/src/lexor.pdf",
      link: "https://lexor.spb.ru",
      title: "Lexor",
      description: "Сайт-визитка компании-переработчика шин \"Лексор\""
    },
    {
      img: Consigliere,
      pdf: "/src/consigliere.pdf",
      link: "https://consigliere24.com",
      title: "Consigliere",
      description: "Лендинг для привлечения клиентов"
    },
    {
      img: Astronaut,
      pdf: "/src/astronaut.pdf",
      link: "https://astronaut.by",
      title: "Astronaut",
      description: "Сайт-визитка компании ООО \"Астронавт\""
    },
    {
      img: Ukam,
      pdf: "/src/ukam.pdf",
      link: "https://uk-am.com",
      title: "UKAM",
      description: "Сайт-визитка юридической компании"
    },
    {
      img: TheVip,
      pdf: "/src/thevip.pdf",
      link: "https://thevip.se",
      title: "The Vip",
      description: "Онлайн-сервис по увеличению активности в соц.сетях"
    },
    {
      img: Probusiness,
      pdf: "/src/probusiness.pdf",
      link: "http://probiz-consulting.ru",
      title: "PRO Business",
      description: "Сайт-визитка консалтинговой компании"
    },
    {
      img: Chinahelp,
      pdf: "/src/chinahelp.pdf",
      link: "http://Chinahelp.by",
      title: "Chinahelp",
      description: "Лендинг для привлечения клиентов"
    },
    {
      img: Handyman,
      pdf: "/src/handyman.pdf",
      link: "http://torontohandymen.ca",
      title: "Gusiatin's Handyworks",
      description: "Одностраничный сайт-визитка"
    }
  ]

  const slider = (
    <SliderSlick settings={settingsSlider}>
      {caseList(arr)}
    </SliderSlick>
  )

  return (
    <section className={section === 3 ? "case active" : "case"}>
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="text-center">Кейсы</h2>
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
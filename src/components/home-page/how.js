import React, { useContext } from "react"
import { StateContext } from "../../state/stateCotext"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Card } from "../card"

export default () => {
  const { state } = useContext(StateContext)

  const offers = [
    {
      oldPrice: "$ 250",
      price: "$ 200",
      title: "Сайт-визитка (стандартный функционал)",
      discount: "-20%"
    },
    {
      oldPrice: "от $ 250",
      price: "🔥 $ 190",
      title: "Разработка логитпа",
      discount: "-24%"
    },
    {
      oldPrice: "от $ 1050",
      price: "от $ 925",
      title: "Интернет-магазин",
      description: "1 год технической поддержки в подарок",
      discount: "-12%"
    },
    {
      oldPrice: "от $ 890",
      price: "от $ 780",
      title: "Корпоративный сайт (расширенный функционал)",
      description: "Интеграция с CRM-системой в подарок",
      discount: "-12%"
    }
  ]

  return (
    <section className="how py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <h2 className="text-white">Мы предлагаем</h2>
        </div>
        <TransitionGroup className="row justify-content-center">
          {(state.selectedSection === 2 || /Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) ?
            (offers.map((offer, index) => (
              <div className="col-lg-3 col-md-6 col-10 mt-3">
                <CSSTransition
                  in={state.selectedSection === 2}
                  key={index}
                  timeout={500 * index}
                  classNames="flip"
                >
                  <Card content={offer}/>
                </CSSTransition>
              </div>
            ))) : null}
        </TransitionGroup>
      </div>
    </section>
  )
}

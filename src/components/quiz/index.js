import React, { useState } from "react"

import QuizWebsite from "./quizWebsite"
import QuizSEO from "./quizSEO"
import QuizDesign from "./quizDesign"
import QuizPromotion from "./quizPromotion"

export default () => {
  const [quiz, setQuiz] = useState("init")

  const startQuiz = e => e.target.dataset.value ? setQuiz(e.target.dataset.value) : null

  const initSection = (
    <div className="quiz initSection" onClick={startQuiz}>
      <h6 className="mb-4">Какого вида услуга вас интересует?</h6>
      <div data-value="website"><span className="number">1</span>Создание сайта</div>
      <div data-value="seo"><span className="number">2</span>Оптимизация сайта</div>
      <div data-value="design"><span className="number">3</span>Дизайн</div>
      <div data-value="promotion"><span className="number">4</span>Продвижение в интернете</div>
    </div>
  )

  return (
    <form className="col-12 p-3 border-top align-items-center">
      {quiz === "init" ? initSection : null}
      {quiz === "website" ? <QuizWebsite/> : null}
      {quiz === "seo" ? <QuizSEO/> : null}
      {quiz === "design" ? <QuizDesign/> : null}
      {quiz === "promotion" ? <QuizPromotion/> : null}
    </form>
  )
}

import React, { useState } from "react"

import QuizWebsite from "./quizWebsite"
import QuizSEO from "./quizSEO"
import QuizDesign from "./quizDesign"
import QuizPromotion from "./quizPromotion"

import "./quiz.sass"

export default () => {
  const [quiz, setQuiz] = useState("init")

  const startQuiz = e => {
    if (e.target.dataset.value) setQuiz(e.target.dataset.value)
    else if (e.target.parentNode.dataset.value) setQuiz(e.target.parentNode.dataset.value)
    else return false
  }

  const initSection = (
    <div className="quiz initSection" onClick={startQuiz}>
      <h6 className="mb-4">Какого вида услуга вас интересует?</h6>
      <div data-value="website"><span className="number">1</span>Создание сайта</div>
      <div data-value="seo"><span className="number">2</span>Оптимизация сайта</div>
      <div data-value="design"><span className="number">3</span>Дизайн</div>
      <div data-value="promotion"><span className="number">4</span>Продвижение в интернете</div>
    </div>
  )

  const status = [0, 0.25, 0.5, 0.75, 1]

  return (
    <form className="col-12 p-3 border-top align-items-center">
      {quiz === "init" ? initSection : null}
      {quiz === "website" ? <QuizWebsite status={status}/> : null}
      {quiz === "seo" ? <QuizSEO status={status}/> : null}
      {quiz === "design" ? <QuizDesign status={status}/> : null}
      {quiz === "promotion" ? <QuizPromotion status={status}/> : null}
    </form>
  )
}

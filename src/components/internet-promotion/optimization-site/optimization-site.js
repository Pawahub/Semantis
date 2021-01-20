import React from "react"
import SectionLeftRight from "../../section-left-right"
import './optimization-site.sass'
import seo from '../../../images/internet-promotion/seo.png'
import List from "../../list"
export default function OptimizationSite() {
  const listArr = [
    'Регистрация в каталогах поисковых систем',
    'Создание микроразметк',
    'Создание сниппетов',
    'Создание внешних ссылок',
    'Оптимизация тегов и мета-тегов',
    'Работа над контентом'];

  const left = (
    <div className="container">
      <div className="row justify-content-lg-start justify-content-center">
        <div className="col-lg-5 col-md-8">
          <div className="optimization-site__content">
            <h2 className="h1">Оптимизация сайта</h2>
            <p>SEO (Search Engine Optimization) — комплекс мер по оптимизации сайта для
              улучшения позиции в выдаче поисковых систем по определённым запросам и
              увеличения скорости его работы, а именно:
            </p>
            <List listArr={listArr}/>
          </div>
        </div>
      </div>
    </div>
  )
  const right = (
    <>
      <div className="optimization-site section50 section50-left"></div>
      <div className="optimization-site section50 section50-right">
        <img src={seo} alt="seo"/>
      </div>
    </>
  )
  return (
    <SectionLeftRight left={left} right={right}/>
  )
}
import React from "react"
import './stages-of-creation.sass'
import Card from "../../card"

import brif from '../../../images/web-dev/brif.svg'
import dev from '../../../images/web-dev/dev.svg'
import create from '../../../images/web-dev/create.svg'
import result from '../../../images/web-dev/result.svg'
import dots from '../../../images/web-dev/dots.svg'
import treangls from '../../../images/web-dev/treangls.svg'

export default function StagesOfCreation() {
  return (
    <section className="stages-of-creation">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className='h1 text-center'>Этапы создания</h2>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-3 col-md-6 col-10">
            <Card content={{
              img: brif,
              nomer: '01',
              title: 'Брифинг',
              description: 'Мы получаем от вас заявку и отправляем вам для заполнения бриф. ' +
                'Обрабатываем полученные данные и формируем для вас предложение.'}}/>
          </div>
          <div className="col-lg-3 col-md-6 col-10">
            <Card content={{
              img: dev,
              nomer: '02',
              title: 'Разработка',
              description: 'После сбора всей необходимой информации ' +
                'мы приступаем к разработке прототипов и предоставляем их вам для внесения правок и согласования.'}}/>
          </div>
          <div className="col-lg-3 col-md-6 col-10">
            <Card content={{
              img: create,
              nomer: '03',
              title: 'Создание',
              description: 'После согласования мы получаем от вас все необходимые материалы, ' +
                'оговариваем другие важные моменты и приступаем к созданию сайта.'}}/>
          </div>
          <div className="col-lg-3 col-md-6 col-10">
            <Card content={{
              img: result,
              nomer: '04',
              title: 'Результат',
              description: 'Вы получаете адаптивный под все виды устройств и оптимизированный для ' +
                'дальнейшего продвижения в интернете сайт точно в срок.'}}/>
          </div>
        </div>
      </div>
      <div className="stages-of-creation__items">
        <div className="item1">
          <img src={dots} alt="dots"/>
        </div>
        <div className="item2">
          <img src={treangls} alt="treangls"/>
        </div>

      </div>
    </section>
  )
}
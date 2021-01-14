import React from "react"
import Slider from 'react-slick'

import './slick.scss'
import './slick-theme.scss'

export default function SliderSlick(props) {
  return (
    <Slider {...props.settings}>
      {props.children}
    </Slider>
  );
}
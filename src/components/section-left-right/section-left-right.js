import React from "react"
import './section-left-right.sass'


export default function SectionLeftRight({ left, right }) {
  return (
    <section className="section-left-right">
      {left}
      {right}
    </section>
  )
}
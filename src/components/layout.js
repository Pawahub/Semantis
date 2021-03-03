/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useReducer } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StateContext } from "../state/stateCotext"
import { Reducer } from "../state/stateReducer"

import Nav from "./nav/nav"
import Modal from "./modal/modal"
import ModalSuccess from "./modal/modalSuccess"
import Quiz from "./quiz"
import Lead from "./lead"

import "../pages/index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ selectedSection, children, location }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title,
                  description
              }
          }
      }
  `)

  const changeState = () => {
    return {
      selectedSection: 0,
      show: false,
    }
  }

  const [state, dispatch] = useReducer(Reducer, {}, changeState)

  useEffect(() => {
    dispatch({ type: "changeSection", payload: selectedSection })
  }, [selectedSection])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} location={location}/>
      <main>{children}</main>
      {state.show === "quiz" ?
        <Modal>
          <div className="modal-header">
            <h6 className="m-0">Расскажите нам о своём проекте</h6>
            <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
          </div>
          <Quiz init={location.pathname}/>
        </Modal> : null
      }
      {state.show === "lead" ?
        <Modal>
          <div className="modal-header">
            <h6 className="m-0">Получите предложение сейчас</h6>
            <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
          </div>
          <Lead/>
        </Modal> : null
      }
      {state.show === "success" ? <ModalSuccess/> : null}
    </StateContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

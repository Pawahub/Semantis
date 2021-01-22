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
import ModalSuccess from "./modal/modalSuccess"

import "../pages/index.css"

const Layout = ({ selectedSection, children, location }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)


  const changeState = () => {
    return {
      selectedSection: 0,
      show: false
    }
  }

  const [state, dispatch] = useReducer(Reducer, {}, changeState)

  useEffect(() => {
    dispatch({ type: "changeSection", payload: selectedSection })
  }, [selectedSection])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Nav Title={data.site.siteMetadata?.title || `Title`} location={location}/>
      <main>{children}</main>
      {state.show === "success" ? <ModalSuccess/> : null}
    </StateContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

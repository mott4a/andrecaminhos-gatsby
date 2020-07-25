import React from "react";
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"


import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";


const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg") repeat-y;
  background-size: 100%;
  font-family: Roboto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const FotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img{
    margin: 10px;
  }
`

const Fotos = () => {

  const { album01 } = useStaticQuery(graphql`
  query {
    album01: allFile(
      filter: {sourceInstanceName: {eq: "album01"},
       extension: {eq: "jpg"}}
      ) {
      nodes {
        id
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`)

  return (
      <>
          <GlobalStyle />
      <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>André Caminhos - Fotos</title>
        </Helmet>
          <Menu />
          <FotosWrapper>
            {album01.nodes.map(image =>(
              <div style={{width: "500px", height: "500px"}}>
              <Img key={image.id} fluid={image.childImageSharp.fluid} alt="Album 1" />
              </div>
            ))}
          </FotosWrapper>
      </Container>
      </>
    )
}


export default Fotos

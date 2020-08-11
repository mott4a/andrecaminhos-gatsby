import React from "react";

import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"


import styled from "styled-components"

import Menu from "../components/menu/index";
import SEO from "../components/seo"

import GlobalStyle from "../components/globalstyle";



const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg") repeat-y;
  background-size: cover;
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
  margin-top: calc(6vh + 10px);

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
      <SEO title="Fotos" />
      <Container>
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

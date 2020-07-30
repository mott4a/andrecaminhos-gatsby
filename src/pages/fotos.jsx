import React from "react";
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"

import styled from "styled-components"

import Menu from "../components/menu/index";
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

const Pages = styled.div`
  margin-bottom: calc(6vh + 5px);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  a{
    color:white;
    text-decoration: none;
  }
.btn-1 {
    background: rgba(34,34,34);
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 12px;
    border: 0;
    transition: all 0.5s;
    border-radius: 6px;
    width: auto;
    position: relative;
}
`

const Fotos = () => {

  const { album01 } = useStaticQuery(graphql`
  query {
    album01: allFile(
      limit: 9,
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
              <div style={{width: "500px", height: "500px", borderRadius: "10px"}}>
              <Img key={image.id} fluid={image.childImageSharp.fluid} alt="Album 1" />
              </div>
            ))}
          </FotosWrapper>

          <Pages>
            <center>
            <Link to="/fotosfull/"><button class="btn-1">Carregar todas as fotos... <span role="img" aria-label="loading">⌛</span></button></Link>
            </center>
          </Pages>
      </Container>
      </>
    )
}


export default Fotos

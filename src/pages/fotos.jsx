import React from "react";

import { useStaticQuery, graphql, Link } from "gatsby"

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
  display: grid;
  padding:60px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 5px;

  margin-top: calc(6vh + 10px);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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
      limit: 99,
      filter: {sourceInstanceName: {eq: "album01"},
       extension: {eq: "jpg"}}
      ) {
      nodes {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
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
              <Img
              className="img_album"
              key={image.id}
              fluid={image.childImageSharp.fluid}
              alt="Album 1"
              imgStyle={{
                objectFit: "cover",
                borderRadius: "3px"
              }}
              />
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

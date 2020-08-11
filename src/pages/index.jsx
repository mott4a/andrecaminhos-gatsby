import React from "react";
import styled from "styled-components"

import Menu from "../components/menu/index";
import SEO from "../components/seo"

import GlobalStyle from "../components/globalstyle";



const Container = styled.div`
  background: lightblue url("https://i.ibb.co/V2KmZ1S/bg.jpg") fixed;
  background-size: cover;
  min-height: 100vh;
  font-family: Roboto;
  @media (max-width: 900px) { 
    background: lightblue url("https://i.ibb.co/Pg76VP0/Frame-3.png") fixed;
    background-size: cover;
}

  #img{
    max-width: 100%;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const IndexPage = () => (
  <>
  <GlobalStyle />
  <SEO title="Home" />
  <Container>
      <Menu />
      <span>
        <img id="img" src="https://i.ibb.co/Wfywpw4/logowhite.png" alt="Logo Andrécaminhos" />
      </span>
  </Container>
  </>
)


export default IndexPage;

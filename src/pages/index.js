import React from "react";
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";



const Container = styled.div`
  background: lightblue url("https://i.ibb.co/V2KmZ1S/bg.jpg") no-repeat fixed center;
  background-size: cover;
  min-height: 100vh;
  font-family: Roboto;

  #img img{
    max-width: 100%;
    height: auto;
  }
`

const IndexPage = () => (
  <>
  <GlobalStyle />
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>André Caminhos - Início</title>
      </Helmet>
    <center>
      <span id="img">
        <img src="https://i.ibb.co/Wfywpw4/logowhite.png" alt="Logo Andrécaminhos" />
      </span>
    </center>
    <Menu />
  </Container>
  </>
)


export default IndexPage;

import React from "react"
import styled from 'styled-components';

import { Link } from "gatsby";

const Container = styled.div`
    font-family: 'Chelsea Market', sans-serif;
    font-size: calc(1vw + 3px);
    position: fixed;
    background: #fff;
    height: 6vh;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    z-index: 999;
    text-transform: uppercase;
    justify-content: space-between;
    padding: 0 50px;

    a{
      color: #000;
      text-decoration: none;
      padding: 10px;
      transition: 250ms;
    }

    a:hover{
      color: #00adff;
      transition: 250ms;
    }

    #logo{
      color:#00adff;
      cursor: default;
    }
`;


const Menu = () => (
  <Container>
    <span id="logo">
      <p><Link to="/">ANDRECAMINHOS</Link></p>
    </span>
    <span>
      <Link to="/pensamentos">Pensamentos</Link>
      <Link to="/historias">Histórias</Link>
      <Link to="/fotos">Fotos</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </span>
  </Container>
);

export default Menu;

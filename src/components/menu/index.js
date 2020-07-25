import React from "react"
import styled from 'styled-components';

import { Link } from "gatsby";

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 20px;
    position: fixed;
    background: #fff;
    height: 6vh;
    bottom: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    z-index: 999;
    flex: 1;
    flex-direction: row;
    text-transform: uppercase;
    padding: 10px;

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
`;


const Menu = () => (
  <Container>
    <Link to="/">Início</Link>
    <Link to="/pensamentos">Pensamentos</Link>
    <Link to="/fotos">Fotos</Link>
    <Link to="/contato">Contato</Link>
  </Container>
);

export default Menu;

import React from "react";
import { Helmet } from "react-helmet"

import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";


const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg") repeat-y;
  background-size: 100%;
  font-family: Roboto;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  header{
    position: absolute;
    top: 80px;
    color: white;
    font-size: 32px;
  }

  main {
    font-family: Roboto;
    height: 80vh;
    width: 100vw;
    background-color: #f1f1f1;
    z-index: 1;
    border-radius: 70px 70px 0px 0px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex: 1;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
main input, button, textarea{
    width: 450px;
    -webkit-appearance: none;
    appearance: none;
    padding: 0px 18px;
    border: solid 2px #ddd;
    background: #fff;
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    line-height: 34px;
    color: #444;
    height: 38px;
    font-size: 14px;
    display: inline-block;
    outline: none;
    border-radius: 20px;
    box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.4s 0s ease;
    -khtml-transition: all 0.4s 0s ease;
    -moz-transition: all 0.4s 0s ease;
    -ms-transition: all 0.4s 0s ease;
    -o-transition: all 0.4s 0s ease;
    transition: all 0.4s 0s ease;
}

.form{
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  align-items: inherit;
}

main h2 {
    font-family: "Avenir";
    font-size: 32px;
}

main h4{
    font-family: "Avenir";
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 40px;
    width: 300px;
    text-align: center;
}

#enviar{
    background: #FF5800;
    color: #fff;
    border-color: #FF5800;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
}

#enviar:hover{
  width: 450px;
  transition: 250ms;
}

#msg{
    height: 100px;
}
`

const Contato = () => (
    <>
        <GlobalStyle />
    <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>André Caminhos - Contato</title>
      </Helmet>
        <Menu />
        <header>
          <h1>Contato</h1>
        </header>
          <main>   
              <h2>Entre em contato comigo!</h2>
              <h4>+55 (021) 99479-8382</h4>
              <h4>Quer contar aquela história? Consultar algo? Manda mensagem aí! =D</h4>

              <form class="form" method="POST" data-netlify="true">
                  <label>Nome</label><p><input name="Nome" id="inputxt" type="text" /></p>
                  <label>Sobrenome</label><p><input name="Sobrenome" id="inputxt" type="text" /></p>
                  <label>Telefone</label><p><input name="Telefone" id="inputxt" type="text" value="+55" /></p>
                  <label>Email</label><p><input name="Email" id="inputxt" type="email" /></p>
                  <label>Mensagem</label><p><textarea name="Mensagem" id="msg" type="text" /></p>
                  <button id="enviar" type="submit" >Enviar</button>
              </form> 
          </main>
    </Container>
    </>
)


export default Contato

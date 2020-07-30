import React, { useState } from "react";
import { Helmet } from "react-helmet"

import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";

import { AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";

const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg") repeat-y;
  background-size: 100%;
  font-family: Montserrat;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`

const Wrapper = styled.div`
  background: rgb(254,253,253);
  background: linear-gradient(90deg, rgba(254,253,253,1) 0%, rgba(254,254,254,1) 100%);
  height: 600px;
  border-radius: 5px;
  width: 450px;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(128,128,128,0.7);
  -moz-box-shadow: 0px 0px 5px 1px rgba(128,128,128,0.7);
  box-shadow: 0px 0px 5px 1px rgba(128,128,128,0.7);
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  color: #5D5574;
  width: 80%;
  margin-left: 10%;
  margin-top: 10%;
`

const Principal = styled.main`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;

  input{
    background: #F2F2F8;
    border:none;
    width: 80%;
    height: 60px;
    margin-top: 5px;
    padding-left: 10px;
    font-family: Montserrat;
  }

  textarea{
    background: #F2F2F8;
    border:none;
    width: 80%;
    height: 100px;
    margin-top: 5px;
    padding-left: 10px;
    font-family: Montserrat;
    padding: 10px;
  }

  button{
    width: 80%;
    border: none;
    height: 40px;
    border-radius: 5px;
    color: white;
  }

  .btn {
    cursor: pointer;
    background-image: linear-gradient(to right, #4CB8C4 0%, #3CD3AD 51%, #4CB8C4 100%);
    transition: 500ms;
    opacity: 0.76;
    font-weight: bold;
    }
  .btn:hover { 
    background-position: right center;
    transition: 500ms;
    opacity: 1;
  }

  footer{
    margin-top: 10px;
    text-align: initial;

    #wpp{
      color: #25D366;
      font-size: 25px;
    }

    #yahoo{
      color: #410093;
      font-size: 25px;
    }
  }
`

const Contato = () => {


    const [formState, setFormState] = useState({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });

    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }
  

    const handleChange = e =>{
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = e =>{
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState })
      })
        .then(() => alert("Successo! Sua mensagem foi enviada e entraremos em contato em breve."))
        .catch(error => alert(error));

      e.preventDefault();
    }

    return(
    <>
        <GlobalStyle />
        <Helmet>
          <meta charSet="utf-8" />
          <title>André Caminhos - Contato</title>
        </Helmet>
    <Container>
        <Menu />
        <Wrapper>
        <Header>
          <h2>Entre em contato comigo!</h2>
          <h4>Quer contar aquela história? Consultar algo? Manda mensagem aí! =D</h4>

        </Header>
          <Principal>
            <form onSubmit={handleSubmit} class="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <input
               name="nome" 
               type="text" 
               placeholder="Nome completo" 
               onChange={handleChange} 
               value={formState.nome} 
               required
              />
              <input
               name="telefone"
               type="tel"
               placeholder="Telefone"
               onChange={handleChange}
               value={formState.telefone}
               required 
              />
              <input
               name="email"
               type="email"
               placeholder="Email"
               onChange={handleChange}
               value={formState.email}
               required 
              />
              <textarea 
              name="mensagem"
              id="msg"
              type="text"
              onChange={handleChange}
               value={formState.mensagem}
              placeholder="Escreva sua mensagem aqui" required 
              />
              <br />
              <button
               class="btn" id="enviar" type="submit" 
              >
                Enviar
              </button>
              </form>
              <footer>
                <p><AiFillMail id="yahoo" /> andrecaminhos@yahoo.com.br</p>
                <p><AiOutlineWhatsApp id="wpp" /> +55 (021) 99479-8382</p>
              </footer> 
          </Principal>
        </Wrapper>
    </Container>
    </>
    )
}

export default Contato

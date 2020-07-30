import React from "react";
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";

import { Link } from "gatsby"

import Typist from 'react-typist';

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";


const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg") repeat-y;
  background-size: cover;
  min-height: 100vh;
  font-family: Roboto;
  overflow: hidden;

`

const Wrapper = styled.div`
    margin-top: calc(6vh);
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    a{
        color: rgba(255,204,0,1);
        text-decoration: none;
    }
`

const About = styled.div`
    width: 90%;
    height: 100vh;
    text-align: justify;
    background: rgba(0, 0, 0, 0.5);
    height: auto;
    padding: 20px;
    border-radius: 5px;
    color: white;

`

const Title = styled.div`
  color: white;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  font-family: Chelsea Market;
  margin-top: 10px;
  
    img {
        height: auto;
        width: 250px;
        border-radius: 50%;
    }
`

const Social = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-items: center;
    font-size: 20px;
    background-color: rgba(0,0,0,0.8);
    margin-top: 10px;
    border-radius: 10px;
    
    a{
        margin: 10px;
        display: flex;
        color: white;
    }

    #fb{
        color: #3b5999;
        font-size: 25px;
    }

    #ig{
        color: #e4405f;
        font-size: 25px;
    }
`

const Sobre = () => {

    return(
    <>
    <GlobalStyle />
    <Helmet>
        <meta charSet="utf-8" />
        <title>André Caminhos - Sobre</title>
    </Helmet>
    <Container>
        <Menu />
        <Wrapper>
            <Title>
                <center>
                    <img src="https://i.ibb.co/Dfbx5wZ/Frame-3-2.png" alt="Foto do M. André Pinto"/>
                </center>
            </Title>
            <About>
            <span id="sobre">
            <Typist cursor={{
                show: false,
                blink: false,
                element: '_',
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
            }}>
                <h1>Quem somos?</h1>
            </Typist>
            </span>
            <p>Marcos André é operador de Utilidades por opção e montanhista por paixão. Montanhista desde 1986 e escalador desde 1997, fez da Serra dos Orgãos seu principal local de constantes treinos e contato intenso com a natureza! Gosta principalmente de escaladas tradicionais e grandes paredes, acumula algumas conquistas no Parnaso, PETP e PNMMT, como Muriqui Moleque ( Cabeça de Peixe), Equilíbrio Distante (Pedra Santa Rita), Débi e Lóide/ Dedo Estourado/ Los Três Amigos (Parque do Imbuí) e Lamúrias de um Rabugento (Cabritos).   Fez parte da fundação do <Link to="https://www.ceteresopolitano.org/">Centro Excurcionista Teresopolitano (CET)</Link>, e exerceu a função de presidente de 2000 à 2006.</p>
            </About>

            <Title>
                <center>
                    <img src="https://i.ibb.co/n7pJXgL/Frame-3-1.png" alt="Foto do M. André Pinto"/>
                </center>
            </Title>
            <About>
            <span id="sobre">
            <Typist cursor={{
                show: false,
                blink: false,
                element: '_',
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
            }}>
                <h1>Qual o nosso objetivo?</h1>
            </Typist>
            </span>
            <p>Nosso principal objetivo é difusão da cultura de montanha, debate em torno das melhores práticas, trazer histórias do nosso esporte e é claro dar de alguma forma suporte a montanhistas interessados a conhecer nossas montanhas indicando guias credenciados e abrigo se necessário.

</p>
            </About>

            <Social>
                <Link to="https://www.instagram.com/marcosandrepinto/"><AiFillInstagram id="ig" />@marcosandrepinto</Link>
                <Link to="https://www.facebook.com/marcosandre.pinto.7"><AiFillFacebook id="fb" />Marcos André Pinto</Link>
            </Social>
            
        </Wrapper> 
    </Container>
    </>
    );
};

export default Sobre;

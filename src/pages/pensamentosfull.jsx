import React from "react";
import { Helmet } from "react-helmet"

import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";
import Post from "../components/post"

import { graphql, StaticQuery } from "gatsby"

const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg");
  background-size: 100%;
  font-family: Roboto;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`

const Title = styled.div`
  width: 50vw;
  color: white;
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  font-family: Chelsea Market;
  
    img {
        height: auto;
        width: 250px;
        border-radius: 50%;
    }

    h1{
      text-align: center;
    }

    h4{
      text-align: justify;
    }
`

const Pages = styled.div`
  margin-bottom: 6vh;
`




const Pensamentos = () => (
  <Container>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>André Caminhos - Pensamentos</title>
      </Helmet>
    <Menu />
    <Title>
      <center>
        <img src="https://i.ibb.co/PD7HY0S/photo2.png" alt="Foto do M. André Pinto"/>
      </center>
      <h1>VARIAÇÕES DO MESMO TEMA</h1>
      <h4>Escalada, montanha, amigos, desafio, travessia, fissura, bolder, adêrencia, segurança, amizade, entalamento, bolinho com caldo de cana, retinida, tetinho, companheirismo, tirolesa, fugareiro, cumplicidade, Abertura de Temporada na Urca, UIAA, freio oito, ATC, pérolas do Menguele, grigri, temporal, crux, cachoeira, bike, rapel, paixão, cume, trilha, perrengue, frio, boldriê, felicidade, mosquetão, acampamento, frustração, fenda, calor, calafrio, grampo, material móvel, chapeleta, calor, bota, conquista, jumar, chaminé, furadeira ou punho, capacete, barrinha de cereal, cliff, falésia, sapatilha, mochila, Banana passa, nut, falésia, pedreira, 6ªsup, magnésio, parede,gostinho de quero mais; E essas coisas que entram em nossa vida e ficam para sempre!</h4>
    </Title>

    <StaticQuery query={pensamentosQuery} render={data => {
      return(
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
            title={node.frontmatter.title} 
            date={node.frontmatter.date}
            author={node.frontmatter.author}
            body={node.frontmatter.body} 
            />
          ))}
        </div>
      )
    }}/>
    <Pages />
  </Container>
)

const pensamentosQuery = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD [de]  MMMM, YYYY", locale: "pt")
          author
          body
        }
        excerpt
      }
    }
  }
}

`;

export default Pensamentos

import React from "react";

import styled from "styled-components"

import Menu from "../components/menu/index";
import GlobalStyle from "../components/globalstyle";
import SEO from "../components/seo"
import Post from "../components/post"

import { graphql, StaticQuery, Link } from "gatsby"

const Container = styled.div`
  background: lightblue url("https://i.ibb.co/Rb0TfzW/bghistoria.jpg") repeat-y;
  background-size: cover;
  font-family: Roboto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  width: 85%;
  color: white;
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  font-family: Chelsea Market;
  margin-top: 7vh;
  
    img {
        height: auto;
        width: 250px;
        border-radius: 50%;
    }

    h1{
      text-align: center;
      color: black;
    }

    h4{
      text-align: justify;
      color: blue;
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

    &::after {
        content: "";
        position: absolute;
        left: 85%;
        top: 31%;
        right: 5%;
        bottom: 0;
        opacity: 0;

    }
}
`




const Pensamentos = () => (
  <>
  <SEO title="Pensamentos" />
  <GlobalStyle />
  <Container>
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


    <Pages>
      <center>
      <Link to="/pensamentosfull/"><button class="btn-1">Carregar mais pensamentos... <span role="img" aria-label="loading">⌛</span></button></Link>
      </center>
    </Pages>

  </Container>
  </>
)

const pensamentosQuery = graphql`
{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]},
    filter: {fileAbsolutePath: {regex: "/(pensamentos)/.*\\\\.md$/"}},
    limit: 3
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          body
          author
        }
      }
    }
  }
}
`;

export default Pensamentos

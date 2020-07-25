import React from "react"
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    background: rgba(196, 196, 196, 0.6);
    backdrop-filter: blur(50px);
    width: 50%;
    max-width: fit-content;
    border-radius: 5px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(34,34,34,0.75);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    h1{
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    padding-left: 20px;
    padding-top: 15px;
    }

    p{
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    padding-top: 2px;
    text-align: justify;
    justify-self: center;
    padding: 5px 20px 10px 20px;
    }

    h6{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px 10px 20px;
    }
`;


const Post = ({ title, author, date , body }) => (
  <Container>
      <h1>{title}</h1>
      <p>{body}</p>
      <h6>{author} em {date}</h6>
  </Container>
);

export default Post;

import styled, { createGlobalStyle } from 'styled-components';

//@ts-ignore

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;

  }

  body {
    background-color: lightcoral;
    background-size: cover; 
    margin: 0;
    padding: 0 20px; 
    display: flex; 
    justify-content: center;

  }

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
  }

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 

  > p {
    color: white;
  }

  .score {
    color: white; 
    font: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Arial ', sans-serif;
    background-clip: text;
    --webkit-background-clip: text; 
    --webkit-webkit-text-fill-color: transparent; 
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow()
  }

`

export const Button =  styled.button`
  background: "palevioletred";
  color: "white" ;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
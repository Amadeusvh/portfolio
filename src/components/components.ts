import styled from "styled-components";

  export const AppWrapper = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `

  export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
  `;

  export const Button = styled.button`
    border-color: white;
    border-style: solid;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    background: none;
    width: 30%;
    padding: 0.3em;
    margin: 0.5em;

    &:hover {
      background: #454b57;
    }
  `

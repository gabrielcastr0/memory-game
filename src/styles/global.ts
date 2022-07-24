import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #41295a;
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
  }

  main{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`
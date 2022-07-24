import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url("https://st.depositphotos.com/1137361/2819/i/950/depositphotos_28190015-stock-photo-soccer-field.jpg");
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
  }

  main{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`
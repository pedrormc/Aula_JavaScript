import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {toast , ToastCointainer} from "react-toastify"
import styled from "styled-components"
import Form from "./components/Form.js"


const Container = styled.div`
width 100%;
max-widith: 800px;
margin-top : 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`


function App() {
  return(
    <>

<Container>
  <Title>USUÁRIOS</Title>
</Container>

    </>
  )
}

export default App

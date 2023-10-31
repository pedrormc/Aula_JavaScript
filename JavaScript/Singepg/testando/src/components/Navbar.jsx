import React from 'react';
// Se você estiver usando React Router para navegação
import styled from "styled-components"





const Bloco = styled.header`
background-color: #E4EFF8;
width:100%;
height: 300px;

z-index: 1000;


`;

const Logo = styled.div`

  width: min-content;
    
   

`;

const Nav = styled.nav`
list-style-type:none;
    margin: 0px;
    padding: 0px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    
    justify-content: space-between;
    background-color:#E4EFF8;
`;

const Ul  = styled.ul`
list-style-type: none;
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;
    background-color: #E4EFF8;
    text-align: right;
    right: 0px;
    width: 50%;
`

const Li = styled.li`
float: right;







& :hover{
  background-color: #99b3bd;
    color: #000000;
    border-bottom: solid 8px #000000;
    
    
    
}
a {
  
  display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 18px 30px;
    margin: 0px;
    padding-top: 45px;
    padding-bottom: 45px;
    text-decoration: none;
    border-bottom: solid 8px #6D8F9B;
    font-size: 22px;
    

};`



const Navbara = () => {
  return (
    
        <>
        
        
      <Bloco>
      
     
      </Bloco>
      
      
       
        </>
    
  )
  
}

export default Navbara
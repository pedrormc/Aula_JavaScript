import React, { useRef } from "react"
import styled from "styled-components";


const FormContainer = styled.form`

margin-top : 20px;
display: flex;
align-items: flex-end;
flex-wrap: wrap;
padding: 20px;
box shadow: 0px 0px 5px #ccc;
gap :10px;
border-radius: 5px;
`

const InputArea = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
width : 120px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
heigth: 40px;
`

const Label= styled.label``;




const Form =({onEdit})=>{
    const ref = useRef()

    return (
         <FormContainer>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone"/>
                </InputArea>
            <InputArea>
                <Label>data de nasc</Label>
                <Input name="data_nascimento" type="date"/>
            </InputArea>

            <Button type="submit"> SALVAR</Button>
         </FormContainer>
    );
};

export default Form
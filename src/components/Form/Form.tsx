import React from "react";
import styled from "styled-components";
import BtnTransaction from "../BtnTransaction/BtnTransaction";
import InputGeneral from "../InputGeneral/InputGeneral";

const Formulary = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
`;

const H3 = styled.h3`
margin: 0;
padding: 0;
`;
function handlerSubmit(event: any) {
    console.log(event.target.content);
}

function handlerForm(event: any) {
    event.preventDefault();
}

function Form(props: any) {
    return(
    <Formulary onSubmit={handlerForm}>
        <h2>Add new transation</h2>
        <H3>Text</H3>
        <InputGeneral type="text" dataText={"text"}/>
        <H3>Amount</H3>
        <H3>(negative-expense, positive-income)</H3>
        <InputGeneral type="number" dataNumber={"number"}/>
        <BtnTransaction submit={handlerSubmit}>
            Add transaction
        </BtnTransaction>
    </Formulary>)
}

export default Form;
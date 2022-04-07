import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
width: 100%;
background-color: white;
padding: 0.7rem;
border: 1px solid gray;
border-radius: 3px;
`;

function InputGeneral(props: any) {
    const [content, setContent] = useState("")
    return(
        <>
        <Input type={props.type === "text" ? "text" : "number"} onChange={event => setContent(event.target.value)} value={content}/>
        </>
    )
}

export default InputGeneral;

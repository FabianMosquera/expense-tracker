import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: #9273f4;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #765dc9;
    transition: background-color 0.2s ease-in-out;
  }
`;

function BtnTransaction(props: any) {
  return (
    <>
      <Button type="submit" onClick={props.submit}>Add transaction</Button>
    </>
  );
}

export default BtnTransaction;

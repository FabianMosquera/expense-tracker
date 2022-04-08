import React from "react";
import styled from "styled-components";

export const FormContent = styled.form``;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

export const Button = styled.input`
  width: 100%;
  padding: 0.7rem 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  background-color: var(--color-purple-main);
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-purple-dark);
    transition: background-color 0.2s ease-in-out;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 0.4rem 4%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background-color: white;
  border: thin solid gray;
  border-radius: 2px;
  outline: 0;
`;

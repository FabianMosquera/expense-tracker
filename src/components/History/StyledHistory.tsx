import React from "react";
import styled from "styled-components";

export const Scroll = styled.ul`
  width: 103%;
  height: 185px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  max-width: 94%;
  height: auto;
  margin: 0;
  padding: 0.6rem 4%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background-color: white;
  border-radius: 2px;
  box-shadow: 12px 0 0 0 ${({ value }: any) => (value > 0 ? "green" : "red")}, 0 1px 2px 0 #a3a3a3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

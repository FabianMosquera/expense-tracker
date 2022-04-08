import React from "react";
import styled from "styled-components";

export const DashContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  padding: 0.5rem 4%;
  background-color: #fff;
  box-shadow: 0px 0px 5px 2px #dadada;
  border-radius: 4px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const DashText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ color }: any) => color};
`;

import React from "react";
import styled from "styled-components";
// import "./css/Button.css";
const setBackgroundColor = props => props.bgcolor;

const StyledButton = styled.button`
  background-color: ${setBackgroundColor};
  color: ${props => props.color};
  background-color: red;
  display: block;
  margin: 5px;
  padding: 5px 10px;
`;

function Button(props) {
  return (
    <StyledButton
      color={props.color}
      bgcolor={props.bgcolor}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;

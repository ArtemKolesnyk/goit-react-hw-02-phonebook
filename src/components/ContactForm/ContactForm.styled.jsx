import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 20px
`;

export const Label = styled.label`
  display: flax;
  justify-content: center;
  color: green;
  margin: 10px;
`;

export const Button = styled.button`
  
  margin-left: 460px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #47bdfd;
  background-color: #00e1ff;
  &:hover {
    background-color: #8aaa52fc;
  }
`;

export const Input = styled.input`
  border: solid teal 2px;
  border-radius: 4px;
  margin: 10px;
  &:focus {
    border-radius: 4px;
    border: solid  teal 2px;
    box-shadow: 20px 20px 50px teal;
  }
`;
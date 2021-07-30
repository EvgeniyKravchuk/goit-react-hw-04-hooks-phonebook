import styled from "@emotion/styled";

export const Form = styled.form`
  text-align: center;

  padding: 20px;

  border-bottom: 5px solid black;
`;

export const Label = styled.label`
  font-size: 30px;
  font-weight: 600;

  display: flex;
  justify-content: ${(props) => (props.filter ? "center" : "space-between")};
  align-items: ${(props) => (props.filter ? "center" : "baseline")};

  flex-direction: ${(props) => (props.filter ? "column" : "row")};

  transition-duration: 500ms;

  cursor: pointer;

  margin-bottom: 10px;

  &:hover,
  &:focus {
    color: orange;
  }
`;

export const Input = styled.input`
  height: 30px;
  width: 300px;

  font-size: 20px;
  font-weight: 500;

  outline: none;

  border: none;
  border-radius: 10px;

  transition-duration: 500ms;

  padding-left: 10px;
  margin-left: 20px;

  &:hover,
  &:focus {
    color: orange;
    border: 2px solid orange;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 500;

  width: 150px;
  height: 30px;

  border-radius: 10px;

  transition-duration: 500ms;

  &:hover,
  &:focus {
    background-color: orange;
  }
`;

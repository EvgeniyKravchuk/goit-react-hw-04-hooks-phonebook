import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;

  width: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 0px;
  margin-top: 20px;
  padding: 0px;
`;

export const Item = styled.li`
  font-size: 26px;
  font-weight: 600;

  width: 400px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;

  background-color: #4b4b4b;

  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 50%;

  padding: 5px;

  background-color: #4b4b4b;

  cursor: pointer;

  transition-duration: 500ms;

  &:hover,
  &:focus {
    border: 1px solid orange;
    transform: rotate(360deg) scale(1.15);

    svg {
      fill: orange;
    }
  }

  svg {
    width: 30px;
    height: 30px;

    transition-duration: 500ms;
  }
`;

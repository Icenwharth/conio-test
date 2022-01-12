//libraries
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => {
    switch (props.type) {
      case "submit":
        return "#00bcd4";
      case "active-action":
        return "#79B6EF";
      case "passive-action":
        return "#9DA9B4";
      case "reset":
        return "#ff5722";
    }
  }};
  min-width: 100px;
  max-width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default function ButtonComponent({ onClick, text, type }) {
  return (
    <Button onClick={onClick} type={type}>
      {text}
    </Button>
  );
}

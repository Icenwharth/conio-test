//styles
import { Button } from "./styles";

export default function ButtonComponent({ onClick, text, type }) {
  return (
    <Button onClick={onClick} type={type}>
      {text}
    </Button>
  );
}

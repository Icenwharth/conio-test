//libraries
import { useState } from "react";

//components
import Button from "../button/index";

//styles
import { FormContainer, Input } from "./styles";

export default function FormComponent({ children, onSubmit, fields }) {
  const [formFields, setFormFields] = useState(
    fields.reduce((acc, value) => ({ ...acc, [value]: value }), {})
  );

  function handleChange(e) {
    e.preventDefault();
    const { value } = e.target;

    setFormFields({ ...formFields, value: value });
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      {fields.map((field) => (
        <Input
          id={field.name}
          type={field.type}
          value={formFields[field.name]}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      ))}
      <Button type="submit" text="submit" />
    </FormContainer>
  );
}

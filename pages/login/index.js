//libraries
import { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";

//components
import Form from "../../components/form";

//Configs && Utils
import { loginFormFields } from "../../Config";

//styles
import { Container } from "./styles";

export default function LoginPage() {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("secretKey");
    if (isLoggedIn) Router.push("/main");
  }, []);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { secretKey } = event.target;

    //I assume this will be an API and the backend will validate the key
    //given the response I will redirect the user or tell him the key is wrong
    //for this exercise I chose to store it in local starage
    localStorage.setItem("secretKey", secretKey.value);
    Router.push("/main");
  }

  return (
    <Container>
      <Form fields={loginFormFields} onSubmit={handleSubmit} />
    </Container>
  );
}

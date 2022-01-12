//libraries
import { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";

//components
import Form from "../../components/form";

const Container = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

const Input = styled.textarea`
  width: 350px;
  height: 15px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  border: none;
  overflow: hidden;
  margin-bottom: 10px;
`;

export default function LoginPage() {
  var regex = /^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/;
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

    console.log("event=>", event.target.secretKey);
    //I assume this will be an API and the backend will validate the key
    //given the response I will redirect the user or tell him the key is wrong
    //for this exercise I chose to store it in local starage
    // localStorage.setItem("secretKey", secretKey.value);
    // Router.push("/main");
  }

  const fields = [
    {
      name: "secretKey",
      value: "",
      placeholder: "Your secret key here",
      type: "",
    },
  ];

  return (
    <Container>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Container>
  );
}

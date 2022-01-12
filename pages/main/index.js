//libraries
import { useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";

//components && hooks
import { useInfo } from "../../hooks/useInfo";
import PriceCard from "../../components/priceCard";

//styles
import { Wrapper, Container } from "./styles";

export default function MainPage() {
  const exchangeRates = useInfo("https://blockchain.info/ticker");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("secretKey");

    if (!isLoggedIn) {
      Router.push("/");
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        {typeof exchangeRates === "object" && (
          <PriceCard exchangeRates={exchangeRates} btcQnty={btcQnty} />
        )}
      </Container>
    </Wrapper>
  );
}

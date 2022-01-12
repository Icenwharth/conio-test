//libraries
import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

//components && hooks
import { useInfo } from "../../hooks/useInfo";
import PriceCard from "../../components/priceCard";
import Button from "../../components/button";

//uitls
import { createResource } from "../../Utils";

const Wrapper = styled.div`
  background: #717171;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  background: white;
`;

export default function MainPage() {
  const exchangeRates = useInfo("https://blockchain.info/ticker");
  const [btcQnty, setBtcQnty] = useState(2.5);
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(null);

  return (
    <Wrapper>
      {modal && <Modal content={modal} />}
      <Container>
        {typeof exchangeRates === "object" && (
          <PriceCard
            exchangeRates={exchangeRates}
            btcQnty={btcQnty}
            setShowModal={setShowModal}
            setModal={setModal}
          />
        )}
        <Button type="submit" text="Submit" />
      </Container>
    </Wrapper>
  );
}

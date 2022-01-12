//libraries
import { useState } from "react";
import styled from "styled-components";

//components
import Button from "../button";

//styles
import {
  CardWrapper,
  SelectWrapper,
  Select,
  FiatQnty,
  BtcQnty,
  ButtonsWrapper,
} from "./styles";

export default function PriceCard({ exchangeRates }) {
  const [currency, setCurrency] = useState(Object.keys(exchangeRates)[0]);
  const [btcQnty, setBtcQnty] = useState(2.5);

  const fiatQnty = btcQnty * exchangeRates[currency].sell;
  const symbol = exchangeRates[currency].symbol;

  function handleChange(e) {
    setCurrency(e.target.value);
  }

  function sellBtc() {
    if (btcQnty - 1 < 0) return;
    setBtcQnty(btcQnty - 1);
  }

  function buyBtc() {
    setBtcQnty(btcQnty + 1);
  }

  return (
    <CardWrapper>
      <FiatQnty>{`${fiatQnty.toFixed(2)} ${symbol}`}</FiatQnty>

      <SelectWrapper>
        <Select onChange={handleChange}>
          {Object.keys(exchangeRates).map((rate, key) => (
            <option key={key} value={rate}>
              {rate}
            </option>
          ))}
        </Select>
      </SelectWrapper>

      <ButtonsWrapper>
        <Button text="Sell" type="passive-action" onClick={sellBtc} />
        <Button
          text="Buy"
          type="active-action"
          onClick={buyBtc} //or create a modal form for the exact qnty
        />
      </ButtonsWrapper>
      <BtcQnty>{"Balance: " + btcQnty.toFixed(6) + ` BTC`}</BtcQnty>
    </CardWrapper>
  );
}

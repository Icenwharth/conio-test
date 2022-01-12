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

export default function PriceCard({
  exchangeRates,
  btcQnty,
  setShowModal,
  setModal,
}) {
  const [currency, setCurrency] = useState(Object.keys(exchangeRates)[0]);

  const fiatQnty = btcQnty * exchangeRates[currency].sell;
  const symbol = exchangeRates[currency].symbol;

  function handleChange(e) {
    setCurrency(e.target.value);
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

      <BtcQnty>{"Balance: " + btcQnty.toFixed(6) + ` BTC`}</BtcQnty>

      <ButtonsWrapper>
        <Button
          text="Sell"
          type="passive-action"
          onClick={() => {}} //e.x set a modal to a sell form
        />
        <Button
          text="Buy"
          type="active-action"
          onClick={() => {}} //e.x set a modal to a buy form
        />
      </ButtonsWrapper>
    </CardWrapper>
  );
}

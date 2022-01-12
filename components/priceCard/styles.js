import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 20px;
  background: #ececec;
  height: 100%;
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const SelectWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  max-height: 20px;
  min-width: 100px;
  border: none;
  background-color: #ececec;
  &:focus-visible {
    border: none;
  }
`;

export const FiatQnty = styled.h3`
  grid-area: 1 / 1 / 2 / 2;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
`;

export const BtcQnty = styled.h5`
  grid-area: 2 / 1 / 3 / 2;
  font-family: "Roboto";
  font-size: 18px;
  color: #717171;
  display: flex;
  align-items: flex-end;
  margin: 0;
`;

export const ButtonsWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 20px;
  background: #ececec;
  height: 200px;
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 540px) {
    width: 80%;
    height: 250px;
  }
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
  font-family: "Roboto";
  font-size: 18px;
  color: #717171;

  @media (max-width: 540px) {
    align-items: flex-end;
    align-self: flex-end;
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const ButtonsWrapper = styled.div`
  justify-content: flex-start;
  align-items: flex-end;
  @media (min-width: 540px) {
    grid-area: 2 / 2 / 3 / 3;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

//libraries
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

export const Input = styled.textarea`
  width: 350px;
  height: 15px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  border: none;
  overflow: hidden;
  margin-bottom: 10px;

  @media (max-width: 540px) {
    width: 250px;
  }
`;

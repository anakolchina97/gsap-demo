import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";

const Cards = ({ children }) => {
  return (
    <CardsWrap>
      <Container>
        <CardsInner>{children}</CardsInner>
      </Container>
    </CardsWrap>
  );
};

const CardsWrap = styled.div``;

const CardsInner = styled.div`
  display: grid;
  gap: ${rem(40)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(400)}, 1fr));
`;

export default Cards;

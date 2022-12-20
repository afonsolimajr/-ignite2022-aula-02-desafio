import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1em;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, fr1);
  grid-template-rows: 50px 50px;
  grid-gap: 0.5em;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  font-size: 0.8rem;
  background: ${(props) => props.theme["purple-light"]};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;

  img {
    width: 100%;
    max-width: 476;
  }
`;

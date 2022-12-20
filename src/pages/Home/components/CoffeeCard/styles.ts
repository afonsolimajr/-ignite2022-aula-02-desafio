import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 256px;
  min-height: 310px;
  gap: 0.5em;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  margin-top: 1em;
  padding: 1em;
  background: ${(props) => props.theme["base-card"]};
`;

export const CoffeeImage = styled.img`
  width: 120px;
  margin-top: -2em;
`;

export const Tag = styled.div`
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  padding: 0.2rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
`;

export const Name = styled.h3``;

export const Description = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid;
`;

export const Price = styled.h4``;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 4px;
`;

export const CounterContainer = styled.div`
  padding: 8px;
  gap: 1em;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
`;

export const IconButton = styled.button``;

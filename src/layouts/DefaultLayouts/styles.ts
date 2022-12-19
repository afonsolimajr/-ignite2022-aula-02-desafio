import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 1rem auto;
  padding: 0 4rem;

  background: ${(props) => props.theme["background"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

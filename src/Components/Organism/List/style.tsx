import styled from "styled-components";

const StyledDiv = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 1rem;
  margin: auto;
  overflow: hidden;
`;
const StyledSubheader = styled.div`
  display: grid;
  grid-row: 1/2;
`;
const StyledCard = styled.div`
  display: grid;
  grid-row: 2/3;
`;
const StyledButton = styled.div`
  display: grid;
  grid-row: 3/4;
`;

export default {
  StyledDiv,
  StyledSubheader,
  StyledCard,
  StyledButton
};

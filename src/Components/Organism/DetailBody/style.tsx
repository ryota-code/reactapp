import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr 1fr;
  row-gap: 2rem;
  background-color: wheat;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;

const StyledBody = styled.div`
  width: 100%;
  display: grid;
  grid-row: 2/3;
  grid-template-rows: auto 1fr;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;

const StyledSubheader = styled.div``;

const StyledAudio = styled.div``;

const StyledCard = styled.div``;

const StyledGoodViews = styled.div`
  width: 100%;
  display: grid;
  grid-row: 2/3;
  grid-template-columns: 5rem 1fr;
  column-gap: 1rem;
`;

const StyledButton = styled.div`
  display: grid;
  grid-column: 1/2;
`;

const StyledViews = styled.div`
  display: grid;
  grid-column: 2/3;
`;

const StyledFooter = styled.div`
  width: 100%;
  display: grid;
  grid-row: 3/4;
`;

export default {
  StyledDiv,
  StyledHeader,
  StyledBody,
  StyledContainer,
  StyledSubheader,
  StyledAudio,
  StyledCard,
  StyledGoodViews,
  StyledButton,
  StyledFooter,
  StyledViews,
};

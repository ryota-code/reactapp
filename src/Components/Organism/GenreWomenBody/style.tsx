import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 1rem;
  margin: auto;
  overflow: hidden;
  background-color: wheat;
`;

const StyledHeader = styled.div`
  display: grid;
`;

const StyledCategory = styled.div`
  display: grid;
`;

const StyledPrevList = styled.div``;

const StyledCard = styled.div`
  display: grid;
`;

const StyledSubheader = styled.div`
  display: grid;
`;

const StyledFooter = styled.div`
  display: grid;
`;

export default {
  StyledDiv,
  StyledCategory,
  StyledPrevList,
  StyledCard,
  StyledHeader,
  StyledSubheader,
  StyledFooter,
};

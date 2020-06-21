import styled from "styled-components";

const StyledDiv = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 1rem;
  margin: auto;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  display: grid;
`;

const StyledCategory = styled.div`
  display: grid;
`;

const StyledPrevList = styled.div``;

const StyledList = styled.div`
  display: grid;
`;

const StyledSubheader = styled.div`
  display: grid;
  grid-row: 1/2;
`;

const StyledFooter = styled.div`
  display: grid;
  grid-row: 1/2;
`;

export default {
  StyledDiv,
  StyledCategory,
  StyledPrevList,
  StyledList,
  StyledHeader,
  StyledSubheader,
  StyledFooter,
};

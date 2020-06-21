import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 2rem;
  background-color: wheat;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;

const StyledBody = styled.div`
  width: 90%;
  display: grid;
  grid-row-gap: 2rem;
  grid-row: 2/3;
  grid-template-rows: 1fr auto;
  margin: auto;
`;

const StyledSubheader = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;

const StyledForm = styled.div`
  width: 100%;
  display: grid;
  grid-row: 2/3;
  grid-row-gap: 2rem;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const StyledButton = styled.div`
  width: 5rem;
  display: grid;
  grid-row: 5/6;
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
  StyledForm,
  StyledSubheader,
  StyledFooter,
  StyledButton
};

import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 2fr;
  row-gap: 2rem;
  background-color: wheat;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: grid;
`;

const StyledSubheader = styled.div`
  width: 100%;
  display: grid;
`;

const StyledButtonThree = styled.div`
  width: 100%;
  display: grid;
`;

const StyledList = styled.div`
  width: 100%;
  display: grid;
`;

const StyledFooter = styled.div`
  width: 100%;
  display: grid;
`;

export default {
  StyledDiv,
  StyledHeader,
  StyledButtonThree,
  StyledList,
  StyledFooter,
  StyledSubheader,
};

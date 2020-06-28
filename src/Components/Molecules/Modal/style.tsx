import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-columns: 2fr 1fr 2fr;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 20;
  opacity: 0.5;
`;

const StyledModalDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr 9fr;
  text-align: center;
  grid-column: 2/3;
  padding: 0.5rem;
`;
const StyledTextDiv = styled.p``;

const StyledButtonDiv = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
`;

export default {
  StyledDiv,
  StyledModalDiv,
  StyledTextDiv,
  StyledButtonDiv
};

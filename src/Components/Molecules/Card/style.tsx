import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  background-color: white;
`;

const StyledImageDiv = styled.div`
  display: grid;
  grid-column: 1/2;
  margin: 0.5rem;
`;

const StyledTextDiv = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-template-rows: 1fr 1fr;
  margin: 0.5rem;
  line-height: 2rem;
`;

const StyledUpDiv = styled.div`
  display: grid;
  grid-row: 1/2;
  grid-template-columns: auto 1fr;
  column-gap: 0.5rem;
`;

const StyledDownDiv = styled.div`
  display: grid;
  grid-row: 2/3;
  grid-template-columns: 1fr 1fr 1fr 7fr;
  column-gap: 0.5rem;
`;

const StyledText1Div = styled.div`
  display: grid;
  grid-column: 1/2;
  white-space: nowrap;
`;

const StyledText2Div = styled.div`
  display: grid;
  grid-column: 2/3;
  border-bottom: 0.1rem solid black;
  white-space: nowrap;
`;

const StyledText3Div = styled.div`
  display: grid;
  grid-column: 1/2;
  white-space: nowrap;
`;

const StyledText4Div = styled.div`
  display: grid;
  grid-column: 2/3;
  white-space: nowrap;
`;

const StyledText5Div = styled.div`
  display: grid;
  grid-column: 3/4;
  white-space: nowrap;
`;

const StyledTextGenreDiv = styled.div``;

const StyledButtonDiv = styled.div``;

export default {
  StyledDiv,
  StyledImageDiv,
  StyledTextDiv,
  StyledUpDiv,
  StyledDownDiv,
  StyledText1Div,
  StyledText2Div,
  StyledText3Div,
  StyledText4Div,
  StyledText5Div,
  StyledTextGenreDiv,
  StyledButtonDiv,
};

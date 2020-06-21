import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  color: black;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
`;

const StyledViews = styled.div`
  display: grid;
  grid-column: 1/2;
  white-space: nowrap;
`;
const StyledCounts = styled.div`
  display: grid;
  grid-column: 2/3;
`;

export default {
  StyledDiv,
  StyledViews,
  StyledCounts,
};

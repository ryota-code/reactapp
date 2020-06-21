import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 2rem;
  line-height: 1rem;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid grey;
  align-items: center;
`;

const StyledText = styled.div`
  display: grid;
  grid-column: 1/2;
  justify-content: right;
`;

const StyledLink = styled.div`
  display: grid;
  grid-column: 2/3;
`;

export default {
  StyledDiv,
  StyledText,
  StyledLink,
};

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #795e44;
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
`;

const StyledButtonDiv = styled.div`
  right: 1rem;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.5rem;
`;

const StyledText = styled.div``;

export default {
  StyledDiv,
  StyledText,
  StyledButtonDiv
};

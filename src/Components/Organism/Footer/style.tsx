import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #795e44;
  padding: 1rem;
  position: relative;
  bottom: 0;
`;

const StyledLinkDiv = styled.div`
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
  StyledLinkDiv
};

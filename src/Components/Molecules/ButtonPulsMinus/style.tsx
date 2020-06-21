import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const StyledPlusButton = styled.div`
  display: grid;
  grid-column: 1/2;
`;

const StyledMinusButton = styled.div`
  display: grid;
  grid-column: 2/3;
`;

export default {
  StyledDiv,
  StyledPlusButton,
  StyledMinusButton
};

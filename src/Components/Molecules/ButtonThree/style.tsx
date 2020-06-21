import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const StyledWomenButton = styled.div`
  display: grid;
  grid-column: 1/2;
`;

const StyledMenButton = styled.div`
  display: grid;
  grid-column: 2/3;
`;

const StyledCoupleButton = styled.div`
  display: grid;
  grid-column: 3/4;
`;

export default {
  StyledDiv,
  StyledWomenButton,
  StyledMenButton,
  StyledCoupleButton,
};

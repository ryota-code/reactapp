import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: grid;
  line-height: 2rem;
  grid-template-columns: 1fr auto;
`;

const StyledTextView = styled.div`
  display: grid;
  grid-column: 1/2;
`;

const LinkList = styled.div`
  display: grid;
  grid-column: 2/3;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const StyledLinkAll = styled.div`
  display: grid;
  grid-column: 1/2;
`;

const StyledLinkEroticVoice = styled.div`
  display: grid;
  grid-column: 2/3;
`;

const StyledLinkMasturbationVoice = styled.div`
  display: grid;
  grid-column: 3/4;
`;

const StyledLinkExperience = styled.div`
  display: grid;
  grid-column: 4/5;
`;

const StyledLinkSecret = styled.div`
  display: grid;
  grid-column: 5/6;
`;

const StyledLinkAnother = styled.div`
  display: grid;
  grid-column: 6/7;
`;

export default {
  StyledDiv,
  StyledTextView,
  LinkList,
  StyledLinkAll,
  StyledLinkEroticVoice,
  StyledLinkMasturbationVoice,
  StyledLinkExperience,
  StyledLinkSecret,
  StyledLinkAnother,
};

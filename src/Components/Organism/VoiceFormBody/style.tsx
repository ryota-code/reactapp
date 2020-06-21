import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 2rem;
  background-color: wheat;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;

const StyledBody = styled.div`
  width: 90%;
  display: grid;
  grid-row-gap: 2rem;
  grid-row: 2/3;
  grid-template-rows: 1fr auto;
  margin: auto;
`;

const StyledSubheader = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;
//ここからフォーム
const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-row: 2/3;
  grid-row-gap: 2rem;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const StyledInputWithTextName = styled.div`
  width: 100%;
  display: grid;
  grid-row: 1/2;
`;

const StyledSelectWithTextSex = styled.div`
  width: 100%;
  display: grid;
  grid-row: 2/3;
`;

const StyledInputWithTextTrip = styled.div`
  width: 100%;
  display: grid;
  grid-row: 3/4;
`;

const StyledSelectWithTextGenre = styled.div`
  width: 100%;
  display: grid;
  grid-row: 4/5;
`;

const StyledInputWithTextTitle = styled.div`
  width: 100%;
  display: grid;
  grid-row: 5/6;
`;

const StyledInputWithTextComment = styled.div`
  width: 100%;
  display: grid;
  grid-row: 6/7;
`;

const StyledSelectWithTextCommentPermit = styled.div`
  width: 100%;
  display: grid;
  grid-row: 7/8;
`;

const StyledInputWithTextFile = styled.div`
  width: 100%;
  display: grid;
  grid-row: 8/9;
`;

const StyledInputWithTextPassword = styled.div`
  width: 100%;
  display: grid;
  grid-row: 9/10;
`;

const StyledButton = styled.div`
  width: 100%;
  display: grid;
  grid-row: 10/11;
`;

// ここまでフォーム

const StyledFooter = styled.div`
  width: 100%;
  display: grid;
  grid-row: 3/4;
`;

export default {
  StyledDiv,
  StyledBody,
  StyledForm,
  StyledSubheader,
  StyledHeader,
  StyledInputWithTextName,
  StyledSelectWithTextSex,
  StyledSelectWithTextGenre,
  StyledInputWithTextTrip,
  StyledInputWithTextTitle,
  StyledInputWithTextComment,
  StyledSelectWithTextCommentPermit,
  StyledInputWithTextFile,
  StyledInputWithTextPassword,
  StyledFooter,
  StyledButton,
};

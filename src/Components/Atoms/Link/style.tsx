import styled from "styled-components";

interface StyledProps {
  fontsize?: string;
  fontWeight?: string;
  fontFamily?: string;
  colorType?: string;
}

const StyledLink = styled.a`
  font-size: ${(props: StyledProps) => props.fontsize};
  font-weight: ${(props: StyledProps) => props.fontWeight};
  font-family: ${(props: StyledProps) => props.fontFamily};
  color: ${(props: StyledProps) => props.colorType};
  margin: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom: 1px solid black;
`;

export default {
  StyledLink
};

import styled from "styled-components";

interface StyledProps {
  fontsize?: string;
  fontWeight?: string;
  fontFamily?: string;
  colorType?: string;
}

const StyledText = styled.p`
  font-size: ${(props: StyledProps) => props.fontsize};
  font-weight: ${(props: StyledProps) => props.fontWeight};
  font-family: ${(props: StyledProps) => props.fontFamily};
  color: ${(props: StyledProps) => props.colorType};
  margin: 0;
  width: 50%;
`;

export default {
  StyledText
};

import styled from "styled-components";

interface StyledProps {
  width?: string;
  height?: string;
}

const StyledImage = styled.img`
  width: ${(props: StyledProps) => props.width};
  height: ${(props: StyledProps) => props.height};
`;

export default {
  StyledImage
};

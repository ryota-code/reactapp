import styled from "styled-components";

interface StyledProps {
  fontsize?: string;
}

const StyledCounter = styled.p`
  font-size: ${(props: StyledProps) => props.fontsize};
`;

export default {
  StyledCounter
};

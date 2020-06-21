import * as React from "react";
import styles from "./style";
import { Text, TextProps } from "../../Atoms/Text/index";
import { Link, LinkProps } from "../../Atoms/Link";

const {
  StyledDiv,
  StyledTextView,
  LinkList,
  StyledLinkAll,
  StyledLinkEroticVoice,
  StyledLinkMasturbationVoice,
  StyledLinkExperience,
  StyledLinkSecret,
  StyledLinkAnother,
} = styles;

export interface CategoryProps {
  textProps: TextProps;
  linkAllProps: LinkProps;
  linkEroticVoiceProps: LinkProps;
  linkMasturbationVoiceProps: LinkProps;
  linkExperienceProps: LinkProps;
  linkSecretProps: LinkProps;
  linkAnotherProps: LinkProps;
}

export const Category: React.FC<CategoryProps> = ({
  textProps,
  linkAllProps,
  linkEroticVoiceProps,
  linkMasturbationVoiceProps,
  linkExperienceProps,
  linkSecretProps,
  linkAnotherProps,
}) => (
  <StyledDiv>
    <StyledTextView>
      <Text {...textProps} />
    </StyledTextView>
    <LinkList>
      <StyledLinkAll>
        <Link {...linkAllProps} />
      </StyledLinkAll>
      <StyledLinkEroticVoice>
        <Link {...linkEroticVoiceProps} />
      </StyledLinkEroticVoice>
      <StyledLinkMasturbationVoice>
        <Link {...linkMasturbationVoiceProps} />
      </StyledLinkMasturbationVoice>
      <StyledLinkExperience>
        <Link {...linkExperienceProps} />
      </StyledLinkExperience>
      <StyledLinkSecret>
        <Link {...linkSecretProps} />
      </StyledLinkSecret>
      <StyledLinkAnother>
        <Link {...linkAnotherProps} />
      </StyledLinkAnother>
    </LinkList>
  </StyledDiv>
);

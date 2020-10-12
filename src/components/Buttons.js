import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
    `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  outline: ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: darkgray;
  border: none;
  color: white;

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;
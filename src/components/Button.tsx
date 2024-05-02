"use client";

import styled from "@emotion/styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  kind?: "accent" | "secondary" | "text";
  status?: "primary" | "success" | "warning";
}

const customProp = (props: any) =>
  props.brand.length ? `${props.brand}-` : "";

const StyledButton = styled.button<ButtonProps>`
  border-radius: ${(props) =>
    `var(--${customProp(
      props
    )}button-size-border-default-border-radius, var(--button-size-border-default-border-radius))`};
  background-color: ${(props) =>
    `var(--${customProp(props)}button-theme-bg-accent-default-fill)`};
  color: ${(props) =>
    `var(--${props.brand}-button-theme-text-on-primary-fill)`};
  padding-block: ${(props) =>
    `var(--${customProp(
      props
    )}button-size-bg-default-vertical-padding, var(--button-size-bg-default-vertical-padding))`};
  padding-inline: ${(props) =>
    `var(--${customProp(
      props
    )}button-size-bg-default-horizontal-padding, var(--button-size-bg-default-horizontal-padding))`};

  border: 1px solid
    ${(props) =>
      `var(--${props.brand}-button-theme-border-${props.kind}-default-border-color)`};
  font-family: ${(props) =>
    `var(--${customProp(
      props
    )}button-size-text-default-font-families, var(--button-size-text-default-font-families))`};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) =>
      `var(--${customProp(props)}button-theme-bg-${
        props.kind
      }-hover-fill, var(--button-theme-bg-accent-hover-fill))`};
    border-color: ${(props) =>
      `var(--${customProp(props)}button-theme-border-${
        props.kind
      }-hover-border-color, var(--button-theme-border-accent-hover-border-color))`};
  }

  &:active {
    background-color: ${(props) =>
      `var(--${customProp(props)}button-theme-bg-${
        props.kind
      }-active-fill, var(--button-theme-bg-accent-active-fill))`};
    border-color: ${(props) =>
      `var(--${customProp(props)}button-theme-border-${
        props.kind
      }-active-border-color, var(--button-theme-border-accent-active-border-color))`};
  }

  &:disabled {
    background-color: ${(props) =>
      `var(--${props.brand}-button-theme-bg-${props.kind}-disabled-fill)`};
    border-color: ${(props) =>
      `var(--${props.brand}-button-theme-border-${props.kind}-disabled-border-color)`};
    color: ${(props) => `var(--${props.brand}-button-theme-text-muted)`};
    cursor: not-allowed;
  }

  &:disabled {
    background-color: var(--color-gray-light);
    color: var(--color-gray);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  brand = "",
  children,
  disabled = false,
  kind = "accent",
  status = undefined,
  ...props
}) => {
  return (
    <StyledButton
      brand={brand}
      disabled={disabled}
      kind={kind}
      status={status}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

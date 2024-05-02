"use client";
import styled from "@emotion/styled";

// Define the type for the props
interface ButtonProps {
  brand: string;
}

const Button = styled.button<ButtonProps>`
  padding: 32px;
  background-color: ${(props) =>
    `var(--${props.brand.toLowerCase()}-brand-color-primary)`};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default Button;

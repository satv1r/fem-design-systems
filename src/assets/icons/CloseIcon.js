import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 3L27 0L15 12L3 0L0 3L12 15L0 27L3 30L15 18L27 30L30 27L18 15L30 3Z"
        fill="black"
      />
    </svg>
  </CloseIconWrapper>
);

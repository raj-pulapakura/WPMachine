import React from "react";
import {
  CapsLockBannerText,
  CapsLockBannerContainer,
} from "./CapsLockBanner.styles";

interface CapsLockBannerProps {}

export const CapsLockBanner: React.FC<CapsLockBannerProps> = ({}) => {
  return (
    <CapsLockBannerContainer>
      <CapsLockBannerText>CAPS LOCK</CapsLockBannerText>
    </CapsLockBannerContainer>
  );
};

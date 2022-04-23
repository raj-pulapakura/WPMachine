import React, { ReactNode } from "react";
import { Container } from "./StatusBar.styles";

interface StatusBarProps {
  children: ReactNode;
}

export const StatusBar: React.FC<StatusBarProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

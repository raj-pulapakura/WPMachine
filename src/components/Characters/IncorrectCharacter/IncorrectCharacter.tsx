import React, { ReactNode } from "react";
import { Character, Container } from "./IncorrectCharacter.styles";

interface IncorrectCharacterProps {
  children: ReactNode;
}

export const IncorrectCharacter: React.FC<IncorrectCharacterProps> = ({
  children,
}) => {
  return (
    <Container>
      <Character>{children}</Character>
    </Container>
  );
};

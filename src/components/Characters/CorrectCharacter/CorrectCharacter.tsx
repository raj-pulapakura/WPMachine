import React, { ReactNode } from "react";
import { Character, Container } from "./CorrectCharacter.styles";

interface CorrectCharacterProps {
  children: ReactNode;
}

export const CorrectCharacter: React.FC<CorrectCharacterProps> = ({
  children,
}) => {
  return (
    <Container>
      <Character>{children}</Character>
    </Container>
  );
};

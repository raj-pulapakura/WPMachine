import React, { ReactNode } from "react";
import { Character, Container } from "./UntouchedCharacter.styles";

interface UntouchedCharacterProps {
  children: ReactNode;
}

export const UntouchedCharacter: React.FC<UntouchedCharacterProps> = ({
  children,
}) => {
  return (
    <Container>
      <Character>{children}</Character>
    </Container>
  );
};

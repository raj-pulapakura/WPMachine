import React, { ReactNode } from "react";
import {
  Character,
  Container,
  Spacing,
  Underline,
} from "./CurrentCharacter.styles";

interface CurrentCharacterProps {
  children: ReactNode;
}

export const CurrentCharacter: React.FC<CurrentCharacterProps> = ({
  children,
}) => {
  return (
    <Container>
      <Character>{children}</Character>
      <Spacing />
      <Underline />
    </Container>
  );
};

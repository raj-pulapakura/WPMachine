import styled from "styled-components/macro";
import { character } from "../../../data/colors";
import { CharacterCommon, ContainerCommon } from "../common";

export const Container = styled.div`
  ${ContainerCommon}

  background-color: ${character.lightred};
`;

export const Character = styled.div`
  ${CharacterCommon}

  color: ${character.darkred};
`;

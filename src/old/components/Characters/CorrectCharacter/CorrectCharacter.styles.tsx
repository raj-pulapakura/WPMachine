import styled from "styled-components/macro";
import { character } from "../../../data/colors";
import { CharacterCommon, ContainerCommon } from "../common";

export const Container = styled.div`
  ${ContainerCommon}

  background-color: ${character.lightgreen};
`;

export const Character = styled.div`
  ${CharacterCommon}

  color: ${character.darkgreen};
`;

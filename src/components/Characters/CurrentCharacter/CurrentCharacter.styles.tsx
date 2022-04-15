import styled from "styled-components/macro";
import { character } from "../../../data/colors";
import { characterSpecs } from "../../../data/constants";
import { CharacterCommon, ContainerCommon } from "../common";

export const Container = styled.div`
  ${ContainerCommon}

  flex-direction: column;
`;

export const Character = styled.div`
  ${CharacterCommon}

  color: ${character.blue}
`;

export const Spacing = styled.div`
  height: 5px;
  width: 100%;
`;

export const Underline = styled.div`
  width: 50%;
  height: 3px;
  border-radius: 3px;
  background-color: ${character.blue};

  animation-name: opacity-fade-in-out;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
`;

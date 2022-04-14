import styled from "styled-components/macro";
import { character } from "../../../data/colors";
import { characterSpecs } from "../../../data/constants";

export const Container = styled.div`
  width: ${characterSpecs.width};
  height: ${characterSpecs.height};

  justify-content: center;
  align-items: center;
  display: inline-flex;

  margin: 0;
  padding: 0;

  //   background-color: ${character.lightred};
`;

export const Character = styled.div`
  font-family: Consolas;
  font-size: 30px;

  //   color: ${character.darkred};

  display: inline;
`;

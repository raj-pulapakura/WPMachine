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
  margin-bottom: 1rem;
  padding: 0;
  border-radius: 0.5rem;

  background-color: ${character.lightgreen};
`;

export const Character = styled.div`
  font-family: Consolas;
  font-size: 30px;

  display: inline;

  color: ${character.darkgreen};
`;

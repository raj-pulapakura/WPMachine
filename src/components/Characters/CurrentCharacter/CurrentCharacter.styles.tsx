import styled from "styled-components/macro";
import { character } from "../../../data/colors";
import { characterSpecs } from "../../../data/constants";

export const Container = styled.div`
  width: ${characterSpecs.width};
  height: ${characterSpecs.height};

  justify-content: center;
  align-items: center;
  display: inline-flex;
  flex-direction: column;

  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
`;

export const Character = styled.div`
  font-family: Consolas;
  font-size: 30px;

  display: inline;
`;

export const Spacing = styled.div`
  height: 5px;
  width: 100%;
`;

export const Underline = styled.div`
  width: 50%;
  height: 5px;
  background-color: ${character.blue};s
`;

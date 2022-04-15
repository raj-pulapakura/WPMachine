import { characterSpecs } from "../../data/constants";

export const ContainerCommon = `
width: ${characterSpecs.width};
  height: ${characterSpecs.height};

  justify-content: center;
  align-items: center;
  display: inline-flex;

  margin: 0 0.1rem 1rem 0;
  padding: 0;
  border-radius: 0.5rem;
`;

export const CharacterCommon = `
  font-family: Consolas;
  font-size: 30px;

  display: inline;
`;

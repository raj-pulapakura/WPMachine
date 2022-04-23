import styled from "styled-components/macro";

export const ArenaContainer = styled.div`
  margin: auto;
  background-color: #fefefe;
  width: 720px;
`;

export const ArenaCharacter = styled.div<{ color?: string }>`
  display: inline;
  font-family: Consolas;
  font-weight: 400;
  color: ${(props) => props.color || "inherit"};
`;

export const ArenaWord = styled.div`
  display: inline-block;
`;

export const ArenaWordWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const GhostWord = styled.div<{ color: string }>`
  display: inline-block;
  color: ${(props) => props.color || "black"};
`;

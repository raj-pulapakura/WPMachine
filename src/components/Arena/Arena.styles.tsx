import styled from "styled-components/macro";

export const ArenaContainer = styled.div`
  margin: auto;
  width: min(90%, 1000px);
  border: solid 2px black;
  padding: 2rem;
`;

export const ArenaCharacter = styled.div<{ color?: string }>`
  display: inline;
  font-family: Consolas;
  font-weight: 400;
  color: ${(props) => props.color || "inherit"};

  position: relative;
`;

export const ArenaWord = styled.div`
  display: inline-block;
`;

export const ArenaWordWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const GhostWord = styled.div<{ color: string }>`
  display: inline-block;
  color: ${(props) => props.color || "black"};
`;

import styled from "styled-components/macro";
import { character } from "../../data/colors";

export const CapsLockBannerContainer = styled.div`
  background-color: ${character.lightyellow};

  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const CapsLockBannerText = styled.h3`
  color: ${character.darkyellow};

  text-transform: capitalize;
  margin: 0;

  font-weight: 700;
`;

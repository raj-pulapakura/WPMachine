import styled from "styled-components/macro";
import { character } from "../../data/colors";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.h3`
  font-weight: 700;
`;

export const StartedBanner = styled.div`
  background-color: ${character.lightgreen};

  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const NotStartedBanner = styled.div`
  background-color: ${character.lightred};

  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const StartedBannerText = styled.h3`
  color: ${character.darkgreen};

  text-transform: capitalize;
  margin: 0;

  font-weight: 700;
`;

export const NotStartedBannerText = styled.h3`
  color: ${character.darkred};

  text-transform: capitalize;
  margin: 0;

  font-weight: 700;
`;

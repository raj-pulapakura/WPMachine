import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  NotStartedBanner,
  NotStartedBannerText,
  StartedBanner,
  StartedBannerText,
} from "./StatusBanner.styles";

interface StatusBannerProps {}

export const StatusBanner: React.FC<StatusBannerProps> = ({}) => {
  const started = useSelector((state: RootState) => state.process.started);

  if (started) {
    return (
      <StartedBanner>
        <StartedBannerText>Started</StartedBannerText>
      </StartedBanner>
    );
  }

  return (
    <NotStartedBanner>
      <NotStartedBannerText>Not Started</NotStartedBannerText>
    </NotStartedBanner>
  );
};

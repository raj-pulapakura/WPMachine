import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatSeconds } from "../../utils/formatSeconds";
import {
  Container,
  NotStartedBanner,
  NotStartedBannerText,
  StartedBanner,
  StartedBannerText,
  Text,
} from "./Timer.styles";

interface TimerProps {}

export const Timer: React.FC<TimerProps> = ({}) => {
  const timeStarted = useSelector(
    (state: RootState) => state.process.timeStarted
  );
  const timeEnded = useSelector((state: RootState) => state.process.timeEnded);

  const started = useSelector((state: RootState) => state.process.started);

  const banner = started ? (
    <StartedBanner>
      <StartedBannerText>Started</StartedBannerText>
    </StartedBanner>
  ) : (
    <NotStartedBanner>
      <NotStartedBannerText>Not Started</NotStartedBannerText>
    </NotStartedBanner>
  );

  if (timeStarted === 0 || timeEnded === 0) {
    return (
      <Container>
        {banner}
        <Text>00:00</Text>
      </Container>
    );
  }

  const elapsedTime = timeEnded - timeStarted; // milliseconds

  const displayTime = Math.round(elapsedTime / 1000);

  const formattedTime = formatSeconds(displayTime);

  return (
    <Container>
      {banner}
      <Text>
        {formattedTime.minutes}:{formattedTime.seconds}
      </Text>
    </Container>
  );
};

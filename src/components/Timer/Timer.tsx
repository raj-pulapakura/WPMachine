import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatSeconds } from "../../utils/formatSeconds";
import { Text } from "./Timer.styles";

interface TimerProps {}

export const Timer: React.FC<TimerProps> = ({}) => {
  const timeStarted = useSelector(
    (state: RootState) => state.timer.timeStarted
  );
  const timeEnded = useSelector((state: RootState) => state.timer.timeEnded);

  if (timeStarted === 0 || timeEnded === 0) {
    return <Text>00:00</Text>;
  }

  const elapsedTime = timeEnded - timeStarted; // milliseconds

  const displayTime = Math.round(elapsedTime / 1000);

  const formattedTime = formatSeconds(displayTime);

  return (
    <Text>
      {formattedTime.minutes}:{formattedTime.seconds}
    </Text>
  );
};

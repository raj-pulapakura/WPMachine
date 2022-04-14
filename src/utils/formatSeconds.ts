export function formatSeconds(seconds: number): {
  minutes: number | string;
  seconds: number | string;
} {
  if (seconds < 60) {
    return {
      minutes: "00",
      seconds: seconds < 10 ? "0" + seconds.toString() : seconds.toString(),
    };
  }

  let minutes: number | string = Math.floor(seconds / 60);
  let leftOverSeconds: number | string = seconds - minutes * 60;

  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }

  if (leftOverSeconds == 0) {
    leftOverSeconds = "00";
  } else if (leftOverSeconds < 10) {
    leftOverSeconds = "0" + leftOverSeconds.toString();
  }

  return { minutes, seconds: leftOverSeconds };
}

export function separateSeconds(seconds: number) {
  let minutes = Math.floor(seconds / 60);
  let leftOverSeconds = seconds - minutes * 60;

  return { minutes, seconds: leftOverSeconds };
}

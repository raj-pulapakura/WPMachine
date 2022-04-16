/*

WPM = Total Number of Words / Minutes Taken

*/

export function calculateWPM(
  totalNumberOfWords: number,
  { minutes, seconds }: { minutes: number; seconds: number }
) {
  /*

    Formalizing minutes.

        5 minute + 30 seconds

    Will become:

        5.5 minutes

  */
  const formalizedMinutes = minutes + seconds / 60;

  return Math.round(totalNumberOfWords / formalizedMinutes);
}

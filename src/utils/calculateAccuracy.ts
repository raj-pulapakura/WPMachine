/* 

Accuracy = Number of Correct Chars / Total Number of Chars * 100

*/

export function calculateAccuracy(
  numberOfIncorrectChars: number,
  totalNumberOfChars: number
) {
  return Math.round(
    ((totalNumberOfChars - numberOfIncorrectChars) / totalNumberOfChars) * 100
  );
}

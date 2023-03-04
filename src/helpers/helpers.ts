export function stringToSeconds(timeStr: string) {
  const timeArr = timeStr.split(':');
  const hours = parseInt(timeArr[0], 10);
  const minutes = parseInt(timeArr[1], 10);
  const seconds = parseInt(timeArr[2], 10);

  return hours * 3600 + minutes * 60 + seconds;
}

export function secondsToTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;

  const formattedTime = `${hours.toString().padStart(2, '0')} hr : ${minutes
    .toString()
    .padStart(2, '0')} min : ${seconds.toString().padStart(2, '0')} sec`;

  return formattedTime;
}
type heightCalculatorArgs = {
  isInInitialState: boolean;
  time: number;
  timerCount: number;
};

export function heightCalculator({
  isInInitialState,
  time,
  timerCount,
}: heightCalculatorArgs): number {
  let currentHeight = 0;

  if (!isInInitialState) {
    const percentage = ((time - timerCount) / time) * 100;

    currentHeight = percentage > 100 ? 100 : percentage;
  }

  return currentHeight;
}

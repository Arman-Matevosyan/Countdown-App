export function secondsToTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;

  const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes
    .toString()
    .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

  return formattedTime;
}
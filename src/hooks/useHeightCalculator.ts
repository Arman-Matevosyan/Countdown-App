import { useEffect, useState } from 'react';

type Props = {
  isInInitialState: boolean;
  time: number;
  timerCount: number;
};

const useHeightCalculator = ({ isInInitialState, time, timerCount }: Props) => {
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    if (isInInitialState) {
      setCurrentHeight(0);
    } else {
      const percentage = ((time - timerCount) / time) * 100;

      setCurrentHeight(percentage > 100 ? 100 : percentage);
    }
  }, [isInInitialState, timerCount, time]);

  return { currentHeight };
};

export default useHeightCalculator;

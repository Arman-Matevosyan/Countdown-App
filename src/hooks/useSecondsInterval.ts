import { useEffect } from 'react';

const interval =
  (delay = 0) =>
  (callback: any) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

const useSecondsInterval = interval(1000);

export default useSecondsInterval;

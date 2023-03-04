import { stringToSeconds } from '../../helpers';
import { heightCalculator, secondsToTime } from '../../helpers/helpers';

describe('helpers.ts', () => {
  describe('stringToSeconds', () => {
    test('should convert a valid time string to seconds', () => {
      expect(stringToSeconds('00:01:30')).toBe(90);
      expect(stringToSeconds('01:00:00')).toBe(3600);
      expect(stringToSeconds('00:00:45')).toBe(45);
    });
  });

  describe('secondsToTime', () => {
    test('should convert total seconds to formatted time string', () => {
      expect(secondsToTime(60)).toStrictEqual('00 hr : 01 min : 00 sec');
      expect(secondsToTime(3600)).toStrictEqual('01 hr : 00 min : 00 sec');
      expect(secondsToTime(3661)).toStrictEqual('01 hr : 01 min : 01 sec');
    });

    test('should handle 0 seconds correctly', () => {
      expect(secondsToTime(0)).toStrictEqual('00 hr : 00 min : 00 sec');
    });
  });

  describe('heightCalculator', () => {
    test('should return `0` if `isInInitialState` is `true`', () => {
      const args = { isInInitialState: true, time: 10, timerCount: 5 };

      expect(heightCalculator(args)).toBe(0);
    });

    test('should return the correct height based on timer count and time', () => {
      const args = { isInInitialState: false, time: 10, timerCount: 5 };

      expect(heightCalculator(args)).toBe(50);

      const args2 = { isInInitialState: false, time: 10, timerCount: 10 };

      expect(heightCalculator(args2)).toBe(0);

      const args3 = { isInInitialState: false, time: 20, timerCount: 15 };

      expect(heightCalculator(args3)).toBe(25);
    });
  });
});

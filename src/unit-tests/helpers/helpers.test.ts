import { secondsToTime } from '../../helpers';

describe('helpers.ts', () => {
  describe('secondsToTime', () => {
    test('should convert the number aka seconds into human readable format', () => {
      const value = secondsToTime(15);

      expect(value).toBe('00 : 00 : 15');
    });

    test('should convert the number to human readble format even if the number is way too long', () => {
      const value = secondsToTime(123456789);

      expect(value).toBe('34293 : 33 : 09');
    });
  });
});

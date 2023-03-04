import { stringToSeconds } from '../../helpers';

describe('helpers.ts', () => {
  describe('stringToSeconds', () => {
    test('should convert the number aka seconds into human readable format', () => {
      const value = stringToSeconds(15);

      expect(value).toBe('00 hr : 00 min : 15 sec');
    });

    test('should convert the number to human readble format even if the number is way too long', () => {
      const value = stringToSeconds(123456789);

      expect(value).toBe('34293 hr : 33 min : 09 sec');
    });
  });
});

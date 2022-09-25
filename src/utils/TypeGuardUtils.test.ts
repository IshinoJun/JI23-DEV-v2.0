import { isString } from '@/utils/TypeGuardUtils';

describe('TypeGuardUtils', () => {
  const value1 = 'test01';
  const value2 = 0;
  const value3 = true;
  const value4 = Symbol('key');
  const value5 = BigInt(3145);
  const value6 = null;
  const value7 = undefined;
  const value8 = [1, 2, 3];
  const value9 = (): void => {};
  const value10 = { key: 'value' };
  const value11 = ['A', 'B', ''];
  const value12 = ['A', 'B', '', null];

  describe('isString()', () => {
    it('to be truthy', () => {
      expect(isString(value1)).toBeTruthy();
    });
    it('to be falsy', () => {
      [
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
      ].forEach((v) => expect(isString(v)).toBeFalsy());
    });
  });
});

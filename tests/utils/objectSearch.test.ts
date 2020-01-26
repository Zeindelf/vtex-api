import { objectSearch } from '../../src/utils';

describe('objectSearch()', () => {
  const obj = [{
    id: 0,
    name: 'Key 0',
    children: [{
      id: 1,
      name: 'Key 1',
      children: [{
        id: 2,
        name: 'Key 2',
        item: [{
          id: 3,
          name: 'Key 3',
          item: [{
            id: 4,
            name: 'Key 4',
          }],
        }],
      }],
    }],
  }];

  it('should find an nested object by key => value', () => {
    expect.assertions(1);
    expect(objectSearch(obj, { id: 4 })).toStrictEqual({ id: 4, name: 'Key 4' });
  });

  it('should return false to a non match key => value', () => {
    expect.assertions(1);
    expect(objectSearch(obj, { a: 'A' })).toStrictEqual(false);
  });
});

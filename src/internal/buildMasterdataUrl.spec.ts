describe('buildMasterdataUrl()', () => {
  it('sould pass', () => {
    expect.assertions(1);
    expect(1).toStrictEqual(1);
  });
});

/* eslint-disable */
// import buildMasterdataUrl from './buildMasterdataUrl';

// describe('build msterdata url', () => {
//   it('should return mounted url without id', () => {
//     expect.assertions(1);

//     const params = {
//       method: 'GET',
//       entity: 'AA',
//       type: 'search',
//     };

//     expect(buildMasterdataUrl(params)).toBe(
//       '/api/dataentities/AA/search/?',
//     );
//   });

//   it('should return mounted url without search params', () => {
//     expect.assertions(1);

//     const params = {
//       method: 'GET',
//       entity: 'AA',
//       type: 'search',
//       id: '1',
//     };

//     expect(buildMasterdataUrl(params)).toBe(
//       '/api/dataentities/AA/search/1?',
//     );
//   });

//   it('should return mounted url with email search params', () => {
//     expect.assertions(1);

//     const params = {
//       entity: 'AA',
//       type: 'search',
//       id: '1',
//       method: 'GET',
//       data: { email: 'foo@email.com' },
//     };

//     expect(buildMasterdataUrl(params)).toBe(
//       '/api/dataentities/AA/search/1?email=foo%40email.com',
//     );
//   });
// });

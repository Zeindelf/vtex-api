import 'whatwg-fetch';

import decode from '../../src/utils/decode';
import masterdataRequest from '../../src/services/masterdataRequest';

const users = [
  {
    id: '1',
    email: 'john@doe.com',
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: '2',
    email: 'jane@doe.com',
    firstName: 'Jane',
    lastName: 'Doe',
  },
];

describe('masterdataRequest()', () => {
  describe('stubbing successful response', () => {
    beforeEach(() => {
      function mockedResponse(...mockedOpts: any) {
        const [url, config] = mockedOpts;
        const [, params] = url.split('?');
        const matchedUser = users.find((user) => user.email === decode(params).email);

        const res = new Response(JSON.stringify(matchedUser), {
          status: 200,
          statusText: 'OK',
          headers: config.headers,
        });

        return Promise.resolve(res);
      }

      jest.spyOn(window, 'fetch').mockImplementation(mockedResponse);
    });

    it('should return user data', async () => {
      expect.assertions(3);

      const response = await masterdataRequest({
        data: { email: 'john@doe.com' },
        entity: 'CL',
        type: 'documents',
        method: 'GET',
      });

      expect(response.status).toStrictEqual(200);
      expect(response.statusText).toStrictEqual('OK');
      expect(response.json).toStrictEqual(users[0]);
    });

    it('should return user data with auth keys', async () => {
      expect.assertions(5);

      const response = await masterdataRequest({
        data: { email: 'jane@doe.com' },
        entity: 'CL',
        type: 'documents',
        method: 'GET',
        auth: { appKey: '123', appToken: 'abc' },
      });

      expect(response.status).toStrictEqual(200);
      expect(response.statusText).toStrictEqual('OK');
      expect(response.json).toStrictEqual(users[1]);
      expect(response.headers.get('x-vtex-api-appKey')).toStrictEqual('123');
      expect(response.headers.get('x-vtex-api-appToken')).toStrictEqual('abc');
    });
  });
});

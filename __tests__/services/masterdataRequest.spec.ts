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
        const [url] = mockedOpts;
        const [, params] = url.split('?');
        const matchedUser = users.find((user) => user.email === decode(params).email);
        const res = new Response(JSON.stringify(matchedUser), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-type': 'application/json',
          },
        });

        return Promise.resolve(res);
      }

      jest.spyOn(window, 'fetch').mockImplementation(mockedResponse);
    });

    it('should return user data', async () => {
      expect.assertions(3);

      const response = await masterdataRequest({
        data: { email: 'jane@doe.com' },
        entity: 'CL',
        type: 'documents',
        method: 'GET',
      });

      expect(response.status).toStrictEqual(200);
      expect(response.statusText).toStrictEqual('OK');
      expect(response.json).toStrictEqual(users[1]);
    });
  });
});

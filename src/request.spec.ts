import 'whatwg-fetch';

import request from './request';

describe('request()', () => {
  describe('stubbing successful response', () => {
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });

      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
    });

    it('should format the response correctly', async () => {
      expect.assertions(1);

      try {
        const { hello } = await request('/success-url');

        expect(hello).toBe('world');
      } finally { /** */ }
    });
  });

  describe('stubbing 204 response', () => {
    beforeEach(() => {
      const res = new Response('', {
        status: 204,
        statusText: 'No Content',
      });

      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
    });

    it('should return null on 204 response', async () => {
      expect.assertions(1);

      try {
        const response = await request('/success-url');
        expect(response).toBeNull();
      } finally { /** */ }
    });
  });

  describe('stubbing error response', () => {
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json',
        },
      });

      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
    });

    /* eslint-disable jest/no-try-expect */
    it('should catch errors', async () => {
      expect.assertions(2);

      try {
        await request('/fail-url');
      } catch ({ response }) {
        const { status, statusText } = response;

        expect(status).toBe(404);
        expect(statusText).toBe('Not Found');
      }
    });
  });
});

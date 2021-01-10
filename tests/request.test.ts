import 'whatwg-fetch';

import request from '../src/request';

describe('request()', () => {
  describe('stubbing successful response', () => {
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-type': 'application/json',
        },
      });

      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
    });

    it('should format the response correctly', async () => {
      expect.assertions(3);

      try {
        const { json, status, statusText } = await request('/success-url');

        expect(json.hello).toBe('world');
        expect(status).toBe(200);
        expect(statusText).toBe('OK');
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
      expect.assertions(3);

      try {
        const { json, status, statusText } = await request('/success-url');
        expect(json).toBeNull();
        expect(status).toBe(204);
        expect(statusText).toBe('No Content');
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

        expect(status).toBe(404); // eslint-disable-line
        expect(statusText).toBe('Not Found'); // eslint-disable-line
      }
    });
  });
});

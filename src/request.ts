/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = async (response: IResponse): Promise<IResponse> => {
  const { status, statusText, headers } = response;

  if (status === 204 || status === 205) {
    return {
      status, statusText, headers, json: null,
    };
  }

  const json = await response.json();
  return {
    status, statusText, headers, json,
  };
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = (response: IResponse): IResponse => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  Object.assign(error, { response });

  throw error;
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to 'fetch'
 *
 * @module general
 *
 * @return {object}           The response data
 */
const request = (url: string, options?: {}): Promise<IResponse> => fetch(url, options)
  .then(checkStatus)
  .then(parseJSON);

export default request;

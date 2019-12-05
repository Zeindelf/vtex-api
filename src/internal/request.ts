type Response = {
  status: number,
  statusText: string;
  json(): Promise<any>;
  json<T>(): Promise<T>;
  text(): Promise<string>;
};

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = (response: Response) => {
  const { status } = response;

  return status === 204 || status === 205 ? { ok: true } : response.json();
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = (response: Response) => {
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
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
const request = (url: string, options: {}): Promise<any> => {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
};

export default request;

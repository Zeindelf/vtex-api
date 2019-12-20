import resultOk from './internal/resultOk';
import head from './internal/head';

import getByEmail from './services/getByEmail';
import get from './services/get';

/**
 * Get User by mail
 *
 * @param {string} email - The email of the user
 * @param {array} [fields] - A list of fields to retrieve
 *
 * @return {promise}
 */
const getUser = async (email: string, fields: []): Promise<IResponse> => {
  const { json } = await getByEmail(email);

  return resultOk(json)
    ? get(head(json).id, fields, 'CL')
    : Promise.reject(new Error('User doesn\'t exist'));
};

export default getUser;

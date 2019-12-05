import head from './internal/head';
import resultOk from './internal/resultOk';

import getByEmail from './getByEmail';
import partialUpdate from './partialUpdate';
import insert from './insert';

/**
 * Update a user if the email exists, or insert a new one if it doesn't
 *
 * @param {string} email The email of the user
 * @param {object} data  The data that will be updated.
 *
 * @return {promise}
 */
const insertUpdateUser = async (email: string, data: {}): Promise<any> => {
  const result = await getByEmail(email);

  return resultOk(result)
    ? partialUpdate(head(result).id, data, 'CL')
    : insert({ email, ...data }, 'CL');
};

export default insertUpdateUser;

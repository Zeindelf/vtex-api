import isEmail from '../internal/isEmail';

import searchDocument from '../searchDocument';

/**
 * Performs a search by email
 *
 * @param {string} email - The email that will be searched
 * @param {string} entity - The entity where the search will be performed
 *
 * @return {promise}
 */
const getByEmail = (email: string): Promise<any> => {
  if (!isEmail(email)) {
    return Promise.reject(new Error('Invalid email'));
  }

  return searchDocument({ email }, ['email', 'id'], 'CL', 1, 0, null);
};

export default getByEmail;

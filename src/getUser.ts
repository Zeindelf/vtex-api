import isEmail from './utils/isEmail';

import searchDocument from './searchDocument';

/**
 * Performs a search by email
 *
 * @param {string} email The email that will be searched
 * @param {araay} fields The Fields that will be retrieved
 *
 * @module masterdata
 *
 * @example
 *  const response = await getUser({
 *    email: 'wellington.barreto@enext.com.br',
 *    fields: ['email', 'firstName', 'lastName', ...],
 *  });
 *
 * @return {promise}
 */
const getUser = ({
  email, fields, auth, accountName, an,
}: IGetUserArgs): Promise<IResponse> => {
  if (!isEmail(email)) return Promise.reject(new Error('Invalid email'));

  return searchDocument({
    search: { email },
    fields,
    entity: 'CL',
    offset: 0,
    limit: 1,
    auth,
    accountName,
    an,
  });
};

export default getUser;
